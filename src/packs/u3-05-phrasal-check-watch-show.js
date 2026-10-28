// TITLE: Check In, Show Off
// EYEBROW: Use of English B2 · Unit 3 · Phrasal Verbs B (check, watch, show)
// SUB: Six phrasal verbs with check, watch and show. Five drills.
const META = { ls: "uoe-b2-u3-pvcheck" };
const P = [
  { id: "checkin", phrase: "check in", ru: "зарегистрироваться", en: "report your arrival at a hotel or an airport" },
  { id: "checkout", phrase: "check out", ru: "выписаться, освободить номер", en: "pay the bill and leave a hotel or a clinic" },
  { id: "watchout", phrase: "watch out (for)", ru: "остерегаться", en: "be careful about" },
  { id: "watchover", phrase: "watch over", ru: "присматривать за", en: "take care of someone because it is your responsibility" },
  { id: "showoff", phrase: "show off", ru: "хвастаться, выпендриваться", en: "try to make people notice and admire you" },
  { id: "showup", phrase: "show up", ru: "появиться, прийти", en: "arrive, appear" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "checkin", t: "You must check {{*in|out|up}} at the airport two hours before your flight." },
      { id: "checkin", t: "We checked {{*in|over|off}} at the hotel and went straight to our room." },
      { id: "checkout", t: "Guests must check {{*out|in|up}} by 12 o'clock." },
      { id: "checkout", t: "She checked {{*out|in|off}} of the hospital this morning." },
      { id: "watchout", t: "Watch {{*out|over|up}} for pickpockets on the metro!" },
      { id: "watchout", t: "Watch out {{*for|of|to}} ice on the road." },
      { id: "watchover", t: "The older children watched {{*over|out|up}} the little ones." },
      { id: "showoff", t: "Stop showing {{*off|up|out}} – nobody cares about your new phone!" },
      { id: "showoff", t: "He was showing {{*off|over|in}} his new car to his friends." },
      { id: "showup", t: "Only ten people showed {{*up|off|out}} for the meeting." },
      { id: "showup", t: "She always shows {{*up|off|over}} late." }
    ] },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb in the correct form.",
    items: [
      { id: "checkin", t: "Please [[check in]] at the reception desk." },
      { id: "checkout", t: "We [[checked out]] of the hotel and took a taxi to the airport." },
      { id: "watchout", t: "[[Watch out]]! There's a hole in the road." },
      { id: "watchover", t: "A guard [[watches over]] the museum at night." },
      { id: "showoff", t: "Tom loves [[showing off]] in front of girls." },
      { id: "showup", t: "Everybody [[showed up]] at the party on Saturday night." },
      { id: "checkin", t: "Have you [[checked in]] for your flight online?" },
      { id: "showup", t: "I waited for an hour, but he never [[showed up]]." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the phrasal verb correct?",
    items: [
      { id: "checkin", t: "We checked out at the hotel when we arrived.", ok: false, fix: "We checked in at the hotel when we arrived." },
      { id: "checkout", t: "We have to check out by noon.", ok: true },
      { id: "watchout", t: "Watch over for snakes in the long grass!", ok: false, fix: "Watch out for snakes!" },
      { id: "watchover", t: "The mother bird watched over her chicks.", ok: true },
      { id: "showoff", t: "He's always showing up his muscles.", ok: false, fix: "He's always showing off his muscles." },
      { id: "showup", t: "She didn't show up for work today.", ok: true },
      { id: "showup", t: "Half the class didn't show off for the test.", ok: false, fix: "Half the class didn't show up for the test." },
      { id: "checkin", t: "Check in at the desk, please.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "checkin", ru: "Нам нужно зарегистрироваться в аэропорту.", en: "We need to check in at the airport.", key: "check in" },
      { id: "checkout", ru: "Мы выселились из отеля в 11.", en: "We checked out of the hotel at 11.", key: "checked out" },
      { id: "watchout", ru: "Остерегайся собак!", en: "Watch out for dogs!", key: "watch out" },
      { id: "watchover", ru: "Кто присматривает за детьми?", en: "Who is watching over the children?", key: "watch(ing|es)? over" },
      { id: "showoff", ru: "Перестань хвастаться!", en: "Stop showing off!", key: "show(ing)? off" },
      { id: "showup", ru: "Он так и не пришёл.", en: "He never showed up.", key: "showed up" },
      { id: "showup", ru: "На вечеринку пришли все.", en: "Everybody showed up at the party.", key: "showed up" }
    ] }
];
