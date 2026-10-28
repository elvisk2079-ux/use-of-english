// TITLE: Phrasal Verbs with Go
// EYEBROW: Use of English B2 · Unit 1 · Phrasal Verbs B
// SUB: Nine meanings of go + particle, five drills. Go off and go on each have two meanings – the sentence tells you which one.
const META = { ls: "uoe-b2-u1-pvgo" };
const P = [
  { id: "ahead", phrase: "go ahead (with)", opt: "go ahead", ru: "начать, приступить (к)", en: "start something you planned" },
  { id: "oncont", phrase: "go on (= continue)", opt: "go on", ru: "продолжать", en: "continue doing something" },
  { id: "over", phrase: "go over", ru: "просмотреть, разобрать", en: "examine or discuss something in detail" },
  { id: "with", phrase: "go with", ru: "подходить, сочетаться", en: "look good together; match" },
  { id: "offex", phrase: "go off (= explode)", opt: "go off", ru: "взорваться; сработать", en: "explode; start ringing (a bomb, an alarm)" },
  { id: "round", phrase: "go round", ru: "обойти, объехать", en: "move or travel around a place; visit places in it" },
  { id: "through", phrase: "go through", ru: "пережить, перенести", en: "suffer or experience something difficult" },
  { id: "offsour", phrase: "go off (= turn sour)", opt: "go off", ru: "испортиться (о еде)", en: "become bad to eat or drink" },
  { id: "onhappen", phrase: "go on (= happen)", opt: "go on", ru: "происходить", en: "happen" }
];
const DRILLS = [
  { type: "gaps", title: "Which particle?", short: "Particle", instr: "Tap the particle that completes the phrasal verb.",
    items: [
      { id: "ahead", t: "The concert will go {{*ahead|on|off}} as planned, even if it rains." },
      { id: "ahead", t: "Can I use your phone? – Sure, go {{*ahead|over|through}}." },
      { id: "oncont", t: "Sorry I interrupted you. Please go {{*on|off|with}}." },
      { id: "oncont", t: "If you go {{*on|over|round}} eating so much chocolate, you'll feel sick." },
      { id: "over", t: "Let's go {{*over|with|ahead}} the answers together before the test." },
      { id: "over", t: "The lawyer went {{*over|off|round}} the contract very carefully." },
      { id: "with", t: "Does this scarf go {{*with|on|through}} my coat?" },
      { id: "with", t: "Red wine goes well {{*with|on|off}} cheese." },
      { id: "offex", t: "My alarm clock didn't go {{*off|on|over}}, so I was late." },
      { id: "offex", t: "Everyone ran when the fireworks went {{*off|ahead|round}} too early." },
      { id: "round", t: "We spent the day going {{*round|through|over}} the museums of Paris." },
      { id: "round", t: "It's a small town – you can go {{*round|on|with}} it in an hour." },
      { id: "through", t: "She went {{*through|over|round}} a difficult time after the accident." },
      { id: "through", t: "Nobody should have to go {{*through|ahead|off}} so much pain." },
      { id: "offsour", t: "Don't drink that milk – it's gone {{*off|on|round}}." },
      { id: "offsour", t: "Put the fish in the fridge or it will go {{*off|over|through}}." },
      { id: "onhappen", t: "What's going {{*on|off|with}} here? Why is everyone shouting?" },
      { id: "onhappen", t: "Something strange was going {{*on|over|ahead}} in the house next door." }
    ] },
  { type: "meaning", title: "What does it mean?", short: "Meaning", instr: "Read the meaning and tap the phrasal verb." },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the phrasal verb correct in each sentence?",
    items: [
      { id: "offsour", t: "This yoghurt smells strange. I think it has gone off.", ok: true },
      { id: "with", t: "Your shoes don't go on your dress.", ok: false, fix: "Your shoes don't go with your dress." },
      { id: "onhappen", t: "Can someone tell me what's going over?", ok: false, fix: "Can someone tell me what's going on?" },
      { id: "through", t: "He went through a lot when his business failed.", ok: true },
      { id: "over", t: "Let's go round the plan once more before the meeting.", ok: false, fix: "Let's go over the plan once more." },
      { id: "offex", t: "The smoke alarm went off in the middle of the night.", ok: true },
      { id: "ahead", t: "They decided to go on with the wedding despite the storm.", ok: false, fix: "They decided to go ahead with the wedding." },
      { id: "round", t: "We went round all the shops looking for a present.", ok: true },
      { id: "oncont", t: "Don't stop – go ahead talking!", ok: false, fix: "Don't stop – go on talking!" },
      { id: "oncont", t: "The meeting went on for three hours.", ok: true }
    ] },
  { type: "gaps", title: "Type the phrasal verb", short: "Type it", instr: "Write the phrasal verb with go in the correct form.",
    items: [
      { id: "ahead", t: "The match [[went ahead]] in spite of the heavy rain." },
      { id: "oncont", t: "She [[went on]] working until midnight." },
      { id: "over", t: "Can we [[go over]] this grammar point again? I still don't understand it." },
      { id: "with", t: "That tie really [[goes with]] your suit." },
      { id: "offex", t: "A bomb [[went off]] near the station, but nobody was hurt." },
      { id: "round", t: "We [[went round]] the old town on foot." },
      { id: "through", t: "My grandparents [[went through]] a lot during the war." },
      { id: "offsour", t: "The meat has [[gone off]] – throw it away." },
      { id: "onhappen", t: "Tell me what is [[going on]] – why is everyone so quiet?" },
      { id: "ahead", t: "Despite the problems, we have decided to [[go ahead]] with the project." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the phrasal verb.",
    items: [
      { id: "ahead", ru: "Несмотря на дождь, фестиваль состоялся.", en: "Despite the rain, the festival went ahead.", key: "(go|goes|going|went|gone) ahead" },
      { id: "oncont", ru: "Продолжай, я слушаю.", en: "Go on, I'm listening.", key: "go on" },
      { id: "over", ru: "Давай ещё раз разберём домашнее задание.", en: "Let's go over the homework again.", key: "go over" },
      { id: "with", ru: "Эта сумка не подходит к моим туфлям.", en: "This bag doesn't go with my shoes.", key: "(go|goes) with" },
      { id: "offex", ru: "Будильник прозвенел в шесть.", en: "The alarm clock went off at six.", key: "went off" },
      { id: "round", ru: "Мы обошли все магазины.", en: "We went round all the shops.", key: "went (a)?round" },
      { id: "through", ru: "Она многое пережила.", en: "She has gone through a lot.", key: "(go|goes|went|gone|been going) through" },
      { id: "offsour", ru: "Молоко испортилось.", en: "The milk has gone off.", key: "(gone|went|go|goes|going) off" },
      { id: "onhappen", ru: "Что здесь происходит?", en: "What's going on here?", key: "going on" }
    ] }
];
