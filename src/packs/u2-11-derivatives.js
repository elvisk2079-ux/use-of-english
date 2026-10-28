// TITLE: Careful or Careless?
// EYEBROW: Use of English B2 · Unit 2 · Derivatives
// SUB: Adjectives in -ful and -less, adverbs in -fully and -lessly, nouns in -ship. Fourteen word patterns, five drills, ending with an exam-style text.
// BOARD: Your word patterns
const META = { ls: "uoe-b2-u2-deriv" };
const P = [
  { id: "care", phrase: "careful / careless", ru: "carefully / carelessly" },
  { id: "colour", phrase: "colourful / colourless", ru: "яркий / бесцветный" },
  { id: "harm", phrase: "harmful / harmless", ru: "вредный / безвредный" },
  { id: "hope", phrase: "hopeful / hopeless", ru: "полный надежд / безнадёжный" },
  { id: "pain", phrase: "painful / painless", ru: "painfully / painlessly" },
  { id: "power", phrase: "powerful / powerless", ru: "мощный / бессильный" },
  { id: "use", phrase: "useful / useless", ru: "полезный / бесполезный" },
  { id: "doubt", phrase: "doubtful → doubtfully / doubtless", ru: "сомнительный → doubtless = несомненно" },
  { id: "onlyone", phrase: "beautiful, endless… (only one form)", ru: "beautiless ✗, endful ✗" },
  { id: "unful", phrase: "un- + ful: unsuccessful, unskilful, untruthful", ru: "не successless!" },
  { id: "help", phrase: "helpful / unhelpful / helpless", ru: "помогает / не помогает / беспомощный" },
  { id: "ybl", phrase: "guilty, sleepy, sensible, valuable", ru: "-y / -ble (не guiltful, sleepful)" },
  { id: "price", phrase: "pricey / priceless", ru: "дорогой / бесценный" },
  { id: "ship", phrase: "-ship: friendship, leadership…", ru: "дружба, лидерство…" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right word", short: "Choose", instr: "Tap the word that fits the meaning of the sentence.",
    items: [
      { id: "care", t: "Be {{*careful|careless}} – the floor is wet." },
      { id: "care", t: "He drove so {{*carelessly|carefully}} that he crashed into a tree." },
      { id: "colour", t: "The market was full of {{*colourful|colourless}} fruit and flowers." },
      { id: "harm", t: "Don't worry, this spider is completely {{*harmless|harmful}}." },
      { id: "harm", t: "Smoking is {{*harmful|harmless}} to your health." },
      { id: "hope", t: "I'm {{*hopeless|hopeful}} at maths – I never get the right answer." },
      { id: "pain", t: "Modern dental treatment is almost {{*painless|painful}}." },
      { id: "power", t: "This is the most {{*powerful|powerless}} computer in the shop." },
      { id: "use", t: "This old phone is {{*useless|useful}} – it doesn't even turn on." },
      { id: "doubt", t: "She will {{*doubtless|doubtful}} win the prize – she's the best in the class." },
      { id: "onlyone", t: "The view from the top was {{*beautiful|beautiless}}." },
      { id: "onlyone", t: "The journey seemed {{*endless|endful}}." },
      { id: "unful", t: "His first business was {{*unsuccessful|successless}}, but the second made him rich." },
      { id: "help", t: "The shop assistant was so {{*unhelpful|helpless}} that I left." },
      { id: "help", t: "Without its mother, the baby bird was completely {{*helpless|unhelpful}}." },
      { id: "ybl", t: "The jury found him {{*guilty|guiltful}} of stealing the car." },
      { id: "ybl", t: "It was {{*sensible|senseless}} of you to bring a coat." },
      { id: "price", t: "This old family photo is {{*priceless|pricey}} to me." },
      { id: "price", t: "The restaurant is nice but a bit {{*pricey|priceless}}." },
      { id: "ship", t: "Our team won the {{*championship|champion}} last year." }
    ] },
  { type: "mcq", title: "Odd one out", short: "Odd one out", instr: "One word in each group does not exist. Tap it.",
    items: [
      { id: "onlyone", q: "beautiful · beautifully · ?", o: ["beautiless", "beautiful", "beautifully"] },
      { id: "onlyone", q: "endless · endlessly · ?", o: ["endful", "endless", "endlessly"] },
      { id: "unful", q: "successful · unsuccessful · ?", o: ["successless", "successful", "unsuccessful"] },
      { id: "unful", q: "skilful · unskilful · ?", o: ["skilless", "skilful", "unskilful"] },
      { id: "ybl", q: "guilty · guiltless · ?", o: ["guiltful", "guilty", "guiltless"] },
      { id: "ybl", q: "sleepy · sleepless · ?", o: ["sleepful", "sleepy", "sleepless"] },
      { id: "ybl", q: "valuable · valueless · ?", o: ["valueful", "valuable", "valueless"] },
      { id: "help", q: "helpful · helpless · ?", o: ["unhelpless", "helpful", "unhelpful"] },
      { id: "onlyone", q: "homeless · ?", o: ["homeful", "homeless", "homelessness"] },
      { id: "onlyone", q: "grateful · gratefully · ?", o: ["grateless", "grateful", "gratefully"] },
      { id: "ship", q: "friendship · leadership · ?", o: ["teachership", "friendship", "leadership", "membership"] },
      { id: "doubt", q: "doubtful · doubtfully · ?", o: ["undoubtful", "doubtless", "doubtful", "doubtfully"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Decide: positive or negative? adjective or adverb?",
    items: [
      { id: "care", t: "Please carry the glasses [[carefully]] ^CARE^." },
      { id: "care", t: "I was fined for driving [[carelessly]] ^CARE^." },
      { id: "colour", t: "I bought a [[colourful/colorful]] ^COLOUR^ dress for the party." },
      { id: "harm", t: "Too much sun can be [[harmful]] ^HARM^ to your skin." },
      { id: "hope", t: "Doctors are [[hopeful]] ^HOPE^ that she will recover soon." },
      { id: "pain", t: "The new treatment removes teeth [[painlessly]] ^PAIN^." },
      { id: "power", t: "The performance was so [[powerful]] ^POWER^ that everyone stood up and clapped." },
      { id: "use", t: "This map is [[useless]] ^USE^ – it's twenty years old!" },
      { id: "use", t: "Thank you for the advice – it was very [[useful]] ^USE^." },
      { id: "doubt", t: "He will [[doubtless]] ^DOUBT^ arrive late, as usual." },
      { id: "onlyone", t: "The model was [[beautifully]] ^BEAUTY^ dressed in a long gown." },
      { id: "onlyone", t: "There are thousands of [[homeless]] ^HOME^ people in big cities." },
      { id: "unful", t: "The plan was [[unsuccessful]] ^SUCCESS^, so we tried again." },
      { id: "unful", t: "He has [[successfully]] ^SUCCESS^ finished his studies." },
      { id: "help", t: "Your directions were [[unhelpful]] ^HELP^ – we still got lost." },
      { id: "ybl", t: "I feel really [[sleepy]] ^SLEEP^ – I went to bed at 2 am." },
      { id: "ybl", t: "The witness's statement didn't help at all – it was [[valueless/useless]] ^VALUE^." },
      { id: "ybl", t: "The man was found [[guilty]] ^GUILT^ of shoplifting." },
      { id: "ship", t: "The two friends started a business [[partnership]] ^PARTNER^." },
      { id: "ship", t: "The team got [[sponsorship]] ^SPONSOR^ from a big company." },
      { id: "harm", t: "It's just a [[harmless]] ^HARM^ little dog. There's no need to panic." },
      { id: "onlyone", t: "My street is [[peaceful]] ^PEACE^ because it's far from the main road." }
    ],
    note: "Check the meaning: success → successful, but the opposite is UNsuccessful. help → helpful ≠ unhelpful (doesn't help) ≠ helpless (needs help)." },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the word correct?",
    items: [
      { id: "onlyone", t: "What a beautiless picture!", ok: false, fix: "What an ugly picture! (beautiless does not exist)" },
      { id: "unful", t: "The attempt was successless.", ok: false, fix: "The attempt was unsuccessful." },
      { id: "ybl", t: "I had a sleepless night.", ok: true },
      { id: "ybl", t: "He felt guiltful about lying.", ok: false, fix: "He felt guilty about lying." },
      { id: "price", t: "This diamond ring is priceless.", ok: true },
      { id: "price", t: "This café is too priceless for students – a coffee costs 600 roubles.", ok: false, fix: "This café is too pricey for students." },
      { id: "help", t: "The baby is helpless without its parents.", ok: true },
      { id: "care", t: "She is a very careful driver.", ok: true },
      { id: "use", t: "My dictionary is very useless – I use it every day!", ok: false, fix: "My dictionary is very useful." },
      { id: "ship", t: "Their friendship lasted fifty years.", ok: true },
      { id: "hope", t: "I'm hopeless at cooking.", ok: true },
      { id: "pain", t: "The injection was completely painful – I didn't feel a thing.", ok: false, fix: "The injection was completely painless." }
    ] },
  { type: "gaps", title: "Exam text: My first job", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Exam style: write the correct form of the word in capitals.",
    items: [
      { t: "My first job was in a small café. On my first day I felt completely [[powerless#power]] ^POWER^ – I didn't know how anything worked. I tried to carry the cups [[carefully#care]] ^CARE^, but I dropped two of them. The manager, Mrs Kent, was very [[helpful#help]] ^HELP^ and showed me what to do. She gave me some [[useful#use]] ^USE^ advice: “Smile, and never argue with customers!” At first I felt [[hopeless#hope]] ^HOPE^, but after a week things got better. The customers were mostly friendly and [[harmless#harm]] ^HARM^, although one old man complained about everything. Our [[friendship#ship]] ^FRIEND^ started when I learned his favourite cake. The job was [[doubtless#doubt]] ^DOUBT^ hard work, but it taught me a lot. After a month I had [[successfully#unful]] ^SUCCESS^ finished my training, and I left with [[priceless#price]] ^PRICE^ memories." }
    ] }
];
