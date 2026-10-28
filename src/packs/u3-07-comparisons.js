// TITLE: Far Better Than
// EYEBROW: Use of English B2 · Unit 3 · Grammar Revision: Adverbs and Comparisons
// SUB: Comparatives, superlatives, as … as, the same as, much / far + comparative, rather / quite / very, like or as. Five drills with the traps from “Points to remember”.
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u3-comparisons" };
const P = [
  { id: "than", phrase: "cheaper than (not from)", ru: "сравнение: than" },
  { id: "nodouble", phrase: "funnier / more amusing", ru: "не more funnier" },
  { id: "asas", phrase: "as big as", ru: "такой же … как (as + положит. степень + as)" },
  { id: "super", phrase: "the tallest girl in / of", ru: "превосходная степень (из многих)" },
  { id: "two", phrase: "the taller of the two", ru: "из двух – сравнительная степень" },
  { id: "muchfar", phrase: "much / far / a lot + comparative", ru: "гораздо лучше (не very better)" },
  { id: "rather", phrase: "a very / pretty / rather + adj + noun", ru: "quite a + adj + noun" },
  { id: "toovery", phrase: "very vs too", ru: "too = слишком (негативно)" },
  { id: "elder", phrase: "elder / eldest brother; older than", ru: "после elder нет than" },
  { id: "likeas", phrase: "like a lawyer / as a lawyer", ru: "like = как будто; as = в качестве" },
  { id: "moremore", phrase: "more and more; the more …, the more …", ru: "всё больше; чем больше…, тем…" },
  { id: "same", phrase: "the same … as; similar to", ru: "такой же, как; похожий на" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the correct form", short: "Choose", instr: "Tap the correct option.",
    items: [
      { id: "than", t: "The train is cheaper {{*than|from|that}} the plane." },
      { id: "nodouble", t: "Your story is {{*funnier|more funnier|funniest}} than mine." },
      { id: "asas", t: "Your house is as {{*big|bigger|biggest}} as mine." },
      { id: "super", t: "Mary is the {{*tallest|taller|most tall}} girl in her class." },
      { id: "two", t: "Mary and Sheila are both tall, but Mary is the {{*taller|tallest|most tall}} of the two." },
      { id: "muchfar", t: "This film is {{*far|very|too}} better than the book." },
      { id: "muchfar", t: "Lisa drives {{*much|very|quite}} more carefully than Tim." },
      { id: "rather", t: "Lisa is {{*quite a|a quite|quite}} careful driver." },
      { id: "rather", t: "It's {{*a rather|rather a much|a much}} small town." },
      { id: "toovery", t: "The children were {{*very|too}} excited about the trip – they couldn't wait!" },
      { id: "toovery", t: "This coffee is {{*too|very}} hot to drink – I'll wait a minute." },
      { id: "elder", t: "My brother is two years {{*older|elder|eldest}} than me." },
      { id: "elder", t: "That's my {{*elder|older than|eldest than}} sister, Anna." },
      { id: "likeas", t: "He works {{*as|like}} a doctor in a big hospital." },
      { id: "likeas", t: "She sings {{*like|as}} an angel!" },
      { id: "likeas", t: "Do {{*as|like}} I tell you!" },
      { id: "moremore", t: "The weather is getting {{*colder and colder|more and more cold|colder and more cold}}." },
      { id: "moremore", t: "The {{*more|most|much}} you practise, the better you get." },
      { id: "same", t: "The weather here is similar {{*to|as|than}} the weather in Britain." },
      { id: "same", t: "In winter the sea is the same temperature {{*as|than|like}} in summer." }
    ] },
  { type: "gaps", title: "One word in each gap", short: "Open cloze", layout: "text", keepOrder: true,
    instr: "Read the text first. Then write ONE word in each gap.",
    items: [
      { t: "My grandmother is one of the [[most#super]] amazing people I know. She was born in a [[very/rather/quite#rather]] small village, but in the beginning she worked [[as#likeas]] a teacher in Moscow. She was not as famous then [[as#asas]] she became later, when she started writing children's books. Over time, her stories became more [[and#moremore]] popular. The [[more#moremore]] books she wrote, the happier she seemed. She has always been a lot [[more#muchfar]] patient than me, and she speaks [[like#likeas]] a real actress when she reads aloud. She is two years older [[than#than]] my grandfather, but she looks much younger. Her house is the [[same#same]] as it was fifty years ago, and her garden is similar [[to#same]] a small forest. She is [[far/much#muchfar]] more active than most people half her age." }
    ] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "Classic mistakes. Is each sentence right or wrong?",
    items: [
      { id: "than", t: "The train is cheaper from the plane.", ok: false, fix: "The train is cheaper than the plane." },
      { id: "nodouble", t: "Your story is more funnier than mine.", ok: false, fix: "Your story is funnier than mine." },
      { id: "asas", t: "Your house is as bigger as mine.", ok: false, fix: "Your house is as big as mine." },
      { id: "muchfar", t: "Lisa is very more careful than Tim.", ok: false, fix: "Lisa is much / far / a lot more careful than Tim." },
      { id: "two", t: "Both twins are tall, but Max is the tallest of the two.", ok: false, fix: "Max is the taller of the two." },
      { id: "elder", t: "My brother is a year elder than me.", ok: false, fix: "My brother is a year older than me." },
      { id: "likeas", t: "He spoke like he was advised to.", ok: false, fix: "He spoke as he was advised to." },
      { id: "rather", t: "Lisa is a pretty careful driver.", ok: true },
      { id: "super", t: "She is the best student in the class.", ok: true },
      { id: "toovery", t: "The music is too loud – I can't hear you.", ok: true },
      { id: "same", t: "Your bike is exactly the same as mine.", ok: true },
      { id: "moremore", t: "The older he gets, the more sensible he becomes.", ok: true },
      { id: "rather", t: "It was a quite good film.", ok: false, fix: "It was quite a good film." },
      { id: "likeas", t: "He spoke like a lawyer, but he is a plumber.", ok: true }
    ] },
  { type: "gaps", title: "Write the correct form", short: "Forms", instr: "Write the correct form of the word in capitals (comparative, superlative or as … as).",
    items: [
      { id: "super", t: "France is one of the [[largest]] ^LARGE^ countries in Europe." },
      { id: "asas", t: "France is twice as [[big]] ^BIG^ as the UK." },
      { id: "than", t: "Mont Blanc is [[higher]] ^HIGH^ than any other mountain in Western Europe." },
      { id: "muchfar", t: "The Mediterranean is much [[warmer]] ^WARM^ than the North Sea." },
      { id: "nodouble", t: "This book is [[more interesting]] ^INTERESTING^ than the film." },
      { id: "super", t: "That was the [[worst]] ^BAD^ meal I've ever had!" },
      { id: "super", t: "She's the [[best]] ^GOOD^ player in the team." },
      { id: "two", t: "Of the two coats, the blue one is the [[cheaper]] ^CHEAP^." },
      { id: "moremore", t: "It's getting [[darker and darker]] ^DARK^." },
      { id: "moremore", t: "The [[harder]] ^HARD^ you work, the more you earn." },
      { id: "muchfar", t: "Snails taste far [[better]] ^GOOD^ than they look." },
      { id: "elder", t: "My [[eldest/elder]] ^OLD^ son is a pilot; the younger one is still at school." },
      { id: "than", t: "He runs [[faster]] ^FAST^ than anyone in his class." },
      { id: "asas", t: "Jessica doesn't swim as [[well]] ^GOOD^ as Sarah." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the comparison structure.",
    items: [
      { id: "muchfar", ru: "Этот фильм гораздо лучше.", en: "This film is much better.", key: "(much|far|a lot) better" },
      { id: "asas", ru: "Мой брат такой же высокий, как папа.", en: "My brother is as tall as my dad.", key: "as tall as" },
      { id: "super", ru: "Это самый красивый город в мире.", en: "It's the most beautiful city in the world.", key: "the most beautiful .* in the world" },
      { id: "two", ru: "Из двух сестёр Аня – старшая.", en: "Of the two sisters, Anya is the older.", key: "the (older|elder) of|of the two" },
      { id: "moremore", ru: "Становится всё холоднее и холоднее.", en: "It's getting colder and colder.", key: "colder and colder" },
      { id: "moremore", ru: "Чем больше читаешь, тем больше знаешь.", en: "The more you read, the more you know.", key: "the more you read, ?the more you know" },
      { id: "same", ru: "У нас одинаковые телефоны.", en: "Our phones are the same.", key: "the same|identical" },
      { id: "elder", ru: "Мой старший брат живёт в Казани.", en: "My elder brother lives in Kazan.", key: "(elder|older) brother" },
      { id: "likeas", ru: "Она работает учительницей.", en: "She works as a teacher.", key: "works as a teacher" },
      { id: "toovery", ru: "Здесь слишком шумно.", en: "It's too noisy here.", key: "too noisy" }
    ] }
];
