// TITLE: Past Simple: Regular Verbs
// EYEBROW: Spotlight 6 · Module 7 · Past Simple
// SUB: Правильные глаголы: окончание -ed и правила написания, три способа читать -ed, did / didn't в отрицаниях и вопросах. Карточки и семь тренировок, две последние — в формате ОГЭ.
// BOARD: Твои правила
// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — правило выучено. Красная рамка — повтори это правило.
const META = { ls: "s6-m7-past-regular" };
const P = [
  { id: "ed", phrase: "verb + -ed", ru: "play → played, watch → watched, help → helped", say: "played, watched, helped" },
  { id: "d", phrase: "-e + -d", ru: "dance → danced, like → liked, live → lived", say: "danced, liked, lived" },
  { id: "ied", phrase: "consonant + y → -ied", ru: "study → studied, cry → cried; но play → played", say: "studied, cried, but played" },
  { id: "dbl", phrase: "stop → stopped", ru: "короткий глагол: гласная + согласная → удваиваем: stop → stopped, plan → planned", say: "stopped, planned" },
  { id: "t", phrase: "-ed = [t]", ru: "после глухих звуков: walked, watched, stopped", say: "walked, watched, stopped" },
  { id: "dsound", phrase: "-ed = [d]", ru: "после звонких звуков и гласных: played, cleaned, lived", say: "played, cleaned, lived" },
  { id: "id", phrase: "-ed = [ɪd]", ru: "после t и d: wanted, visited, needed", say: "wanted, visited, needed" },
  { id: "didnt", phrase: "didn't + V1", ru: "отрицание: I didn't watch TV.", say: "I didn't watch TV." },
  { id: "did", phrase: "Did + subject + V1?", ru: "вопрос: Did you play football?", say: "Did you play football?" },
  { id: "short", phrase: "Yes, I did. / No, I didn't.", ru: "краткие ответы", say: "Yes, I did. No, I didn't." }
];
const DRILLS = [
  { type: "gaps", title: "Spell it right", short: "Spelling", instr: "Выбери правильное написание глагола в Past Simple.",
    items: [
      { id: "ed", t: "We {{*played|plaied|playd}} chess yesterday." },
      { id: "ed", t: "I {{*watched|watchd|watcht}} a film last night." },
      { id: "ed", t: "Mum {{*cooked|cookd|cookt}} dinner." },
      { id: "ed", t: "They {{*visited|visitted|visitd}} their granny." },
      { id: "d", t: "She {{*danced|danceed|dancd}} all evening." },
      { id: "d", t: "We {{*lived|liveed|livved}} in Omsk five years ago." },
      { id: "d", t: "I {{*liked|likeed|likked}} the cake very much." },
      { id: "ied", t: "Kate {{*studied|studyed|studed}} for the test." },
      { id: "ied", t: "The baby {{*cried|cryed|craied}} all night." },
      { id: "ied", t: "Tom {{*tried|tryed|tryied}} to open the door." },
      { id: "ied", t: "We {{*stayed|staied|stayd}} at a hotel." },
      { id: "dbl", t: "The bus {{*stopped|stoped|stopt}} near the school." },
      { id: "dbl", t: "We {{*planned|planed|plannd}} our trip." },
      { id: "dbl", t: "The dog {{*dropped|droped|dropd}} the ball." },
      { id: "dbl", t: "She {{*shopped|shoped|shopd}} all day on Saturday." }
    ] },
  { type: "gaps", title: "Write the -ed form", short: "Write -ed", instr: "Напиши глагол в Past Simple.",
    items: [
      { id: "ed", t: "help → [[helped]]" }, { id: "ed", t: "clean → [[cleaned]]" }, { id: "ed", t: "open → [[opened]]" },
      { id: "ed", t: "want → [[wanted]]" }, { id: "ed", t: "walk → [[walked]]" },
      { id: "d", t: "love → [[loved]]" }, { id: "d", t: "arrive → [[arrived]]" }, { id: "d", t: "decide → [[decided]]" },
      { id: "d", t: "move → [[moved]]" },
      { id: "ied", t: "carry → [[carried]]" }, { id: "ied", t: "hurry → [[hurried]]" }, { id: "ied", t: "tidy → [[tidied]]" },
      { id: "ied", t: "enjoy → [[enjoyed]]" },
      { id: "dbl", t: "stop → [[stopped]]" }, { id: "dbl", t: "chat → [[chatted]]" }, { id: "dbl", t: "hop → [[hopped]]" },
      { id: "dbl", t: "travel → [[travelled/traveled]]" }
    ] },
  { type: "mcq", title: "How do we say -ed?", short: "Sounds", instr: "Как читается окончание -ed? Нажми [t], [d] или [ɪd].",
    items: [
      { id: "t", q: "walked", o: ["[t]", "[d]", "[ɪd]"] }, { id: "t", q: "watched", o: ["[t]", "[d]", "[ɪd]"] },
      { id: "t", q: "helped", o: ["[t]", "[d]", "[ɪd]"] }, { id: "t", q: "washed", o: ["[t]", "[d]", "[ɪd]"] },
      { id: "t", q: "danced", o: ["[t]", "[d]", "[ɪd]"] }, { id: "t", q: "stopped", o: ["[t]", "[d]", "[ɪd]"] },
      { id: "dsound", q: "played", o: ["[d]", "[t]", "[ɪd]"] }, { id: "dsound", q: "cleaned", o: ["[d]", "[t]", "[ɪd]"] },
      { id: "dsound", q: "lived", o: ["[d]", "[t]", "[ɪd]"] }, { id: "dsound", q: "studied", o: ["[d]", "[t]", "[ɪd]"] },
      { id: "dsound", q: "opened", o: ["[d]", "[t]", "[ɪd]"] }, { id: "dsound", q: "called", o: ["[d]", "[t]", "[ɪd]"] },
      { id: "id", q: "wanted", o: ["[ɪd]", "[t]", "[d]"] }, { id: "id", q: "visited", o: ["[ɪd]", "[t]", "[d]"] },
      { id: "id", q: "needed", o: ["[ɪd]", "[t]", "[d]"] }, { id: "id", q: "decided", o: ["[ɪd]", "[t]", "[d]"] },
      { id: "id", q: "painted", o: ["[ɪd]", "[t]", "[d]"] }, { id: "id", q: "started", o: ["[ɪd]", "[t]", "[d]"] }
    ] },
  { type: "gaps", title: "Did, didn't or -ed?", short: "Did / didn't", instr: "Выбери правильный вариант. Помни: после did и didn't глагол без -ed.",
    items: [
      { id: "didnt", t: "I {{*didn't watch|didn't watched|not watched}} TV yesterday." },
      { id: "didnt", t: "We {{*didn't play|didn't played|don't played}} tennis last week." },
      { id: "didnt", t: "She {{*didn't like|didn't liked|wasn't like}} the soup." },
      { id: "didnt", t: "The shop {{*didn't open|didn't opened|not opened}} on Sunday." },
      { id: "did", t: "{{*Did|Do|Was}} you visit the museum last summer?" },
      { id: "did", t: "Did Tom {{*help|helped|helps}} his dad?" },
      { id: "did", t: "Did they {{*travel|travelled|travels}} by train?" },
      { id: "did", t: "Where {{*did|were|do}} you stay last summer?" },
      { id: "short", t: "— Did you enjoy the party? — Yes, I {{*did|was|do}}." },
      { id: "short", t: "— Did Kate call you? — No, she {{*didn't|wasn't|doesn't}}." },
      { id: "short", t: "— Did your parents cook dinner? — Yes, they {{*did|were|cooked}}." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Предложение верное или с ошибкой? Если с ошибкой, ты увидишь правильный вариант.",
    items: [
      { id: "ed", t: "We watched a funny cartoon yesterday.", ok: true },
      { id: "ied", t: "She studyed English last night.", ok: false, fix: "She studied English last night." },
      { id: "dbl", t: "The car stoped at the traffic lights.", ok: false, fix: "The car stopped at the traffic lights." },
      { id: "d", t: "I liveed in a small town.", ok: false, fix: "I lived in a small town." },
      { id: "ied", t: "We played football after school.", ok: true },
      { id: "didnt", t: "He didn't visited his granny.", ok: false, fix: "He didn't visit his granny." },
      { id: "did", t: "Did you clean your room?", ok: true },
      { id: "did", t: "Did she walked to school?", ok: false, fix: "Did she walk to school?" },
      { id: "didnt", t: "They not worked last Saturday.", ok: false, fix: "They didn't work last Saturday." },
      { id: "short", t: "— Did you like the film? — Yes, I liked.", ok: false, fix: "Yes, I did." },
      { id: "ed", t: "Mum cook dinner yesterday.", ok: false, fix: "Mum cooked dinner yesterday." },
      { id: "didnt", t: "I didn't want to go to bed.", ok: true }
    ] },
  { type: "gaps", title: "Exam warm-up", short: "ОГЭ: sentences", instr: "Как в ОГЭ: поставь глагол справа в Past Simple и напиши его в пропуск.",
    items: [
      { id: "ed", t: "Last Sunday we [[visited]] ^VISIT^ the Science Museum." },
      { id: "ed", t: "My dad [[painted]] ^PAINT^ the fence last weekend." },
      { id: "d", t: "The train [[arrived]] ^ARRIVE^ at 10 o'clock." },
      { id: "d", t: "We [[danced]] ^DANCE^ at the school party." },
      { id: "ied", t: "My brother [[carried]] ^CARRY^ the heavy bag home." },
      { id: "ied", t: "We [[enjoyed]] ^ENJOY^ our holiday in Kazan." },
      { id: "dbl", t: "Two girls [[chatted]] ^CHAT^ on the phone for an hour." },
      { id: "dbl", t: "Suddenly the music [[stopped]] ^STOP^." },
      { id: "didnt", t: "I [[didn't like/did not like]] ^NOT LIKE^ the weather in London." },
      { id: "didnt", t: "We [[didn't watch/did not watch]] ^NOT WATCH^ the match on TV." },
      { id: "did", t: "[[Did]] ^DO^ you phone your granny yesterday?" }
    ] },
  { type: "gaps", title: "Exam text", short: "ОГЭ: text", layout: "text", keepOrder: true,
    instr: "Задание как в ОГЭ. Прочитай текст. Поставь слово справа от пропуска в нужную форму.",
    items: [
      { t: "MY WEEKEND. Last weekend was great! On Saturday morning I [[helped#ed]] ^HELP^ my mum in the garden. We [[planted#id]] ^PLANT^ some flowers and [[watered#dsound]] ^WATER^ the trees. Then my friend Lena [[phoned#dsound]] ^PHONE^ me, and we [[decided#d]] ^DECIDE^ to go to the park. We [[stayed#ied]] ^STAY^ there for three hours. Lena's little dog [[hurried#ied]] ^HURRY^ after the ducks, but it [[stopped#dbl]] ^STOP^ at the water. On Sunday it rained, so we [[didn't go/did not go#didnt]] ^NOT GO^ out. I [[tidied#ied]] ^TIDY^ my room and [[listened#dsound]] ^LISTEN^ to music. In the evening my granny [[asked#t]] ^ASK^ me: “[[Did#did]] ^DO^ you have a good weekend?”" }
    ] }
];
