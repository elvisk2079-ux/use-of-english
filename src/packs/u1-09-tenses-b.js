// TITLE: Past or Perfect?
// EYEBROW: Use of English B2 · Unit 1 · Grammar Revision: Tenses B
// SUB: Past Simple, Past Continuous, Present Perfect and Present Perfect Continuous with their time words: for, since, ago, yet, still, already, while, when. Plus the traps from “Points to remember”.
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u1-tensesB" };
const P = [
  { id: "for", phrase: "for + period", ru: "for two years, for an hour" },
  { id: "since", phrase: "since + point in time", ru: "since 2020, since I was ten" },
  { id: "ago", phrase: "… ago + Past Simple", ru: "two days ago (never with Present Perfect)" },
  { id: "yet", phrase: "yet", ru: "в вопросах и отрицаниях, в конце" },
  { id: "still", phrase: "still", ru: "всё ещё; still + haven't" },
  { id: "already", phrase: "already", ru: "уже (have already done)" },
  { id: "while", phrase: "while + Past Continuous", ru: "пока, в то время как" },
  { id: "when", phrase: "when + Past Simple", ru: "когда (короткое действие)" },
  { id: "ps", phrase: "Past Simple vs Present Perfect", ru: "finished time vs up to now" },
  { id: "ppc", phrase: "Present Perfect Continuous", ru: "How long have you been…?" },
  { id: "gonebeen", phrase: "has gone / has been", ru: "уехал (ещё там) / побывал (вернулся)" },
  { id: "useto", phrase: "did(n't) use to", ru: "did + use (не used)" }
];
const DRILLS = [
  { type: "gaps", title: "Time words", short: "Time words", instr: "Tap the time word that fits.",
    items: [
      { id: "for", t: "I've known Kate {{*for|since|ago}} ten years." },
      { id: "for", t: "We have been waiting {{*for|since|while}} over an hour." },
      { id: "since", t: "He hasn't eaten anything {{*since|for|ago}} breakfast." },
      { id: "since", t: "They have lived here {{*since|for|when}} they got married." },
      { id: "ago", t: "I moved to Novgorod three years {{*ago|since|before}}." },
      { id: "ago", t: "The film started ten minutes {{*ago|already|since}}." },
      { id: "yet", t: "Have you finished your project {{*yet|still|already}}?" },
      { id: "yet", t: "The results haven't arrived {{*yet|already|ago}}." },
      { id: "still", t: "It's midnight and she {{*still|yet|already}} hasn't called." },
      { id: "still", t: "Are you {{*still|yet|ago}} working on that essay?" },
      { id: "already", t: "Don't tell me the ending – I've {{*already|yet|still}} seen the film." },
      { id: "already", t: "We've {{*already|yet|since}} booked the tickets." },
      { id: "while", t: "{{*While|When|Since}} I was walking home, I saw an old friend." },
      { id: "while", t: "Someone stole my bag {{*while|for|ago}} I was having lunch." },
      { id: "when", t: "I was reading {{*when|while|for}} the lights went out." },
      { id: "when", t: "{{*When|While|Since}} she opened the door, everyone shouted “Surprise!”" },
      { id: "for", t: "How long is it since you started? – I've been doing it {{*for|since|ago}} a month." },
      { id: "since", t: "It's been ages {{*since|for|ago}} I last saw you!" }
    ],
    note: "for + a period (for a week), since + a starting point (since Monday, since I was six). ago goes with the Past Simple only: I bought it two years ago, NOT I have bought it two years ago." },
  { type: "gaps", title: "Which tense?", short: "Which tense", instr: "Tap the correct verb form.",
    items: [
      { id: "ps", t: "I {{*saw|have seen|was seeing}} Tom at the supermarket yesterday." },
      { id: "ps", t: "{{*Have you ever been|Did you ever go|Were you ever}} to Italy?" },
      { id: "ps", t: "She {{*has worked|worked|is working}} here since 2018." },
      { id: "ps", t: "We {{*went|have gone|have been going}} to Spain last summer." },
      { id: "ppc", t: "Your eyes are red. {{*Have you been crying|Did you cry|Were you crying}}?" },
      { id: "ppc", t: "I {{*have been learning|learned|was learning}} the piano for three years and I still love it." },
      { id: "while", t: "While I {{*was cooking|cooked|have cooked}}, my brother set the table." },
      { id: "when", t: "We were having dinner when the phone {{*rang|was ringing|has rung}}." },
      { id: "still", t: "I {{*still haven't finished|still didn't finish|haven't still finished}} the book." },
      { id: "already", t: "Oh no! The train {{*has already left|already left|was already leaving}}!" },
      { id: "gonebeen", t: "Where's Anna? – She {{*has gone|has been}} to the shops. She'll be back soon." },
      { id: "gonebeen", t: "I {{*have been|have gone}} to London three times. I love it!" },
      { id: "useto", t: "I {{*didn't use to|didn't used to|don't used to}} like vegetables." },
      { id: "ppc", t: "How long {{*have they been living|did they live|are they living}} in this flat?" }
    ] },
  { type: "gaps", title: "Put the verb in the correct form", short: "Verb forms", instr: "Use Past Simple, Past Continuous, Present Perfect or Present Perfect Continuous.",
    items: [
      { id: "when", t: "I [[was walking]] ^WALK^ to school when it started to rain." },
      { id: "while", t: "While we [[were watching]] ^WATCH^ the match, the TV broke." },
      { id: "ps", t: "Mozart [[wrote]] ^WRITE^ more than 600 pieces of music." },
      { id: "ps", t: "I [[have never eaten/'ve never eaten]] ^NEVER / EAT^ snails." },
      { id: "ppc", t: "They [[have been playing/'ve been playing]] ^PLAY^ tennis since ten o'clock." },
      { id: "ago", t: "We [[met]] ^MEET^ two years ago at a summer camp." },
      { id: "since", t: "She [[has had/'s had]] ^HAVE^ this phone since her birthday." },
      { id: "yet", t: "[[Have you done]] ^YOU / DO^ your homework yet?" },
      { id: "still", t: "I still [[haven't found/have not found]] ^NOT FIND^ my keys." },
      { id: "already", t: "Mum has already [[made]] ^MAKE^ dinner." },
      { id: "when", t: "When the teacher [[came]] ^COME^ in, the students were talking." },
      { id: "ppc", t: "You look tired. What [[have you been doing]] ^YOU / DO^?" },
      { id: "gonebeen", t: "Dad isn't here. He [[has gone/'s gone]] ^GO^ to work." },
      { id: "for", t: "I [[have known/'ve known]] ^KNOW^ my best friend for twelve years." }
    ] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "These are the classic mistakes. Is each sentence right or wrong?",
    items: [
      { id: "ago", t: "I have bought this bike two years ago.", ok: false, fix: "I bought this bike two years ago." },
      { id: "for", t: "I have had this bike for two years.", ok: true },
      { id: "for", t: "I have this bike for two years.", ok: false, fix: "I have had this bike for two years." },
      { id: "since", t: "I have had this bike since I was sixteen.", ok: true },
      { id: "since", t: "I have had this bike since two years ago.", ok: false, fix: "I have had this bike for two years." },
      { id: "useto", t: "James didn't used to smoke so much.", ok: false, fix: "James didn't use to smoke so much." },
      { id: "gonebeen", t: "She has been to Italy. She came back last week.", ok: true },
      { id: "gonebeen", t: "She has gone to Italy. She came back last week.", ok: false, fix: "She has been to Italy. She came back last week." },
      { id: "useto", t: "We did saw the thief!", ok: false, fix: "We did see the thief!" },
      { id: "ps", t: "Shakespeare has written many plays.", ok: false, fix: "Shakespeare wrote many plays." },
      { id: "yet", t: "Has the post arrived yet?", ok: true },
      { id: "still", t: "I yet haven't decided.", ok: false, fix: "I still haven't decided." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the right tense and time word.",
    items: [
      { id: "for", ru: "Я знаю его десять лет.", en: "I have known him for ten years.", key: "(have|'ve) known \\w+ for", hint: "have known … for" },
      { id: "since", ru: "Она живёт здесь с 2015 года.", en: "She has lived here since 2015.", key: "(has|'s) (lived|been living) here since", hint: "has lived … since" },
      { id: "ago", ru: "Мы переехали пять лет назад.", en: "We moved five years ago.", key: "moved \\w+ years ago", hint: "moved … ago (Past Simple)" },
      { id: "yet", ru: "Ты уже поел?", en: "Have you eaten yet?", key: "have you (eaten|had) .*yet", hint: "Have you … yet?" },
      { id: "still", ru: "Я всё ещё не нашла ключи.", en: "I still haven't found my keys.", key: "still (haven't|have not) found", hint: "still haven't found" },
      { id: "already", ru: "Я уже видела этот фильм.", en: "I have already seen this film.", key: "(have|'ve) already seen", hint: "have already seen" },
      { id: "while", ru: "Пока я спала, пошёл снег.", en: "While I was sleeping, it started to snow.", key: "while i was sleeping", hint: "While I was sleeping…" },
      { id: "ppc", ru: "Как долго ты учишь английский?", en: "How long have you been learning English?", key: "how long have you been (learning|studying)", hint: "How long have you been learning…?" },
      { id: "gonebeen", ru: "Папа уехал в командировку (его сейчас нет).", en: "Dad has gone on a business trip.", key: "(has|'s) gone", hint: "has gone" },
      { id: "useto", ru: "Раньше я не любила кофе.", en: "I didn't use to like coffee.", key: "didn't use to|did not use to", hint: "didn't use to" }
    ] }
];
