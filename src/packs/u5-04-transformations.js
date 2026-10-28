// TITLE: How Long Is It Since…?
// EYEBROW: Use of English B2 · Unit 5 · Consolidation I · Key word transformations
// SUB: The patterns from the Unit 5 key word transformations: how long is it since, none of whom, more and more, not … until, little in common, in which, as … as, used to. Five drills.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u5-kwt" };
const P = [
  { id: "howlong", phrase: "How long have you…? → How long is it since…?", ru: "Сколько времени прошло с тех пор, как…" },
  { id: "noneofwhom", phrase: "none of them → none of whom", ru: "ни один из которых" },
  { id: "moreandmore", phrase: "is getting worse → more and more / worse and worse", ru: "всё больше и больше" },
  { id: "notuntil", phrase: "after doing → didn't … until", ru: "не … до тех пор, пока не" },
  { id: "bothneither", phrase: "neither was guilty → both were innocent", ru: "ни один не … → оба …" },
  { id: "littleincommon", phrase: "don't share many interests → have little in common", ru: "иметь мало общего" },
  { id: "inwhich", phrase: "where → in which / which … in", ru: "в котором" },
  { id: "asas", phrase: "the most … → nobody is as … as", ru: "никто не такой …, как" },
  { id: "usedto", phrase: "played every Sunday → used to play", ru: "раньше (регулярно) делал" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "howlong", q: "How long have you been working here?", o: ["How long is it since you started working here?", "How long is it for you started working here?", "How long is it since you have worked here?", "How long ago are you working here?"] },
      { id: "noneofwhom", q: "We asked ten people, but none of them knew the answer.", o: ["We asked ten people, none of whom knew the answer.", "We asked ten people, none of who knew the answer.", "We asked ten people, none of them who knew the answer.", "We asked ten people, none of which knew the answer."] },
      { id: "moreandmore", q: "His English is getting better all the time.", o: ["His English is getting better and better.", "His English is getting more and better.", "His English is getting the better and better.", "His English is getting more better."] },
      { id: "moreandmore", q: "Video games are becoming more popular all the time.", o: ["Video games are becoming more and more popular.", "Video games are becoming the more popular.", "Video games are becoming popular and popular.", "Video games are becoming most and most popular."] },
      { id: "notuntil", q: "She left after she had finished her work.", o: ["She didn't leave until she had finished her work.", "She didn't leave before she hadn't finished her work.", "She left until she had finished her work.", "She didn't leave since she had finished her work."] },
      { id: "bothneither", q: "Neither of the girls was late.", o: ["Both girls were on time.", "Both girls were late.", "Either of the girls was on time.", "Neither girls were on time."] },
      { id: "littleincommon", q: "Ann and I don't share many interests.", o: ["Ann and I have little in common.", "Ann and I have a little in common.", "Ann and I have few in common.", "Ann and I have little common."] },
      { id: "inwhich", q: "This is the house where I grew up.", o: ["This is the house in which I grew up.", "This is the house which I grew up.", "This is the house in where I grew up.", "This is the house in that I grew up."] },
      { id: "asas", q: "Tom is the fastest runner in the class.", o: ["Nobody in the class is as fast as Tom.", "Nobody in the class is so fast than Tom.", "Nobody in the class is as fast like Tom.", "Everybody in the class is as fast as Tom."] },
      { id: "usedto", q: "When I was a child, I went swimming every weekend.", o: ["When I was a child, I used to go swimming every weekend.", "When I was a child, I was used to go swimming every weekend.", "When I was a child, I use to go swimming every weekend.", "When I was a child, I used to going swimming every weekend."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "howlong", t: "How long have you known her? → How long is it {{*since|for|from}} you met her?" },
      { id: "howlong", t: "I haven't seen him for a year. → It's a year {{*since|for|ago}} I last saw him." },
      { id: "noneofwhom", t: "I have three cousins, but none of them lives here. → I have three cousins, none of {{*whom|who|them}} lives here." },
      { id: "noneofwhom", t: "We met many tourists, but none of them spoke Russian. → We met many tourists, none of {{*whom|which|who}} spoke Russian." },
      { id: "moreandmore", t: "Food is getting more expensive all the time. → Food is getting {{*more|most|much}} and more expensive." },
      { id: "notuntil", t: "We went home after the rain stopped. → We didn't go home {{*until|since|when}} the rain stopped." },
      { id: "bothneither", t: "Neither answer was wrong. → {{*Both|Either|None}} answers were right." },
      { id: "littleincommon", t: "We don't have much in common. → We have {{*little|a little|few}} in common." },
      { id: "inwhich", t: "The town where I live is small. → The town in {{*which|where|that}} I live is small." },
      { id: "inwhich", t: "The flat where he lives is tiny. → The flat {{*which|where|whom}} he lives in is tiny." },
      { id: "asas", t: "She's the best singer in the choir. → Nobody in the choir sings as well {{*as|than|like}} she does." },
      { id: "usedto", t: "My dad smoked, but he stopped. → My dad {{*used|use|was used}} to smoke." }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "howlong", q: "(How long have you lived here?)", s: "How long is it since you moved here?" },
      { id: "noneofwhom", q: "(I invited five friends. None of them came.)", s: "I invited five friends, none of whom came." },
      { id: "moreandmore", q: "(Life is getting more expensive all the time.)", s: "Life is getting more and more expensive." },
      { id: "notuntil", q: "(He went to bed after he had finished his homework.)", s: "He didn't go to bed until he had finished his homework." },
      { id: "littleincommon", q: "(We don't share many interests.)", s: "We have little in common." },
      { id: "inwhich", q: "(This is the room where I work.)", s: "This is the room in which I work." },
      { id: "asas", q: "(Tom is the tallest boy in the class.)", s: "No one in the class is as tall as Tom." },
      { id: "usedto", q: "(I played tennis every Sunday when I was younger.)", s: "I used to play tennis every Sunday." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "howlong", t: "How long have you been living in this flat? ^SINCE^ → How long [[is it since you moved/has it been since you moved]] into this flat?" },
      { id: "howlong", t: "I last went to the cinema two months ago. ^SINCE^ → It's [[two months since I last went/two months since I went]] to the cinema." },
      { id: "noneofwhom", t: "Our team has five players, but none of them is injured. ^WHOM^ → Our team has five players, [[none of whom is/none of whom are]] injured." },
      { id: "moreandmore", t: "Her cooking is improving all the time. ^BETTER^ → Her cooking is [[getting better and better]]." },
      { id: "notuntil", t: "They started eating after everyone had arrived. ^UNTIL^ → They [[didn't start eating until/did not start eating until/didn't start until]] everyone had arrived." },
      { id: "bothneither", t: "Neither of the boys was guilty. ^INNOCENT^ → [[Both boys were innocent/Both the boys were innocent]]." },
      { id: "littleincommon", t: "Kate doesn't share many interests with her sister. ^LITTLE^ → Kate [[has little in common with]] her sister." },
      { id: "inwhich", t: "The café where we met has closed. ^WHICH^ → The café [[in which we met/which we met in]] has closed." },
      { id: "asas", t: "Mike is the funniest person in our group. ^AS^ → Nobody in our group [[is as funny as]] Mike." },
      { id: "usedto", t: "I walked to school every day when I was little. ^USED^ → I [[used to walk]] to school every day when I was little." }
    ],
    note: "Contractions count as two words in the exam: didn't = did not. Check that you have used between two and five words." },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "howlong", t: "How long have you known Ann? → How long is it since you met Ann?", ok: true },
      { id: "noneofwhom", t: "I asked my classmates, but none of them knew. → I asked my classmates, none of who knew.", ok: false, fix: "I asked my classmates, none of whom knew." },
      { id: "moreandmore", t: "Prices keep rising. → Prices are getting higher and higher.", ok: true },
      { id: "notuntil", t: "He left after the film. → He didn't leave until the film ended.", ok: true },
      { id: "bothneither", t: "Neither of them was guilty. → Both of them were guilty.", ok: false, fix: "Both of them were innocent." },
      { id: "littleincommon", t: "We don't share many interests. → We have a little in common.", ok: false, fix: "We have little in common." },
      { id: "inwhich", t: "That's the house where I was born. → That's the house in which I was born.", ok: true },
      { id: "asas", t: "He's the best player. → No one plays as good as him.", ok: false, fix: "No one plays as well as he does." },
      { id: "usedto", t: "I played chess as a child. → I used to play chess as a child.", ok: true },
      { id: "usedto", t: "I played chess as a child. → I was used to play chess as a child.", ok: false, fix: "I used to play chess as a child." }
    ] }
];
