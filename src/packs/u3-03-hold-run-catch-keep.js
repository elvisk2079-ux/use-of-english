// TITLE: Hold, Run, Catch, Keep
// EYEBROW: Use of English B2 · Unit 3 · Collocations / Expressions C
// SUB: Fourteen collocations with hold, run, catch and keep: keep an eye on, run in the family, catch your breath… Learn each one as a whole chunk.
const META = { ls: "uoe-b2-u3-hrck" };
const P = [
  { id: "act", phrase: "catch sb in the act", ru: "поймать с поличным", en: "see someone while they are doing something wrong" },
  { id: "eye", phrase: "keep an eye on", ru: "присмотреть за", en: "watch someone or something to make sure they are safe" },
  { id: "attention", phrase: "catch sb's attention", ru: "привлечь внимание", en: "make someone notice you or something" },
  { id: "family", phrase: "run in the family", ru: "передаваться по наследству", en: "be common in a family" },
  { id: "company", phrase: "keep sb company", ru: "составить компанию", en: "stay with someone so they are not alone" },
  { id: "touch", phrase: "keep in touch with", ru: "поддерживать связь", en: "continue to write or talk to someone" },
  { id: "business", phrase: "run a business", ru: "вести бизнес", en: "manage a company" },
  { id: "promise", phrase: "keep a promise", ru: "сдержать обещание", en: "do what you said you would do" },
  { id: "catchbreath", phrase: "catch your breath", ru: "перевести дух", en: "breathe normally again after running" },
  { id: "mind", phrase: "keep in mind", ru: "иметь в виду, помнить", en: "remember something important" },
  { id: "holdbreath", phrase: "hold your breath", ru: "затаить дыхание", en: "stop breathing for a moment (from excitement or under water)" },
  { id: "bus", phrase: "catch the bus", ru: "успеть на автобус", en: "get on a bus before it leaves" },
  { id: "secret", phrase: "keep a secret", ru: "хранить секрет", en: "not tell anyone something" },
  { id: "hands", phrase: "hold hands", ru: "держаться за руки", en: "hold each other's hand" }
];
const DRILLS = [
  { type: "gaps", title: "Which verb?", short: "Which verb", shuffleOptions: false, instr: "Tap the verb that goes with each phrase.",
    items: P.map(p => {
      const v = p.phrase.split(" ")[0];
      const rest = p.phrase.slice(v.length + 1);
      return { id: p.id, t: "{{" + ["hold", "run", "catch", "keep"].map(x => (x === v ? "*" : "") + x).join("|") + "}} " + rest };
    }),
    note: "hold your breath = stop breathing for a moment; catch your breath = breathe normally again after running." },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the collocation." },
  { type: "gaps", title: "Type the verb", short: "Type the verb", instr: "Write hold, run, catch or keep in the correct form.",
    items: [
      { id: "act", t: "The boy was [[caught]] in the act of stealing sweets." },
      { id: "eye", t: "Could you [[keep]] an eye on the soup while I answer the phone?" },
      { id: "attention", t: "The bright poster [[caught]] my attention." },
      { id: "family", t: "Red hair [[runs]] in our family." },
      { id: "company", t: "I'll stay and [[keep]] you company until the doctor comes." },
      { id: "touch", t: "We promised to [[keep]] in touch after the summer camp." },
      { id: "business", t: "[[Running]] a business takes a lot of time and energy." },
      { id: "promise", t: "He never [[keeps]] his promises." },
      { id: "catchbreath", t: "After the race, she sat down to [[catch]] her breath." },
      { id: "mind", t: "[[Keep]] in mind that the shop closes early on Sundays." },
      { id: "holdbreath", t: "We all [[held]] our breath as the winner was announced." },
      { id: "bus", t: "I ran to [[catch]] the bus but it left without me." },
      { id: "secret", t: "Can you [[keep]] a secret?" },
      { id: "hands", t: "The children were [[holding]] hands as they crossed the road." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the verb correct?",
    items: [
      { id: "promise", t: "She always holds her promises.", ok: false, fix: "She always keeps her promises." },
      { id: "eye", t: "Keep an eye on your bag in the market.", ok: true },
      { id: "bus", t: "I need to keep the 8 o'clock bus.", ok: false, fix: "I need to catch the 8 o'clock bus." },
      { id: "family", t: "Musical talent runs in their family.", ok: true },
      { id: "secret", t: "Can you hold a secret?", ok: false, fix: "Can you keep a secret?" },
      { id: "holdbreath", t: "He held his breath and jumped into the water.", ok: true },
      { id: "touch", t: "Let's catch in touch!", ok: false, fix: "Let's keep in touch!" },
      { id: "attention", t: "The strange noise caught our attention.", ok: true },
      { id: "business", t: "My aunt keeps a business in the city centre.", ok: false, fix: "My aunt runs a business." },
      { id: "hands", t: "They walked along the beach holding hands.", ok: true },
      { id: "act", t: "The thief was held in the act.", ok: false, fix: "The thief was caught in the act." },
      { id: "company", t: "Will you keep me company?", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the collocation.",
    items: [
      { id: "eye", ru: "Присмотри за братом, пожалуйста.", en: "Please keep an eye on your brother.", key: "keep an eye on" },
      { id: "touch", ru: "Давай поддерживать связь!", en: "Let's keep in touch!", key: "keep in touch" },
      { id: "promise", ru: "Он всегда держит обещания.", en: "He always keeps his promises.", key: "keeps his promises?" },
      { id: "secret", ru: "Я умею хранить секреты.", en: "I can keep a secret.", key: "keep (a )?secrets?" },
      { id: "family", ru: "Талант к музыке у нас в семье.", en: "Musical talent runs in our family.", key: "runs in (our|the|my) family" },
      { id: "business", ru: "Мои родители ведут небольшой бизнес.", en: "My parents run a small business.", key: "run a (small )?business" },
      { id: "bus", ru: "Я не успела на автобус.", en: "I didn't catch the bus.", key: "catch the bus" },
      { id: "act", ru: "Его поймали с поличным.", en: "He was caught in the act.", key: "caught in the act" },
      { id: "holdbreath", ru: "Мы затаили дыхание.", en: "We held our breath.", key: "held our breath" },
      { id: "mind", ru: "Имей в виду, что завтра экзамен.", en: "Keep in mind that the exam is tomorrow.", key: "keep in mind" }
    ] }
];
