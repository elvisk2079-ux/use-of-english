// TITLE: Get Over It
// EYEBROW: Use of English B2 · Unit 2 · Phrasal Verbs A–B (get, pull, throw)
// SUB: Eight phrasal verbs with get, pull and throw. Five drills. Careful: get away and get away with mean different things.
const META = { ls: "uoe-b2-u2-pvget" };
const P = [
  { id: "on", phrase: "get on / along with", ru: "ладить с", en: "have a good relationship with someone" },
  { id: "away", phrase: "get away", ru: "сбежать, скрыться", en: "escape" },
  { id: "awaywith", phrase: "get away with", ru: "избежать наказания (за что-то)", en: "do something wrong and not be punished" },
  { id: "by", phrase: "get by", ru: "сводить концы с концами, обходиться", en: "manage to live with little money" },
  { id: "over", phrase: "get over", ru: "оправиться от, пережить", en: "recover from something bad; overcome" },
  { id: "down", phrase: "pull down", ru: "снести (здание)", en: "demolish a building" },
  { id: "pullover", phrase: "pull over", ru: "съехать на обочину и остановиться", en: "move to the side of the road and stop (a car)" },
  { id: "throw", phrase: "throw out / away", ru: "выбросить", en: "get rid of something you don't want" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "on", t: "Do you get {{*on|over|by}} well with your brother?" },
      { id: "on", t: "It's hard to get {{*along|away|over}} with people who never listen." },
      { id: "away", t: "The thieves got {{*away|by|over}} in a red car." },
      { id: "away", t: "The prisoner tried to get {{*away|on|down}}, but the guards caught him." },
      { id: "awaywith", t: "He copied his friend's homework and got away {{*with|from|by}} it." },
      { id: "awaywith", t: "You won't get {{*away|by|over}} with lying to me!" },
      { id: "by", t: "Students often get {{*by|over|on}} on very little money." },
      { id: "by", t: "I don't speak much Italian, but I can get {{*by|away|over}}." },
      { id: "over", t: "It took her months to get {{*over|by|away}} the flu." },
      { id: "over", t: "He never really got {{*over|on|away}} losing his job." },
      { id: "down", t: "They pulled {{*down|over|out}} the old cinema to build a supermarket." },
      { id: "pullover", t: "The police officer told the driver to pull {{*over|down|away}}." },
      { id: "throw", t: "Don't throw {{*away|over|by}} those boxes – we can use them." },
      { id: "throw", t: "It's time to throw {{*out|over|down}} these old magazines." }
    ] },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb in the correct form. Watch the tense!",
    items: [
      { id: "on", t: "I [[get on/get along]] really well with my new classmates." },
      { id: "away", t: "The robbers [[got away]] before the police arrived." },
      { id: "awaywith", t: "She always [[gets away with]] being late – the teacher never notices!" },
      { id: "by", t: "How do you [[get by]] on such a small salary?" },
      { id: "over", t: "Don't worry, you'll [[get over]] it soon." },
      { id: "down", t: "The old factory was [[pulled down]] last year." },
      { id: "pullover", t: "I felt sick, so Dad [[pulled over]] and I got out of the car." },
      { id: "throw", t: "Have you [[thrown away/thrown out]] my old jeans? I can't find them!" },
      { id: "over", t: "It took Betty months to [[get over]] her father's death." },
      { id: "awaywith", t: "Nobody can [[get away with]] cheating forever." }
    ] },
  { type: "order", title: "Word order", short: "Word order", instr: "Tap the words in the right order. Tap a word in your answer to send it back.",
    items: [
      { id: "on", s: "I get on well with my sister." },
      { id: "away", s: "The thief got away on a bike." },
      { id: "awaywith", s: "He got away with breaking the window." },
      { id: "by", s: "We can get by without a car." },
      { id: "over", s: "She soon got over her cold." },
      { id: "down", s: "They are going to pull down the old school.", alt: ["They are going to pull the old school down."] },
      { id: "pullover", s: "Please pull over at the next corner." },
      { id: "throw", s: "Never throw away old photos.", alt: ["Never throw old photos away."] }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "on", ru: "Я хорошо лажу с соседями.", en: "I get on well with my neighbours.", key: "get (on|along) (well )?with" },
      { id: "away", ru: "Грабителям удалось скрыться.", en: "The robbers managed to get away.", key: "(get|got) away" },
      { id: "awaywith", ru: "Ему всё сходит с рук!", en: "He gets away with everything!", key: "gets? away with" },
      { id: "by", ru: "Мы обходимся небольшими деньгами.", en: "We get by on a little money.", key: "get by" },
      { id: "over", ru: "Она быстро оправилась от болезни.", en: "She quickly got over her illness.", key: "got over" },
      { id: "down", ru: "Старый дом снесли.", en: "The old house was pulled down.", key: "pulled down" },
      { id: "pullover", ru: "Водитель съехал на обочину.", en: "The driver pulled over.", key: "pulled over" },
      { id: "throw", ru: "Выброси эти старые кроссовки!", en: "Throw away these old trainers!", key: "throw (away|out)" }
    ] }
];
