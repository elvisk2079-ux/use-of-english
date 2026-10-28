// TITLE: An Unusual Outing
// EYEBROW: Use of English B2 · Unit 1 · Examination Practice B (Section 2)
// SUB: Ten word families from the word formation text “An Unusual Outing”. Five drills, ending with a new exam-style text.
// BOARD: Your word families
const META = { ls: "uoe-b2-u1-wf" };
const P = [
  { id: "suggest", phrase: "SUGGEST → suggestion", ru: "предложение (идея)" },
  { id: "amuse", phrase: "AMUSE → amusement", ru: "развлечение; amusement park – парк аттракционов" },
  { id: "favour", phrase: "FAVOUR → favourite", ru: "любимый" },
  { id: "noise", phrase: "NOISE → noisy", ru: "шумный" },
  { id: "normal", phrase: "NORMAL → normally", ru: "обычно" },
  { id: "luck", phrase: "LUCK → luckily", ru: "к счастью" },
  { id: "help", phrase: "HELP → helpful", ru: "полезный, отзывчивый" },
  { id: "apology", phrase: "APOLOGY → apologise", ru: "извиняться" },
  { id: "anger", phrase: "ANGER → angry", ru: "злой, сердитый" },
  { id: "decide", phrase: "DECIDE → decision", ru: "решение" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "suggest", t: "Can I make a {{*suggestion|suggest|suggestive}}? Let's eat outside." },
      { id: "amuse", t: "We spent the whole day at the {{*amusement|amusing|amused}} park." },
      { id: "favour", t: "Pizza is my {{*favourite|favour|favourable}} food." },
      { id: "noise", t: "The children were very {{*noisy|noise|noisily}} at lunch." },
      { id: "normal", t: "{{*Normally|Normal|Normality}}, I walk to school, but today I took the bus." },
      { id: "luck", t: "{{*Luckily|Lucky|Luck}}, nobody was hurt in the accident." },
      { id: "help", t: "The receptionist was very {{*helpful|help|helpless}} and gave us a map." },
      { id: "apology", t: "He {{*apologised|apology|apologetic}} for being late." },
      { id: "anger", t: "Mum was {{*angry|anger|angrily}} because I didn't call her." },
      { id: "decide", t: "Choosing a university is a big {{*decision|decide|decisive}}." },
      { id: "suggest", t: "Who {{*suggested|suggestion|suggestive}} going to the cinema?" },
      { id: "anger", t: "“Get out!” he shouted {{*angrily|angry|anger}}." }
    ] },
  { type: "mcq", title: "Which part of speech?", short: "Part of speech", instr: "Tap the word that is the part of speech in capitals.",
    items: [
      { id: "suggest", q: "Which word is a NOUN?", o: ["suggestion", "suggest", "suggestive", "suggested"] },
      { id: "amuse", q: "Which word is a NOUN?", o: ["amusement", "amusing", "amuse", "amused"] },
      { id: "noise", q: "Which word is an ADJECTIVE?", o: ["noisy", "noise", "noisily", "noiselessly"] },
      { id: "normal", q: "Which word is an ADVERB?", o: ["normally", "normal", "normality", "abnormal"] },
      { id: "luck", q: "Which word is an ADVERB?", o: ["luckily", "lucky", "luck", "unlucky"] },
      { id: "help", q: "Which word is an ADJECTIVE?", o: ["helpful", "help", "helper", "helpfully"] },
      { id: "apology", q: "Which word is a VERB?", o: ["apologise", "apology", "apologetic", "apologetically"] },
      { id: "decide", q: "Which word is a NOUN?", o: ["decision", "decide", "decisive", "decisively"] },
      { id: "anger", q: "Which word is an ADJECTIVE?", o: ["angry", "anger", "angrily", "angered"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Each family appears twice, in different forms.",
    items: [
      { id: "suggest", t: "Thank you for your [[suggestion]] ^SUGGEST^ – it's a great idea." },
      { id: "suggest", t: "The doctor [[suggested]] ^SUGGESTION^ that I should rest for a week." },
      { id: "amuse", t: "Watching the monkeys was great [[amusement]] ^AMUSE^ for the children." },
      { id: "amuse", t: "His story was so [[amusing]] ^AMUSE^ that we all laughed." },
      { id: "favour", t: "Who is your [[favourite/favorite]] ^FAVOUR^ singer?" },
      { id: "favour", t: "Can you do me a [[favour/favor]] ^FAVOURITE^ and post this letter?" },
      { id: "noise", t: "Our neighbours are so [[noisy]] ^NOISE^ – they play music all night." },
      { id: "noise", t: "The door opened [[noisily]] ^NOISE^." },
      { id: "normal", t: "[[Normally]] ^NORMAL^, the shop opens at nine, but today it opened at ten." },
      { id: "normal", t: "It's quite [[normal]] ^NORMALLY^ to feel nervous before an exam." },
      { id: "luck", t: "[[Luckily]] ^LUCK^, we found a taxi straight away." },
      { id: "luck", t: "I was very [[unlucky]] ^LUCK^ – it rained every day of my holiday." },
      { id: "help", t: "Thanks for the advice – it was really [[helpful]] ^HELP^." },
      { id: "help", t: "The baby bird was completely [[helpless]] ^HELP^ without its mother." },
      { id: "apology", t: "You should [[apologise/apologize]] ^APOLOGY^ to your sister." },
      { id: "apology", t: "I owe you an [[apology]] ^APOLOGISE^ for what I said." },
      { id: "anger", t: "She looked at me [[angrily]] ^ANGER^ and left the room." },
      { id: "anger", t: "Don't be [[angry]] ^ANGER^ with me – it wasn't my fault." },
      { id: "decide", t: "Have you made a [[decision]] ^DECIDE^ about the trip yet?" },
      { id: "decide", t: "We [[decided]] ^DECISION^ to stay at home." }
    ],
    note: "Spelling: British English apologise, favourite; American English apologize, favorite. Both are accepted here, but in the exam use one style consistently." },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "suggest", t: "That's a great suggest!", ok: false, fix: "That's a great suggestion!" },
      { id: "amuse", t: "We went to an amusement park.", ok: true },
      { id: "favour", t: "Blue is my favour colour.", ok: false, fix: "Blue is my favourite colour." },
      { id: "noise", t: "The classroom was very noise.", ok: false, fix: "The classroom was very noisy." },
      { id: "normal", t: "I normally get up at seven.", ok: true },
      { id: "luck", t: "Lucky, the train was late too, so I didn't miss it.", ok: false, fix: "Luckily, the train was late too." },
      { id: "help", t: "The staff were very helpful.", ok: true },
      { id: "apology", t: "He apologied for his mistake.", ok: false, fix: "He apologised for his mistake." },
      { id: "anger", t: "Why are you so angry?", ok: true },
      { id: "decide", t: "It was a difficult decide.", ok: false, fix: "It was a difficult decision." }
    ] },
  { type: "gaps", title: "Exam text: A day at the zoo", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "When my little brother had his birthday, my parents made the [[suggestion#suggest]] ^SUGGEST^ to take him to the zoo. Monkeys are his [[favourite/favorite#favour]] ^FAVOUR^ animals, so he was delighted. The monkey house was very [[noisy#noise]] ^NOISE^, and he loved it. [[Normally#normal]] ^NORMAL^ he is quite shy, but that day he talked to everyone. At lunchtime he wanted an ice cream, but the café was closed. [[Luckily#luck]] ^LUCK^, a very [[helpful#help]] ^HELP^ zookeeper showed us another one. Later, my brother dropped his ice cream on a man's shoes! He [[apologised/apologized#apology]] ^APOLOGY^ at once, and the man wasn't [[angry#anger]] ^ANGER^ at all – he just laughed. Everyone around us found it very [[amusing#amuse]] ^AMUSE^. On the way home, we made a [[decision#decide]] ^DECIDE^ to go back next summer." }
    ] }
];
