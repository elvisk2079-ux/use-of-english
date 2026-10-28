// TITLE: A Healthy Mind
// EYEBROW: Use of English B2 · Unit 6 · Examination Practice A (Section 1) · Open cloze
// SUB: The words from the open cloze text “Healthy”: is believed to have, advisable to, object to, too difficult to, have difficulty in, every now and then, no point in, do away with, contribute to. Five drills, ending with a new open cloze text.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u6-healthy" };
const P = [
  { id: "have", phrase: "is believed to have been", ru: "считается, что был (перфектный инфинитив)" },
  { id: "advisable", phrase: "it's advisable to do", ru: "рекомендуется" },
  { id: "resultof", phrase: "the result of doing", ru: "результат того, что …" },
  { id: "objectto", phrase: "object to doing", ru: "возражать против" },
  { id: "toofollow", phrase: "too difficult to follow", ru: "слишком трудный, чтобы …" },
  { id: "difficultyin", phrase: "have difficulty (in) finding", ru: "с трудом находить" },
  { id: "nowthen", phrase: "every now and then", ru: "время от времени" },
  { id: "itis", phrase: "it is important to remember", ru: "важно помнить" },
  { id: "pointin", phrase: "there's no point in doing", ru: "нет смысла" },
  { id: "lastbut", phrase: "last but not least", ru: "последнее, но не менее важное" },
  { id: "doaway", phrase: "do away with", ru: "избавиться от" },
  { id: "contributeto", phrase: "contribute to", ru: "способствовать" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "have", t: "The castle is believed to {{*have|be|has}} been built in the 12th century." },
      { id: "have", t: "He is said to {{*have|had|having}} won the lottery twice." },
      { id: "advisable", t: "It's advisable {{*to|for|of}} book tickets early." },
      { id: "advisable", t: "Doctors say it's advisable to {{*drink|drinking|drank}} plenty of water." },
      { id: "resultof", t: "His success is the result {{*of|from|for}} hard work." },
      { id: "resultof", t: "Good grades are the result of {{*doing|do|done}} your homework." },
      { id: "objectto", t: "Many people object {{*to|against|for}} paying more tax." },
      { id: "objectto", t: "I object to {{*being|be|been}} treated like a child." },
      { id: "toofollow", t: "The instructions were too complicated {{*to|for|of}} follow." },
      { id: "toofollow", t: "The film was too long {{*to|for|so}} watch in one evening." },
      { id: "difficultyin", t: "I had difficulty {{*in|to|for}} understanding his accent." },
      { id: "difficultyin", t: "She has difficulty {{*finding|to find|find}} time for sport." },
      { id: "nowthen", t: "I eat chocolate every now and {{*then|when|so}}." },
      { id: "nowthen", t: "Every now {{*and|or|but}} then, I go jogging." },
      { id: "itis", t: "{{*It|There|This}} is important to sleep well." },
      { id: "itis", t: "{{*It|That|There}} is a good idea to stretch before running." },
      { id: "pointin", t: "There's no point {{*in|to|for}} worrying." },
      { id: "pointin", t: "There's no {{*point|use|worth}} in buying an expensive bike if you never ride it." },
      { id: "lastbut", t: "Last {{*but|and|so}} not least, drink lots of water." },
      { id: "lastbut", t: "Last but not {{*least|less|last}}, remember to rest." },
      { id: "doaway", t: "We should do {{*away|off|out}} with plastic bags." },
      { id: "doaway", t: "The company did away {{*with|from|of}} paper tickets." },
      { id: "contributeto", t: "Exercise contributes {{*to|for|in}} good health." },
      { id: "contributeto", t: "Stress can contribute {{*to|at|on}} heart problems." }
    ] },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Open cloze practice: write ONE word in each gap.",
    items: [
      { id: "have", t: "The house is thought to [[have]] belonged to a famous writer." },
      { id: "advisable", t: "It's [[advisable/wise/sensible/best/better]] to wear a helmet." },
      { id: "resultof", t: "Her fitness is the result [[of]] years of training." },
      { id: "objectto", t: "I object [[to]] working on Sundays." },
      { id: "toofollow", t: "The text was too difficult [[to]] understand." },
      { id: "difficultyin", t: "He has difficulty [[in]] reading small print." },
      { id: "nowthen", t: "We visit them every now and [[then]]." },
      { id: "itis", t: "[[It]] is important to have breakfast." },
      { id: "pointin", t: "There's no point [[in]] arguing." },
      { id: "lastbut", t: "Last [[but]] not least, smile!" },
      { id: "doaway", t: "Let's do [[away]] with these old rules." },
      { id: "contributeto", t: "Fresh air contributes [[to]] a good night's sleep." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "advisable", t: "It's advisable drinking more water.", ok: false, fix: "It's advisable to drink more water." },
      { id: "objectto", t: "Many people object to going to the gym.", ok: true },
      { id: "toofollow", t: "The exercises were too difficult to follow them.", ok: false, fix: "The exercises were too difficult to follow." },
      { id: "difficultyin", t: "I have difficulty to find time.", ok: false, fix: "I have difficulty (in) finding time." },
      { id: "pointin", t: "There's no point in doing it only once.", ok: true },
      { id: "nowthen", t: "Every now and then I go swimming.", ok: true },
      { id: "lastbut", t: "Last but no least, sleep well.", ok: false, fix: "Last but not least, sleep well." },
      { id: "contributeto", t: "Exercise contributes to well-being.", ok: true },
      { id: "have", t: "The Greeks are believed to have used this saying.", ok: true },
      { id: "doaway", t: "Do away from negative thoughts!", ok: false, fix: "Do away with negative thoughts!" },
      { id: "itis", t: "Is important to rest.", ok: false, fix: "It is important to rest." },
      { id: "resultof", t: "Feeling fit is the result of doing exercise.", ok: true }
    ] },
  { type: "gaps", title: "Exam text: Sleep well", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write ONE word in each gap.",
    items: [
      { t: "Good sleep is believed to [[have#have]] been important for health since ancient times. According to doctors, it is advisable [[to#advisable]] sleep seven to nine hours a night. Feeling fresh in the morning is the result [[of#resultof]] going to bed at the same time every day. Some teenagers object [[to#objectto]] going to bed early and say that it is too boring [[to#toofollow]] lie in the dark. Others have difficulty [[in#difficultyin]] falling asleep because they look at their phones. It's fine to stay up late every now and [[then#nowthen]], but [[it#itis]] is important to have a routine. There's no point [[in#pointin]] sleeping all weekend to catch up. Last [[but#lastbut]] not least, try to do [[away#doaway]] with coffee in the evening. A good night's sleep contributes [[to#contributeto]] good marks at school!" }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "advisable", ru: "Рекомендуется пить больше воды.", en: "It's advisable to drink more water.", key: "advisable to drink" },
      { id: "objectto", ru: "Я против того, чтобы работать в выходные.", en: "I object to working at weekends.", key: "object to working" },
      { id: "toofollow", ru: "Это слишком трудно понять.", en: "It's too difficult to understand.", key: "too (difficult|hard) to understand" },
      { id: "difficultyin", ru: "Мне трудно найти время.", en: "I have difficulty finding time.", key: "difficulty (in )?finding" },
      { id: "pointin", ru: "Нет смысла спорить.", en: "There's no point in arguing.", key: "no point (in )?arguing" },
      { id: "itis", ru: "Важно помнить об этом.", en: "It is important to remember this.", key: "it is important to remember|it's important to remember" },
      { id: "doaway", ru: "Давай избавимся от старых вещей.", en: "Let's do away with old things.", key: "do away with|get rid of" },
      { id: "contributeto", ru: "Спорт способствует здоровью.", en: "Sport contributes to health.", key: "contributes to" },
      { id: "have", ru: "Считается, что замок был построен в XV веке.", en: "The castle is believed to have been built in the 15th century.", key: "(believed|thought|said) to have been built" },
      { id: "nowthen", ru: "Время от времени я ем фастфуд.", en: "Every now and then I eat fast food.", key: "every now and then|now and then" }
    ] }
];
