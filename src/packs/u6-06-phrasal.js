// TITLE: Make Up, Pass Out, Fill In
// EYEBROW: Use of English B2 · Unit 6 · Phrasal Verbs (make, do, grow, pass, fill, leave)
// SUB: Seventeen phrasal verbs: make off with, make out, make up, do without, do away with, grow out of, pass away, pass out, fill in, leave out… Five drills.
// BOARD: Your phrasal verbs
const META = { ls: "uoe-b2-u6-phrasal" };
const P = [
  { id: "makeoff", phrase: "make off with", ru: "украсть и скрыться", en: "steal something and run away" },
  { id: "makeup", phrase: "make up (a story)", ru: "выдумать", en: "invent a story or an excuse" },
  { id: "makefor", phrase: "make for", ru: "направиться к", en: "go towards a place" },
  { id: "makeinto", phrase: "make sth into", ru: "превратить в", en: "change something into something else" },
  { id: "makeout", phrase: "make out", ru: "разобрать, понять", en: "manage to see, hear or understand" },
  { id: "makeupwith", phrase: "make up (with sb)", ru: "помириться", en: "become friends again after an argument" },
  { id: "makeupform", phrase: "make up (= form)", ru: "составлять", en: "form or be part of a whole" },
  { id: "dowithout", phrase: "do without", ru: "обходиться без", en: "manage without something" },
  { id: "doaway", phrase: "do away with", ru: "избавиться от, отменить", en: "get rid of; stop using" },
  { id: "growup", phrase: "grow up", ru: "вырасти, повзрослеть", en: "become an adult" },
  { id: "growoutof", phrase: "grow out of", ru: "перерасти (привычку, одежду)", en: "become too old for a habit or clothes" },
  { id: "passaway", phrase: "pass away", ru: "скончаться", en: "die" },
  { id: "passdown", phrase: "pass down", ru: "передавать (из поколения в поколение)", en: "give to the next generation" },
  { id: "passout", phrase: "pass out", ru: "потерять сознание", en: "faint; lose consciousness" },
  { id: "fillin", phrase: "fill in", ru: "заполнить (анкету)", en: "complete a form" },
  { id: "fillup", phrase: "fill up", ru: "наполнить до краёв, заправить", en: "make completely full" },
  { id: "leaveout", phrase: "leave out (of)", ru: "не включить, исключить", en: "not include" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the particle", short: "Particle", instr: "Tap the word that completes the phrasal verb.",
    items: [
      { id: "makeoff", t: "The thieves made {{*off|out|up}} with the jewels." },
      { id: "makeup", t: "He made {{*up|out|off}} a story about losing his homework." },
      { id: "makefor", t: "When it started to rain, we made {{*for|off|up}} the nearest café." },
      { id: "makeinto", t: "They made the old garage {{*into|for|out}} a bedroom." },
      { id: "makeout", t: "I couldn't make {{*out|up|for}} what he was saying." },
      { id: "makeupwith", t: "They had a fight, but they made {{*up|out|off}} the next day." },
      { id: "makeupform", t: "Girls make {{*up|out|for}} 60% of the students in our school." },
      { id: "dowithout", t: "I can't do {{*without|away|up}} my morning coffee." },
      { id: "doaway", t: "The school did {{*away|without|out}} with uniforms last year." },
      { id: "growup", t: "I grew {{*up|out|into}} in a small town." },
      { id: "growoutof", t: "He's grown {{*out of|up|off}} his old jeans." },
      { id: "passaway", t: "Her grandfather passed {{*away|out|down}} last year at the age of 90." },
      { id: "passdown", t: "These stories were passed {{*down|away|out}} from parents to children." },
      { id: "passout", t: "It was so hot that a woman passed {{*out|away|down}}, but she felt better after a glass of water." },
      { id: "fillin", t: "Please fill {{*in|up|down}} this form." },
      { id: "fillup", t: "Can you fill {{*up|in|down}} the tank, please?" },
      { id: "leaveout", t: "He was left {{*out of|away from|down}} the team because of an injury." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the definition and tap the phrasal verb." },
  { type: "gaps", title: "Write the particle", short: "Write it", instr: "Write ONE word in each gap.",
    items: [
      { id: "makeoff", t: "Someone made [[off]] with my bike!" },
      { id: "makeup", t: "Did you make [[up]] that excuse?" },
      { id: "makefor", t: "The ship made [[for]] the harbour." },
      { id: "makeinto", t: "The book was made [[into]] a film." },
      { id: "makeout", t: "Can you make [[out]] the words on that sign?" },
      { id: "makeupwith", t: "Have you made [[up]] with your sister yet?" },
      { id: "makeupform", t: "Women make [[up]] half of the population." },
      { id: "dowithout", t: "We'll have to do [[without]] a car for a week." },
      { id: "doaway", t: "Many shops have done [[away]] with plastic bags." },
      { id: "growup", t: "What do you want to be when you grow [[up]]?" },
      { id: "growoutof", t: "She has grown [[out]] of playing with dolls." },
      { id: "passaway", t: "Our old cat passed [[away]] last week." },
      { id: "passdown", t: "The ring was passed [[down]] from my great-grandmother." },
      { id: "passout", t: "He passed [[out]] when he saw the blood." },
      { id: "fillin", t: "Fill [[in]] your name and address." },
      { id: "fillup", t: "Fill [[up]] the glass, please." },
      { id: "leaveout", t: "Don't leave anyone [[out]] – invite the whole class." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the phrasal verb correct?",
    items: [
      { id: "makeoff", t: "The thief made out with my wallet.", ok: false, fix: "The thief made off with my wallet." },
      { id: "makeout", t: "I can't make out your handwriting.", ok: true },
      { id: "makeupwith", t: "They made up after the argument.", ok: true },
      { id: "dowithout", t: "I can't do without my phone.", ok: true },
      { id: "growup", t: "I grew up in Kazan.", ok: true },
      { id: "passout", t: "It was so hot that he passed away, but he felt fine after a drink of water.", ok: false, fix: "…he passed out, but he felt fine…" },
      { id: "fillin", t: "Please fill up this form.", ok: false, fix: "Please fill in this form." },
      { id: "passdown", t: "Our traditions are passed down from generation to generation.", ok: true },
      { id: "makeinto", t: "They made the barn into a house.", ok: true },
      { id: "leaveout", t: "I was left out of the team.", ok: true },
      { id: "makeup", t: "He made off a funny story.", ok: false, fix: "He made up a funny story." },
      { id: "doaway", t: "We should do without with plastic bags.", ok: false, fix: "We should do away with plastic bags." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "makeoff", ru: "Воры скрылись с деньгами.", en: "The thieves made off with the money.", key: "made off with" },
      { id: "makeup", ru: "Он всё это выдумал.", en: "He made it all up.", key: "made (it|this|that|everything)( all)? up|made up" },
      { id: "makeout", ru: "Я не могу разобрать, что тут написано.", en: "I can't make out what it says.", key: "make out" },
      { id: "makeupwith", ru: "Мы помирились.", en: "We made up.", key: "made up" },
      { id: "dowithout", ru: "Я не могу обойтись без кофе.", en: "I can't do without coffee.", key: "do without" },
      { id: "growup", ru: "Где ты вырос?", en: "Where did you grow up?", key: "grow up" },
      { id: "passout", ru: "Она потеряла сознание.", en: "She passed out.", key: "passed out|fainted" },
      { id: "fillin", ru: "Заполните анкету.", en: "Fill in the form.", key: "fill in|fill out" },
      { id: "leaveout", ru: "Меня не включили в команду.", en: "I was left out of the team.", key: "left out" },
      { id: "passaway", ru: "Его бабушка умерла в прошлом году.", en: "His grandmother passed away last year.", key: "passed away|died" },
      { id: "makefor", ru: "Давай направимся к реке.", en: "Let's make for the river.", key: "make for" },
      { id: "doaway", ru: "Пора отменить это правило.", en: "It's time to do away with this rule.", key: "do away with" }
    ] }
];
