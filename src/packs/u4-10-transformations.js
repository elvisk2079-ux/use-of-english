// TITLE: Hardly Anyone Came
// EYEBROW: Use of English B2 · Unit 4 · Examination Practice B (Section 1)
// SUB: Key word transformations with determiners and pronouns: hardly anyone, none of, neither … nor, so does, the whole… Ten patterns from Unit 4.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u4-kwt" };
const P = [
  { id: "wrongwith", phrase: "isn't working → something wrong with", ru: "что-то не так с" },
  { id: "hardly", phrase: "most didn't → hardly anyone", ru: "почти никто" },
  { id: "noneof", phrase: "didn't like a single → none of", ru: "ни один из" },
  { id: "bothdislike", phrase: "A doesn't and B doesn't either → both A and B dislike", ru: "оба не любят" },
  { id: "lackof", phrase: "isn't enough → a lack of", ru: "нехватка" },
  { id: "neithercar", phrase: "both were expensive → neither car was cheap", ru: "ни одна не была дешёвой" },
  { id: "little", phrase: "not a lot of things → little / not much", ru: "мало" },
  { id: "eitheror", phrase: "just one of the two → either … or", ru: "или …, или" },
  { id: "whole", phrase: "all week → the whole week", ru: "всю неделю" },
  { id: "anyleft", phrase: "sold out → weren't any tickets", ru: "не осталось билетов" },
  { id: "sodoes", phrase: "both like → so does / neither does", ru: "я тоже / я тоже нет" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "wrongwith", q: "The washing machine is not working properly.", o: ["There is something wrong with the washing machine.", "There is anything wrong with the washing machine.", "There is nothing wrong with the washing machine.", "There is something wrong to the washing machine."] },
      { id: "hardly", q: "Most people didn't have a good time at the party.", o: ["Hardly anyone had a good time at the party.", "Hardly no one had a good time at the party.", "Hardly everyone had a good time at the party.", "Almost everyone had a good time at the party."] },
      { id: "noneof", q: "I didn't like a single song from their new CD.", o: ["I liked none of the songs from their new CD.", "I didn't like none of the songs.", "I liked no one of the songs.", "I liked neither of the songs."] },
      { id: "bothdislike", q: "Mary doesn't like jazz and Susan doesn't either.", o: ["Both Mary and Susan dislike jazz.", "Both Mary and Susan don't dislike jazz.", "Either Mary or Susan dislikes jazz.", "Mary dislikes jazz and so does Susan like it."] },
      { id: "lackof", q: "There isn't enough petrol on the market.", o: ["There is a lack of petrol on the market.", "There is a lack in petrol on the market.", "There is lack petrol on the market.", "There is a lack for petrol on the market."] },
      { id: "neithercar", q: "We realised that both cars were expensive.", o: ["We realised that neither car was cheap.", "We realised that either car was cheap.", "We realised that both car was cheap.", "We realised that none car was cheap."] },
      { id: "little", q: "There weren't a lot of things to see in the gallery.", o: ["There was little to see in the gallery.", "There was a little to see in the gallery.", "There were few to see in the gallery.", "There was many to see in the gallery."] },
      { id: "eitheror", q: "I can't study both Maths and Physics tonight – just one of the two.", o: ["I can study either Maths or Physics tonight.", "I can study neither Maths nor Physics tonight.", "I can study both Maths and Physics tonight.", "I can study either Maths nor Physics tonight."] },
      { id: "whole", q: "They were looking for their lost dog all week.", o: ["They spent the whole week looking for their lost dog.", "They spent the all week looking for their lost dog.", "They spent whole week looking for their lost dog.", "They spent every week looking for their lost dog."] },
      { id: "anyleft", q: "The concert was sold out two weeks in advance.", o: ["There weren't any tickets left two weeks in advance.", "There were any tickets left two weeks in advance.", "There weren't no tickets left two weeks in advance.", "There were some tickets left two weeks in advance."] },
      { id: "sodoes", q: "Both Jim and Jack like playing tennis.", o: ["Jim likes playing tennis and so does Jack.", "Jim likes playing tennis and neither does Jack.", "Jim likes playing tennis and Jack does either.", "Jim likes playing tennis and so Jack does."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "wrongwith", t: "My phone isn't working. → There's something wrong {{*with|to|in}} my phone." },
      { id: "hardly", t: "Most students didn't come. → Hardly {{*anyone|no one|someone}} came." },
      { id: "noneof", t: "I didn't read a single book. → I read {{*none|no|neither}} of the books." },
      { id: "bothdislike", t: "Tom doesn't like fish and Ann doesn't either. → {{*Both|Either|Neither}} Tom and Ann dislike fish." },
      { id: "bothdislike", t: "Tom doesn't like fish and Ann doesn't either. → {{*Neither|Either|Both}} Tom nor Ann likes fish." },
      { id: "lackof", t: "There isn't enough water. → There is a lack {{*of|in|for}} water." },
      { id: "neithercar", t: "Both hotels were bad. → {{*Neither|Either|None}} hotel was good." },
      { id: "little", t: "There wasn't much to do. → There was {{*little|few|a few}} to do." },
      { id: "eitheror", t: "You can have tea, or you can have coffee. → You can have {{*either|neither|both}} tea or coffee." },
      { id: "whole", t: "It rained all day. → It rained the {{*whole|all|full}} day." },
      { id: "anyleft", t: "All the cake was eaten. → There wasn't {{*any|no|none}} cake left." },
      { id: "sodoes", t: "Both Jim and Jack dislike football. → Jim doesn't like football and {{*neither|so|either}} does Jack." }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "wrongwith", q: "(The TV isn't working properly.)", s: "There is something wrong with the TV." },
      { id: "hardly", q: "(Most people didn't come.)", s: "Hardly anyone came." },
      { id: "noneof", q: "(I didn't like a single song.)", s: "I liked none of the songs." },
      { id: "neithercar", q: "(Both cars were expensive.)", s: "Neither car was cheap." },
      { id: "whole", q: "(We studied all morning.)", s: "We spent the whole morning studying." },
      { id: "sodoes", q: "(Both Jim and Jack like tennis.)", s: "Jim likes tennis and so does Jack." },
      { id: "little", q: "(There weren't many things to do.)", s: "There was little to do." },
      { id: "lackof", q: "(There isn't enough money.)", s: "There is a lack of money." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "wrongwith", t: "The washing machine is not working properly. ^WRONG^ → There is [[something wrong with]] the washing machine." },
      { id: "hardly", t: "Unfortunately, most people didn't have a good time at the party. ^HARDLY^ → Unfortunately, [[hardly anyone had/hardly anybody had]] a good time at the party." },
      { id: "noneof", t: "I didn't like a single song from their new CD. ^NONE^ → I [[liked none of the songs]] from their new CD." },
      { id: "bothdislike", t: "I'm sure Mary doesn't like jazz and Susan doesn't either. ^DISLIKE^ → I'm sure that [[both Mary and Susan dislike]] jazz music." },
      { id: "lackof", t: "There isn't enough petrol on the market. ^LACK^ → There is [[a lack of petrol]] on the market." },
      { id: "neithercar", t: "We realised that both cars were expensive. ^CAR^ → We realised that [[neither car was]] cheap." },
      { id: "little", t: "There aren't a lot of things to remember from that awful trip. ^LITTLE^ → There [[is little to remember]] from that awful trip." },
      { id: "eitheror", t: "I can't study both Maths and Physics tonight – just one. ^OR^ → I can [[study either Maths or Physics]] tonight – not both." },
      { id: "whole", t: "They were looking for their lost dog all week. ^THE^ → They spent [[the whole week]] looking for their lost dog." },
      { id: "anyleft", t: "The concert was sold out two weeks in advance. ^ANY^ → There [[weren't any tickets/weren't any tickets left/were not any tickets]] for the concert two weeks in advance." }
    ],
    note: "Contractions count as two words in the exam: weren't = were not. Check that you have used between two and five words." },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "little", t: "There weren't a lot of things to see. → There wasn't much to see.", ok: true },
      { id: "hardly", t: "Most students didn't go. → Very few students went.", ok: true },
      { id: "hardly", t: "Most students didn't go. → Hardly nobody went.", ok: false, fix: "Hardly anybody went." },
      { id: "sodoes", t: "Both Jim and Jack dislike football. → Neither Jim nor Jack likes football.", ok: true },
      { id: "sodoes", t: "Both Jim and Jack dislike football. → Jim doesn't like football and Jack doesn't like it too.", ok: false, fix: "…and Jack doesn't like it either." },
      { id: "whole", t: "We studied all morning. → We spent the all morning studying.", ok: false, fix: "We spent the whole morning studying." },
      { id: "noneof", t: "I didn't like a single song. → I liked none of the songs.", ok: true },
      { id: "neithercar", t: "Both cars were expensive. → Either car was cheap.", ok: false, fix: "Neither car was cheap." },
      { id: "wrongwith", t: "My bike isn't working. → There is something wrong with my bike.", ok: true },
      { id: "anyleft", t: "The tickets were sold out. → There weren't no tickets left.", ok: false, fix: "There weren't any tickets left." }
    ] }
];
