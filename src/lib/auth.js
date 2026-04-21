'use client';
import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';
import { doc, getDoc, setDoc, collection, query, where, getDocs } from 'firebase/firestore';
import { auth, db, googleProvider } from './firebase';

const ADMIN_EMAIL = process.env.NEXT_PUBLIC_ADMIN_EMAIL || 'mitul307@gmail.com';

const AuthContext = createContext({});

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [userRole, setUserRole] = useState(null); // 'admin' | 'student' | null
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        try {
          // Check if user exists in Firestore
          const userDocRef = doc(db, 'users', firebaseUser.uid);
          const userDoc = await getDoc(userDocRef);

          if (userDoc.exists()) {
            const userData = userDoc.data();
            setUser({ uid: firebaseUser.uid, ...userData });
            setUserRole(userData.role);
          } else {
            // New user — check whitelist or admin
            const isAdmin = firebaseUser.email === ADMIN_EMAIL;
            const isWhitelisted = await checkWhitelist(firebaseUser.email);

            if (isAdmin || isWhitelisted) {
              const role = isAdmin ? 'admin' : 'student';
              const userData = {
                email: firebaseUser.email,
                displayName: firebaseUser.displayName,
                photoURL: firebaseUser.photoURL,
                role,
                createdAt: new Date().toISOString(),
              };
              await setDoc(userDocRef, userData);
              setUser({ uid: firebaseUser.uid, ...userData });
              setUserRole(role);

              // Initialize student data
              if (role === 'student') {
                await setDoc(doc(db, 'studentData', firebaseUser.uid), {
                  responses: {},
                  completedSteps: {},
                  createdAt: new Date().toISOString(),
                });
              }
            } else {
              // Not whitelisted — sign out
              await signOut(auth);
              setError('Your email is not registered. Please contact the admin.');
              setUser(null);
              setUserRole(null);
            }
          }
        } catch (err) {
          console.error('Auth error:', err);
          setError('Something went wrong. Please try again.');
        }
      } else {
        setUser(null);
        setUserRole(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  async function checkWhitelist(email) {
    try {
      const whitelistRef = collection(db, 'whitelist');
      const q = query(whitelistRef, where('email', '==', email.toLowerCase()));
      const snapshot = await getDocs(q);
      return !snapshot.empty;
    } catch {
      return false;
    }
  }

  async function login() {
    setError(null);
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      if (err.code !== 'auth/popup-closed-by-user') {
        setError('Login failed. Please try again.');
      }
    }
  }

  async function logout() {
    await signOut(auth);
    setUser(null);
    setUserRole(null);
  }

  return (
    <AuthContext.Provider value={{ user, userRole, loading, error, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
