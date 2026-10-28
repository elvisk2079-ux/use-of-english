// TITLE: Look Up To, Look Down On
// EYEBROW: Use of English B2 · Unit 3 · Phrasal Verbs A (look)
// SUB: Eight phrasal verbs with look, five drills. Some have opposite meanings: look up to sb and look down on sb.
const META = { ls: "uoe-b2-u3-pvlook" };
const P = [
  { id: "after", phrase: "look after", ru: "присматривать, заботиться", en: "take care of" },
  { id: "forward", phrase: "look forward to", ru: "с нетерпением ждать", en: "expect something pleasant to happen" },
  { id: "into", phrase: "look into", ru: "расследовать, изучить", en: "investigate" },
  { id: "over", phrase: "look over", ru: "просмотреть", en: "inspect quickly" },
  { id: "out", phrase: "look out!", ru: "осторожно!", en: "warn somebody about danger" },
  { id: "up", phrase: "look up", ru: "посмотреть (в словаре)", en: "try to find in a book or a list" },
  { id: "down", phrase: "look down on", ru: "смотреть свысока", en: "have a poor opinion of someone" },
  { id: "upto", phrase: "look up to", ru: "уважать, восхищаться", en: "respect, admire" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "after", t: "Who will look {{*after|into|over}} the dog while we're away?" },
      { id: "after", t: "Nurses look {{*after|up|out}} sick people." },
      { id: "forward", t: "I'm really looking {{*forward|over|after}} to the holidays." },
      { id: "forward", t: "We look forward {{*to|for|at}} hearing from you." },
      { id: "into", t: "The police promised to look {{*into|after|forward}} the complaint." },
      { id: "over", t: "Can you look {{*over|after|down}} my essay before I hand it in?" },
      { id: "out", t: "Look {{*out|up|into}}! There's a car coming!" },
      { id: "up", t: "If you don't know the word, look it {{*up|out|over}}." },
      { id: "down", t: "He looks down {{*on|at|to}} people who don't have a university degree." },
      { id: "upto", t: "Many children look {{*up|down|out}} to sports stars." },
      { id: "upto", t: "I've always looked up {{*to|on|at}} my older sister." },
      { id: "into", t: "Scientists are looking {{*into|after|out}} the causes of the disease." }
    ],
    note: "look forward to + -ing: I'm looking forward to seeing you (NOT to see)." },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb with look in the correct form.",
    items: [
      { id: "after", t: "We [[looked after]] Ben's house while he was on holiday." },
      { id: "forward", t: "We are all [[looking forward to]] the first match of the season." },
      { id: "into", t: "The company promised to [[look into]] the problem." },
      { id: "over", t: "I've [[looked over]] your project and I have a few ideas." },
      { id: "out", t: "[[Look out]]! The floor is wet." },
      { id: "up", t: "I [[looked up]] his number in the phone book." },
      { id: "down", t: "Don't [[look down on]] people because they are poor." },
      { id: "upto", t: "Every young player [[looks up to]] the team captain." }
    ] },
  { type: "order", title: "Word order", short: "Word order", instr: "Tap the words in the right order. Tap a word in your answer to send it back.",
    items: [
      { id: "after", s: "Can you look after my cat?" },
      { id: "forward", s: "I'm looking forward to seeing you." },
      { id: "into", s: "The police will look into the matter." },
      { id: "up", s: "Look up the word in the dictionary.", alt: ["Look the word up in the dictionary."] },
      { id: "down", s: "She looks down on her neighbours." },
      { id: "upto", s: "I look up to my grandfather." },
      { id: "over", s: "Please look over my homework.", alt: ["Please look my homework over."] }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "after", ru: "Бабушка присматривает за детьми.", en: "Grandma looks after the children.", key: "looks? after" },
      { id: "forward", ru: "Я с нетерпением жду лета.", en: "I'm looking forward to the summer.", key: "looking forward to" },
      { id: "forward", ru: "Жду встречи с тобой!", en: "I'm looking forward to seeing you!", key: "looking forward to seeing" },
      { id: "into", ru: "Мы разберёмся с этой проблемой.", en: "We will look into this problem.", key: "look into" },
      { id: "out", ru: "Осторожно! Там лёд!", en: "Look out! There's ice!", key: "look out" },
      { id: "up", ru: "Посмотри значение в словаре.", en: "Look up the meaning in the dictionary.", key: "look (up )?the meaning( up)?" },
      { id: "down", ru: "Он смотрит на всех свысока.", en: "He looks down on everyone.", key: "looks down on" },
      { id: "upto", ru: "Я восхищаюсь своей мамой.", en: "I look up to my mum.", key: "look up to" }
    ] }
];
