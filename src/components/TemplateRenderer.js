'use client';

export default function TemplateRenderer({ template: t, actId, responses, onUpdate }) {
  const val = (f) => (responses[actId] || {})[f] || '';
  const set = (f, v) => onUpdate(actId, { ...(responses[actId] || {}), [f]: v });
  const base = 'w-full px-3 py-2.5 border border-gray-200 rounded-lg text-sm bg-gray-50/50 outline-none focus:border-blue-300 focus:ring-1 focus:ring-blue-100 transition';

  if (t.type === 'list') return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-500">{t.prompt}</label>
      {Array.from({ length: t.items }).map((_, i) => (
        <input key={i} className={base} placeholder={t.placeholder?.[i] || `Item ${i + 1}`}
          value={val(`item_${i}`)} onChange={e => set(`item_${i}`, e.target.value)} />
      ))}
    </div>
  );

  if (t.type === 'longtext') return (
    <div className="space-y-2">
      <label className="text-xs font-semibold text-gray-500">{t.prompt}</label>
      <textarea className={`${base} resize-y`} style={{ minHeight: (t.minLines || 4) * 26 }}
        placeholder={t.placeholder} value={val('text')} onChange={e => set('text', e.target.value)} />
    </div>
  );

  if (t.type === 'tradeoffs') return (
    <div className="space-y-2">
      {t.pairs.map((pair, i) => (
        <div key={i} className="flex gap-2">
          {pair.map((opt, j) => {
            const sel = val(`pair_${i}`) === String(j);
            return (
              <button key={j} onClick={() => set(`pair_${i}`, String(j))}
                className={`flex-1 px-3 py-2.5 rounded-lg text-xs text-left transition-all ${sel ? 'border-2 border-blue-400 bg-blue-50 font-semibold text-blue-700' : 'border-2 border-gray-100 bg-white text-gray-500 hover:border-gray-200'}`}>
                {opt}
              </button>
            );
          })}
        </div>
      ))}
    </div>
  );

  if (t.type === 'interview') return (
    <div className="space-y-3">
      <label className="text-xs font-semibold text-gray-500">{t.prompt}</label>
      {t.people.map((p, i) => (
        <div key={i} className="space-y-1.5 p-3 bg-gray-50 rounded-lg">
          <input className={base} placeholder={p.label} value={val(`person_${i}_name`)} onChange={e => set(`person_${i}_name`, e.target.value)} />
          <textarea className={`${base} resize-y min-h-[50px]`} placeholder={p.response} value={val(`person_${i}_response`)} onChange={e => set(`person_${i}_response`, e.target.value)} />
        </div>
      ))}
    </div>
  );

  if (t.type === 'twocol') return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <label className="text-xs font-semibold text-green-600 mb-2 block">{t.leftTitle}</label>
        {Array.from({ length: t.items }).map((_, i) => (
          <input key={i} className={`${base} mb-2`} placeholder={t.leftPlaceholder?.[i]} value={val(`left_${i}`)} onChange={e => set(`left_${i}`, e.target.value)} />
        ))}
      </div>
      <div>
        <label className="text-xs font-semibold text-red-500 mb-2 block">{t.rightTitle}</label>
        {Array.from({ length: t.items }).map((_, i) => (
          <input key={i} className={`${base} mb-2`} placeholder={t.rightPlaceholder?.[i]} value={val(`right_${i}`)} onChange={e => set(`right_${i}`, e.target.value)} />
        ))}
      </div>
    </div>
  );

  if (t.type === 'pitch') return (
    <div className="space-y-2">
      {t.fields.map((f, i) => (
        <div key={i}>
          <label className="text-[11px] font-semibold text-gray-500 mb-1 block">{f.label}</label>
          <textarea className={`${base} resize-y`} style={{ minHeight: i === 0 ? 34 : 50 }}
            placeholder={f.placeholder} value={val(`field_${i}`)} onChange={e => set(`field_${i}`, e.target.value)} />
        </div>
      ))}
    </div>
  );

  if (t.type === 'interview_guide') return (
    <div className="space-y-3">
      <div className="p-3 bg-orange-50 rounded-lg border border-orange-100">
        <div className="text-xs font-bold text-orange-700 mb-2">Questions to ask:</div>
        {t.questions.map((q, i) => (
          <div key={i} className="text-xs text-orange-800 mb-1 pl-2">{i + 1}. {q}</div>
        ))}
      </div>
      {t.noteFields.map((f, i) => (
        <div key={i}>
          <label className="text-[11px] font-semibold text-gray-500 mb-1 block">{f.label}</label>
          <textarea className={`${base} resize-y min-h-[60px]`} placeholder={f.placeholder}
            value={val(`note_${i}`)} onChange={e => set(`note_${i}`, e.target.value)} />
        </div>
      ))}
    </div>
  );

  if (t.type === 'budget') return (
    <div className="space-y-2">
      {t.fields.map((f, i) => (
        <div key={i} className="flex items-center gap-2">
          <label className="text-xs text-gray-500 flex-1">{f.label}</label>
          <input className={`${base} w-36 shrink-0`} placeholder={f.placeholder}
            value={val(`budget_${i}`)} onChange={e => set(`budget_${i}`, e.target.value)} />
        </div>
      ))}
    </div>
  );

  if (t.type === 'comparison') return (
    <div className="overflow-x-auto">
      <table className="w-full text-xs border-collapse">
        <thead>
          <tr>
            <th className="text-left p-2 border-b-2 border-gray-100"></th>
            {t.columns.map((c, i) => (
              <th key={i} className="p-2 border-b-2 border-gray-100 text-blue-600 font-bold text-[11px]">{c}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {t.rows.map((row, ri) => (
            <tr key={ri}>
              <td className="p-2 font-medium text-gray-500 border-b border-gray-50 text-[11px]">{row}</td>
              {t.columns.map((_, ci) => (
                <td key={ci} className="p-1 border-b border-gray-50">
                  <input className="w-full px-2 py-1.5 border border-gray-200 rounded text-[11px] bg-gray-50/50 outline-none focus:border-blue-300"
                    value={val(`cell_${ri}_${ci}`)} onChange={e => set(`cell_${ri}_${ci}`, e.target.value)} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );

  if (t.type === 'project_picker') return (
    <div className="space-y-2">
      {t.options.map((opt, i) => {
        const sel = val('picked') === String(i);
        return (
          <button key={i} onClick={() => set('picked', String(i))}
            className={`w-full text-left px-3 py-2.5 rounded-lg text-xs transition-all ${sel ? 'border-2 border-green-500 bg-green-50 font-semibold text-green-700' : 'border-2 border-gray-100 text-gray-500 hover:border-gray-200'}`}>
            {opt}
          </button>
        );
      })}
      <label className="text-xs font-semibold text-gray-500 mt-3 block">{t.prompt}</label>
      <input className={base} placeholder="Describe your project..." value={val('custom')} onChange={e => set('custom', e.target.value)} />
    </div>
  );

  if (t.type === 'daily_log') return (
    <div className="space-y-2">
      {t.days.map((d, i) => (
        <div key={i}>
          <label className="text-[11px] font-semibold text-gray-500 mb-1 block">{d.label}</label>
          <textarea className={`${base} resize-y min-h-[44px]`} placeholder={d.placeholder}
            value={val(`day_${i}`)} onChange={e => set(`day_${i}`, e.target.value)} />
        </div>
      ))}
    </div>
  );

  if (t.type === 'options_map') return (
    <div className="space-y-4">
      {t.paths.map((path, pi) => (
        <div key={pi} className="p-3 bg-purple-50/50 rounded-xl border border-purple-100">
          <div className="text-sm font-bold text-purple-600 mb-2">{path.label}</div>
          {path.fields.map((f, fi) => (
            <div key={fi} className="mb-2">
              <label className="text-[11px] font-semibold text-gray-500 mb-1 block">{f.label}</label>
              <input className={base} placeholder={f.placeholder}
                value={val(`path_${pi}_field_${fi}`)} onChange={e => set(`path_${pi}_field_${fi}`, e.target.value)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  if (t.type === 'career_log') return (
    <div className="space-y-4">
      {t.careers.map((career, ci) => (
        <div key={ci} className="p-3 bg-gray-50 rounded-xl border border-gray-100">
          <div className="text-sm font-bold text-blue-600 mb-2">{career.label}</div>
          {career.fields.map((f, fi) => (
            <div key={fi} className="mb-2">
              <label className="text-[11px] font-semibold text-gray-500 mb-1 block">{f}</label>
              <textarea className={`${base} resize-y min-h-[36px] text-xs`} placeholder={`Write about: ${f.toLowerCase()}`}
                value={val(`career_${ci}_field_${fi}`)} onChange={e => set(`career_${ci}_field_${fi}`, e.target.value)} />
            </div>
          ))}
        </div>
      ))}
    </div>
  );

  return null;
}
