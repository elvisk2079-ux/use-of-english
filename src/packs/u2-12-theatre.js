// TITLE: A Night at the Theatre
// EYEBROW: Use of English B2 · Unit 2 · Examination Practice A (Section 2)
// SUB: The words and phrases from the multiple-choice text “A Night at the Theatre”, in new sentences and a new exam-style text. Fourteen phrases, five drills.
// BOARD: Your phrases
const META = { ls: "uoe-b2-u2-theatre" };
const P = [
  { id: "remind", phrase: "remind sb of sth", ru: "напоминать кому-то о" },
  { id: "which", phrase: "…, which was thirty years ago", ru: "что было (which о целом событии)" },
  { id: "asthough", phrase: "as though it were yesterday", ru: "как будто это было вчера" },
  { id: "audience", phrase: "the audience's applause", ru: "аплодисменты зрителей" },
  { id: "life", phrase: "remain with me for life", ru: "остаться со мной на всю жизнь" },
  { id: "when", phrase: "… when in fact …", ru: "тогда как на самом деле" },
  { id: "scenes", phrase: "the background scenes", ru: "декорации" },
  { id: "efforts", phrase: "sb's best efforts", ru: "все усилия, старания" },
  { id: "satisfied", phrase: "satisfied with", ru: "доволен (чем-то)" },
  { id: "glance", phrase: "glance through", ru: "взглянуть сквозь, пробежать глазами" },
  { id: "amazed", phrase: "amazed at", ru: "поражён (чем-то)" },
  { id: "sight", phrase: "the sight of a full house", ru: "вид полного зала" },
  { id: "proved", phrase: "prove sb wrong", ru: "доказать, что кто-то не прав" },
  { id: "clockwork", phrase: "go like clockwork", ru: "пройти как по маслу" }
];
const DRILLS = [
  { type: "gaps", title: "Choose A, B, C or D", short: "A B C D", instr: "Tap the option that best fits each gap, like in Part 1 of the exam.",
    items: [
      { id: "remind", t: "This smell always {{*reminds|recalls|memorises|recognises}} me of my grandmother's kitchen." },
      { id: "which", t: "We moved to Moscow in 2015, {{*which|when|where|who}} was a big change for all of us." },
      { id: "asthough", t: "I remember my first day at school as {{*though|soon|well|long}} it were yesterday." },
      { id: "audience", t: "The {{*audience's|spectators'|viewers'|onlookers'}} applause lasted for ten minutes." },
      { id: "life", t: "Some memories stay with you for {{*life|ages|a while|time}}." },
      { id: "when", t: "He said he was busy, {{*when|where|which|whenever}} in fact he was playing computer games." },
      { id: "scenes", t: "The students painted all the background {{*scenes|sights|views|images}} for the play." },
      { id: "efforts", t: "Despite the doctors' best {{*efforts|attempts|trials|tries}}, the old man died." },
      { id: "satisfied", t: "The coach was not satisfied {{*with|by|in|at}} the team's performance." },
      { id: "glance", t: "I remember {{*glancing|noticing|staring|watching}} through the window and seeing snow." },
      { id: "amazed", t: "We were amazed {{*at|in|on|for}} how quickly the children learned." },
      { id: "sight", t: "She burst into tears at the {{*sight|view|vision|image}} of her old house." },
      { id: "proved", t: "Everyone said I would fail, but I {{*proved|showed|made|did}} them wrong." },
      { id: "clockwork", t: "The wedding was well organised and everything went like {{*clockwork|a clock|a watch|time}}." },
      { id: "sight", t: "There was a full {{*house|home|hall|room}} on the opening night." },
      { id: "audience", t: "The {{*audience|spectators|viewers|witnesses}} in the theatre laughed at every joke." }
    ] },
  { type: "gaps", title: "Exam text: The school concert", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then tap the best option for each gap.",
    items: [
      { t: "Our school concert last spring still {{*reminds|recalls|recognises|memorises#remind}} me of how nervous I can get. I remember it as {{*though|soon|long|well#asthough}} it were yesterday. We had rehearsed for weeks, but our music teacher was never satisfied {{*with|by|for|on#satisfied}} our singing. Despite our best {{*efforts|attempts|tries|trials#efforts}}, the background {{*scenes|sights|views|images#scenes}} were still wet on the day of the show. Ten minutes before the start, I remember {{*glancing|staring|noticing|watching#glance}} through the curtain. I was amazed {{*at|in|on|for#amazed}} the {{*sight|vision|view|image#sight}} of a full house. In the end, everything went like {{*clockwork|a clock|a watch|time#clockwork}}, and the {{*audience's|spectators'|viewers'|onlookers'#audience}} applause was the best part of the evening. That night will stay with me for {{*life|ages|time|a while#life}}." }
    ] },
  { type: "gaps", title: "Write the missing word", short: "Write it", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "remind", t: "You remind me [[of]] my older brother." },
      { id: "which", t: "He passed all his exams, [[which]] surprised everyone." },
      { id: "asthough", t: "She talks about the trip as [[though/if]] it were yesterday." },
      { id: "audience", t: "The [[audience]] gave the actors a standing ovation." },
      { id: "life", t: "Their friendship lasted [[for]] life." },
      { id: "scenes", t: "Who painted the background [[scenes]] for the play?" },
      { id: "efforts", t: "In spite of her best [[efforts]], she didn't win." },
      { id: "satisfied", t: "Are you satisfied [[with]] your new phone?" },
      { id: "glance", t: "He glanced [[through/at]] the newspaper over breakfast." },
      { id: "amazed", t: "I was amazed [[at/by]] the size of the stadium." },
      { id: "proved", t: "She proved her teachers [[wrong]] and became a doctor." },
      { id: "clockwork", t: "The trip went like [[clockwork]] – no problems at all." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "remind", t: "This song recalls me of my holidays.", ok: false, fix: "This song reminds me of my holidays." },
      { id: "audience", t: "The spectators in the theatre clapped loudly.", ok: false, fix: "The audience in the theatre clapped loudly." },
      { id: "satisfied", t: "I'm not satisfied with my mark.", ok: true },
      { id: "efforts", t: "Despite our best trials, we lost the match.", ok: false, fix: "Despite our best efforts, we lost the match." },
      { id: "clockwork", t: "The party went like clockwork.", ok: true },
      { id: "sight", t: "I was amazed at the sight of the mountains.", ok: true },
      { id: "amazed", t: "We were amazed on the result.", ok: false, fix: "We were amazed at the result." },
      { id: "life", t: "These memories will stay with me for ages of my life.", ok: false, fix: "These memories will stay with me for life." },
      { id: "proved", t: "She proved everyone wrong.", ok: true },
      { id: "scenes", t: "The background sights for the play were beautiful.", ok: false, fix: "The background scenes for the play were beautiful." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key phrase.",
    items: [
      { id: "remind", ru: "Эта фотография напоминает мне о детстве.", en: "This photo reminds me of my childhood.", key: "reminds me of" },
      { id: "asthough", ru: "Я помню это, как будто это было вчера.", en: "I remember it as though it were yesterday.", key: "as (though|if) it (were|was) yesterday" },
      { id: "audience", ru: "Зрители долго аплодировали.", en: "The audience applauded for a long time.", key: "audience" },
      { id: "life", ru: "Это воспоминание останется со мной на всю жизнь.", en: "This memory will stay with me for life.", key: "for life" },
      { id: "efforts", ru: "Несмотря на все наши усилия, мы проиграли.", en: "Despite our best efforts, we lost.", key: "(best )?efforts" },
      { id: "satisfied", ru: "Учитель доволен моей работой.", en: "The teacher is satisfied with my work.", key: "satisfied with" },
      { id: "amazed", ru: "Я была поражена его талантом.", en: "I was amazed at his talent.", key: "amazed (at|by)" },
      { id: "sight", ru: "При виде собаки ребёнок заплакал.", en: "At the sight of the dog, the child started crying.", key: "(at )?the sight of" },
      { id: "proved", ru: "Мы доказали, что тренер был не прав.", en: "We proved the coach wrong.", key: "proved .*wrong" },
      { id: "clockwork", ru: "Всё прошло как по маслу.", en: "Everything went like clockwork.", key: "went like clockwork" }
    ] }
];
