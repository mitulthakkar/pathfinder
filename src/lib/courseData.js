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
    // ─────────────────────────────────────────────────────────────
// PASTE THIS AS THE `learning` PROPERTY OF WEEK 1 in courseData.js
// Replace the existing learning: { ... } block for Week 1
// ─────────────────────────────────────────────────────────────

learning: {
  title: "Watch, Read & Reflect — Week 1 (6-8 hrs)",
  items: [
    // ── SECTION: KNOW YOURSELF ─────────────────────────────
    {
      section: "Know Yourself First",
      type: "youtube",
      label: "Ikigai — Finding Your Purpose (Animated)",
      search: "ikigai explained simple animation",
      why: "Japanese concept mapping what you love, what you're good at, what the world needs, and what you can earn from. The foundation of everything this week.",
      duration: "5-8 min",
      noteKey: "w1_ikigai"
    },
    {
      section: "Know Yourself First",
      type: "youtube",
      label: "How to Know Your Strengths — Ali Abdaal",
      search: "Ali Abdaal how to find your strengths",
      why: "Practical framework for auditing your real skills vs. what you assume about yourself. Watch before the Mirror Interview activity.",
      duration: "10-15 min",
      noteKey: "w1_strengths"
    },
    {
      section: "Know Yourself First",
      type: "youtube",
      label: "The Danger of Following Your Passion — Cal Newport",
      search: "Cal Newport passion hypothesis craftsman mindset TEDx",
      why: "Most people say 'follow your passion.' Cal Newport says that's backwards. This will shift how you think about career choice fundamentally.",
      duration: "12 min",
      noteKey: "w1_passion"
    },
    {
      section: "Know Yourself First",
      type: "youtube",
      label: "What Are Transferable Skills?",
      search: "transferable skills explained examples career",
      why: "You have more skills than you think. This helps you see everyday abilities as career assets — critical before the Flow State exercise.",
      duration: "6 min",
      noteKey: "w1_transferable"
    },

    // ── SECTION: DEPTH VS BREADTH ──────────────────────────
    {
      section: "Depth vs. Breadth",
      type: "youtube",
      label: "Generalist vs Specialist — Which Should You Be?",
      search: "generalist vs specialist career which is better 2024",
      why: "Should you go deep on one thing or know a little about many things? This is one of the most important early career questions. Watch before forming an opinion.",
      duration: "10 min",
      noteKey: "w1_gen_vs_spec"
    },
    {
      section: "Depth vs. Breadth",
      type: "youtube",
      label: "The T-Shaped Person — Why It Beats Both",
      search: "T-shaped person skills explained career depth breadth",
      why: "The best career model isn't pure generalist OR pure specialist — it's a T. Broad awareness + deep expertise in one area. This concept will shape your Week 14 path decision.",
      duration: "8 min",
      noteKey: "w1_tshaped"
    },
    {
      section: "Depth vs. Breadth",
      type: "youtube",
      label: "The 10,000 Hour Rule — Is It Real?",
      search: "10000 hour rule Malcolm Gladwell explained is it true",
      why: "Malcolm Gladwell's famous idea — does it take 10,000 hours to master something? And if so, what should you spend those hours on? A critical watch before deciding where to go deep.",
      duration: "10 min",
      noteKey: "w1_10000hrs"
    },
    {
      section: "Depth vs. Breadth",
      type: "read",
      label: "Article: Range — Why Generalists Triumph in a Specialized World (Summary)",
      search: "David Epstein Range book summary generalists specialized world",
      why: "David Epstein's counter to the 10,000 hour rule. He argues that sampling broadly before specializing leads to more creative, adaptive careers. Read the summary — it will genuinely surprise you.",
      duration: "12 min read",
      noteKey: "w1_range"
    },

    // ── SECTION: FOCUS & ACHIEVEMENT ──────────────────────
    {
      section: "Focus: Achieving Anything You Set Your Mind To",
      type: "youtube",
      label: "The Science of Focus — How to Concentrate Deeply",
      search: "science of focus deep work concentration Cal Newport explained",
      why: "Why is focus becoming rare — and therefore more valuable? Cal Newport's 'Deep Work' concept explains why the ability to focus without distraction is a superpower in the modern world.",
      duration: "12 min",
      noteKey: "w1_deepwork"
    },
    {
      section: "Focus: Achieving Anything You Set Your Mind To",
      type: "youtube",
      label: "How to Achieve Your Most Ambitious Goals — Stephen Duneier",
      search: "Stephen Duneier how to achieve ambitious goals TEDx marginal adjustments",
      why: "A man who couldn't focus decided to learn German. Then he crocheted the world's largest blanket. Then he crossed the English Channel. His method is simple and you can use it today.",
      duration: "18 min",
      noteKey: "w1_ambitious_goals"
    },
    {
      section: "Focus: Achieving Anything You Set Your Mind To",
      type: "youtube",
      label: "Atomic Habits — The Framework for Getting 1% Better Every Day",
      search: "Atomic Habits James Clear summary 1 percent better every day",
      why: "James Clear's framework: you don't rise to the level of your goals, you fall to the level of your systems. This video will change how you think about self-improvement.",
      duration: "10 min",
      noteKey: "w1_atomic_habits"
    },
    {
      section: "Focus: Achieving Anything You Set Your Mind To",
      type: "youtube",
      label: "Why You Can Achieve Anything — The Growth Mindset",
      search: "growth mindset vs fixed mindset Carol Dweck explained",
      why: "Stanford psychologist Carol Dweck's research: people who believe their abilities can be developed (growth mindset) achieve more than those who don't. This is backed by decades of data.",
      duration: "10 min",
      noteKey: "w1_growth_mindset"
    },
    {
      section: "Focus: Achieving Anything You Set Your Mind To",
      type: "youtube",
      label: "Grit: The Power of Passion and Perseverance — Angela Duckworth TED",
      search: "Angela Duckworth grit power passion perseverance TED talk",
      why: "What predicts success more than IQ, talent, or family income? Grit — the combination of passion and perseverance. One of the most important TED talks ever given.",
      duration: "6 min",
      noteKey: "w1_grit"
    },
    {
      section: "Focus: Achieving Anything You Set Your Mind To",
      type: "read",
      label: "Article: The Myth of the Overnight Success",
      search: "overnight success myth hard work years behind it examples",
      why: "Every 'overnight success' was actually 10 years in the making. Read about 3-4 companies or individuals who looked like they came from nowhere — and what was actually happening behind the scenes.",
      duration: "10 min read",
      noteKey: "w1_overnight"
    },

    // ── SECTION: CASE STUDIES ─────────────────────────────
    {
      section: "Case Studies: People Who Made It Big",
      type: "youtube",
      label: "Dhirubhai Ambani — From Petrol Pump to ₹5 Lakh Crore Empire",
      search: "Dhirubhai Ambani success story Reliance from scratch India",
      why: "Started selling bhajias at a fair, worked as a petrol pump attendant, built India's most valuable company. If you watch one Indian entrepreneurship story this week, make it this one.",
      duration: "15-20 min",
      noteKey: "w1_dhirubhai"
    },
    {
      section: "Case Studies: People Who Made It Big",
      type: "youtube",
      label: "Kiran Mazumdar-Shaw — Biocon: Built India's Biggest Biotech from a Garage",
      search: "Kiran Mazumdar Shaw Biocon success story India entrepreneur",
      why: "Rejected by every bank. Told biotech was too risky. Built a ₹80,000 crore company. A story about being told 'no' and building anyway.",
      duration: "12-15 min",
      noteKey: "w1_kiran"
    },
    {
      section: "Case Studies: People Who Made It Big",
      type: "youtube",
      label: "Elon Musk — First Principles Thinking and Refusing to Accept Limits",
      search: "Elon Musk first principles thinking success story early life",
      why: "Before Tesla and SpaceX, Musk was bankrupt. He was sleeping on friends' couches. This is the story of HOW he thinks — not just what he built.",
      duration: "15 min",
      noteKey: "w1_musk"
    },
    {
      section: "Case Studies: People Who Made It Big",
      type: "youtube",
      label: "Oprah Winfrey — Poverty, Abuse, and Building a Media Empire",
      search: "Oprah Winfrey success story from poverty to billionaire",
      why: "Born into poverty in rural Mississippi. Abused as a child. Fired from her first TV job. Then built a billion-dollar media empire. The story of resilience.",
      duration: "12 min",
      noteKey: "w1_oprah"
    },
    {
      section: "Case Studies: People Who Made It Big",
      type: "youtube",
      label: "Narayana Murthy — How Infosys Was Built on ₹10,000",
      search: "Narayana Murthy Infosys story started with 10000 rupees",
      why: "Six friends. ₹10,000. A vision to prove Indian software could compete globally. Today Infosys employs 300,000+ people. A story you need to know.",
      duration: "12-15 min",
      noteKey: "w1_murthy"
    },
    {
      section: "Case Studies: People Who Made It Big",
      type: "youtube",
      label: "The Airbnb Rejection Story — Turned Down by Every Investor",
      search: "Airbnb rejection story investors brian chesky early days",
      why: "Airbnb couldn't get any investor to take them seriously. They sold cereal boxes to survive. How they turned 'nobody believes in us' into a $75 billion company is a masterclass in persistence.",
      duration: "10 min",
      noteKey: "w1_airbnb"
    },
    {
      section: "Case Studies: People Who Made It Big",
      type: "read",
      label: "Article: 10 Indian Entrepreneurs Who Started With Nothing",
      search: "Indian entrepreneurs started with nothing rags to riches success stories",
      why: "A curated list of Indian founders who had no advantages — no money, no connections, no elite education. Read at least 3-4 stories in full.",
      duration: "15 min read",
      noteKey: "w1_indian_founders"
    },

    // ── SECTION: ENTREPRENEURSHIP ──────────────────────────
    {
      section: "What Is Entrepreneurship, Really?",
      type: "youtube",
      label: "What Is Entrepreneurship? — The Real Definition",
      search: "what is entrepreneurship really means definition explained simply",
      why: "Not just 'starting a business.' Entrepreneurship is a mindset — seeing problems as opportunities, taking calculated risks, creating value. This video defines it properly.",
      duration: "8 min",
      noteKey: "w1_entrepreneurship_def"
    },
    {
      section: "What Is Entrepreneurship, Really?",
      type: "youtube",
      label: "The Difference Between an Entrepreneur and an Employee Mindset",
      search: "entrepreneur mindset vs employee mindset difference explained",
      why: "This isn't about which is better — it's about understanding how each mindset thinks about risk, ownership, time, and money. Which resonates more with you?",
      duration: "10 min",
      noteKey: "w1_entrepreneur_vs_employee"
    },
    {
      section: "What Is Entrepreneurship, Really?",
      type: "youtube",
      label: "Why Most Startups Fail — And What the Survivors Did Differently",
      search: "why startups fail top reasons success factors Y Combinator",
      why: "90% of startups fail. This isn't to scare you — it's to make you smarter about what entrepreneurship actually requires. Watch this before romanticizing it.",
      duration: "12 min",
      noteKey: "w1_startup_failure"
    },
    {
      section: "What Is Entrepreneurship, Really?",
      type: "youtube",
      label: "Social Entrepreneurship — Changing the World AND Making Money",
      search: "social entrepreneurship explained examples India impact",
      why: "Entrepreneurship doesn't have to mean a tech startup. Social entrepreneurs solve problems in education, healthcare, environment. See what's possible beyond the typical startup narrative.",
      duration: "10 min",
      noteKey: "w1_social_entrepreneurship"
    },
    {
      section: "What Is Entrepreneurship, Really?",
      type: "youtube",
      label: "Guy Kawasaki — The Art of the Start: What Entrepreneurs Must Know",
      search: "Guy Kawasaki art of the start entrepreneur advice",
      why: "Former Apple evangelist Guy Kawasaki distills the essential mindsets every entrepreneur needs. Practical, funny, and packed with insight.",
      duration: "15 min",
      noteKey: "w1_kawasaki"
    },
    {
      section: "What Is Entrepreneurship, Really?",
      type: "read",
      label: "Article: You Don't Have to Start a Company to Be an Entrepreneur",
      search: "intrapreneurship explained entrepreneurial mindset without starting company",
      why: "The entrepreneurial mindset is valuable INSIDE companies too — it's called intrapreneurship. Many of the world's most impactful innovations came from employees who thought like founders.",
      duration: "8 min read",
      noteKey: "w1_intrapreneur"
    },
  ]
},
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
  // ═══════════════════════════════════════════════════════════════════
//  STOCK MARKETS & EQUITY — Full Week
//  INSERT this object into the WEEKS array in courseData.js
//  Recommended position: after Week 7 (Finance Careers), before Week 8 (Tech & AI)
//  This makes it the new Week 8, and shift existing weeks 8+ by 1
//  OR add as Week 16 at the end if you want to keep numbering intact
// ═══════════════════════════════════════════════════════════════════

{
  id: 8, phase: 2, phaseTitle: "What's Actually Out There?",
  title: "Stock Markets & Equity", 
  subtitle: "How ownership, money, and markets actually work",
  gain: "You'll understand what a stock is, how markets work, how to read key financial metrics, and how to evaluate any publicly traded company — skills most adults never learn.",
  color: "#C0392B", icon: "📈",

  mentor: {
    key: "cp",
    topic: "How I Think About Equity, Valuations, and What Makes a Good Investment",
    agenda: "CP will walk you through how a professional actually evaluates a company before investing. He'll bring real examples — companies you know — and show you how to read a P&L and balance sheet through an investor's eyes. He'll explain the difference between how retail investors think vs. how smart money thinks. Bring your Stock Evaluation from Activity 8c.",
    prepQuestion: "Before the session, pick ONE company whose stock is listed on NSE or BSE that you find interesting (Zomato, Tata Motors, Infosys, anything). Write down: What do you think this company is worth and why? Just your gut feeling — we'll compare it to the real numbers."
  },

  learning: {
    title: "Watch, Read & Take Notes — Full Week (8-10 hrs)",
    items: [

      // ── SECTION 1: WHAT IS A STOCK? ──────────────────────────────
      {
        section: "What Is a Stock? The Ownership Concept",
        type: "youtube",
        label: "What Is a Stock? — Explained Simply for Beginners",
        search: "what is a stock share explained simply beginners",
        why: "The absolute foundation. A share = a piece of ownership in a real company. This video makes the concept visceral and clear before anything else.",
        duration: "8 min",
        noteKey: "stock_what_is"
      },
      {
        section: "What Is a Stock? The Ownership Concept",
        type: "youtube",
        label: "Why Do Companies Issue Shares? The IPO Explained",
        search: "why do companies issue shares IPO explained simply India",
        why: "Companies don't give away ownership for fun — they do it to raise money. Understanding WHY shares exist makes every other concept click.",
        duration: "10 min",
        noteKey: "stock_why_shares"
      },
      {
        section: "What Is a Stock? The Ownership Concept",
        type: "youtube",
        label: "How an IPO Works — From Private to Public Company",
        search: "how IPO works explained step by step India NSE BSE listing",
        why: "The moment a private company becomes public — one of the most important events in business. See exactly how it happens, who makes money, and why it matters.",
        duration: "12 min",
        noteKey: "stock_ipo"
      },
      {
        section: "What Is a Stock? The Ownership Concept",
        type: "youtube",
        label: "What Are Dividends and How Do You Make Money from Stocks?",
        search: "how do you make money from stocks dividends capital appreciation explained",
        why: "Two ways to make money from owning shares: dividends (company pays you) and capital appreciation (price goes up). Know the difference.",
        duration: "8 min",
        noteKey: "stock_dividends"
      },
      {
        section: "What Is a Stock? The Ownership Concept",
        type: "read",
        label: "Article: BSE and NSE — India's Two Stock Exchanges Explained",
        search: "BSE NSE difference India stock exchange explained Bombay National",
        why: "India has two main exchanges. Know what they are, how they differ, what SENSEX and NIFTY 50 actually measure, and why these numbers are reported on the news every day.",
        duration: "10 min read",
        noteKey: "stock_bse_nse"
      },

      // ── SECTION 2: HOW STOCK MARKETS WORK ────────────────────────
      {
        section: "How Stock Markets Actually Work",
        type: "youtube",
        label: "How the Stock Market Works — The Full Mechanism",
        search: "how stock market works explained buyers sellers price discovery India",
        why: "Who sets the price of a stock? How does buying and selling actually happen? Why do prices move minute by minute? This demystifies the whole system.",
        duration: "12 min",
        noteKey: "market_mechanism"
      },
      {
        section: "How Stock Markets Actually Work",
        type: "youtube",
        label: "Bull Markets vs Bear Markets — What They Mean and Why They Happen",
        search: "bull market vs bear market explained causes India examples",
        why: "You'll hear these terms constantly. A bull market = prices rising. Bear = prices falling. But WHY do they happen? The psychology and economics behind market cycles.",
        duration: "10 min",
        noteKey: "market_bull_bear"
      },
      {
        section: "How Stock Markets Actually Work",
        type: "youtube",
        label: "Market Crashes — What Causes Them and What Happens After",
        search: "stock market crash history causes 2008 2020 India what happens after",
        why: "Every market has crashed multiple times. 1929, 2000, 2008, 2020. What caused each one? What happened to investors who stayed in vs. panic-sold? The answer will surprise you.",
        duration: "15 min",
        noteKey: "market_crashes"
      },
      {
        section: "How Stock Markets Actually Work",
        type: "youtube",
        label: "How SENSEX and NIFTY 50 Are Calculated",
        search: "how SENSEX NIFTY 50 calculated index explained India",
        why: "When the news says 'SENSEX fell 500 points today' — what does that actually mean? How are these indices constructed, and why do they matter?",
        duration: "8 min",
        noteKey: "market_sensex_nifty"
      },
      {
        section: "How Stock Markets Actually Work",
        type: "youtube",
        label: "Who Actually Moves Markets? FIIs, DIIs, Retail Investors Explained",
        search: "FII DII retail investor India stock market who moves markets explained",
        why: "Foreign Institutional Investors (FIIs) can move entire markets by themselves. Understanding who the major players are — and how they think differently — is essential market literacy.",
        duration: "10 min",
        noteKey: "market_players"
      },

      // ── SECTION 3: EQUITY VS DEBT ─────────────────────────────────
      {
        section: "Equity vs. Debt — The Fundamental Difference",
        type: "youtube",
        label: "Equity vs Debt — What's the Difference? Explained Simply",
        search: "equity vs debt difference explained simply finance ownership lending",
        why: "The most fundamental distinction in all of finance. Equity = ownership with risk and upside. Debt = lending with fixed return and priority. Everything in finance flows from this.",
        duration: "10 min",
        noteKey: "equity_vs_debt"
      },
      {
        section: "Equity vs. Debt — The Fundamental Difference",
        type: "youtube",
        label: "What Are Bonds and How Do They Work?",
        search: "what are bonds how do they work explained simply India government corporate",
        why: "Bonds = debt instruments. When you buy a government bond, you're lending money to the government. This is the 'safe' alternative to stocks — but is it really safer?",
        duration: "10 min",
        noteKey: "bonds_explained"
      },
      {
        section: "Equity vs. Debt — The Fundamental Difference",
        type: "youtube",
        label: "Preference Shares vs Ordinary Shares — What's the Difference?",
        search: "preference shares vs ordinary shares difference explained India",
        why: "Not all shareholders are equal. Preference shareholders get paid first but have no voting rights. Understanding the capital structure of a company matters when evaluating it.",
        duration: "8 min",
        noteKey: "equity_pref_vs_ordinary"
      },
      {
        section: "Equity vs. Debt — The Fundamental Difference",
        type: "youtube",
        label: "Debt-to-Equity Ratio — How Much Debt Is Too Much?",
        search: "debt to equity ratio explained too much debt company analysis",
        why: "Companies borrow money to grow. But how much debt is dangerous? The D/E ratio tells you how leveraged a company is. You'll use this in your stock evaluation.",
        duration: "8 min",
        noteKey: "equity_debt_ratio"
      },
      {
        section: "Equity vs. Debt — The Fundamental Difference",
        type: "read",
        label: "Article: Why Equity Is More Valuable Than Debt (For Investors)",
        search: "why equity investing better than debt long term wealth creation India historical returns",
        why: "Over any 20-year period in Indian market history, equity has outperformed debt. But it's not without pain. Read the data on long-term equity returns vs. FD/bond returns.",
        duration: "10 min read",
        noteKey: "equity_vs_debt_returns"
      },

      // ── SECTION 4: KEY METRICS ────────────────────────────────────
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "P/E Ratio (Price-to-Earnings) — The Most Important Metric",
        search: "PE ratio explained simply how to use price to earnings stock valuation India",
        why: "The P/E ratio is the single most-used valuation metric in investing. It answers: 'How much am I paying for ₹1 of this company's earnings?' A high P/E = expensive. A low P/E = cheap. But it's more nuanced than that.",
        duration: "12 min",
        noteKey: "metric_pe"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "Market Capitalisation — What It Is and Why It Matters",
        search: "market capitalisation explained simply large cap mid cap small cap India",
        why: "Market cap = share price × total shares. It tells you the market's opinion of what the entire company is worth. Large cap, mid cap, small cap — these categories determine risk and return profiles.",
        duration: "8 min",
        noteKey: "metric_market_cap"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "EPS (Earnings Per Share) — What It Means and Why It Moves Prices",
        search: "EPS earnings per share explained stock market India how to calculate",
        why: "EPS tells you how much profit a company makes per share. When a company beats its expected EPS, the stock usually jumps. When it misses, it falls. This is why quarterly results matter.",
        duration: "8 min",
        noteKey: "metric_eps"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "ROE and ROCE — The Best Measure of Management Quality",
        search: "ROE ROCE return on equity capital employed explained India stock analysis",
        why: "ROE = how efficiently a company uses shareholders' money to generate profit. ROCE = same but including debt. A company with consistently high ROE (20%+) is usually run by excellent management.",
        duration: "10 min",
        noteKey: "metric_roe_roce"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "P/B Ratio (Price-to-Book) — Buying ₹1 of Assets for Less",
        search: "price to book ratio explained PB ratio stock valuation India",
        why: "Book value = what the company is theoretically worth if it sold all its assets and paid all debts. P/B ratio tells you: are you buying ₹1 of assets for 50 paise or ₹5? Used heavily in banking stocks.",
        duration: "8 min",
        noteKey: "metric_pb"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "Revenue Growth, Profit Margins, and Free Cash Flow — The Trinity",
        search: "revenue growth profit margins free cash flow explained stock analysis India",
        why: "Revenue is how much a company earns. Margin is what's left after costs. Free Cash Flow is actual cash generated — this is the hardest to fake and the most important. Learn all three.",
        duration: "12 min",
        noteKey: "metric_revenue_margins_fcf"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "Dividend Yield — Getting Paid to Own Shares",
        search: "dividend yield explained how to calculate India which companies pay dividends",
        why: "Some companies share profits with shareholders regularly. Dividend yield tells you what % annual return you get just from dividends. Key for income investors and retirees.",
        duration: "8 min",
        noteKey: "metric_dividend_yield"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "youtube",
        label: "How to Read a Stock Chart — Candlesticks, Support, Resistance",
        search: "how to read stock chart candlestick chart support resistance India beginners",
        why: "Before you can analyze a stock, you need to read its chart. Candlestick charts, support and resistance levels, trends — this is the visual language of markets.",
        duration: "15 min",
        noteKey: "chart_reading"
      },
      {
        section: "The Metrics That Matter — How to Evaluate Any Stock",
        type: "read",
        label: "Tool: Screener.in — How to Use India's Best Free Stock Research Platform",
        search: "screener.in how to use stock research India tutorial beginners",
        why: "Screener.in is the best free tool for researching Indian stocks. You can see all key metrics, historical financials, growth trends, and peer comparisons in one place. You'll use this for Activity 8c.",
        duration: "15 min",
        noteKey: "tool_screener"
      },

      // ── SECTION 5: INVESTING PHILOSOPHIES ────────────────────────
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "Warren Buffett — Value Investing Explained Simply",
        search: "Warren Buffett value investing explained simply buy hold long term",
        why: "Buy wonderful companies at fair prices and hold them forever. Buffett's philosophy in one sentence. But understanding WHY it works requires understanding intrinsic value, moats, and patience.",
        duration: "15 min",
        noteKey: "invest_buffett"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "What Is a Moat? Why Some Companies Stay Dominant Forever",
        search: "economic moat explained competitive advantage Warren Buffett stocks India",
        why: "Buffett only buys companies with a 'moat' — a durable competitive advantage that prevents competitors from eating their profits. Think: what stops someone from copying Zomato? HDFC Bank? Asian Paints?",
        duration: "10 min",
        noteKey: "invest_moat"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "Index Funds vs Individual Stocks — What Even Experts Get Wrong",
        search: "index funds vs individual stocks which is better India Nifty 50 index investing",
        why: "Most professional fund managers fail to beat the index over 10 years. This video explains why index funds — simply buying all 50 NIFTY stocks — outperform most active strategies over time.",
        duration: "12 min",
        noteKey: "invest_index_vs_stock"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "Mutual Funds and SIPs — The Smartest Way to Start Investing in India",
        search: "mutual funds SIP explained India beginners how to start investing",
        why: "A Systematic Investment Plan (SIP) lets you invest ₹500/month into a diversified fund. This is how most Indians should start. Understand the mechanics, types of funds, and expense ratios.",
        duration: "12 min",
        noteKey: "invest_mutual_funds_sip"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "The Power of Compounding in the Stock Market — Why Time Is Everything",
        search: "power of compounding stock market India long term wealth creation examples",
        why: "₹10,000 invested in Infosys at its IPO in 1993 is worth over ₹3 crore today. Time in the market beats timing the market. This video shows the math with Indian examples.",
        duration: "10 min",
        noteKey: "invest_compounding"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "Rakesh Jhunjhunwala — India's Warren Buffett and His Investing Philosophy",
        search: "Rakesh Jhunjhunwala investing philosophy India big bull stocks",
        why: "India's most celebrated stock market investor. How he built ₹40,000 crore from a few thousand rupees. His specific thought process on picking stocks, holding conviction, and thinking long-term.",
        duration: "15 min",
        noteKey: "invest_rj"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "youtube",
        label: "Common Mistakes Every Beginner Makes in the Stock Market",
        search: "common stock market mistakes beginners India emotional investing tips",
        why: "Buy high sell low. Panic during corrections. Follow tips. Ignore fundamentals. These mistakes cost crores. Watch this before ever putting real money in the market.",
        duration: "12 min",
        noteKey: "invest_mistakes"
      },
      {
        section: "How Smart Investors Actually Think",
        type: "read",
        label: "Article: The 10 Most Important Rules of Investing — Morgan Housel",
        search: "Morgan Housel psychology of money key lessons rules of investing",
        why: "Morgan Housel's 'The Psychology of Money' is the most important personal finance book of the decade. Read this summary of its key ideas — especially why behaviour matters more than knowledge in investing.",
        duration: "15 min read",
        noteKey: "invest_psychology"
      },

      // ── SECTION 6: REAL WORLD APPLICATION ────────────────────────
      {
        section: "Putting It All Together",
        type: "youtube",
        label: "How to Research a Stock From Scratch — Full Walkthrough",
        search: "how to research a stock from scratch India full analysis screener zerodha",
        why: "A professional analyst shows exactly how they pick a stock to evaluate — what they look at first, what metrics matter, what red flags to avoid. Watch this before Activity 8c.",
        duration: "20 min",
        noteKey: "apply_research"
      },
      {
        section: "Putting It All Together",
        type: "youtube",
        label: "Zerodha Varsity — Best Free Stock Market Education in India",
        search: "Zerodha Varsity stock market course India free education modules",
        why: "Zerodha built the most comprehensive free stock market education in India. varsity.zerodha.com covers everything from basics to options. Bookmark this — it's what you study after this week.",
        duration: "10 min (overview)",
        noteKey: "apply_zerodha_varsity"
      },
      {
        section: "Putting It All Together",
        type: "read",
        label: "Article: How to Start Investing in India — Step-by-Step for a 17-Year-Old",
        search: "how to start investing India teenager minor demat account steps",
        why: "You can open a demat account with a guardian as a minor. This article walks through the exact steps — which broker to use, what documents you need, how much to start with.",
        duration: "10 min read",
        noteKey: "apply_start_investing"
      },
    ]
  },

  activities: [
    {
      id: "eq_a", title: "The Concept Check — 10 Things You Now Know", time: "20 min",
      description: "Before doing any research, write down — in your own words, as simply as possible — your understanding of each concept below. Use the Feynman technique: if a 12-year-old couldn't understand your explanation, simplify it. This exercise reveals what you actually understood vs. what you just heard.",
      template: {
        type: "list",
        prompt: "Explain each concept in 1-2 sentences of plain English:",
        items: 10,
        placeholder: [
          "What is a share? (in one sentence, what am I actually owning?)",
          "Why does a share price go up or down?",
          "What is the difference between equity and debt?",
          "What does a P/E ratio tell me?",
          "What is market capitalisation and why does it matter?",
          "What is ROE and what does a high ROE tell me about a company?",
          "What is a bull market vs a bear market?",
          "What is an index fund and why do most fund managers fail to beat it?",
          "What is a dividend and how does it work?",
          "What does 'intrinsic value' mean — and why does Buffett care about it?"
        ]
      }
    },
    {
      id: "eq_b", title: "Build the Metrics Cheat Sheet", time: "30 min",
      description: "Every serious investor has a mental checklist of metrics they run through when evaluating a stock. Build yours. For each metric, write: what it measures, how it's calculated, and what 'good' looks like. You'll use this in Activity 8c.",
      template: {
        type: "comparison",
        columns: ["What it measures", "How calculated", "What 'good' looks like"],
        rows: [
          "P/E Ratio",
          "P/B Ratio",
          "EPS (Earnings Per Share)",
          "Market Capitalisation",
          "ROE (Return on Equity)",
          "ROCE (Return on Capital Employed)",
          "Debt-to-Equity Ratio",
          "Revenue Growth (YoY %)",
          "Net Profit Margin",
          "Free Cash Flow",
          "Dividend Yield",
          "52-Week High/Low"
        ]
      }
    },
    {
      id: "eq_c", title: "Evaluate a Real Company — Full Stock Analysis", time: "90 min",
      description: "Go to screener.in and search for ANY company whose stock is listed in India. Pick something you find interesting — a brand you use, a company CP mentioned, or one from the case studies. Fill in every field below using REAL data. This is what a real analyst does.",
      template: {
        type: "pitch",
        fields: [
          { label: "Company name and ticker symbol (e.g. Zomato / ZOMATO)", placeholder: "" },
          { label: "What does this company actually DO? (explain the business simply)", placeholder: "They make money by..." },
          { label: "Revenue last year and revenue 3 years ago — is it growing?", placeholder: "Last year: ₹___ | 3 years ago: ₹___ | Growth rate: __%" },
          { label: "Is the company profitable? Net profit and net profit margin?", placeholder: "Net profit: ₹___ | Margin: __%" },
          { label: "P/E Ratio — and is it high or low for this industry?", placeholder: "P/E: ___ | Industry avg: ___ | My read:" },
          { label: "Market Cap — Large, Mid, or Small cap?", placeholder: "Market cap: ₹___ | Category:" },
          { label: "ROE and Debt-to-Equity Ratio", placeholder: "ROE: __% | D/E: ___ | What this tells me:" },
          { label: "What is their competitive MOAT? Why can't someone easily copy them?", placeholder: "Their unfair advantage is..." },
          { label: "What are the biggest RISKS to this company?", placeholder: "The main risks are..." },
          { label: "Based on all this, do you think this stock is OVERVALUED, FAIRLY VALUED, or UNDERVALUED? Why?", placeholder: "I think it is ___ because..." },
          { label: "Would you buy this stock with ₹10,000 of your money today? Why or why not?", placeholder: "Yes/No because..." }
        ]
      }
    },
    {
      id: "eq_d", title: "Compare Two Competitors — Head to Head", time: "45 min",
      description: "Pick two companies in the SAME industry (e.g. HDFC Bank vs ICICI Bank, Zomato vs Swiggy if listed, Infosys vs TCS, Asian Paints vs Berger). Compare them head to head on every metric. This is how fund managers decide which horse to back.",
      template: {
        type: "comparison",
        columns: ["Company 1", "Company 2"],
        rows: [
          "Company name",
          "Revenue (last year)",
          "Revenue growth (3yr)",
          "Net profit margin",
          "P/E ratio",
          "Market cap",
          "ROE",
          "Debt-to-Equity",
          "Dividend yield",
          "Competitive moat",
          "Biggest risk",
          "Which would I buy and why?"
        ]
      }
    },
    {
      id: "eq_e", title: "The ₹1 Lakh Portfolio — If You Had to Invest Today", time: "30 min",
      description: "Imagine you have ₹1,00,000 to invest in the Indian stock market RIGHT NOW. You have to allocate it across at least 3 different companies or funds. You cannot put more than ₹40,000 in one place. Justify every decision with data from your research. This forces you to think like an investor, not a spectator.",
      template: {
        type: "career_log",
        careers: [
          {
            label: "Investment 1",
            fields: [
              "Company / Fund name",
              "Amount allocated (₹)",
              "Why this one? (metrics that convinced me)",
              "How long would I hold? (months/years)",
              "What would make me sell?"
            ]
          },
          {
            label: "Investment 2",
            fields: [
              "Company / Fund name",
              "Amount allocated (₹)",
              "Why this one?",
              "How long would I hold?",
              "What would make me sell?"
            ]
          },
          {
            label: "Investment 3",
            fields: [
              "Company / Fund name",
              "Amount allocated (₹)",
              "Why this one?",
              "How long would I hold?",
              "What would make me sell?"
            ]
          },
          {
            label: "Portfolio Summary",
            fields: [
              "Total equity vs debt allocation (e.g. 80% stocks, 20% index fund)",
              "Overall risk level of this portfolio (low/medium/high) and why",
              "What would panic me into selling everything — and should I?",
              "What did CP's session change about how you'd allocate this?"
            ]
          }
        ]
      }
    }
  ],

  pitchBack: {
    title: "Week 8 Pitch-Back — The Investment Committee (15 min)",
    instructions: "Present like you're pitching to a real investment committee. Stand up. Use data. Own your conviction.",
    points: [
      "Present your full stock analysis from Activity 8c — company, metrics, moat, risks, and your buy/hold/sell verdict",
      "Show your head-to-head competitor comparison — which company won and why?",
      "Present your ₹1 lakh portfolio — walk through every allocation decision with justification",
      "What's ONE metric or concept from this week that completely changed how you see money and investing?",
      "If you could give one piece of investing advice to your parents right now, what would it be — and why?"
    ],
    format: "This is an investment committee presentation. Every number you say should be real. Every opinion should be backed by data. CP will ask hard questions — that's the point. If he disagrees with your thesis, defend it."
  },

  reflection: "Before this week, how did you think about the stock market? What specifically changed? Name ONE company you want to follow for the next 6 months and explain why you chose it."
},
  {
    id: 9, phase: 2, title: "Tech, AI & the Future", subtitle: "Careers that didn't exist 5 years ago",
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
    id: 10, phase: 3, title: "GTM & Customer Acquisition", subtitle: "How businesses actually get customers",
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
    id: 11, phase: 3, title: "Leadership & Organizations", subtitle: "How large companies work — and leaders think",
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
    id: 12, phase: 3, title: "Thinking at Scale", subtitle: "Large numbers, big systems, how the economy works",
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
    id: 13, phase: 4, title: "The Builder Week", subtitle: "Stop researching. Make something.",
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
    id: 14, phase: 4, title: "Skills & Learning Roadmap", subtitle: "What to learn next",
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
    id: 15, phase: 4, title: "Decision Framework", subtitle: "Choosing your next move",
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
    id: 16, phase: 4, title: "Toolkit & The Letter", subtitle: "Leave with assets, not just ideas",
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
