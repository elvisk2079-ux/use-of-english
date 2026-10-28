// TITLE: The Art of Being a Parent
// EYEBROW: Use of English B2 · Unit 3 · Examination Practice A (Section 2)
// SUB: The words from the multiple-choice text “The Art of Being a Parent”, in new sentences and a new exam-style text. Twelve phrases, five drills.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u3-parent" };
const P = [
  { id: "bringup", phrase: "bring up children", ru: "воспитывать детей" },
  { id: "usual", phrase: "the usual requirements", ru: "обычные требования" },
  { id: "infact", phrase: "In fact, …", ru: "На самом деле, …" },
  { id: "behaviour", phrase: "behaviour everyone can live with", ru: "поведение" },
  { id: "aware", phrase: "be aware of", ru: "осознавать, знать о" },
  { id: "common", phrase: "a common mistake", ru: "распространённая ошибка" },
  { id: "far", phrase: "far stricter than", ru: "гораздо строже, чем" },
  { id: "willing", phrase: "be willing to", ru: "быть готовым (сделать)" },
  { id: "from", phrase: "learn from experience", ru: "учиться на опыте" },
  { id: "routine", phrase: "the importance of routine", ru: "важность распорядка" },
  { id: "as", phrase: "at the same time as", ru: "в то же время, что и" },
  { id: "teaches", phrase: "teach sb how to …", ru: "учить кого-то (как…)" }
];
const DRILLS = [
  { type: "gaps", title: "Choose A, B, C or D", short: "A B C D", instr: "Tap the option that best fits each gap, like in Part 1 of the exam.",
    items: [
      { id: "bringup", t: "It isn't easy to {{*bring up|grow up|grow|raise up}} three children on your own." },
      { id: "usual", t: "We had the {{*usual|routine|common|popular}} problems with the car – it wouldn't start." },
      { id: "infact", t: "He says he's busy. {{*In fact|As well as|All in all|But}}, he's playing games." },
      { id: "behaviour", t: "The teacher praised the children for their good {{*behaviour|manner|temper|character}}." },
      { id: "aware", t: "Are you {{*aware|known|familiar|accustomed}} of the school rules?" },
      { id: "common", t: "It's a {{*common|continuous|famous|willing}} mistake to think that cats don't need attention." },
      { id: "far", t: "The new teacher is {{*far|very|quite|fairly}} stricter than the old one." },
      { id: "willing", t: "Are you {{*willing|keen|eager|interested}} to work on Saturdays?" },
      { id: "from", t: "Children learn {{*from|by|on|with}} their mistakes." },
      { id: "routine", t: "Babies need a {{*routine|custom|fashion|trend}}: they should eat and sleep at the same time every day." },
      { id: "as", t: "We arrived at the same time {{*as|like|than|of}} the bus." },
      { id: "teaches", t: "My grandfather {{*taught|learnt|educated|instructed}} me how to fish." },
      { id: "infact", t: "I thought the test would be hard. {{*In fact|All in all|As well as|But}}, it was easy." },
      { id: "aware", t: "I wasn't {{*aware|accustomed|familiar|known}} that you'd moved house." }
    ] },
  { type: "gaps", title: "Exam text: Teenagers and sleep", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then tap the best option for each gap.",
    items: [
      { t: "Most parents who {{*bring up|grow up|raise up|educate#bringup}} teenagers know the {{*usual|routine|popular|ordinary#usual}} complaint: “I'm not tired!” {{*In fact|But|All in all|As well as#infact}}, teenagers need more sleep than adults. Tired teenagers often show bad {{*behaviour|manner|temper|character#behaviour}} at school. Many parents are not {{*aware|known|familiar|accustomed#aware}} of this. A {{*common|continuous|famous|willing#common}} mistake is to let teenagers use their phones in bed. Some experts say parents should be {{*far|very|quite|fairly#far}} stricter about screens at night. Teenagers also need to be {{*willing|keen|eager|interested#willing}} to change their habits and learn {{*from|by|on|with#from}} experience. A regular {{*routine|custom|trend|fashion#routine}} helps a lot: going to bed at the same time {{*as|like|than|of#as}} the rest of the family {{*teaches|learns|educates|instructs#teaches}} children good habits for life." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "bringup", t: "She was brought [[up]] by her aunt." },
      { id: "usual", t: "We met at the café, as [[usual]]." },
      { id: "infact", t: "It wasn't a bad film. In [[fact]], I quite liked it." },
      { id: "behaviour", t: "His [[behaviour]] in class has got much better." },
      { id: "aware", t: "Are you [[aware]] of the risks?" },
      { id: "common", t: "Headaches are very [[common]] among students." },
      { id: "far", t: "This book is [[far/much]] more interesting than that one." },
      { id: "willing", t: "I'm [[willing]] to help, but I need time." },
      { id: "from", t: "You can learn a lot [[from]] experience." },
      { id: "routine", t: "Exercise is part of my daily [[routine]]." },
      { id: "as", t: "He finished at the same time [[as]] me." },
      { id: "teaches", t: "Who [[teaches]] you English?" }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "bringup", t: "My parents grew me up in a small town.", ok: false, fix: "My parents brought me up in a small town." },
      { id: "aware", t: "I'm aware of the problem.", ok: true },
      { id: "far", t: "This exam was very harder than the last one.", ok: false, fix: "This exam was far / much harder than the last one." },
      { id: "from", t: "We learn by our mistakes.", ok: false, fix: "We learn from our mistakes." },
      { id: "routine", t: "Children need a daily routine.", ok: true },
      { id: "as", t: "She arrived at the same time like me.", ok: false, fix: "She arrived at the same time as me." },
      { id: "teaches", t: "My mum learned me how to cook.", ok: false, fix: "My mum taught me how to cook." },
      { id: "common", t: "It's a common mistake.", ok: true },
      { id: "willing", t: "Are you willing to try again?", ok: true },
      { id: "infact", t: "In fact, he's not angry at all.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "bringup", ru: "Воспитывать детей – непросто.", en: "Bringing up children is not easy.", key: "bring(ing)? up children" },
      { id: "infact", ru: "На самом деле, я рада.", en: "In fact, I'm happy.", key: "in fact" },
      { id: "aware", ru: "Ты знаешь об этой проблеме?", en: "Are you aware of this problem?", key: "aware of" },
      { id: "common", ru: "Это распространённая ошибка.", en: "It's a common mistake.", key: "common mistake" },
      { id: "far", ru: "Он гораздо строже, чем папа.", en: "He is far stricter than Dad.", key: "(far|much|a lot) stricter than" },
      { id: "willing", ru: "Я готова попробовать.", en: "I'm willing to try.", key: "willing to" },
      { id: "from", ru: "Мы учимся на опыте.", en: "We learn from experience.", key: "learn from experience" },
      { id: "teaches", ru: "Папа учит меня водить машину.", en: "Dad is teaching me how to drive.", key: "teach(es|ing)? me (how )?to drive" },
      { id: "routine", ru: "Распорядок дня очень важен.", en: "A daily routine is very important.", key: "routine" },
      { id: "as", ru: "Мы пришли одновременно с ними.", en: "We arrived at the same time as them.", key: "at the same time as" }
    ] }
];
