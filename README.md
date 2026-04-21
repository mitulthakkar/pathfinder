# 🧭 Pathfinder — 15-Week Career & Life Design Program

A guided course platform for teenagers to explore careers, understand business, and design their future. Built with Next.js, Firebase, and deployed on Vercel.

## Architecture

- **Frontend**: Next.js 14 (App Router) + Tailwind CSS
- **Auth**: Firebase Authentication (Google Sign-In)
- **Database**: Cloud Firestore
- **File Storage**: Firebase Storage (presentation uploads)
- **Hosting**: Vercel

## Setup Guide

### 1. Firebase Project Setup

1. Go to [Firebase Console](https://console.firebase.google.com)
2. Create a new project called `pathfinder`
3. Enable **Authentication** → Sign-in method → **Google** → Enable
4. Create **Cloud Firestore** database (start in production mode)
5. Create **Firebase Storage** bucket
6. Go to Project Settings → General → Add a **Web App**
7. Copy the Firebase config values

### 2. Firestore Security Rules

In Firebase Console → Firestore → Rules, paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    // Whitelist: only admin can read/write
    match /whitelist/{email} {
      allow read: if request.auth != null;
      allow write: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
    
    // Users: anyone authenticated can read their own, admin can read all
    match /users/{userId} {
      allow read: if request.auth.uid == userId || 
                     get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
      allow create: if request.auth.uid == userId;
      allow update: if request.auth.uid == userId;
    }
    
    // Student data: students own their data, admin can read all
    match /studentData/{userId} {
      allow read, write: if request.auth.uid == userId;
      allow read: if get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == 'admin';
    }
  }
}
```

### 3. Storage Security Rules

In Firebase Console → Storage → Rules:

```
rules_version = '2';
service firebase.storage {
  match /b/{bucket}/o {
    match /uploads/{userId}/{allPaths=**} {
      allow read: if request.auth != null;
      allow write: if request.auth.uid == userId 
                   && request.resource.size < 50 * 1024 * 1024;
    }
  }
}
```

### 4. Seed the Admin User

After first deployment, you need to manually create the admin document in Firestore:

1. Go to Firestore Console
2. Create collection `users`
3. After mitul307@gmail.com signs in for the first time, find their document
4. Add field: `role: "admin"`

OR run this in browser console after signing in as mitul307@gmail.com:
```js
// The app will auto-create the admin role for mitul307@gmail.com
```

### 5. Environment Variables

Copy `.env.local.example` to `.env.local` and fill in your Firebase config:

```bash
cp .env.local.example .env.local
```

### 6. Local Development

```bash
npm install
npm run dev
```

### 7. Deploy to Vercel

1. Push to GitHub
2. Go to [Vercel](https://vercel.com) → Import Project
3. Add all environment variables from `.env.local`
4. Deploy

### 8. Add Students (Admin)

1. Sign in as mitul307@gmail.com
2. Go to Admin panel
3. Add student email addresses
4. Students can now sign in with those Google accounts

## File Structure

```
src/
├── app/
│   ├── layout.js          # Root layout with AuthProvider
│   ├── page.js            # Landing/Login page
│   ├── dashboard/page.js  # Student dashboard (15-week overview)
│   ├── week/[id]/page.js  # Individual week view
│   └── admin/page.js      # Admin panel
├── lib/
│   ├── firebase.js        # Firebase initialization
│   ├── auth.js            # Auth context & hooks
│   ├── db.js              # Firestore helpers
│   └── courseData.js       # All 15 weeks of content
└── components/
    ├── AuthProvider.js     # Auth context provider
    ├── WeekView.js         # Week detail component
    ├── TemplateRenderer.js # Form template components
    └── AdminPanel.js       # Admin dashboard component
```
