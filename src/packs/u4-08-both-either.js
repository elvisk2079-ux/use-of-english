// TITLE: Both, Either, Neither
// EYEBROW: Use of English B2 · Unit 4 · Grammar Revision: Determiners and Pronouns B
// SUB: Both, either, neither, none, each, every, all and whole – plus both … and, either … or, neither … nor, so do I and neither do I. Five drills.
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u4-both" };
const P = [
  { id: "both", phrase: "both (of) + plural verb", ru: "оба: Both books are…" },
  { id: "either", phrase: "either (of) – one or the other", ru: "любой из двух" },
  { id: "neither", phrase: "neither (of) – not one and not the other", ru: "ни один из двух" },
  { id: "bothand", phrase: "both … and", ru: "и …, и …" },
  { id: "eitheror", phrase: "either … or", ru: "или …, или …" },
  { id: "neithernor", phrase: "neither … nor", ru: "ни …, ни …" },
  { id: "each", phrase: "each (one) – separately; each of the two", ru: "каждый (по отдельности)" },
  { id: "every", phrase: "every + singular noun", ru: "каждый, все (every book)" },
  { id: "whole", phrase: "the whole + noun", ru: "весь, целый (the whole day)" },
  { id: "all", phrase: "all (of) / all + plural", ru: "все, весь (all morning)" },
  { id: "sodo", phrase: "so do I / neither do I", ru: "я тоже / я тоже нет" },
  { id: "notnone", phrase: "none of + noun", ru: "ни один из (трёх и более)" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "both", t: "{{*Both|Either|Neither}} of these books are interesting – read them both!" },
      { id: "both", t: "Both of these books {{*are|is}} interesting." },
      { id: "either", t: "{{*Either|Both|Neither}} book is fine – choose one." },
      { id: "either", t: "There are two cafés near here. It doesn't matter which – meet me in {{*either|both|neither}} of them." },
      { id: "neither", t: "{{*Neither|Either|Both}} book is interesting – they're both boring." },
      { id: "neither", t: "{{*Neither|None|Either}} of the two girls knew the answer." },
      { id: "bothand", t: "You can go to the beach {{*both|either|neither}} by bus and by train." },
      { id: "eitheror", t: "You can go {{*either|both|neither}} by bus or by train." },
      { id: "neithernor", t: "{{*Neither|Either|Both}} the students nor the teachers were happy." },
      { id: "neithernor", t: "He can neither sing {{*nor|or|and}} dance." },
      { id: "each", t: "{{*Each|Every|Everyone}} of the members came up with a different idea." },
      { id: "each", t: "{{*Each one|Every one|Both}} of the two girls was given a bicycle for Christmas." },
      { id: "every", t: "We go swimming {{*every|each of|all}} day." },
      { id: "every", t: "{{*Every|All|Each of}} book in the library has a number." },
      { id: "whole", t: "It took Henry the {{*whole|all|complete}} day to clear out the attic." },
      { id: "whole", t: "We spent the {{*whole|all|every}} morning studying." },
      { id: "all", t: "We were studying {{*all|whole|every}} morning." },
      { id: "all", t: "{{*All|Every|Each}} the students passed the test." },
      { id: "sodo", t: "Jim likes tennis and {{*so|neither|either}} does Jack." },
      { id: "sodo", t: "Jim doesn't like football and {{*neither|so|either}} does Jack." },
      { id: "sodo", t: "Jim doesn't like football and Jack doesn't like it {{*either|neither|too}}." },
      { id: "notnone", t: "{{*None|Neither|No}} of my five friends could come." },
      { id: "notnone", t: "Fortunately, {{*none of|no|neither}} the guests were hurt in the fire." }
    ],
    note: "both … and = the one and the other. either … or = the one or the other. neither … nor = not the one and not the other. For two things use neither; for three or more use none." },
  { type: "mcq", title: "Which sentence is correct?", short: "Correct one", instr: "Tap the only correct sentence.",
    items: [
      { id: "both", q: "Both books…", o: ["Both of these books are interesting.", "Both of these books is interesting.", "Both of this books are interesting.", "The both books are interesting."] },
      { id: "bothand", q: "Bus and train", o: ["You can go both by bus and by train.", "You can go and by bus and by train.", "You can go both by bus or by train.", "You can go both by bus nor by train."] },
      { id: "neithernor", q: "Singing and dancing", o: ["He can neither sing nor dance.", "He can't neither sing nor dance.", "He can neither sing or dance.", "He can neither sing and dance."] },
      { id: "neithernor", q: "Singing and dancing (2)", o: ["He can't sing or dance.", "He can't sing nor dance.", "He can sing neither or dance.", "He can't neither sing or dance."] },
      { id: "whole", q: "The morning", o: ["We spent the whole morning studying.", "We spent the all morning studying.", "We spent whole morning studying.", "We spent the every morning studying."] },
      { id: "sodo", q: "Jim and Jack like tennis.", o: ["Jim likes tennis and so does Jack.", "Jim likes tennis and so Jack does.", "Jim likes tennis and neither does Jack.", "Jim likes tennis and so is Jack."] },
      { id: "sodo", q: "Jim and Jack dislike football.", o: ["Jim doesn't like football and neither does Jack.", "Jim doesn't like football and neither doesn't Jack.", "Jim doesn't like football and so does Jack.", "Jim doesn't like football and Jack doesn't like it too."] },
      { id: "either", q: "One of two books", o: ["Either book is interesting.", "Either book are interesting.", "Either books is interesting.", "Either of book is interesting."] },
      { id: "every", q: "Every day", o: ["Every student has a locker.", "Every students have a locker.", "Every of the students has a locker.", "Every the student has a locker."] }
    ] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "Is each sentence right or wrong?",
    items: [
      { id: "both", t: "Both of these books is interesting.", ok: false, fix: "Both of these books are interesting." },
      { id: "bothand", t: "You can go to the beach and by bus and by train.", ok: false, fix: "You can go to the beach both by bus and by train." },
      { id: "neithernor", t: "He can't neither sing nor dance.", ok: false, fix: "He can neither sing nor dance." },
      { id: "neithernor", t: "He can neither sing or dance.", ok: false, fix: "He can neither sing nor dance." },
      { id: "whole", t: "We spent the all morning studying.", ok: false, fix: "We spent the whole morning studying." },
      { id: "either", t: "Either of these books is interesting.", ok: true },
      { id: "neither", t: "Neither of these books is interesting.", ok: true },
      { id: "notnone", t: "None of these books are interesting.", ok: true },
      { id: "sodo", t: "I'm tired. – So am I.", ok: true },
      { id: "sodo", t: "I don't eat meat. – So do I.", ok: false, fix: "I don't eat meat. – Neither do I." },
      { id: "each", t: "Each of the girls was given a present.", ok: true },
      { id: "every", t: "Every of the students passed.", ok: false, fix: "Every student passed. / Each of the students passed." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "Write ONE word in each gap.",
    items: [
      { id: "both", t: "[[Both]] my parents are teachers." },
      { id: "either", t: "You can have [[either]] tea or coffee – which one?" },
      { id: "neither", t: "[[Neither]] of my two brothers likes football." },
      { id: "bothand", t: "She speaks both French [[and]] Spanish." },
      { id: "eitheror", t: "We can go either today [[or]] tomorrow." },
      { id: "neithernor", t: "I have neither time [[nor]] money for a holiday." },
      { id: "each", t: "The teacher gave [[each]] student a different task." },
      { id: "every", t: "I check my email [[every]] morning." },
      { id: "whole", t: "They spent the [[whole]] week looking for their lost dog." },
      { id: "all", t: "I've been waiting [[all]] day!" },
      { id: "sodo", t: "I love pizza. – [[So]] do I!" },
      { id: "sodo", t: "I can't swim. – [[Neither/Nor]] can I." },
      { id: "notnone", t: "I asked ten people, but [[none]] of them knew the way." },
      { id: "neither", t: "We realised that both cars were expensive – [[neither]] car was cheap." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key word.",
    items: [
      { id: "both", ru: "Оба моих брата живут в Москве.", en: "Both my brothers live in Moscow.", key: "both (of )?my brothers" },
      { id: "neither", ru: "Ни один из двух вариантов мне не нравится.", en: "I like neither of the two options.", key: "neither (of )?(the two )?options|don't like either" },
      { id: "eitheror", ru: "Ты можешь взять или чай, или кофе.", en: "You can have either tea or coffee.", key: "either tea or coffee" },
      { id: "neithernor", ru: "У меня нет ни времени, ни денег.", en: "I have neither time nor money.", key: "neither time nor money" },
      { id: "bothand", ru: "Она говорит и по-французски, и по-испански.", en: "She speaks both French and Spanish.", key: "both french and spanish" },
      { id: "whole", ru: "Я спала весь день.", en: "I slept the whole day.", key: "the whole day|all day" },
      { id: "sodo", ru: "– Я люблю кошек. – Я тоже.", en: "I love cats. – So do I.", key: "so do i" },
      { id: "sodo", ru: "– Я не умею плавать. – Я тоже.", en: "I can't swim. – Neither can I.", key: "(neither|nor) can i" },
      { id: "notnone", ru: "Никто из учеников не опоздал.", en: "None of the students was late.", key: "none of the students" },
      { id: "every", ru: "Я хожу в спортзал каждый день.", en: "I go to the gym every day.", key: "every day" }
    ] }
];
