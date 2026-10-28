// TITLE: Cash, Change or Currency?
// EYEBROW: Use of English B2 · Unit 6 · Words Easily Confused H–I
// SUB: Thirteen money words: loan, debt, sum, amount, deposit, instalment, budget; cheque, cash, coins, currency, banknotes, change. Five drills.
// BOARD: Your words
const META = { ls: "uoe-b2-u6-confHI" };
const P = [
  { id: "loan", phrase: "loan", ru: "кредит, заём", en: "money borrowed from a bank" },
  { id: "debt", phrase: "debt / in debt", ru: "долг / в долгах", en: "money that you owe" },
  { id: "sum", phrase: "sum (of money)", ru: "сумма (денег)", en: "an amount of money (a large sum)" },
  { id: "amount", phrase: "amount", ru: "количество, сумма", en: "how much of something there is" },
  { id: "deposit", phrase: "deposit", ru: "вклад; залог", en: "money you put into a bank account or pay first" },
  { id: "instalment", phrase: "instalment", ru: "взнос (в рассрочку)", en: "one of many regular payments" },
  { id: "budget", phrase: "budget", ru: "бюджет", en: "a plan of how much money you can spend" },
  { id: "cheque", phrase: "cheque", ru: "чек (банковский)", en: "a printed paper you sign to pay from your bank account" },
  { id: "cash", phrase: "cash", ru: "наличные", en: "money in coins or notes" },
  { id: "coins", phrase: "coins", ru: "монеты", en: "round metal money" },
  { id: "currency", phrase: "currency", ru: "валюта", en: "the money of a country" },
  { id: "banknotes", phrase: "(bank)notes", ru: "банкноты", en: "paper money" },
  { id: "change", phrase: "change", ru: "сдача; мелочь", en: "money you get back when you pay too much" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "loan", t: "We took out a {{*loan|debt|deposit}} to buy a flat." },
      { id: "loan", t: "The bank refused to give him a {{*loan|debt|budget}}." },
      { id: "debt", t: "He borrowed so much that now he's in {{*debt|loan|budget}}." },
      { id: "debt", t: "It took me five years to pay off my {{*debts|deposits|budgets}}." },
      { id: "sum", t: "He was fined the {{*sum|count|number}} of £20." },
      { id: "sum", t: "She won a large {{*sum|number|count}} of money." },
      { id: "amount", t: "Could you tell me the exact {{*amount|number|count}} I owe?" },
      { id: "amount", t: "Don't eat a large {{*amount|number|many}} of sugar." },
      { id: "deposit", t: "I went to the bank to make a {{*deposit|loan|debt}}." },
      { id: "deposit", t: "You have to pay a {{*deposit|tip|fare}} when you rent a flat." },
      { id: "instalment", t: "We're paying for the sofa in monthly {{*instalments|deposits|budgets}}." },
      { id: "instalment", t: "The last {{*instalment|budget|change}} for the car is due in May." },
      { id: "budget", t: "We're on a tight {{*budget|loan|debt}} this month." },
      { id: "budget", t: "The school's {{*budget|currency|cash}} for books is very small." },
      { id: "cheque", t: "When paying by {{*cheque|cash|change}}, sign the back." },
      { id: "cheque", t: "My grandmother still writes {{*cheques|coins|currencies}}." },
      { id: "cash", t: "I'm paying in {{*cash|cheque|change}}." },
      { id: "cash", t: "Do you have any {{*cash|currency|cheque}} on you? I need to pay the taxi." },
      { id: "coins", t: "My piggy bank is full of {{*coins|cheques|currencies}}." },
      { id: "coins", t: "The machine only takes {{*coins|banknotes|cheques}}, not notes." },
      { id: "currency", t: "We exchanged our money for local {{*currency|cash|change}}." },
      { id: "currency", t: "The euro is the {{*currency|cash|coin}} of many European countries." },
      { id: "banknotes", t: "Coins are heavy, so I changed them for {{*banknotes|cheques|currency}}." },
      { id: "banknotes", t: "Have you seen the new 100-rouble {{*note|coin|cheque}}?" },
      { id: "change", t: "Here's your {{*change|cash|currency}} – 20 roubles." },
      { id: "change", t: "Keep the {{*change|cheque|currency}}!" }
    ],
    note: "pay IN cash, pay BY cheque / card. be IN debt. take out a loan. pay in instalments." },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the definition and tap the word." },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Write ONE word in each gap.",
    items: [
      { id: "loan", t: "I need a [[loan]] from the bank to start my business." },
      { id: "debt", t: "They are deep in [[debt]]." },
      { id: "sum", t: "She paid a huge [[sum]] for the painting." },
      { id: "amount", t: "A large [[amount]] of money was stolen." },
      { id: "deposit", t: "We paid a [[deposit]] on the holiday." },
      { id: "instalment", t: "You can pay in six monthly [[instalments/installments]]." },
      { id: "budget", t: "What's your [[budget]] for the trip?" },
      { id: "cheque", t: "Can I pay by [[cheque/check]]?" },
      { id: "cash", t: "Do you accept [[cash]]?" },
      { id: "coins", t: "He collects old [[coins]]." },
      { id: "currency", t: "What's the [[currency]] of Japan? – The yen." },
      { id: "banknotes", t: "The cash machine only gives [[notes/banknotes]]." },
      { id: "change", t: "I don't have any small [[change]] for the bus." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the word correct?",
    items: [
      { id: "debt", t: "I'm in debt to the bank.", ok: true },
      { id: "loan", t: "The bank gave me a debt of £1,000.", ok: false, fix: "The bank gave me a loan of £1,000." },
      { id: "amount", t: "Could you tell me the exact amount?", ok: true },
      { id: "deposit", t: "I made a deposit of 10,000 roubles.", ok: true },
      { id: "instalment", t: "We pay for the car in monthly budgets.", ok: false, fix: "We pay for the car in monthly instalments." },
      { id: "cash", t: "Can I pay by cash?", ok: false, fix: "Can I pay in cash?" },
      { id: "change", t: "The shop assistant gave me the wrong change.", ok: true },
      { id: "currency", t: "The local cash in Turkey is the lira.", ok: false, fix: "The local currency in Turkey is the lira." },
      { id: "budget", t: "We're on a tight budget.", ok: true },
      { id: "sum", t: "She paid a large sum for the house.", ok: true },
      { id: "cheque", t: "He paid by cheque.", ok: true },
      { id: "coins", t: "My pockets are full of coins.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the right word.",
    items: [
      { id: "loan", ru: "Мы взяли кредит.", en: "We took out a loan.", key: "loan" },
      { id: "debt", ru: "Он в долгах.", en: "He is in debt.", key: "in debt" },
      { id: "cash", ru: "Я плачу наличными.", en: "I'm paying in cash.", key: "cash" },
      { id: "change", ru: "Вот ваша сдача.", en: "Here's your change.", key: "change" },
      { id: "currency", ru: "Какая валюта в Таиланде?", en: "What is the currency in Thailand?", key: "currency" },
      { id: "instalment", ru: "Мы платим в рассрочку.", en: "We pay in instalments.", key: "instalments|installments" },
      { id: "budget", ru: "У нас ограниченный бюджет.", en: "We're on a tight budget.", key: "budget" },
      { id: "deposit", ru: "Нужно внести залог.", en: "You need to pay a deposit.", key: "deposit" },
      { id: "coins", ru: "У меня нет мелочи.", en: "I don't have any coins.", key: "change|coins" },
      { id: "amount", ru: "Какая сумма?", en: "What is the amount?", key: "amount|sum" }
    ] }
];
