// TITLE: Arthritis
// EYEBROW: Use of English B2 · Unit 3 · Examination Practice B (Section 2)
// SUB: Ten word families from the word formation text “Arthritis”. Five drills, ending with a new exam-style text.
// BOARD: Your word families
const META = { ls: "uoe-b2-u3-arthritis" };
const P = [
  { id: "essence", phrase: "ESSENCE → essential", ru: "необходимый, существенный" },
  { id: "health", phrase: "HEALTH → healthy", ru: "здоровый (unhealthy, healthily)" },
  { id: "child", phrase: "CHILD → childhood", ru: "детство (childish, childless)" },
  { id: "tradition", phrase: "TRADITION → traditional", ru: "традиционный" },
  { id: "ambition", phrase: "AMBITION → ambitious", ru: "амбициозный, целеустремлённый" },
  { id: "artifice", phrase: "ARTIFICE → artificial", ru: "искусственный" },
  { id: "pain", phrase: "PAIN → painful", ru: "болезненный (painless)" },
  { id: "benefit", phrase: "BENEFIT → beneficial", ru: "полезный, благотворный" },
  { id: "cost", phrase: "COST → costly", ru: "дорогостоящий" },
  { id: "anxious", phrase: "ANXIOUS → anxiously", ru: "с тревогой, с нетерпением" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "essence", t: "Water is {{*essential|essence|essentially}} for life." },
      { id: "health", t: "Fruit and vegetables are part of a {{*healthy|health|healthily}} diet." },
      { id: "child", t: "I spent my {{*childhood|childish|children}} in Kazan." },
      { id: "tradition", t: "Pancakes are a {{*traditional|tradition|traditionally}} Russian dish." },
      { id: "ambition", t: "She's very {{*ambitious|ambition|ambitiously}} – she wants to be president." },
      { id: "artifice", t: "These flowers aren't real – they're {{*artificial|artifice|artificially}}." },
      { id: "pain", t: "My knee is very {{*painful|pain|painless}} when I walk." },
      { id: "benefit", t: "Swimming is {{*beneficial|benefit|beneficially}} for your back." },
      { id: "cost", t: "Repairing the old car would be too {{*costly|cost|costing}}." },
      { id: "anxious", t: "We waited {{*anxiously|anxious|anxiety}} for the results." },
      { id: "health", t: "Eating too much sugar is {{*unhealthy|healthless|unhealth}}." },
      { id: "anxious", t: "I'm {{*anxious|anxiously|anxiety}} about my exam." }
    ] },
  { type: "mcq", title: "Which part of speech?", short: "Part of speech", instr: "Tap the word that is the part of speech in capitals.",
    items: [
      { id: "essence", q: "Which word is an ADJECTIVE?", o: ["essential", "essence", "essentially", "essences"] },
      { id: "child", q: "Which word is a NOUN for a period of life?", o: ["childhood", "childish", "childless", "childlike"] },
      { id: "tradition", q: "Which word is an ADVERB?", o: ["traditionally", "traditional", "tradition", "traditions"] },
      { id: "ambition", q: "Which word is an ADJECTIVE?", o: ["ambitious", "ambition", "ambitiously", "ambitions"] },
      { id: "artifice", q: "Which word is an ADJECTIVE?", o: ["artificial", "artifice", "artificially", "art"] },
      { id: "benefit", q: "Which word is an ADJECTIVE?", o: ["beneficial", "benefit", "beneficially", "benefits"] },
      { id: "cost", q: "Which word is an ADJECTIVE?", o: ["costly", "cost", "costs", "costing"] },
      { id: "anxious", q: "Which word is a NOUN?", o: ["anxiety", "anxious", "anxiously", "anxiousful"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Each family appears twice.",
    items: [
      { id: "essence", t: "A good night's sleep is [[essential]] ^ESSENCE^ before an exam." },
      { id: "essence", t: "The two plans are [[essentially]] ^ESSENCE^ the same." },
      { id: "health", t: "My grandmother is 90 but very [[healthy]] ^HEALTH^." },
      { id: "health", t: "Fast food is very [[unhealthy]] ^HEALTH^." },
      { id: "child", t: "He had a happy [[childhood]] ^CHILD^ by the sea." },
      { id: "child", t: "Stop being so [[childish]] ^CHILD^ – you're fifteen!" },
      { id: "tradition", t: "We always have [[traditional]] ^TRADITION^ food at New Year." },
      { id: "tradition", t: "[[Traditionally]] ^TRADITION^, the bride wears white." },
      { id: "ambition", t: "[[Ambitious]] ^AMBITION^ students work hard to get into top universities." },
      { id: "ambition", t: "Her [[ambition]] ^AMBITIOUS^ is to climb Everest." },
      { id: "artifice", t: "This juice contains no [[artificial]] ^ARTIFICE^ colours." },
      { id: "pain", t: "The injection wasn't [[painful]] ^PAIN^ at all." },
      { id: "pain", t: "The dentist removed my tooth [[painlessly]] ^PAIN^." },
      { id: "benefit", t: "Regular exercise is very [[beneficial]] ^BENEFIT^ for older people." },
      { id: "cost", t: "Making a mistake like that could be [[costly]] ^COST^." },
      { id: "anxious", t: "The fans waited [[anxiously]] ^ANXIOUS^ for the final whistle." },
      { id: "anxious", t: "Many students suffer from [[anxiety]] ^ANXIOUS^ before exams." },
      { id: "cost", t: "How much does a ticket [[cost]] ^COSTLY^?" }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "essence", t: "Good shoes are essence for hiking.", ok: false, fix: "Good shoes are essential for hiking." },
      { id: "health", t: "She eats very healthy food.", ok: true },
      { id: "child", t: "I loved my childish in the village.", ok: false, fix: "I loved my childhood in the village." },
      { id: "tradition", t: "This is a traditional song.", ok: true },
      { id: "ambition", t: "He's an ambition young man.", ok: false, fix: "He's an ambitious young man." },
      { id: "artifice", t: "The pitch has artificial grass.", ok: true },
      { id: "pain", t: "My back is very pain today.", ok: false, fix: "My back is very painful today." },
      { id: "benefit", t: "Fresh air is beneficial to children.", ok: true },
      { id: "cost", t: "The repairs were very cost.", ok: false, fix: "The repairs were very costly." },
      { id: "anxious", t: "She looked at the clock anxiously.", ok: true }
    ] },
  { type: "gaps", title: "Exam text: Healthy bones", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "Calcium is [[essential#essence]] ^ESSENCE^ for strong bones. To stay [[healthy#health]] ^HEALTH^, we need it all our lives, but it is especially important in [[childhood#child]] ^CHILD^, when bones are still growing. [[Traditional#tradition]] ^TRADITION^ sources of calcium are milk and cheese, but green vegetables also contain it. Some [[ambitious#ambition]] ^AMBITION^ scientists are trying to create [[artificial#artifice]] ^ARTIFICE^ bone for people with injuries. Broken bones can be very [[painful#pain]] ^PAIN^, so prevention is better than cure. Regular walking is [[beneficial#benefit]] ^BENEFIT^ because it makes bones stronger. Treatment for weak bones can be [[costly#cost]] ^COST^, so many doctors are [[anxiously#anxious]] ^ANXIOUS^ asking people to change their diets now." }
    ] }
];
