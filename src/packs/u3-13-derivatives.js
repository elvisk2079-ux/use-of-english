// TITLE: Childhood, Daily, Dangerous
// EYEBROW: Use of English B2 · Unit 3 · Derivatives
// SUB: Nouns in -hood, adjectives in -al, -y, -ous and -ly, adverbs in -ally and -ily. Twelve word patterns, five drills, ending with an exam-style text.
// BOARD: Your word patterns
const META = { ls: "uoe-b2-u3-deriv" };
const P = [
  { id: "hood", phrase: "-hood: childhood, adulthood, parenthood", ru: "детство, взрослость, родительство" },
  { id: "al", phrase: "-al / -ally: national, emotionally", ru: "addition → additional, fate → fatal" },
  { id: "alspell", phrase: "spelling: finance → financial, benefit → beneficial", ru: "commercial, partial, essential, artificial" },
  { id: "y", phrase: "-y / -ily: lucky → luckily, healthy", ru: "noisy, sleepy, easily" },
  { id: "yonly", phrase: "only -y: sunny, rainy, icy, wealthy", ru: "cloudy, dirty, risky, snowy" },
  { id: "yspell", phrase: "anger → angry, hunger → hungry", ru: "angrily, hungrily" },
  { id: "ous", phrase: "-ous: dangerous, famous, poisonous", ru: "adventurous, humorous, nervous" },
  { id: "ious", phrase: "-ion → -ious: ambitious, cautious", ru: "religious, suspicious, infectious" },
  { id: "eous", phrase: "-e → -eous: courageous, advantageous", ru: "мужественный, выгодный" },
  { id: "irreg", phrase: "anxious, numerous, precious", ru: "anxiety, number, price" },
  { id: "ly", phrase: "-ly: daily, monthly, yearly, worldly", ru: "и прилагательное, и наречие" },
  { id: "less", phrase: "-ful / -less: delightful, hopeless, childless", ru: "из Unit 2" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "hood", t: "I had a very happy {{*childhood|childish|childless}}." },
      { id: "hood", t: "{{*Parenthood|Parental|Parents}} can be hard, but it's wonderful." },
      { id: "al", t: "Four people died in a {{*fatal|fated|fateful}} accident." },
      { id: "al", t: "If you need {{*additional|addition|additive}} information, call us." },
      { id: "alspell", t: "He has {{*financial|finance|financeful}} problems." },
      { id: "alspell", t: "Fresh air is {{*beneficial|benefitful|benefit}} to your health." },
      { id: "y", t: "{{*Luckily|Lucky|Luck}}, nobody was hurt." },
      { id: "y", t: "Eat {{*healthy|healthily|health}} food." },
      { id: "yonly", t: "It was a {{*sunny|sunful|sunly}} day, so we went to the beach." },
      { id: "yonly", t: "Be careful – the roads are {{*icy|iced|iceful}}." },
      { id: "yspell", t: "Local residents are {{*angry|angery|angerly}} about the new road." },
      { id: "ous", t: "Some snakes are {{*poisonous|poisonful|poisony}}." },
      { id: "ous", t: "He likes {{*adventurous|adventureful|adventural}} holidays." },
      { id: "ious", t: "She's very {{*ambitious|ambitionous|ambitionful}} – she wants to be a director." },
      { id: "ious", t: "Cross the road {{*cautiously|cautionly|cautionally}}." },
      { id: "eous", t: "It was {{*courageous|couragous|courageful}} of her to jump into the river." },
      { id: "irreg", t: "{{*Numerous|Numberous|Numeral}} accidents have happened on this road." },
      { id: "irreg", t: "I'm {{*anxious|anxietous|anxiety}} about my exam results." },
      { id: "ly", t: "I get paid {{*monthly|monthful|monthy}}." },
      { id: "ly", t: "He crosses the road on a {{*daily|dayly|dayful}} basis." }
    ] },
  { type: "mcq", title: "Odd one out", short: "Odd one out", instr: "One word in each group does not exist. Tap it.",
    items: [
      { id: "hood", q: "childhood · adulthood · ?", o: ["teacherhood", "boyhood", "neighbourhood"] },
      { id: "al", q: "national · emotional · ?", o: ["happinal", "personal", "traditional"] },
      { id: "alspell", q: "commercial · financial · ?", o: ["benefital", "essential", "artificial"] },
      { id: "yonly", q: "sunny · rainy · ?", o: ["sunful", "cloudy", "snowy"] },
      { id: "ous", q: "famous · dangerous · ?", o: ["happous", "nervous", "humorous"] },
      { id: "ious", q: "ambitious · cautious · ?", o: ["actionious", "religious", "suspicious"] },
      { id: "irreg", q: "anxious · numerous · ?", o: ["pricous", "precious", "courageous"] },
      { id: "ly", q: "daily · monthly · ?", o: ["houry", "yearly", "weekly"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals.",
    items: [
      { id: "al", t: "Four people died in a [[fatal]] ^FATE^ accident due to the [[icy#yonly]] ^ICE^ roads." },
      { id: "yspell", t: "Local people are [[angry]] ^ANGER^ because [[numerous#irreg]] ^NUMBER^ accidents have happened there." },
      { id: "al", t: "If you require [[additional]] ^ADDITION^ information, contact us." },
      { id: "less", t: "I woke up happy because it was a [[delightful]] ^DELIGHT^, [[sunny#yonly]] ^SUN^ day." },
      { id: "y", t: "The [[rainy#yonly]] ^RAIN^ days were over and, [[luckily]] ^LUCK^, summer was near." },
      { id: "ly", t: "I get paid [[monthly]] ^MONTH^, which puts pressure on me [[financially#alspell]] ^FINANCE^." },
      { id: "less", t: "I'm [[hopeless]] ^HOPE^ at saving money." },
      { id: "ly", t: "Phil crosses the main road on a [[daily]] ^DAY^ basis." },
      { id: "ious", t: "He always crosses [[cautiously]] ^CAUTION^, looking both ways." },
      { id: "hood", t: "[[Parenthood]] ^PARENT^ can be a wonderful experience." },
      { id: "less", t: "More and more couples choose to remain [[childless]] ^CHILD^." },
      { id: "al", t: "I'm sorry – I didn't hurt you [[intentionally]] ^INTENTION^." },
      { id: "ous", t: "David liked [[adventurous]] ^ADVENTURE^ holidays until a [[poisonous]] ^POISON^ snake bit him." },
      { id: "eous", t: "The firefighter's [[courageous]] ^COURAGE^ actions saved three lives." },
      { id: "irreg", t: "This ring is very [[precious]] ^PRICE^ to me." },
      { id: "hood", t: "We live in a quiet [[neighbourhood/neighborhood]] ^NEIGHBOUR^." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form correct?",
    items: [
      { id: "yonly", t: "It's a very rainful day.", ok: false, fix: "It's a very rainy day." },
      { id: "hood", t: "I spent my childhood in Siberia.", ok: true },
      { id: "alspell", t: "This plan is financeal.", ok: false, fix: "This is a financial plan." },
      { id: "ous", t: "Climbing without a rope is dangerous.", ok: true },
      { id: "ious", t: "Be cautionous on the ice!", ok: false, fix: "Be cautious on the ice!" },
      { id: "irreg", t: "She was anxiety about the test.", ok: false, fix: "She was anxious about the test." },
      { id: "ly", t: "The newspaper comes out daily.", ok: true },
      { id: "eous", t: "It was a couragous decision.", ok: false, fix: "It was a courageous decision." },
      { id: "yspell", t: "The dog looked at the food hungrily.", ok: true },
      { id: "al", t: "This is a traditional Russian dish.", ok: true }
    ] },
  { type: "gaps", title: "Exam text: Growing up in the country", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Exam style: write the correct form of the word in capitals.",
    items: [
      { t: "I spent my [[childhood#hood]] ^CHILD^ in a small village in the north. Life there was simple but [[delightful#less]] ^DELIGHT^. Winters were long and [[snowy#yonly]] ^SNOW^, and the roads were often [[icy#yonly]] ^ICE^, so we walked to school [[cautiously#ious]] ^CAUTION^. My parents were not [[wealthy#yonly]] ^WEALTH^, but we never felt poor. Every summer, my [[adventurous#ous]] ^ADVENTURE^ older brother and I explored the forest. Once we found a [[poisonous#ous]] ^POISON^ mushroom and, [[luckily#y]] ^LUCK^, we didn't eat it! Our grandmother taught us many [[traditional#al]] ^TRADITION^ songs. Those memories are very [[precious#irreg]] ^PRICE^ to me." }
    ] }
];
