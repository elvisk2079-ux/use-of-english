// TITLE: Keep Up, Hold On
// EYEBROW: Use of English B2 · Unit 4 · Phrasal Verbs A (keep, hold, catch)
// SUB: Ten phrasal verbs with keep, hold and catch. Careful: hold up has two meanings – to delay and to rob.
const META = { ls: "uoe-b2-u4-pvkeep" };
const P = [
  { id: "keepback", phrase: "keep back", ru: "скрывать, утаивать", en: "not reveal information" },
  { id: "keepoff", phrase: "keep off", ru: "не заходить на, держаться подальше", en: "stay off something; not approach" },
  { id: "keepon", phrase: "keep on (doing)", opt: "keep on", ru: "продолжать", en: "continue doing something" },
  { id: "keepout", phrase: "keep out (of)", opt: "keep out", ru: "не входить", en: "not enter a place" },
  { id: "keepup", phrase: "keep up", ru: "поддерживать, продолжать в том же духе", en: "maintain something at the same good level" },
  { id: "holdon", phrase: "hold on!", ru: "подожди(те)!", en: "wait for a short time" },
  { id: "holdonto", phrase: "hold on to", ru: "держаться за, не отдавать", en: "keep something and not let it be taken away" },
  { id: "holdupdelay", phrase: "hold up (= delay)", opt: "hold up", ru: "задержать", en: "make someone or something late" },
  { id: "holduprob", phrase: "hold up (= rob)", opt: "hold up", ru: "ограбить (с оружием)", en: "rob a bank or a shop using a weapon" },
  { id: "catchup", phrase: "catch up with", ru: "догнать", en: "reach someone who is ahead of you" }
];
const DRILLS = [
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "keepback", t: "The police kept {{*back|up|off}} some details of the crime." },
      { id: "keepoff", t: "Keep {{*off|back|on}} the grass!" },
      { id: "keepoff", t: "Skaters were warned to keep {{*off|out|up}} the thin ice." },
      { id: "keepon", t: "She kept {{*on|up|off}} talking during the film." },
      { id: "keepon", t: "Don't stop – keep {{*on|back|out}} trying!" },
      { id: "keepout", t: "Danger! Keep {{*out|off|back}}!" },
      { id: "keepout", t: "We were told to keep out {{*of|from|off}} the old house." },
      { id: "keepup", t: "You got an A! Keep {{*up|on|back}} the good work!" },
      { id: "holdon", t: "Hold {{*on|up|off}}! I'll get my coat and come with you." },
      { id: "holdonto", t: "Hold on {{*to|at|with}} the rope and don't let go." },
      { id: "holdonto", t: "Despite his money problems, he held {{*on|up|off}} to his family house." },
      { id: "holdupdelay", t: "Sorry I'm late – I was held {{*up|on|back}} in traffic." },
      { id: "holduprob", t: "Two men held {{*up|on|off}} a petrol station and stole £500." },
      { id: "catchup", t: "Run faster or you won't catch {{*up|on|out}} with the others." },
      { id: "catchup", t: "I missed a week of school, so I need to catch up {{*with|to|on}} my classmates." }
    ] },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb in the correct form.",
    items: [
      { id: "keepback", t: "The government [[kept back]] important information about the oil spill." },
      { id: "keepoff", t: "Please [[keep off]] the flower beds." },
      { id: "keepon", t: "The students [[kept on]] working despite the heat." },
      { id: "keepout", t: "The sign said ‘Private – [[Keep out]]’." },
      { id: "keepup", t: "Great job! [[Keep up]] the good work!" },
      { id: "holdon", t: "[[Hold on]] – I'll be ready in a minute." },
      { id: "holdonto", t: "[[Hold on to]] your bag in the crowd." },
      { id: "holdupdelay", t: "Our flight was [[held up]] by fog." },
      { id: "holduprob", t: "Masked men [[held up]] a bank in the city centre." },
      { id: "catchup", t: "Even though he was injured, he managed to [[catch up with]] the other runners." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the phrasal verb correct?",
    items: [
      { id: "keepoff", t: "Keep out the grass, please.", ok: false, fix: "Keep off the grass, please." },
      { id: "keepup", t: "Keep up the good work!", ok: true },
      { id: "keepon", t: "He kept back talking even when I asked him to stop.", ok: false, fix: "He kept on talking." },
      { id: "holdon", t: "Hold on, I'm coming!", ok: true },
      { id: "holdupdelay", t: "We were held on in traffic for an hour.", ok: false, fix: "We were held up in traffic for an hour." },
      { id: "holduprob", t: "The robbers held up a bank.", ok: true },
      { id: "catchup", t: "I ran to catch up to my friends.", ok: false, fix: "I ran to catch up with my friends." },
      { id: "keepout", t: "Keep out of my room!", ok: true },
      { id: "holdonto", t: "Hold up to the handrail on the bus.", ok: false, fix: "Hold on to the handrail on the bus." },
      { id: "keepback", t: "She kept back the truth from her parents.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "keepoff", ru: "По газону не ходить!", en: "Keep off the grass!", key: "keep off" },
      { id: "keepon", ru: "Продолжай читать!", en: "Keep on reading!", key: "keep on" },
      { id: "keepout", ru: "Не входи в мою комнату!", en: "Keep out of my room!", key: "keep out" },
      { id: "keepup", ru: "Продолжай в том же духе!", en: "Keep up the good work!", key: "keep (it )?up" },
      { id: "holdon", ru: "Подожди минутку!", en: "Hold on a minute!", key: "hold on" },
      { id: "holdonto", ru: "Держись за поручень!", en: "Hold on to the handrail!", key: "hold on to" },
      { id: "holdupdelay", ru: "Нас задержала пробка.", en: "We were held up by a traffic jam.", key: "held up" },
      { id: "holduprob", ru: "Вчера ограбили банк.", en: "A bank was held up yesterday.", key: "held up" },
      { id: "catchup", ru: "Я догоню тебя!", en: "I'll catch up with you!", key: "catch up with" },
      { id: "keepback", ru: "Он что-то скрывает от нас.", en: "He's keeping something back from us.", key: "keep(ing|s)? (something )?back" }
    ] }
];
