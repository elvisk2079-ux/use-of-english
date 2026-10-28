// TITLE: Worn Out
// EYEBROW: Use of English B2 · Unit 4 · Phrasal Verbs B (carry, wear, work, move)
// SUB: Nine phrasal verbs with carry, wear, work and move. Two pairs have two meanings: wear out and work out.
const META = { ls: "uoe-b2-u4-pvcarry" };
const P = [
  { id: "carryon", phrase: "carry on", ru: "продолжать", en: "continue" },
  { id: "carryout", phrase: "carry out", ru: "проводить, выполнять", en: "perform or conduct (a study, an experiment, an order)" },
  { id: "carriedaway", phrase: "get carried away", ru: "увлечься, потерять голову", en: "become over-excited" },
  { id: "wearthin", phrase: "wear out (= become thin)", opt: "wear out", ru: "изнашиваться", en: "become thin, weak or unsuitable for use" },
  { id: "wornout", phrase: "worn out (= tired)", opt: "worn out", ru: "измотанный", en: "very tired" },
  { id: "worksolve", phrase: "work out (= solve)", opt: "work out", ru: "выяснить, решить", en: "find a solution; discover" },
  { id: "workexercise", phrase: "work out (= exercise)", opt: "work out", ru: "тренироваться", en: "take part in physical exercise" },
  { id: "moveinto", phrase: "move into", ru: "въехать (в новый дом)", en: "start living in a place" },
  { id: "moveout", phrase: "move out", ru: "съехать", en: "stop living in a place" }
];
const DRILLS = [
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "carryon", t: "It was impossible for Alison to carry {{*on|out|away}} working after the bad news." },
      { id: "carryon", t: "Carry {{*on|out|off}} – I'm listening." },
      { id: "carryout", t: "Recent studies carried {{*out|on|away}} by the government show worrying results." },
      { id: "carryout", t: "The soldiers carried {{*out|on|into}} their orders." },
      { id: "carriedaway", t: "The fans got carried {{*away|out|on}} and climbed onto the stage." },
      { id: "carriedaway", t: "Don't get carried {{*away|on|out}} – we only need a few balloons!" },
      { id: "wearthin", t: "The tyres on my car have worn {{*out|away|off}}. I need new ones." },
      { id: "wornout", t: "I'm too worn {{*out|away|on}} to go anywhere tonight." },
      { id: "worksolve", t: "Scientists still haven't worked {{*out|on|into}} what caused the problem." },
      { id: "worksolve", t: "Can you work {{*out|away|over}} the answer to this puzzle?" },
      { id: "workexercise", t: "Working {{*out|on|off}} regularly reduces the risk of heart disease." },
      { id: "moveinto", t: "We moved {{*into|out|on}} our new flat last week." },
      { id: "moveout", t: "My landlord wants me to move {{*out|into|away}} by the end of the month." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb in the correct form.",
    items: [
      { id: "carryon", t: "Don't stop! [[Carry on]] working." },
      { id: "carryout", t: "The police [[carried out]] a search of the building." },
      { id: "carriedaway", t: "I got [[carried away]] in the shop and spent all my money." },
      { id: "wearthin", t: "My favourite jeans have [[worn out]]." },
      { id: "wornout", t: "After the marathon, I was completely [[worn out]]." },
      { id: "worksolve", t: "I can't [[work out]] how to use this app." },
      { id: "workexercise", t: "She [[works out]] at the gym three times a week." },
      { id: "moveinto", t: "When are you [[moving into]] your new house?" },
      { id: "moveout", t: "My brother [[moved out]] when he was twenty." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the phrasal verb correct?",
    items: [
      { id: "carryout", t: "The scientists carried on an experiment.", ok: false, fix: "The scientists carried out an experiment." },
      { id: "carryon", t: "Please carry on with your work.", ok: true },
      { id: "wornout", t: "I'm so worn away after the trip.", ok: false, fix: "I'm so worn out after the trip." },
      { id: "worksolve", t: "We finally worked out the problem.", ok: true },
      { id: "workexercise", t: "I work out at the gym every morning.", ok: true },
      { id: "moveinto", t: "They moved in a new flat.", ok: false, fix: "They moved into a new flat." },
      { id: "moveout", t: "I'm moving out next month.", ok: true },
      { id: "carriedaway", t: "The crowd got carried out and started dancing.", ok: false, fix: "The crowd got carried away." },
      { id: "wearthin", t: "These shoes have worn out.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "carryon", ru: "Продолжай!", en: "Carry on!", key: "carry on" },
      { id: "carryout", ru: "Они провели исследование.", en: "They carried out a study.", key: "carried out" },
      { id: "carriedaway", ru: "Я немного увлеклась.", en: "I got a bit carried away.", key: "carried away" },
      { id: "wornout", ru: "Я очень устала.", en: "I'm worn out.", key: "worn out" },
      { id: "wearthin", ru: "Мои кроссовки износились.", en: "My trainers have worn out.", key: "worn out" },
      { id: "worksolve", ru: "Я не могу понять, как это работает.", en: "I can't work out how it works.", key: "work out" },
      { id: "workexercise", ru: "Он тренируется каждый день.", en: "He works out every day.", key: "works out" },
      { id: "moveinto", ru: "Мы въехали в новую квартиру.", en: "We moved into a new flat.", key: "moved into" },
      { id: "moveout", ru: "Соседи съехали.", en: "The neighbours moved out.", key: "moved out" }
    ] }
];
