// TITLE: Plastic Money
// EYEBROW: Use of English B2 · Unit 6 · Examination Practice A (Section 2) · Multiple-choice cloze
// SUB: Twelve words and phrases from the multiple-choice text “Plastic Money”: pay in cash, borrow from, monthly instalments, the whole amount, by and large, do without, rely on, make ends meet, in debt… Five drills, with a new exam-style text.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u6-plastic" };
const P = [
  { id: "cash", phrase: "pay in cash / buy using cash", ru: "платить наличными" },
  { id: "borrowed", phrase: "borrow money from", ru: "занимать деньги у" },
  { id: "saved", phrase: "save (up) money", ru: "накопить деньги" },
  { id: "instalments", phrase: "monthly instalments", ru: "ежемесячные взносы" },
  { id: "amount", phrase: "the whole amount", ru: "вся сумма" },
  { id: "byandlarge", phrase: "by and large", ru: "в целом" },
  { id: "discounts", phrase: "give discounts", ru: "давать скидки" },
  { id: "dowithout", phrase: "can't do without", ru: "не могут обойтись без" },
  { id: "relyon", phrase: "rely on", ru: "полагаться на" },
  { id: "endsmeet", phrase: "make ends meet", ru: "сводить концы с концами" },
  { id: "indebt", phrase: "end up in debt", ru: "оказаться в долгах" },
  { id: "difficultyin", phrase: "have difficulty (in) paying", ru: "с трудом выплачивать" }
];
const DRILLS = [
  { type: "gaps", title: "Choose A, B, C or D", short: "A B C D", instr: "Tap the option that best fits each gap, like in Part 1 of the exam.",
    items: [
      { id: "cash", t: "In the past, people bought goods using {{*cash|change|currency|budget}}." },
      { id: "cash", t: "Sorry, we don't take cards – {{*cash|change|currency|budget}} only." },
      { id: "borrowed", t: "They rarely {{*borrowed|lent|let|kept}} money from banks." },
      { id: "borrowed", t: "Can I {{*borrow|lend|let|owe}} your car this weekend?" },
      { id: "saved", t: "Only when they had {{*saved|afforded|owned|possessed}} the money did they buy what they wanted." },
      { id: "saved", t: "I've {{*saved|owed|afforded|possessed}} enough money for a new laptop." },
      { id: "instalments", t: "Many people pay in monthly {{*instalments|sums|deposits|budgets}}." },
      { id: "instalments", t: "You can pay for the TV in twelve {{*instalments|debts|budgets|loans}}." },
      { id: "amount", t: "I'd rather pay the whole {{*amount|number|budget|count}} at once." },
      { id: "amount", t: "A huge {{*amount|number|lot|deal}} of money was spent on the stadium." },
      { id: "byandlarge", t: "{{*By and large|One by one|Every now and then|Last but not least}}, credit cards are useful." },
      { id: "byandlarge", t: "The weather was, {{*by and large|one by one|on my own|as a matter of fact}}, good." },
      { id: "discounts", t: "Some shops give {{*discounts|tips|prizes|bargains}} on certain products." },
      { id: "discounts", t: "Students get a 20% {{*discount|bargain|tip|prize}} on train tickets." },
      { id: "dowithout", t: "Many people can't {{*do|make|go|be}} without their credit cards." },
      { id: "dowithout", t: "I can't do {{*without|away|off|out}} my phone." },
      { id: "relyon", t: "They constantly rely {{*on|in|to|of}} their cards." },
      { id: "relyon", t: "You can always {{*rely|trust|believe|hope}} on me." },
      { id: "endsmeet", t: "With prices so high, it's hard to make {{*ends meet|matters worse|their best|business}}." },
      { id: "endsmeet", t: "Many families struggle to make ends {{*meet|join|end|close}}." },
      { id: "indebt", t: "Spending too much, they end up in {{*debt|loan|charge|owe}}." },
      { id: "indebt", t: "He's been {{*in|on|at|under}} debt for years." },
      { id: "difficultyin", t: "They have difficulty {{*in paying|to pay|to paying|in pay}} it back." },
      { id: "difficultyin", t: "I had difficulty {{*in|to|for|on}} finding a job." }
    ] },
  { type: "gaps", title: "Exam text: My first bike", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then tap the best option for each gap.",
    items: [
      { t: "When I was fourteen, I wanted a new bike, but my parents said I had to pay for it myself. I couldn't {{*borrow|lend|let|owe#borrowed}} money from them, so I decided to save. It took a year until I had {{*saved|afforded|owned|possessed#saved}} enough. The shop offered to let me pay in monthly {{*instalments|sums|deposits|budgets#instalments}}, but I wanted to pay the whole {{*amount|number|budget|count#amount}} at once. Because I paid in {{*cash|change|currency|budget#cash}}, the shop gave me a small {{*discount|tip|prize|bargain#discounts}}. {{*By and large|One by one|Every now and then|Last but not least#byandlarge}}, it was a good experience. I learned to do {{*without|away|off|out#dowithout}} sweets and cinema tickets, and I didn't have to rely {{*on|in|to|of#relyon}} anyone. Today, when I see friends who can't make {{*ends meet|matters worse|their best|business#endsmeet}} and end up {{*in|on|at|under#indebt}} debt, I remember my bike. Some of them have difficulty {{*in paying|to pay|to paying|in pay#difficultyin}} their bills, but I always try to save first." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "cash", t: "Can I pay in [[cash]]?" },
      { id: "borrowed", t: "I [[borrowed]] a book from my friend." },
      { id: "saved", t: "She [[saved]] money for a year to buy a car." },
      { id: "instalments", t: "We paid for the fridge in [[instalments/installments]]." },
      { id: "amount", t: "What is the total [[amount]]?" },
      { id: "byandlarge", t: "By and [[large]], I'm happy with my job." },
      { id: "discounts", t: "Do you give a [[discount]] to students?" },
      { id: "dowithout", t: "We had to do [[without]] electricity for two days." },
      { id: "relyon", t: "You can't always rely [[on/upon]] other people." },
      { id: "endsmeet", t: "It's hard to make ends [[meet]] on a pension." },
      { id: "indebt", t: "After buying the house, they were in [[debt]] for 20 years." },
      { id: "difficultyin", t: "She had difficulty [[in]] paying the rent." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "borrowed", t: "I rarely lend money from the bank.", ok: false, fix: "I rarely borrow money from the bank." },
      { id: "cash", t: "Do you want to pay in cash or by card?", ok: true },
      { id: "instalments", t: "They pay in monthly instalments.", ok: true },
      { id: "dowithout", t: "I can't do without my credit card.", ok: true },
      { id: "relyon", t: "Don't rely in credit cards too much.", ok: false, fix: "Don't rely on credit cards too much." },
      { id: "endsmeet", t: "It's hard to do ends meet.", ok: false, fix: "It's hard to make ends meet." },
      { id: "indebt", t: "He ended up in a debt.", ok: false, fix: "He ended up in debt." },
      { id: "difficultyin", t: "She had difficulty to pay the bill.", ok: false, fix: "She had difficulty (in) paying the bill." },
      { id: "discounts", t: "The shop gave me a discount.", ok: true },
      { id: "byandlarge", t: "By and large, it was a good idea.", ok: true },
      { id: "saved", t: "I saved enough money for a holiday.", ok: true },
      { id: "amount", t: "Please pay the whole amount now.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "cash", ru: "Раньше люди платили наличными.", en: "In the past, people paid in cash.", key: "cash" },
      { id: "borrowed", ru: "Я заняла денег у сестры.", en: "I borrowed money from my sister.", key: "borrowed .*from" },
      { id: "instalments", ru: "Мы платим ежемесячными взносами.", en: "We pay in monthly instalments.", key: "instalments|installments" },
      { id: "dowithout", ru: "Я не могу обойтись без карты.", en: "I can't do without my card.", key: "do without" },
      { id: "relyon", ru: "Не полагайся на кредитки.", en: "Don't rely on credit cards.", key: "rely on" },
      { id: "endsmeet", ru: "Им трудно сводить концы с концами.", en: "It's hard for them to make ends meet.", key: "make ends meet" },
      { id: "indebt", ru: "Он влез в долги.", en: "He got into debt.", key: "into debt|in debt" },
      { id: "byandlarge", ru: "В целом, это хорошая идея.", en: "By and large, it's a good idea.", key: "by and large" },
      { id: "discounts", ru: "Магазин даёт скидки.", en: "The shop gives discounts.", key: "discounts?" },
      { id: "difficultyin", ru: "Ей трудно платить за квартиру.", en: "She has difficulty paying the rent.", key: "difficulty (in )?paying" }
    ] }
];
