// TITLE: Spectators or Audience?
// EYEBROW: Use of English B2 · Unit 5 · Consolidation I · Vocabulary
// SUB: Ten vocabulary points from Units 1–4: owe sth to sb, in common, arise or rise, spectators or audience, grow up or bring up, in search of, transfer, intention, tour, habit or custom. Five drills.
// BOARD: Your words
const META = { ls: "uoe-b2-u5-vocab" };
const P = [
  { id: "owe", phrase: "owe sth to sb", ru: "быть обязанным чем-то кому-то" },
  { id: "common", phrase: "have sth in common", ru: "иметь что-то общее" },
  { id: "arise", phrase: "arise / rise / raise", ru: "возникать / подниматься / поднимать" },
  { id: "spectators", phrase: "spectators / audience / viewers", ru: "зрители: на стадионе / в театре / у телевизора" },
  { id: "growup", phrase: "grow up / bring up", ru: "вырасти / воспитывать" },
  { id: "insearch", phrase: "in search of", ru: "в поисках" },
  { id: "transfer", phrase: "transfer / transport / transmit", ru: "перевести / перевозить / передавать (сигнал)" },
  { id: "intention", phrase: "intention (of doing / to do)", ru: "намерение" },
  { id: "tour", phrase: "tour / voyage / expedition", ru: "тур, экскурсия / морское путешествие / экспедиция" },
  { id: "habit", phrase: "habit / custom", ru: "привычка / обычай" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "owe", t: "She {{*owes|thanks|gives}} her success to her parents." },
      { id: "owe", t: "I owe my life {{*to|for|at}} that doctor." },
      { id: "common", t: "My best friend and I have a lot in {{*common|general|same}}." },
      { id: "common", t: "What do these two countries have in {{*common|together|public}}?" },
      { id: "arise", t: "If any questions {{*arise|rise|raise}}, please ask." },
      { id: "arise", t: "The sun {{*rises|arises|raises}} in the east." },
      { id: "arise", t: "Please {{*raise|rise|arise}} your hand if you know the answer." },
      { id: "spectators", t: "The {{*spectators|audience|viewers}} cheered as the team scored." },
      { id: "spectators", t: "The {{*audience|spectators|viewers}} clapped at the end of the play." },
      { id: "spectators", t: "Millions of {{*viewers|spectators|audience}} watched the show on TV." },
      { id: "growup", t: "I {{*grew up|brought up|raised up}} in a small village." },
      { id: "growup", t: "She was {{*brought up|grown up|risen up}} by her grandparents." },
      { id: "insearch", t: "They travelled north {{*in search|in charge|at random}} of work." },
      { id: "insearch", t: "The dog ran off in search {{*of|for|to}} food." },
      { id: "transfer", t: "I'll {{*transfer|transport|transmit}} the money to your account." },
      { id: "transfer", t: "The match was {{*transmitted|transported|transferred}} live on TV." },
      { id: "intention", t: "I have no {{*intention|attention|challenge}} of leaving." },
      { id: "intention", t: "It wasn't my {{*intention|invention|attention}} to upset you." },
      { id: "tour", t: "We went on a guided {{*tour|voyage|expedition}} of the castle." },
      { id: "tour", t: "The {{*voyage|tour|excursion}} across the Atlantic took three weeks." },
      { id: "habit", t: "Biting your nails is a bad {{*habit|custom|fashion}}." },
      { id: "habit", t: "It's an old {{*custom|habit|trend}} to paint eggs at Easter." }
    ],
    note: "arise – arose – arisen (a problem arises); rise – rose – risen (the sun rises, prices rise); raise – raised – raised (raise your hand, raise prices). spectators – sport; audience – theatre, concert; viewers – TV." },
  { type: "mcq", title: "Which word fits the definition?", short: "Definitions", instr: "Read the definition and tap the word or phrase.",
    items: [
      { id: "owe", q: "to have something because of someone else's help", o: ["owe", "borrow", "lend", "thank"] },
      { id: "common", q: "shared by two or more people", o: ["in common", "in general", "in private", "in public"] },
      { id: "arise", q: "(a problem or situation) to begin to exist", o: ["arise", "raise", "rise", "lift"] },
      { id: "spectators", q: "people who watch a sports event", o: ["spectators", "audience", "viewers", "listeners"] },
      { id: "growup", q: "to look after a child until it becomes an adult", o: ["bring up", "grow up", "rise", "grow"] },
      { id: "insearch", q: "looking for something", o: ["in search of", "in charge of", "at the sight of", "at random"] },
      { id: "transfer", q: "to move someone to another place of work or study", o: ["transfer", "transport", "transmit", "travel"] },
      { id: "intention", q: "a plan to do something", o: ["intention", "attention", "invention", "tension"] },
      { id: "tour", q: "a visit around a place to see it", o: ["tour", "voyage", "expedition", "flight"] },
      { id: "habit", q: "something you do often, usually without thinking", o: ["habit", "custom", "trend", "fashion"] }
    ] },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Write the missing word in the right form.",
    bank: ["owe", "common", "arise", "spectators", "audience", "grow", "bring", "search", "transfer", "intention", "tour", "habit"],
    items: [
      { id: "owe", t: "He [[owes]] everything to his first coach." },
      { id: "common", t: "We have nothing in [[common]]." },
      { id: "arise", t: "A problem has [[arisen]] with the computer." },
      { id: "spectators", t: "Thousands of [[spectators]] watched the race from the stands." },
      { id: "spectators", t: "The [[audience]] laughed during the whole comedy." },
      { id: "growup", t: "What do you want to be when you [[grow]] up?" },
      { id: "growup", t: "She was [[brought]] up in Siberia." },
      { id: "insearch", t: "Thousands of people went to Alaska in [[search]] of gold." },
      { id: "transfer", t: "The patient was [[transferred]] to another hospital." },
      { id: "intention", t: "My [[intention]] is to study abroad." },
      { id: "tour", t: "The band is on a world [[tour]]." },
      { id: "habit", t: "Reading before bed is a good [[habit]]." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the word correct?",
    items: [
      { id: "owe", t: "I owe my success to my teacher.", ok: true },
      { id: "common", t: "We have much in general.", ok: false, fix: "We have a lot in common." },
      { id: "arise", t: "Prices have raised again.", ok: false, fix: "Prices have risen again." },
      { id: "spectators", t: "The audience at the football match was huge.", ok: false, fix: "The crowd / The spectators at the football match…" },
      { id: "growup", t: "I was grown up by my aunt.", ok: false, fix: "I was brought up by my aunt." },
      { id: "insearch", t: "They set off in search of adventure.", ok: true },
      { id: "transfer", t: "The signal is transmitted by satellite.", ok: true },
      { id: "intention", t: "I have no intention of giving up.", ok: true },
      { id: "tour", t: "We went on a voyage of the museum.", ok: false, fix: "We went on a tour of the museum." },
      { id: "habit", t: "Smoking is a bad custom.", ok: false, fix: "Smoking is a bad habit." },
      { id: "habit", t: "Shaking hands is a common custom in Britain.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key word.",
    items: [
      { id: "owe", ru: "Я обязана своим успехом родителям.", en: "I owe my success to my parents.", key: "owe .*to" },
      { id: "common", ru: "У нас много общего.", en: "We have a lot in common.", key: "in common" },
      { id: "arise", ru: "Возникла проблема.", en: "A problem arose.", key: "arose|has arisen" },
      { id: "spectators", ru: "Зрители на стадионе были в восторге.", en: "The spectators at the stadium were delighted.", key: "spectators" },
      { id: "growup", ru: "Я выросла в деревне.", en: "I grew up in a village.", key: "grew up" },
      { id: "insearch", ru: "Они уехали в поисках работы.", en: "They left in search of work.", key: "in search of" },
      { id: "intention", ru: "У меня нет намерения уходить.", en: "I have no intention of leaving.", key: "intention" },
      { id: "tour", ru: "Мы поехали на экскурсию по городу.", en: "We went on a tour of the city.", key: "tour" },
      { id: "habit", ru: "Это плохая привычка.", en: "It's a bad habit.", key: "habit" },
      { id: "transfer", ru: "Его перевели в другую школу.", en: "He was transferred to another school.", key: "transferred" }
    ] }
];
