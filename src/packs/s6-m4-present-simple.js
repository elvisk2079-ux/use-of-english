// TITLE: Present Simple
// EYEBROW: Spotlight 6 · Module 4 · Grammar
// SUB: Настоящее простое время: окончания -s / -es / -ies, do и does, отрицания и вопросы. Карточки и пять тренировок, две последние — в формате ОГЭ.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — правило выучено. Красная рамка — повтори это правило.
const META = { ls: "s6-m4-present-simple" };
const P = [
  { id: "s", phrase: "he / she / it + -s", ru: "works, plays, likes", say: "he works, she plays, it likes" },
  { id: "es", phrase: "-es after o, s, sh, ch, x", ru: "go → goes, do → does, watch → watches, wash → washes", say: "goes, does, watches, washes" },
  { id: "ies", phrase: "consonant + y → -ies", ru: "study → studies, но play → plays (перед y гласная)", say: "studies, but plays" },
  { id: "has", phrase: "have → has", ru: "he has, she has, it has", say: "he has, she has" },
  { id: "dont", phrase: "I / you / we / they don't + verb", ru: "отрицание: I don't like milk.", say: "I don't like milk." },
  { id: "doesnt", phrase: "he / she / it doesn't + verb", ru: "отрицание, глагол без -s: She doesn't like milk.", say: "She doesn't like milk." },
  { id: "do", phrase: "Do + I / you / we / they + verb?", ru: "общий вопрос: Do you live here?", say: "Do you live here?" },
  { id: "does", phrase: "Does + he / she / it + verb?", ru: "общий вопрос, глагол без -s: Does he live here?", say: "Does he live here?" },
  { id: "short", phrase: "Yes, I do. / No, she doesn't.", ru: "краткие ответы", say: "Yes, I do. No, she doesn't." },
  { id: "wh", phrase: "Where / What time + do / does…?", ru: "специальный вопрос: Where does he work?", say: "Where does he work?" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Choose", instr: "Выбери правильную форму глагола.",
    items: [
      { id: "s", t: "My dad {{*works|work|working}} in a hospital." },
      { id: "s", t: "Our cat {{*sleeps|sleep|sleeping}} on my bed every night." },
      { id: "s", t: "Ann {{*likes|like|likies}} chocolate ice cream." },
      { id: "es", t: "Tom {{*goes|gos|go}} to school by bus." },
      { id: "es", t: "My mum {{*watches|watchs|watch}} TV in the evening." },
      { id: "es", t: "He {{*does|dos|do}} his homework after dinner." },
      { id: "es", t: "She {{*washes|washs|wash}} the dishes on Sundays." },
      { id: "ies", t: "My sister {{*studies|studys|study}} French." },
      { id: "ies", t: "Max {{*plays|plaies|play}} football on Saturdays." },
      { id: "has", t: "Kate {{*has|haves|have}} breakfast at 7 o'clock." },
      { id: "has", t: "My grandad {{*has|have|haves}} lunch at home." },
      { id: "dont", t: "We {{*don't|doesn't|not}} go to school on Sundays." },
      { id: "dont", t: "I {{*don't|doesn't|am not}} like rainy days." },
      { id: "doesnt", t: "My brother {{*doesn't|don't|isn't}} eat fish." },
      { id: "doesnt", t: "Lucy doesn't {{*play|plays|playing}} the piano." },
      { id: "do", t: "{{*Do|Does|Are}} you get up early?" },
      { id: "do", t: "{{*Do|Does|Is}} your parents work at the weekend?" },
      { id: "does", t: "{{*Does|Do|Is}} your sister like pizza?" },
      { id: "does", t: "Does he {{*live|lives|living}} near the park?" },
      { id: "short", t: "— Do you like tea? — Yes, I {{*do|does|am}}." },
      { id: "short", t: "— Does Mike speak English? — No, he {{*doesn't|don't|isn't}}." },
      { id: "wh", t: "Where {{*does|do|is}} your aunt live?" },
      { id: "wh", t: "What time {{*do|does|are}} you have lunch?" }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Предложение верное или с ошибкой? Если с ошибкой, ты увидишь правильный вариант.",
    items: [
      { id: "s", t: "My friend lives in Moscow.", ok: true },
      { id: "s", t: "I gets up at 7 o'clock.", ok: false, fix: "I get up at 7 o'clock." },
      { id: "es", t: "He gos to the gym on Mondays.", ok: false, fix: "He goes to the gym on Mondays." },
      { id: "ies", t: "My brother studys a lot.", ok: false, fix: "My brother studies a lot." },
      { id: "ies", t: "Ben plays tennis every Friday.", ok: true },
      { id: "has", t: "Mary haves lunch at school.", ok: false, fix: "Mary has lunch at school." },
      { id: "doesnt", t: "She doesn't likes coffee.", ok: false, fix: "She doesn't like coffee." },
      { id: "dont", t: "They doesn't walk to school.", ok: false, fix: "They don't walk to school." },
      { id: "do", t: "Do they play computer games?", ok: true },
      { id: "does", t: "Do your mum cook dinner every day?", ok: false, fix: "Does your mum cook dinner every day?" },
      { id: "does", t: "Does she speak Spanish?", ok: true },
      { id: "short", t: "— Does Kate like cats? — Yes, she does.", ok: true },
      { id: "wh", t: "Where you live?", ok: false, fix: "Where do you live?" }
    ] },
  { type: "order", title: "Build the sentence", short: "Build", instr: "Нажимай на слова по порядку и собери предложение по-английски.",
    items: [
      { id: "s", q: "Моя мама готовит завтрак каждое утро.", s: "My mum cooks breakfast every morning.", alt: ["Every morning my mum cooks breakfast."] },
      { id: "es", q: "Он всегда делает уроки после школы.", s: "He always does his homework after school." },
      { id: "dont", q: "Мы не смотрим телевизор утром.", s: "We don't watch TV in the morning." },
      { id: "doesnt", q: "Моя сестра не пьёт молоко.", s: "My sister doesn't drink milk." },
      { id: "do", q: "Твои друзья играют в футбол?", s: "Do your friends play football?" },
      { id: "does", q: "Он живёт рядом со школой?", s: "Does he live near the school?" },
      { id: "wh", q: "Во сколько ты встаёшь?", s: "What time do you get up?" },
      { id: "wh", q: "Где работает твой папа?", s: "Where does your dad work?" }
    ] },
  { type: "gaps", title: "Exam warm-up", short: "ОГЭ: sentences", instr: "Как в ОГЭ: поставь слово справа в нужную форму, чтобы оно подходило по смыслу. Напиши ответ и нажми Check.",
    items: [
      { id: "s", t: "My uncle [[drives]] ^DRIVE^ a big red bus." },
      { id: "s", t: "The shop [[opens]] ^OPEN^ at 9 o'clock." },
      { id: "es", t: "Our teacher often [[teaches]] ^TEACH^ us English songs." },
      { id: "es", t: "Jack [[fixes]] ^FIX^ bikes for his friends." },
      { id: "es", t: "Mum [[goes]] ^GO^ to work by tram." },
      { id: "ies", t: "Granny [[flies]] ^FLY^ to Sochi every summer." },
      { id: "ies", t: "My cousin [[tries]] ^TRY^ to be on time, but he is often late." },
      { id: "has", t: "Every Saturday my family [[has]] ^HAVE^ a picnic in the park." },
      { id: "has", t: "Sam [[has]] ^HAVE^ a shower before bed." },
      { id: "doesnt", t: "My little brother [[doesn't like/does not like]] ^NOT LIKE^ vegetables." },
      { id: "dont", t: "My friends and I [[don't go/do not go]] ^NOT GO^ to the cinema on weekdays." },
      { id: "does", t: "[[Does]] ^DO^ your dog sleep in your room?" }
    ] },
  { type: "gaps", title: "Exam texts", short: "ОГЭ: texts", layout: "text", keepOrder: true,
    instr: "Задание как в ОГЭ. Прочитай текст. Поставь слово справа от пропуска в нужную форму, чтобы оно подходило по смыслу.",
    items: [
      { t: "KATE'S DAY. Kate Morris [[lives#s]] ^LIVE^ in a small town near the sea. Every morning she [[gets#s]] ^GET^ up at seven o'clock. Her mum [[makes#s]] ^MAKE^ pancakes, and Kate [[has#has]] ^HAVE^ breakfast with her little brother. Then she [[goes#es]] ^GO^ to school on foot because the school is very close. Kate [[doesn't like/does not like#doesnt]] ^NOT LIKE^ Maths, but she [[enjoys#ies]] ^ENJOY^ English and Art. After school she [[studies#ies]] ^STUDY^ for an hour and then [[watches#es]] ^WATCH^ her favourite cartoons." },
      { t: "A LETTER FROM BEN. Hi Alex! Thanks for your letter. You ask about my family. My dad is a vet, so he [[spends#s]] ^SPEND^ his days with cats, dogs and horses. My mum [[teaches#es]] ^TEACH^ music at a school. My parents [[don't work/do not work#dont]] ^NOT WORK^ at the weekend, so we often go to the park together. Our dog Rex [[catches#es]] ^CATCH^ the ball very well. My sister Emma [[tidies#ies]] ^TIDY^ her room every Saturday, but I don't! What about you? [[Does#does]] ^DO^ your brother play the guitar? What time [[do#wh]] ^DO^ you usually get up on Sundays? Write back soon! Ben" }
    ] }
];
