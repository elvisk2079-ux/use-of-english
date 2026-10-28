// TITLE: On Time or In Time?
// EYEBROW: Use of English B2 · Unit 3 · Collocations / Expressions B
// SUB: Ten everyday time expressions: the other day, call it a day, for the time being, ahead of its time… Five drills, with the pairs students mix up most.
const META = { ls: "uoe-b2-u3-timeexpr" };
const P = [
  { id: "otherday", phrase: "the other day", ru: "на днях, недавно", en: "a few days ago" },
  { id: "alldaylong", phrase: "all day long", ru: "весь день напролёт", en: "for the whole day" },
  { id: "callday", phrase: "call it a day", ru: "закончить (на сегодня)", en: "decide to stop working on something" },
  { id: "attimes", phrase: "at times", ru: "иногда, порой", en: "sometimes" },
  { id: "ontime", phrase: "on time", ru: "вовремя (по расписанию)", en: "at the planned time, not late" },
  { id: "intime", phrase: "in time", ru: "вовремя (заранее, успеть)", en: "early enough to do something" },
  { id: "passtime", phrase: "pass the time", ru: "скоротать время", en: "do something so that time seems to go faster" },
  { id: "ahead", phrase: "ahead of its time", ru: "опередивший своё время", en: "too modern for the time when it was made" },
  { id: "again", phrase: "time and time again", ru: "снова и снова", en: "many times, repeatedly" },
  { id: "being", phrase: "for the time being", ru: "пока что, на данный момент", en: "for now, until something changes" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the expression." },
  { type: "gaps", title: "Choose the expression", short: "Choose", instr: "Tap the expression that fits.",
    items: [
      { id: "ontime", t: "The concert started exactly {{*on time|in time}} – at eight o'clock." },
      { id: "intime", t: "We got to the station just {{*in time|on time}} to catch the last train." },
      { id: "ontime", t: "Our teacher hates it when we are not {{*on time|in time}} for lessons." },
      { id: "intime", t: "Will the cake be ready {{*in time|on time}} for the party?" },
      { id: "otherday", t: "I bumped into your cousin {{*the other day|all day long}} in town." },
      { id: "alldaylong", t: "It rained {{*all day long|the other day}}, so we stayed indoors." },
      { id: "callday", t: "We've been studying for six hours. Let's {{*call it a day|pass the time}}." },
      { id: "passtime", t: "On the long train journey, we played cards to {{*pass the time|call it a day}}." },
      { id: "attimes", t: "{{*At times|For the time being}} my little sister can be really annoying." },
      { id: "being", t: "We're living with my grandparents {{*for the time being|at times}}, until our flat is ready." },
      { id: "again", t: "I've told you {{*time and time again|the other day}} not to leave your bike outside!" },
      { id: "ahead", t: "When it first came out, the design was {{*ahead of its time|for the time being}}." },
      { id: "attimes", t: "The film was boring {{*at times|on time}}, but the ending was great." },
      { id: "being", t: "I can't afford a car, so {{*for the time being|time and time again}} I take the bus." }
    ],
    note: "on time = at the planned time (the train left on time). in time = early enough for something (we arrived in time for dinner)." },
  { type: "gaps", title: "Type the missing word", short: "Type it", instr: "Write the missing word in each expression.",
    items: [
      { id: "otherday", t: "I saw Sally the [[other]] day. Did you know she broke her leg?" },
      { id: "alldaylong", t: "I've been sleepy all day [[long]]." },
      { id: "callday", t: "It's late – let's call it a [[day]] and go home." },
      { id: "attimes", t: "I find it hard to agree with you [[at]] times." },
      { id: "ontime", t: "Despite the bad weather, the flight left [[on]] time." },
      { id: "intime", t: "Jack arrived just [[in]] time for the kick-off." },
      { id: "passtime", t: "I talked to the woman next to me to [[pass]] the time." },
      { id: "ahead", t: "Many engineers agreed that the design was [[ahead]] of its time." },
      { id: "again", t: "He keeps making the same mistake time and time [[again]]." },
      { id: "being", t: "We'll get a new printer next month. For the time [[being]], we'll use this one." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the expression correct?",
    items: [
      { id: "ontime", t: "The bus was in time – it left at 7:15 exactly.", ok: false, fix: "The bus was on time." },
      { id: "intime", t: "We got home just in time before the storm.", ok: true },
      { id: "otherday", t: "I met her the another day.", ok: false, fix: "I met her the other day." },
      { id: "callday", t: "Let's call it a day.", ok: true },
      { id: "again", t: "I've asked you time after time again!", ok: false, fix: "I've asked you time and time again!" },
      { id: "being", t: "For the time being, I'm happy with my old phone.", ok: true },
      { id: "passtime", t: "We read magazines to spend the time.", ok: false, fix: "We read magazines to pass the time." },
      { id: "alldaylong", t: "The baby cried all day long.", ok: true },
      { id: "ahead", t: "His ideas were ahead of their time.", ok: true },
      { id: "attimes", t: "In times I feel lonely.", ok: false, fix: "At times I feel lonely." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the expression.",
    items: [
      { id: "otherday", ru: "Я видела твою маму на днях.", en: "I saw your mum the other day.", key: "the other day" },
      { id: "alldaylong", ru: "Я работала весь день напролёт.", en: "I worked all day long.", key: "all day long" },
      { id: "callday", ru: "Всё, на сегодня хватит!", en: "Let's call it a day!", key: "call it a day" },
      { id: "attimes", ru: "Порой мне скучно.", en: "At times I feel bored.", key: "at times" },
      { id: "ontime", ru: "Поезд пришёл вовремя.", en: "The train arrived on time.", key: "on time" },
      { id: "intime", ru: "Мы успели как раз вовремя.", en: "We arrived just in time.", key: "in time" },
      { id: "passtime", ru: "Чтобы скоротать время, я читала.", en: "I read to pass the time.", key: "pass the time" },
      { id: "again", ru: "Я говорила тебе это снова и снова!", en: "I've told you this time and time again!", key: "time and time again" },
      { id: "being", ru: "Пока что я живу у друга.", en: "For the time being, I'm staying with a friend.", key: "for the time being" },
      { id: "ahead", ru: "Эта машина опередила своё время.", en: "This car was ahead of its time.", key: "ahead of its time" }
    ] }
];
