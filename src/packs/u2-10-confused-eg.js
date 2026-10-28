// TITLE: Audience or Spectators?
// EYEBROW: Use of English B2 · Unit 2 · Words Easily Confused E–G
// SUB: Fifteen words: the people who watch, the ways we remember, and what we see. Five drills.
// BOARD: Your words
const META = { ls: "uoe-b2-u2-confEG" };
const P = [
  { id: "audience", phrase: "audience", ru: "зрители, публика (в театре, на концерте)", en: "people watching a play, a concert or a film" },
  { id: "spectators", phrase: "spectators", ru: "зрители (на спортивном событии)", en: "people watching a sports event" },
  { id: "viewers", phrase: "viewers", ru: "телезрители", en: "people watching TV" },
  { id: "sightseers", phrase: "sightseers", ru: "туристы, осматривающие достопримечательности", en: "people visiting interesting places as tourists" },
  { id: "onlookers", phrase: "onlookers", ru: "зеваки, прохожие", en: "people who watch something happen but don't take part" },
  { id: "witnesses", phrase: "witnesses", ru: "свидетели", en: "people who saw a crime or an accident and can describe it" },
  { id: "memorise", phrase: "memorise", ru: "запомнить, выучить наизусть", en: "learn something so you can remember it exactly" },
  { id: "remind", phrase: "remind", ru: "напомнить", en: "help someone remember something" },
  { id: "recall", phrase: "recall", ru: "вспомнить", en: "bring a memory back into your mind" },
  { id: "recognise", phrase: "recognise", ru: "узнать (кого-то, что-то)", en: "know someone or something because you have seen them before" },
  { id: "view", phrase: "view", ru: "вид (из окна); мнение", en: "what you can see from a place; an opinion" },
  { id: "sight", phrase: "sight", ru: "зрение; вид, зрелище; sights – достопримечательности", en: "the ability to see; something you see; the sights = famous places" },
  { id: "image", phrase: "image", ru: "образ, имидж", en: "the way a person is seen by others; a picture" },
  { id: "vision", phrase: "vision", ru: "зрение", en: "the ability to see (formal)" },
  { id: "scene", phrase: "scene", ru: "место (происшествия); сцена; декорации", en: "the place where something happens; part of a play; background in a play" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "audience", t: "At the end of the concert, the {{*audience|spectators|viewers}} stood up and clapped." },
      { id: "spectators", t: "The {{*spectators|audience|viewers}} booed when the referee gave a penalty." },
      { id: "viewers", t: "The final was watched by millions of TV {{*viewers|spectators|onlookers}}." },
      { id: "sightseers", t: "Red Square is always full of {{*sightseers|witnesses|viewers}}." },
      { id: "onlookers", t: "A crowd of {{*onlookers|audience|sightseers}} gathered to watch the fire." },
      { id: "witnesses", t: "The police asked {{*witnesses|onlookers|spectators}} to describe the robber." },
      { id: "memorise", t: "Actors have to {{*memorise|remind|recall}} hundreds of lines." },
      { id: "remind", t: "Please {{*remind|recall|memorise}} me to buy bread on the way home." },
      { id: "recall", t: "I can't {{*recall|remind|memorise}} where I put my glasses." },
      { id: "recognise", t: "I didn't {{*recognise|recall|remind}} you with short hair!" },
      { id: "view", t: "Our hotel room had a wonderful {{*view|sight|scene}} of the mountains." },
      { id: "view", t: "In my {{*view|sight|image}}, the new law is a mistake." },
      { id: "sight", t: "The little boy screamed at the {{*sight|view|vision}} of the big dog." },
      { id: "sight", t: "We spent the day seeing the {{*sights|views|scenes}} of St Petersburg." },
      { id: "image", t: "Pop stars work hard to keep a good {{*image|vision|view}}." },
      { id: "vision", t: "Bright sunlight can affect your {{*vision|view|image}} when you drive." },
      { id: "scene", t: "An ambulance arrived at the {{*scene|sight|view}} of the accident." },
      { id: "scene", t: "In the last {{*scene|sight|image}} of the play, the hero dies." }
    ],
    note: "audience = theatre, concert, cinema; spectators = sport; viewers = TV. remind sb to do sth; recall = remember; recognise = know again when you see it." },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the definition and tap the word.",
    ids: ["audience", "spectators", "viewers", "sightseers", "onlookers", "witnesses", "memorise", "remind", "recall", "recognise", "view", "sight", "image", "scene"] },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Write the correct word from the box in the right form.",
    bank: ["audience", "spectators", "viewers", "sightseers", "onlookers", "witnesses", "memorise", "remind", "recall", "recognise", "view", "sight", "image", "vision", "scene"],
    items: [
      { id: "spectators", t: "The [[spectators]] ran onto the pitch when the match ended." },
      { id: "onlookers", t: "The two boys said they were just [[onlookers]] and had nothing to do with the fight." },
      { id: "sightseers", t: "Venice attracts thousands of [[sightseers]] all year round." },
      { id: "audience", t: "The [[audience]] laughed at every joke." },
      { id: "witnesses", t: "Two [[witnesses]] saw the car hit the lamp post." },
      { id: "viewers", t: "The programme was so popular that it had ten million [[viewers]]." },
      { id: "recognise", t: "I didn't [[recognise]] my teacher in the supermarket!" },
      { id: "memorise", t: "I had to [[memorise]] the code because I had no paper." },
      { id: "remind", t: "Can you [[remind]] Dad to call Grandma?" },
      { id: "recall", t: "My grandfather can still [[recall]] his first day at school." },
      { id: "view", t: "We have a great [[view]] of the river from our balcony." },
      { id: "sight", t: "The [[sight]] of blood makes me feel sick." },
      { id: "scene", t: "We painted the background [[scene]] for the school play." },
      { id: "image", t: "A politician's [[image]] is very important." },
      { id: "view", t: "We were asked to give our [[views]] on the new timetable." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the word correct?",
    items: [
      { id: "spectators", t: "The audience cheered when their team scored.", ok: false, fix: "The spectators cheered when their team scored." },
      { id: "audience", t: "The audience loved the play.", ok: true },
      { id: "viewers", t: "The show is popular with young viewers.", ok: true },
      { id: "remind", t: "Remember me to call you tomorrow.", ok: false, fix: "Remind me to call you tomorrow." },
      { id: "recognise", t: "I recalled her voice at once on the phone.", ok: false, fix: "I recognised her voice at once." },
      { id: "memorise", t: "I memorised the poem in one evening.", ok: true },
      { id: "sight", t: "We visited all the views of Paris.", ok: false, fix: "We visited all the sights of Paris." },
      { id: "view", t: "The view from the top of the tower was amazing.", ok: true },
      { id: "scene", t: "The police arrived at the sight of the crime.", ok: false, fix: "The police arrived at the scene of the crime." },
      { id: "witnesses", t: "The witnesses told the police what they saw.", ok: true },
      { id: "sightseers", t: "The streets were full of onlookers taking photos of the cathedral.", ok: false, fix: "The streets were full of sightseers." },
      { id: "image", t: "The company wants to change its image.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the right word.",
    items: [
      { id: "audience", ru: "Зрители аплодировали десять минут.", en: "The audience applauded for ten minutes.", key: "audience" },
      { id: "spectators", ru: "На стадионе было 50 000 зрителей.", en: "There were 50,000 spectators at the stadium.", key: "spectators" },
      { id: "viewers", ru: "Передачу посмотрели миллионы телезрителей.", en: "Millions of viewers watched the programme.", key: "viewers" },
      { id: "witnesses", ru: "Полиция ищет свидетелей.", en: "The police are looking for witnesses.", key: "witnesses" },
      { id: "remind", ru: "Напомни мне позвонить маме.", en: "Remind me to call Mum.", key: "remind me to" },
      { id: "recognise", ru: "Я тебя не узнала!", en: "I didn't recognise you!", key: "recogni[sz]e" },
      { id: "recall", ru: "Я не могу вспомнить его имя.", en: "I can't recall his name.", key: "recall|remember", hint: "recall" },
      { id: "memorise", ru: "Выучи это стихотворение наизусть.", en: "Memorise this poem.", key: "memori[sz]e|learn .* by heart" },
      { id: "view", ru: "Из окна открывается чудесный вид на море.", en: "There is a wonderful view of the sea from the window.", key: "view of" },
      { id: "sight", ru: "Мы осмотрели достопримечательности Казани.", en: "We saw the sights of Kazan.", key: "sights" },
      { id: "scene", ru: "Полиция быстро приехала на место аварии.", en: "The police quickly arrived at the scene of the accident.", key: "scene of" },
      { id: "image", ru: "Для актёра важен его имидж.", en: "An actor's image is important.", key: "image" }
    ] }
];
