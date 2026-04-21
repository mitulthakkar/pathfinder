export const MENTORS = {
  mitul: { name: "Mitul", emoji: "🧠", skill: "Thinking & Problem Framing", color: "#8338EC" },
  kanika: { name: "Kanika", emoji: "🤝", skill: "HR & People Skills", color: "#E8453C" },
  nishant: { name: "Nishant", emoji: "🚀", skill: "Problem Solving & GTM", color: "#2D7DD2" },
  cp: { name: "CP Shukla", emoji: "📊", skill: "Finance & Fundraising", color: "#1B998B" },
};

export const PHASE_COLORS = {
  1: { bg: "#FFF3EE", accent: "#E86F3F", label: "Phase 1", title: "Who Am I, Actually?" },
  2: { bg: "#EEF6FF", accent: "#2D7DD2", label: "Phase 2", title: "What's Actually Out There?" },
  3: { bg: "#FFF8EE", accent: "#E67E22", label: "Phase 3", title: "Business Reality" },
  4: { bg: "#F3EEFF", accent: "#8338EC", label: "Phase 4", title: "What Do I Do Now?" },
};

export const WEEKS = [
  // ══ PHASE 1 ══
  {
    id: 1, phase: 1, title: "The Audit", subtitle: "Discover what you already know about yourself",
    gain: "Uncover hidden strengths, natural interests, and patterns you've never noticed about yourself.",
    color: "#E86F3F", icon: "🔍",
    mentor: { key: "mitul", topic: "How to Think About Yourself as a Problem",
      agenda: "Mitul will teach you a framework for breaking any problem into parts — and this week, YOU are the problem to solve. He'll help you separate 'what I think I should want' from 'what I actually care about.' Come with your Flow State list ready.",
      prepQuestion: "Write down: 'What is one thing I do that I'm good at but never thought of as a skill?'" },
    learning: { title: "Watch & Read Before You Start", items: [
      { type: "youtube", label: "Ikigai — Finding Your Purpose (Animated)", search: "ikigai explained simple animation", why: "Japanese concept mapping what you love, what you're good at, what the world needs, and what you can be paid for.", duration: "5-8 min" },
      { type: "youtube", label: "How to Know Your Strengths", search: "Ali Abdaal how to find your strengths", why: "Practical framework for auditing your real skills vs. assumptions.", duration: "10-15 min" },
      { type: "youtube", label: "The Danger of Following Your Passion", search: "Cal Newport passion hypothesis craftsman mindset TEDx", why: "Cal Newport says 'follow your passion' is backwards. This will shift how you think about career choice.", duration: "12 min" },
      { type: "read", label: "Article: 'So Good They Can't Ignore You' Summary", search: "Cal Newport so good they can't ignore you book summary key ideas", why: "Core idea: skills trump passion.", duration: "10 min read" },
      { type: "youtube", label: "What Are Transferable Skills?", search: "transferable skills explained examples career", why: "You have more skills than you think.", duration: "6 min" },
    ]},
    activities: [
      { id: "1a", title: "Flow State Mapping", time: "30 min", description: "List every activity where you lose track of time. Not what you SHOULD enjoy — what actually absorbs you.", template: { type: "list", prompt: "Activities where I lose track of time:", items: 6, placeholder: ["e.g. Drawing characters","e.g. Fixing things","e.g. Explaining concepts","e.g. Organizing playlists","e.g. Reading about science","e.g. Building in games"] } },
      { id: "1b", title: "Problem Radar", time: "20 min", description: "What problems do you naturally notice? Your 'complaint patterns' reveal what you care about fixing.", template: { type: "list", prompt: "Problems I keep noticing:", items: 5, placeholder: ["e.g. Bad app design","e.g. Poor explanations","e.g. Food waste","e.g. No public spaces","e.g. Arguments without listening"] } },
      { id: "1c", title: "Mirror Interview", time: "45 min", description: "Ask 3 people: 'What am I naturally good at that I might not realize?' Write their exact words.", template: { type: "interview", prompt: "What others see in me:", people: [{ label: "Person 1 (name & relationship)", response: "What they said:" },{ label: "Person 2", response: "What they said:" },{ label: "Person 3", response: "What they said:" }] } },
    ],
    pitchBack: { title: "Week 1 Pitch-Back (5 min)", instructions: "Present to your group:", points: ["Top 3 patterns across all exercises","One strength others see that I didn't","One insight from Ikigai or Cal Newport"], format: "Stand up. No slides. 5 minutes like explaining to a friend." },
    reflection: "What patterns emerge? What surprised you?"
  },
  {
    id: 2, phase: 1, title: "Values & Life Design", subtitle: "What kind of life do you actually want?",
    gain: "Build a personal 'life compass' — a clear picture of the life you want, not just the job title.",
    color: "#D4543A", icon: "🧭",
    mentor: { key: "nishant", topic: "How Problem-Solvers Think About Their Own Lives",
      agenda: "Nishant shares how he thinks about trade-offs — same as a business problem, applied to life. He'll walk through his career pivots. Bring your 'Ideal Tuesday at 28.'",
      prepQuestion: "Write: 'One thing I'm NOT willing to compromise on in my future life?'" },
    learning: { title: "Watch & Read Before You Start", items: [
      { type: "youtube", label: "Designing Your Life — Bill Burnett (Stanford)", search: "Bill Burnett designing your life TEDx Stanford", why: "Design thinking applied to your own life.", duration: "15 min" },
      { type: "youtube", label: "The Tail End — Kurzgesagt", search: "Kurzgesagt the tail end time", why: "How much time you actually have. Makes life design feel urgent.", duration: "5 min" },
      { type: "youtube", label: "How to Make Hard Choices — Ruth Chang", search: "Ruth Chang how to make hard choices TED talk", why: "Hard choices = deciding who you want to become.", duration: "14 min" },
      { type: "read", label: "Article: Eisenhower Matrix for Life", search: "Eisenhower matrix life priorities important vs urgent", why: "Separate important from urgent.", duration: "8 min read" },
      { type: "youtube", label: "What They Don't Tell You About Adulting", search: "things nobody tells you about adult life career honest", why: "Helps you write a realistic 'Ideal Tuesday.'", duration: "10 min" },
    ]},
    activities: [
      { id: "2a", title: "The Trade-Off Game", time: "20 min", description: "Pick one from each pair. No 'both' allowed.", template: { type: "tradeoffs", pairs: [["High salary, rigid schedule","Lower salary, total freedom"],["Famous but busy","Unknown but peaceful"],["Work alone on deep problems","Work with a team daily"],["Big city","Quiet / rural"],["Stable, predictable","Risky, huge upside"],["Help individuals","Change systems for millions"],["Create new things","Improve existing things"],["Work with hands","Work with ideas/screens"]] } },
      { id: "2b", title: "My Ideal Tuesday at 28", time: "30 min", description: "Not a vacation. A regular day. Be specific.", template: { type: "longtext", prompt: "My ideal Tuesday at age 28:", placeholder: "I wake up at ___. I live in ___. Morning: ___. Work involves ___. People around me: ___. Evening: ___...", minLines: 8 } },
      { id: "2c", title: "Non-Negotiables", time: "15 min", description: "What you absolutely need vs. want to avoid.", template: { type: "twocol", leftTitle: "✅ I need:", rightTitle: "🚫 I want to avoid:", items: 5, leftPlaceholder: ["Creative freedom","Family time","Financial security","Meaningful work","Nature"], rightPlaceholder: ["Desk all day","Office politics","Repetitive work","Micromanagement","Long commute"] } },
    ],
    pitchBack: { title: "Week 2 Pitch-Back (5 min)", instructions: "Present your Life Design:", points: ["Read your 'Ideal Tuesday' vividly","Top 3 non-negotiables and WHY","One insight from Bill Burnett or Ruth Chang"], format: "Share like telling a close friend what you want from life." },
    reflection: "Write a one-paragraph 'life compass statement.'"
  },
  {
    id: 3, phase: 1, title: "Learning How to Learn", subtitle: "The meta-skill behind every other skill",
    gain: "Discover your learning style and build a self-education system that works for YOU.",
    color: "#C0392B", icon: "📖",
    mentor: { key: "mitul", topic: "Frameworks for Thinking Clearly",
      agenda: "Mitul introduces mental models — First Principles, Inversion, Second-Order Thinking. How top performers actually make decisions.",
      prepQuestion: "Write: 'One subject I struggled with — WHY? Was it the subject or how it was taught?'" },
    learning: { title: "Watch & Read This Week", items: [
      { type: "youtube", label: "Learning How to Learn — Barbara Oakley", search: "Barbara Oakley learning how to learn Coursera summary", why: "Most enrolled online course in history, condensed.", duration: "15 min" },
      { type: "youtube", label: "The Feynman Technique", search: "Feynman technique explained how to learn anything", why: "If you can't explain it simply, you don't understand it.", duration: "8 min" },
      { type: "youtube", label: "Active Recall & Spaced Repetition", search: "Ali Abdaal active recall spaced repetition study tips", why: "Two most proven study techniques. Most students use neither.", duration: "12 min" },
      { type: "youtube", label: "5 Best Free Learning Platforms", search: "best free online learning platforms 2024 Coursera Khan Academy", why: "Your self-education guide after this program.", duration: "10 min" },
      { type: "read", label: "Article: Mental Models Guide", search: "Farnam Street mental models beginners guide", why: "Primer for Mitul's session. Bookmark this site.", duration: "15 min read" },
    ]},
    activities: [
      { id: "3a", title: "Learning Style Audit", time: "25 min", description: "How do you ACTUALLY learn best?", template: { type: "list", prompt: "My learning patterns:", items: 5, placeholder: ["When/where do I learn best?","Reading, watching, doing, or explaining?","What did I learn fastest outside school?","What makes me zone out?","Something I taught myself — how?"] } },
      { id: "3b", title: "Feynman Exercise", time: "30 min", description: "Pick a concept from this week. Explain it as if teaching a 12-year-old.", template: { type: "longtext", prompt: "My Feynman explanation:", placeholder: "Concept: ___\n\nSimplest terms:\n\nReal-life example:\n\nPart I had to re-learn:", minLines: 8 } },
      { id: "3c", title: "Self-Learning Plan", time: "20 min", description: "Design a weekly self-study system.", template: { type: "list", prompt: "My learning system:", items: 5, placeholder: ["Platform to use","First subject outside school","When I'll study (days/times)","How I'll use active recall","How I'll track progress"] } },
    ],
    pitchBack: { title: "Week 3 Pitch-Back (5 min)", instructions: "Teach the room:", points: ["Explain your concept like we're 12","Show your self-learning plan","One surprise about how YOU learn"], format: "TEACHING presentation. If we don't understand = simplify more." },
    reflection: "How does your learning differ from school's expectations?"
  },
  // ══ PHASE 2 ══
  {
    id: 4, phase: 2, title: "Invisible Careers", subtitle: "The world is way bigger than you think",
    gain: "Discover 10+ careers you never knew existed and understand what people actually do daily.",
    color: "#2D7DD2", icon: "🌍",
    mentor: { key: "kanika", topic: "What Companies Actually Look For",
      agenda: "Kanika explains roles inside a real company, how job titles map to work, what skills beat degrees. Bring your 4 careers.",
      prepQuestion: "Write: 'What do I think companies look for when hiring?'" },
    learning: { title: "Watch on YouTube & Research", items: [
      { type: "youtube", label: "Day in the Life — UX Designer (India)", search: "day in the life UX designer India 2024", why: "Meetings, wireframes, user research.", duration: "10-12 min" },
      { type: "youtube", label: "Day in the Life — Management Consultant", search: "day in the life management consultant India McKinsey Bain", why: "The reality of consulting.", duration: "10-12 min" },
      { type: "youtube", label: "Day in the Life — Product Manager", search: "day in the life product manager startup India 2024", why: "Didn't exist 15 years ago, now most in-demand.", duration: "8-10 min" },
      { type: "youtube", label: "Day in the Life — Supply Chain", search: "day in the life supply chain manager operations logistics", why: "Invisible engine behind every product.", duration: "8-10 min" },
      { type: "youtube", label: "Day in the Life — Data Scientist", search: "day in the life data scientist India realistic", why: "Most hyped career. What do they actually DO?", duration: "10 min" },
      { type: "guided_search", label: "Find More on YouTube", instructions: "Search YouTube:", searchTerms: ["day in the life environmental engineer India","day in the life sports analytics","day in the life sound designer film","day in the life urban planner India","day in the life biomedical engineer"] },
    ]},
    activities: [
      { id: "4a", title: "Career Exploration Log", time: "60 min", description: "Watch at least 4 YouTube 'Day in Life' videos.", template: { type: "career_log", careers: [
        { label: "Career 1", fields: ["Career & video title","What they do (specifics)","What surprised me","Would I enjoy this?"] },
        { label: "Career 2", fields: ["Career & video","What they do","Surprise","Enjoy?"] },
        { label: "Career 3", fields: ["Career & video","What they do","Surprise","Enjoy?"] },
        { label: "Career 4", fields: ["Career & video","What they do","Surprise","Enjoy?"] },
      ] } },
      { id: "4b", title: "2-Minute Career Pitch", time: "40 min", description: "Pick ONE career. Prepare a pitch.", template: { type: "pitch", fields: [
        { label: "Career title", placeholder: "e.g. Product Manager" },
        { label: "What they do (from YouTube)", placeholder: "Mornings involve..." },
        { label: "Who thrives here", placeholder: "Someone who..." },
        { label: "Path to get in", placeholder: "Typically..." },
        { label: "One surprise", placeholder: "Nobody tells you..." },
        { label: "Match my values? (Week 2)", placeholder: "Yes/No because..." },
      ] } },
    ],
    pitchBack: { title: "Week 4 Pitch-Back (5 min)", instructions: "Deliver your Career Pitch:", points: ["2-min pitch like a TED talk","Which 4 YouTube careers?","Best match for your Life Compass?"], format: "Teach the room a career they've never heard of." },
    reflection: "Did any career light something up? Connect to Weeks 1-3?"
  },
  {
    id: 5, phase: 2, title: "The Conversation Week", subtitle: "Real humans > career websites",
    gain: "Conduct real professional interviews and hear career truths no website tells you.",
    color: "#2589BD", icon: "🎙️",
    mentor: { key: "kanika", topic: "How to Talk to Professionals",
      agenda: "Kanika role-plays a curiosity interview with you before your real ones.",
      prepQuestion: "Write your top 3 questions and say them aloud." },
    learning: { title: "Watch on YouTube Before Interviews", items: [
      { type: "youtube", label: "How to Network as a Student", search: "how to network as student LinkedIn informational interview tips", why: "Reaching out professionally.", duration: "10 min" },
      { type: "youtube", label: "Art of the Informational Interview", search: "informational interview how to questions tips career", why: "What to ask, what NOT to ask.", duration: "8 min" },
      { type: "youtube", label: "LinkedIn for Students", search: "LinkedIn for students beginners guide profile tips 2024", why: "Massive head start.", duration: "12 min" },
      { type: "youtube", label: "How to Ask Good Questions", search: "Tim Ferriss how to ask good questions interview", why: "Question quality = conversation quality.", duration: "8 min" },
      { type: "template", label: "Outreach Template", content: "Hi [Name], I'm [Your Name], a 17-year-old exploring careers. I'm curious about your day-to-day in [field]. Would you be open to a 15-minute call? I have specific questions and promise to respect your time." },
    ]},
    activities: [
      { id: "5a", title: "Find Your 3 People", time: "30 min", description: "Identify 2-3 adults to interview.", template: { type: "list", prompt: "People I'll reach out to:", items: 3, placeholder: ["Name, role, how I'll contact, date","Name, role, contact, date","Name, role, contact, date"] } },
      { id: "5b", title: "Interview Notes", time: "15 min each", description: "Use these questions. Take notes.", template: { type: "interview_guide", questions: ["What does a typical day look like?","How did you end up here?","What surprised you most?","Hardest part outsiders don't see?","If you were 17 again?","Skills school doesn't teach?"], noteFields: [{ label: "Interview 1", placeholder: "Biggest learning..." },{ label: "Interview 2", placeholder: "Biggest learning..." },{ label: "Interview 3", placeholder: "Biggest learning..." }] } },
    ],
    pitchBack: { title: "Week 5 Pitch-Back (7 min)", instructions: "Share stories:", points: ["Who? How did you reach out?","ONE insight per person","Biggest myth busted?","What was awkward?"], format: "Tell it like a story." },
    reflection: "One thing that shifted how you think about work?"
  },
  {
    id: 6, phase: 2, title: "Money & Personal Finance", subtitle: "How money actually works",
    gain: "Understand P&L, calculate real lifestyle costs, think about money like a planner.",
    color: "#1B998B", icon: "💰",
    mentor: { key: "cp", topic: "Money 101 — Balance Sheet for YOUR Life",
      agenda: "CP teaches P&L, investing in yourself, earning vs. building wealth. Bring Lifestyle Math.",
      prepQuestion: "How much do I need per month at 25 for Week 2's life?" },
    learning: { title: "Watch & Read", items: [
      { type: "youtube", label: "Personal Finance Basics", search: "personal finance basics beginners India salary budget savings", why: "Income, expenses, savings, investing.", duration: "12 min" },
      { type: "youtube", label: "P&L Simplified", search: "profit and loss statement explained simply beginner", why: "Every budget is a P&L.", duration: "8 min" },
      { type: "youtube", label: "What is a Balance Sheet?", search: "balance sheet explained simply beginners assets liabilities", why: "Assets - liabilities = net worth.", duration: "10 min" },
      { type: "youtube", label: "CTC vs In-Hand in India", search: "CTC vs in hand salary India explained tax deductions", why: "'12 LPA' ≠ what you take home.", duration: "10 min" },
      { type: "youtube", label: "Power of Compound Interest", search: "compound interest explained visually power of compounding India", why: "Start at 20 vs 30 = MILLIONS difference.", duration: "8 min" },
      { type: "read", label: "50/30/20 Budgeting Rule", search: "50 30 20 budgeting rule explained India", why: "Simplest framework: 50% needs, 30% wants, 20% savings.", duration: "8 min read" },
      { type: "youtube", label: "Career Salary Comparison", search: "salary comparison different careers India 2024 realistic", why: "Real data across fields.", duration: "10-12 min" },
    ]},
    activities: [
      { id: "6a", title: "Lifestyle Math", time: "30 min", description: "Real numbers for your Week 2 life.", template: { type: "budget", fields: [{ label: "City", placeholder: "e.g. Mumbai..." },{ label: "Monthly rent", placeholder: "₹" },{ label: "Food & daily", placeholder: "₹" },{ label: "Transport", placeholder: "₹" },{ label: "Fun/hobbies", placeholder: "₹" },{ label: "Savings (20%)", placeholder: "₹" },{ label: "Total monthly", placeholder: "₹" },{ label: "Annual CTC needed (×18)", placeholder: "₹" }] } },
      { id: "6b", title: "Personal P&L", time: "25 min", description: "P&L for NOW and projected at 25.", template: { type: "twocol", leftTitle: "💚 Income:", rightTitle: "🔴 Expenses:", items: 5, leftPlaceholder: ["Pocket money","Part-time","At 25: Salary","At 25: Side income","At 25: Returns"], rightPlaceholder: ["Current spending","Subscriptions","At 25: Rent+bills","At 25: Food+transport","At 25: Savings target"] } },
      { id: "6c", title: "Career Comparison", time: "30 min", description: "3 careers with REAL salary data + values.", template: { type: "comparison", columns: ["Career 1","Career 2","Career 3"], rows: ["Name","Starting CTC","In-hand monthly","At 5-7 years","Education needed","Time to earning","Work-life (1-10)","Matches values?"] } },
    ],
    pitchBack: { title: "Week 6 Pitch-Back (7 min)", instructions: "Money Reality:", points: ["Lifestyle Math — cost of ideal life","Personal P&L","Best career for income + values","One thing from CP"], format: "Data presentation. Show numbers." },
    reflection: "Did money reality change your career feelings?"
  },
  {
    id: 7, phase: 2, title: "The World of Finance", subtitle: "VC, Banking, PE, IB — what they actually do",
    gain: "Understand finance from the inside — VC, IB, PE, banking — and whether this world fits you.",
    color: "#16A085", icon: "🏦",
    mentor: { key: "cp", topic: "Inside Finance — Fundraising to Exits",
      agenda: "CP walks through fundraising, what VCs look for, startup to IPO journey, finance career paths. Bring your Finance Career Log.",
      prepQuestion: "Which finance career interests me most — money, challenge, power, or something else?" },
    learning: { title: "Watch All on YouTube — Video-Heavy Week", items: [
      { type: "youtube", label: "Day in the Life — VC", search: "day in the life venture capitalist VC India 2024", why: "VCs decide which startups get funded.", duration: "10-15 min" },
      { type: "youtube", label: "What Does a VC Do?", search: "what does a venture capitalist do explained simply", why: "Funds, carry, how VCs make money.", duration: "12 min" },
      { type: "youtube", label: "Day in the Life — Investment Banker", search: "day in the life investment banker India realistic", why: "Most glamorized finance career.", duration: "12-15 min" },
      { type: "youtube", label: "IB Explained in 5 Min", search: "investment banking explained simply what do investment bankers do", why: "M&A, IPOs, debt issuance.", duration: "5 min" },
      { type: "youtube", label: "Day in the Life — Private Equity", search: "day in the life private equity analyst PE fund", why: "Where the big money is.", duration: "10-12 min" },
      { type: "youtube", label: "PE vs VC Difference", search: "private equity vs venture capital difference explained", why: "Different stages, strategies, skills.", duration: "8 min" },
      { type: "youtube", label: "Day in the Life — Commercial Banker", search: "day in the life banker India commercial banking", why: "Different work-life balance than IB.", duration: "10 min" },
      { type: "youtube", label: "Startup Fundraising Explained", search: "startup fundraising explained seed series A B C India", why: "Angel to IPO journey.", duration: "10 min" },
      { type: "read", label: "Finance Career Paths Map", search: "finance career paths India complete guide", why: "Every finance career path.", duration: "15 min read" },
    ]},
    activities: [
      { id: "7a", title: "Finance Career Comparison", time: "45 min", description: "Compare 4 finance careers.", template: { type: "comparison", columns: ["VC","IB","PE","Banking"], rows: ["Daily work","Starting salary","At 5-7 years","Work-life (1-10)","Education path","Key skills","Personality fit","What appeals","Concerns","Matches values?"] } },
      { id: "7b", title: "Finance Deep-Dive", time: "30 min", description: "Pick ONE. Write in detail.", template: { type: "pitch", fields: [{ label: "Which and why", placeholder: "Drawn to... because..." },{ label: "A day (from YouTube)", placeholder: "They start by..." },{ label: "Path to get there", placeholder: "Need to..." },{ label: "What CP said", placeholder: "CP explained..." },{ label: "My strengths connection", placeholder: "My ___ helps..." },{ label: "Honest: for me?", placeholder: "After research..." }] } },
      { id: "7c", title: "Fundraising Simulation", time: "25 min", description: "Startup pitch from Week 1 Problem Radar.", template: { type: "longtext", prompt: "My pitch + fundraising:", placeholder: "Problem: ___\nPitch: We solve [X] for [Y] by [Z].\nFunding: ₹___ because...\nSpend: 1)... 2)... 3)...\nVC would ask:...\nAnswer:...", minLines: 10 } },
    ],
    pitchBack: { title: "Week 7 Pitch-Back (10 min)", instructions: "Present like finance pro:", points: ["4-career comparison walkthrough","Deep-dive on chosen career","Startup pitch + fundraising","How money flows (from CP)"], format: "Most data-heavy yet. Use table. Specific numbers." },
    reflection: "Finance more or less interesting? What surprised you?"
  },
  {
    id: 8, phase: 2, title: "Tech, AI & the Future", subtitle: "Careers that didn't exist 5 years ago",
    gain: "Understand how tech reshapes every industry. Discover tech-adjacent careers without coding.",
    color: "#6C5CE7", icon: "🤖",
    mentor: { key: "nishant", topic: "Technology as a Career Multiplier",
      agenda: "Nishant explains how tech intersects with EVERY field. GTM for tech products.",
      prepQuestion: "What technology do I use daily that I take for granted?" },
    learning: { title: "Watch & Read", items: [
      { type: "youtube", label: "AI Jobs in 5 Years", search: "AI jobs careers future 2025 2030 new roles", why: "Prompt engineering, AI ethics, AI PM.", duration: "12 min" },
      { type: "youtube", label: "Non-Coding Tech Careers", search: "tech careers without coding non technical roles 2024", why: "PM, tech writing, UX research, sales engineering.", duration: "10 min" },
      { type: "youtube", label: "AI Changing Every Industry", search: "how AI is changing industries healthcare finance education 2024", why: "AI isn't just for tech companies.", duration: "15 min" },
      { type: "youtube", label: "No-Code Tools", search: "no code tools explained build app without coding 2024", why: "Build products without programming.", duration: "10 min" },
      { type: "youtube", label: "Day in Life — AI/ML Engineer", search: "day in the life machine learning engineer AI India 2024", why: "If you like coding — most in-demand role.", duration: "10-12 min" },
      { type: "read", label: "Skills That Matter in 2030", search: "World Economic Forum skills 2030 future of work report", why: "Data on which skills will be most valuable.", duration: "10 min read" },
    ]},
    activities: [
      { id: "8a", title: "Tech Impact Map", time: "30 min", description: "3 industries + how tech/AI changes each.", template: { type: "career_log", careers: [
        { label: "Industry 1", fields: ["Name","How tech changes it","New roles","Old roles replaced"] },
        { label: "Industry 2", fields: ["Name","How tech changes it","New roles","Old roles replaced"] },
        { label: "Industry 3", fields: ["Name","How tech changes it","New roles","Old roles replaced"] },
      ] } },
      { id: "8b", title: "Tech Skill Assessment", time: "20 min", description: "Honest tech skills check.", template: { type: "list", prompt: "My tech reality:", items: 5, placeholder: ["Tools I use well","Interested in coding?","One no-code tool to try","One AI tool to learn","Tech in my career path?"] } },
    ],
    pitchBack: { title: "Week 8 Pitch-Back (5 min)", instructions: "Tech Impact:", points: ["Map — AI changing your industries?","New careers of interest?","Tech skill plan"], format: "Brief non-tech people on what's coming." },
    reflection: "Excited or anxious about AI? How does tech fit Week 2's life?"
  },
  // ══ PHASE 3 ══
  {
    id: 9, phase: 3, title: "GTM & Customer Acquisition", subtitle: "How businesses actually get customers",
    gain: "Understand the complete customer journey and why EVERY role connects to getting customers.",
    color: "#F39C12", icon: "📣",
    mentor: { key: "nishant", topic: "GTM from Zero — Launching Products & Acquiring Customers",
      agenda: "Nishant walks through real GTM strategies. B2B vs B2C, customer segments, funnels, why 'build it and they will come' is the biggest lie. Bring GTM canvas.",
      prepQuestion: "Pick a product you use. Write: How did I discover it? What made me start? What makes me stay?" },
    learning: { title: "Watch & Read — Business Week", items: [
      { type: "youtube", label: "Go-To-Market Strategy Explained", search: "go to market strategy explained simply GTM startup", why: "GTM = how product reaches customers.", duration: "10 min" },
      { type: "youtube", label: "First 100 Customers", search: "how startups get first 100 customers acquisition strategy", why: "Hardest phase. Real founder stories.", duration: "12 min" },
      { type: "youtube", label: "Marketing Funnel — TOFU/MOFU/BOFU", search: "marketing funnel explained TOFU MOFU BOFU customer journey", why: "Awareness → Interest → Purchase.", duration: "8 min" },
      { type: "youtube", label: "B2B vs B2C", search: "B2B vs B2C business model difference explained", why: "Completely different selling approaches.", duration: "8 min" },
      { type: "youtube", label: "Zomato Case Study", search: "Zomato business model case study India growth strategy", why: "Company you use daily. How they acquired customers.", duration: "12-15 min" },
      { type: "youtube", label: "What is CAC?", search: "customer acquisition cost CAC explained simply LTV", why: "Most important number: cost per customer.", duration: "8 min" },
      { type: "youtube", label: "Sales vs Marketing", search: "sales vs marketing difference explained roles", why: "Two sides of same coin, different skills.", duration: "8 min" },
      { type: "read", label: "Indian Startups — First Users", search: "how Indian startups acquired first users Flipkart Ola Razorpay", why: "Real Indian ecosystem stories.", duration: "12 min read" },
      { type: "read", label: "Product-Market Fit", search: "product market fit explained Marc Andreessen startup", why: "If people don't want it, nothing else matters.", duration: "10 min read" },
    ]},
    activities: [
      { id: "9a", title: "Reverse-Engineer a Business", time: "40 min", description: "Pick a product you use. Map their customer acquisition.", template: { type: "pitch", fields: [{ label: "Company", placeholder: "e.g. Zomato" },{ label: "Who is their customer?", placeholder: "Age, location, behavior..." },{ label: "How did YOU discover them?", placeholder: "I found them via..." },{ label: "Why did you try them?", placeholder: "Convinced by..." },{ label: "Why do you stay?", placeholder: "I stay because..." },{ label: "How do they get NEW customers?", placeholder: "Ads, referrals, partnerships..." },{ label: "Estimated CAC?", placeholder: "₹___ per customer because..." },{ label: "Their moat?", placeholder: "Advantage is..." }] } },
      { id: "9b", title: "Design a GTM Strategy", time: "45 min", description: "For a problem from Week 1.", template: { type: "career_log", careers: [
        { label: "Problem & Solution", fields: ["What problem?","Who has it?","Solution in one sentence","How is it different?"] },
        { label: "Acquisition Plan", fields: ["How will people HEAR? (awareness)","How convince to TRY? (conversion)","How make them STAY? (retention)","Estimated CAC — sustainable?"] },
        { label: "GTM Execution", fields: ["Week 1: first 10 customers","Month 1: first 100","Best scaling channels","ONE metric to obsess over"] },
      ] } },
      { id: "9c", title: "Customer Interviews", time: "25 min", description: "5 validation questions. Ask 3 real people.", template: { type: "interview_guide", questions: ["Do you experience [problem]? How often?","What do you currently do about it?","Most annoying part of current solution?","Would you pay for [my solution]? How much?","Where would you find a product like this?"], noteFields: [{ label: "Person 1", placeholder: "Key insight..." },{ label: "Person 2", placeholder: "Key insight..." },{ label: "Person 3", placeholder: "Key insight..." }] } },
    ],
    pitchBack: { title: "Week 9 Pitch-Back (10 min)", instructions: "Pitch like a founder:", points: ["Reverse-engineered business","YOUR GTM: Awareness → Trial → Retention","Customer interview results","ONE surprise from Nishant about acquisition"], format: "Startup pitch. If a VC heard this, would they get how you acquire customers?" },
    reflection: "Every job connects to getting customers. How does this change your career thinking?"
  },
  {
    id: 10, phase: 3, title: "Leadership & Organizations", subtitle: "How large companies work — and leaders think",
    gain: "Understand org structures, cross-functional collaboration, and how leaders make high-stakes decisions.",
    color: "#E74C3C", icon: "👔",
    mentor: { key: "mitul", topic: "The CEO's Brain — Problems at Scale",
      agenda: "Mitul walks through how CEOs think: prioritization, decisions with incomplete info, org design, loneliness of leadership. Real examples. Bring Org Map.",
      prepQuestion: "If you were school principal, what 3 things would you change — and HOW? What would stop you?" },
    learning: { title: "Watch & Read — Leadership Week", items: [
      { type: "youtube", label: "Company Org Structure Explained", search: "company organizational structure explained types functional matrix", why: "How Engineering, Sales, Marketing, HR, Finance fit together.", duration: "10 min" },
      { type: "youtube", label: "What Does a CEO Do All Day?", search: "what does a CEO actually do day in the life CEO schedule", why: "Meetings, decisions, trade-offs, communication.", duration: "12 min" },
      { type: "youtube", label: "Bezos Decision Framework", search: "Jeff Bezos decision making framework type 1 type 2 decisions", why: "One-way vs two-way door decisions.", duration: "8 min" },
      { type: "youtube", label: "Simon Sinek — Start With Why", search: "Simon Sinek start with why TED talk", why: "Most-watched leadership TED talk.", duration: "18 min" },
      { type: "youtube", label: "Google's OKR System", search: "how Google manages OKRs objectives key results explained", why: "How goals cascade CEO → individual.", duration: "10 min" },
      { type: "youtube", label: "Manager vs Leader", search: "manager vs leader difference explained examples", why: "Process vs people+vision. Need both.", duration: "8 min" },
      { type: "youtube", label: "Ratan Tata's Leadership", search: "Ratan Tata leadership style decisions business story", why: "Indian leadership story. $100B+ conglomerate.", duration: "15 min" },
      { type: "read", label: "5 Functions of Every Business", search: "five functions of business operations marketing finance HR explained", why: "What each function does and how they depend on each other.", duration: "10 min read" },
    ]},
    activities: [
      { id: "10a", title: "Org Structure Map", time: "40 min", description: "Pick a company. Map its structure.", template: { type: "career_log", careers: [
        { label: "Company Overview", fields: ["Company & what they do","Approx employees","Main product","Main customer (Week 9)"] },
        { label: "Functions", fields: ["Engineering — builds what?","Sales & Marketing — gets customers how?","Finance — manages money how?","HR — hires/retains how?","Operations — delivers how?"] },
        { label: "Connections", fields: ["How Marketing depends on Product","How Finance constrains everyone","What if Sales overpromises to Engineering?","Most important function for this company?"] },
      ] } },
      { id: "10b", title: "Leadership Simulation", time: "35 min", description: "You're CEO of 500 people. 3 hard decisions.", template: { type: "career_log", careers: [
        { label: "Decision 1: Toxic star performer. 10x output but team morale dropping.", fields: ["My decision:","My reasoning:","What I'm sacrificing:","What Sinek would say:"] },
        { label: "Decision 2: Competitor launched at half price. Board says cut prices. Team says focus quality.", fields: ["My decision:","Reasoning:","Short vs long-term:","Bezos framework says:"] },
        { label: "Decision 3: Cut costs 20%. Lay off 50 OR cut all salaries 15% for a year.", fields: ["My decision:","Reasoning:","Impact on culture:","One-way or two-way door?"] },
      ] } },
      { id: "10c", title: "My Leadership Style", time: "20 min", description: "What kind of leader would you be?", template: { type: "list", prompt: "Leadership self-assessment:", items: 6, placeholder: ["Natural leadership strength (Week 1):","Vision person or execution person?","How I handle conflict (honestly):","Quality I want to develop:","Leader I'd WANT to work for:","Leader I want to BECOME:"] } },
    ],
    pitchBack: { title: "Week 10 Pitch-Back (10 min)", instructions: "Present like briefing a board:", points: ["Org Map walkthrough","3 decisions — own your reasoning","Leadership style assessment","Biggest leadership surprise this week"], format: "Boardroom presentation. Be decisive." },
    reflection: "Do you see yourself as a leader? What kind?"
  },
  {
    id: 11, phase: 3, title: "Thinking at Scale", subtitle: "Large numbers, big systems, how the economy works",
    gain: "Develop intuition for large numbers and understand how businesses and economies operate at scale.",
    color: "#8E44AD", icon: "🔢",
    mentor: { key: "cp", topic: "Feeling Large Numbers — ₹1 Lakh to ₹1,000 Crore",
      agenda: "CP will rewire how you think about numbers. Most people can't feel the difference between ₹1 crore and ₹100 crore. He'll connect numbers to real things: employees, revenue, daily transactions. Real company P&Ls.",
      prepQuestion: "WITHOUT searching: Zomato annual revenue? TCS employees? India's GDP? Write guesses." },
    learning: { title: "Watch & Read — Scale Week", items: [
      { type: "youtube", label: "Wealth Comparison Visualized", search: "wealth comparison visualization million billion trillion", why: "Million vs billion is almost a billion. Visual and unforgettable.", duration: "8 min" },
      { type: "youtube", label: "India's Economy Explained", search: "India economy explained GDP sectors growth simply 2024", why: "Agriculture, manufacturing, services breakdown.", duration: "15 min" },
      { type: "youtube", label: "How to Read an Annual Report", search: "how to read annual report India company balance sheet revenue", why: "Skill that separates business-literate from everyone else.", duration: "12 min" },
      { type: "youtube", label: "Unit Economics Explained", search: "unit economics explained startup revenue cost per unit simply", why: "If one pizza costs ₹200 and sells for ₹180, more pizzas won't help.", duration: "10 min" },
      { type: "youtube", label: "Stock Market Explained", search: "how stock market works explained simply India beginners", why: "Where valuations and fundraising play out.", duration: "12 min" },
      { type: "youtube", label: "India's Largest Companies Ranked", search: "India largest companies by revenue 2024 ranking Reliance TCS", why: "Real numbers for names you hear daily.", duration: "10 min" },
      { type: "read", label: "TAM SAM SOM Explained", search: "TAM SAM SOM market size explained startup example India", why: "'₹30,000 crore market' — what does it mean for a business?", duration: "10 min read" },
      { type: "guided_search", label: "Look Up Real Numbers", instructions: "Build number intuition:", searchTerms: ["Zomato annual revenue 2024 profit loss","TCS number of employees revenue 2024","India GDP 2024 per capita","average Indian household income 2024","how many startups unicorns India 2024"] },
    ]},
    activities: [
      { id: "11a", title: "Number Intuition Challenge", time: "30 min", description: "GUESS each number, then look up. The gap IS the lesson.", template: { type: "comparison", columns: ["My Guess","Actual","How Far Off?"], rows: ["India's GDP (₹ lakh crore)","Reliance annual revenue","TCS employees","Zomato annual revenue","Avg household monthly income","Startups in India","Indian unicorns","Cost to build a mid-size app","Series A typical raise amount","Monthly AWS bill mid-size startup"] } },
      { id: "11b", title: "Read a Real Annual Report", time: "40 min", description: "Screener.in or '[company] annual report 2024'. First 10 pages.", template: { type: "pitch", fields: [{ label: "Company", placeholder: "e.g. Zomato" },{ label: "Revenue", placeholder: "₹" },{ label: "Profitable?", placeholder: "₹ profit/loss" },{ label: "Employees", placeholder: "~" },{ label: "Revenue per employee", placeholder: "₹ — meaning?" },{ label: "Surprise in report", placeholder: "Didn't expect..." },{ label: "One thing I now understand", placeholder: "Now I know..." }] } },
      { id: "11c", title: "Scale a Business", time: "30 min", description: "Week 9 idea: 100 → 10K → 1M customers.", template: { type: "career_log", careers: [
        { label: "At 100 Customers", fields: ["How serve them?","Team size?","Monthly revenue:","Biggest challenge:"] },
        { label: "At 10,000", fields: ["What breaks?","Key hires needed:","Monthly revenue:","New problems at scale:"] },
        { label: "At 1,000,000", fields: ["What's different?","Org structure needed:","Revenue and costs:","Leader needed:"] },
      ] } },
    ],
    pitchBack: { title: "Week 11 Pitch-Back (10 min)", instructions: "Present with real numbers:", points: ["Number Intuition — where most wrong?","Annual report learnings","Scale exercise: 100 → 10K → 1M","ONE mind-blowing number and why"], format: "No more 'a lot of money.' Say the actual amount." },
    reflection: "Can you FEEL the difference between ₹10 lakh and ₹10 crore now?"
  },
  // ══ PHASE 4 ══
  {
    id: 12, phase: 4, title: "The Builder Week", subtitle: "Stop researching. Make something.",
    gain: "Ship a real project in 5 days and prove you can make things.",
    color: "#28A745", icon: "🔨",
    mentor: { key: "nishant", topic: "How to Ship — GTM for Your Project",
      agenda: "GTM from Week 9 applied to YOUR project. Scope, audience, distribution. Meet Day 1-2.",
      prepQuestion: "Come with 2-3 project ideas." },
    learning: { title: "Watch Before Building", items: [
      { type: "youtube", label: "Student Portfolio Projects", search: "student portfolio project ideas how to start beginner 2024", why: "Ideas + making them professional.", duration: "10 min" },
      { type: "youtube", label: "Ship Fast — MVP Way", search: "how to ship a project fast MVP minimum viable product", why: "First version = embarrassingly simple.", duration: "8 min" },
      { type: "youtube", label: "Present Your Work", search: "how to present project portfolio storytelling case study", why: "Problem → Process → Solution → Result.", duration: "10 min" },
      { type: "youtube", label: "Free Tools to Build Anything", search: "free tools students build projects Canva Figma Carrd Notion 2024", why: "No money needed.", duration: "10 min" },
    ]},
    activities: [
      { id: "12a", title: "Pick Your Project", time: "15 min", description: "ONE project. 5 days.", template: { type: "project_picker", options: ["Blog post on Medium/LinkedIn","60-sec explainer video","Figma app mockup","Personal website (Carrd/Google Sites)","Mini business plan","Survey + findings (20+ people)","Podcast interview episode","Infographic","Physical prototype"], prompt: "My project:" } },
      { id: "12b", title: "Daily Build Log", time: "5 min/day × 5", description: "Daily progress log.", template: { type: "daily_log", days: [{ label: "Day 1 — Scope", placeholder: "Defined..." },{ label: "Day 2 — Draft", placeholder: "First version..." },{ label: "Day 3 — Middle", placeholder: "Stuck on... Solved..." },{ label: "Day 4 — Polish", placeholder: "Improved..." },{ label: "Day 5 — Ship", placeholder: "Done. Shared with..." }] } },
    ],
    pitchBack: { title: "Week 12 — DEMO DAY (10 min)", instructions: "SHOW what you built:", points: ["DEMO live","Story: Problem → Audience → Solution","Hardest moment + how you pushed through","What you'd improve with 5 more days"], format: "DEMO DAY. Show first, explain second." },
    reflection: "You MADE something. How does that feel?"
  },
  {
    id: 13, phase: 4, title: "Skills & Learning Roadmap", subtitle: "What to learn next",
    gain: "Build a 6-month self-learning plan with specific courses and milestones.",
    color: "#E17055", icon: "🎯",
    mentor: { key: "kanika", topic: "Skills That Get You Hired vs. Look Good on Paper",
      agenda: "Hiring manager perspective: real skills, portfolios > degrees, positioning with no experience.",
      prepQuestion: "3 skills I want in 6 months." },
    learning: { title: "Watch & Explore", items: [
      { type: "youtube", label: "Teach Yourself Anything", search: "how to teach yourself anything self education roadmap plan", why: "Framework for any skill from scratch.", duration: "12 min" },
      { type: "youtube", label: "Best Free Courses 2024", search: "best free online courses 2024 Coursera edX Khan Academy India", why: "Every major platform.", duration: "10 min" },
      { type: "youtube", label: "Build a Learning Habit", search: "how to build learning habit atomic habits study routine", why: "Continuing > starting.", duration: "10 min" },
      { type: "youtube", label: "Create a Study Plan", search: "how to create study plan schedule self learning effective", why: "Practical templates.", duration: "8 min" },
      { type: "read", label: "Explore Learning Platforms", search: "Coursera free courses catalog 2024", why: "Browse 20 min. Bookmark 3-5.", duration: "20 min" },
    ]},
    activities: [
      { id: "13a", title: "Skills Gap Analysis", time: "25 min", description: "Gap between where you are and need to be.", template: { type: "comparison", columns: ["Skill 1","Skill 2","Skill 3"], rows: ["Name","Why needed (career?)","Current (1-10)","Target in 6 months","Best resource","Weekly time","How to measure"] } },
      { id: "13b", title: "6-Month Roadmap", time: "30 min", description: "Specific. Vague fails.", template: { type: "career_log", careers: [{ label: "Month 1-2", fields: ["What","Resource (name)","Weekly time","Milestone: what I'll DO"] },{ label: "Month 3-4", fields: ["What","Resource","Time","Milestone"] },{ label: "Month 5-6", fields: ["What","Resource","Time","Milestone"] }] } },
    ],
    pitchBack: { title: "Week 13 Pitch-Back (5 min)", instructions: "Your plan:", points: ["Skills Gap table","6-month roadmap with specifics","Kanika's feedback"], format: "Like a training budget proposal." },
    reflection: "In control of your learning now?"
  },
  {
    id: 14, phase: 4, title: "Decision Framework", subtitle: "Choosing your next move",
    gain: "Leave with 2-3 clear paths and a 30-day action plan. Most 17-year-old decisions are reversible.",
    color: "#8338EC", icon: "🗺️",
    mentor: { key: "mitul", topic: "First Principles for Life Decisions",
      agenda: "Mitul teaches first principles: strip 'what everyone does,' build logic from ground up. Challenges assumptions. Bring 3 paths.",
      prepQuestion: "Bring 3 paths. Ready for him to poke holes." },
    learning: { title: "Watch Before Deciding", items: [
      { type: "youtube", label: "Regret Minimization — Bezos", search: "Jeff Bezos regret minimization framework decision making", why: "How Bezos decided to start Amazon.", duration: "5 min" },
      { type: "youtube", label: "5 Career Mistakes at 18", search: "biggest career mistakes young people avoid India 2024", why: "Same 5 errors. Avoid them.", duration: "10 min" },
      { type: "youtube", label: "First Principles Thinking", search: "first principles thinking explained examples Elon Musk", why: "Question every assumption.", duration: "8 min" },
      { type: "youtube", label: "Decisions Under Uncertainty", search: "how to make career decisions uncertainty analysis paralysis", why: "Break the deadlock.", duration: "10 min" },
      { type: "read", label: "One-Way vs Two-Way Doors", search: "Jeff Bezos one way door two way door decisions", why: "Most decisions are reversible.", duration: "8 min read" },
    ]},
    activities: [
      { id: "14a", title: "Options Map", time: "30 min", description: "2-3 paths for next 2-3 years.", template: { type: "options_map", paths: [
        { label: "Path A", fields: [{ label: "Direction", placeholder: "e.g. B.Tech CS + projects" },{ label: "Why fits (Weeks 1-3)", placeholder: "Values, strengths..." },{ label: "Leads to (Weeks 4-11)", placeholder: "Careers..." },{ label: "First step (30 days)", placeholder: "I will..." }] },
        { label: "Path B", fields: [{ label: "Direction", placeholder: "e.g. Commerce + CA" },{ label: "Why fits", placeholder: "" },{ label: "Leads to", placeholder: "" },{ label: "First step", placeholder: "" }] },
        { label: "Path C", fields: [{ label: "Direction", placeholder: "e.g. Design + freelance" },{ label: "Why fits", placeholder: "" },{ label: "Leads to", placeholder: "" },{ label: "First step", placeholder: "" }] },
      ] } },
      { id: "14b", title: "Reversibility Test", time: "15 min", description: "If wrong for 1 year, how hard to switch?", template: { type: "list", prompt: "Reversibility:", items: 3, placeholder: ["Path A — switch by... (ease 1-10)","Path B — switch by...","Path C — switch by..."] } },
    ],
    pitchBack: { title: "Week 14 Pitch-Back (7 min)", instructions: "Your strategy:", points: ["3 paths + WHY (values)","Reversibility scores","Which path + Regret Minimization","FIRST STEP in 30 days"], format: "Pitch your life strategy." },
    reflection: "Which path excites you? Choosing what to explore NEXT."
  },
  {
    id: 15, phase: 4, title: "Toolkit & The Letter", subtitle: "Leave with assets, not just ideas",
    gain: "Graduate with personal narrative, network map, online presence, and a letter to your future self.",
    color: "#7B2D8E", icon: "✉️",
    mentor: { key: "cp", topic: "Your Personal Balance Sheet — Assets for Life",
      agenda: "CP closes the loop: skills and relationships as balance sheet assets. Compounding in skills, reputation, network. The long game.",
      prepQuestion: "3 most valuable things gained in 15 weeks?" },
    learning: { title: "Watch & Read", items: [
      { type: "youtube", label: "Personal Branding for Students", search: "personal branding student LinkedIn portfolio beginner 2024", why: "Authentic, not cringe.", duration: "10 min" },
      { type: "youtube", label: "Compounding Skills — Naval", search: "Naval Ravikant compound interest skills career advice", why: "Small daily = massive over years.", duration: "8 min" },
      { type: "youtube", label: "Write About Yourself", search: "how to write about me personal statement LinkedIn student tips", why: "Most adults struggle with this.", duration: "8 min" },
      { type: "youtube", label: "Maintain Relationships", search: "how to maintain professional network follow up tips career", why: "Keep connections alive.", duration: "10 min" },
      { type: "read", label: "The 100-Hour Rule", search: "100 hour rule skill learning better than 10000 hours", why: "100 focused hours → top 5% of beginners.", duration: "8 min read" },
    ]},
    activities: [
      { id: "15a", title: "Personal Narrative", time: "45 min", description: "3-4 sentence 'About Me.'", template: { type: "longtext", prompt: "My personal narrative:", placeholder: "I'm someone who [Week 1]. I care about [Week 2]. I've explored [Weeks 4-11] and built [Week 12]. I'm pursuing [Week 14].", minLines: 4 } },
      { id: "15b", title: "Network Map", time: "15 min", description: "Everyone who helped.", template: { type: "list", prompt: "My network:", items: 10, placeholder: ["Mitul — lesson:","Kanika — lesson:","Nishant — lesson:","CP — lesson:","Interview 1:","Interview 2:","Interview 3:","Customer interviews:","Peer:","Other:"] } },
      { id: "15c", title: "Letter to Future Me", time: "20 min", description: "One year from today.", template: { type: "longtext", prompt: "Dear Future Me (April 2027),", placeholder: "Right now I feel... Over 15 weeks... Biggest shift... People who helped... Next year I will... I promise...", minLines: 10 } },
    ],
    pitchBack: { title: "Week 15 — GRADUATION (15 min)", instructions: "ALL FOUR mentors. Your 15-week story:", points: ["Who was I 15 weeks ago?","3 biggest discoveries","DEMO Week 12 project","Chosen path + first step","Read 'About Me' aloud","Thank each mentor: ONE thing each taught"], format: "YOUR moment. All mentors, all peers. Stand tall. Confusion → clarity." },
    reflection: "Not just the answer — HOW you think about the question."
  },
];

// ─── Step definitions per week ───
export function getWeekSteps(weekId) {
  return [
    { key: `w${weekId}_learn`, label: "Complete Learning Materials", icon: "📚" },
    { key: `w${weekId}_mentor`, label: "Attend Mentor Session", icon: "🧠" },
    { key: `w${weekId}_activities`, label: "Complete All Activities", icon: "✏️" },
    { key: `w${weekId}_pitch`, label: "Deliver Pitch-Back", icon: "🎤" },
    { key: `w${weekId}_upload`, label: "Upload Presentation", icon: "📎" },
    { key: `w${weekId}_reflect`, label: "Write Reflection", icon: "📝" },
  ];
}

// ─── Progress calculation ───
export function calcWeekProgress(week, studentData) {
  if (!studentData) return 0;
  const steps = getWeekSteps(week.id);
  const completed = steps.filter(s => studentData.completedSteps?.[s.key]).length;
  return Math.round((completed / steps.length) * 100);
}

export function calcTotalProgress(studentData) {
  if (!studentData) return 0;
  const totalSteps = WEEKS.length * 6;
  let completed = 0;
  WEEKS.forEach(w => {
    const steps = getWeekSteps(w.id);
    completed += steps.filter(s => studentData.completedSteps?.[s.key]).length;
  });
  return Math.round((completed / totalSteps) * 100);
}
