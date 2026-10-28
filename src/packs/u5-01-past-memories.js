// TITLE: Past Memories
// EYEBROW: Use of English B2 · Unit 5 · Consolidation I · Multiple-choice cloze
// SUB: Twelve words and phrases from the multiple-choice text “Past Memories”: eager, come across, at the sight of, far more, it wasn't long before… Five drills, with a new exam-style text.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u5-past" };
const P = [
  { id: "eager", phrase: "be eager for / to", ru: "с нетерпением ждать; очень хотеть" },
  { id: "arrive", phrase: "spring arrived / arrive at, in", ru: "наступила весна / прибыть" },
  { id: "comeacross", phrase: "come across", ru: "случайно найти, наткнуться" },
  { id: "seeas", phrase: "see sb as a threat", ru: "видеть в ком-то угрозу" },
  { id: "atsight", phrase: "at the sight of", ru: "при виде" },
  { id: "far", phrase: "far / much more serious", ru: "гораздо серьёзнее" },
  { id: "experience", phrase: "camping experience", ru: "опыт (неисчисл.)" },
  { id: "explore", phrase: "explore the forest", ru: "исследовать лес" },
  { id: "look", phrase: "look at", ru: "смотреть на" },
  { id: "flock", phrase: "a flock of birds", ru: "стая птиц (swarm – рой, bunch – букет)" },
  { id: "usual", phrase: "as usual / it's usual", ru: "как обычно / обычное дело" },
  { id: "before", phrase: "It wasn't long before…", ru: "Вскоре…, Очень скоро…" }
];
const DRILLS = [
  { type: "gaps", title: "Choose A, B, C or D", short: "A B C D", instr: "Tap the option that best fits each gap, like in Part 1 of the exam.",
    items: [
      { id: "eager", t: "I was always {{*eager|interested|fond|enthusiastic}} for the warm weather to come." },
      { id: "eager", t: "Tom is always {{*eager|fond|interested|bored}} to help." },
      { id: "arrive", t: "When summer finally {{*arrived|reached|got|achieved}}, we went to the lake." },
      { id: "arrive", t: "The train {{*arrived|reached|got|came to}} at the station ten minutes late." },
      { id: "comeacross", t: "While cleaning the attic, I {{*came across|dealt with|found out|came up}} some old photos." },
      { id: "comeacross", t: "If you {{*come across|find out|run out|look after}} my keys, please let me know." },
      { id: "seeas", t: "Many workers saw the new boss {{*as|like|same as|such as}} a threat." },
      { id: "seeas", t: "She is seen {{*as|like|for|to}} the best student in the class." },
      { id: "atsight", t: "{{*At|In|By|On}} the sight of the dog, the cat ran up a tree." },
      { id: "atsight", t: "My little sister screams at the {{*sight|view|look|scene}} of a spider." },
      { id: "far", t: "The test was {{*far|very|quite|so}} more difficult than I expected." },
      { id: "far", t: "This phone is {{*much|very|too|so}} cheaper than that one." },
      { id: "experience", t: "She has a lot of {{*experience|skills|qualifications|qualities}} of working with children." },
      { id: "experience", t: "Do you have any teaching {{*experience|knowledges|qualities|informations}}?" },
      { id: "explore", t: "We spent the whole day {{*exploring|detecting|researching|investigating}} the old town." },
      { id: "explore", t: "Children love to {{*explore|detect|research|inquire}} new places." },
      { id: "look", t: "We sat by the pond, {{*looking|noticing|seeing|watching}} at the ducks." },
      { id: "look", t: "Stop {{*looking|watching|seeing|noticing}} at me like that!" },
      { id: "flock", t: "A {{*flock|swarm|bunch|set}} of birds flew over the field." },
      { id: "flock", t: "A {{*swarm|flock|bunch|herd}} of bees attacked the bear." },
      { id: "usual", t: "As {{*usual|ordinary|regular|familiar}}, he was late." },
      { id: "usual", t: "It's {{*usual|familiar|ordinary|regular}} for it to rain a lot here in autumn." },
      { id: "before", t: "It wasn't long {{*before|until|since|after}} the snow melted." },
      { id: "before", t: "It won't be long {{*before|until|since|when}} we're on holiday!" }
    ],
    note: "far / much + comparative: far more serious, much cheaper (NOT very more). a flock of birds / sheep, a swarm of bees, a bunch of flowers. experience (uncountable) = опыт." },
  { type: "gaps", title: "Exam text: A summer in the village", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then tap the best option for each gap.",
    items: [
      { t: "Every summer I was {{*eager|interested|fond|enthusiastic#eager}} for school to end so I could visit my grandparents in the country. When I finally {{*arrived|reached|got|approached#arrive}} at their village, my grandfather was always waiting at the gate. One day, while walking in the woods, I {{*came across|found out|dealt with|came up#comeacross}} an old wooden hut. At first I saw it {{*as|like|same as|such as#seeas}} a perfect hiding place, but {{*at|in|on|by#atsight}} the sight of a snake inside, I changed my mind! It was {{*far|very|quite|so#far}} more dangerous than I had thought. By the end of the summer, I had a lot of {{*experience|skills|qualifications|qualities#experience}} of country life. I spent hours {{*exploring|detecting|researching|investigating#explore}} the fields and {{*looking|noticing|watching|observing#look}} at the {{*flocks|swarms|bunches|sets#flock}} of geese on the river. When autumn came, it was {{*usual|ordinary|regular|familiar#usual}} for the village to go quiet, and it wasn't long {{*before|until|since|after#before}} I was back in the city." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "eager", t: "I'm [[eager/keen]] to see my friends again after the holidays." },
      { id: "arrive", t: "What time does your flight [[arrive]] in London?" },
      { id: "comeacross", t: "I [[came]] across an interesting article yesterday." },
      { id: "seeas", t: "Everyone sees him [[as]] a hero." },
      { id: "atsight", t: "She burst into tears at the [[sight]] of her old house." },
      { id: "far", t: "Living in the city is [[far/much]] more expensive than in the country." },
      { id: "experience", t: "You need at least two years' work [[experience]] for this job." },
      { id: "explore", t: "Let's [[explore]] the island tomorrow." },
      { id: "look", t: "Look [[at]] that beautiful rainbow!" },
      { id: "flock", t: "The shepherd was looking after a [[flock]] of sheep." },
      { id: "usual", t: "He arrived late, as [[usual]]." },
      { id: "before", t: "It wasn't [[long]] before everyone knew the secret." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "arrive", t: "We reached to the village at night.", ok: false, fix: "We reached the village at night. / We arrived at the village at night." },
      { id: "comeacross", t: "I came across an old friend in the supermarket.", ok: true },
      { id: "seeas", t: "She is seen like a leader.", ok: false, fix: "She is seen as a leader." },
      { id: "atsight", t: "In the sight of the police, the thief ran away.", ok: false, fix: "At the sight of the police, the thief ran away." },
      { id: "far", t: "This book is very more interesting than that one.", ok: false, fix: "This book is far / much more interesting than that one." },
      { id: "experience", t: "I have a lot of experiences in teaching.", ok: false, fix: "I have a lot of experience in teaching." },
      { id: "flock", t: "A flock of birds landed on the roof.", ok: true },
      { id: "before", t: "It wasn't long before it started to rain.", ok: true },
      { id: "usual", t: "As usually, she was the first to arrive.", ok: false, fix: "As usual, she was the first to arrive." },
      { id: "eager", t: "The kids were eager to open their presents.", ok: true },
      { id: "explore", t: "We spent the day exploring the forest.", ok: true },
      { id: "look", t: "Stop watching at your phone!", ok: false, fix: "Stop looking at your phone!" }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "eager", ru: "Дети очень хотели помочь.", en: "The children were eager to help.", key: "eager to" },
      { id: "comeacross", ru: "Я случайно нашла старое письмо.", en: "I came across an old letter.", key: "came across" },
      { id: "seeas", ru: "Все видят в нём угрозу.", en: "Everyone sees him as a threat.", key: "as a threat" },
      { id: "atsight", ru: "При виде собаки кошка убежала.", en: "At the sight of the dog, the cat ran away.", key: "at the sight of" },
      { id: "far", ru: "Это гораздо сложнее.", en: "This is far more difficult.", key: "(far|much) more (difficult|complicated)" },
      { id: "experience", ru: "У неё большой опыт.", en: "She has a lot of experience.", key: "experience" },
      { id: "flock", ru: "Над морем летела стая птиц.", en: "A flock of birds was flying over the sea.", key: "flock of birds" },
      { id: "before", ru: "Вскоре пошёл снег.", en: "It wasn't long before it started to snow.", key: "wasn't long before|was not long before" },
      { id: "usual", ru: "Как обычно, он опоздал.", en: "As usual, he was late.", key: "as usual" },
      { id: "arrive", ru: "Мы приехали в Москву вечером.", en: "We arrived in Moscow in the evening.", key: "arrived in" },
      { id: "explore", ru: "Мы исследовали пещеру.", en: "We explored the cave.", key: "explored" }
    ] }
];
