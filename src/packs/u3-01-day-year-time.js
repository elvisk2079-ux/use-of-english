// TITLE: Day, Year and Time
// EYEBROW: Use of English B2 · Unit 3 · Collocations / Expressions A
// SUB: Fourteen expressions with day, year and time and the prepositions they need: in this day and age, all year round, from time to time… Five drills.
const META = { ls: "uoe-b2-u3-dyt" };
const P = [
  { id: "dayage", phrase: "in this day and age", ru: "в наше время", en: "in the modern world; nowadays" },
  { id: "dayday", phrase: "day by / after day", ru: "день за днём", en: "every day, again and again, or gradually" },
  { id: "yearround", phrase: "all year round", ru: "круглый год", en: "during the whole year" },
  { id: "yearyear", phrase: "year after year", ru: "год за годом", en: "every year for many years" },
  { id: "thistime", phrase: "at this time of the year", ru: "в это время года", en: "during this season" },
  { id: "period", phrase: "for a period of time", ru: "в течение некоторого времени", en: "for some time" },
  { id: "timetotime", phrase: "from time to time", ru: "время от времени", en: "sometimes, not often" },
  { id: "firsttime", phrase: "for the first time", ru: "впервые", en: "never before this" },
  { id: "righttime", phrase: "at the right time", ru: "в нужный момент", en: "at the best moment" },
  { id: "freetime", phrase: "in sb's free time", ru: "в свободное время", en: "when you are not working or studying" },
  { id: "notime", phrase: "in no time", ru: "очень быстро, в мгновение ока", en: "very quickly" },
  { id: "notimefor", phrase: "have no time for", ru: "не выносить, не терпеть", en: "not like or respect someone or something" },
  { id: "timeoff", phrase: "take time off work", ru: "взять отгул, отпуск", en: "not go to work for a period" }
];
const DRILLS = [
  { type: "gaps", title: "Which preposition?", short: "Preposition", instr: "Tap the preposition that completes the expression.",
    items: [
      { id: "dayage", t: "{{*In|At|On}} this day and age, everyone needs a computer." },
      { id: "dayday", t: "Day {{*by|*after|to}} day, the weather got colder." },
      { id: "yearround", t: "You can swim in this pool all year {{*round|long|over}}." },
      { id: "yearyear", t: "The same family comes to this hotel year {{*after|to|from}} year." },
      { id: "thistime", t: "The roads are always busy {{*at|in|on}} this time of the year." },
      { id: "period", t: "She lived in Paris {{*for|in|at}} a period of time." },
      { id: "timetotime", t: "I still see my old classmates {{*from|at|for}} time to time." },
      { id: "firsttime", t: "Last summer I saw the sea {{*for|in|at}} the first time." },
      { id: "righttime", t: "It's important to say sorry {{*at|in|on}} the right time." },
      { id: "freetime", t: "What do you do {{*in|at|on}} your free time?" },
      { id: "notime", t: "Don't worry – I'll fix your bike {{*in|at|for}} no time." },
      { id: "notimefor", t: "I have no time {{*for|to|with}} people who are rude to waiters." },
      { id: "timeoff", t: "Dad took a week {{*off|out|away}} work to paint the house." },
      { id: "timetotime", t: "We go to the theatre {{*from|for|by}} time to time." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the expression." },
  { type: "gaps", title: "Type the missing word", short: "Type it", instr: "Write the missing word – a preposition or part of the expression.",
    items: [
      { id: "dayage", t: "In this day and [[age]], nobody writes letters." },
      { id: "dayday", t: "Her English is getting better day [[by/after]] day." },
      { id: "yearround", t: "Tourists visit the city all year [[round]]." },
      { id: "yearyear", t: "Year [[after]] year, he made the same promise." },
      { id: "thistime", t: "It usually snows at this [[time]] of the year." },
      { id: "period", t: "He worked abroad [[for]] a short period of time." },
      { id: "timetotime", t: "From time [[to]] time I buy myself flowers." },
      { id: "firsttime", t: "Is this your first [[time]] in Moscow?" },
      { id: "righttime", t: "You arrived at [[the]] right time – dinner is ready!" },
      { id: "freetime", t: "In her [[free]] time, she plays the violin." },
      { id: "notime", t: "The children ate the cake in [[no]] time." },
      { id: "notimefor", t: "My grandad has no [[time]] for modern music." },
      { id: "timeoff", t: "Can you take some time [[off]] work next week?" }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the expression correct?",
    items: [
      { id: "freetime", t: "What do you like doing at your free time?", ok: false, fix: "What do you like doing in your free time?" },
      { id: "firsttime", t: "I flew in a plane for the first time last year.", ok: true },
      { id: "yearround", t: "The café is open all year long round.", ok: false, fix: "The café is open all year round." },
      { id: "timetotime", t: "We meet from time to time.", ok: true },
      { id: "notime", t: "I'll be ready at no time.", ok: false, fix: "I'll be ready in no time." },
      { id: "dayage", t: "In this day and age, children use phones from an early age.", ok: true },
      { id: "timeoff", t: "She took two days off work.", ok: true },
      { id: "thistime", t: "It's always warm in this time of the year.", ok: false, fix: "It's always warm at this time of the year." },
      { id: "notimefor", t: "I have no time for lazy people.", ok: true },
      { id: "righttime", t: "You came on the right time.", ok: false, fix: "You came at the right time." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the expression.",
    items: [
      { id: "dayage", ru: "В наше время все пользуются интернетом.", en: "In this day and age, everyone uses the internet.", key: "in this day and age" },
      { id: "yearround", ru: "Здесь тепло круглый год.", en: "It's warm here all year round.", key: "all year round" },
      { id: "timetotime", ru: "Время от времени я хожу в кино.", en: "From time to time I go to the cinema.", key: "from time to time" },
      { id: "firsttime", ru: "Я впервые попробовала суши.", en: "I tried sushi for the first time.", key: "for the first time" },
      { id: "freetime", ru: "Что ты делаешь в свободное время?", en: "What do you do in your free time?", key: "in your free time" },
      { id: "notime", ru: "Я сделаю это очень быстро.", en: "I'll do it in no time.", key: "in no time" },
      { id: "notimefor", ru: "Я терпеть не могу сплетни.", en: "I have no time for gossip.", key: "have no time for" },
      { id: "timeoff", ru: "Мама взяла отгул.", en: "Mum took a day off work.", key: "took (a day |some time |time )?off( work)?" },
      { id: "dayday", ru: "День за днём он ждал письма.", en: "Day after day he waited for a letter.", key: "day (after|by) day" },
      { id: "thistime", ru: "В это время года много туристов.", en: "There are many tourists at this time of the year.", key: "at this time of (the )?year" }
    ] }
];
