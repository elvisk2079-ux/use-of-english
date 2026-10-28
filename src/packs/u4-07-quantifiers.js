// TITLE: Much, Many, Little, Few
// EYEBROW: Use of English B2 · Unit 4 · Grammar Revision: Determiners and Pronouns A
// SUB: Quantity words and negative pronouns: much / many, (a) little / (a) few, lots of, any / no / none, something / nothing / nobody. One negative word per sentence!
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u4-quant" };
const P = [
  { id: "much", phrase: "much + uncountable", ru: "много (неисч.): much milk, much time" },
  { id: "many", phrase: "many + countable", ru: "много (исч.): many people" },
  { id: "little", phrase: "little / a little + uncountable", ru: "мало / немного (неисч.)" },
  { id: "few", phrase: "few / a few + countable", ru: "мало / несколько (исч.)" },
  { id: "lots", phrase: "lots of / a lot of / plenty of", ru: "много (с любыми сущ.)" },
  { id: "any", phrase: "any / not … any", ru: "какой-нибудь; никакой (в отрицании)" },
  { id: "no", phrase: "no / none (of)", ru: "никакой; ни один (из)" },
  { id: "thing", phrase: "something / anything / nothing / everything", ru: "что-то / что-нибудь / ничего / всё" },
  { id: "body", phrase: "somebody / anybody / nobody / everybody", ru: "кто-то / кто-нибудь / никто / все" },
  { id: "oneneg", phrase: "only one negative word", ru: "There isn't anything / There is nothing" },
  { id: "hardly", phrase: "hardly any / hardly anyone", ru: "почти нет / почти никто" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "much", t: "There isn't {{*much|many}} milk left in the fridge." },
      { id: "much", t: "How {{*much|many}} time do we have?" },
      { id: "many", t: "There aren't {{*many|much}} strawberries left." },
      { id: "many", t: "How {{*many|much}} languages do you speak?" },
      { id: "little", t: "There is {{*a little|a few}} milk left – enough for one cup of tea." },
      { id: "little", t: "We've only got {{*a little|a few|few}} time left. Hurry up!" },
      { id: "little", t: "Most people know very {{*little|few}} about Cézanne." },
      { id: "few", t: "There are {{*a few|a little}} strawberries left – let's share them." },
      { id: "few", t: "Very {{*few|little}} people know the real story." },
      { id: "lots", t: "There is {{*lots of|many}} information about volcanoes in this book." },
      { id: "lots", t: "You don't need to buy milk – there's {{*lots|much|lot}} in the fridge." },
      { id: "lots", t: "We have {{*plenty of|many of|much of}} time – the train leaves at eight." },
      { id: "any", t: "Have you got {{*any|no|some of}} brothers or sisters?" },
      { id: "any", t: "There weren't {{*any|no|none}} tickets left." },
      { id: "no", t: "There are {{*no|any|none}} buses after midnight." },
      { id: "no", t: "Fortunately, {{*none of|none|no one of}} the guests were hurt." },
      { id: "thing", t: "There isn't {{*anything|nothing|something}} else I can do." },
      { id: "thing", t: "There is {{*nothing|anything|something not}} else I can do." },
      { id: "body", t: "{{*Nobody|Anybody|Everybody not}} came to the meeting – the room was empty." },
      { id: "body", t: "Is there {{*anybody|nobody|somebody not}} here who speaks Chinese?" },
      { id: "oneneg", t: "The baby climbed the stairs {{*without any|without no|with any}} difficulty." },
      { id: "oneneg", t: "The baby climbed the stairs {{*with no|without no|with any}} difficulty." },
      { id: "hardly", t: "Hardly {{*anyone|no one|nobody}} came to the party." },
      { id: "hardly", t: "There was hardly {{*any|no|none}} food left." }
    ],
    note: "One negative word only: There isn't anything = There is nothing. NOT There isn't nothing. little / a little + uncountable (milk, time); few / a few + countable (people, strawberries). Without a, they sound negative (= not enough)." },
  { type: "gaps", title: "One word in each gap", short: "Open cloze", layout: "text", keepOrder: true,
    instr: "Read the text first. Then write ONE word in each gap.",
    items: [
      { t: "Very [[few#few]] people know that the first Russian chess champion was a woman. Almost [[everyone/everybody#body]] thinks chess was only for men in the 19th century. However, [[nothing#thing]] could be further from the truth. In those days there were [[no/few#no]] chess clubs for women, so she played at home. She spent a [[lot#lots]] of time studying old games. At first, her family showed very [[little#little]] interest in her hobby, and hardly [[anyone/anybody#hardly]] believed she could win. She didn't have [[any/much#any]] money for books, so she copied them by hand. How [[many#many]] games did she play? Nobody knows for sure, but it was [[much/far/many/well#much]] more than a thousand. Sadly, [[none/few#no]] of her notebooks survived." }
    ] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "Classic mistakes. Is each sentence right or wrong?",
    items: [
      { id: "oneneg", t: "There isn't nothing I can do.", ok: false, fix: "There isn't anything I can do. / There is nothing I can do." },
      { id: "oneneg", t: "The baby climbed the stairs without no difficulty.", ok: false, fix: "…without any difficulty / with no difficulty." },
      { id: "much", t: "There isn't many milk in the fridge.", ok: false, fix: "There isn't much milk in the fridge." },
      { id: "many", t: "There aren't much strawberries.", ok: false, fix: "There aren't many strawberries." },
      { id: "little", t: "There is a few milk left.", ok: false, fix: "There is a little milk left." },
      { id: "few", t: "There are a little strawberries left.", ok: false, fix: "There are a few strawberries left." },
      { id: "lots", t: "There are lots of toys in the garden.", ok: true },
      { id: "lots", t: "There is plenty of information in this book.", ok: true },
      { id: "no", t: "None of my friends came.", ok: true },
      { id: "hardly", t: "Hardly nobody came to the party.", ok: false, fix: "Hardly anybody came to the party." },
      { id: "thing", t: "Is there anything to eat?", ok: true },
      { id: "body", t: "Nobody didn't know the answer.", ok: false, fix: "Nobody knew the answer." }
    ] },
  { type: "gaps", title: "Rewrite with the word given", short: "Rewrite", instr: "Complete the second sentence so it means the same. Use the word in capitals.",
    items: [
      { id: "oneneg", t: "There isn't anything in the box. ^NOTHING^ → There is [[nothing]] in the box." },
      { id: "much", t: "There weren't a lot of things to see in the gallery. ^MUCH^ → There wasn't [[much]] to see in the gallery." },
      { id: "little", t: "There weren't a lot of things to see in the gallery. ^LITTLE^ → There was [[little]] to see in the gallery." },
      { id: "few", t: "Most students didn't go to the demonstration. ^FEW^ → Very [[few]] students went to the demonstration." },
      { id: "hardly", t: "Most students didn't go to the demonstration. ^HARDLY^ → [[Hardly anyone/Hardly anybody]] went to the demonstration." },
      { id: "no", t: "I didn't like any of the songs. ^NONE^ → I liked [[none]] of the songs." },
      { id: "any", t: "The concert was sold out. ^ANY^ → There weren't [[any]] tickets left." },
      { id: "body", t: "There wasn't anybody in the room. ^NOBODY^ → There was [[nobody]] in the room." },
      { id: "thing", t: "The washing machine isn't working properly. ^SOMETHING^ → There is [[something]] wrong with the washing machine." },
      { id: "lots", t: "There is a lot of food. ^PLENTY^ → There is [[plenty]] of food." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the quantity word.",
    items: [
      { id: "much", ru: "У меня мало времени (немного).", en: "I don't have much time.", key: "much time|little time" },
      { id: "many", ru: "Сколько у тебя друзей?", en: "How many friends do you have?", key: "how many friends" },
      { id: "little", ru: "Осталось немного молока.", en: "There is a little milk left.", key: "a little milk" },
      { id: "few", ru: "У меня есть несколько вопросов.", en: "I have a few questions.", key: "a few questions" },
      { id: "few", ru: "Очень мало людей знают об этом.", en: "Very few people know about it.", key: "(very )?few people" },
      { id: "lots", ru: "У нас много времени.", en: "We have lots of time.", key: "lots of time|a lot of time|plenty of time" },
      { id: "oneneg", ru: "Я ничего не вижу.", en: "I can't see anything.", key: "can't see anything|can see nothing|cannot see anything" },
      { id: "no", ru: "Никто из моих друзей не пришёл.", en: "None of my friends came.", key: "none of my friends" },
      { id: "hardly", ru: "Почти никто не пришёл.", en: "Hardly anyone came.", key: "hardly (anyone|anybody)" },
      { id: "body", ru: "Кто-нибудь здесь говорит по-английски?", en: "Does anybody here speak English?", key: "(anybody|anyone)" }
    ] }
];
