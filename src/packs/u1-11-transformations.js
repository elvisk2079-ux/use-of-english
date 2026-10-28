// TITLE: Key Word Transformations
// EYEBROW: Use of English B2 · Unit 1 · Examination Practice B (Section 1)
// SUB: A gentle start with key word transformations: the same meaning, said another way. Ten patterns from Unit 1, from recognising them to building them yourself.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u1-kwt" };
const P = [
  { id: "firsttime", phrase: "never … before → the first time … ever", ru: "It's the first time I have ever…" },
  { id: "lastsaw", phrase: "last … ago → haven't … for", ru: "I last saw her a year ago = I haven't seen her for a year" },
  { id: "since", phrase: "It's / It has been … since I last…", ru: "It's a year since I last saw her" },
  { id: "lasttime", phrase: "The last time … was", ru: "The last time I saw her was in May" },
  { id: "howlong", phrase: "When did … start? → How long have … been…?", ru: "How long have you been working?" },
  { id: "howlongsince", phrase: "How long is it since…?", ru: "How long is it since he bought it?" },
  { id: "usedto", phrase: "used to + verb", ru: "He used to go there every summer" },
  { id: "trouble", phrase: "have never had trouble with", ru: "у меня никогда не было проблем с" },
  { id: "provide", phrase: "provide sb with sth", ru: "обеспечить кого-то чем-то" },
  { id: "comedown", phrase: "come down with (a cold)", ru: "заболеть (простудой)" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "firsttime", q: "I have never been to Malta before.", o: ["It's the first time I have ever been to Malta.", "It's the last time I have been to Malta.", "I have been to Malta for the first time before.", "It was the first time I went to Malta."] },
      { id: "firsttime", q: "She had never flown before.", o: ["It was the first time she had ever flown.", "It is the first time she has ever flown.", "She had flown for the first time before.", "It was the last time she flew."] },
      { id: "lastsaw", q: "I last saw Mark a year ago.", o: ["I haven't seen Mark for a year.", "I haven't seen Mark since a year.", "I didn't see Mark for a year.", "I have seen Mark a year ago."] },
      { id: "since", q: "I last went to the cinema in March.", o: ["I haven't been to the cinema since March.", "I haven't been to the cinema for March.", "I didn't go to the cinema since March.", "It's March since I went to the cinema."] },
      { id: "lasttime", q: "Lucy hasn't visited me since February.", o: ["The last time Lucy visited me was in February.", "The first time Lucy visited me was in February.", "Lucy last visited me since February.", "The last time Lucy has visited me was in February."] },
      { id: "howlong", q: "When did they start living in the suburbs?", o: ["How long have they been living in the suburbs?", "How long did they live in the suburbs?", "How long are they living in the suburbs?", "When have they been living in the suburbs?"] },
      { id: "howlongsince", q: "How long has he had this car?", o: ["How long is it since he bought this car?", "How long ago has he bought this car?", "How long is he buying this car?", "When has he bought this car?"] },
      { id: "usedto", q: "When Carl was young, he went to a holiday camp every summer.", o: ["When Carl was young, he used to go to a holiday camp every summer.", "When Carl was young, he was used to going to a holiday camp.", "When Carl was young, he uses to go to a holiday camp.", "Carl used to be young at a holiday camp every summer."] },
      { id: "since", q: "We haven't had a holiday for two years.", o: ["It's two years since we last had a holiday.", "It's two years ago since we had a holiday.", "We last had a holiday since two years.", "It has been two years for our holiday."] },
      { id: "trouble", q: "It's the first time she has ever had problems with the authorities.", o: ["She has never had trouble with the authorities before.", "She has always had trouble with the authorities.", "She had never had trouble with the authorities.", "She has never had trouble with the authorities since."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "firsttime", t: "I've never eaten sushi before. → It's the first time I've {{*ever|never|yet}} eaten sushi." },
      { id: "firsttime", t: "This is my first visit to Paris. → I have {{*never|ever|already}} been to Paris before." },
      { id: "lastsaw", t: "I last spoke to her a month ago. → I haven't spoken to her {{*for|since|ago}} a month." },
      { id: "since", t: "I haven't seen him for ages. → It's ages {{*since|for|when}} I last saw him." },
      { id: "since", t: "I last played tennis in 2022. → I haven't played tennis {{*since|for|from}} 2022." },
      { id: "lasttime", t: "I haven't been to the dentist since June. → The {{*last|first|latest}} time I went to the dentist was in June." },
      { id: "howlong", t: "When did you start learning English? → How long {{*have|did|are}} you been learning English?" },
      { id: "howlongsince", t: "How long have you had your dog? → How long is it {{*since|for|ago}} you got your dog?" },
      { id: "usedto", t: "Dad smoked when he was young, but he doesn't now. → Dad {{*used|uses|was}} to smoke." },
      { id: "provide", t: "The government gave the homeless food. → The government provided the homeless {{*with|for|to}} food." },
      { id: "comedown", t: "I last had a cold ages ago. → I last came {{*down|up|round}} with a cold ages ago." },
      { id: "trouble", t: "It's the first time I've had problems with my car. → I've never had {{*trouble|troubles|a trouble}} with my car before." }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "firsttime", q: "(I have never flown before.)", s: "It's the first time I have ever flown.", alt: [] },
      { id: "lastsaw", q: "(I last saw her a year ago.)", s: "I haven't seen her for a year." },
      { id: "since", q: "(I haven't seen her for a year.)", s: "It is a year since I last saw her." },
      { id: "lasttime", q: "(I haven't seen her since May.)", s: "The last time I saw her was in May." },
      { id: "howlong", q: "(When did you start working here?)", s: "How long have you been working here?" },
      { id: "howlongsince", q: "(How long has he been working?)", s: "How long is it since he started working?" },
      { id: "usedto", q: "(We went there every summer when we were kids.)", s: "We used to go there every summer." },
      { id: "trouble", q: "(It's the first time she has had problems with the police.)", s: "She has never had trouble with the police." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "lastsaw", t: "We last went abroad a long time ago. ^NOT^ → We [[have not been abroad for/haven't been abroad for]] a long time." },
      { id: "howlong", t: "When did she start working here? ^HAVE^ → How [[long has she been working/long has she worked]] here?" },
      { id: "firsttime", t: "I've never seen such a big dog before. ^FIRST^ → It's [[the first time I've ever seen/the first time i have ever seen]] such a big dog." },
      { id: "lasttime", t: "Tom hasn't called me since Monday. ^WAS^ → The last [[time Tom called me was]] on Monday." },
      { id: "since", t: "I haven't been to the theatre for years. ^SINCE^ → It's years [[since I last went/since i went]] to the theatre." },
      { id: "usedto", t: "As a child, I often climbed trees. ^USED^ → As a child, I [[used to climb]] trees." },
      { id: "howlongsince", t: "How long have they had this house? ^BOUGHT^ → How long [[is it since they bought]] this house?" },
      { id: "provide", t: "The school gave every student a tablet. ^PROVIDED^ → The school [[provided every student with]] a tablet." },
      { id: "comedown", t: "I haven't had flu for years. ^DOWN^ → I last [[came down with]] flu years ago." },
      { id: "trouble", t: "It's the first time he's had problems with his teachers. ^TROUBLE^ → He [[has never had trouble/'s never had trouble]] with his teachers before." }
    ],
    note: "Contractions count as two words in the exam: haven't = have not. Check that you have used between two and five words." },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "lastsaw", t: "I last saw him in 2020. → I haven't seen him since 2020.", ok: true },
      { id: "lastsaw", t: "I last saw him two weeks ago. → I haven't seen him since two weeks.", ok: false, fix: "I haven't seen him for two weeks." },
      { id: "firsttime", t: "I've never ridden a horse before. → It's the first time I've ever ridden a horse.", ok: true },
      { id: "firsttime", t: "She had never met him before. → It's the first time she has ever met him.", ok: false, fix: "It was the first time she had ever met him." },
      { id: "howlong", t: "When did you start playing chess? → How long have you been playing chess?", ok: true },
      { id: "usedto", t: "I often went fishing as a child. → I used to going fishing as a child.", ok: false, fix: "I used to go fishing as a child." },
      { id: "since", t: "I haven't eaten pizza for months. → It's months since I last ate pizza.", ok: true },
      { id: "lasttime", t: "I haven't been to the gym since May. → The last time I went to the gym was in May.", ok: true },
      { id: "howlongsince", t: "How long has she had her bike? → How long ago is it she bought her bike?", ok: false, fix: "How long is it since she bought her bike?" },
      { id: "provide", t: "They gave us blankets. → They provided blankets with us.", ok: false, fix: "They provided us with blankets. / They provided blankets for us." }
    ] }
];
