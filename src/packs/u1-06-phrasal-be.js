// TITLE: Phrasal Verbs with Be
// EYEBROW: Use of English B2 · Unit 1 · Phrasal Verbs C
// SUB: Six phrasal verbs with be, five drills. Be careful with the form of be: is, are, was, were, been.
const META = { ls: "uoe-b2-u1-pvbe" };
const P = [
  { id: "on", phrase: "be on", ru: "идти, показываться (о фильме, спектакле)", en: "be shown or performed" },
  { id: "over", phrase: "be over", ru: "закончиться", en: "end; be finished" },
  { id: "about", phrase: "be about to", ru: "собираться (вот-вот), быть готовым", en: "be ready to do something very soon" },
  { id: "for", phrase: "be for", ru: "быть за, поддерживать", en: "support; be in favour of" },
  { id: "upto", phrase: "be up to", ru: "затевать (что-то нехорошее)", en: "do something, usually something wrong" },
  { id: "off", phrase: "be off", ru: "уходить, уезжать", en: "leave" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the word that completes the phrasal verb.",
    items: [
      { id: "on", t: "What's {{*on|off|over}} at the cinema tonight?" },
      { id: "on", t: "Is the new musical still {{*on|up|for}} in London?" },
      { id: "over", t: "The storm is {{*over|off|on}} – we can go outside now." },
      { id: "over", t: "When the film was {{*over|about|up}}, we went for a pizza." },
      { id: "about", t: "Hurry up! The train is {{*about|over|for}} to leave." },
      { id: "about", t: "I was just {{*about|off|on}} to call you when you called me." },
      { id: "for", t: "Are you {{*for|on|off}} or against the new school uniform?" },
      { id: "for", t: "Most people in the village are {{*for|up|over}} the new park." },
      { id: "upto", t: "The kids are very quiet. What are they {{*up|about|on}} to?" },
      { id: "upto", t: "I know you're up {{*to|for|on}} something – tell me the truth!" },
      { id: "off", t: "It's late. I'm {{*off|over|for}} – see you tomorrow!" },
      { id: "off", t: "We're {{*off|on|up}} to Spain next week." }
    ] },
  { type: "gaps", title: "Type the missing words", short: "Type it", instr: "Write the correct form of be and the particle, for example is on, was over, are about.",
    items: [
      { id: "on", t: "A great comedy [[is on]] at the theatre this week." },
      { id: "over", t: "By the time we arrived, the concert [[was over]]." },
      { id: "about", t: "Sit down, please. The show [[is about]] to begin." },
      { id: "for", t: "I [[am for]] the idea of a four-day school week." },
      { id: "upto", t: "What [[were]] you up to last night? You looked so tired this morning." },
      { id: "off", t: "Bye, Mum! I [[am off]] to school." },
      { id: "over", t: "I'm so glad the exams [[are over]]!" },
      { id: "about", t: "We [[were about]] to leave when it started to snow." }
    ] },
  { type: "order", title: "Word order", short: "Word order", instr: "Tap the words in the right order. Tap a word in your answer to send it back.",
    items: [
      { id: "on", s: "What's on TV tonight?" },
      { id: "over", s: "The holidays are over at last." },
      { id: "about", s: "I was about to go to bed." },
      { id: "for", s: "Are you for or against the plan?" },
      { id: "upto", s: "What are the boys up to?" },
      { id: "off", s: "I must be off now." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "on", ru: "Что идёт в кино в эти выходные?", en: "What's on at the cinema this weekend?", key: "(what's|what is|is|are) on" },
      { id: "over", ru: "Урок закончился.", en: "The lesson is over.", key: "(is|was|'s) over" },
      { id: "about", ru: "Я как раз собиралась тебе позвонить.", en: "I was just about to call you.", key: "(was|were|am|is|are|'m|'s) (just )?about to" },
      { id: "for", ru: "Я за этот план.", en: "I'm for this plan.", key: "(i'm|i am|am) for" },
      { id: "upto", ru: "Что ты затеял?", en: "What are you up to?", key: "up to" },
      { id: "off", ru: "Ну, я пошла! Пока!", en: "Well, I'm off! Bye!", key: "(i'm|i am) off" },
      { id: "over", ru: "Когда фильм закончился, мы пошли домой.", en: "When the film was over, we went home.", key: "was over" }
    ] }
];
