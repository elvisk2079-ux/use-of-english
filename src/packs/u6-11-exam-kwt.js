// TITLE: Not Mature Enough
// EYEBROW: Use of English B2 · Unit 6 · Examination Practice B (Section 1) · Key word transformations
// SUB: The patterns from the Unit 6 exam transformations: not … enough to, be accustomed to -ing, succeed in -ing, be shocked to hear, apologise to sb for -ing, object to -ing, too expensive for sb to, the first to know, make sb do… Five drills.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u6-examkwt" };
const P = [
  { id: "notenough", phrase: "too immature to → not mature enough to", ru: "недостаточно взрослый, чтобы" },
  { id: "accustomed", phrase: "can't get used to → is not accustomed to …ing", ru: "не привык к" },
  { id: "succeededin", phrase: "managed to → succeeded in …ing", ru: "удалось" },
  { id: "shocked", phrase: "hearing … was a shock → was shocked to hear", ru: "был потрясён, услышав" },
  { id: "apologised", phrase: "said he was sorry → apologised to sb for …ing", ru: "извинился перед … за" },
  { id: "objected", phrase: "nobody liked having → everyone objected to having", ru: "все возражали против" },
  { id: "tooexpensive", phrase: "couldn't afford → was too expensive for her to buy", ru: "было слишком дорого для неё" },
  { id: "preventpeople", phrase: "so that people won't → to prevent people (from) …ing", ru: "чтобы люди не …" },
  { id: "difficultyadj", phrase: "would be difficult for me → would have difficulty (in) …ing", ru: "мне было бы трудно" },
  { id: "nopointwait", phrase: "I don't see why we should → There's no point in …ing", ru: "нет смысла" },
  { id: "firsttoknow", phrase: "first told his mother → his mother was the first to know", ru: "первой узнала" },
  { id: "madeget", phrase: "forced sb to → made sb do", ru: "заставил" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "notenough", q: "Tom is too young to watch this film.", o: ["Tom isn't old enough to watch this film.", "Tom isn't enough old to watch this film.", "Tom is old enough to watch this film.", "Tom isn't old enough for watch this film."] },
      { id: "accustomed", q: "She can't get used to living in a big city.", o: ["She isn't accustomed to living in a big city.", "She isn't accustomed to live in a big city.", "She isn't accustomed with living in a big city.", "She doesn't accustomed to living in a big city."] },
      { id: "succeededin", q: "He managed to pass his driving test.", o: ["He succeeded in passing his driving test.", "He succeeded to pass his driving test.", "He succeeded passing his driving test.", "He was succeeded in passing his driving test."] },
      { id: "shocked", q: "The news of the accident was a shock to everyone.", o: ["Everyone was shocked to hear about the accident.", "Everyone was shocking to hear about the accident.", "Everyone shocked to hear about the accident.", "Everyone was shocked hearing about the accident to."] },
      { id: "apologised", q: "Kate told her friend she was sorry she had been late.", o: ["Kate apologised to her friend for being late.", "Kate apologised her friend for being late.", "Kate apologised to her friend to be late.", "Kate apologised for her friend being late."] },
      { id: "objected", q: "Nobody liked the idea of a new motorway.", o: ["Everyone objected to the idea of a new motorway.", "Everyone objected the idea of a new motorway.", "Everyone objected against the idea of a new motorway.", "Nobody objected to the idea of a new motorway."] },
      { id: "tooexpensive", q: "I couldn't afford to buy the dress.", o: ["The dress was too expensive for me to buy.", "The dress was too expensive for me to buy it.", "The dress was enough expensive for me to buy.", "The dress was too expensive to me buying."] },
      { id: "preventpeople", q: "Signs have been put up so that people won't swim here.", o: ["Signs have been put up to prevent people from swimming here.", "Signs have been put up to prevent people to swim here.", "Signs have been put up to prevent people swim here.", "Signs have been put up for prevent people swimming here."] },
      { id: "difficultyadj", q: "It would be hard for me to live without music.", o: ["I would have difficulty living without music.", "I would have difficulty to live without music.", "I would have difficult living without music.", "I would be difficulty living without music."] },
      { id: "nopointwait", q: "I don't see why we should wait for the bus.", o: ["There's no point in waiting for the bus.", "There's no point to wait for the bus.", "There's not point in waiting for the bus.", "There's no point in wait for the bus."] },
      { id: "firsttoknow", q: "She told her sister about the baby before anyone else.", o: ["Her sister was the first to know about the baby.", "Her sister was the first knowing about the baby.", "Her sister was first to knew about the baby.", "Her sister was the first who know about the baby."] },
      { id: "madeget", q: "The teacher forced us to stay after school.", o: ["The teacher made us stay after school.", "The teacher made us to stay after school.", "The teacher made us staying after school.", "The teacher was made us stay after school."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "notenough", t: "He's too short to play basketball. → He isn't tall {{*enough|too|so}} to play basketball." },
      { id: "accustomed", t: "I can't get used to the cold. → I'm not accustomed {{*to|with|of}} the cold." },
      { id: "succeededin", t: "She managed to find a job. → She succeeded {{*in|to|on}} finding a job." },
      { id: "shocked", t: "Hearing the news was a shock to me. → I was shocked {{*to|for|at}} hear the news." },
      { id: "apologised", t: "He said sorry for shouting. → He apologised {{*for|to|of}} shouting." },
      { id: "objected", t: "Nobody liked working late. → Everyone objected to {{*working|work|worked}} late." },
      { id: "tooexpensive", t: "We couldn't afford the car. → The car was {{*too|very|so}} expensive for us to buy." },
      { id: "preventpeople", t: "…so that drivers won't park here. → …to prevent drivers {{*from|to|of}} parking here." },
      { id: "difficultyadj", t: "It would be hard for me to wake up at 5. → I would have {{*difficulty|difficult|hard}} waking up at 5." },
      { id: "nopointwait", t: "Why should we hurry? → There's no point {{*in|to|for}} hurrying." },
      { id: "firsttoknow", t: "He told me first. → I was the first {{*to|who|for}} know." },
      { id: "madeget", t: "They forced him to sign. → They made him {{*sign|to sign|signing}}." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "notenough", t: "John is too immature to live alone. ^MATURE^ → John [[is not mature enough/isn't mature enough]] to live alone." },
      { id: "accustomed", t: "She can't get used to working at night. ^ACCUSTOMED^ → She [[is not accustomed to working/isn't accustomed to working]] at night." },
      { id: "succeededin", t: "He managed to convince his parents. ^SUCCEEDED^ → He [[succeeded in convincing]] his parents." },
      { id: "shocked", t: "Hearing that the school would close was a shock to us. ^SHOCKED^ → We [[were shocked to hear]] that the school would close." },
      { id: "apologised", t: "Mark told Ann he was sorry he had broken her phone. ^APOLOGISED^ → Mark [[apologised to Ann for breaking/apologized to Ann for breaking]] her phone." },
      { id: "objected", t: "Nobody liked having to wear a uniform. ^OBJECTED^ → Everyone [[objected to having]] to wear a uniform." },
      { id: "tooexpensive", t: "She couldn't afford to buy the flat. ^EXPENSIVE^ → The flat [[was too expensive for her]] to buy." },
      { id: "preventpeople", t: "A fence was built so that animals wouldn't get onto the road. ^PREVENT^ → A fence was built [[to prevent animals from getting/to prevent animals getting]] onto the road." },
      { id: "difficultyadj", t: "It would be difficult for me to learn Japanese. ^DIFFICULTY^ → I [[would have difficulty learning/would have difficulty in learning]] Japanese." },
      { id: "nopointwait", t: "I don't see why we should call him again. ^POINT^ → There's [[no point in calling/no point calling]] him again." },
      { id: "firsttoknow", t: "He first told his best friend about the job. ^KNOW^ → His best friend [[was the first to know]] about the job." },
      { id: "madeget", t: "The police forced the driver to get out of the car. ^MADE^ → The police [[made the driver get]] out of the car." }
    ],
    note: "Contractions count as two words in the exam: isn't = is not. Check that you have used between two and five words." },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "notenough", t: "He is too immature to drive. → He is not mature enough to drive.", ok: true },
      { id: "accustomed", t: "He can't get used to it. → He is not accustomed to it.", ok: true },
      { id: "succeededin", t: "She managed to win. → She succeeded to win.", ok: false, fix: "She succeeded in winning." },
      { id: "shocked", t: "The news was a shock. → Everyone was shocked to hear the news.", ok: true },
      { id: "apologised", t: "He said sorry to her. → He apologised her for being rude.", ok: false, fix: "He apologised to her for being rude." },
      { id: "objected", t: "Nobody wanted a new factory. → Everyone objected to have a new factory.", ok: false, fix: "Everyone objected to having a new factory." },
      { id: "tooexpensive", t: "She couldn't afford it. → The laptop was too expensive for her to buy it.", ok: false, fix: "The laptop was too expensive for her to buy." },
      { id: "nopointwait", t: "Why should we wait? → There's no point in waiting.", ok: true },
      { id: "madeget", t: "The police forced him to get in. → The police made him to get into the car.", ok: false, fix: "The police made him get into the car." },
      { id: "firsttoknow", t: "He told his mother first. → His mother was the first to know.", ok: true }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "notenough", q: "(He is too young to vote.)", s: "He isn't old enough to vote." },
      { id: "succeededin", q: "(She managed to open the door.)", s: "She succeeded in opening the door." },
      { id: "shocked", q: "(The news shocked us.)", s: "We were shocked to hear the news." },
      { id: "apologised", q: "(Tom said sorry to me for being late.)", s: "Tom apologised to me for being late." },
      { id: "tooexpensive", q: "(I couldn't afford the car.)", s: "The car was too expensive for me to buy." },
      { id: "firsttoknow", q: "(He told his mother first.)", s: "His mother was the first to know." },
      { id: "madeget", q: "(They forced him to leave.)", s: "They made him leave." },
      { id: "objected", q: "(Nobody liked the new rules.)", s: "Everyone objected to the new rules." }
    ] }
];
