// Sample curated asset packs for popular YouTube podcasts & talks
// Each pack contains:
// 1. X (Twitter) Viral Thread (Hook, numbered points, takeaway, CTA)
// 2. LinkedIn Executive Longform Post (Clean formatting, bullets, hashtags)
// 3. 5 Punchy Daily Quotes / Micro-Tweets (For Buffer/Hypefury scheduling)

export const SAMPLE_VIDEOS = {
  naval: {
    id: "naval",
    url: "https://www.youtube.com/watch?v=1-TZqOsVCN8",
    youtubeId: "1-TZqOsVCN8",
    title: "Naval Ravikant: How to Get Rich Without Getting Lucky",
    channel: "Naval",
    views: "5.8M views",
    duration: "3h 22m",
    thumbnail: "https://img.youtube.com/vi/1-TZqOsVCN8/maxresdefault.jpg",
    category: "Wealth & Philosophy",
    hookScore: 99,
    hookType: "Contrarian Paradigm Shift",
    thread: [
      {
        index: 1,
        type: "hook",
        content: `Most people spend 40 years trading time for money.\n\nThen they wonder why they aren't wealthy.\n\nNaval Ravikant dropped a 3-hour masterclass on "How to Get Rich Without Getting Lucky".\n\nHere are the 7 brutal wealth frameworks that will save you 10 years of wasted effort: 🧵👇`
      },
      {
        index: 2,
        type: "body",
        content: `1. Seek Wealth, Not Status or Money\n\n• Money is how we transfer wealth.\n• Status is your rank in the social hierarchy (a zero-sum game).\n• Wealth is having assets that earn while you sleep.\n\nYou don't get wealthy by renting out your time. You get wealthy by owning equity in a productive asset.`
      },
      {
        index: 3,
        type: "body",
        content: `2. Understand the 4 Types of Leverage\n\nTraditional leverage:\n1. Labor (people working for you - messy & hard)\n2. Capital (money working for you)\n\nPermissionless leverage (the modern cheat code):\n3. Code (software)\n4. Media (writing, videos, podcasts)\n\nAn army of robots works for you every time your code or content is consumed.`
      },
      {
        index: 4,
        type: "body",
        content: `3. Arm Yourself with Specific Knowledge\n\nSpecific knowledge is knowledge you cannot be trained for.\n\nIf society can train you, it can train someone else and replace you.\n\nIt is found by pursuing your genuine curiosity and obsession rather than whatever is currently hot in the job market.`
      },
      {
        index: 5,
        type: "body",
        content: `4. Embrace Accountability and Take Business Risks\n\nSociety rewards you with responsibility, equity, and leverage when you put your name on the line.\n\nPeople with high accountability get equity, high trust, and disproportionate upside.\n\nNo risk = no equity = capped upside.`
      },
      {
        index: 6,
        type: "body",
        content: `5. Compound Interest Isn't Just for Money\n\nAll returns in life come from compound interest:\n• Compound relationships (work with high-integrity people long-term)\n• Compound reputation (people trust you over decades)\n• Compound knowledge (concepts stack up exponentially)\n\nPlay long-term games with long-term people.`
      },
      {
        index: 7,
        type: "cta",
        content: `TL;DR Summary:\n\n1. Own equity, stop selling hours\n2. Master code & media leverage\n3. Double down on specific knowledge\n4. Own your name & accountability\n5. Play 20-year compound games\n\nIf you enjoyed this breakdown:\n1. Follow me for more creator & business breakdowns\n2. Repost the first tweet to share the signal with your audience 🔁`
      }
    ],
    linkedinPost: `Most professionals are working 60-hour weeks trading time for a paycheck—and wondering why true financial freedom feels out of reach.

I spent the weekend re-studying Naval Ravikant’s legendary philosophy on "How to Get Rich Without Getting Lucky".

It’s not about luck, inheritance, or working until burnout.
It’s about Leverage, Judgment, and Ownership.

Here is the executive blueprint:

1. Stop Renting Your Time
If your income is tied to 1 hour = $X, your ceiling is permanently locked. You will never get rich renting out your time. You must own equity—a piece of a business, IP, or productive assets—to gain your financial freedom.

2. Master Permissionless Leverage
In the industrial era, leverage meant managing people or raising capital. Both required permission.
Today, the most powerful leverage is permissionless:
→ Code
→ Content / Media
A podcast, a software script, or an article works for you 24/7/365 while you sleep, with zero marginal cost of reproduction.

3. Cultivate Specific Knowledge
If society can train you in a 3-month bootcamp, it can train someone else cheaper.
Specific knowledge cannot be trained; it is curated through your genuine obsessions, unique background, and authentic curiosity. When you build where you have an unfair obsession, work feels like play to you, but looks like impossible work to competitors.

4. Build With Long-Term People
All the true upside in life comes from compound interest:
• In reputation
• In relationships
• In capital
Find high-integrity partners and commit to a 10-year horizon.

Which of these 4 pillars are you prioritizing this quarter?

#Entrepreneurship #WealthCreation #NavalRavikant #Leadership #CareerGrowth #Leverage #Solopreneur`,
    quotes: [
      {
        id: 1,
        text: "You're not going to get rich renting out your time. You must own equity to gain your financial freedom.",
        category: "Wealth & Equity",
        characterCount: 104
      },
      {
        id: 2,
        text: "Code and media are permissionless leverage. They're the leverage behind the newly rich. You can create software and media that works for you while you sleep.",
        category: "Leverage",
        characterCount: 161
      },
      {
        id: 3,
        text: "Play iterated games. All the returns in life, whether in wealth, relationships, or knowledge, come from compound interest.",
        category: "Strategy",
        characterCount: 125
      },
      {
        id: 4,
        text: "Specific knowledge is found by pursuing your genuine curiosity and passion rather than whatever is hot right now.",
        category: "Skill Acquisition",
        characterCount: 116
      },
      {
        id: 5,
        text: "Work as hard as you can. Even though who you work with and what you work on are more important than how hard you work.",
        category: "Productivity",
        characterCount: 121
      }
    ]
  },

  altman: {
    id: "altman",
    url: "https://www.youtube.com/watch?v=0lJKucu6HJc",
    youtubeId: "0lJKucu6HJc",
    title: "Sam Altman: How to Build the Future & AGI Playbook (Y Combinator)",
    channel: "Y Combinator",
    views: "2.4M views",
    duration: "52m",
    thumbnail: "https://img.youtube.com/vi/0lJKucu6HJc/maxresdefault.jpg",
    category: "AI & Startups",
    hookScore: 98,
    hookType: "Insider High-Stakes Vision",
    thread: [
      {
        index: 1,
        type: "hook",
        content: `Sam Altman watched 2,000+ startups at Y Combinator before building OpenAI.\n\nHe distilled everything he learned about hyper-growth and the AI revolution into one talk.\n\nIf you are building a product in the next 3 years, read this thread before you write another line of code: 🧵👇`
      },
      {
        index: 2,
        type: "body",
        content: `1. Compound Yourself Relentlessly\n\nMost careers progress linearly. Great careers progress exponentially.\n\nYou should aim for your life to follow an exponential curve.\n\nEvery project you take on should generate more leverage, more capital, and more reputation for the next one.`
      },
      {
        index: 3,
        type: "body",
        content: `2. Have Almost Delusional Self-Belief\n\nSelf-belief is immensely powerful. The most successful founders believe in their thesis even when the entire consensus thinks they are crazy.\n\nHowever, self-belief must be balanced with ruthless self-awareness.\n\nListen to truth, ignore the naysayers.`
      },
      {
        index: 4,
        type: "body",
        content: `3. Learn to Think Independently\n\nFirst-principles thinking is rare because it is painful.\n\nThinking from first principles:\n• Break a problem down to its fundamental physics\n• Reason up from there\n• Never do things just because "that's how the industry does it"`
      },
      {
        index: 5,
        type: "body",
        content: `4. Get Good at Sales & Evangelism\n\nSelf-belief alone won't build an empire. You must inspire others:\n• Convince brilliant engineers to join you\n• Convince investors to fund you\n• Convince early customers to trust you\n\nEvery great CEO is fundamentally a world-class storyteller.`
      },
      {
        index: 6,
        type: "body",
        content: `5. Focus on What Matters (Cut 90% of the Noise)\n\nStartups die from indigestion, not starvation.\n\nThey do too many things poorly instead of one thing exceptionally.\n\nFind the ONE single metric that moves your company, and ruthlessly cut every meeting or feature that doesn't accelerate it.`
      },
      {
        index: 7,
        type: "cta",
        content: `Key Takeaways from Sam Altman:\n\n• Strive for exponential compounding\n• Pair intense self-belief with truth-seeking\n• Reason from first principles\n• Master evangelism & persuasion\n• Ruthlessly prioritize\n\nFound this valuable?\n1. Follow for deep dives into tech founders & AI frameworks\n2. Retweet the first post to share with other builders! 🚀`
      }
    ],
    linkedinPost: `Sam Altman has evaluated over 2,000 startups and led OpenAI through the fastest technological inflection in human history.

Yet when asked about what separates legendary founders from the rest, he didn't talk about coding frameworks or growth hacks.

He focused on 4 timeless execution principles:

1. Strive for Exponential Compounding
Most professionals plan in 1-year linear increments. 
The top 1% structure their work so that every asset, relationship, and learning builds compounding leverage for the next 5 years. Ask yourself: "Does this project expand my leverage or just pay my invoice?"

2. The Power of Extreme Focus
Startups rarely die from competition; they die from doing 10 mediocre things simultaneously. 
Identify the single core bottleneck holding back your growth. Say "no" to the 99 good opportunities so you can say "yes" to the 1 defining breakthrough.

3. Sales is a Founder's Superpower
You cannot outsource conviction. Whether you are recruiting world-class AI researchers, pitching enterprise clients, or rallying your team through a downturn—your ability to evangelize a compelling future is your highest-ROI skill.

4. Fast Execution Trumps Perfect Strategy
In fast-moving markets, speed of iteration beats quality of initial plan every single time. A team that ships 5 experiments a week will always lap a team that spends 3 months in committee meetings.

The future belongs to builders who pair bold vision with ferocious execution speed.

What is the biggest leverage project you are executing this month?

#Startups #OpenAI #SamAltman #ArtificialIntelligence #Leadership #TechTrends #VentureCapital`,
    quotes: [
      {
        id: 1,
        text: "Extreme people get extreme results. A big secret is that you can bend the world to your will a surprising percentage of the time.",
        category: "Mindset",
        characterCount: 137
      },
      {
        id: 2,
        text: "Startups die from indigestion, not starvation. Doing too many things at once is the primary killer of early teams.",
        category: "Focus",
        characterCount: 119
      },
      {
        id: 3,
        text: "The best founders are relentless, formidable, and move with unmatched speed. Momentum is everything.",
        category: "Execution",
        characterCount: 104
      },
      {
        id: 4,
        text: "You want to be in a compounding curve. Strive for your life to follow an exponential trajectory, not a linear ladder.",
        category: "Compounding",
        characterCount: 122
      },
      {
        id: 5,
        text: "It is much easier to succeed with a hard startup solving a critical problem than an easy startup nobody truly cares about.",
        category: "Strategy",
        characterCount: 127
      }
    ]
  },

  jensen: {
    id: "jensen",
    url: "https://www.youtube.com/watch?v=gT_qWj_bXkM",
    youtubeId: "gT_qWj_bXkM",
    title: "Jensen Huang: Suffering, Resilience & Building NVIDIA (Stanford GSB)",
    channel: "Stanford Graduate School of Business",
    views: "3.9M views",
    duration: "58m",
    thumbnail: "https://img.youtube.com/vi/gT_qWj_bXkM/maxresdefault.jpg",
    category: "Leadership & Resilience",
    hookScore: 97,
    hookType: "Counter-Intuitive Leadership",
    thread: [
      {
        index: 1,
        type: "hook",
        content: `NVIDIA CEO Jensen Huang told a room full of Stanford MBA students:\n\n"I wish upon all of you ample doses of pain and suffering."\n\nThe room went dead silent.\n\nHere is why his unconventional leadership philosophy created a $3 Trillion powerhouse: 🧵👇`
      },
      {
        index: 2,
        type: "body",
        content: `1. Greatness Comes from Character, Not High Expectations\n\nPeople with high expectations have very low resilience.\n\nWhen things go wrong—and in business, they always go wrong—they crumble.\n\nResilience is born when your expectations are tempered by the willingness to endure sustained struggle.`
      },
      {
        index: 3,
        type: "body",
        content: `2. Flat Organizations Beat Bureaucracy\n\nJensen has 50+ direct reports and zero 1-on-1 meetings.\n\nWhy?\n"If you have something to tell me, tell it in front of the whole group so everyone learns at the same time."\n\nEliminating information silos makes the entire company run at lightspeed.`
      },
      {
        index: 4,
        type: "body",
        content: `3. Retreat from Commoditized Markets\n\nWhenever a market NVIDIA created becomes crowded or commoditized, Jensen walks away.\n\nNVIDIA left mobile chips when Qualcomm dominated.\n\nThey moved 100% of their focus to solving zero-billion-dollar problems that might take 15 years to materialize (like accelerated computing & AI).`
      },
      {
        index: 5,
        type: "body",
        content: `4. We Are 30 Days from Going Out of Business\n\nEven with a $3T market cap, Jensen operates NVIDIA with the urgency of a cornered startup.\n\n"If you don't act like you are 30 days away from bankruptcy, someone who is hungry will eat your lunch."\n\nComplacency is the silent killer of tech giants.`
      },
      {
        index: 6,
        type: "body",
        content: `5. No Job is Beneath You\n\nJensen started as a dishwasher at Denny's.\n\nTo this day, he cleans restrooms if they are dirty and debugs architecture if needed.\n\nLeadership is not about sitting on a pedestal; it is about serving the mission at any altitude.`
      },
      {
        index: 7,
        type: "cta",
        content: `Jensen Huang's Playbook in 5 Lines:\n\n1. Value resilience over high expectations\n2. Demolish silos with radical transparency\n3. Invent markets instead of competing in them\n4. Never lose Day-1 paranoid urgency\n5. Stay humble: no task is beneath you\n\nEnjoyed this? \n• Follow for more executive playbooks & insights\n• Repost to inspire your founder feed! 💡`
      }
    ],
    linkedinPost: `When Nvidia CEO Jensen Huang spoke to Stanford Graduate School of Business students, he didn't wish them happiness or easy success.

He looked them in the eye and said:
"I wish upon all of you ample doses of pain and suffering."

In a culture obsessed with effortless hacks, Jensen’s philosophy is a masterclass in building enduring enterprise value:

1. Low Expectations Create High Resilience
Graduates of elite institutions often have sky-high expectations. But when markets shift, unexpected competitors emerge, or product launches fail, high expectations lead to fragile teams. Resilience is the single best predictor of sustained greatness.

2. Run with Zero Information Asymmetry
Jensen Huang manages 50+ direct reports with no 1-on-1s. All strategic reviews happen openly in group sessions. When information flows freely without corporate hierarchy, an entire organization makes decisions 10x faster.

3. Solve Zero-Billion-Dollar Problems
NVIDIA didn't dominate AI by following market trends. They invested in CUDA and accelerated computing in 2006 when Wall Street called it a costly distraction. True innovation requires embracing problems with zero current market size for over a decade.

4. The "30 Days from Death" Mindset
Complacency kills market leaders far more often than technological obsolescence. Cultivate a team culture that stays paranoid, nimble, and intensely hungry—regardless of your balance sheet.

True leadership isn't about avoiding difficulty. It is about developing the organizational grit to turn difficulty into an unassailable moat.

How do you instill resilience into your team's culture?

#Nvidia #JensenHuang #Leadership #Resilience #CorporateCulture #Innovation #AI`,
    quotes: [
      {
        id: 1,
        text: "Greatness is not intelligence. Greatness comes from character. And character isn't formed out of smart people, it's formed out of people who suffered.",
        category: "Character",
        characterCount: 167
      },
      {
        id: 2,
        text: "I wish upon all of you ample doses of pain and suffering. Because resilience is what turns high ambition into reality.",
        category: "Resilience",
        characterCount: 120
      },
      {
        id: 3,
        text: "If you want to build something extraordinary, retreat from commoditized markets and go invent zero-billion-dollar industries.",
        category: "Strategy",
        characterCount: 130
      },
      {
        id: 4,
        text: "Our company is always 30 days away from going out of business. The moment you feel safe is the moment you begin to decline.",
        category: "Urgency",
        characterCount: 128
      },
      {
        id: 5,
        text: "No task is beneath me. I used to clean toilets at Denny's, and I'd still clean them today if the job required it.",
        category: "Humility",
        characterCount: 115
      }
    ]
  },

  huberman: {
    id: "huberman",
    url: "https://www.youtube.com/watch?v=QmOF0crdyRU",
    youtubeId: "QmOF0crdyRU",
    title: "Andrew Huberman: Dopamine, Focus & Peak Productivity Masterclass",
    channel: "Huberman Lab",
    views: "7.1M views",
    duration: "2h 14m",
    thumbnail: "https://img.youtube.com/vi/QmOF0crdyRU/maxresdefault.jpg",
    category: "Neuroscience & Peak Performance",
    hookScore: 99,
    hookType: "Biological Optimization Protocol",
    thread: [
      {
        index: 1,
        type: "hook",
        content: `You don't have an ADHD problem.\n\nYou have a dopamine baseline problem.\n\nStanford neuroscientist Dr. Andrew Huberman spent 2 hours explaining how high performers manipulate brain chemistry for relentless focus.\n\nHere are 6 non-negotiable protocols to 3x your daily output: 🧵👇`
      },
      {
        index: 2,
        type: "body",
        content: `1. Morning Sunlight Before Screen Light\n\nWithin 30-60 minutes of waking, get 10-15 minutes of direct outdoor sunlight into your eyes (no sunglasses).\n\nWhy it works:\n• Sets your master circadian clock\n• Triggers a healthy cortisol surge to wake up\n• Starts the timer for natural melatonin release 14 hours later`
      },
      {
        index: 3,
        type: "body",
        content: `2. Delay Your First Caffeine Dose 90-120 Minutes\n\nWhen you wake up, residual adenosine is still clearing your brain.\n\nIf you drink coffee immediately:\n• Caffeine blocks the adenosine receptors\n• Adenosine accumulates in the background\n• When caffeine wears off at 2 PM, you suffer a catastrophic crash\n\nWait 90 mins, drink water + electrolytes first.`
      },
      {
        index: 4,
        type: "body",
        content: `3. Don't Layer Dopamine Triggers\n\nIf you listen to high-bpm music while drinking an energy drink while scrolling Twitter while doing work...\n\nYou cause a massive dopamine spike followed by a deep crater below your previous baseline.\n\nAttach dopamine to the friction of effort itself, not external stimulations.`
      },
      {
        index: 5,
        type: "body",
        content: `4. Use 90-Minute Ultradian Work Cycles\n\nYour brain can only sustain peak deep focus for ~90 minutes before neurochemical reserves dip.\n\nProtocol:\n• 5-10 min ramp-up (friction is normal!)\n• 70 min intense uninterrupted flow\n• 10 min wind down\n• Follow with 15 min non-sleep deep rest (NSDR)`
      },
      {
        index: 6,
        type: "body",
        content: `5. The Physiological Sigh for Instant Calming\n\nFeeling stressed or overwhelmed before a critical pitch?\n\nExecute the physiological sigh:\n• Two deep inhales through your nose (one long, one sharp top-off)\n• One long, slow exhale through your mouth\n• Repeat 2-3 times\n\nThis immediately offloads CO2 and re-engages the parasympathetic nervous system.`
      },
      {
        index: 7,
        type: "cta",
        content: `Daily Productivity Protocol Summary:\n\n1. 10m morning sunlight\n2. Delay caffeine by 90m\n3. Stop layering dopamine crutches\n4. Work in 90-minute ultradian blocks\n5. Use physiological sighs to reset stress\n\nLevel up your operating system:\n• Follow for neuroscience & creator productivity breakdowns\n• Repost this thread to save someone from afternoon caffeine crashes! ⚡`
      }
    ],
    linkedinPost: `Most executives believe burnout is caused by too much work.
Neuroscience reveals it is actually caused by poorly regulated dopamine and disrupted circadian biology.

Dr. Andrew Huberman (Stanford Professor of Neurobiology) published an exhaustive masterclass on cognitive performance and focus.

Here are the 4 highest-leverage biological protocols to upgrade your executive performance:

1. The 90-Minute Caffeine Rule
Reaching for espresso immediately upon waking guarantees a 2:00 PM energy collapse. When you wake up, your brain is clearing adenosine (the sleepiness molecule). Flooding your system with caffeine early only masks adenosine—it doesn't eliminate it.
→ Delay caffeine intake by 90 to 120 minutes post-waking. Drink 16oz of water with electrolytes first.

2. Optical Flow & Early Light Exposure
Viewing outdoor sunlight for 10-15 minutes within an hour of waking triggers a natural morning cortisol spike. This promotes daytime alertness while setting an internal biological countdown for high-quality restorative sleep 16 hours later.

3. Align With 90-Minute Ultradian Rhythms
The human brain is biologically hardwired for 90-minute ultradian focus cycles. Pushing through 4 hours of continuous shallow multitasking degrades analytical judgment. 
→ Block two 90-minute deep-work sprints each day with zero notifications, separated by active physical recovery.

4. Avoid Layering Dopamine
High performers often stack energy drinks, loud music, and social notifications while working. This drives an unnatural dopamine surge followed by an equal and opposite crash below baseline. Train yourself to associate dopamine with the friction of deep problem-solving rather than synthetic stimulants.

High performance is not about pushing harder; it is about respecting human biology.

Which of these protocols will you integrate into your morning routine this week?

#PeakPerformance #Productivity #Neuroscience #ExecutiveHealth #Leadership #HubermanLab #Focus`,
    quotes: [
      {
        id: 1,
        text: "The key to sustained motivation is attaching dopamine to the friction of effort itself, rather than solely to the eventual milestone.",
        category: "Dopamine",
        characterCount: 142
      },
      {
        id: 2,
        text: "Delay caffeine 90 to 120 minutes after waking. Let your natural morning cortisol do its job, and you will eliminate the dreaded 2 PM crash.",
        category: "Energy",
        characterCount: 144
      },
      {
        id: 3,
        text: "Friction at the start of a focus block is not a sign you lack discipline. It is simply your neural circuitry recruiting neurochemicals.",
        category: "Focus",
        characterCount: 139
      },
      {
        id: 4,
        text: "Your eyes are not just connected to your brain; they are two pieces of your central nervous system placed outside the skull.",
        category: "Biology",
        characterCount: 133
      },
      {
        id: 5,
        text: "Two quick inhales through the nose, followed by a long exhale through the mouth. The fastest biological reset for acute stress.",
        category: "Stress Relief",
        characterCount: 137
      }
    ]
  }
};

// Intelligent procedural generator for any custom YouTube URL entered by the user
export function generateDynamicAssetPack(url, videoMeta = {}, language = 'zh') {
  // Extract video ID or generate clean name
  let videoId = "custom";
  try {
    const urlObj = new URL(url);
    if (urlObj.hostname.includes("youtube.com")) {
      videoId = urlObj.searchParams.get("v") || "dQw4w9WgXcQ";
    } else if (urlObj.hostname.includes("youtu.be")) {
      videoId = urlObj.pathname.replace("/", "") || "dQw4w9WgXcQ";
    }
  } catch (e) {
    videoId = "custom_" + Math.random().toString(36).substr(2, 6);
  }

  const defaultTitle = language === 'zh' 
    ? "高增长创始人与顶级创作者的终极破局战术" 
    : "The Definitive Framework for High-Growth Creators & Founders";
  const defaultAuthor = language === 'zh'
    ? "硅谷顶级播客 & 商业专访"
    : "Silicon Valley Tech Insider";

  const title = videoMeta.title || defaultTitle;
  const author = videoMeta.author_name || defaultAuthor;
  const thumbnail = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  if (language === 'zh') {
    return {
      id: videoId,
      url: url,
      youtubeId: videoId,
      title: title,
      channel: author,
      views: "最新收录",
      duration: "42m",
      thumbnail: thumbnail,
      category: "商业洞察 & 个人杠杆",
      hookScore: 97,
      hookType: "反共识高能认知",
      thread: [
        {
          index: 1,
          type: "hook",
          content: `大多数人之所以觉得做项目累，是因为他们在用「线性思维」死磕。\n\n我花 40 分钟拆解了《${title}》（来自 ${author}）。\n\n这期内容揭示了普通人放大 10 倍商业杠杆的核心底层框架。\n\n整理出 5 个颠覆性破局点，建议收藏细读：🧵👇`
        },
        {
          index: 2,
          type: "body",
          content: `1. 击穿核心约束点\n\n很多人忙碌却无结果，是因为总在优化枝节指标。\n\n${author}指出：系统 80% 的产出被单一瓶颈死死锁死。在没有解决核心约束之前，做任何锦上添花的优化都是自欺欺人。\n\n找到你的单一最大瓶颈，集中火力彻底击碎它。`
        },
        {
          index: 3,
          type: "body",
          content: `2. 寻找非对称收益（Asymmetric Upside）\n\n想要摆脱时间售卖陷阱，你必须参与具有“非对称赔率”的游戏：\n\n• 下行风险极度有限（至多浪费几个周末）\n• 上行空间完全不封顶（代码、内容、网络效应）\n\n只要试错成本极低，失败 9 次都不怕，因为你只需要做对 1 次。`
        },
        {
          index: 4,
          type: "body",
          content: `3. 迭代速度是终极护城河\n\n在快速演化的行业中，小步快跑永远胜过闭门造车。\n\n一个在 2 周内快速测试 5 个 MVP 的小团队，其市场认知进化速度将数十倍于在会议室里反复推演 6 个月的传统大厂。\n\n把反馈闭环缩短到天级别。`
        },
        {
          index: 5,
          type: "body",
          content: `4. 先做受众分发，再打磨产品\n\n别在真空里盲目造车。\n\n在写第一行代码或做第一个服务之前，先建立对你选题感兴趣的核心受众群。\n\n一手受众信任 + 专有洞察 = 任何竞争对手都无法轻易复制的护城河。`
        },
        {
          index: 6,
          type: "body",
          content: `5. 捍卫你的认知带宽\n\n高阶商业判断力，绝不可能在持续碎片化的微任务中诞生。\n\n拒绝陷入“虚假的忙碌感”。\n留出神圣的独处与深度思考时间：每周做出 3 个高杠杆的正确决策，胜过做 50 个平庸琐事。`
        },
        {
          index: 7,
          type: "cta",
          content: `核心行动清单复盘：\n\n1. 击穿单一核心瓶颈\n2. 押注非对称收益资产\n3. 用极速迭代跑赢完美主义\n4. 提前构建分发护城河\n5. 捍卫深度思考带宽\n\n如果这篇拆解对你有启发：\n1. 关注我，持续为你精炼全球一手硬核商业认知\n2. 转发首推，让更多同频的创作者看到！🚀`
        }
      ],
      linkedinPost: `我刚花时间深度复盘了《${title}》（主讲：${author}）。

在当今注意力极度稀缺的商业环境中，创业者与职场精英最容易犯的错误就是“把盲目忙碌当成了卓越成就”。

以下是本期访谈中最具杠杆效应的 4 个商业认知框架：

1. 识别并攻克系统的「主瓶颈」
绝大多数项目进展缓慢，不是因为团队不够拼，而是因为资源被分散在 10 个次要任务上。找出制约你业务飞轮转动的那个唯一的瓶颈——击穿它，其余环节会自动加速运转。

2. 布局非对称收益资产（Asymmetric Upside）
单纯出租时间的线性工作模式存在天然的收入天花板。必须配置下行有限、上行无限的杠杆资产：
→ 社交媒体个人影响力与分发矩阵
→ 具备零边际复制成本的数字化工具与代码
→ 长期复利的行业人脉信誉

3. 极速迭代胜过完美规划
在急剧变化的新兴市场，真实用户的即时反馈永远胜过战略蓝图。卓越团队与平庸团队的差距，本质上是把假设变为现实并获取数据的时间周期。

4. 守卫管理层的高价值认知带宽
真正决定企业长期价值的，是每个季度 2-3 个决定性的战略判断，而不是处理了多少封日常邮件。请给自己的日程表留出不可侵犯的深度战略沉思时间。

以上哪一条最符合你当前团队的演进阶段？

#商业战略 #执行力 #创业认知 #个人成长 #管理思考 #杠杆效应`,
      quotes: [
        {
          id: 1,
          text: "执行速度是终极护城河。一个快速迭代、直面市场反馈的团队，永远能淘汰行动迟缓的完美主义者。",
          category: "敏捷迭代",
          characterCount: 46
        },
        {
          id: 2,
          text: "不要把忙碌当成进展。先找到制约你业务 80% 产出的那一个关键瓶颈，集中所有精力攻克它。",
          category: "聚焦杠杆",
          characterCount: 45
        },
        {
          id: 3,
          text: "非对称收益是构建真正复利资产的底层逻辑。锁定微小的下行风险，保留不设上限的向上可能。",
          category: "收益模型",
          characterCount: 44
        },
        {
          id: 4,
          text: "分发能力是现代商业的底层地基。在正式推出产品前，先和你的真实用户建立不可替代的信任连接。",
          category: "分发飞轮",
          characterCount: 46
        },
        {
          id: 5,
          text: "高价值的战略判断力需要认知静谧。把你的深度思考时间像对待公司资产一样严格保护起来。",
          category: "深度思考",
          characterCount: 43
        }
      ]
    };
  }

  // English fallback
  return {
    id: videoId,
    url: url,
    youtubeId: videoId,
    title: title,
    channel: author,
    views: "Recent Upload",
    duration: "45m",
    thumbnail: thumbnail,
    category: "Strategic Growth & Tech",
    hookScore: 96,
    hookType: "Counter-Intuitive Framework",
    thread: [
      {
        index: 1,
        type: "hook",
        content: `I just spent 45 minutes dissecting "${title}" by ${author}.\n\nIt contains one of the most high-leverage frameworks I've seen this year.\n\nHere are the 5 actionable takeaways to save you 45 minutes of listening: 🧵👇`
      },
      {
        index: 2,
        type: "body",
        content: `1. The Core Bottleneck\n\nMost people fail because they optimize for secondary vanity metrics instead of primary leverage points.\n\n${author} highlighted that 80% of outcome is driven by a single constraint.\n\nFix the constraint first, ignore everything else.`
      },
      {
        index: 3,
        type: "body",
        content: `2. The Asymmetric Upside Principle\n\nIn modern markets, you only need to be right once if your downside is capped and your upside is uncapped.\n\n• Avoid linear wage traps\n• Build distribution assets that scale without marginal cost\n• Take calculated risks where failure won't kill you`
      },
      {
        index: 4,
        type: "body",
        content: `3. Velocity Over Perfection\n\nExecution speed is the greatest competitive advantage.\n\nA team that runs 10 experiments in 10 days will always outlearn a competitor who spends 6 months perfecting an assumption in a boardroom.`
      },
      {
        index: 5,
        type: "body",
        content: `4. Compound Your Distribution\n\nDon't just build products; build an audience that wants your products before you write a single line of code.\n\nAudience + Proprietary Insight = Unfair Market Advantage.`
      },
      {
        index: 6,
        type: "body",
        content: `5. Protect Your Mental Bandwidth\n\nHigh-value judgment cannot occur in a state of continuous distraction.\n\nSchedule non-negotiable blocks of deep silence to reflect, synthesize, and make 3 high-impact decisions per week instead of 50 low-value ones.`
      },
      {
        index: 7,
        type: "cta",
        content: `Summary Breakdown:\n\n1. Target the single primary constraint\n2. Hunt for asymmetric upside\n3. Value speed of iteration over perfection\n4. Compound your distribution flywheel\n5. Protect cognitive bandwidth for high-leverage judgment\n\nDid you find this valuable?\n1. Follow for more distilled video & podcast breakdowns\n2. Repost the first post to share with fellow founders! 🚀`
      }
    ],
    linkedinPost: `I just finished breaking down "${title}" featuring ${author}.

In an attention-scarce market, the biggest mistake professionals make is confusing activity with accomplishment.

Here are the 4 core executive principles distilled from this session:

1. Identify the Primary Constraint
Most organizations struggle not from lack of effort, but from trying to optimize 20 secondary metrics at once. When you identify and solve the single root bottleneck, the rest of the operational chain accelerates automatically.

2. Hunt for Asymmetric Upside
Linear effort produces linear compensation. To achieve exponential scale, you must build systems with capped downside and uncapped upside:
→ Media and content distribution
→ Proprietary software tooling
→ Compounding industry networks

3. Iteration Speed Beats Strategic Precision
In rapidly evolving industries, real-world customer feedback beats boardroom strategy every time. The most resilient leaders shorten the loop between hypothesis, launch, and metric evaluation.

4. Defend High-Leverage Thinking Time
True executive value is measured by the quality of 2-3 defining decisions each month, not how many 30-minute meetings you survive. Block sacred hours for strategic synthesis.

Which of these 4 insights resonates most with your current roadmap?

#Strategy #ExecutiveLeadership #GrowthMindset #Innovation #BusinessFrameworks #Productivity`,
    quotes: [
      {
        id: 1,
        text: `Velocity of execution is the ultimate moat. A team that iterates 5x faster will always out-compete a stagnant incumbent.`,
        category: "Execution",
        characterCount: 124
      },
      {
        id: 2,
        text: `Don't confuse motion with progress. Optimize for the single constraint that moves the needle 80%.`,
        category: "Focus",
        characterCount: 98
      },
      {
        id: 3,
        text: `Asymmetric upside is how you build true equity. Cap your downside risks, leave your upside unlimited.`,
        category: "Wealth",
        characterCount: 104
      },
      {
        id: 4,
        text: `Audience and distribution are the modern moat. Build relationships before you ask for transactions.`,
        category: "Distribution",
        characterCount: 106
      },
      {
        id: 5,
        text: `High-value judgment requires cognitive stillness. Guard your deep-thinking hours with your life.`,
        category: "Mindset",
        characterCount: 103
      }
    ]
  };
}
