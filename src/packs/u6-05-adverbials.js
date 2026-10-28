// TITLE: By and Large
// EYEBROW: Use of English B2 · Unit 6 · Adverbial Expressions
// SUB: Six adverbial expressions: by and large, last but not least, every now and then, one by one, on my own, as a matter of fact. Five drills, three or more tasks for each expression.
// BOARD: Your expressions
const META = { ls: "uoe-b2-u6-adverb" };
const P = [
  { id: "byandlarge", phrase: "by and large", ru: "в целом, в основном", en: "generally; in most cases" },
  { id: "lastbut", phrase: "last but not least", ru: "последнее, но не менее важное", en: "finally, and also importantly" },
  { id: "everynow", phrase: "every now and then", ru: "время от времени", en: "sometimes, but not often" },
  { id: "onebyone", phrase: "one by one", ru: "один за другим, по одному", en: "first one, then the next, separately" },
  { id: "onmyown", phrase: "on my / your / her own", ru: "сам(а), в одиночку", en: "alone; without help" },
  { id: "matteroffact", phrase: "as a matter of fact", ru: "на самом деле, вообще-то", en: "used to add something true or surprising" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the expression", short: "Choose", instr: "Tap the expression that fits.",
    items: [
      { id: "byandlarge", t: "{{*By and large|One by one|On my own}}, the trip was a success." },
      { id: "byandlarge", t: "The weather here is, {{*by and large|one by one|on my own}}, quite mild." },
      { id: "byandlarge", t: "British people, {{*by and large|every now and then|one by one}}, love talking about the weather." },
      { id: "lastbut", t: "And {{*last but not least|one by one|by and large}}, I want to thank my parents." },
      { id: "lastbut", t: "{{*Last but not least|Every now and then|On my own}}, don't forget your passport!" },
      { id: "lastbut", t: "We visited Paris, Rome and, {{*last but not least|one by one|by and large}}, Barcelona." },
      { id: "everynow", t: "I go to the theatre {{*every now and then|one by one|last but not least}}." },
      { id: "everynow", t: "{{*Every now and then|One by one|Last but not least}} he looks at his phone." },
      { id: "everynow", t: "We meet for coffee {{*every now and then|on my own|by and large}}." },
      { id: "onebyone", t: "The students went into the exam room {{*one by one|on my own|every now and then}}." },
      { id: "onebyone", t: "She picked up the apples {{*one by one|by and large|as a matter of fact}}." },
      { id: "onebyone", t: "{{*One by one|By and large|As a matter of fact}}, the lights went out." },
      { id: "onmyown", t: "I painted the room {{*on my own|one by one|by and large}}." },
      { id: "onmyown", t: "Do you live {{*on your own|one by one|every now and then}}?" },
      { id: "onmyown", t: "She travelled around Asia {{*on her own|one by one|last but not least}}." },
      { id: "matteroffact", t: "I don't mind. {{*As a matter of fact|One by one|Every now and then}}, I'm glad you asked." },
      { id: "matteroffact", t: "“Do you know Anna?” “{{*As a matter of fact|Last but not least|One by one}}, she's my cousin!”" },
      { id: "matteroffact", t: "I'm not tired. {{*As a matter of fact|One by one|On my own}}, I feel great." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the expression." },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "Write ONE word to complete the expression.",
    items: [
      { id: "byandlarge", t: "By and [[large]], people here are friendly." },
      { id: "byandlarge", t: "[[By]] and large, I agree with you." },
      { id: "lastbut", t: "Last but not [[least]], thank you all for coming." },
      { id: "lastbut", t: "[[Last]] but not least, let's talk about money." },
      { id: "everynow", t: "I see her every now and [[then]]." },
      { id: "everynow", t: "Every [[now]] and then we go fishing." },
      { id: "onebyone", t: "The children came in one [[by]] one." },
      { id: "onebyone", t: "Read the questions one by [[one]]." },
      { id: "onmyown", t: "I built this website on my [[own]]." },
      { id: "onmyown", t: "She doesn't like being on her [[own]] at night." },
      { id: "matteroffact", t: "As a [[matter]] of fact, I've never been to London." },
      { id: "matteroffact", t: "As a matter of [[fact]], he is right." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the expression correct?",
    items: [
      { id: "onmyown", t: "I live on my own.", ok: true },
      { id: "onmyown", t: "I did it by my own.", ok: false, fix: "I did it on my own. / I did it by myself." },
      { id: "onebyone", t: "One for one, the guests left.", ok: false, fix: "One by one, the guests left." },
      { id: "everynow", t: "Every now and when I eat fast food.", ok: false, fix: "Every now and then I eat fast food." },
      { id: "matteroffact", t: "As a matter of fact, I agree.", ok: true },
      { id: "lastbut", t: "Last but no least, sleep well.", ok: false, fix: "Last but not least, sleep well." },
      { id: "byandlarge", t: "By and large, the film was good.", ok: true },
      { id: "byandlarge", t: "By and big, the film was good.", ok: false, fix: "By and large, the film was good." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the expression.",
    items: [
      { id: "byandlarge", ru: "В целом, я согласна.", en: "By and large, I agree.", key: "by and large" },
      { id: "everynow", ru: "Время от времени я хожу в спортзал.", en: "I go to the gym every now and then.", key: "every now and then|now and then" },
      { id: "onmyown", ru: "Я живу одна.", en: "I live on my own.", key: "on my own|by myself" },
      { id: "onebyone", ru: "Они входили по одному.", en: "They came in one by one.", key: "one by one" },
      { id: "matteroffact", ru: "Вообще-то, я его знаю.", en: "As a matter of fact, I know him.", key: "as a matter of fact" },
      { id: "lastbut", ru: "И последнее, но не менее важное: спасибо!", en: "Last but not least, thank you!", key: "last but not least" },
      { id: "onmyown", ru: "Я сделала это сама.", en: "I did it on my own.", key: "on my own|by myself" },
      { id: "byandlarge", ru: "В целом, поездка была удачной.", en: "By and large, the trip was a success.", key: "by and large" }
    ] }
];
