// TITLE: Past Simple: All Together
// EYEBROW: Spotlight 6 · Module 7 · Past Simple · Review
// SUB: Всё вместе: правильные и неправильные глаголы, was / were, отрицания и вопросы с did. Карточки и семь тренировок, три последние — тексты в формате ОГЭ.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — правило выучено. Красная рамка — повтори это правило.
const META = { ls: "s6-m7-past-simple-mix" };
const P = [
  { id: "reg", phrase: "regular: verb + -ed", ru: "правильные глаголы: played, visited, studied", say: "played, visited, studied" },
  { id: "irr", phrase: "irregular: V2", ru: "неправильные глаголы: went, saw, bought", say: "went, saw, bought" },
  { id: "be", phrase: "was / were", ru: "глагол to be: I was, we were", say: "I was, we were" },
  { id: "didnt", phrase: "didn't + V1", ru: "отрицание: I didn't go (не didn't went)", say: "I didn't go." },
  { id: "did", phrase: "Did + subject + V1?", ru: "вопрос: Did you see…? (не Did you saw…?)", say: "Did you see it?" },
  { id: "wh", phrase: "What / Where / When did…?", ru: "специальный вопрос: Where did you go?", say: "Where did you go?" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Choose", instr: "Выбери правильную форму.",
    items: [
      { id: "irr", t: "We {{*went|goed|go}} to the theatre last Friday." },
      { id: "irr", t: "I {{*saw|seed|seen}} a rainbow yesterday." },
      { id: "irr", t: "Mum {{*bought|buyed|brought}} a new dress." },
      { id: "irr", t: "Dad {{*made|maked|make}} a cake for my birthday." },
      { id: "irr", t: "The children {{*ate|eated|eaten}} all the sweets." },
      { id: "reg", t: "We {{*visited|visit|visitted}} the museum last month." },
      { id: "reg", t: "Ann {{*tidied|tidyed|tidy}} her room on Saturday." },
      { id: "reg", t: "Tom {{*stopped|stoped|stop}} to say hello." },
      { id: "be", t: "The weather {{*was|were|did}} terrible last week." },
      { id: "be", t: "My parents {{*were|was|did}} at work yesterday." },
      { id: "didnt", t: "I {{*didn't go|didn't went|wasn't go}} to school yesterday." },
      { id: "didnt", t: "She {{*didn't buy|didn't bought|not bought}} anything." },
      { id: "didnt", t: "We {{*didn't see|didn't saw|weren't see}} the film." },
      { id: "did", t: "{{*Did|Was|Were}} you go to the party?" },
      { id: "did", t: "Did they {{*win|won|wins}} the match?" },
      { id: "did", t: "{{*Were|Did}} you tired after the trip?" },
      { id: "wh", t: "Where {{*did you go|you went|did you went}} last summer?" },
      { id: "wh", t: "What {{*did she buy|she bought|did she bought}} at the shop?" },
      { id: "wh", t: "When {{*did the film start|the film started|did the film started}}?" }
    ] },
  { type: "gaps", title: "Make it negative", short: "Negatives", instr: "Сделай предложение отрицательным: didn't + первая форма глагола (или wasn't / weren't).",
    items: [
      { id: "didnt", t: "Kate went to the park. → Kate [[didn't go/did not go]] to the park." },
      { id: "didnt", t: "I saw Tom yesterday. → I [[didn't see/did not see]] Tom yesterday." },
      { id: "didnt", t: "We had lunch at school. → We [[didn't have/did not have]] lunch at school." },
      { id: "didnt", t: "He wrote a letter. → He [[didn't write/did not write]] a letter." },
      { id: "didnt", t: "They played chess. → They [[didn't play/did not play]] chess." },
      { id: "didnt", t: "Mum cooked soup. → Mum [[didn't cook/did not cook]] soup." },
      { id: "didnt", t: "Our team won the match. → Our team [[didn't win/did not win]] the match." },
      { id: "be", t: "It was cold. → It [[wasn't/was not]] cold." },
      { id: "be", t: "The boys were hungry. → The boys [[weren't/were not]] hungry." }
    ] },
  { type: "order", title: "Ask the question", short: "Questions", instr: "Собери вопрос из слов.",
    items: [
      { id: "did", q: "Ты видел этот фильм?", s: "Did you see this film?" },
      { id: "did", q: "Твой брат выиграл матч?", s: "Did your brother win the match?" },
      { id: "did", q: "Они ездили в Москву?", s: "Did they go to Moscow?" },
      { id: "wh", q: "Где ты купил эту куртку?", s: "Where did you buy this jacket?" },
      { id: "wh", q: "Что вы ели на ужин?", s: "What did you eat for dinner?" },
      { id: "wh", q: "Когда ты проснулся?", s: "When did you wake up?" },
      { id: "be", q: "Вы были в зоопарке?", s: "Were you at the zoo?" }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Предложение верное или с ошибкой? Если с ошибкой, ты увидишь правильный вариант.",
    items: [
      { id: "irr", t: "We swam in the lake last summer.", ok: true },
      { id: "irr", t: "I buyed a new phone.", ok: false, fix: "I bought a new phone." },
      { id: "didnt", t: "She didn't came to the party.", ok: false, fix: "She didn't come to the party." },
      { id: "did", t: "Did you find your keys?", ok: true },
      { id: "did", t: "Did he took your pen?", ok: false, fix: "Did he take your pen?" },
      { id: "be", t: "We was very happy.", ok: false, fix: "We were very happy." },
      { id: "be", t: "Did you be at home?", ok: false, fix: "Were you at home?" },
      { id: "reg", t: "My sister studied all evening.", ok: true },
      { id: "wh", t: "Where you did go?", ok: false, fix: "Where did you go?" },
      { id: "reg", t: "We enjoied the trip.", ok: false, fix: "We enjoyed the trip." },
      { id: "irr", t: "Dad drove us to the station.", ok: true },
      { id: "didnt", t: "I didn't understand the question.", ok: true }
    ] },
  { type: "gaps", title: "Exam text 1", short: "ОГЭ: text 1", layout: "text", keepOrder: true,
    instr: "Задание как в ОГЭ. Прочитай текст. Поставь слово справа от пропуска в нужную форму, чтобы оно подходило по смыслу.",
    items: [
      { t: "A TRIP TO THE MOUNTAINS. Last summer my family [[went#irr]] ^GO^ to the mountains. We [[drove#irr]] ^DRIVE^ there in Dad's old car. The journey [[was#be]] ^BE^ long, but we [[sang#irr]] ^SING^ songs all the way. When we arrived, we [[put#irr]] ^PUT^ up our tent near a lake. In the evening Dad [[made#irr]] ^MAKE^ a fire and we [[cooked#reg]] ^COOK^ sausages. At night I [[heard#irr]] ^HEAR^ a strange noise, but I [[didn't wake/did not wake#didnt]] ^NOT WAKE^ anybody. In the morning we [[saw#irr]] ^SEE^ the footprints of a fox!" }
    ] },
  { type: "gaps", title: "Exam text 2", short: "ОГЭ: text 2", layout: "text", keepOrder: true,
    instr: "Задание как в ОГЭ. Прочитай текст. Поставь слово справа от пропуска в нужную форму.",
    items: [
      { t: "THE LOST KITTEN. One cold evening Sam [[found#irr]] ^FIND^ a small kitten in the street. It [[was#be]] ^BE^ wet and hungry. Sam [[took#irr]] ^TAKE^ it home and [[gave#irr]] ^GIVE^ it some milk. The kitten [[drank#irr]] ^DRINK^ it all and [[fell#irr]] ^FALL^ asleep on the sofa. The next day Sam [[wrote#irr]] ^WRITE^ a notice: “Is it your kitten?” Nobody [[phoned#reg]] ^PHONE^, so his parents [[let#irr]] ^LET^ him keep it. “What [[did#wh]] ^DO^ you call it?” his friends asked. “Lucky,” Sam answered." }
    ] },
  { type: "gaps", title: "Exam text 3", short: "ОГЭ: text 3", layout: "text", keepOrder: true,
    instr: "Задание как в ОГЭ. Прочитай текст. Поставь слово справа от пропуска в нужную форму.",
    items: [
      { t: "MY BEST BIRTHDAY. My last birthday [[was#be]] ^BE^ the best! I [[woke#irr]] ^WAKE^ up early and [[ran#irr]] ^RUN^ into the kitchen. My mum and dad [[were#be]] ^BE^ there with a big chocolate cake. My friends [[came#irr]] ^COME^ in the afternoon and [[brought#irr]] ^BRING^ lots of presents. We [[played#reg]] ^PLAY^ games and [[danced#reg]] ^DANCE^ in the living room. My grandparents [[didn't come/did not come#didnt]] ^NOT COME^ because they live far away, but they [[sent#irr]] ^SEND^ me a nice card. In the evening I [[felt#irr]] ^FEEL^ tired but very happy." }
    ] }
];
