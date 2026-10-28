// TITLE: Phrasal Verbs with Come
// EYEBROW: Use of English B2 · Unit 1 · Phrasal Verbs A
// SUB: Six meanings of come + particle, five drills. Watch out: come round has two different meanings.
const META = { ls: "uoe-b2-u1-pvcome" };
const P = [
  { id: "across", phrase: "come across", ru: "случайно найти, наткнуться", en: "find something or meet someone by chance" },
  { id: "into", phrase: "come into", ru: "унаследовать", en: "receive money or property after someone dies" },
  { id: "visit", phrase: "come round (= visit)", opt: "come round", ru: "зайти, заглянуть в гости", en: "stop by; visit someone at their home" },
  { id: "upwith", phrase: "come up with", ru: "придумать, предложить", en: "think of an idea or a plan and suggest it" },
  { id: "downwith", phrase: "come down with", ru: "заболеть (чем-то)", en: "become ill with something, usually not serious" },
  { id: "wake", phrase: "come round / to (= wake up)", opt: "come round / to", ru: "прийти в себя", en: "become conscious again after fainting" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "across", t: "While tidying my room, I came {{*across|into|round}} my old diary." },
      { id: "across", t: "Have you ever come {{*across|down|up}} a word you couldn't find in any dictionary?" },
      { id: "into", t: "She came {{*into|across|to}} a fortune when her grandfather died." },
      { id: "into", t: "He came {{*into|round|up}} a large house by the sea." },
      { id: "visit", t: "Why don't you come {{*round|across|into}} for dinner on Saturday?" },
      { id: "visit", t: "My cousins came {{*round|down|up}} last night and we played board games." },
      { id: "upwith", t: "We need to come up {{*with|to|for}} a name for our new band." },
      { id: "upwith", t: "Who came {{*up|down|round}} with this brilliant idea?" },
      { id: "downwith", t: "I think I'm coming down {{*with|of|to}} the flu." },
      { id: "downwith", t: "Half the class came {{*down|up|round}} with chickenpox last month." },
      { id: "wake", t: "When he came {{*to|into|across}}, he was lying in a hospital bed." },
      { id: "wake", t: "The boxer fell and took a minute to come {{*round|across|up}}." }
    ] },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb with come in the correct form. Watch the tense!",
    items: [
      { id: "across", t: "I [[came across]] some old photos of my parents in the attic yesterday." },
      { id: "into", t: "If you [[came into]] a million pounds, what would you do?" },
      { id: "visit", t: "Grandma [[comes round]] every Sunday to see the children." },
      { id: "upwith", t: "The engineers have [[come up with]] a new way to save energy." },
      { id: "downwith", t: "Sorry, I can't come to the party. I've [[come down with]] a cold." },
      { id: "wake", t: "She fainted in the heat but [[came round/came to]] a few minutes later." },
      { id: "across", t: "Have you ever [[come across]] anyone famous in the street?" },
      { id: "upwith", t: "Can you [[come up with]] a better plan by tomorrow?" },
      { id: "visit", t: "Do you want to [[come round]] after school and do homework together?" },
      { id: "downwith", t: "Every winter my little brother [[comes down with]] something." }
    ] },
  { type: "order", title: "Word order", short: "Word order", instr: "Tap the words in the right order. Tap a word in your answer to send it back.",
    items: [
      { id: "across", s: "I came across an interesting article yesterday." },
      { id: "into", s: "He came into a lot of money last year." },
      { id: "visit", s: "Why don't you come round this evening?" },
      { id: "upwith", s: "She came up with a great idea." },
      { id: "downwith", s: "I think I'm coming down with a cold." },
      { id: "wake", s: "It took him ten minutes to come round." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "across", ru: "Я случайно нашла старое письмо в книге.", en: "I came across an old letter in a book.", key: "c[ao]me across" },
      { id: "across", ru: "Ты когда-нибудь встречал такое слово?", en: "Have you ever come across this word?", key: "c[ao]me across" },
      { id: "into", ru: "Она унаследовала дом от тёти.", en: "She came into a house from her aunt.", key: "c[ao]me into" },
      { id: "visit", ru: "Заходи ко мне вечером!", en: "Come round this evening!", key: "come round|come over", hint: "come round" },
      { id: "upwith", ru: "Нам нужно придумать план.", en: "We need to come up with a plan.", key: "c[ao]me up with" },
      { id: "upwith", ru: "Кто это придумал?", en: "Who came up with this?", key: "c[ao]me up with" },
      { id: "downwith", ru: "Он заболел гриппом перед экзаменом.", en: "He came down with the flu before the exam.", key: "c[ao]me down with" },
      { id: "wake", ru: "Когда она пришла в себя, рядом был врач.", en: "When she came round, a doctor was next to her.", key: "c[ao]me (round|to)" }
    ] }
];
