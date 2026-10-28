// TITLE: Same Meaning, New Words
// EYEBROW: Use of English B2 · Unit 2 · Examination Practice B (Section 1)
// SUB: Key word transformations with relative and time clauses. Ten patterns from Unit 2, from recognising them to writing them yourself.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u2-kwt" };
const P = [
  { id: "inwhich", phrase: "where → in which", ru: "the house where I lived = the house in which I lived" },
  { id: "reason", phrase: "what made … → the reason why", ru: "I don't know the reason why…" },
  { id: "wishing", phrase: "-ing → who + verb", ru: "students wishing to = students who wish to" },
  { id: "caused", phrase: "so … → which caused sb to", ru: "…, which caused him to fail" },
  { id: "until", phrase: "before → never … until", ru: "He never left until he had checked…" },
  { id: "mostof", phrase: "most of which / whom", ru: "большинство из которых" },
  { id: "whose", phrase: "his / her … → whose", ru: "Dr Williams, whose surgery is…" },
  { id: "tookpart", phrase: "… in which he took part", ru: "в котором он участвовал" },
  { id: "beforedoing", phrase: "before / after + -ing", ru: "before doing / after having done" },
  { id: "whenafter", phrase: "when I read → after I have read", ru: "I won't sign it until I have read it" }
];
const DRILLS = [
  { type: "mcq", title: "Which sentence means the same?", short: "Same meaning", instr: "Read the first sentence. Tap the sentence with the same meaning.",
    items: [
      { id: "inwhich", q: "Here's the house where I lived as a child.", o: ["Here's the house in which I lived as a child.", "Here's the house in where I lived as a child.", "Here's the house which I lived as a child.", "Here's the house in that I lived as a child."] },
      { id: "reason", q: "I don't know what made her quit her job.", o: ["I don't know the reason why she quit her job.", "I don't know the reason what she quit her job.", "I don't know why the reason she quit her job.", "I don't know the reason which she quit her job."] },
      { id: "wishing", q: "Passengers wishing to get up can do so now.", o: ["Passengers who wish to get up can do so now.", "Passengers who wishing to get up can do so now.", "Passengers which wish to get up can do so now.", "Passengers wish to get up can do so now."] },
      { id: "caused", q: "He didn't study, so he failed two exams.", o: ["He didn't study, which caused him to fail two exams.", "He didn't study, that caused him to fail two exams.", "He didn't study, which caused him fail two exams.", "He didn't study, which it caused him to fail two exams."] },
      { id: "until", q: "He always checked his tyres before setting off.", o: ["He never set off until he had checked his tyres.", "He always set off until he checked his tyres.", "He never set off before he didn't check his tyres.", "He never checked his tyres until he set off."] },
      { id: "mostof", q: "I've read all her novels. I enjoyed most of them.", o: ["I've read all her novels, most of which I enjoyed.", "I've read all her novels, most of them I enjoyed.", "I've read all her novels, most of that I enjoyed.", "I've read all her novels, which most I enjoyed."] },
      { id: "whose", q: "Dr Smith is a dentist. His surgery is on Main Street.", o: ["Dr Smith, whose surgery is on Main Street, is a dentist.", "Dr Smith, who surgery is on Main Street, is a dentist.", "Dr Smith, that his surgery is on Main Street, is a dentist.", "Dr Smith, which surgery is on Main Street, is a dentist."] },
      { id: "tookpart", q: "Phil took part in a competition last week and won.", o: ["Phil won the competition in which he took part last week.", "Phil won the competition where he took part in last week.", "Phil won the competition which he took part last week.", "Phil won the competition in that he took part last week."] },
      { id: "beforedoing", q: "She did her homework first and then watched TV.", o: ["She never watched TV before doing her homework.", "She never watched TV after doing her homework.", "She watched TV before she did her homework.", "She never did her homework until she watched TV."] },
      { id: "whenafter", q: "I will sign the document when I have read it.", o: ["I won't sign the document until I have read it.", "I won't sign the document after I have read it.", "I will sign the document before I read it.", "I won't sign the document when I will read it."] }
    ] },
  { type: "gaps", title: "The missing word", short: "Missing word", instr: "The second sentence means the same as the first. Tap the missing word.",
    items: [
      { id: "inwhich", t: "That's the school where I studied. → That's the school in {{*which|where|that}} I studied." },
      { id: "reason", t: "Why did he leave? I don't know. → I don't know the {{*reason|cause|thing}} why he left." },
      { id: "wishing", t: "Students wishing to join the club should sign here. → Students {{*who|which|whose}} wish to join should sign here." },
      { id: "caused", t: "It rained all day, so the match was cancelled. → It rained all day, which {{*caused|made|let}} the match to be cancelled." },
      { id: "until", t: "She did her homework before going out. → She never went out {{*until|since|while}} she had done her homework." },
      { id: "mostof", t: "I have forty cousins. I've never met most of them. → I have forty cousins, most of {{*whom|who|them}} I've never met." },
      { id: "whose", t: "Mrs Brown teaches maths. Her son is in my class. → Mrs Brown, {{*whose|who|who's}} son is in my class, teaches maths." },
      { id: "tookpart", t: "I took part in a race. I came second. → I came second in the race in {{*which|where|that}} I took part." },
      { id: "beforedoing", t: "Andrew left before breakfast. → Andrew left before {{*having|have|had}} breakfast." },
      { id: "whenafter", t: "I'll call you when I have finished. → I'll call you {{*after|before|until}} I have finished." },
      { id: "beforedoing", t: "She watched TV after she had done her homework. → She watched TV after {{*doing|do|done}} her homework." },
      { id: "until", t: "I'll sign it when I've read it. → I won't sign it {{*until|while|since}} I've read it." }
    ] },
  { type: "order", title: "Build the sentence", short: "Build it", instr: "Build a sentence that means the same as the one in brackets.",
    items: [
      { id: "inwhich", q: "(Here's the flat where she lives.)", s: "Here's the flat in which she lives." },
      { id: "reason", q: "(I don't know what made him angry.)", s: "I don't know the reason why he was angry." },
      { id: "wishing", q: "(People wishing to leave can go now.)", s: "People who wish to leave can go now." },
      { id: "caused", q: "(She was ill, so she missed the exam.)", s: "She was ill, which caused her to miss the exam." },
      { id: "until", q: "(He always locks the door before leaving.)", s: "He never leaves until he has locked the door." },
      { id: "mostof", q: "(I have many friends. Most of them live here.)", s: "I have many friends, most of whom live here." },
      { id: "whose", q: "(Tom is a pilot. His wife is a nurse.)", s: "Tom, whose wife is a nurse, is a pilot." },
      { id: "beforedoing", q: "(She always washes her hands and then eats.)", s: "She never eats before washing her hands." }
    ] },
  { type: "gaps", title: "Write the missing words", short: "Write it", instr: "Complete the second sentence with 2–5 words, including the word in capitals.",
    items: [
      { id: "inwhich", t: "This is the hotel where we stayed. ^IN^ → This is the hotel [[in which we stayed]]." },
      { id: "reason", t: "I don't know what made her cry. ^REASON^ → I don't [[know the reason why]] she cried." },
      { id: "wishing", t: "Visitors wishing to take photos must ask first. ^WHO^ → Visitors [[who wish to take/who want to take]] photos must ask first." },
      { id: "caused", t: "He didn't train, so he lost the race. ^CAUSED^ → He didn't train, [[which caused him to lose]] the race." },
      { id: "until", t: "She always reads the reviews before buying a book. ^UNTIL^ → She never buys a book [[until she has read/until she reads]] the reviews." },
      { id: "mostof", t: "I've read all her books. I enjoyed most of them. ^MOST^ → I've read all her books, [[most of which I enjoyed]]." },
      { id: "whose", t: "Ms Lee is our coach. Her team won the cup. ^WHOSE^ → Ms Lee, [[whose team won]] the cup, is our coach." },
      { id: "tookpart", t: "Anna took part in a quiz and won first prize. ^IN^ → Anna won first prize in the quiz [[in which she took part/that she took part in/which she took part in]]." }
    ] },
  { type: "tf", title: "Same meaning?", short: "Same meaning", instr: "Does the second sentence mean the same as the first, and is it correct?",
    items: [
      { id: "inwhich", t: "This is the room where I sleep. → This is the room in which I sleep.", ok: true },
      { id: "inwhich", t: "This is the room where I sleep. → This is the room in where I sleep.", ok: false, fix: "This is the room in which I sleep." },
      { id: "wishing", t: "Students wishing to go should sign up. → Students who wish to go should sign up.", ok: true },
      { id: "until", t: "He did his homework before playing. → He never played until he had done his homework.", ok: true },
      { id: "until", t: "He did his homework before playing. → He always played until he did his homework.", ok: false, fix: "He never played until he had done his homework." },
      { id: "whose", t: "Ann is a singer. Her brother is an actor. → Ann, who brother is an actor, is a singer.", ok: false, fix: "Ann, whose brother is an actor, is a singer." },
      { id: "mostof", t: "I have ten pens. Most of them don't work. → I have ten pens, most of which don't work.", ok: true },
      { id: "beforedoing", t: "Andrew had breakfast and then left. → Andrew left after having breakfast.", ok: true },
      { id: "whenafter", t: "I'll pay when I get the parcel. → I won't pay until I will get the parcel.", ok: false, fix: "I won't pay until I get the parcel." },
      { id: "caused", t: "It snowed, so the school closed. → It snowed, which caused the school to close.", ok: true }
    ] }
];
