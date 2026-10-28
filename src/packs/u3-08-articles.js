// TITLE: A, An, The or Nothing?
// EYEBROW: Use of English B2 · Unit 3 · Grammar Revision: Articles and Uncountables
// SUB: Articles with places, jobs and fixed phrases, and uncountable nouns such as information, news and advice. Five drills. The dash (–) means no article.
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u3-articles" };
const P = [
  { id: "places", phrase: "the Alps, the Mediterranean, the UK", ru: "the: горы (цепи), моря, реки, the UK / USA" },
  { id: "noart", phrase: "– France, – Mont Blanc, – Lake Baikal", ru: "без артикля: страны, отдельные горы, озёра" },
  { id: "zero", phrase: "off work, at school, in bed, by bus", ru: "устойчивые фразы без артикля" },
  { id: "ajob", phrase: "a / an + job", ru: "She's a doctor. He works as an engineer." },
  { id: "thefixed", phrase: "the same, the first, the beginning", ru: "the в устойчивых сочетаниях" },
  { id: "afirst", phrase: "a / an = one, any; the = this one", ru: "первое упоминание – a, повторное – the" },
  { id: "uncount", phrase: "information, advice, furniture, money", ru: "неисчисляемые: без a / an и без -s" },
  { id: "news", phrase: "the news is", ru: "news + глагол в ед. числе" },
  { id: "piece", phrase: "a piece of information / advice", ru: "одна штука: a piece of" },
  { id: "littlefew", phrase: "little + uncountable, few + countable", ru: "little furniture, few pieces of furniture" },
  { id: "muchmany", phrase: "much / many / a lot of / lots of", ru: "much – неисч., many – исч." }
];
const DRILLS = [
  { type: "gaps", title: "Which article?", short: "Articles", instr: "Tap a, an, the or – (no article).",
    items: [
      { id: "places", t: "We went skiing in {{a|*the|–}} Alps." },
      { id: "places", t: "The water in {{a|*the|–}} Mediterranean is warm in summer." },
      { id: "places", t: "France is twice as big as {{a|*the|–}} UK." },
      { id: "noart", t: "We're going to {{a|the|*–}} France this summer." },
      { id: "noart", t: "{{A|The|*–}} Mont Blanc is the highest mountain in Western Europe." },
      { id: "noart", t: "{{A|The|*–}} Lake Baikal is the deepest lake in the world." },
      { id: "zero", t: "He has eight weeks off {{a|the|*–}} work this summer." },
      { id: "zero", t: "The children are at {{a|the|*–}} school until three." },
      { id: "zero", t: "I usually go to work by {{a|the|*–}} bus." },
      { id: "ajob", t: "My sister is {{*a|the|–}} nurse." },
      { id: "ajob", t: "He wants to become {{*an|a|–}} engineer." },
      { id: "thefixed", t: "We were born on {{a|*the|–}} same day!" },
      { id: "thefixed", t: "In {{a|*the|–}} beginning, I didn't like my new school." },
      { id: "thefixed", t: "Is this {{a|*the|–}} first time you've been here?" },
      { id: "afirst", t: "I saw {{*a|the|–}} film last night. {{a|*The|–}} film was about a dog." },
      { id: "afirst", t: "Can you pass me {{a|*the|–}} salt, please?" },
      { id: "uncount", t: "John gave me some important {{*information|informations|an information}}." },
      { id: "uncount", t: "Can I give you {{*some advice|an advice|advices}}?" }
    ],
    note: "No article with most countries, single mountains and lakes (France, Mont Blanc, Lake Baikal). The with mountain ranges, seas, rivers and some countries (the Alps, the Mediterranean, the Volga, the UK, the USA)." },
  { type: "gaps", title: "Uncountable nouns", short: "Uncountables", instr: "Tap the correct option.",
    items: [
      { id: "news", t: "The news {{*was|were}} really shocking." },
      { id: "news", t: "Here {{*is|are}} the news." },
      { id: "uncount", t: "We need to buy some new {{*furniture|furnitures}} for the flat." },
      { id: "uncount", t: "Thank you for your {{*advice|advices}}." },
      { id: "uncount", t: "My grandfather earned {{*a lot of money|many money|a money}}." },
      { id: "piece", t: "He gave me an important {{*piece of information|information|informations}}." },
      { id: "piece", t: "Let me give you {{*a piece of advice|an advice|a advice}}." },
      { id: "littlefew", t: "He hasn't got {{*much|many}} furniture in his new flat." },
      { id: "littlefew", t: "There is very {{*little|few}} furniture in the room." },
      { id: "littlefew", t: "There are very {{*few|little}} pieces of furniture in the room." },
      { id: "muchmany", t: "How {{*much|many}} homework do you have tonight?" },
      { id: "muchmany", t: "How {{*many|much}} suitcases are you taking?" },
      { id: "muchmany", t: "Versace spent {{*lots|much|many}} of money on art." },
      { id: "uncount", t: "The {{*luggage|luggages}} is in the car." }
    ],
    note: "Uncountable nouns have no plural and no a / an: information, advice, news, furniture, luggage, money, homework. To count them, use a piece of: a piece of advice." },
  { type: "gaps", title: "One word in each gap", short: "Open cloze", layout: "text", keepOrder: true,
    instr: "Read the text first. Then write ONE word in each gap: an article, much, many, little, few, piece, is…",
    items: [
      { t: "Last summer my family went on [[a#afirst]] cycling tour of [[the#places]] Alps. My dad works as [[an#ajob]] engineer and he had three weeks off [[work#zero]]. Before we left, my aunt gave us a useful [[piece#piece]] of advice: “Don't take too [[much#muchmany]] luggage!” She was right – there was very [[little#littlefew]] space on the bikes. On [[the#thefixed]] first day we cycled 50 kilometres. The views were amazing, but there were [[few/no#littlefew]] shops in the mountains, so we carried our own food. Every evening we listened to the radio, but the news [[was#news]] always about the weather. We met [[many#muchmany]] friendly people, and I learned a lot of useful [[information#uncount]] about the history of the area." }
    ] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "Is each sentence right or wrong?",
    items: [
      { id: "uncount", t: "John gave me some important informations.", ok: false, fix: "John gave me some important information." },
      { id: "piece", t: "John gave me an important information.", ok: false, fix: "John gave me an important piece of information." },
      { id: "news", t: "The news were really shocking.", ok: false, fix: "The news was really shocking." },
      { id: "uncount", t: "She gave me some good advice.", ok: true },
      { id: "places", t: "We went on holiday to the Alps.", ok: true },
      { id: "noart", t: "We climbed the Mont Blanc.", ok: false, fix: "We climbed Mont Blanc." },
      { id: "ajob", t: "My mum is teacher.", ok: false, fix: "My mum is a teacher." },
      { id: "zero", t: "He is at the work at the moment.", ok: false, fix: "He is at work at the moment." },
      { id: "littlefew", t: "There are very few people here today.", ok: true },
      { id: "muchmany", t: "I don't have many money.", ok: false, fix: "I don't have much money." },
      { id: "thefixed", t: "We have the same teacher as last year.", ok: true },
      { id: "uncount", t: "Our furnitures are very old.", ok: false, fix: "Our furniture is very old." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key grammar.",
    items: [
      { id: "uncount", ru: "Мне нужна информация.", en: "I need some information.", key: "information" , hint: "information (no -s, no an)" },
      { id: "piece", ru: "Дай мне один совет.", en: "Give me a piece of advice.", key: "a piece of advice" },
      { id: "news", ru: "Новости хорошие!", en: "The news is good!", key: "news is" },
      { id: "places", ru: "Мы летом были в Альпах.", en: "We were in the Alps in summer.", key: "the alps" },
      { id: "ajob", ru: "Мой папа – врач.", en: "My dad is a doctor.", key: "is a doctor" },
      { id: "zero", ru: "Дети в школе.", en: "The children are at school.", key: "at school" },
      { id: "littlefew", ru: "У нас мало мебели.", en: "We have very little furniture.", key: "little furniture" },
      { id: "muchmany", ru: "Сколько у тебя денег?", en: "How much money do you have?", key: "how much money" },
      { id: "thefixed", ru: "У нас одинаковые сумки.", en: "We have the same bag.", key: "the same" },
      { id: "noart", ru: "Байкал – самое глубокое озеро в мире.", en: "Lake Baikal is the deepest lake in the world.", key: "^(lake )?baikal is the deepest", hint: "Lake Baikal (no article)" }
    ] }
];
