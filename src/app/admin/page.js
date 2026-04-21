'use client';
import { useAuth } from '@/lib/auth';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import {
  getWhitelist, addToWhitelist, removeFromWhitelist,
  getAllStudents, getStudentDetail
} from '@/lib/db';
import {
  WEEKS, MENTORS, PHASE_COLORS,
  getWeekSteps, calcWeekProgress, calcTotalProgress
} from '@/lib/courseData';

// ─── Shared UI ────────────────────────────────────────────────
function ProgressBar({ progress, color, height = 6 }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 rounded-full bg-gray-100 overflow-hidden" style={{ height }}>
        <div className="h-full rounded-full transition-all duration-500"
          style={{ width: `${progress}%`, background: color || '#8338EC' }} />
      </div>
      <span className="text-xs font-bold w-8 text-right" style={{ color: color || '#8338EC' }}>
        {progress}%
      </span>
    </div>
  );
}

function Badge({ label, color, bg }) {
  return (
    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full"
      style={{ color, background: bg }}>
      {label}
    </span>
  );
}

function Card({ children, className = '' }) {
  return (
    <div className={`bg-white rounded-2xl border border-gray-100 shadow-sm ${className}`}>
      {children}
    </div>
  );
}

// ─── Tab: Dashboard ───────────────────────────────────────────
function DashboardTab({ students }) {
  const phases = [1, 2, 3, 4];
  const phaseWeeks = (p) => WEEKS.filter(w => w.phase === p);

  // Aggregate: avg completion per week across all students
  const weekAvg = (weekId) => {
    if (!students.length) return 0;
    const week = WEEKS.find(w => w.id === weekId);
    const total = students.reduce((s, st) => s + calcWeekProgress(week, st.studentData), 0);
    return Math.round(total / students.length);
  };

  const overallAvg = students.length
    ? Math.round(students.reduce((s, st) => s + calcTotalProgress(st.studentData), 0) / students.length)
    : 0;

  // Who's most/least active
  const sorted = [...students].sort((a, b) =>
    calcTotalProgress(b.studentData) - calcTotalProgress(a.studentData));
  const top = sorted[0];
  const bottom = sorted[sorted.length - 1];

  return (
    <div className="space-y-6">

      {/* KPI row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: 'Total Students', value: students.length, icon: '👥', color: '#8338EC' },
          { label: 'Avg. Progress', value: `${overallAvg}%`, icon: '📈', color: '#2D7DD2' },
          { label: 'Fully Active', value: students.filter(s => calcTotalProgress(s.studentData) > 0).length, icon: '🟢', color: '#28A745' },
          { label: 'Not Started', value: students.filter(s => calcTotalProgress(s.studentData) === 0).length, icon: '⏳', color: '#E86F3F' },
        ].map((k, i) => (
          <Card key={i} className="p-4">
            <div className="text-2xl mb-1">{k.icon}</div>
            <div className="text-2xl font-extrabold" style={{ color: k.color }}>{k.value}</div>
            <div className="text-[11px] text-gray-400 font-medium">{k.label}</div>
          </Card>
        ))}
      </div>

      {/* Student progress table */}
      <Card>
        <div className="p-4 border-b border-gray-50">
          <h2 className="text-sm font-bold text-gray-700">Student Progress Overview</h2>
        </div>
        {students.length === 0 ? (
          <div className="p-8 text-center text-gray-400 text-sm">No students yet.</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-50">
                  <th className="text-left px-4 py-3 text-[11px] font-bold text-gray-400 uppercase">Student</th>
                  {WEEKS.map(w => (
                    <th key={w.id} className="text-center px-2 py-3 text-[10px] font-bold text-gray-300 uppercase"
                      title={w.title}>W{w.id}</th>
                  ))}
                  <th className="text-right px-4 py-3 text-[11px] font-bold text-gray-400 uppercase">Total</th>
                </tr>
              </thead>
              <tbody>
                {sorted.map((st, i) => {
                  const total = calcTotalProgress(st.studentData);
                  return (
                    <tr key={st.uid} className={`border-b border-gray-50 ${i % 2 === 0 ? '' : 'bg-gray-50/30'}`}>
                      <td className="px-4 py-2.5">
                        <div className="flex items-center gap-2">
                          {st.photoURL
                            ? <img src={st.photoURL} alt="" className="w-6 h-6 rounded-full" />
                            : <div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-[10px] font-bold text-purple-600">
                                {st.displayName?.[0] || '?'}
                              </div>}
                          <span className="text-xs font-semibold text-gray-700 truncate max-w-[100px]">
                            {st.displayName || st.email}
                          </span>
                        </div>
                      </td>
                      {WEEKS.map(w => {
                        const prog = calcWeekProgress(w, st.studentData);
                        const bg = prog === 100 ? '#28A745' : prog > 0 ? w.color : '#e5e7eb';
                        return (
                          <td key={w.id} className="px-2 py-2.5 text-center">
                            <div className="w-6 h-6 rounded-full mx-auto flex items-center justify-center text-[9px] font-bold text-white"
                              style={{ background: bg, opacity: prog === 0 ? 0.3 : 1 }}>
                              {prog > 0 ? prog : ''}
                            </div>
                          </td>
                        );
                      })}
                      <td className="px-4 py-2.5 text-right">
                        <span className="text-sm font-bold" style={{ color: total > 60 ? '#28A745' : total > 20 ? '#F39C12' : '#E8453C' }}>
                          {total}%
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Week-by-week class average */}
      <Card className="p-5">
        <h2 className="text-sm font-bold text-gray-700 mb-4">Class Average by Week</h2>
        <div className="space-y-2">
          {WEEKS.map(w => {
            const avg = weekAvg(w.id);
            const phase = PHASE_COLORS[w.phase];
            return (
              <div key={w.id} className="flex items-center gap-3">
                <span className="text-xs text-gray-400 w-6 text-right font-bold">W{w.id}</span>
                <span className="text-sm">{w.icon}</span>
                <div className="flex-1">
                  <ProgressBar progress={avg} color={w.color} height={8} />
                </div>
                <span className="text-[10px] text-gray-400 w-20 truncate">{w.title}</span>
              </div>
            );
          })}
        </div>
      </Card>

      {/* Top / bottom */}
      {students.length > 1 && (
        <div className="grid grid-cols-2 gap-3">
          {top && (
            <Card className="p-4">
              <div className="text-xs font-bold text-green-600 mb-2">🏆 Most Progress</div>
              <div className="font-semibold text-sm">{top.displayName}</div>
              <div className="text-[11px] text-gray-400">{top.email}</div>
              <div className="mt-2">
                <ProgressBar progress={calcTotalProgress(top.studentData)} color="#28A745" />
              </div>
            </Card>
          )}
          {bottom && bottom.uid !== top?.uid && (
            <Card className="p-4">
              <div className="text-xs font-bold text-orange-500 mb-2">💡 Needs Nudge</div>
              <div className="font-semibold text-sm">{bottom.displayName}</div>
              <div className="text-[11px] text-gray-400">{bottom.email}</div>
              <div className="mt-2">
                <ProgressBar progress={calcTotalProgress(bottom.studentData)} color="#E86F3F" />
              </div>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}

// ─── Tab: Student Detail ───────────────────────────────────────
// ─────────────────────────────────────────────────────────────
// Replace the StudentDetailTab function in src/app/admin/page.js
// with this version. It shows learning notes, mentor notes,
// activity responses, pitch notes, reflections, and uploads
// all in one organised view per week.
// ─────────────────────────────────────────────────────────────

function StudentDetailTab({ students, onBack }) {
  const [selected, setSelected] = useState(null);
  const [detail, setDetail] = useState(null);
  const [loadingDetail, setLoadingDetail] = useState(false);
  const [expandedWeek, setExpandedWeek] = useState(null);
  const [expandedSection, setExpandedSection] = useState({}); // per week: which sub-section

  const loadStudent = async (st) => {
    setSelected(st);
    setLoadingDetail(true);
    setExpandedWeek(null);
    setExpandedSection({});
    const d = await getStudentDetail(st.uid);
    setDetail(d);
    setLoadingDetail(false);
  };

  const toggleSection = (weekId, section) => {
    setExpandedSection(prev => ({
      ...prev,
      [`${weekId}_${section}`]: !prev[`${weekId}_${section}`]
    }));
  };
  const sectionOpen = (weekId, section) => expandedSection[`${weekId}_${section}`];

  // ── Student list ──────────────────────────────────────────
  if (!selected) return (
    <div className="space-y-2">
      <p className="text-xs text-gray-400 mb-4">
        Click a student to see all their notes, responses, reflections, and uploads.
      </p>
      {students.length === 0 && (
        <div className="text-center py-12 text-gray-400 text-sm">No students enrolled yet.</div>
      )}
      {[...students]
        .sort((a, b) => calcTotalProgress(b.studentData) - calcTotalProgress(a.studentData))
        .map(st => {
          const prog = calcTotalProgress(st.studentData);
          return (
            <button key={st.uid} onClick={() => loadStudent(st)}
              className="flex items-center gap-3 w-full text-left p-4 bg-white rounded-xl border border-gray-100 hover:border-purple-200 hover:shadow-sm transition-all">
              {st.photoURL
                ? <img src={st.photoURL} alt="" className="w-10 h-10 rounded-full" />
                : <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center font-bold text-purple-600">
                    {st.displayName?.[0] || '?'}
                  </div>}
              <div className="flex-1 min-w-0">
                <div className="font-semibold text-sm text-gray-800">{st.displayName}</div>
                <div className="text-[11px] text-gray-400 truncate">{st.email}</div>
                <div className="mt-1.5"><ProgressBar progress={prog} color="#8338EC" /></div>
              </div>
              <div className="text-right shrink-0">
                <div className="text-lg font-extrabold" style={{ color: prog > 60 ? '#28A745' : prog > 20 ? '#F39C12' : '#9ca3af' }}>
                  {prog}%
                </div>
                <div className="text-[10px] text-gray-300">→</div>
              </div>
            </button>
          );
        })}
    </div>
  );

  // ── Loading ───────────────────────────────────────────────
  if (loadingDetail) return (
    <div className="flex items-center justify-center py-20 text-gray-400 text-sm">
      Loading {selected.displayName}'s data...
    </div>
  );

  const responses = detail?.data?.responses || {};
  const completedSteps = detail?.data?.completedSteps || {};
  const allUploads = detail?.data?.uploads || {};
  const totalProg = calcTotalProgress(detail?.data);

  // ── Detail view ───────────────────────────────────────────
  return (
    <div>
      {/* Back */}
      <button onClick={() => { setSelected(null); setDetail(null); }}
        className="text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg mb-4">
        ← All Students
      </button>

      {/* Student card */}
      <Card className="p-5 mb-5">
        <div className="flex items-center gap-4">
          {selected.photoURL
            ? <img src={selected.photoURL} alt="" className="w-14 h-14 rounded-full" />
            : <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center text-xl font-bold text-purple-600">
                {selected.displayName?.[0]}
              </div>}
          <div className="flex-1">
            <div className="text-xl font-extrabold text-gray-800">{selected.displayName}</div>
            <div className="text-xs text-gray-400 mb-2">{selected.email}</div>
            <ProgressBar progress={totalProg} color="#8338EC" height={8} />
          </div>
          <div className="text-right">
            <div className="text-3xl font-extrabold text-purple-600">{totalProg}%</div>
            <div className="text-[11px] text-gray-400">complete</div>
          </div>
        </div>

        {/* Week badges */}
        <div className="mt-4 flex flex-wrap gap-1.5">
          {WEEKS.map(w => {
            const prog = calcWeekProgress(w, detail?.data);
            return (
              <div key={w.id} title={`Week ${w.id}: ${w.title}`}
                className="flex items-center gap-1 px-2 py-1 rounded-lg text-[10px] font-bold border cursor-pointer"
                style={{
                  background: prog === 100 ? '#F0FFF4' : prog > 0 ? `${w.color}11` : '#f9fafb',
                  borderColor: prog === 100 ? '#28A745' : prog > 0 ? w.color : '#e5e7eb',
                  color: prog === 100 ? '#28A745' : prog > 0 ? w.color : '#9ca3af',
                }}
                onClick={() => setExpandedWeek(expandedWeek === w.id ? null : w.id)}>
                {w.icon} W{w.id} {prog > 0 ? `${prog}%` : '—'}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Week-by-week detail */}
      <div className="space-y-2">
        {WEEKS.map(w => {
          const weekProg = calcWeekProgress(w, detail?.data);
          const steps = getWeekSteps(w.id);
          const weekUploads = allUploads[`week_${w.id}`] || [];
          const isOpen = expandedWeek === w.id;
          const phase = PHASE_COLORS[w.phase];

          // Count learning notes for this week
          const learningNoteKeys = Object.keys(responses).filter(k =>
            k.startsWith(`learn_note_${w.id}_`) && responses[k]?.text?.trim()
          );
          const mentorNote = responses[`mentor_note_${w.id}`]?.text?.trim();
          const pitchNote = responses[`pitch_${w.id}`]?.text?.trim();
          const pitchFeedback = responses[`pitch_feedback_${w.id}`]?.text?.trim();
          const reflection = responses[`reflection_${w.id}`]?.text?.trim();

          // Activity responses
          const activityResponses = w.activities.map(act => {
            const r = responses[act.id] || {};
            const entries = Object.entries(r).filter(([_, v]) => typeof v === 'string' && v.trim().length > 0);
            return { act, entries };
          }).filter(({ entries }) => entries.length > 0);

          const hasAny = weekProg > 0 || weekUploads.length > 0 || learningNoteKeys.length > 0;

          return (
            <Card key={w.id} className="overflow-hidden">
              {/* Week row */}
              <button onClick={() => setExpandedWeek(isOpen ? null : w.id)}
                className={`flex items-center gap-3 w-full text-left px-4 py-3 transition-colors ${isOpen ? 'bg-gray-50' : 'hover:bg-gray-50/50'}`}>
                <span className="text-lg shrink-0">{w.icon}</span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[10px] font-bold uppercase tracking-wide" style={{ color: phase.accent }}>
                      Week {w.id}
                    </span>
                    {learningNoteKeys.length > 0 && (
                      <Badge label={`✏️ ${learningNoteKeys.length} notes`} color="#2D7DD2" bg="#EEF6FF" />
                    )}
                    {weekUploads.length > 0 && (
                      <Badge label={`📎 ${weekUploads.length} file${weekUploads.length > 1 ? 's' : ''}`} color="#1B998B" bg="#E8FFF9" />
                    )}
                    {reflection && <Badge label="📝 reflected" color="#8338EC" bg="#F3EEFF" />}
                    {!hasAny && <Badge label="Not started" color="#9ca3af" bg="#f3f4f6" />}
                  </div>
                  <div className="text-sm font-semibold text-gray-700 truncate">{w.title}</div>
                </div>
                <div className="w-28 shrink-0"><ProgressBar progress={weekProg} color={w.color} /></div>
                <span className={`text-sm text-gray-300 transition-transform shrink-0 ml-1 ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
              </button>

              {/* Expanded week detail */}
              {isOpen && (
                <div className="border-t border-gray-50 divide-y divide-gray-50">

                  {/* Checklist */}
                  <div className="px-4 py-3">
                    <button onClick={() => toggleSection(w.id, 'checklist')}
                      className="flex items-center justify-between w-full text-left">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">✅ Checklist</span>
                      <span className="text-xs text-gray-300">{sectionOpen(w.id, 'checklist') ? '▲' : '▼'}</span>
                    </button>
                    {sectionOpen(w.id, 'checklist') && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {steps.map(s => {
                          const done = completedSteps[s.key];
                          return (
                            <span key={s.key}
                              className={`flex items-center gap-1 text-[11px] px-2 py-1 rounded-lg font-medium border ${done ? 'bg-green-50 text-green-700 border-green-200' : 'bg-gray-50 text-gray-400 border-gray-100'}`}>
                              {done ? '✓' : '○'} {s.icon} {s.label}
                            </span>
                          );
                        })}
                      </div>
                    )}
                  </div>

                  {/* Learning Notes */}
                  {learningNoteKeys.length > 0 && (
                    <div className="px-4 py-3">
                      <button onClick={() => toggleSection(w.id, 'notes')}
                        className="flex items-center justify-between w-full text-left">
                        <span className="text-[10px] font-bold text-blue-400 uppercase tracking-wide">
                          ✏️ Learning Notes ({learningNoteKeys.length})
                        </span>
                        <span className="text-xs text-gray-300">{sectionOpen(w.id, 'notes') ? '▲' : '▼'}</span>
                      </button>
                      {sectionOpen(w.id, 'notes') && (
                        <div className="mt-2 space-y-2">
                          {/* Match notes to learning items */}
                          {(w.learning.items || []).map((item, idx) => {
                            const noteKey = `learn_note_${w.id}_${item.noteKey || idx}`;
                            const noteText = responses[noteKey]?.text?.trim();
                            if (!noteText) return null;
                            return (
                              <div key={noteKey} className="p-2.5 bg-blue-50 rounded-lg border border-blue-100">
                                <div className="text-[10px] font-bold text-blue-500 mb-1 flex items-center gap-1">
                                  {item.type === 'youtube' ? '▶' : '📖'} {item.label}
                                </div>
                                <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">{noteText}</div>
                              </div>
                            );
                          })}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Mentor session notes */}
                  {mentorNote && (
                    <div className="px-4 py-3">
                      <button onClick={() => toggleSection(w.id, 'mentor')}
                        className="flex items-center justify-between w-full text-left">
                        <span className="text-[10px] font-bold text-purple-400 uppercase tracking-wide">
                          🧠 Mentor Session Notes
                        </span>
                        <span className="text-xs text-gray-300">{sectionOpen(w.id, 'mentor') ? '▲' : '▼'}</span>
                      </button>
                      {sectionOpen(w.id, 'mentor') && (
                        <div className="mt-2 p-2.5 bg-purple-50 rounded-lg border border-purple-100">
                          <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">{mentorNote}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Activity responses */}
                  {activityResponses.length > 0 && (
                    <div className="px-4 py-3">
                      <button onClick={() => toggleSection(w.id, 'activities')}
                        className="flex items-center justify-between w-full text-left">
                        <span className="text-[10px] font-bold text-orange-400 uppercase tracking-wide">
                          ✏️ Activity Responses ({activityResponses.length} filled)
                        </span>
                        <span className="text-xs text-gray-300">{sectionOpen(w.id, 'activities') ? '▲' : '▼'}</span>
                      </button>
                      {sectionOpen(w.id, 'activities') && (
                        <div className="mt-2 space-y-3">
                          {activityResponses.map(({ act, entries }) => (
                            <div key={act.id} className="p-2.5 bg-orange-50 rounded-lg border border-orange-100">
                              <div className="text-xs font-bold text-orange-600 mb-2">📝 {act.title}</div>
                              <div className="space-y-1.5">
                                {entries.map(([k, v]) => (
                                  <div key={k} className="pl-2 border-l-2 border-orange-200">
                                    <div className="text-[9px] text-gray-400 font-bold uppercase">{k.replace(/_/g, ' ')}</div>
                                    <div className="text-xs text-gray-700 whitespace-pre-wrap">{v}</div>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Pitch */}
                  {(pitchNote || pitchFeedback) && (
                    <div className="px-4 py-3">
                      <button onClick={() => toggleSection(w.id, 'pitch')}
                        className="flex items-center justify-between w-full text-left">
                        <span className="text-[10px] font-bold text-red-400 uppercase tracking-wide">🎤 Pitch Back</span>
                        <span className="text-xs text-gray-300">{sectionOpen(w.id, 'pitch') ? '▲' : '▼'}</span>
                      </button>
                      {sectionOpen(w.id, 'pitch') && (
                        <div className="mt-2 space-y-2">
                          {pitchNote && (
                            <div className="p-2.5 bg-red-50 rounded-lg border border-red-100">
                              <div className="text-[10px] font-bold text-red-500 mb-1">Student's Pitch Notes</div>
                              <div className="text-xs text-gray-700 whitespace-pre-wrap">{pitchNote}</div>
                            </div>
                          )}
                          {pitchFeedback && (
                            <div className="p-2.5 bg-orange-50 rounded-lg border border-orange-100">
                              <div className="text-[10px] font-bold text-orange-500 mb-1">Mentor Feedback Given</div>
                              <div className="text-xs text-gray-700 whitespace-pre-wrap">{pitchFeedback}</div>
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Reflection */}
                  {reflection && (
                    <div className="px-4 py-3">
                      <button onClick={() => toggleSection(w.id, 'reflection')}
                        className="flex items-center justify-between w-full text-left">
                        <span className="text-[10px] font-bold text-purple-500 uppercase tracking-wide">📝 Reflection</span>
                        <span className="text-xs text-gray-300">{sectionOpen(w.id, 'reflection') ? '▲' : '▼'}</span>
                      </button>
                      {sectionOpen(w.id, 'reflection') && (
                        <div className="mt-2 p-2.5 bg-purple-50 rounded-lg border border-purple-100">
                          <div className="text-xs text-gray-700 leading-relaxed whitespace-pre-wrap">{reflection}</div>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Uploads */}
                  {weekUploads.length > 0 && (
                    <div className="px-4 py-3">
                      <button onClick={() => toggleSection(w.id, 'uploads')}
                        className="flex items-center justify-between w-full text-left">
                        <span className="text-[10px] font-bold text-teal-500 uppercase tracking-wide">
                          📎 Uploads ({weekUploads.length})
                        </span>
                        <span className="text-xs text-gray-300">{sectionOpen(w.id, 'uploads') ? '▲' : '▼'}</span>
                      </button>
                      {sectionOpen(w.id, 'uploads') && (
                        <div className="mt-2 space-y-1.5">
                          {weekUploads.map((f, i) => (
                            <a key={i} href={f.url} target="_blank" rel="noopener noreferrer"
                              className="flex items-center gap-2 px-3 py-2 bg-teal-50 rounded-lg hover:bg-teal-100 transition border border-teal-100">
                              <span>📄</span>
                              <span className="flex-1 text-xs text-teal-700 font-medium truncate">{f.name}</span>
                              <span className="text-[10px] text-gray-400">
                                {new Date(f.uploadedAt).toLocaleDateString('en-IN')}
                              </span>
                              <span className="text-[10px] text-teal-500">↗</span>
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}

                  {!hasAny && (
                    <div className="px-4 py-6 text-center text-xs text-gray-300 italic">
                      {selected.displayName} hasn't started Week {w.id} yet.
                    </div>
                  )}
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </div>
  );
}

// ─── Tab: Course Preview ───────────────────────────────────────
function CoursePreviewTab() {
  const [selectedWeek, setSelectedWeek] = useState(null);
  const week = WEEKS.find(w => w.id === selectedWeek);

  if (!selectedWeek) return (
    <div>
      <p className="text-xs text-gray-400 mb-4">Read-only preview of all 15 weeks of course content.</p>
      {[1, 2, 3, 4].map(pn => {
        const phase = PHASE_COLORS[pn];
        return (
          <div key={pn} className="mb-5">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-1 h-4 rounded" style={{ background: phase.accent }} />
              <h2 className="text-xs font-bold uppercase tracking-wide" style={{ color: phase.accent }}>
                {phase.label}: {phase.title}
              </h2>
            </div>
            <div className="space-y-2">
              {WEEKS.filter(w => w.phase === pn).map(w => {
                const mentor = MENTORS[w.mentor.key];
                return (
                  <button key={w.id} onClick={() => setSelectedWeek(w.id)}
                    className="flex items-center gap-3 w-full text-left p-3 bg-white rounded-xl border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all">
                    <span className="text-2xl">{w.icon}</span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] font-bold uppercase tracking-wide" style={{ color: phase.accent }}>
                        Week {w.id}
                      </div>
                      <div className="text-sm font-semibold text-gray-800">{w.title}</div>
                      <div className="text-[11px] text-gray-400 mt-0.5 truncate">{w.gain}</div>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="text-base">{mentor.emoji}</span>
                      <span className="text-[10px] text-gray-400">{mentor.name}</span>
                    </div>
                    <span className="text-gray-300 text-sm shrink-0">→</span>
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );

  // ── Week detail preview ──
  const phase = PHASE_COLORS[week.phase];
  const mentor = MENTORS[week.mentor.key];

  return (
    <div>
      <button onClick={() => setSelectedWeek(null)}
        className="text-xs text-gray-400 hover:text-gray-600 bg-gray-100 px-3 py-1.5 rounded-lg mb-4">
        ← All Weeks
      </button>

      {/* Week header */}
      <div className="p-5 rounded-2xl mb-4 border" style={{ background: phase.bg, borderColor: week.color + '22' }}>
        <div className="flex items-start justify-between">
          <div>
            <div className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: phase.accent }}>
              {phase.label} · Week {week.id}
            </div>
            <h1 className="text-2xl font-extrabold text-gray-900 mb-1">{week.icon} {week.title}</h1>
            <p className="text-xs text-gray-500 mb-1">{week.subtitle}</p>
            <p className="text-[11px] text-gray-400 italic">🎯 {week.gain}</p>
          </div>
          <div className="px-3 py-2 rounded-xl text-center shrink-0 ml-4"
            style={{ background: mentor.color + '15', border: `1px solid ${mentor.color}33` }}>
            <div className="text-2xl">{mentor.emoji}</div>
            <div className="text-[11px] font-bold" style={{ color: mentor.color }}>{mentor.name}</div>
          </div>
        </div>
        <div className="mt-3 pt-3 border-t border-black/5">
          <div className="text-[10px] font-bold text-gray-400 uppercase mb-1">READ-ONLY PREVIEW</div>
          <p className="text-[11px] text-gray-400">You are viewing this as admin. Students see the same content with editable forms.</p>
        </div>
      </div>

      {/* Learning resources */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Step 1 — Learning Materials</div>
      <Card className="p-4 mb-4">
        <div className="text-xs font-bold text-gray-600 mb-3">{week.learning.title}</div>
        <div className="space-y-2">
          {week.learning.items.map((item, i) => {
            const isYT = item.type === 'youtube', isRead = item.type === 'read',
                  isTmpl = item.type === 'template', isGuide = item.type === 'guided_search';
            return (
              <div key={i} className={`p-2.5 rounded-lg border ${isYT ? 'bg-red-50/50 border-red-100' : isRead ? 'bg-purple-50/50 border-purple-100' : isTmpl ? 'bg-orange-50/50 border-orange-100' : 'bg-green-50/50 border-green-100'}`}>
                <div className="flex items-center gap-1.5 mb-0.5">
                  <span className={`text-[10px] font-bold uppercase ${isYT ? 'text-red-600' : isRead ? 'text-purple-600' : isTmpl ? 'text-orange-700' : 'text-green-700'}`}>
                    {isYT ? '▶ YouTube' : isRead ? '📖 Read' : isTmpl ? '📋 Template' : '🔎 Search Guide'}
                  </span>
                  {item.duration && <span className="text-[10px] text-gray-400">· {item.duration}</span>}
                </div>
                <div className="text-xs font-semibold text-gray-800">{item.label}</div>
                {item.why && <div className="text-[11px] text-gray-500 mt-0.5">{item.why}</div>}
                {item.search && <div className="mt-1 text-[10px] font-mono px-2 py-1 bg-white border border-gray-200 rounded text-red-600">YouTube → "{item.search}"</div>}
                {item.content && <div className="mt-1 text-[11px] text-gray-600 p-2 bg-white border border-gray-200 rounded whitespace-pre-wrap">{item.content}</div>}
                {item.searchTerms && <div className="mt-1 space-y-0.5">{item.searchTerms.map((t, j) => <div key={j} className="text-[10px] font-mono px-2 py-0.5 bg-white border border-gray-200 rounded text-red-600">YouTube → "{t}"</div>)}</div>}
              </div>
            );
          })}
        </div>
      </Card>

      {/* Mentor session */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Step 2 — Mentor Session</div>
      <Card className="p-4 mb-4" style={{ borderColor: mentor.color + '22' }}>
        <div className="text-xs font-bold mb-1" style={{ color: mentor.color }}>{mentor.name} — {week.mentor.topic}</div>
        <div className="text-[11px] text-gray-500 leading-relaxed mb-3">{week.mentor.agenda}</div>
        <div className="p-2.5 rounded-lg border-l-2 bg-yellow-50" style={{ borderLeftColor: mentor.color }}>
          <div className="text-[10px] font-bold text-yellow-700 mb-0.5">STUDENT PREP QUESTION</div>
          <div className="text-xs text-gray-700">{week.mentor.prepQuestion}</div>
        </div>
      </Card>

      {/* Activities */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Step 3 — Activities</div>
      <div className="space-y-2 mb-4">
        {week.activities.map((act, ai) => (
          <Card key={act.id} className="p-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: week.color }}>{ai + 1}</div>
              <div>
                <div className="text-sm font-semibold text-gray-800">{act.title}</div>
                <div className="text-[10px] text-gray-400">{act.time}</div>
              </div>
            </div>
            <div className="text-xs text-gray-500 leading-relaxed p-2.5 bg-yellow-50/70 rounded-lg border-l-2" style={{ borderLeftColor: week.color }}>
              {act.description}
            </div>
            <div className="mt-2 text-[10px] text-gray-400 italic">
              [{act.template.type} template — students fill this in interactively]
            </div>
          </Card>
        ))}
      </div>

      {/* Pitch-back */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Step 4 — Pitch-Back</div>
      <Card className="p-4 mb-4">
        <div className="text-xs font-bold text-red-500 mb-2">🎤 {week.pitchBack.title}</div>
        <div className="text-[11px] text-gray-500 mb-2">{week.pitchBack.instructions}</div>
        <div className="space-y-1 mb-2">
          {week.pitchBack.points.map((p, i) => (
            <div key={i} className="text-xs text-gray-600 pl-2"><span className="font-bold text-red-400">{i + 1}.</span> {p}</div>
          ))}
        </div>
        <div className="text-[11px] text-gray-400 italic">{week.pitchBack.format}</div>
      </Card>

      {/* Reflection */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2">Step 5 — Reflection</div>
      <Card className="p-4">
        <div className="text-xs font-bold text-purple-500 mb-1">📝 Reflection Prompt</div>
        <div className="text-xs text-gray-600">{week.reflection}</div>
      </Card>
    </div>
  );
}

// ─── Tab: Whitelist ────────────────────────────────────────────
function WhitelistTab({ whitelist, onRefresh, adminEmail }) {
  const [newEmail, setNewEmail] = useState('');
  const [adding, setAdding] = useState(false);

  const handleAdd = async () => {
    if (!newEmail.trim() || !newEmail.includes('@')) return;
    setAdding(true);
    await addToWhitelist(newEmail, adminEmail);
    await onRefresh();
    setNewEmail('');
    setAdding(false);
  };

  const handleRemove = async (id, email) => {
    if (!confirm(`Remove ${email} from whitelist?`)) return;
    await removeFromWhitelist(id);
    await onRefresh();
  };

  return (
    <div>
      <p className="text-xs text-gray-400 mb-4">
        Add a student's Gmail address. Once added, they can sign in with Google and access the course.
      </p>
      <div className="flex gap-2 mb-5">
        <input type="email" value={newEmail} onChange={e => setNewEmail(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleAdd()}
          placeholder="student@gmail.com"
          className="flex-1 px-3 py-2.5 border border-gray-200 rounded-xl text-sm outline-none focus:border-purple-300 focus:ring-1 focus:ring-purple-100 transition" />
        <button onClick={handleAdd} disabled={adding}
          className="px-5 py-2.5 bg-purple-600 text-white rounded-xl text-sm font-semibold hover:bg-purple-700 transition disabled:opacity-50 shrink-0">
          {adding ? 'Adding...' : '+ Add Student'}
        </button>
      </div>

      {whitelist.length === 0
        ? <div className="text-center py-12 text-gray-400 text-sm">No students whitelisted yet.</div>
        : (
          <div className="space-y-2">
            {whitelist.map(item => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-xl border border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-sm font-bold text-purple-400">
                    {item.email[0]?.toUpperCase()}
                  </div>
                  <div>
                    <div className="text-sm font-medium text-gray-700">{item.email}</div>
                    <div className="text-[10px] text-gray-400">
                      Added {new Date(item.addedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })}
                    </div>
                  </div>
                </div>
                <button onClick={() => handleRemove(item.id, item.email)}
                  className="text-xs text-red-400 hover:text-red-600 hover:bg-red-50 px-2 py-1 rounded-lg transition">
                  Remove
                </button>
              </div>
            ))}
          </div>
        )}
    </div>
  );
}

// ─── Main Admin Page ───────────────────────────────────────────
export default function AdminPage() {
  const { user, userRole, loading, logout } = useAuth();
  const router = useRouter();
  const [tab, setTab] = useState('dashboard');
  const [whitelist, setWhitelist] = useState([]);
  const [students, setStudents] = useState([]);
  const [dataLoading, setDataLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    if (!loading && !user) router.push('/');
    if (!loading && user && userRole !== 'admin') router.push('/dashboard');
  }, [user, userRole, loading, router]);

  const loadData = async () => {
    const [wl, st] = await Promise.all([getWhitelist(), getAllStudents()]);
    setWhitelist(wl);
    setStudents(st);
  };

  useEffect(() => {
    if (user && userRole === 'admin') {
      loadData().then(() => setDataLoading(false));
    }
  }, [user, userRole]);

  const handleRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  if (loading || dataLoading) return (
    <div className="min-h-screen flex items-center justify-center text-gray-400 text-sm">
      Loading Pathfinder Admin...
    </div>
  );
  if (!user || userRole !== 'admin') return null;

  const TABS = [
    { key: 'dashboard', label: 'Dashboard', icon: '📊' },
    { key: 'students', label: `Responses (${students.length})`, icon: '👤' },
    { key: 'preview', label: 'Course Preview', icon: '👁️' },
    { key: 'whitelist', label: `Whitelist (${whitelist.length})`, icon: '📋' },
  ];

  return (
    <div className="min-h-screen bg-gray-50/50">
      {/* Top bar */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-5xl mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center gap-2">
              <span className="text-xl">🧭</span>
              <div>
                <div className="font-extrabold text-sm text-gray-800 leading-none">Pathfinder</div>
                <div className="text-[10px] text-gray-400 leading-none">Admin Panel</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <button onClick={handleRefresh}
                className={`text-xs text-blue-500 hover:text-blue-700 bg-blue-50 px-3 py-1.5 rounded-lg transition ${refreshing ? 'opacity-50' : ''}`}>
                {refreshing ? '...' : '↻ Refresh'}
              </button>
              <div className="text-xs text-gray-500">{user.displayName}</div>
              {user.photoURL && <img src={user.photoURL} alt="" className="w-7 h-7 rounded-full" />}
              <button onClick={logout} className="text-xs text-gray-400 hover:text-red-400 transition">Sign out</button>
            </div>
          </div>

          {/* Tab bar */}
          <div className="flex gap-0 -mb-px">
            {TABS.map(t => (
              <button key={t.key} onClick={() => setTab(t.key)}
                className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold border-b-2 transition-colors ${tab === t.key ? 'border-purple-500 text-purple-600' : 'border-transparent text-gray-400 hover:text-gray-600'}`}>
                <span>{t.icon}</span> {t.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto px-4 py-6">
        {tab === 'dashboard' && <DashboardTab students={students} />}
        {tab === 'students' && <StudentDetailTab students={students} />}
        {tab === 'preview' && <CoursePreviewTab />}
        {tab === 'whitelist' && (
          <WhitelistTab whitelist={whitelist} onRefresh={loadData} adminEmail={user.email} />
        )}
      </div>
    </div>
  );
}
