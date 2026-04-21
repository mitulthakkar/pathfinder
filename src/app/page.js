'use client';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const { user, userRole, loading, error, login } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (user && userRole === 'admin') router.push('/admin');
    else if (user && userRole === 'student') router.push('/dashboard');
  }, [user, userRole, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-pulse text-gray-400">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-gradient-to-br from-slate-50 to-orange-50">
      <div className="w-full max-w-md text-center">
        {/* Logo */}
        <div className="mb-2">
          <span className="text-5xl">🧭</span>
        </div>
        <h1 className="font-display text-4xl font-extrabold gradient-text mb-2">
          Pathfinder
        </h1>
        <p className="text-gray-500 text-sm mb-1">
          15-Week Career & Life Design Program
        </p>
        <p className="text-gray-400 text-xs mb-8">
          Discover yourself. Explore the world. Design your future.
        </p>

        {/* Phase overview */}
        <div className="grid grid-cols-2 gap-3 mb-8 text-left">
          {[
            { icon: '🔍', label: 'Phase 1', title: 'Who Am I?', weeks: 'Weeks 1-3', color: 'border-orange-200 bg-orange-50' },
            { icon: '🌍', label: 'Phase 2', title: "What's Out There?", weeks: 'Weeks 4-8', color: 'border-blue-200 bg-blue-50' },
            { icon: '📣', label: 'Phase 3', title: 'Business Reality', weeks: 'Weeks 9-11', color: 'border-amber-200 bg-amber-50' },
            { icon: '🗺️', label: 'Phase 4', title: 'What Do I Do?', weeks: 'Weeks 12-15', color: 'border-purple-200 bg-purple-50' },
          ].map((p, i) => (
            <div key={i} className={`p-3 rounded-xl border ${p.color}`}>
              <div className="text-lg mb-1">{p.icon}</div>
              <div className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">{p.label}</div>
              <div className="text-sm font-semibold text-gray-800">{p.title}</div>
              <div className="text-[10px] text-gray-400">{p.weeks}</div>
            </div>
          ))}
        </div>

        {/* Login */}
        <button
          onClick={login}
          className="w-full flex items-center justify-center gap-3 bg-white border-2 border-gray-200 rounded-xl px-6 py-3.5 text-sm font-semibold text-gray-700 hover:border-gray-300 hover:shadow-md transition-all"
        >
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
            <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
            <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
            <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
          </svg>
          Sign in with Google
        </button>

        {error && (
          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-xl text-sm text-red-600">
            {error}
          </div>
        )}

        <p className="mt-6 text-[11px] text-gray-300">
          Only registered students can access this program.
          <br />Contact your admin for access.
        </p>
      </div>
    </div>
  );
}
