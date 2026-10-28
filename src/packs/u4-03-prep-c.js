// TITLE: At Heart, In Common
// EYEBROW: Use of English B2 · Unit 4 · Prepositional Phrases C
// SUB: Eight phrases: at a glance, on the road, in order, for granted, in common, on arrival, at heart, in some respects. Five drills.
const META = { ls: "uoe-b2-u4-prepC" };
const P = [
  { id: "glance", phrase: "at a glance", ru: "с первого взгляда", en: "after looking quickly" },
  { id: "road", phrase: "on the road", ru: "в дороге", en: "travelling, usually by car" },
  { id: "order", phrase: "in order", ru: "в порядке", en: "arranged correctly; ready" },
  { id: "granted", phrase: "take sth for granted", ru: "принимать как должное", en: "expect something will always be there and not value it" },
  { id: "common", phrase: "in common", ru: "общее", en: "shared by two or more people" },
  { id: "arrival", phrase: "on arrival", ru: "по прибытии", en: "when you arrive" },
  { id: "heart", phrase: "at heart", ru: "в душе, по сути", en: "really, in your true character" },
  { id: "respects", phrase: "in some respects", ru: "в некоторых отношениях", en: "in some ways" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrase." },
  { type: "gaps", title: "Choose the phrase", short: "Choose", instr: "Tap the phrase that fits.",
    items: [
      { id: "heart", t: "He seems strict, but he's very kind {{*at heart|in common|on arrival}}." },
      { id: "heart", t: "My grandad is still a child {{*at heart|at a glance|in order}}." },
      { id: "granted", t: "Don't take it {{*for granted|in order|at heart}} that your parents will always pay." },
      { id: "granted", t: "We take clean water {{*for granted|in common|on the road}}." },
      { id: "order", t: "Everything was {{*in order|in common|at heart}} and ready for the inspection." },
      { id: "order", t: "Is your passport {{*in order|on arrival|at a glance}}?" },
      { id: "glance", t: "{{*At a glance|On arrival|In order}}, the house looked perfect, but then we saw the cracks." },
      { id: "glance", t: "I could see {{*at a glance|in common|for granted}} that something was wrong." },
      { id: "road", t: "We were {{*on the road|in order|at heart}} for two days before we got there." },
      { id: "road", t: "Musicians spend months {{*on the road|in common|at a glance}} during a tour." },
      { id: "arrival", t: "{{*On arrival|At heart|In order}} at the station, they went straight to the platform." },
      { id: "arrival", t: "Please show your ticket {{*on arrival|at heart|in common}}." },
      { id: "respects", t: "I don't agree with everything, but {{*in some respects|on arrival|at a glance}} you are right." },
      { id: "common", t: "My brother and I don't have anything {{*in common|in order|at heart}}." },
      { id: "common", t: "The two cities have a lot {{*in common|for granted|on the road}}." }
    ] },
  { type: "gaps", title: "Type the missing word", short: "Type it", instr: "Write the missing word – a preposition or part of the phrase.",
    items: [
      { id: "glance", t: "[[At]] a glance, the test looks easy." },
      { id: "road", t: "After ten hours [[on]] the road, we were exhausted." },
      { id: "order", t: "Check that all your documents are [[in]] order." },
      { id: "granted", t: "Don't take your friends for [[granted]]." },
      { id: "common", t: "What do you and your sister have in [[common]]?" },
      { id: "arrival", t: "[[On]] arrival, you will be given a map of the hotel." },
      { id: "heart", t: "He's a romantic [[at]] heart." },
      { id: "respects", t: "In some [[respects]], the film is better than the book." }
    ] },
  { type: "order", title: "Word order", short: "Word order", instr: "Tap the words in the right order. Tap a word in your answer to send it back.",
    items: [
      { id: "heart", s: "He is very kind at heart." },
      { id: "granted", s: "Don't take your health for granted." },
      { id: "common", s: "We have a lot in common." },
      { id: "arrival", s: "On arrival, we went to our room." },
      { id: "glance", s: "At a glance, everything looked fine." },
      { id: "road", s: "We were on the road all day." },
      { id: "order", s: "Everything is in order." },
      { id: "respects", s: "In some respects, you are right." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrase.",
    items: [
      { id: "glance", ru: "С первого взгляда всё было в порядке.", en: "At a glance, everything was fine.", key: "at a glance" },
      { id: "road", ru: "Мы были в дороге три дня.", en: "We were on the road for three days.", key: "on the road" },
      { id: "order", ru: "Все документы в порядке.", en: "All the documents are in order.", key: "in order" },
      { id: "granted", ru: "Мы принимаем это как должное.", en: "We take it for granted.", key: "for granted" },
      { id: "common", ru: "У нас много общего.", en: "We have a lot in common.", key: "in common" },
      { id: "arrival", ru: "По прибытии позвони мне.", en: "Call me on arrival.", key: "on arrival" },
      { id: "heart", ru: "В душе он очень добрый.", en: "At heart he is very kind.", key: "at heart" },
      { id: "respects", ru: "В некоторых отношениях ты прав.", en: "In some respects, you're right.", key: "in some respects" }
    ] }
];
