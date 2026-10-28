// TITLE: As Soon As I Get Home
// EYEBROW: Use of English B2 · Unit 2 · Grammar Revision: Clauses of Time B
// SUB: Time words that join two actions: as soon as, by the time, the moment, until, while, whenever, once, just as. And the big rule: no will after time words.
// BOARD: Your time words
const META = { ls: "uoe-b2-u2-timeclauses" };
const P = [
  { id: "as", phrase: "as", ru: "когда, в то время как (одновременно)", en: "at the same time as something else is happening" },
  { id: "assoonas", phrase: "as soon as", ru: "как только", en: "immediately after" },
  { id: "bythetime", phrase: "by the time", ru: "к тому времени как", en: "not later than the moment when" },
  { id: "moment", phrase: "the moment (that)", ru: "в тот момент, когда", en: "exactly when" },
  { id: "until", phrase: "until", ru: "до тех пор пока (не)", en: "up to the time when" },
  { id: "since", phrase: "since", ru: "с тех пор как", en: "from a time in the past until now" },
  { id: "while", phrase: "while", ru: "пока, в то время как", en: "during the time that" },
  { id: "whenever", phrase: "whenever", ru: "всякий раз когда", en: "every time that" },
  { id: "after", phrase: "after / before", ru: "после того как / перед тем как", en: "later than / earlier than" },
  { id: "once", phrase: "once", ru: "как только, после того как", en: "after; as soon as (when something is finished)" },
  { id: "justas", phrase: "just as", ru: "как раз когда", en: "at exactly the same moment as" },
  { id: "nowill", phrase: "no will after time words", ru: "When I grow up… (не when I will grow up)" },
  { id: "during", phrase: "during + noun", ru: "during my holiday, но while I was on holiday" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the time word", short: "Choose", instr: "Tap the time word that fits best.",
    items: [
      { id: "as", t: "{{*As|Until|Once}} I was walking to school, it started to rain." },
      { id: "assoonas", t: "Call me {{*as soon as|until|since}} you arrive." },
      { id: "bythetime", t: "{{*By the time|Until|Since}} we got to the cinema, the film had already started." },
      { id: "moment", t: "The dog started barking {{*the moment|until|by the time}} I opened the door." },
      { id: "until", t: "Wait here {{*until|since|whenever}} I come back." },
      { id: "until", t: "She won't go to bed {{*until|by the time|as}} she has finished her book." },
      { id: "since", t: "I haven't seen him {{*since|until|while}} we left school." },
      { id: "while", t: "Someone called {{*while|during|until}} you were out." },
      { id: "whenever", t: "My grandma cries {{*whenever|until|by the time}} she watches that film." },
      { id: "after", t: "Wash your hands {{*after|while|since}} you use the toilet." },
      { id: "after", t: "Switch off the lights {{*before|since|until}} you leave." },
      { id: "once", t: "{{*Once|Until|Since}} you've finished the test, you can go home." },
      { id: "justas", t: "{{*Just as|Until|Since}} I was leaving, the phone rang." },
      { id: "during", t: "I visited three museums {{*during|while|as}} my holiday." },
      { id: "while", t: "I visited three museums {{*while|during|by}} I was on holiday." },
      { id: "assoonas", t: "She burst out laughing {{*as soon as|until|since}} she saw the clown." },
      { id: "bythetime", t: "I will have finished my homework {{*by the time|until|since}} Mum gets home." },
      { id: "moment", t: "The audience started clapping {{*the moment|by the time|until}} the singer came on stage." }
    ],
    note: "during + noun (during the film); while + subject + verb (while we were watching the film)." },
  { type: "gaps", title: "No will after time words", short: "No will", instr: "Write the verb in the correct form. Remember: after when, as soon as, until, before… we use the Present for the future.",
    items: [
      { id: "nowill", t: "I'll call you when I [[get]] ^GET^ home." },
      { id: "nowill", t: "When I [[grow]] ^GROW^ up, I want to become a vet." },
      { id: "assoonas", t: "As soon as the film [[finishes/ends]] ^FINISH^, we'll go for a pizza." },
      { id: "until", t: "We won't start until everyone [[arrives]] ^ARRIVE^." },
      { id: "after", t: "I'll do the dishes after I [[have/have had]] ^HAVE^ a rest." },
      { id: "after", t: "Before you [[leave]] ^LEAVE^, close the windows." },
      { id: "once", t: "Once you [[have finished/finish]] ^FINISH^, give me your test." },
      { id: "bythetime", t: "By the time you [[arrive]] ^ARRIVE^, dinner will be ready." },
      { id: "nowill", t: "He said he would call as soon as he [[returned]] ^RETURN^." },
      { id: "whenever", t: "Whenever I [[hear]] ^HEAR^ this song, I think of summer." },
      { id: "as", t: "As I [[was walking]] ^WALK^ home, I saw an old friend." },
      { id: "since", t: "I have known her since we [[were]] ^BE^ children." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the time word.",
    ids: ["as", "assoonas", "bythetime", "moment", "until", "since", "while", "whenever", "once", "justas"] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "Classic mistakes. Is each sentence right or wrong?",
    items: [
      { id: "nowill", t: "When I will grow up, I want to be a dentist.", ok: false, fix: "When I grow up, I want to be a dentist." },
      { id: "nowill", t: "He said he would call as soon as he would return.", ok: false, fix: "He said he would call as soon as he returned." },
      { id: "during", t: "I visited two museums during I was on holiday.", ok: false, fix: "I visited two museums while I was on holiday. / …during my holiday." },
      { id: "during", t: "I fell asleep during the film.", ok: true },
      { id: "until", t: "I'll wait until you're ready.", ok: true },
      { id: "since", t: "I haven't heard from her since she moved to Spain.", ok: true },
      { id: "bythetime", t: "By the time we got home, it was dark.", ok: true },
      { id: "nowill", t: "I'll tell you as soon as I will know.", ok: false, fix: "I'll tell you as soon as I know." },
      { id: "while", t: "While I was cooking, the phone rang.", ok: true },
      { id: "until", t: "Peter won't leave until he will finish his work.", ok: false, fix: "Peter won't leave until he has finished / finishes his work." },
      { id: "whenever", t: "Whenever it rains, the roof leaks.", ok: true },
      { id: "after", t: "After she had checked it, the officer returned my licence.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the time word and the right tense.",
    items: [
      { id: "assoonas", ru: "Позвони мне, как только приедешь.", en: "Call me as soon as you arrive.", key: "as soon as you (arrive|get)" , hint: "as soon as you arrive (no will)" },
      { id: "until", ru: "Подожди, пока я не вернусь.", en: "Wait until I come back.", key: "until i (come back|return|get back)", hint: "until I come back" },
      { id: "bythetime", ru: "К тому времени, как мы пришли, все ушли.", en: "By the time we arrived, everyone had left.", key: "by the time we (arrived|came|got)" },
      { id: "while", ru: "Пока я спала, пошёл снег.", en: "While I was sleeping, it started to snow.", key: "while i was sleeping" },
      { id: "during", ru: "Во время урока зазвонил телефон.", en: "During the lesson, the phone rang.", key: "during the lesson" },
      { id: "whenever", ru: "Всякий раз, когда я её вижу, она улыбается.", en: "Whenever I see her, she smiles.", key: "whenever i see her" },
      { id: "since", ru: "Я живу здесь с тех пор, как родилась.", en: "I have lived here since I was born.", key: "since i was born" },
      { id: "justas", ru: "Как раз когда я выходила, пошёл дождь.", en: "Just as I was leaving, it started to rain.", key: "just as i was (leaving|going out)" },
      { id: "nowill", ru: "Когда я вырасту, я буду пилотом.", en: "When I grow up, I will be a pilot.", key: "when i grow up" },
      { id: "moment", ru: "Как только он вошёл, все замолчали.", en: "The moment he came in, everyone went quiet.", key: "the moment (that )?he (came|walked) in|as soon as he (came|walked) in", hint: "the moment he came in" }
    ] }
];
