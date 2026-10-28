// TITLE: Not As Tall As
// EYEBROW: Use of English B2 · Unit 3 · Examination Practice B (Section 1)
// SUB: Key word transformations with comparisons: not as … as, the same … as, the … the …, it's not like sb to… Ten patterns from Unit 3.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u3-kwt" };
const P = [
  { id: "notas", phrase: "taller → not as tall as", ru: "Gina is not as tall as Fiona" },
  { id: "aswell", phrase: "a better swimmer → doesn't swim as well as", ru: "не так хорошо, как" },
  { id: "sameheight", phrase: "equally tall → the same height as", ru: "одного роста" },
  { id: "keen", phrase: "more enthusiastic → not as keen on … as", ru: "не так увлечён, как" },
  { id: "higher", phrase: "kept rising → getting higher and higher", ru: "всё выше и выше" },
  { id: "notlike", phrase: "doesn't usually… → it's not like sb to…", ru: "на него не похоже" },
  { id: "thethe", phrase: "as it got darker → the darker…, the harder…", ru: "чем …, тем …" },
  { id: "badly", phrase: "the worst cook → cook as badly as", ru: "никто не готовит так плохо, как" },
  { id: "thebiggest", phrase: "couldn't find a bigger → the biggest", ru: "самый большой" },
  { id: "sofast", phrase: "doesn't run as fast → not so fast a runner as", ru: "не такой быстрый бегун" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "notas", q: "Fiona is taller than Gina.", o: ["Gina is not as tall as Fiona.", "Gina is not as taller as Fiona.", "Fiona is not as tall as Gina.", "Gina is as tall as Fiona."] },
      { id: "aswell", q: "Sarah is a better swimmer than Jessica.", o: ["Jessica doesn't swim as well as Sarah.", "Jessica doesn't swim as good as Sarah.", "Sarah doesn't swim as well as Jessica.", "Jessica swims better than Sarah."] },
      { id: "sameheight", q: "Mark and Tony are equally tall.", o: ["Mark is the same height as Tony.", "Mark is the same height like Tony.", "Mark is the same tall as Tony.", "Mark is taller than Tony."] },
      { id: "keen", q: "Jane is more enthusiastic about sport than Brendan.", o: ["Brendan isn't as keen on sport as Jane is.", "Brendan isn't as keen in sport as Jane is.", "Jane isn't as keen on sport as Brendan is.", "Brendan is keener on sport than Jane."] },
      { id: "higher", q: "The temperature kept rising.", o: ["The temperature was getting higher and higher.", "The temperature was getting more and more high.", "The temperature was getting the higher.", "The temperature was getting highest."] },
      { id: "notlike", q: "Patrick doesn't usually forget his appointments.", o: ["It's not like Patrick to forget his appointments.", "It's not like Patrick forgets his appointments.", "Patrick isn't like to forget his appointments.", "It's like Patrick to forget his appointments."] },
      { id: "thethe", q: "As it got darker, it was harder for us to see.", o: ["The darker it got, the harder it was for us to see.", "The darker it got, the more hard it was to see.", "Darker it got, harder it was for us to see.", "The darkest it got, the hardest it was to see."] },
      { id: "badly", q: "Daniel is the worst cook I've ever known.", o: ["None of the people I know cook as badly as Daniel.", "None of the people I know cook as bad as Daniel.", "All the people I know cook as badly as Daniel.", "Daniel cooks better than anyone I know."] },
      { id: "thebiggest", q: "I couldn't find a bigger house in the area.", o: ["This was the biggest house I could find in the area.", "This was the bigger house I could find in the area.", "This was the most big house I could find.", "I could find a bigger house in the area."] },
      { id: "sofast", q: "Jeremy doesn't run as fast as Jonathan.", o: ["Jeremy is not so fast a runner as Jonathan.", "Jeremy is not so a fast runner as Jonathan.", "Jonathan is not so fast a runner as Jeremy.", "Jeremy is not such fast a runner as Jonathan."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "notas", t: "Moscow is bigger than Kazan. → Kazan is not as {{*big|bigger|biggest}} as Moscow." },
      { id: "aswell", t: "Ann is a better dancer than Kate. → Kate doesn't dance as {{*well|good|better}} as Ann." },
      { id: "sameheight", t: "Tom and Max are equally tall. → Tom is the same {{*height|tall|high}} as Max." },
      { id: "keen", t: "I'm more enthusiastic about music than my brother. → My brother isn't as keen {{*on|in|of}} music as I am." },
      { id: "higher", t: "Prices kept rising. → Prices were getting higher {{*and|or|than}} higher." },
      { id: "notlike", t: "She doesn't usually shout. → It's not {{*like|as|typical}} her to shout." },
      { id: "notlike", t: "George is not usually late. → It's not typical {{*of|for|to}} George to be late." },
      { id: "thethe", t: "As he gets older, he becomes more sensible. → The older he gets, {{*the|so|more}} more sensible he becomes." },
      { id: "badly", t: "She's the worst singer I know. → No other singer I know sings as {{*badly|bad|worse}} as her." },
      { id: "thebiggest", t: "I've never driven a faster car. → This is the {{*fastest|faster|most fast}} car I have ever driven." },
      { id: "sofast", t: "Ben doesn't run as fast as Sam. → Ben is not so fast {{*a|the|–}} runner as Sam." }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "notas", q: "(Fiona is taller than Gina.)", s: "Gina is not as tall as Fiona." },
      { id: "aswell", q: "(Sarah swims better than Jessica.)", s: "Jessica doesn't swim as well as Sarah." },
      { id: "sameheight", q: "(Mark and Tony are equally tall.)", s: "Mark is the same height as Tony." },
      { id: "higher", q: "(The temperature kept rising.)", s: "It was getting hotter and hotter." },
      { id: "notlike", q: "(Patrick doesn't usually forget things.)", s: "It's not like Patrick to forget things." },
      { id: "thethe", q: "(As you practise more, you get better.)", s: "The more you practise, the better you get." },
      { id: "thebiggest", q: "(I've never seen a bigger dog.)", s: "This is the biggest dog I've ever seen." },
      { id: "badly", q: "(Daniel is the worst cook I know.)", s: "Nobody cooks as badly as Daniel." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "aswell", t: "Sarah is a better swimmer than Jessica. ^SWIM^ → Jessica doesn't [[swim as well as]] Sarah." },
      { id: "sameheight", t: "Mark and Tony are equally tall. ^HEIGHT^ → Mark is [[the same height as]] Tony." },
      { id: "keen", t: "Jane is more enthusiastic about sports than Brendan is. ^KEEN^ → Brendan isn't [[as keen on sports as/so keen on sports as]] Jane is." },
      { id: "higher", t: "The baby's temperature kept rising. ^HIGHER^ → The baby's temperature was [[getting higher and higher]]." },
      { id: "notlike", t: "Patrick doesn't usually forget his appointments. ^LIKE^ → It is [[not like Patrick to forget]] his appointments." },
      { id: "thethe", t: "As it got darker, we had more difficulty seeing. ^HARDER^ → The darker [[it got, the harder/it got the harder]] it was for us to see." },
      { id: "badly", t: "Daniel is the worst cook I've ever known. ^COOK^ → None of the people I know [[cook as badly as]] Daniel." },
      { id: "thebiggest", t: "I couldn't find a bigger house in the area. ^THE^ → This was [[the biggest house]] I could find in the area." },
      { id: "sofast", t: "Jeremy doesn't run as fast as Jonathan. ^SO^ → Jeremy is not [[so fast a runner as]] Jonathan." },
      { id: "notas", t: "Andrew smokes more than John. ^MUCH^ → John does not [[smoke as much as]] Andrew." }
    ],
    note: "Check: between 2 and 5 words, the word in capitals unchanged, and the meaning exactly the same." },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "notas", t: "Fiona is taller than Gina. → Gina is shorter than Fiona.", ok: true },
      { id: "notas", t: "Andrew smokes more than John. → John is not such a heavy smoker as Andrew.", ok: true },
      { id: "aswell", t: "She sings better than me. → I don't sing as good as her.", ok: false, fix: "I don't sing as well as her." },
      { id: "sameheight", t: "Your bike looks exactly like mine. → Your bike is identical to mine.", ok: true },
      { id: "thethe", t: "As he gets older, he behaves more sensibly. → The older he gets, the more sensibly he behaves.", ok: true },
      { id: "higher", t: "The air is becoming more polluted every day. → The air is becoming more and more polluted.", ok: true },
      { id: "notlike", t: "George is not usually late. → It's not like George being late.", ok: false, fix: "It's not like George to be late." },
      { id: "thebiggest", t: "This is the fastest car I have ever driven. → I have never driven a faster car than this.", ok: true },
      { id: "badly", t: "She is the worst singer I know. → No other singer I know is as worse as her.", ok: false, fix: "No other singer I know is as bad as her." },
      { id: "sofast", t: "Jeremy doesn't run as fast as Jonathan. → Jeremy is not so a fast runner as Jonathan.", ok: false, fix: "Jeremy is not so fast a runner as Jonathan." }
    ] }
];
