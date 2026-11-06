// TITLE: Was / Were
// EYEBROW: Spotlight 6 · Module 7 · Past Simple of “to be”
// SUB: Глагол to be в прошедшем времени: was и were, wasn't и weren't, вопросы и краткие ответы, there was / there were. Карточки и шесть тренировок, две последние — в формате ОГЭ.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — правило выучено. Красная рамка — повтори это правило.
const META = { ls: "s6-m7-was-were" };
const P = [
  { id: "was", phrase: "I / he / she / it was", ru: "был, была, было: I was at home.", say: "I was at home. She was at school." },
  { id: "were", phrase: "you / we / they were", ru: "были: We were at the zoo.", say: "We were at the zoo." },
  { id: "wasnt", phrase: "wasn't = was not", ru: "не был: He wasn't at school.", say: "He wasn't at school." },
  { id: "werent", phrase: "weren't = were not", ru: "не были: They weren't hungry.", say: "They weren't hungry." },
  { id: "qwas", phrase: "Was he / she / it…?", ru: "вопрос: Was it cold?", say: "Was it cold?" },
  { id: "qwere", phrase: "Were you / we / they…?", ru: "вопрос: Were you tired?", say: "Were you tired?" },
  { id: "short", phrase: "Yes, I was. / No, they weren't.", ru: "краткие ответы", say: "Yes, I was. No, they weren't." },
  { id: "therewas", phrase: "There was + a / an / one…", ru: "был, была (один предмет): There was a cat.", say: "There was a cat in the garden." },
  { id: "therewere", phrase: "There were + many…", ru: "были (много): There were ten boys.", say: "There were ten boys in the park." },
  { id: "wh", phrase: "Where / Why were you…?", ru: "специальный вопрос: Where were you yesterday?", say: "Where were you yesterday?" }
];
const DRILLS = [
  { type: "gaps", title: "Was or were?", short: "Was / were", instr: "Выбери was или were.",
    items: [
      { id: "was", t: "I {{*was|were}} at the cinema last night." },
      { id: "was", t: "My mum {{*was|were}} very happy yesterday." },
      { id: "was", t: "The weather {{*was|were}} sunny last Sunday." },
      { id: "was", t: "It {{*was|were}} my birthday last Friday." },
      { id: "was", t: "Tom {{*was|were}} ill last week." },
      { id: "were", t: "We {{*were|was}} at the seaside last summer." },
      { id: "were", t: "My friends {{*were|was}} at the party." },
      { id: "were", t: "You {{*were|was}} right, Kate!" },
      { id: "were", t: "The cakes {{*were|was}} delicious." },
      { id: "were", t: "Ann and Lucy {{*were|was}} in the garden." },
      { id: "wasnt", t: "The film {{*wasn't|weren't}} interesting." },
      { id: "wasnt", t: "I {{*wasn't|weren't}} at school on Monday." },
      { id: "werent", t: "The shops {{*weren't|wasn't}} open on Sunday." },
      { id: "werent", t: "We {{*weren't|wasn't}} late for the lesson." },
      { id: "qwas", t: "{{*Was|Were}} it cold yesterday?" },
      { id: "qwas", t: "{{*Was|Were}} your dad at work last Saturday?" },
      { id: "qwere", t: "{{*Were|Was}} you at home last night?" },
      { id: "qwere", t: "{{*Were|Was}} your parents at the concert?" },
      { id: "therewas", t: "There {{*was|were}} a big cake on the table." },
      { id: "therewere", t: "There {{*were|was}} a lot of people at the museum." },
      { id: "therewere", t: "There {{*were|was}} twenty students in our class last year." },
      { id: "wh", t: "Where {{*were|was}} you last Sunday?" },
      { id: "wh", t: "Why {{*was|were}} Mike sad yesterday?" }
    ] },
  { type: "gaps", title: "Short answers", short: "Short answers", instr: "Выбери правильный краткий ответ.",
    items: [
      { id: "short", t: "— Were you at school yesterday? — Yes, I {{*was|were|did}}." },
      { id: "short", t: "— Was it hot in Sochi? — Yes, it {{*was|were|is}}." },
      { id: "short", t: "— Were they at home? — No, they {{*weren't|wasn't|didn't}}." },
      { id: "short", t: "— Was Kate happy? — No, she {{*wasn't|weren't|didn't}}." },
      { id: "short", t: "— Were we late? — No, you {{*weren't|wasn't|aren't}}." },
      { id: "short", t: "— Was the test difficult? — Yes, it {{*was|did|were}}." },
      { id: "short", t: "— Were your friends at the party? — Yes, they {{*were|was|did}}." },
      { id: "short", t: "— Was your granny a teacher? — No, she {{*wasn't|weren't|isn't}}." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Предложение верное или с ошибкой? Если с ошибкой, ты увидишь правильный вариант.",
    items: [
      { id: "was", t: "I was very tired after school.", ok: true },
      { id: "were", t: "We was at the park yesterday.", ok: false, fix: "We were at the park yesterday." },
      { id: "were", t: "They were in London last year.", ok: true },
      { id: "was", t: "She were at home last night.", ok: false, fix: "She was at home last night." },
      { id: "wasnt", t: "It wasn't cold yesterday.", ok: true },
      { id: "werent", t: "My friends wasn't at the party.", ok: false, fix: "My friends weren't at the party." },
      { id: "qwere", t: "Was you at the cinema?", ok: false, fix: "Were you at the cinema?" },
      { id: "qwas", t: "Was the film good?", ok: true },
      { id: "therewere", t: "There was three apples on the plate.", ok: false, fix: "There were three apples on the plate." },
      { id: "therewas", t: "There was a dog in the garden.", ok: true },
      { id: "wasnt", t: "He didn't was at school yesterday.", ok: false, fix: "He wasn't at school yesterday." },
      { id: "wh", t: "Where you were yesterday?", ok: false, fix: "Where were you yesterday?" }
    ] },
  { type: "order", title: "Build the sentence", short: "Build", instr: "Нажимай на слова по порядку и собери предложение по-английски.",
    items: [
      { id: "was", q: "Вчера я был в парке.", s: "I was in the park yesterday.", alt: ["Yesterday I was in the park."] },
      { id: "were", q: "Мы были в Москве прошлым летом.", s: "We were in Moscow last summer.", alt: ["Last summer we were in Moscow."] },
      { id: "wasnt", q: "Фильм не был скучным.", s: "The film wasn't boring." },
      { id: "werent", q: "Они не были голодны.", s: "They weren't hungry." },
      { id: "qwere", q: "Ты был дома вчера вечером?", s: "Were you at home last night?" },
      { id: "qwas", q: "Было холодно вчера?", s: "Was it cold yesterday?" },
      { id: "therewere", q: "В парке было много детей.", s: "There were a lot of children in the park." },
      { id: "wh", q: "Где ты был в субботу?", s: "Where were you on Saturday?" }
    ] },
  { type: "gaps", title: "Exam warm-up", short: "ОГЭ: sentences", instr: "Как в ОГЭ: поставь BE в нужную форму (was, were, wasn't, weren't) и напиши в пропуск.",
    items: [
      { id: "was", t: "Yesterday I [[was]] ^BE^ at my granny's house." },
      { id: "was", t: "The museum [[was]] ^BE^ very interesting." },
      { id: "were", t: "Last summer my cousins [[were]] ^BE^ at a sports camp." },
      { id: "were", t: "You [[were]] ^BE^ the best player in the match!" },
      { id: "wasnt", t: "My little sister [[wasn't/was not]] ^NOT BE^ at school yesterday because she was ill." },
      { id: "werent", t: "The tickets [[weren't/were not]] ^NOT BE^ expensive." },
      { id: "qwere", t: "[[Were]] ^BE^ you happy with your present?" },
      { id: "qwas", t: "[[Was]] ^BE^ the lesson difficult?" },
      { id: "therewere", t: "There [[were]] ^BE^ two birds on the roof." },
      { id: "therewas", t: "There [[was]] ^BE^ an old castle near the village." }
    ] },
  { type: "gaps", title: "Exam text", short: "ОГЭ: text", layout: "text", keepOrder: true,
    instr: "Задание как в ОГЭ. Прочитай текст. Поставь BE в нужную форму, чтобы оно подходило по смыслу.",
    items: [
      { t: "A DAY AT THE ZOO. Last Saturday my family and I [[were#were]] ^BE^ at the zoo. The weather [[was#was]] ^BE^ warm and sunny. There [[were#therewere]] ^BE^ a lot of people there. My favourite animals [[were#were]] ^BE^ the monkeys, because they [[were#were]] ^BE^ very funny. My little brother [[wasn't/was not#wasnt]] ^NOT BE^ happy at first, because he [[was#was]] ^BE^ afraid of the lions. In the afternoon we [[were#were]] ^BE^ hungry, so we had a picnic. There [[was#therewas]] ^BE^ a small café near the lake, but the sandwiches there [[weren't/were not#werent]] ^NOT BE^ cheap. “[[Was#qwas]] ^BE^ it a good day?” Mum asked in the evening. “Yes, it [[was#short]] ^BE^!” we answered." }
    ] }
];
