// TITLE: Up, Up and Away
// EYEBROW: Use of English B2 · Unit 5 · Consolidation I · Open cloze
// SUB: The small words from the open cloze about ballooning: as, when, look into, catch sb's attention, until, fill with, interested in, either … or. Five drills, ending with a new open cloze text.
// BOARD: Your words
const META = { ls: "uoe-b2-u5-cloze" };
const P = [
  { id: "as", phrase: "as (began as a science, work as)", ru: "как, в качестве" },
  { id: "when", phrase: "in 1783, when …", ru: "когда (после даты, времени)" },
  { id: "lookinto", phrase: "look into", ru: "изучать, разбираться, расследовать" },
  { id: "catch", phrase: "catch sb's attention", ru: "привлечь чьё-то внимание" },
  { id: "until", phrase: "until / till", ru: "до тех пор, пока не" },
  { id: "fillwith", phrase: "fill sth with", ru: "наполнить чем-то" },
  { id: "interested", phrase: "become interested in", ru: "заинтересоваться" },
  { id: "lots", phrase: "lots of", ru: "много" },
  { id: "different", phrase: "for different purposes", ru: "для разных целей" },
  { id: "responsible", phrase: "has been responsible for", ru: "стал причиной; отвечает за" },
  { id: "either", phrase: "either … or", ru: "либо … либо" },
  { id: "most", phrase: "the most common", ru: "самый распространённый" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "as", t: "She started her career {{*as|like|so}} a waitress." },
      { id: "as", t: "Football began {{*as|such|so}} a game for schoolboys." },
      { id: "when", t: "In 2010, {{*when|which|where}} I was ten, we moved to Moscow." },
      { id: "when", t: "I remember the day {{*when|which|what}} we met." },
      { id: "lookinto", t: "Scientists are looking {{*into|after|forward}} the causes of the disease." },
      { id: "lookinto", t: "We'll look {{*into|out|away}} your complaint as soon as possible." },
      { id: "catch", t: "The bright poster {{*caught|made|did}} my attention." },
      { id: "catch", t: "Try to catch the waiter's {{*attention|look|notice}}." },
      { id: "until", t: "Wait here {{*until|by|since}} I come back." },
      { id: "until", t: "Don't leave {{*until|while|since}} the film ends." },
      { id: "fillwith", t: "She filled the glass {{*with|of|by}} water." },
      { id: "fillwith", t: "The room was filled {{*with|of|by}} smoke." },
      { id: "interested", t: "He became interested {{*in|on|for}} photography." },
      { id: "interested", t: "Are you interested {{*in|about|at}} history?" },
      { id: "lots", t: "There are {{*lots|many|much}} of people here." },
      { id: "lots", t: "We had {{*lots|much|many}} of fun." },
      { id: "different", t: "People use the internet for many {{*different|difference|differently}} purposes." },
      { id: "different", t: "We tried three {{*different|differ|difference}} restaurants." },
      { id: "responsible", t: "Smoking has {{*been|being|be}} responsible for many deaths." },
      { id: "responsible", t: "Who is responsible {{*for|of|about}} this mess?" },
      { id: "either", t: "You can {{*either|neither|both}} stay or go." },
      { id: "either", t: "We'll go {{*either|neither|whether}} by bus or by train." },
      { id: "most", t: "This is the {{*most|more|much}} common mistake." },
      { id: "most", t: "Football is the {{*most|more|best}} popular sport in Brazil." }
    ],
    note: "In the open cloze the missing word is often a small word: a preposition (interested IN, fill WITH), a linker (when, until, either) or part of a fixed phrase (catch sb's attention, lots OF)." },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Open cloze practice: write ONE word in each gap.",
    items: [
      { id: "as", t: "My aunt works [[as]] a nurse." },
      { id: "when", t: "Do you remember the year [[when/that]] we went to Spain?" },
      { id: "lookinto", t: "The manager promised to look [[into]] the problem." },
      { id: "catch", t: "A strange noise [[caught]] my attention." },
      { id: "until", t: "I won't go to bed [[until/till]] I finish my homework." },
      { id: "fillwith", t: "Fill the bottle [[with]] cold water." },
      { id: "interested", t: "My brother is very interested [[in]] cars." },
      { id: "lots", t: "She has [[lots]] of friends." },
      { id: "different", t: "There are many [[different]] kinds of tea." },
      { id: "responsible", t: "Bad weather has [[been]] responsible for the delays." },
      { id: "either", t: "We can [[either]] watch a film or play a game." },
      { id: "most", t: "This is the [[most]] beautiful place I've ever seen." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "as", t: "She works like a teacher at our school.", ok: false, fix: "She works as a teacher at our school." },
      { id: "lookinto", t: "The police are looking into the robbery.", ok: true },
      { id: "fillwith", t: "He filled the box of old books.", ok: false, fix: "He filled the box with old books." },
      { id: "interested", t: "I'm interested on science.", ok: false, fix: "I'm interested in science." },
      { id: "until", t: "I'll wait until you're ready.", ok: true },
      { id: "lots", t: "There are lots of shops in the centre.", ok: true },
      { id: "either", t: "You can either come with us or stay at home.", ok: true },
      { id: "most", t: "It's the more common mistake.", ok: false, fix: "It's the most common mistake." },
      { id: "catch", t: "The advert caught my attention.", ok: true },
      { id: "responsible", t: "Who is responsible of the project?", ok: false, fix: "Who is responsible for the project?" },
      { id: "when", t: "In 1999, which I was born, my parents lived in Kazan.", ok: false, fix: "In 1999, when I was born, my parents lived in Kazan." }
    ] },
  { type: "gaps", title: "Exam text: Kites", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write ONE word in each gap.",
    items: [
      { t: "Today kites are usually flown just for fun, but they began [[as#as]] tools for science and war. It all started in China more than 2,000 years ago, [[when#when]] people first tied silk to bamboo frames. Much later, scientists in Europe started looking [[into#lookinto]] how kites could help them study the weather. What [[caught#catch]] their attention was that a kite could carry things high into the sky. They had to wait [[until/till#until]] the wind was strong enough, and then they sent up huge kites filled [[with#fillwith]] instruments to measure the air. Soon, people all over the world became interested [[in#interested]] kites, and [[lots#lots]] of clubs were started. Kites have been used for many [[different#different]] purposes, from fishing to taking photos from the air. Light new materials have [[been#responsible]] responsible for the popularity of kite surfing. Today people fly kites [[either#either]] for sport or simply to relax, and they are among the [[most#most]] popular toys in the world." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key word.",
    items: [
      { id: "as", ru: "Она работает гидом.", en: "She works as a guide.", key: "as a guide" },
      { id: "lookinto", ru: "Мы разберёмся с вашей проблемой.", en: "We will look into your problem.", key: "look into" },
      { id: "catch", ru: "Его слова привлекли моё внимание.", en: "His words caught my attention.", key: "caught my attention" },
      { id: "fillwith", ru: "Наполни ведро водой.", en: "Fill the bucket with water.", key: "with water" },
      { id: "interested", ru: "Я заинтересовалась фотографией.", en: "I became interested in photography.", key: "interested in" },
      { id: "until", ru: "Подожди, пока я не вернусь.", en: "Wait until I come back.", key: "until|till" },
      { id: "either", ru: "Либо ты ему звонишь, либо я.", en: "Either you call him or I do.", key: "either .* or" },
      { id: "responsible", ru: "Кто отвечает за это?", en: "Who is responsible for this?", key: "responsible for" },
      { id: "most", ru: "Это самая популярная игра.", en: "This is the most popular game.", key: "the most popular" },
      { id: "different", ru: "Мы попробовали разные способы.", en: "We tried different ways.", key: "different" }
    ] }
];
