'use client';
import { useAuth } from '@/lib/auth';
import { useRouter, useParams } from 'next/navigation';
import { useEffect, useState, useCallback, useRef } from 'react';
import { getStudentData, updateResponses, toggleStep, uploadPresentation } from '@/lib/db';
import { WEEKS, PHASE_COLORS, MENTORS, getWeekSteps, calcWeekProgress } from '@/lib/courseData';
import TemplateRenderer from '@/components/TemplateRenderer';

function Toggle({ title, icon, color, defaultOpen, badge, children }) {
  const [open, setOpen] = useState(defaultOpen || false);
  return (
    <div className={`mb-2.5 rounded-xl overflow-hidden border-2 transition-colors ${open ? '' : 'border-gray-100'}`} style={open ? { borderColor: color } : {}}>
      <button onClick={() => setOpen(!open)} className={`flex items-center gap-2.5 px-4 py-3 w-full text-left ${open ? 'bg-gray-50/50' : 'bg-white'}`}>
        <span className="text-base">{icon}</span>
        <span className="flex-1 text-[13px] font-semibold text-gray-800">{title}</span>
        {badge}
        <span className={`text-sm text-gray-300 transition-transform ${open ? 'rotate-180' : ''}`}>⌄</span>
      </button>
      {open && <div className="px-4 pb-4">{children}</div>}
    </div>
  );
}

export default function WeekPage() {
  const { user, loading: authLoading } = useAuth();
  const router = useRouter();
  const params = useParams();
  const weekId = parseInt(params.id);
  const week = WEEKS.find(w => w.id === weekId);
  const fileInputRef = useRef(null);

  const [studentData, setStudentData] = useState(null);
  const [dataLoading, setDataLoading] = useState(true);
  const [activeAct, setActiveAct] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [saveTimeout, setSaveTimeout] = useState(null);

  useEffect(() => { if (!authLoading && !user) router.push('/'); }, [user, authLoading, router]);

  useEffect(() => {
    if (user) getStudentData(user.uid).then(d => { setStudentData(d); setDataLoading(false); });
  }, [user]);

  const handleUpdate = useCallback(async (actId, data) => {
    setStudentData(prev => ({ ...prev, responses: { ...prev.responses, [actId]: data } }));
    if (saveTimeout) clearTimeout(saveTimeout);
    const timeout = setTimeout(() => { if (user) updateResponses(user.uid, actId, data); }, 800);
    setSaveTimeout(timeout);
  }, [user, saveTimeout]);

  const handleStepToggle = async (stepKey) => {
    const newVal = !studentData.completedSteps?.[stepKey];
    setStudentData(prev => ({ ...prev, completedSteps: { ...prev.completedSteps, [stepKey]: newVal } }));
    await toggleStep(user.uid, stepKey, newVal);
  };

  const handleFileUpload = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      await uploadPresentation(user.uid, weekId, file);
      const fresh = await getStudentData(user.uid);
      setStudentData(fresh);
    } catch (err) { console.error('Upload error:', err); }
    setUploading(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  if (authLoading || dataLoading || !week) return <div className="min-h-screen flex items-center justify-center text-gray-400">Loading...</div>;

  const phase = PHASE_COLORS[week.phase];
  const steps = getWeekSteps(weekId);
  const responses = studentData?.responses || {};
  const completedSteps = studentData?.completedSteps || {};
  const uploads = studentData?.uploads?.[`week_${weekId}`] || [];
  const progress = calcWeekProgress(week, studentData);

  return (
    <div className="max-w-2xl mx-auto px-4 py-5 min-h-screen">
      {/* Back */}
      <button onClick={() => router.push('/dashboard')} className="text-xs text-gray-400 hover:text-gray-600 mb-4 flex items-center gap-1">
        ← Dashboard
      </button>

      {/* Week Header */}
      <div className="p-5 rounded-2xl mb-4 border" style={{ background: phase.bg, borderColor: week.color + '22' }}>
        <div className="text-[10px] font-bold uppercase tracking-wide mb-1" style={{ color: phase.accent }}>{phase.label} · Week {week.id}</div>
        <h1 className="font-display text-2xl font-extrabold text-gray-900 mb-1">{week.icon} {week.title}</h1>
        <p className="text-xs text-gray-500 mb-1">{week.subtitle}</p>
        <p className="text-[11px] text-gray-400 italic mb-3">🎯 {week.gain}</p>
        <div className="flex items-center gap-2">
          <div className="flex-1 h-1.5 bg-black/5 rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all duration-500" style={{ width: `${progress}%`, background: week.color }} />
          </div>
          <span className="text-xs font-semibold" style={{ color: week.color }}>{progress}%</span>
        </div>
      </div>

      {/* ── CHECKLIST ── */}
      <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
        <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wide mb-3">Weekly Checklist</h3>
        <div className="space-y-2">
          {steps.map(step => {
            const done = completedSteps[step.key];
            return (
              <button key={step.key} onClick={() => handleStepToggle(step.key)}
                className={`flex items-center gap-3 w-full text-left px-3 py-2.5 rounded-lg transition-all ${done ? 'bg-green-50 border border-green-200' : 'bg-gray-50 border border-gray-100 hover:border-gray-200'}`}>
                <div className={`w-5 h-5 rounded-md flex items-center justify-center text-[10px] font-bold transition-all ${done ? 'bg-green-500 text-white' : 'bg-white border-2 border-gray-200 text-transparent'}`}>✓</div>
                <span className="text-xs">{step.icon}</span>
                <span className={`text-xs flex-1 ${done ? 'text-green-700 font-semibold line-through decoration-green-300' : 'text-gray-600'}`}>{step.label}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* ── STEP 1: LEARN ── */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 mt-6">Step 1 — Learn</div>
      <Toggle title={week.learning.title} icon="📚" color={week.color} defaultOpen>
        <div className="space-y-2">
          {week.learning.items.map((item, i) => {
            const isYT = item.type === 'youtube', isRead = item.type === 'read', isTmpl = item.type === 'template', isGuide = item.type === 'guided_search';
            return (
              <div key={i} className={`p-3 rounded-lg border ${isYT ? 'bg-red-50/50 border-red-100' : isRead ? 'bg-purple-50/50 border-purple-100' : isTmpl ? 'bg-orange-50/50 border-orange-100' : 'bg-green-50/50 border-green-100'}`}>
                <div className="flex items-center gap-1.5 mb-1">
                  <span className={`text-[10px] font-bold uppercase tracking-wide ${isYT ? 'text-red-600' : isRead ? 'text-purple-600' : isTmpl ? 'text-orange-700' : 'text-green-600'}`}>
                    {isYT ? '▶ YouTube' : isRead ? '📖 Read' : isTmpl ? '📋 Template' : '🔎 Search Guide'}
                  </span>
                  {item.duration && <span className="text-[10px] text-gray-400">· {item.duration}</span>}
                </div>
                <div className="text-[13px] font-semibold text-gray-800 mb-1">{item.label}</div>
                {item.why && <div className="text-[11px] text-gray-500 leading-relaxed mb-1.5">{item.why}</div>}
                {item.search && <div className="text-[11px] px-2 py-1 bg-white rounded border border-gray-200 font-mono text-red-600">YouTube → "{item.search}"</div>}
                {item.content && <div className="text-[11px] text-gray-600 p-2 bg-white rounded border border-gray-200 whitespace-pre-wrap">{item.content}</div>}
                {item.instructions && <div className="text-[11px] text-gray-500 mb-2">{item.instructions}</div>}
                {item.searchTerms && <div className="space-y-1">{item.searchTerms.map((t, j) => <div key={j} className="text-[10px] px-2 py-1 bg-white rounded border border-gray-200 font-mono text-red-600">YouTube → "{t}"</div>)}</div>}
              </div>
            );
          })}
        </div>
      </Toggle>

      {/* ── STEP 2: MENTOR ── */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 mt-5">Step 2 — Mentor Session</div>
      {(() => { const m = MENTORS[week.mentor.key]; return (
        <Toggle title={`30-Min: ${m.name}`} icon={m.emoji} color={m.color}>
          <div className="p-3 rounded-lg border" style={{ background: m.color + '08', borderColor: m.color + '22' }}>
            <div className="flex items-center gap-2 mb-2">
              <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm text-white font-bold" style={{ background: m.color }}>{m.name[0]}</div>
              <div><div className="text-sm font-bold">{m.name}</div><div className="text-[10px] text-gray-400">{m.skill}</div></div>
            </div>
            <div className="text-xs font-semibold mb-1" style={{ color: m.color }}>Topic: {week.mentor.topic}</div>
            <div className="text-xs text-gray-500 leading-relaxed mb-3">{week.mentor.agenda}</div>
            <div className="p-2.5 bg-yellow-50 rounded-lg border-l-3" style={{ borderLeftColor: m.color, borderLeftWidth: 3 }}>
              <div className="text-[10px] font-bold text-yellow-700 mb-0.5">PREP BEFORE SESSION</div>
              <div className="text-xs text-gray-600">{week.mentor.prepQuestion}</div>
            </div>
          </div>
        </Toggle>
      );})()}

      {/* ── STEP 3: ACTIVITIES ── */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 mt-5">Step 3 — Do The Work</div>
      {week.activities.map((act, ai) => {
        const isOpen = activeAct === act.id;
        const r = responses[act.id] || {};
        const done = Object.values(r).filter(v => typeof v === 'string' && v.trim().length > 0).length > 0;
        return (
          <div key={act.id} className={`mb-2 rounded-xl overflow-hidden border-2 transition-colors ${isOpen ? '' : 'border-gray-100'}`} style={isOpen ? { borderColor: week.color } : {}}>
            <button onClick={() => setActiveAct(isOpen ? null : act.id)} className={`flex items-center gap-2.5 px-4 py-3 w-full text-left ${isOpen ? 'bg-gray-50/50' : 'bg-white'}`}>
              <div className={`w-6 h-6 rounded-full flex items-center justify-center text-[11px] shrink-0 ${done ? 'bg-green-500 text-white font-bold' : 'bg-gray-100 text-gray-400'}`}>{done ? '✓' : ai + 1}</div>
              <div className="flex-1"><div className="text-[13px] font-semibold text-gray-800">{act.title}</div><div className="text-[10px] text-gray-400">{act.time}</div></div>
              <span className={`text-sm text-gray-300 transition-transform ${isOpen ? 'rotate-180' : ''}`}>⌄</span>
            </button>
            {isOpen && (
              <div className="px-4 pb-4">
                <div className="text-xs text-gray-500 leading-relaxed mb-3 p-2.5 bg-yellow-50 rounded-lg border-l-3" style={{ borderLeftColor: week.color, borderLeftWidth: 3 }}>{act.description}</div>
                <TemplateRenderer template={act.template} actId={act.id} responses={responses} onUpdate={handleUpdate} />
              </div>
            )}
          </div>
        );
      })}

      {/* ── STEP 4: PITCH-BACK ── */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 mt-5">Step 4 — Pitch Back</div>
      <Toggle title={week.pitchBack.title} icon="🎤" color="#E8453C">
        <div className="p-3 bg-red-50/50 rounded-lg border border-red-100">
          <div className="text-xs font-semibold text-red-600 mb-2">{week.pitchBack.instructions}</div>
          <div className="space-y-1 mb-3">
            {week.pitchBack.points.map((p, i) => <div key={i} className="text-xs text-gray-600 pl-2"><span className="font-bold text-red-500">{i + 1}.</span> {p}</div>)}
          </div>
          <div className="text-[11px] text-gray-400 italic p-2 bg-white rounded border border-gray-100 mb-3">{week.pitchBack.format}</div>
          <div className="space-y-2">
            <div>
              <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Pitch notes:</label>
              <textarea className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50/50 outline-none focus:border-blue-300 resize-y min-h-[50px]"
                placeholder="Draft your pitch..." value={(responses[`pitch_${weekId}`] || {}).text || ''}
                onChange={e => handleUpdate(`pitch_${weekId}`, { text: e.target.value })} />
            </div>
            <div>
              <label className="text-[11px] font-semibold text-gray-500 mb-1 block">Mentor feedback:</label>
              <textarea className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-gray-50/50 outline-none focus:border-blue-300 resize-y min-h-[40px]"
                placeholder="Feedback received..." value={(responses[`pitch_feedback_${weekId}`] || {}).text || ''}
                onChange={e => handleUpdate(`pitch_feedback_${weekId}`, { text: e.target.value })} />
            </div>
          </div>
        </div>
      </Toggle>

      {/* ── UPLOAD PRESENTATION ── */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 mt-5">Upload Presentation</div>
      <div className="bg-white rounded-xl border border-gray-100 p-4 mb-4">
        <input ref={fileInputRef} type="file" accept=".pdf,.pptx,.ppt,.doc,.docx,.key,.png,.jpg" onChange={handleFileUpload} className="hidden" id="file-upload" />
        <label htmlFor="file-upload" className={`flex items-center justify-center gap-2 w-full p-3 rounded-lg border-2 border-dashed cursor-pointer transition-all ${uploading ? 'border-blue-300 bg-blue-50' : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}>
          <span className="text-lg">{uploading ? '⏳' : '📎'}</span>
          <span className="text-xs text-gray-500">{uploading ? 'Uploading...' : 'Click to upload your presentation (PDF, PPTX, images)'}</span>
        </label>
        {uploads.length > 0 && (
          <div className="mt-3 space-y-1.5">
            {uploads.map((f, i) => (
              <a key={i} href={f.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-xs text-blue-600 hover:text-blue-800 p-2 bg-blue-50 rounded-lg">
                <span>📄</span>
                <span className="flex-1 truncate">{f.name}</span>
                <span className="text-[10px] text-gray-400">{new Date(f.uploadedAt).toLocaleDateString()}</span>
              </a>
            ))}
          </div>
        )}
      </div>

      {/* ── STEP 5: REFLECT ── */}
      <div className="text-[10px] font-bold text-gray-300 uppercase tracking-widest mb-2 mt-5">Step 5 — Reflect</div>
      <div className="p-4 bg-purple-50/50 rounded-xl border border-purple-100">
        <h3 className="text-sm font-bold text-purple-600 mb-1">📝 Weekly Reflection</h3>
        <p className="text-[11px] text-gray-400 mb-2">{week.reflection}</p>
        <textarea className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm bg-white outline-none focus:border-purple-300 resize-y min-h-[60px]"
          placeholder="Write your reflection here..." value={(responses[`reflection_${weekId}`] || {}).text || ''}
          onChange={e => handleUpdate(`reflection_${weekId}`, { text: e.target.value })} />
      </div>

      {/* Nav */}
      <div className="flex justify-between mt-6 gap-3">
        {weekId > 1 && <button onClick={() => { router.push(`/week/${weekId - 1}`); window.scrollTo(0, 0); }}
          className="px-4 py-2.5 bg-white border-2 border-gray-100 rounded-lg text-xs font-semibold text-gray-400 hover:border-gray-200">
          ← Week {weekId - 1}
        </button>}
        <div className="flex-1" />
        {weekId < 15 && <button onClick={() => { router.push(`/week/${weekId + 1}`); window.scrollTo(0, 0); }}
          className="px-4 py-2.5 rounded-lg text-xs font-semibold text-white" style={{ background: week.color }}>
          Week {weekId + 1} →
        </button>}
      </div>

      <div className="text-center py-8 text-[10px] text-gray-300">Auto-saves as you type.</div>
    </div>
  );
}
