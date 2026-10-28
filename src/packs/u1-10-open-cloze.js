// TITLE: Open Cloze Words
// EYEBROW: Use of English B2 · Unit 1 · Examination Practice A (Section 1)
// SUB: The small words that open cloze tests check, taken from the “Money” text: prepositions, auxiliaries and fixed phrases. Five drills, ending with a new open cloze text.
// BOARD: Your key phrases
const META = { ls: "uoe-b2-u1-opencloze" };
const P = [
  { id: "iswhat", phrase: "X is what…", ru: "именно X … (что-то делает)" },
  { id: "provide", phrase: "provide sb with sth", ru: "обеспечивать кого-то чем-то" },
  { id: "andor", phrase: "buy and / or sell", ru: "покупать и / или продавать" },
  { id: "ago", phrase: "… years ago", ru: "… лет назад" },
  { id: "usedto", phrase: "used to + verb", ru: "раньше (делал)" },
  { id: "agreement", phrase: "make / reach an agreement", ru: "договориться" },
  { id: "suchas", phrase: "such as", ru: "такие как" },
  { id: "upwith", phrase: "come up with", ru: "придумать" },
  { id: "did", phrase: "Why did … ?", ru: "вопрос в Past Simple" },
  { id: "opportunity", phrase: "an opportunity for", ru: "возможность для" },
  { id: "hadnever", phrase: "had never done", ru: "никогда раньше не делал (Past Perfect)" },
  { id: "willnot", phrase: "it will not be long before", ru: "скоро, вот-вот" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the ONE word that fits the gap.",
    items: [
      { id: "iswhat", t: "Hard work {{*is|was|are}} what makes a good student." },
      { id: "iswhat", t: "Music is {{*what|which|that}} helps me relax after school." },
      { id: "provide", t: "The library provides students {{*with|for|to}} free internet." },
      { id: "andor", t: "On this website you can buy {{*and|but|so}} sell old books." },
      { id: "ago", t: "The castle was built 800 years {{*ago|before|since}}." },
      { id: "usedto", t: "My grandparents {{*used|use|were}} to live in a tiny village." },
      { id: "usedto", t: "People used {{*to|for|by}} write letters instead of emails." },
      { id: "agreement", t: "After hours of talks, they finally {{*reached|did|took}} an agreement." },
      { id: "suchas", t: "I love outdoor sports such {{*as|like|that}} skiing and hiking." },
      { id: "upwith", t: "Who came up {{*with|for|to}} the idea of the school fair?" },
      { id: "did", t: "Why {{*did|was|had}} the Roman Empire come to an end?" },
      { id: "opportunity", t: "The trip was a great opportunity {{*for|of|to}} learning." },
      { id: "hadnever", t: "Before last year, she {{*had|has|was}} never travelled by plane." },
      { id: "willnot", t: "It {{*will|is|has}} not be long before robots do all the cleaning." },
      { id: "willnot", t: "It won't be long {{*before|after|until}} the summer holidays start." },
      { id: "agreement", t: "The two sides could not {{*make|do|get}} an agreement." }
    ] },
  { type: "gaps", title: "One word only", short: "One word", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "iswhat", t: "Love, not money, [[is]] what makes people happy." },
      { id: "provide", t: "The hotel provided us [[with]] a map of the city." },
      { id: "ago", t: "I started learning English five years [[ago]]." },
      { id: "usedto", t: "We [[used]] to go camping every summer when I was a child." },
      { id: "agreement", t: "Let's try to [[make/reach]] an agreement before the meeting ends." },
      { id: "suchas", t: "Fruit such [[as]] oranges and kiwis is full of vitamin C." },
      { id: "upwith", t: "She came [[up]] with a clever solution to the problem." },
      { id: "did", t: "When [[did]] you first meet your best friend?" },
      { id: "opportunity", t: "This job is an opportunity [[for]] me to learn new skills." },
      { id: "hadnever", t: "He [[had]] never seen snow before he moved to Canada." },
      { id: "willnot", t: "Hurry up! It [[will]] not be long before the shop closes." },
      { id: "andor", t: "You can pay by card [[or]] in cash – it is up to you." },
      { id: "iswhat", t: "Good friends are [[what]] I value most in life." },
      { id: "usedto", t: "Did you use [[to]] play with dolls when you were little?" }
    ] },
  { type: "gaps", title: "Open cloze: A short history of shopping", short: "Open cloze text", layout: "text", keepOrder: true,
    instr: "This text is like the exam. Read it all first, then write ONE word in each gap.",
    items: [
      { t: "Long before supermarkets existed, people [[used#usedto]] to buy their food at weekly markets. Hundreds of years [[ago#ago]], farmers brought vegetables, eggs and animals to town, and townspeople bought [[and#andor]] sold almost everything there. Prices were never fixed, so the buyer and the seller had to reach [[an#agreement]] agreement every time. Then, in the nineteenth century, someone came up [[with#upwith]] the idea of the department store. Shops [[such#suchas]] as Harrods in London provided customers [[with#provide]] everything under one roof. Many people [[had#hadnever]] never seen so many goods in one place before. So why [[did#did]] small shops not disappear? The answer is simple: friendly service [[is#iswhat]] what many customers still want. Today, online shopping gives small businesses an opportunity [[for#opportunity]] growth, and it will [[not#willnot]] be long before most of our shopping is done on our phones." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the small word correct?",
    items: [
      { id: "ago", t: "I visited Rome three years before.", ok: false, fix: "I visited Rome three years ago." },
      { id: "suchas", t: "I like fruit such as apples and pears.", ok: true },
      { id: "provide", t: "The school provided us for books.", ok: false, fix: "The school provided us with books." },
      { id: "usedto", t: "He used to play football every weekend.", ok: true },
      { id: "agreement", t: "They did an agreement after a long discussion.", ok: false, fix: "They reached / made an agreement." },
      { id: "upwith", t: "Who came up to this idea?", ok: false, fix: "Who came up with this idea?" },
      { id: "hadnever", t: "I had never been abroad before 2020.", ok: true },
      { id: "willnot", t: "It will not be long after the bus arrives.", ok: false, fix: "It will not be long before the bus arrives." },
      { id: "did", t: "Why the war did end?", ok: false, fix: "Why did the war end?" },
      { id: "opportunity", t: "This is a great opportunity for you.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "ago", ru: "Я была там два года назад.", en: "I was there two years ago.", key: "years ago" },
      { id: "usedto", ru: "Раньше мы жили в деревне.", en: "We used to live in a village.", key: "used to live" },
      { id: "suchas", ru: "Я люблю такие виды спорта, как теннис и плавание.", en: "I love sports such as tennis and swimming.", key: "such as" },
      { id: "provide", ru: "Компания обеспечивает сотрудников ноутбуками.", en: "The company provides its employees with laptops.", key: "provides? (\\w+ )+with" , hint: "provide sb with sth" },
      { id: "upwith", ru: "Она придумала отличный план.", en: "She came up with a great plan.", key: "came up with" },
      { id: "agreement", ru: "Мы договорились.", en: "We reached an agreement.", key: "(reached|made|came to) an agreement" },
      { id: "hadnever", ru: "До этого я никогда не видела океан.", en: "I had never seen the ocean before.", key: "had never seen" },
      { id: "willnot", ru: "Скоро начнётся зима.", en: "It won't be long before winter starts.", key: "(won't|will not) be long before" },
      { id: "iswhat", ru: "Именно здоровье делает нас счастливыми.", en: "Health is what makes us happy.", key: "is what makes" },
      { id: "opportunity", ru: "Это прекрасная возможность для учёбы.", en: "This is a great opportunity for learning.", key: "opportunity for" }
    ] }
];
