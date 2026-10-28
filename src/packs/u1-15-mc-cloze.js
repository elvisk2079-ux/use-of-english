// TITLE: Finding Employment
// EYEBROW: Use of English B2 · Unit 1 · Examination Practice A (Section 2)
// SUB: The words and phrases from the multiple-choice text “Finding Employment”, in new sentences and a new exam-style text. Twelve phrases, five drills.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u1-mccloze" };
const P = [
  { id: "job", phrase: "my first job", ru: "моя первая работа" },
  { id: "assistant", phrase: "a sales assistant", ru: "продавец-консультант" },
  { id: "university", phrase: "study at university", ru: "учиться в университете" },
  { id: "able", phrase: "be able to", ru: "мочь, быть в состоянии" },
  { id: "across", phrase: "come across", ru: "случайно наткнуться" },
  { id: "asthough", phrase: "as though it were yesterday", ru: "как будто это было вчера" },
  { id: "over", phrase: "go over (a contract)", ru: "просмотреть, изучить" },
  { id: "staff", phrase: "a member of staff", ru: "сотрудник (член коллектива)" },
  { id: "responsible", phrase: "responsible for", ru: "ответственный за" },
  { id: "colleagues", phrase: "colleagues", ru: "коллеги" },
  { id: "deal", phrase: "deal with (customers)", ru: "иметь дело с, обслуживать" },
  { id: "nerves", phrase: "get on sb's nerves", ru: "действовать на нервы" }
];
const DRILLS = [
  { type: "gaps", title: "Choose A, B, C or D", short: "A B C D", instr: "Tap the option that best fits each gap, like in Part 1 of the exam.",
    items: [
      { id: "job", t: "Her first {{*job|work|occupation|employment}} was in a bookshop." },
      { id: "assistant", t: "The sales {{*assistant|employee|attendant|officer}} showed me the new phones." },
      { id: "university", t: "My cousin is studying law {{*at|in|on|for}} university." },
      { id: "able", t: "I was only {{*able|possible|capable|excellent}} to work at weekends." },
      { id: "across", t: "I came {{*across|into|on|round}} the advert while I was reading the paper." },
      { id: "asthough", t: "I remember my first day as though {{*it|I|there|that}} were yesterday." },
      { id: "over", t: "Please read the contract and go {{*over|on|ahead|with}} it carefully before you sign." },
      { id: "staff", t: "As a member of {{*staff|crew|team|party}}, you can use the gym for free." },
      { id: "responsible", t: "Who is responsible {{*for|of|at|with}} the cash desk today?" },
      { id: "colleagues", t: "My {{*colleagues|staff|employees|assistants}} organised a party for my birthday." },
      { id: "deal", t: "Shop assistants often have to {{*deal with|control|manage|cooperate}} rude customers." },
      { id: "nerves", t: "His constant complaints really {{*got|came|went|were}} on our nerves." },
      { id: "able", t: "Will you be {{*able|can|possible|capable}} to come to the meeting?" },
      { id: "staff", t: "All {{*staff|crew|colleague|party}} must attend the training on Monday." },
      { id: "deal", t: "I'll {{*deal|cope|face|handle}} with your order straight away." },
      { id: "responsible", t: "In my new job I'm {{*responsible|in charge|proud|able}} for ordering supplies." }
    ] },
  { type: "gaps", title: "Exam text: My summer job", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then tap the best option for each gap.",
    items: [
      { t: "Last summer I got my first {{*job|work|occupation|career#job}} at a busy café near the beach. I was still studying {{*at|in|on|for#university}} university, so I was only {{*able|possible|proud|capable#able}} to work three days a week. I came {{*across|into|round|over#across}} the advert on a noticeboard at the bus stop. On my first day, the owner asked me to go {{*over|with|ahead|on#over}} the menu so that I could answer customers' questions. As a member of {{*staff|crew|party|team#staff}}, I got free lunches, which was great. I was responsible {{*for|of|with|at#responsible}} the ice-cream counter. My {{*colleagues|employers|assistants|clerks#colleagues}} were friendly and helpful, even when we had to {{*deal with|manage|operate|undertake#deal}} difficult customers who {{*got|went|came|made#nerves}} on our nerves. I still remember that summer as though {{*it|there|I|that#asthough}} were yesterday." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "job", t: "Getting your first [[job]] is always exciting." },
      { id: "assistant", t: "She works as a sales [[assistant]] in a shoe shop." },
      { id: "university", t: "He met his wife when they were both [[at]] university." },
      { id: "able", t: "Sorry, I won't be [[able]] to help you tomorrow." },
      { id: "across", t: "Have you ever come [[across]] this word before?" },
      { id: "asthough", t: "He talked about the trip as [[though/if]] it were yesterday." },
      { id: "over", t: "The teacher went [[over]] the test with us and explained our mistakes." },
      { id: "staff", t: "A member of [[staff]] will help you shortly." },
      { id: "responsible", t: "The captain is responsible [[for]] the safety of the passengers." },
      { id: "colleagues", t: "I get on really well with my [[colleagues]] at work." },
      { id: "deal", t: "Nurses have to deal [[with]] very stressful situations." },
      { id: "nerves", t: "The noise from the street is getting on my [[nerves]]." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "university", t: "My sister is studying in university.", ok: false, fix: "My sister is studying at university." },
      { id: "job", t: "I'm looking for a part-time job.", ok: true },
      { id: "able", t: "I wasn't able to finish the test.", ok: true },
      { id: "staff", t: "He's a member of crew at the school.", ok: false, fix: "He's a member of staff at the school." },
      { id: "responsible", t: "Who is responsible of this mess?", ok: false, fix: "Who is responsible for this mess?" },
      { id: "across", t: "I came across an old friend in the street.", ok: true },
      { id: "nerves", t: "His jokes went on my nerves.", ok: false, fix: "His jokes got on my nerves." },
      { id: "deal", t: "She deals with complaints from customers.", ok: true },
      { id: "over", t: "Let's go on the report before the meeting.", ok: false, fix: "Let's go over the report before the meeting." },
      { id: "asthough", t: "I remember it as though it were yesterday.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "university", ru: "Я учусь в университете.", en: "I study at university.", key: "at (the )?university" },
      { id: "able", ru: "Я смогу прийти только в субботу.", en: "I will only be able to come on Saturday.", key: "be able to" },
      { id: "across", ru: "Я наткнулась на это объявление в интернете.", en: "I came across this advert online.", key: "came across" },
      { id: "asthough", ru: "Я помню это, как будто это было вчера.", en: "I remember it as though it were yesterday.", key: "as (though|if) it (were|was) yesterday" },
      { id: "staff", ru: "Сотрудники получают скидку.", en: "Members of staff get a discount.", key: "members? of staff|staff" },
      { id: "responsible", ru: "Я отвечаю за отдел игрушек.", en: "I am responsible for the toy department.", key: "responsible for" },
      { id: "colleagues", ru: "Мои коллеги очень дружелюбные.", en: "My colleagues are very friendly.", key: "colleagues" },
      { id: "deal", ru: "Мне приходится иметь дело с трудными клиентами.", en: "I have to deal with difficult customers.", key: "deal with" },
      { id: "nerves", ru: "Этот шум действует мне на нервы.", en: "This noise gets on my nerves.", key: "get(s|ting)? on my nerves" },
      { id: "over", ru: "Давай ещё раз просмотрим договор.", en: "Let's go over the contract again.", key: "go over" }
    ] }
];
