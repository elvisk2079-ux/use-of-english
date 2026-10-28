// TITLE: Skateboarding
// EYEBROW: Use of English B2 · Unit 5 · Consolidation I · Word formation
// SUB: Eleven word families from the word formation text about skateboarding: coastal, physically, energetic, originally, dramatic, skilful, sensible… Five drills, ending with a new exam-style text.
// BOARD: Your word families
const META = { ls: "uoe-b2-u5-wf" };
const P = [
  { id: "coast", phrase: "COAST → coastal", ru: "прибрежный (coastline – побережье)" },
  { id: "physics", phrase: "PHYSICS → physically", ru: "физически (physical, physicist – физик)" },
  { id: "energy", phrase: "ENERGY → energetic", ru: "энергичный (energetically)" },
  { id: "origin", phrase: "ORIGIN → originally", ru: "изначально (original – оригинальный)" },
  { id: "drama", phrase: "DRAMA → dramatic", ru: "резкий, драматичный (dramatically)" },
  { id: "profession", phrase: "PROFESSION → professional", ru: "профессиональный (professionally)" },
  { id: "end", phrase: "END → endless", ru: "бесконечный (ending – окончание)" },
  { id: "danger", phrase: "DANGER → dangerous", ru: "опасный (endanger – подвергать опасности)" },
  { id: "advice", phrase: "ADVICE → advise", ru: "советовать (advice – совет, сущ.)" },
  { id: "skill", phrase: "SKILL → skilful", ru: "умелый (skilled – квалифицированный)" },
  { id: "sense", phrase: "SENSE → sensible", ru: "разумный (sensitive – чувствительный)" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "coast", t: "We stayed in a small {{*coastal|coast|coasted}} town." },
      { id: "physics", t: "You need to be {{*physically|physical|physics}} fit to be a firefighter." },
      { id: "energy", t: "My grandmother is still very {{*energetic|energy|energetically}}." },
      { id: "origin", t: "The game was {{*originally|original|origin}} played in England." },
      { id: "drama", t: "There has been a {{*dramatic|drama|dramatically}} rise in prices." },
      { id: "profession", t: "She became a {{*professional|profession|professionally}} dancer at 18." },
      { id: "end", t: "We waited in an {{*endless|ending|endlessly}} queue." },
      { id: "danger", t: "Swimming here is {{*dangerous|danger|endanger}}." },
      { id: "advice", t: "I {{*advise|advice|advisable}} you to see a doctor." },
      { id: "skill", t: "He's a very {{*skilful|skill|skilfully}} driver." },
      { id: "sense", t: "It would be {{*sensible|sensitive|sense}} to take an umbrella." },
      { id: "sense", t: "She's very {{*sensitive|sensible|senseless}} – she cries at every film." }
    ],
    note: "sensible = разумный, sensitive = чувствительный. advice (noun) / advise (verb). skilful (British) = skillful (American)." },
  { type: "mcq", title: "Which part of speech?", short: "Part of speech", instr: "Tap the word that matches the description in capitals.",
    items: [
      { id: "coast", q: "Which word is an ADJECTIVE?", o: ["coastal", "coast", "coastline", "coastguard"] },
      { id: "physics", q: "Which word is an ADVERB?", o: ["physically", "physical", "physics", "physicist"] },
      { id: "energy", q: "Which word is an ADJECTIVE?", o: ["energetic", "energy", "energise", "energetically"] },
      { id: "origin", q: "Which word is an ADVERB?", o: ["originally", "original", "origin", "originate"] },
      { id: "drama", q: "Which word is an ADJECTIVE?", o: ["dramatic", "drama", "dramatically", "dramatist"] },
      { id: "end", q: "Which word means “never stopping”?", o: ["endless", "ending", "ended", "endings"] },
      { id: "danger", q: "Which word is an ADJECTIVE?", o: ["dangerous", "danger", "endanger", "dangerously"] },
      { id: "advice", q: "Which word is a VERB?", o: ["advise", "advice", "adviser", "advisable"] },
      { id: "skill", q: "Which word is an ADJECTIVE meaning “good at doing something”?", o: ["skilful", "skill", "skilfully", "skills"] },
      { id: "sense", q: "Which word means “practical and reasonable”?", o: ["sensible", "sensitive", "sensation", "senseless"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Each family appears twice.",
    items: [
      { id: "coast", t: "The [[coastal]] ^COAST^ road has beautiful views." },
      { id: "coast", t: "There are many small beaches along the [[coastline]] ^COAST^." },
      { id: "physics", t: "Running every day keeps me [[physically]] ^PHYSICS^ fit." },
      { id: "physics", t: "My uncle is a [[physicist]] ^PHYSICS^ at a research centre." },
      { id: "energy", t: "Children are usually very [[energetic]] ^ENERGY^." },
      { id: "energy", t: "She danced [[energetically]] ^ENERGY^ all night." },
      { id: "origin", t: "The building was [[originally]] ^ORIGIN^ a church." },
      { id: "origin", t: "That's a very [[original]] ^ORIGIN^ idea!" },
      { id: "drama", t: "There was a [[dramatic]] ^DRAMA^ change in the weather." },
      { id: "drama", t: "Prices have risen [[dramatically]] ^DRAMA^." },
      { id: "profession", t: "You should get [[professional]] ^PROFESSION^ advice." },
      { id: "profession", t: "She plays the violin [[professionally]] ^PROFESSION^." },
      { id: "end", t: "The meeting seemed [[endless]] ^END^." },
      { id: "end", t: "The film has a happy [[ending]] ^END^." },
      { id: "danger", t: "Smoking is [[dangerous]] ^DANGER^ to your health." },
      { id: "danger", t: "Pollution [[endangers]] ^DANGER^ many animals." },
      { id: "advice", t: "Doctors [[advise]] ^ADVICE^ people to drink more water." },
      { id: "advice", t: "Can you give me some [[advice]] ^ADVISE^?" },
      { id: "skill", t: "She is a [[skilful/skillful]] ^SKILL^ player." },
      { id: "skill", t: "The factory needs more [[skilled]] ^SKILL^ workers." },
      { id: "sense", t: "It was [[sensible]] ^SENSE^ of you to call me." },
      { id: "sense", t: "Be careful what you say – he is very [[sensitive]] ^SENSE^." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "physics", t: "He is physical fit.", ok: false, fix: "He is physically fit." },
      { id: "advice", t: "She gave me some good advise.", ok: false, fix: "She gave me some good advice." },
      { id: "coast", t: "The town has a lovely coastal path.", ok: true },
      { id: "drama", t: "It was a drama change.", ok: false, fix: "It was a dramatic change." },
      { id: "sense", t: "Wearing a helmet is sensible.", ok: true },
      { id: "skill", t: "He's a very skill player.", ok: false, fix: "He's a very skilful player." },
      { id: "danger", t: "Some tricks are very dangerous.", ok: true },
      { id: "origin", t: "Originally, the boards were made of wood.", ok: true },
      { id: "profession", t: "She is a profession singer.", ok: false, fix: "She is a professional singer." },
      { id: "end", t: "We had an endless discussion.", ok: true },
      { id: "energy", t: "He is an energy boy.", ok: false, fix: "He is an energetic boy." }
    ] },
  { type: "gaps", title: "Exam text: Snowboarding", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "Snowboarding was [[originally#origin]] ^ORIGIN^ invented in the USA in the 1960s. At first, it was popular with surfers from [[coastal#coast]] ^COAST^ areas who wanted to “surf” on snow in winter. It is a very [[energetic#energy]] ^ENERGY^ sport, and you need to be [[physically#physics]] ^PHYSICS^ strong. Since then, the sport has seen [[dramatic#drama]] ^DRAMA^ changes, and today [[professional#profession]] ^PROFESSION^ snowboarders compete at the Olympic Games. Beginners often spend [[endless#end]] ^END^ hours falling over in the snow. Some jumps are extremely [[dangerous#danger]] ^DANGER^, so instructors [[advise#advice]] ^ADVICE^ everyone to wear a helmet. Even [[skilful/skillful/skilled#skill]] ^SKILL^ riders can get hurt, so it is [[sensible#sense]] ^SENSE^ to stay on the marked slopes." }
    ] }
];
