'use client';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { getStudentData } from '@/lib/db';
import { WEEKS, PHASE_COLORS, MENTORS, calcWeekProgress, calcTotalProgress } from '@/lib/courseData';

function ProgressRing({ progress, size = 44, stroke = 4, color }) {
  const r = (size - stroke) / 2, c = 2 * Math.PI * r, o = c - (progress / 100) * c;
  return (
    <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke="rgba(0,0,0,0.06)" strokeWidth={stroke} />
      <circle cx={size/2} cy={size/2} r={r} fill="none" stroke={color} strokeWidth={stroke}
        strokeDasharray={c} strokeDashoffset={o} strokeLinecap="round" style={{ transition: 'stroke-dashoffset 0.5s' }} />
    </svg>
  );
}

export default function Dashboard() {
  const { user, userRole, loading, logout } = useAuth();
  const router = useRouter();
  const [studentData, setStudentData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);

  useEffect(() => {
    if (!loading && !user) router.push('/');
    if (!loading && userRole === 'admin') router.push('/admin');
  }, [user, userRole, loading, router]);

  useEffect(() => {
    if (user) {
      getStudentData(user.uid).then(d => { setStudentData(d); setDataLoading(false); });
    }
  }, [user]);

  if (loading || dataLoading) return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>;
  if (!user) return null;

  const totalProgress = calcTotalProgress(studentData);

  return (
    <div className="max-w-2xl mx-auto px-4 py-6 min-h-screen">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="font-display text-2xl font-extrabold gradient-text">Pathfinder</h1>
          <p className="text-xs text-gray-400">15-week career & life design</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs font-semibold text-gray-700">{user.displayName}</div>
            <button onClick={logout} className="text-[10px] text-gray-400 hover:text-red-400 transition">Sign out</button>
          </div>
          {user.photoURL && <img src={user.photoURL} alt="" className="w-8 h-8 rounded-full" />}
        </div>
      </div>

      {/* Overall Progress */}
      <div className="flex items-center gap-4 p-4 bg-gradient-to-r from-brand-dark to-[#2d2b55] rounded-2xl mb-6 text-white">
        <div className="relative">
          <ProgressRing progress={totalProgress} size={56} stroke={4} color="#FFD166" />
          <span className="absolute inset-0 flex items-center justify-center text-sm font-bold">{totalProgress}%</span>
        </div>
        <div>
          <div className="font-bold">Overall Progress</div>
          <div className="text-xs opacity-70">
            {totalProgress === 0 ? 'Ready to begin your journey' : totalProgress < 25 ? 'Phase 1: Discovering yourself' : totalProgress < 50 ? 'Phase 2: Exploring the world' : totalProgress < 70 ? 'Phase 3: Understanding business' : totalProgress < 95 ? 'Phase 4: Making decisions' : 'Program complete!'}
          </div>
        </div>
      </div>

      {/* Mentor strip */}
      <div className="flex gap-2 mb-6 overflow-x-auto scrollbar-hide pb-1">
        {Object.entries(MENTORS).map(([k, m]) => (
          <div key={k} className="flex items-center gap-2 px-3 py-2 bg-white rounded-lg border shrink-0" style={{ borderColor: m.color + '33' }}>
            <div className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white font-bold" style={{ background: m.color }}>{m.name[0]}</div>
            <div>
              <div className="text-[11px] font-semibold">{m.name}</div>
              <div className="text-[9px] text-gray-400">{m.skill}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Weeks by Phase */}
      {[1, 2, 3, 4].map(phaseNum => {
        const phase = PHASE_COLORS[phaseNum];
        const phaseWeeks = WEEKS.filter(w => w.phase === phaseNum);
        return (
          <div key={phaseNum} className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 rounded" style={{ background: phase.accent }} />
              <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: phase.accent }}>
                {phase.label}: {phase.title}
              </h2>
            </div>
            <div className="flex flex-col gap-2">
              {phaseWeeks.map(w => {
                const prog = calcWeekProgress(w, studentData);
                const mentor = MENTORS[w.mentor.key];
                return (
                  <button key={w.id} onClick={() => router.push(`/week/${w.id}`)}
                    className="flex items-center gap-3 p-3 bg-white border-2 border-gray-100 rounded-xl hover:border-gray-200 hover:shadow-sm transition-all w-full text-left">
                    <div className="relative shrink-0">
                      <ProgressRing progress={prog} size={42} stroke={3.5} color={w.color} />
                      <span className="absolute inset-0 flex items-center justify-center text-base">{w.icon}</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: phase.accent }}>Week {w.id}</div>
                      <div className="text-sm font-semibold text-gray-800 truncate">{w.title}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5 line-clamp-1">{w.gain}</div>
                      <div className="text-[10px] text-gray-300 mt-0.5">Mentor: {mentor.emoji} {mentor.name}</div>
                    </div>
                    <div className="text-xs font-semibold shrink-0" style={{ color: w.color }}>{prog}%</div>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      <div className="text-center py-8 text-[10px] text-gray-300">Progress saves automatically.</div>
    </div>
  );
}
