// TITLE: Heroic, Musician, Boredom
// EYEBROW: Use of English B2 · Unit 4 · Derivatives
// SUB: Verbs in -ise, adjectives in -ic and -ical, people in -ist and -ian, nouns in -dom. Fourteen word patterns, five drills, ending with an exam-style text.
// BOARD: Your word patterns
const META = { ls: "uoe-b2-u4-deriv" };
const P = [
  { id: "ise", phrase: "-ise: apologise, memorise, summarise", ru: "apology → apologise, memory → memorise" },
  { id: "iseirreg", phrase: "criticise, emphasise", ru: "criticism, emphasis" },
  { id: "ice", phrase: "-ice → -ise: advise, devise, practise", ru: "advice (n) / advise (v)" },
  { id: "ic", phrase: "-ic / -ically: heroic, enthusiastic", ru: "hero → heroic → heroically" },
  { id: "etic", phrase: "-y → -etic: energetic, sympathetic", ru: "energy → energetic" },
  { id: "icical", phrase: "-ic or -ical (same meaning): ironic(al), symbolic(al)", ru: "оба варианта верны" },
  { id: "ist", phrase: "-ist: artist, biologist, scientist", ru: "человек (профессия)" },
  { id: "ian", phrase: "-ian: musician, politician, mathematician", ru: "человек (профессия)" },
  { id: "ical", phrase: "-ical / -ic: biological, political, scientific", ru: "прилагательное от предмета" },
  { id: "econ", phrase: "economic / economical", ru: "экономический / экономный" },
  { id: "hist", phrase: "historic / historical", ru: "исторически важный / исторический" },
  { id: "phys", phrase: "physicist / physician", ru: "физик / врач" },
  { id: "dom", phrase: "-dom: boredom, kingdom, stardom", ru: "скука, королевство, слава" },
  { id: "domadj", phrase: "free → freedom, wise → wisdom", ru: "свобода, мудрость" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "ise", t: "You must {{*apologise|apology|apologetic}} for your rude behaviour." },
      { id: "ise", t: "We had to {{*memorise|memory|memorial}} fifty words for the test." },
      { id: "iseirreg", t: "Don't {{*criticise|criticism|critic}} her – she did her best." },
      { id: "iseirreg", t: "The teacher {{*emphasised|emphasis|emphatic}} the importance of reading." },
      { id: "ice", t: "The doctor {{*advised|advice|adviced}} me to rest." },
      { id: "ice", t: "Can you give me some {{*advice|advise|advices}}?" },
      { id: "ice", t: "You need to {{*practise|practice|practical}} every day." },
      { id: "ic", t: "The firefighter was given a medal for his {{*heroic|hero|heroical}} rescue." },
      { id: "ic", t: "Melina was very {{*enthusiastic|enthusiast|enthusiasm}} about her new scooter." },
      { id: "etic", t: "Howard is a very {{*energetic|energical|energy}} person." },
      { id: "etic", t: "My friend was very {{*sympathetic|sympathy|sympathical}} when my cat died." },
      { id: "icical", t: "The play we saw was very {{*symbolic|symbol|symbolise}}." },
      { id: "ist", t: "The young {{*artist|art|artistic}} exhibited her paintings in a gallery." },
      { id: "ian", t: "The {{*politician|politic|politics}} is trying to find a solution." },
      { id: "ian", t: "My uncle is a {{*musician|musicist|musical}} – he plays in an orchestra." },
      { id: "ical", t: "He needed {{*psychological|psychology|psychologist}} help after the accident." },
      { id: "econ", t: "This small car is very {{*economical|economic|economy}} – it uses little petrol." },
      { id: "econ", t: "The country has serious {{*economic|economical|economist}} problems." },
      { id: "hist", t: "The government should protect {{*historic|historical|history}} buildings." },
      { id: "hist", t: "She writes {{*historical|historic|history}} novels set in the 18th century." },
      { id: "phys", t: "You should see a {{*physician|physicist|physics}} about that cough." },
      { id: "phys", t: "Einstein was a famous {{*physicist|physician|physical}}." },
      { id: "dom", t: "I'm going to die of {{*boredom|bored|boring}}!" },
      { id: "domadj", t: "Everyone has the right to {{*freedom|free|freely}} of speech." }
    ],
    note: "advice (noun) / advise (verb); practice (noun) / practise (verb, British). economic = about the economy; economical = saving money. historic = important in history; historical = about the past." },
  { type: "mcq", title: "Odd one out", short: "Odd one out", instr: "One word in each group does not exist. Tap it.",
    items: [
      { id: "ise", q: "apologise · memorise · ?", o: ["happise", "summarise", "symbolise"] },
      { id: "ic", q: "heroic · democratic · ?", o: ["teacheric", "diplomatic", "optimistic"] },
      { id: "etic", q: "energetic · sympathetic · ?", o: ["happetic", "apologetic", "energetically"] },
      { id: "ist", q: "artist · biologist · ?", o: ["musicist", "chemist", "psychologist"] },
      { id: "ian", q: "musician · politician · ?", o: ["scientian", "mathematician", "grammarian"] },
      { id: "dom", q: "boredom · kingdom · ?", o: ["happydom", "stardom", "freedom"] },
      { id: "ical", q: "biological · political · ?", o: ["scientifical", "chemical", "logical"] },
      { id: "ice", q: "advise · devise · ?", o: ["practicise", "practise", "advice"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals.",
    items: [
      { id: "ic", t: "Melina was very [[enthusiastic]] ^ENTHUSIAST^ about her new scooter." },
      { id: "ian", t: "The [[politician]] ^POLITICS^ is trying to find a [[diplomatic#ic]] ^DIPLOMAT^ solution." },
      { id: "etic", t: "Howard is a very [[energetic]] ^ENERGY^ person." },
      { id: "ise", t: "We had to [[memorise/memorize]] ^MEMORY^ a lot of words for the spelling test." },
      { id: "hist", t: "Personally, I think the government should preserve the [[historic]] ^HISTORY^ buildings." },
      { id: "ise", t: "You must [[apologise/apologize]] ^APOLOGY^ to him for your rude behaviour." },
      { id: "ical", t: "John had to get [[psychological]] ^PSYCHOLOGY^ help after his mother's death." },
      { id: "ic", t: "The firefighter was given a medal for the [[heroic]] ^HERO^ rescue." },
      { id: "icical", t: "The play we saw at the theatre was [[symbolic/symbolical]] ^SYMBOL^." },
      { id: "ist", t: "The up-and-coming [[artist]] ^ART^ finally exhibited her paintings." },
      { id: "ical", t: "Children should be [[medically]] ^MEDICINE^ examined at least twice a year." },
      { id: "dom", t: "I feel I'm going to die of [[boredom]] ^BORE^." },
      { id: "iseirreg", t: "The newspaper [[criticised/criticized]] ^CRITICISM^ the new law." },
      { id: "ist", t: "My sister wants to be a marine [[biologist]] ^BIOLOGY^." },
      { id: "ian", t: "My cousin is a great [[mathematician]] ^MATHEMATICS^." },
      { id: "domadj", t: "With age comes [[wisdom]] ^WISE^." },
      { id: "etic", t: "He was very [[apologetic]] ^APOLOGY^ about being late." },
      { id: "econ", t: "Buying in bulk is more [[economical]] ^ECONOMY^ for big families." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form correct?",
    items: [
      { id: "ice", t: "Can you advice me what to do?", ok: false, fix: "Can you advise me what to do?" },
      { id: "ist", t: "My aunt is a musicist.", ok: false, fix: "My aunt is a musician." },
      { id: "phys", t: "My grandfather was a physician – he treated many patients.", ok: true },
      { id: "econ", t: "The country is in an economical crisis.", ok: false, fix: "The country is in an economic crisis." },
      { id: "hist", t: "This is a historical moment – it will change everything!", ok: false, fix: "This is a historic moment." },
      { id: "dom", t: "The film was so boring – I nearly died of boredom.", ok: true },
      { id: "ic", t: "She's very enthusiastic about her new job.", ok: true },
      { id: "etic", t: "He's a very energical boy.", ok: false, fix: "He's a very energetic boy." },
      { id: "ise", t: "Can you summarise the story in three sentences?", ok: true },
      { id: "ical", t: "There was a scientifical explanation.", ok: false, fix: "There was a scientific explanation." }
    ] },
  { type: "gaps", title: "Exam text: A musical family", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Exam style: write the correct form of the word in capitals.",
    items: [
      { t: "Everyone in my family is [[artistic#ical]] ^ART^. My mother is a professional [[musician#ian]] ^MUSIC^, and my father is a [[scientist#ist]] ^SCIENCE^ who writes poems in his free time. As a child, I found it hard to [[memorise/memorize#ise]] ^MEMORY^ long pieces for the piano, and my teacher often [[criticised/criticized#iseirreg]] ^CRITICISM^ my playing. But my parents were always [[sympathetic#etic]] ^SYMPATHY^ and [[enthusiastic#ic]] ^ENTHUSIAST^. They [[advised#ice]] ^ADVICE^ me to [[practise/practice#ice]] ^PRACTICE^ a little every day instead of a lot once a week. Slowly, my [[boredom#dom]] ^BORE^ disappeared and I started to love music. Today I study at a [[historic#hist]] ^HISTORY^ music school in Moscow." }
    ] }
];
