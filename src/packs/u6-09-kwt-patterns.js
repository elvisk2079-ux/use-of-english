// TITLE: There's No Point in Waiting
// EYEBROW: Use of English B2 · Unit 6 · Key Transformations
// SUB: The key transformation patterns from Unit 6: it took me … to → I spent … -ing, have difficulty (in) -ing, be expected to, how about -ing, there's no point in -ing, succeed in -ing, prevent sb from -ing. Five drills.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u6-kwtpat" };
const P = [
  { id: "ittook", phrase: "It took me an hour to … → I spent an hour …ing", ru: "у меня ушёл час на … / я потратил час на …" },
  { id: "founddifficult", phrase: "found sth difficult → had difficulty (in) …ing / found it difficult to", ru: "мне было трудно / у меня были трудности" },
  { id: "expect", phrase: "I expect that they will … → I expect them to … / They are expected to …", ru: "ожидаю, что они …" },
  { id: "suggest", phrase: "I suggest we … → I suggest …ing / How about …ing? / Why not …?", ru: "предлагаю …" },
  { id: "nopoint", phrase: "I don't see why we should … → There's no point in …ing / It's no use …ing / It's not worth …ing", ru: "нет смысла …" },
  { id: "succeed", phrase: "didn't manage to → didn't succeed in …ing / were unsuccessful in …ing", ru: "не удалось" },
  { id: "preventfrom", phrase: "stopped sb (from) going → prevented sb from …ing", ru: "не дал, помешал" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "ittook", q: "It took me two hours to clean the flat.", o: ["I spent two hours cleaning the flat.", "I spent two hours to clean the flat.", "I spent two hours for cleaning the flat.", "I took two hours cleaning the flat to."] },
      { id: "founddifficult", q: "She found learning Chinese difficult.", o: ["She had difficulty learning Chinese.", "She had difficulty to learn Chinese.", "She had difficult in learning Chinese.", "She found it difficulty to learn Chinese."] },
      { id: "founddifficult", q: "Working at night was hard for him.", o: ["He found it hard to work at night.", "He found hard to work at night.", "He found it hard working at night to.", "He found it to work hard at night."] },
      { id: "expect", q: "I expect that the guests will arrive at seven.", o: ["I expect the guests to arrive at seven.", "I expect the guests arriving at seven.", "I expect the guests arrive at seven.", "I expect that the guests to arrive at seven."] },
      { id: "expect", q: "People expect that the president will speak tonight.", o: ["The president is expected to speak tonight.", "The president is expected speaking tonight.", "The president expects to be spoken tonight.", "It is expected the president to speak tonight."] },
      { id: "suggest", q: "I suggest we go to the beach.", o: ["How about going to the beach?", "How about go to the beach?", "How about to go to the beach?", "Why not going to the beach?"] },
      { id: "suggest", q: "Let's have a party for her.", o: ["I suggest having a party for her.", "I suggest to have a party for her.", "I suggest us to have a party for her.", "I suggest have a party for her."] },
      { id: "nopoint", q: "I don't see why we should argue about it.", o: ["There's no point in arguing about it.", "There's no point to argue about it.", "There's no point arguing it about.", "It's no point in arguing about it."] },
      { id: "nopoint", q: "It's useless to cry about it now.", o: ["It's no use crying about it now.", "It's no use to cry about it now.", "It's not use crying about it now.", "It's no useful crying about it now."] },
      { id: "succeed", q: "The climbers didn't manage to reach the top.", o: ["The climbers didn't succeed in reaching the top.", "The climbers didn't succeed to reach the top.", "The climbers didn't succeed reaching the top.", "The climbers weren't succeed in reaching the top."] },
      { id: "preventfrom", q: "My dad didn't let me go out alone.", o: ["My dad prevented me from going out alone.", "My dad prevented me to go out alone.", "My dad prevented me go out alone.", "My dad prevented from me going out alone."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "ittook", t: "It took him a week to paint the fence. → He {{*spent|took|used}} a week painting the fence." },
      { id: "ittook", t: "I spent an hour on my essay. → It {{*took|spent|needed}} me an hour to write my essay." },
      { id: "founddifficult", t: "She found it hard to sleep. → She had difficulty {{*sleeping|to sleep|sleep}}." },
      { id: "founddifficult", t: "Speaking in public was difficult for me. → I found {{*it|that|this}} difficult to speak in public." },
      { id: "expect", t: "They will probably win. → They are {{*expected|expecting|expect}} to win." },
      { id: "expect", t: "I think he will call. → I expect {{*him|he|his}} to call." },
      { id: "suggest", t: "Let's eat out. → Why {{*not|don't|no}} eat out?" },
      { id: "suggest", t: "Let's eat out. → I suggest {{*eating|to eat|eat}} out." },
      { id: "nopoint", t: "Waiting is useless. → It's not {{*worth|use|point}} waiting." },
      { id: "nopoint", t: "Waiting is useless. → There's no {{*point|use|worth}} in waiting." },
      { id: "succeed", t: "We didn't manage to find the key. → We were {{*unsuccessful|unsuccess|successless}} in finding the key." },
      { id: "preventfrom", t: "The noise stopped me from sleeping. → The noise {{*prevented|avoided|protected}} me from sleeping." }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "ittook", q: "(It took Susan an hour to dye her hair.)", s: "Susan spent an hour dyeing her hair." },
      { id: "founddifficult", q: "(She found working long hours difficult.)", s: "She had difficulty working long hours." },
      { id: "expect", q: "(I expect that they will arrive soon.)", s: "They are expected to arrive soon." },
      { id: "suggest", q: "(I suggest we plan a party.)", s: "How about planning a party?" },
      { id: "nopoint", q: "(I don't see why we should discuss it.)", s: "There's no point in discussing it." },
      { id: "succeed", q: "(The climbers didn't manage to reach the peak.)", s: "The climbers didn't succeed in reaching the peak." },
      { id: "preventfrom", q: "(He didn't let his children go out alone.)", s: "He prevented his children from going out alone." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "ittook", t: "It took Mark three hours to fix the bike. ^SPENT^ → Mark [[spent three hours fixing]] the bike." },
      { id: "founddifficult", t: "Learning to swim was difficult for Anna. ^DIFFICULTY^ → Anna [[had difficulty learning/had difficulty in learning]] to swim." },
      { id: "founddifficult", t: "She had difficulty finding a job. ^FOUND^ → She [[found it difficult to find/found it hard to find]] a job." },
      { id: "expect", t: "I expect that the parcel will arrive tomorrow. ^EXPECTED^ → The parcel [[is expected to arrive]] tomorrow." },
      { id: "expect", t: "People expect the film to be a hit. ^EXPECTED^ → The film [[is expected to be]] a hit." },
      { id: "suggest", t: "Let's go for a walk. ^ABOUT^ → [[How about going]] for a walk?" },
      { id: "nopoint", t: "I don't see why we should wait any longer. ^POINT^ → There's [[no point in waiting/no point waiting]] any longer." },
      { id: "nopoint", t: "It's useless to argue with him. ^WORTH^ → It's [[not worth arguing]] with him." },
      { id: "succeed", t: "They didn't manage to solve the problem. ^SUCCEED^ → They [[didn't succeed in solving/did not succeed in solving]] the problem." },
      { id: "preventfrom", t: "The storm stopped the plane taking off. ^PREVENTED^ → The storm [[prevented the plane from taking]] off." }
    ],
    note: "Contractions count as two words in the exam: didn't = did not. Check that you have used between two and five words." },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "ittook", t: "It took me an hour to cook. → I spent an hour cooking.", ok: true },
      { id: "founddifficult", t: "She found it difficult to work. → She had difficulty to work.", ok: false, fix: "She had difficulty (in) working." },
      { id: "expect", t: "I expect that they will come. → I expect them to come.", ok: true },
      { id: "suggest", t: "I suggest we leave. → I suggest to leave.", ok: false, fix: "I suggest leaving." },
      { id: "nopoint", t: "Why should we discuss it? → There's no point in discussing it.", ok: true },
      { id: "nopoint", t: "This matter is not worth to discuss.", ok: false, fix: "This matter is not worth discussing." },
      { id: "succeed", t: "They didn't manage to win. → They weren't successful in winning.", ok: true },
      { id: "preventfrom", t: "He stopped them going out. → He prevented them from going out.", ok: true },
      { id: "succeed", t: "They didn't manage to win. → They didn't succeed to win.", ok: false, fix: "They didn't succeed in winning." },
      { id: "suggest", t: "Let's plan a party. → Why not to plan a party?", ok: false, fix: "Why not plan a party?" }
    ] }
];
