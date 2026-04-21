import { doc, getDoc, setDoc, updateDoc, collection, getDocs, addDoc, deleteDoc, query, orderBy } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, storage } from './firebase';

// ─── Student Data ───

export async function getStudentData(uid) {
  const docRef = doc(db, 'studentData', uid);
  const snap = await getDoc(docRef);
  if (snap.exists()) return snap.data();
  // Initialize if missing
  const initial = { responses: {}, completedSteps: {}, createdAt: new Date().toISOString() };
  await setDoc(docRef, initial);
  return initial;
}

export async function updateResponses(uid, activityId, data) {
  const docRef = doc(db, 'studentData', uid);
  await updateDoc(docRef, {
    [`responses.${activityId}`]: data,
    lastUpdated: new Date().toISOString(),
  });
}

export async function toggleStep(uid, stepKey, done) {
  const docRef = doc(db, 'studentData', uid);
  await updateDoc(docRef, {
    [`completedSteps.${stepKey}`]: done,
    lastUpdated: new Date().toISOString(),
  });
}

// ─── File Uploads ───

export async function uploadPresentation(uid, weekId, file) {
  const timestamp = Date.now();
  const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
  const path = `uploads/${uid}/week_${weekId}/${timestamp}_${safeName}`;
  const storageRef = ref(storage, path);
  await uploadBytes(storageRef, file);
  const url = await getDownloadURL(storageRef);

  // Save reference in Firestore
  const docRef = doc(db, 'studentData', uid);
  const snap = await getDoc(docRef);
  const data = snap.data();
  const uploads = data.uploads || {};
  const weekUploads = uploads[`week_${weekId}`] || [];
  weekUploads.push({ name: file.name, url, uploadedAt: new Date().toISOString(), path });
  uploads[`week_${weekId}`] = weekUploads;
  await updateDoc(docRef, { uploads });
  return { name: file.name, url };
}

// ─── Admin: Whitelist ───

export async function getWhitelist() {
  const snap = await getDocs(collection(db, 'whitelist'));
  return snap.docs.map(d => ({ id: d.id, ...d.data() }));
}

export async function addToWhitelist(email, addedBy) {
  await addDoc(collection(db, 'whitelist'), {
    email: email.toLowerCase().trim(),
    addedBy,
    addedAt: new Date().toISOString(),
  });
}

export async function removeFromWhitelist(docId) {
  await deleteDoc(doc(db, 'whitelist', docId));
}

// ─── Admin: View All Students ───

export async function getAllStudents() {
  const usersSnap = await getDocs(collection(db, 'users'));
  const students = [];

  for (const userDoc of usersSnap.docs) {
    const userData = userDoc.data();
    if (userData.role !== 'student') continue;

    let studentData = {};
    try {
      const sdSnap = await getDoc(doc(db, 'studentData', userDoc.id));
      if (sdSnap.exists()) studentData = sdSnap.data();
    } catch (e) {}

    students.push({
      uid: userDoc.id,
      ...userData,
      studentData,
    });
  }

  return students;
}

export async function getStudentDetail(uid) {
  const userSnap = await getDoc(doc(db, 'users', uid));
  const dataSnap = await getDoc(doc(db, 'studentData', uid));
  return {
    user: userSnap.exists() ? userSnap.data() : null,
    data: dataSnap.exists() ? dataSnap.data() : null,
  };
}
