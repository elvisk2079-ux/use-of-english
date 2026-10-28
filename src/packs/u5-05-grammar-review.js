// TITLE: Grammar Check
// EYEBROW: Use of English B2 · Unit 5 · Consolidation I · Grammar
// SUB: Ten grammar points from Units 1–4: Future Perfect, who, Present Perfect Continuous, the more … the …, few / little, neither, when + Present, look up to, hold up, congratulate on. Five drills.
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u5-gram" };
const P = [
  { id: "futperf", phrase: "will have done (by …)", ru: "Future Perfect: будет сделано к…" },
  { id: "who", phrase: "My uncle, who …, is …", ru: "который (о людях; с запятыми – не that)" },
  { id: "lookupto", phrase: "look up to sb", ru: "уважать, равняться на (look down on – смотреть свысока)" },
  { id: "neither", phrase: "neither of (the two)", ru: "ни один из двух" },
  { id: "ppc", phrase: "have been living (since / for)", ru: "Present Perfect Continuous" },
  { id: "holdup", phrase: "hold up", ru: "ограбить (с оружием); задержать" },
  { id: "themore", phrase: "the more …, the …er", ru: "чем больше …, тем …" },
  { id: "few", phrase: "few + countable / little + uncountable", ru: "мало (исчисл. / неисчисл.)" },
  { id: "congratulate", phrase: "congratulate sb on sth", ru: "поздравить с чем-то" },
  { id: "timeclause", phrase: "when / as soon as + Present (future)", ru: "когда + настоящее время (о будущем)" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Choose", instr: "Tap the correct answer.",
    items: [
      { id: "futperf", t: "By 8 o'clock, I {{*will have finished|will finish|am finishing}} my homework." },
      { id: "futperf", t: "By next year, they {{*will have built|will build|have built}} the new bridge." },
      { id: "who", t: "My uncle, {{*who|that|which}} lives in Spain, is visiting us." },
      { id: "who", t: "Anna, {{*who|whom|which}} is my best friend, is a doctor." },
      { id: "lookupto", t: "I really admire my teacher – I look {{*up to|down on|after}} her." },
      { id: "lookupto", t: "He's so arrogant – he looks {{*down on|up to|forward to}} everyone." },
      { id: "neither", t: "I've got two sisters, but {{*neither|either|none}} of them lives here." },
      { id: "neither", t: "I tried on two dresses, but {{*neither|none|both}} of them fitted." },
      { id: "ppc", t: "We {{*have been living|are living|lived}} here since 2015." },
      { id: "ppc", t: "She {{*has been learning|is learning|learns}} English for five years." },
      { id: "holdup", t: "Two men held {{*up|off|out}} a shop last night." },
      { id: "holdup", t: "Sorry I'm late – I was held {{*up|on|over}} in traffic." },
      { id: "themore", t: "The more you read, the {{*better|best|more good}} you write." },
      { id: "themore", t: "The {{*more|most|much}} I eat, the more tired I feel." },
      { id: "few", t: "There were very {{*few|little|much}} people at the concert." },
      { id: "few", t: "We have very {{*little|few|many}} time left." },
      { id: "congratulate", t: "We congratulated her {{*on|for|with}} her new job." },
      { id: "congratulate", t: "Let me congratulate you {{*on|of|in}} passing the exam." },
      { id: "timeclause", t: "I'll call you when I {{*get|will get|am getting}} home." },
      { id: "timeclause", t: "As soon as the rain {{*stops|will stop|stopped}}, we'll go out." }
    ],
    note: "After when, as soon as, before, until, after – Present Simple for the future: I'll call you when I get home. congratulate sb ON sth (NOT with)." },
  { type: "mcq", title: "Which sentence is correct?", short: "Correct one", instr: "Only one sentence is correct. Tap it.",
    items: [
      { id: "futperf", q: "Plans", o: ["By June, I will have saved enough money.", "By June, I will save enough money already.", "By June, I have saved enough money.", "By June, I am saving enough money."] },
      { id: "who", q: "My sister", o: ["My sister, who is a nurse, works at night.", "My sister, that is a nurse, works at night.", "My sister who, is a nurse, works at night.", "My sister, which is a nurse, works at night."] },
      { id: "lookupto", q: "A brave woman", o: ["Everyone looks up to her because she is so brave.", "Everyone looks up her because she is so brave.", "Everyone looks to up her because she is so brave.", "Everyone looks up at to her because she is so brave."] },
      { id: "neither", q: "My parents", o: ["Neither of my parents speaks English.", "Neither of my parents doesn't speak English.", "None of my two parents speaks English.", "Neither of my parents speak not English."] },
      { id: "ppc", q: "Waiting", o: ["I have been waiting for an hour.", "I am waiting for an hour.", "I wait for an hour.", "I have been waited for an hour."] },
      { id: "holdup", q: "Robbers", o: ["The robbers held up a post office.", "The robbers held on a post office.", "The robbers held off a post office.", "The robbers held a post office up off."] },
      { id: "themore", q: "Getting older", o: ["The older you get, the wiser you become.", "The older you get, the most wise you become.", "Older you get, wiser you become.", "The older you get, the wisest you become."] },
      { id: "few", q: "Friends", o: ["I have few friends here, so I feel lonely.", "I have little friends here, so I feel lonely.", "I have a few friend here, so I feel lonely.", "I have much friends here, so I feel lonely."] },
      { id: "congratulate", q: "A wedding", o: ["They congratulated us on our wedding.", "They congratulated us with our wedding.", "They congratulated to us on our wedding.", "They congratulated us in our wedding."] },
      { id: "timeclause", q: "Telling him", o: ["I'll tell him when I see him.", "I'll tell him when I will see him.", "I tell him when I will see him.", "I'll tell him when I saw him."] }
    ] },
  { type: "gaps", title: "Write it", short: "Write it", instr: "Write the missing word(s). Use the verb in capitals if there is one.",
    items: [
      { id: "futperf", t: "By the time you arrive, we [[will have eaten/'ll have eaten]] ^EAT^ dinner." },
      { id: "who", t: "Mr Smith, [[who]] teaches us maths, is very strict." },
      { id: "lookupto", t: "I've always looked [[up]] to my grandfather." },
      { id: "neither", t: "[[Neither]] of the two films was good." },
      { id: "ppc", t: "How long [[have you been living]] ^YOU / LIVE^ in this city?" },
      { id: "holdup", t: "The bank was held [[up]] by three masked men." },
      { id: "themore", t: "The [[more]] you practise, the better you get." },
      { id: "themore", t: "The harder you work, the [[more]] money you earn." },
      { id: "few", t: "Only a [[few]] students passed the test." },
      { id: "few", t: "There's very [[little]] milk in the fridge." },
      { id: "congratulate", t: "I'd like to congratulate you [[on]] your success." },
      { id: "timeclause", t: "Call me as soon as you [[arrive]] ^ARRIVE^ at the station." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "futperf", t: "By Friday, I will finish the book already.", ok: false, fix: "By Friday, I will have finished the book." },
      { id: "who", t: "My brother, who lives in Paris, is an artist.", ok: true },
      { id: "who", t: "My car, who is very old, still runs well.", ok: false, fix: "My car, which is very old, still runs well." },
      { id: "lookupto", t: "I look up to my parents.", ok: true },
      { id: "neither", t: "Neither of the answers is correct.", ok: true },
      { id: "ppc", t: "I live here since 2010.", ok: false, fix: "I have been living / have lived here since 2010." },
      { id: "themore", t: "The more I learn, the more I want to know.", ok: true },
      { id: "few", t: "I have little friends.", ok: false, fix: "I have few friends." },
      { id: "congratulate", t: "We congratulated him with his promotion.", ok: false, fix: "We congratulated him on his promotion." },
      { id: "timeclause", t: "I'll phone you when I will get home.", ok: false, fix: "I'll phone you when I get home." },
      { id: "holdup", t: "The shop was held up yesterday.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key grammar.",
    items: [
      { id: "futperf", ru: "К пятнице я закончу проект.", en: "I will have finished the project by Friday.", key: "will have finished|'ll have finished" },
      { id: "who", ru: "Моя бабушка, которой 80 лет, всё ещё работает.", en: "My grandmother, who is 80, still works.", key: "who is" },
      { id: "lookupto", ru: "Я равняюсь на своего тренера.", en: "I look up to my coach.", key: "look up to" },
      { id: "neither", ru: "Ни один из них (двоих) не пришёл.", en: "Neither of them came.", key: "neither of them" },
      { id: "ppc", ru: "Я жду тебя уже час.", en: "I have been waiting for you for an hour.", key: "have been waiting|'ve been waiting" },
      { id: "themore", ru: "Чем больше, тем лучше.", en: "The more, the better.", key: "the more,? the better" },
      { id: "few", ru: "У меня мало времени.", en: "I have little time.", key: "little time" },
      { id: "congratulate", ru: "Поздравляю с победой!", en: "Congratulations on your victory!", key: "on (your |the )?(victory|win)" },
      { id: "timeclause", ru: "Я позвоню, когда приеду.", en: "I'll call when I arrive.", key: "when i (arrive|get)" },
      { id: "holdup", ru: "Меня задержали на работе.", en: "I was held up at work.", key: "held up" }
    ] }
];
