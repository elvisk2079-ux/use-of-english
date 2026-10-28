// TITLE: Make Yourself at Home
// EYEBROW: Use of English B2 · Unit 6 · Collocations with make and do (B)
// SUB: Twelve collocations with make or do plus a preposition: make the best of, make an impression on, do research on, do justice to, make way for… Five drills.
// BOARD: Your collocations
const META = { ls: "uoe-b2-u6-makeprep" };
const P = [
  { id: "bestof", phrase: "make the best of", ru: "извлечь лучшее из (плохой ситуации)", en: "accept a bad situation and do what you can" },
  { id: "enquiries", phrase: "make enquiries into / about", ru: "наводить справки о", en: "ask questions to get information about something" },
  { id: "research", phrase: "do research on / into", ru: "проводить исследование", en: "study something carefully to find new facts" },
  { id: "impression", phrase: "make an impression on", ru: "произвести впечатление на", en: "make someone have a (good) opinion of you" },
  { id: "report", phrase: "make a report on", ru: "составить отчёт о", en: "give an official description of what happened" },
  { id: "trouble", phrase: "make trouble for", ru: "создавать проблемы для", en: "cause problems for someone" },
  { id: "useof", phrase: "make (good) use of", ru: "(хорошо) использовать", en: "use something in a good way" },
  { id: "justice", phrase: "do justice to", ru: "отдавать должное; передавать во всей красе", en: "show how good someone or something really is" },
  { id: "contribution", phrase: "make a contribution to", ru: "внести вклад в", en: "give money or help to something" },
  { id: "athome", phrase: "make yourself at home", ru: "чувствуй себя как дома", en: "relax as if you were in your own house" },
  { id: "harmto", phrase: "do harm to", ru: "наносить вред", en: "damage or hurt something or someone" },
  { id: "wayfor", phrase: "make way for", ru: "уступить дорогу; освободить место для", en: "move so that someone or something can pass" }
];
const DRILLS = [
  { type: "gaps", title: "Make or do?", short: "Make or do", instr: "Tap the right verb.",
    items: [
      { id: "bestof", t: "The hotel was awful, but we {{*made|did}} the best of it." },
      { id: "enquiries", t: "The police are {{*making|doing}} enquiries into the robbery." },
      { id: "research", t: "She is {{*doing|making}} research on climate change." },
      { id: "impression", t: "He wore a suit to {{*make|do}} a good impression on the interviewers." },
      { id: "report", t: "The officer had to {{*make|do}} a report on the accident." },
      { id: "trouble", t: "Don't {{*make|do}} trouble for your parents." },
      { id: "useof", t: "We {{*made|did}} good use of our time." },
      { id: "justice", t: "The photo doesn't {{*do|make}} justice to the view." },
      { id: "contribution", t: "Every student {{*made|did}} a contribution to the class project." },
      { id: "athome", t: "Come in and {{*make|do}} yourself at home." },
      { id: "harmto", t: "Plastic {{*does|makes}} great harm to sea animals." },
      { id: "wayfor", t: "The old building was pulled down to {{*make|do}} way for a new park." }
    ] },
  { type: "gaps", title: "Which preposition?", short: "Preposition", instr: "Tap the preposition.",
    items: [
      { id: "bestof", t: "Let's make the best {{*of|for|from}} a bad situation." },
      { id: "enquiries", t: "I'll make some enquiries {{*into|at|on}} the matter." },
      { id: "research", t: "They're doing research {{*on|at|to}} new medicines." },
      { id: "impression", t: "She made a great impression {{*on|to|at}} everyone." },
      { id: "report", t: "The journalist made a report {{*on|at|to}} the floods." },
      { id: "trouble", t: "The new rules will only make trouble {{*for|to|on}} small shops." },
      { id: "useof", t: "Make good use {{*of|for|with}} your dictionary." },
      { id: "justice", t: "The film doesn't do justice {{*to|for|on}} the book." },
      { id: "contribution", t: "He made a big contribution {{*to|for|in}} science." },
      { id: "athome", t: "Make yourself {{*at|in|on}} home." },
      { id: "harmto", t: "Too much sugar does harm {{*to|for|on}} your teeth." },
      { id: "wayfor", t: "Please make way {{*for|to|at}} the ambulance." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the definition and tap the collocation." },
  { type: "gaps", title: "Verb and preposition", short: "Write it", instr: "Write make or do in the right form and the preposition.",
    items: [
      { id: "bestof", t: "It was raining, but we [[made]] the best [[of]] our holiday." },
      { id: "enquiries", t: "I'm [[making]] enquiries [[into/about]] a summer course." },
      { id: "research", t: "Scientists are [[doing]] research [[on/into]] the virus." },
      { id: "impression", t: "Did I [[make]] a good impression [[on]] your parents?" },
      { id: "report", t: "The inspector [[made]] a report [[on]] the school." },
      { id: "trouble", t: "He's always [[making]] trouble [[for]] his teachers." },
      { id: "useof", t: "We [[made]] good use [[of]] the sunny weather." },
      { id: "justice", t: "This photo doesn't [[do]] justice [[to]] her beauty." },
      { id: "contribution", t: "Our class [[made]] a contribution [[to]] the animal shelter." },
      { id: "athome", t: "Please [[make]] yourself [[at]] home." },
      { id: "harmto", t: "Pollution [[does]] serious harm [[to]] the environment." },
      { id: "wayfor", t: "Move your car to [[make]] way [[for]] the bus." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the collocation.",
    items: [
      { id: "bestof", ru: "Нужно извлечь лучшее из этой ситуации.", en: "We must make the best of this situation.", key: "make the best of" },
      { id: "impression", ru: "Она произвела на меня впечатление.", en: "She made an impression on me.", key: "made (a|an) (good |great |big )?impression on" },
      { id: "useof", ru: "Используй своё время с пользой.", en: "Make good use of your time.", key: "make (good )?use of" },
      { id: "athome", ru: "Чувствуй себя как дома!", en: "Make yourself at home!", key: "make yourself at home" },
      { id: "contribution", ru: "Он внёс большой вклад в науку.", en: "He made a big contribution to science.", key: "contribution to" },
      { id: "harmto", ru: "Курение вредит здоровью.", en: "Smoking does harm to your health.", key: "harm|damage" },
      { id: "wayfor", ru: "Уступите дорогу скорой!", en: "Make way for the ambulance!", key: "make way for" },
      { id: "research", ru: "Она проводит исследование.", en: "She is doing research.", key: "doing research" },
      { id: "trouble", ru: "Не создавай проблем.", en: "Don't make trouble.", key: "make trouble" },
      { id: "justice", ru: "Фото не передаёт всей красоты.", en: "The photo doesn't do it justice.", key: "do (it |the view )?justice" },
      { id: "enquiries", ru: "Полиция наводит справки.", en: "The police are making enquiries.", key: "making (enquiries|inquiries)" }
    ] }
];
