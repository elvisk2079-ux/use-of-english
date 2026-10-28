// TITLE: Word Families
// EYEBROW: Use of English B2 · Unit 1 · Derivatives A–C
// SUB: Is it a noun, a verb, an adjective or an adverb? Fifteen word families from Unit 1. First decide what the sentence needs, then build the word.
// BOARD: Your word families
const META = { ls: "uoe-b2-u1-deriv" };
const P = [
  { id: "attract", phrase: "attraction (n)", ru: "attract → attractive → attraction" },
  { id: "anger", phrase: "angry (adj)", ru: "anger → angry → angrily" },
  { id: "safe", phrase: "safely (adv)", ru: "safe → safety → safely" },
  { id: "differ", phrase: "difference (n)", ru: "differ → different → difference → differently" },
  { id: "photo", phrase: "photographer (n)", ru: "photograph → photography → photographer" },
  { id: "act", phrase: "active (adj)", ru: "act → action → active → activity" },
  { id: "success", phrase: "successfully (adv)", ru: "succeed → success → successful → successfully" },
  { id: "comfort", phrase: "comfortable (adj)", ru: "comfort → comfortable → comfortably" },
  { id: "bright", phrase: "brighten (v)", ru: "bright → brighten → brightly" },
  { id: "danger", phrase: "dangerous (adj)", ru: "danger → endanger → dangerous" },
  { id: "peace", phrase: "peaceful (adj)", ru: "peace → peaceful → peacefully" },
  { id: "rob", phrase: "robber (n)", ru: "rob → robber → robbery" },
  { id: "solve", phrase: "solution (n)", ru: "solve → solution" },
  { id: "happy", phrase: "happily (adv)", ru: "happy → happiness → happily → unhappy" },
  { id: "sleep", phrase: "sleepy (adj)", ru: "sleep → sleepy → asleep → sleepless" }
];
const POS = "{{noun|verb|adjective|adverb}}";
const DRILLS = [
  { type: "mcq", title: "Part of speech", short: "Part of speech", instr: "What part of speech is the word in CAPITALS?",
    items: [
      { id: "attract", q: "The museum is the city's main ATTRACTION.", o: ["noun", "verb", "adjective", "adverb"] },
      { id: "attract", q: "What an ATTRACTIVE garden!", o: ["adjective", "noun", "verb", "adverb"] },
      { id: "anger", q: "She shouted ANGRILY at the dog.", o: ["adverb", "adjective", "noun", "verb"] },
      { id: "safe", q: "Wear a helmet for your own SAFETY.", o: ["noun", "adjective", "adverb", "verb"] },
      { id: "differ", q: "Our opinions DIFFER on this question.", o: ["verb", "noun", "adjective", "adverb"] },
      { id: "act", q: "Swimming is my favourite ACTIVITY.", o: ["noun", "adjective", "verb", "adverb"] },
      { id: "comfort", q: "These shoes are very COMFORTABLE.", o: ["adjective", "adverb", "noun", "verb"] },
      { id: "bright", q: "Flowers BRIGHTEN any room.", o: ["verb", "adjective", "noun", "adverb"] },
      { id: "danger", q: "Smoking can put your health in DANGER.", o: ["noun", "adjective", "verb", "adverb"] },
      { id: "peace", q: "The baby was sleeping PEACEFULLY.", o: ["adverb", "adjective", "noun", "verb"] },
      { id: "rob", q: "The police caught the ROBBER.", o: ["noun", "verb", "adjective", "adverb"] },
      { id: "happy", q: "Money can't buy HAPPINESS.", o: ["noun", "adjective", "adverb", "verb"] }
    ],
    note: "Verbs show actions or situations; nouns name people, things and ideas; adjectives describe nouns; adverbs describe verbs, adjectives or whole sentences. Most adverbs = adjective + -ly." },
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "attract", t: "The pandas are the zoo's most popular {{*attraction|attractive|attractively}}." },
      { id: "anger", t: "Dad was very {{*angry|anger|angrily}} when he saw the broken window." },
      { id: "safe", t: "Please drive {{*safely|safe|safety}} – the roads are icy." },
      { id: "differ", t: "Can you see the {{*difference|different|differently}} between these two pictures?" },
      { id: "photo", t: "She works as a {{*photographer|photography|photographic}} for a magazine." },
      { id: "act", t: "My grandma is 80 but still very {{*active|activity|acting}}." },
      { id: "success", t: "He {{*successfully|success|successful}} passed his driving test." },
      { id: "comfort", t: "Make yourself {{*comfortable|comfort|comfortably}} – dinner is almost ready." },
      { id: "bright", t: "A new lamp will {{*brighten|bright|brightly}} up the corner." },
      { id: "danger", t: "It's {{*dangerous|danger|dangerously}} to swim here after dark." },
      { id: "peace", t: "We had a {{*peaceful|peace|peacefully}} weekend in the country." },
      { id: "rob", t: "The {{*robber|robbery|rob}} escaped through the back door." },
      { id: "solve", t: "Nobody could find a {{*solution|solve|solving}} to the problem." },
      { id: "happy", t: "They lived {{*happily|happy|happiness}} ever after." },
      { id: "sleep", t: "I feel really {{*sleepy|sleep|sleepless}} after that big lunch." }
    ] },
  { type: "gaps", title: "Two steps: what and how", short: "Two steps", shuffleOptions: false, instr: "Step 1: tap the part of speech the gap needs. Step 2: write the correct form of the word in capitals.",
    items: [
      { id: "comfort", t: "This armchair is so {{noun|verb|*adjective|adverb}} [[comfortable]] ^COMFORT^." },
      { id: "bright", t: "Light colours will {{noun|*verb|adjective|adverb}} [[brighten]] ^BRIGHT^ up your bedroom." },
      { id: "danger", t: "It is {{noun|verb|*adjective|adverb}} [[dangerous]] ^DANGER^ to use your phone while driving." },
      { id: "peace", t: "Sunday morning is the most {{noun|verb|*adjective|adverb}} [[peaceful]] ^PEACE^ time of the week." },
      { id: "rob", t: "The {{*noun|verb|adjective|adverb}} [[robber/robbers]] ^ROB^ took all the jewellery." },
      { id: "solve", t: "We need a quick {{*noun|verb|adjective|adverb}} [[solution]] ^SOLVE^ to this problem." },
      { id: "happy", t: "They were {{noun|verb|adjective|*adverb}} [[happily]] ^HAPPY^ married for fifty years." },
      { id: "sleep", t: "The baby looks {{noun|verb|*adjective|adverb}} [[sleepy]] ^SLEEP^ – it's time for bed." },
      { id: "attract", t: "The new shopping centre is a big {{*noun|verb|adjective|adverb}} [[attraction]] ^ATTRACT^ for tourists." },
      { id: "success", t: "The concert was very {{noun|verb|*adjective|adverb}} [[successful]] ^SUCCESS^ – all the tickets were sold." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "safe", t: "Please drive safe.", ok: false, fix: "Please drive safely." },
      { id: "anger", t: "Why are you so angry with me?", ok: true },
      { id: "differ", t: "There is a big different between the two cities.", ok: false, fix: "There is a big difference between the two cities." },
      { id: "photo", t: "My cousin is a professional photographer.", ok: true },
      { id: "act", t: "Running is a healthy active.", ok: false, fix: "Running is a healthy activity." },
      { id: "success", t: "The plan worked success.", ok: false, fix: "The plan worked successfully." },
      { id: "comfort", t: "This sofa is very comfortable.", ok: true },
      { id: "danger", t: "Climbing without a rope is danger.", ok: false, fix: "Climbing without a rope is dangerous." },
      { id: "peace", t: "It was a peaceful evening by the lake.", ok: true },
      { id: "solve", t: "Have you found a solve to the puzzle?", ok: false, fix: "Have you found a solution to the puzzle?" },
      { id: "sleep", t: "I'm so sleepy that I can't keep my eyes open.", ok: true },
      { id: "happy", t: "The children played happy in the garden.", ok: false, fix: "The children played happily in the garden." }
    ] },
  { type: "gaps", title: "Word formation text", short: "WF text", layout: "text", keepOrder: true,
    instr: "Exam style: read the text and write the correct form of the word in capitals.",
    items: [
      { t: "Last summer we stayed in a small village by the sea. It was the most [[peaceful#peace]] ^PEACE^ place I have ever visited. Our room was simple but very [[comfortable#comfort]] ^COMFORT^. Every morning we watched the fishermen work, and my sister, who is a keen [[photographer#photo]] ^PHOTOGRAPH^, took hundreds of pictures. The main [[attraction#attract]] ^ATTRACT^ of the village is an old lighthouse. The guide told us it is [[dangerous#danger]] ^DANGER^ to climb it when it is windy, so we only went up on calm days. One night, a [[robber#rob]] ^ROB^ tried to steal a boat, but the villagers caught him. Everyone was very [[angry#anger]] ^ANGER^. In the end, the problem had a simple [[solution#solve]] ^SOLVE^: they locked the boats. We came home tired and [[sleepy#sleep]] ^SLEEP^, but we [[happily#happy]] ^HAPPY^ agreed to go back next year." }
    ] }
];
