// TITLE: Under the Weather
// EYEBROW: Use of English B2 · Unit 4 · Prepositional Phrases B
// SUB: Thirteen phrases with in, on, at, under and without: without fail, at random, under pressure, in sight… Five drills.
const META = { ls: "uoe-b2-u4-prepB" };
const P = [
  { id: "fail", phrase: "without fail", ru: "обязательно, непременно", en: "definitely; always" },
  { id: "random", phrase: "at random", ru: "наугад, случайным образом", en: "without any plan or order" },
  { id: "market", phrase: "on the market", ru: "в продаже", en: "available to buy" },
  { id: "shock", phrase: "in a state of shock", ru: "в шоке", en: "very surprised and upset" },
  { id: "loss", phrase: "at a loss (for words)", ru: "в растерянности, не находить слов", en: "not knowing what to say or do" },
  { id: "progress", phrase: "in progress", ru: "в процессе, идёт", en: "happening now, not finished" },
  { id: "weather", phrase: "under the weather", ru: "нездоровится", en: "feeling a little ill" },
  { id: "sight", phrase: "in sight", ru: "в поле зрения, виден", en: "near enough to be seen" },
  { id: "age", phrase: "under age", ru: "несовершеннолетний", en: "too young by law" },
  { id: "pressure", phrase: "under pressure", ru: "под давлением", en: "feeling stress because you must do something" },
  { id: "approval", phrase: "on approval", ru: "с правом возврата", en: "you can return it if you don't like it" },
  { id: "thesight", phrase: "at the sight of", ru: "при виде", en: "when you see something" },
  { id: "business", phrase: "(away) on business", ru: "в командировке", en: "travelling for work" }
];
const PREP = { fail: "without", random: "at", market: "on", shock: "in", loss: "at", progress: "in", weather: "under", sight: "in", age: "under", pressure: "under", approval: "on", thesight: "at", business: "on" };
const DRILLS = [
  { type: "gaps", title: "Which preposition?", short: "Quick choice", shuffleOptions: false, instr: "Tap the preposition that starts each phrase.",
    items: P.map(p => ({ id: p.id, t: "{{" + ["in", "on", "at", "under", "without"].map(x => (x === PREP[p.id] ? "*" : "") + x).join("|") + "}} " + p.phrase.replace(/^\(away\) on /, "").replace(/^(in|on|at|under|without) /, "") })) },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrase." },
  { type: "gaps", title: "Type the preposition", short: "Type it", instr: "Write in, on, at, under or without.",
    items: [
      { id: "fail", t: "All homework is due tomorrow [[without]] fail." },
      { id: "random", t: "The computer chooses the winners [[at]] random." },
      { id: "market", t: "Our flat has been [[on]] the market for three months." },
      { id: "shock", t: "After the accident, everyone was [[in]] a state of shock." },
      { id: "loss", t: "When I heard I had won, I was [[at]] a loss for words." },
      { id: "progress", t: "Quiet, please – exam [[in]] progress." },
      { id: "weather", t: "I'm feeling a bit [[under]] the weather today." },
      { id: "sight", t: "The train is [[in]] sight – it'll be here in a minute." },
      { id: "age", t: "She couldn't get into the club because she was [[under]] age." },
      { id: "pressure", t: "Students are [[under]] a lot of pressure before exams." },
      { id: "approval", t: "I bought this jacket [[on]] approval, so I can take it back." },
      { id: "thesight", t: "My brother faints [[at]] the sight of blood." },
      { id: "business", t: "My husband is away [[on]] business this week." },
      { id: "fail", t: "He calls his mum every Sunday [[without]] fail." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the preposition correct?",
    items: [
      { id: "weather", t: "I'm feeling a bit under the weather.", ok: true },
      { id: "pressure", t: "Doctors often work in pressure.", ok: false, fix: "Doctors often work under pressure." },
      { id: "random", t: "Choose a card in random.", ok: false, fix: "Choose a card at random." },
      { id: "market", t: "This phone has just come onto the market.", ok: true },
      { id: "loss", t: "I was on a loss for words.", ok: false, fix: "I was at a loss for words." },
      { id: "progress", t: "Work in progress – do not enter.", ok: true },
      { id: "age", t: "You can't buy this – you're below age.", ok: false, fix: "You can't buy this – you're under age." },
      { id: "business", t: "She's in business in Paris this week.", ok: false, fix: "She's away on business in Paris this week." },
      { id: "thesight", t: "He fainted at the sight of the needle.", ok: true },
      { id: "sight", t: "There was nobody on sight.", ok: false, fix: "There was nobody in sight." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrase.",
    items: [
      { id: "weather", ru: "Мне сегодня нездоровится.", en: "I'm feeling under the weather today.", key: "under the weather" },
      { id: "pressure", ru: "Я работаю под давлением.", en: "I work under pressure.", key: "under pressure" },
      { id: "random", ru: "Выбери число наугад.", en: "Choose a number at random.", key: "at random" },
      { id: "fail", ru: "Он звонит мне каждый день обязательно.", en: "He calls me every day without fail.", key: "without fail" },
      { id: "business", ru: "Папа в командировке.", en: "Dad is away on business.", key: "on business" },
      { id: "shock", ru: "Мы были в шоке.", en: "We were in a state of shock.", key: "in (a state of )?shock" },
      { id: "loss", ru: "Я не нашла слов.", en: "I was at a loss for words.", key: "at a loss" },
      { id: "market", ru: "Этот дом продаётся уже год.", en: "This house has been on the market for a year.", key: "on the market" },
      { id: "sight", ru: "Берег уже виден!", en: "Land is in sight!", key: "in sight" },
      { id: "thesight", ru: "При виде собаки кошка убежала.", en: "At the sight of the dog, the cat ran away.", key: "at the sight of" }
    ] }
];
