// TITLE: A Talent for Lying
// EYEBROW: Use of English B2 · Unit 3 · Examination Practice A (Section 1)
// SUB: The small words tested in the open cloze “A Talent for Lying”: as … as, the same … as, far more … than, have sympathy for. Five drills, ending with a new open cloze text.
// BOARD: Your key phrases
const META = { ls: "uoe-b2-u3-opencloze" };
const P = [
  { id: "isbad", phrase: "take it for granted that lying is bad", ru: "считать само собой разумеющимся" },
  { id: "asimportant", phrase: "just as important as", ru: "так же важен, как" },
  { id: "theart", phrase: "the art of …", ru: "искусство (чего-то)" },
  { id: "forexample", phrase: "for example", ru: "например" },
  { id: "agiveaway", phrase: "a giveaway", ru: "то, что выдаёт" },
  { id: "sameas", phrase: "the same effect as", ru: "тот же эффект, что" },
  { id: "watchout", phrase: "watch out for", ru: "высматривать, остерегаться" },
  { id: "farmore", phrase: "far / much more … than", ru: "гораздо более … чем" },
  { id: "sympathy", phrase: "have sympathy for", ru: "сочувствовать" },
  { id: "morewilling", phrase: "more willing to", ru: "более готовы (сделать)" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the ONE word that fits the gap.",
    items: [
      { id: "isbad", t: "Most people take it for granted that smoking {{*is|are|be}} bad for you." },
      { id: "asimportant", t: "Sleep is just {{*as|so|more}} important as food." },
      { id: "asimportant", t: "Listening is as important {{*as|than|that}} speaking." },
      { id: "theart", t: "Children learn {{*the|a|–}} art of conversation from their parents." },
      { id: "forexample", t: "{{*For|By|As}} example, many birds fly south in winter." },
      { id: "agiveaway", t: "Her red face was {{*a|an|–}} giveaway – she was lying." },
      { id: "sameas", t: "A fake smile doesn't have the {{*same|similar|like}} effect as a real one." },
      { id: "sameas", t: "My phone is the same model {{*as|than|like}} yours." },
      { id: "watchout", t: "Detectives watch {{*out|over|up}} for clues." },
      { id: "farmore", t: "Women are {{*far|very|too}} more skilful liars than men." },
      { id: "farmore", t: "This exercise is much easier {{*than|as|that}} the last one." },
      { id: "sympathy", t: "We have a lot of sympathy {{*for|to|with}} people who lose their homes." },
      { id: "morewilling", t: "Children are often {{*more|most|much}} willing to try new things than adults." },
      { id: "forexample", t: "Many fruits, {{*for|as|in}} example apples, are rich in vitamins." }
    ] },
  { type: "gaps", title: "One word only", short: "One word", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "isbad", t: "Everybody knows that eating too much sugar [[is]] bad for your teeth." },
      { id: "asimportant", t: "Your health is just [[as]] important as your exam results." },
      { id: "theart", t: "My grandmother taught me [[the]] art of making bread." },
      { id: "forexample", t: "Some animals, [[for]] example bears, sleep all winter." },
      { id: "agiveaway", t: "His nervous laugh was [[a]] giveaway." },
      { id: "sameas", t: "This medicine has the [[same]] effect as that one." },
      { id: "sameas", t: "Her dress is the same colour [[as]] mine." },
      { id: "watchout", t: "Watch [[out]] for cars when you cross the road." },
      { id: "farmore", t: "He is [[far/much]] taller than his brother." },
      { id: "farmore", t: "Cats are more independent [[than]] dogs." },
      { id: "sympathy", t: "I have no sympathy [[for]] people who are rude to waiters." },
      { id: "morewilling", t: "People who sleep well are [[more]] willing to help others." }
    ] },
  { type: "gaps", title: "Open cloze: Why do we laugh?", short: "Open cloze text", layout: "text", keepOrder: true,
    instr: "This text is like the exam. Read it all first, then write ONE word in each gap.",
    items: [
      { t: "Most of us take it for granted that laughing [[is#isbad]] good for us. However, scientists say that laughter is just [[as#asimportant]] important as talking. Babies learn [[the#theart]] art of laughing very early, long before they can speak. [[For#forexample]] example, a baby laughs when you play peekaboo. A real laugh is also [[a#agiveaway]] giveaway: it shows that we feel safe. A polite laugh doesn't have the [[same#sameas]] effect on people [[as#sameas]] a real one. We all watch [[out#watchout]] for signs that others are enjoying our jokes. Interestingly, people laugh [[far/much#farmore]] more when they are with friends [[than#farmore]] when they are alone. Laughing together makes us feel more sympathy [[for#sympathy]] each other, so we become [[more#morewilling]] willing to help." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the small word correct?",
    items: [
      { id: "asimportant", t: "Exercise is as important than diet.", ok: false, fix: "Exercise is as important as diet." },
      { id: "sameas", t: "My bag is the same as yours.", ok: true },
      { id: "sameas", t: "My bag is the same like yours.", ok: false, fix: "My bag is the same as yours." },
      { id: "farmore", t: "She is very more confident than her sister.", ok: false, fix: "She is far / much more confident than her sister." },
      { id: "forexample", t: "For example, cats sleep 16 hours a day.", ok: true },
      { id: "sympathy", t: "I feel sympathy to him.", ok: false, fix: "I feel sympathy for him." },
      { id: "watchout", t: "Watch out for the dog!", ok: true },
      { id: "morewilling", t: "Women tend to be most willing to talk than men.", ok: false, fix: "Women tend to be more willing to talk than men." },
      { id: "theart", t: "She is a master of the art of cooking.", ok: true },
      { id: "agiveaway", t: "His shaking hands were giveaway.", ok: false, fix: "His shaking hands were a giveaway." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "asimportant", ru: "Отдых так же важен, как работа.", en: "Rest is just as important as work.", key: "as important as" },
      { id: "sameas", ru: "У меня такой же телефон, как у тебя.", en: "I have the same phone as you.", key: "the same phone as" },
      { id: "farmore", ru: "Он гораздо умнее, чем кажется.", en: "He is far cleverer than he seems.", key: "(far|much|a lot) (cleverer|smarter|more intelligent) than" },
      { id: "forexample", ru: "Например, кошки много спят.", en: "For example, cats sleep a lot.", key: "for example" },
      { id: "sympathy", ru: "Я сочувствую ему.", en: "I have sympathy for him.", key: "sympathy for" },
      { id: "watchout", ru: "Остерегайся карманников!", en: "Watch out for pickpockets!", key: "watch out for" },
      { id: "morewilling", ru: "Дети больше готовы учиться, чем взрослые.", en: "Children are more willing to learn than adults.", key: "more willing to" },
      { id: "theart", ru: "Она владеет искусством убеждения.", en: "She has mastered the art of persuasion.", key: "the art of" }
    ] }
];
