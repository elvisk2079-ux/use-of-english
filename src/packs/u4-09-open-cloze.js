// TITLE: Allergy Alert
// EYEBROW: Use of English B2 · Unit 4 · Examination Practice A (Section 1)
// SUB: The small words tested in the open cloze “Allergy Alert”: either … or, on the other hand, the chances of, run in the family, terrified of… Five drills, ending with a new open cloze text.
// BOARD: Your key phrases
const META = { ls: "uoe-b2-u4-opencloze" };
const P = [
  { id: "eitheror", phrase: "either … or …", ru: "или …, или …" },
  { id: "thesedays", phrase: "these days", ru: "в наши дни" },
  { id: "thing", phrase: "the simplest thing to do", ru: "самое простое, что можно сделать" },
  { id: "otherhand", phrase: "on the other hand", ru: "с другой стороны" },
  { id: "something", phrase: "something unknown", ru: "что-то неизвестное" },
  { id: "chances", phrase: "the chances of someone having …", ru: "шансы того, что у кого-то…" },
  { id: "family", phrase: "run in the family", ru: "передаваться по наследству" },
  { id: "both", phrase: "both parents", ru: "оба родителя" },
  { id: "noreason", phrase: "absolutely no reason", ru: "абсолютно никакой причины" },
  { id: "terrified", phrase: "terrified of", ru: "в ужасе от" },
  { id: "carryon", phrase: "carry on with", ru: "продолжать (что-то)" },
  { id: "different", phrase: "different from", ru: "отличный от" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the ONE word that fits the gap.",
    items: [
      { id: "eitheror", t: "You can pay either by card {{*or|nor|and}} in cash." },
      { id: "eitheror", t: "We'll go {{*either|neither|both}} to the cinema or to the theatre." },
      { id: "thesedays", t: "{{*These|This|Those}} days, everyone has a smartphone." },
      { id: "thing", t: "The best {{*thing|something|anything}} to do is to stay calm." },
      { id: "otherhand", t: "Living in the city is exciting. On the {{*other|another|second}} hand, it's noisy." },
      { id: "something", t: "I can hear {{*something|anything|nothing}} in the garden – what is it?" },
      { id: "chances", t: "The chances {{*of|for|in}} winning the lottery are very small." },
      { id: "family", t: "Good looks run {{*in|on|through}} the family." },
      { id: "both", t: "If {{*both|either|each}} parents are tall, the child will probably be tall too." },
      { id: "noreason", t: "There is absolutely {{*no|not|none}} reason to be afraid." },
      { id: "terrified", t: "She is terrified {{*of|from|with}} flying." },
      { id: "carryon", t: "After a short break, they carried {{*on|out|away}} with their work." },
      { id: "different", t: "People with allergies shouldn't feel different {{*from|than|of}} everyone else." },
      { id: "chances", t: "Lots of people walk here, so there's a good chance that {{*someone|anyone|no one}} will find your ring." }
    ] },
  { type: "gaps", title: "One word only", short: "One word", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "eitheror", t: "You can either walk [[or]] take the bus." },
      { id: "thesedays", t: "[[These]] days, a lot of people work from home." },
      { id: "thing", t: "The first [[thing]] to do in an emergency is call 112." },
      { id: "otherhand", t: "On the [[other]] hand, the flat is very cheap." },
      { id: "something", t: "I think there's [[something]] wrong with my phone." },
      { id: "chances", t: "The [[chances]] of rain tomorrow are quite high." },
      { id: "family", t: "Diabetes often runs [[in]] the family." },
      { id: "both", t: "[[Both]] my parents are doctors." },
      { id: "noreason", t: "There's [[no]] reason to worry." },
      { id: "terrified", t: "My cat is terrified [[of]] the vacuum cleaner." },
      { id: "carryon", t: "Don't stop – carry [[on]] with your story." },
      { id: "different", t: "Our school is very different [[from/to]] yours." }
    ] },
  { type: "gaps", title: "Open cloze: Afraid of spiders", short: "Open cloze text", layout: "text", keepOrder: true,
    instr: "This text is like the exam. Read it all first, then write ONE word in each gap.",
    items: [
      { t: "[[These#thesedays]] days, millions of people are afraid of spiders. Some are frightened [[either#eitheror]] by their long legs or by the way they move. For some people, the simplest [[thing#thing]] to do is to stay away from them. [[On#otherhand]] the other hand, if the fear is very strong, [[something#something]] more serious may be needed, such as therapy. Scientists say that the chances [[of#chances]] a child being afraid of spiders are higher if the fear runs [[in#family]] the family. If [[both#both]] parents scream when they see a spider, the child will probably learn to do the same. However, there is [[no#noreason]] reason to be terrified [[of#terrified]] spiders forever. With help, people can carry [[on#carryon]] with their lives and feel no different [[from/to#different]] anyone else." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the small word correct?",
    items: [
      { id: "eitheror", t: "You can either stay or go.", ok: true },
      { id: "eitheror", t: "You can either stay nor go.", ok: false, fix: "You can either stay or go." },
      { id: "thesedays", t: "This days, nobody writes letters.", ok: false, fix: "These days, nobody writes letters." },
      { id: "otherhand", t: "On the other hand, it's very expensive.", ok: true },
      { id: "family", t: "Red hair runs on our family.", ok: false, fix: "Red hair runs in our family." },
      { id: "terrified", t: "I'm terrified from heights.", ok: false, fix: "I'm terrified of heights." },
      { id: "noreason", t: "There is not reason to panic.", ok: false, fix: "There is no reason to panic." },
      { id: "both", t: "Both my parents work at the hospital.", ok: true },
      { id: "carryon", t: "Carry on with your work, please.", ok: true },
      { id: "chances", t: "What are the chances for winning?", ok: false, fix: "What are the chances of winning?" }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "eitheror", ru: "Мы поедем или в июле, или в августе.", en: "We'll go either in July or in August.", key: "either .* or" },
      { id: "thesedays", ru: "В наши дни все пользуются интернетом.", en: "These days, everyone uses the internet.", key: "these days" },
      { id: "otherhand", ru: "С другой стороны, это дёшево.", en: "On the other hand, it's cheap.", key: "on the other hand" },
      { id: "family", ru: "Это у нас семейное.", en: "It runs in the family.", key: "runs in (the|our) family" },
      { id: "terrified", ru: "Моя сестра ужасно боится пауков.", en: "My sister is terrified of spiders.", key: "terrified of" },
      { id: "noreason", ru: "Нет никакой причины волноваться.", en: "There is no reason to worry.", key: "no reason to" },
      { id: "carryon", ru: "Продолжай работать.", en: "Carry on with your work.", key: "carry on" },
      { id: "different", ru: "Он совсем не такой, как все.", en: "He's very different from everyone else.", key: "different (from|to)" }
    ] }
];
