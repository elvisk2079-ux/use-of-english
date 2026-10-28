// TITLE: Friends
// EYEBROW: Use of English B2 · Unit 2 · Examination Practice B (Section 2)
// SUB: Ten word families from the word formation text “Friends”. Five drills, ending with a new exam-style text.
// BOARD: Your word families
const META = { ls: "uoe-b2-u2-friendswf" };
const P = [
  { id: "friend", phrase: "FRIEND → friendship", ru: "дружба (friendly, unfriendly)" },
  { id: "relation", phrase: "RELATION → relationship", ru: "отношения" },
  { id: "wonder", phrase: "WONDER → wonderful", ru: "чудесный" },
  { id: "value", phrase: "VALUE → valuable", ru: "ценный (valueless – бесполезный)" },
  { id: "care", phrase: "CARE → carefully", ru: "внимательно, осторожно" },
  { id: "thought", phrase: "THOUGHT → thoughtful", ru: "заботливый, внимательный" },
  { id: "doubt", phrase: "DOUBT → doubtful", ru: "сомневающийся, сомнительный" },
  { id: "sense", phrase: "SENSE → sensible", ru: "разумный (senseless – бессмысленный)" },
  { id: "truth", phrase: "TRUTH → untruthful", ru: "лживый, нечестный" },
  { id: "use", phrase: "USE → useless", ru: "бесполезный" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "friend", t: "Their {{*friendship|friendly|friend}} began at primary school." },
      { id: "relation", t: "She has a very good {{*relationship|relation|relative}} with her parents." },
      { id: "wonder", t: "We had a {{*wonderful|wonder|wonderfully}} time at the seaside." },
      { id: "value", t: "Thank you for your {{*valuable|valueless|value}} advice – it really helped." },
      { id: "care", t: "Read the questions {{*carefully|careful|care}} before you answer." },
      { id: "thought", t: "It was very {{*thoughtful|thoughtless|thought}} of you to bring me flowers." },
      { id: "doubt", t: "I'm {{*doubtful|doubtless|doubt}} that he'll come – he's always busy." },
      { id: "sense", t: "Taking an umbrella was a {{*sensible|senseless|sensitive}} idea." },
      { id: "truth", t: "Don't trust him – he's often {{*untruthful|truthless|truthful}}." },
      { id: "use", t: "This broken umbrella is {{*useless|useful|unuseful}}." },
      { id: "friend", t: "The people in the village were very {{*friendly|friendship|friendless}}." },
      { id: "thought", t: "It was {{*thoughtless|thoughtful|unthought}} of him to forget her birthday." }
    ],
    note: "sensible = reasonable, practical; sensitive = easily upset (a different word!). truth → truthful → untruthful (NOT truthless)." },
  { type: "mcq", title: "Which part of speech?", short: "Part of speech", instr: "Tap the word that is the part of speech in capitals.",
    items: [
      { id: "friend", q: "Which word is a NOUN?", o: ["friendship", "friendly", "unfriendly", "friendless"] },
      { id: "relation", q: "Which word is a NOUN?", o: ["relationship", "related", "relatively", "relate"] },
      { id: "wonder", q: "Which word is an ADJECTIVE?", o: ["wonderful", "wonder", "wonderfully", "wondering"] },
      { id: "value", q: "Which word is an ADJECTIVE?", o: ["valuable", "value", "valuation", "values"] },
      { id: "care", q: "Which word is an ADVERB?", o: ["carefully", "careful", "care", "careless"] },
      { id: "thought", q: "Which word is an ADJECTIVE?", o: ["thoughtful", "thought", "think", "thoughtfully"] },
      { id: "doubt", q: "Which word is an ADJECTIVE?", o: ["doubtful", "doubt", "doubtfully", "doubted"] },
      { id: "sense", q: "Which word is an ADJECTIVE?", o: ["sensible", "sense", "sensibly", "senses"] },
      { id: "use", q: "Which word is an ADJECTIVE?", o: ["useless", "use", "uselessly", "user"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Each family appears twice, in different forms.",
    items: [
      { id: "friend", t: "Many people think [[friendship]] ^FRIEND^ is more important than money." },
      { id: "friend", t: "The new teacher seems very [[friendly]] ^FRIEND^." },
      { id: "relation", t: "Good [[relationships]] ^RELATION^ with colleagues make work more pleasant." },
      { id: "relation", t: "Are you [[related]] ^RELATION^ to Anna? You look so alike!" },
      { id: "wonder", t: "What a [[wonderful]] ^WONDER^ surprise!" },
      { id: "wonder", t: "She sings [[wonderfully]] ^WONDER^." },
      { id: "value", t: "Keep your [[valuable]] ^VALUE^ things in the hotel safe." },
      { id: "value", t: "The old coins turned out to be [[valueless/worthless]] ^VALUE^." },
      { id: "care", t: "Choose your friends [[carefully]] ^CARE^." },
      { id: "care", t: "It was [[careless]] ^CARE^ of you to leave the door open." },
      { id: "thought", t: "An ideal friend should be kind and [[thoughtful]] ^THOUGHT^." },
      { id: "thought", t: "It was [[thoughtless]] ^THOUGHT^ of him to play loud music at night." },
      { id: "doubt", t: "Sometimes we might be [[doubtful]] ^DOUBT^ of our friends." },
      { id: "doubt", t: "She is [[doubtless/undoubtedly]] ^DOUBT^ the best player in the team." },
      { id: "sense", t: "We should always talk problems through in a [[sensible]] ^SENSE^ way." },
      { id: "sense", t: "Breaking the window was a [[senseless]] ^SENSE^ thing to do." },
      { id: "truth", t: "Be careful not to be [[untruthful]] ^TRUTH^ with your friends." },
      { id: "truth", t: "Please give me a [[truthful]] ^TRUTH^ answer." },
      { id: "use", t: "Without honesty, a friendship is [[useless]] ^USE^." },
      { id: "use", t: "Here's a [[useful]] ^USE^ tip: write new words on cards." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "friend", t: "Our friendly has lasted for years.", ok: false, fix: "Our friendship has lasted for years." },
      { id: "relation", t: "They have a close relationship.", ok: true },
      { id: "wonder", t: "It was a wonder day!", ok: false, fix: "It was a wonderful day!" },
      { id: "value", t: "This painting is very valuable.", ok: true },
      { id: "care", t: "Drive careful!", ok: false, fix: "Drive carefully!" },
      { id: "thought", t: "What a thoughtful present!", ok: true },
      { id: "truth", t: "He was truthless about his age.", ok: false, fix: "He was untruthful about his age." },
      { id: "sense", t: "That's a very sensible plan.", ok: true },
      { id: "use", t: "This tool is useless – it's broken.", ok: true },
      { id: "doubt", t: "I'm doubtless that he will come – he's very unreliable.", ok: false, fix: "I'm doubtful that he will come." }
    ] },
  { type: "gaps", title: "Exam text: My best friend", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "My best friend Masha and I have had a close [[relationship#relation]] ^RELATION^ since we were five. Our [[friendship#friend]] ^FRIEND^ is very important to me. She is the most [[thoughtful#thought]] ^THOUGHT^ person I know – she never forgets my birthday. She is also very [[sensible#sense]] ^SENSE^: when I have a problem, she always gives me [[valuable#value]] ^VALUE^ advice. Once I was [[doubtful#doubt]] ^DOUBT^ about her, because I heard a rumour, but we talked about it [[carefully#care]] ^CARE^ and I found out it wasn't true. Masha is never [[untruthful#truth]] ^TRUTH^ – she always tells me what she really thinks. Without honesty, a friendship like ours would be [[useless#use]] ^USE^. Having a friend like her is [[wonderful#wonder]] ^WONDER^." }
    ] }
];
