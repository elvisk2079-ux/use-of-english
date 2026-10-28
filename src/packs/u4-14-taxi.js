// TITLE: A Taxi Experience
// EYEBROW: Use of English B2 · Unit 4 · Examination Practice A (Section 2)
// SUB: The words and phrases from the multiple-choice text “A Taxi Experience”, in new sentences and a new exam-style text. Twelve phrases, five drills.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u4-taxi" };
const P = [
  { id: "foreign", phrase: "foreign countries", ru: "зарубежные страны" },
  { id: "trips", phrase: "long trips", ru: "дальние поездки" },
  { id: "reach", phrase: "reach a destination", ru: "добраться до места назначения" },
  { id: "something", phrase: "something always goes wrong", ru: "всегда что-то идёт не так" },
  { id: "flight", phrase: "miss my flight", ru: "опоздать на рейс" },
  { id: "way", phrase: "all the way home", ru: "всю дорогу домой" },
  { id: "away", phrase: "get carried away", ru: "увлечься, потерять голову" },
  { id: "travelling", phrase: "travelling at speeds of …", ru: "двигаясь со скоростью…" },
  { id: "state", phrase: "in a state of shock", ru: "в шоке" },
  { id: "breath", phrase: "catch my breath", ru: "перевести дух" },
  { id: "alittle", phrase: "pay him a little extra", ru: "заплатить немного сверху" },
  { id: "bound", phrase: "be bound to", ru: "обязательно, наверняка" }
];
const DRILLS = [
  { type: "gaps", title: "Choose A, B, C or D", short: "A B C D", instr: "Tap the option that best fits each gap, like in Part 1 of the exam.",
    items: [
      { id: "foreign", t: "She has worked in many {{*foreign|strange|curious|peculiar}} countries." },
      { id: "trips", t: "Business people often go on short {{*trips|travels|excursions|voyages}} abroad." },
      { id: "reach", t: "After a ten-hour drive, we finally {{*reached|arrived|got|approached}} our destination." },
      { id: "something", t: "I'm so unlucky – {{*something|anything|everything|nothing}} always goes wrong!" },
      { id: "flight", t: "Hurry up or we'll miss our {{*flight|voyage|journey|travel}}!" },
      { id: "way", t: "The baby cried all the {{*way|road|route|direction}} home." },
      { id: "away", t: "I got a bit carried {{*away|on|out|along}} and bought ten pairs of shoes." },
      { id: "travelling", t: "The train was {{*travelling|carrying|transferring|transporting}} at over 300 kilometres per hour." },
      { id: "state", t: "After the accident, the driver was {{*in|at|on|under}} a state of shock." },
      { id: "breath", t: "Wait a minute – let me {{*catch|hold|keep|find}} my breath." },
      { id: "alittle", t: "I paid the waiter {{*a little|a few|many|some}} extra because he was so helpful." },
      { id: "bound", t: "Take an umbrella – it's bound {{*to|for|in|of}} rain." },
      { id: "reach", t: "How long does it take to {{*reach|arrive|get|come}} the coast?" },
      { id: "flight", t: "Our {{*flight|voyage|trip|journey}} to Rome takes off at 7 am." }
    ] },
  { type: "gaps", title: "Exam text: My first trip abroad", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then tap the best option for each gap.",
    items: [
      { t: "When I was eighteen, I made my first trip to a {{*foreign|strange|curious|peculiar#foreign}} country. I had never been on a long {{*trip|travel|tour|excursion#trips}} before, and I was very nervous. Of course, {{*something|anything|everything|nothing#something}} went wrong on the very first day: the taxi was late and I nearly missed my {{*flight|cruise|voyage|journey#flight}}. The driver drove fast all the {{*way|road|route|direction#way}} to the airport. He got so carried {{*away|on|out|along#away}} that he was {{*travelling|delivering|transferring|transporting#travelling}} at 140 kilometres per hour! By the time we got there, I was {{*in|at|on|under#state}} a state of shock and needed a minute to {{*catch|hold|keep|find#breath}} my breath. I gave him {{*a little|a few|many|some#alittle}} extra money and told him he was bound {{*to|for|in|of#bound}} have an accident one day. Five hours later, I finally {{*reached|arrived|got|came#reach}} London." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "foreign", t: "How many [[foreign]] languages do you speak?" },
      { id: "trips", t: "We often go on day [[trips]] to the seaside." },
      { id: "reach", t: "The climbers [[reached]] the top at noon." },
      { id: "something", t: "There's [[something]] wrong with my phone." },
      { id: "flight", t: "Our [[flight]] was cancelled because of the storm." },
      { id: "way", t: "We sang songs all the [[way]] to the dacha." },
      { id: "away", t: "Don't get carried [[away]] – we only need a small cake." },
      { id: "state", t: "Everyone was in a [[state]] of shock after the news." },
      { id: "breath", t: "She stopped running to catch her [[breath]]." },
      { id: "alittle", t: "It costs a [[little]] extra, but it's worth it." },
      { id: "bound", t: "You're [[bound]] to pass – you've studied so hard!" },
      { id: "travelling", t: "The car was [[travelling]] at 90 kilometres per hour." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "reach", t: "We reached to the hotel at midnight.", ok: false, fix: "We reached the hotel at midnight." },
      { id: "flight", t: "I almost missed my flight.", ok: true },
      { id: "way", t: "We talked all the road home.", ok: false, fix: "We talked all the way home." },
      { id: "away", t: "The fans got carried away.", ok: true },
      { id: "state", t: "She was on a state of shock.", ok: false, fix: "She was in a state of shock." },
      { id: "breath", t: "Let me catch my breath.", ok: true },
      { id: "bound", t: "It's bound to happen sooner or later.", ok: true },
      { id: "alittle", t: "I paid him a few extra money.", ok: false, fix: "I paid him a little extra money." },
      { id: "foreign", t: "Learning strange languages is useful.", ok: false, fix: "Learning foreign languages is useful." },
      { id: "trips", t: "We went on a lot of short trips last summer.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "foreign", ru: "Я была во многих зарубежных странах.", en: "I've been to many foreign countries.", key: "foreign countries" },
      { id: "flight", ru: "Я опоздала на самолёт.", en: "I missed my flight.", key: "missed (my|the) (flight|plane)" },
      { id: "reach", ru: "Мы добрались до деревни к вечеру.", en: "We reached the village by the evening.", key: "reached" },
      { id: "way", ru: "Всю дорогу домой мы молчали.", en: "We were silent all the way home.", key: "all the way home" },
      { id: "away", ru: "Не увлекайся!", en: "Don't get carried away!", key: "carried away" },
      { id: "state", ru: "Она была в шоке.", en: "She was in a state of shock.", key: "in (a state of )?shock" },
      { id: "breath", ru: "Дай мне перевести дух.", en: "Let me catch my breath.", key: "catch my breath" },
      { id: "bound", ru: "Он обязательно позвонит.", en: "He's bound to call.", key: "bound to" },
      { id: "something", ru: "Всегда что-то идёт не так.", en: "Something always goes wrong.", key: "something always goes wrong" },
      { id: "alittle", ru: "Я заплатила немного больше.", en: "I paid a little extra.", key: "a little (extra|more)" }
    ] }
];
