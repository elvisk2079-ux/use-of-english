// TITLE: Unable or Disabled?
// EYEBROW: Use of English B2 · Unit 6 · Derivatives: negative prefixes
// SUB: Negative prefixes un-, in-, il-, im-, ir-, dis-, mis-: unfortunate, incorrect, illegal, impatient, irresponsible, dishonest, misunderstand… Eleven patterns, five drills, ending with an exam-style text.
// BOARD: Your patterns
const META = { ls: "uoe-b2-u6-neg" };
const P = [
  { id: "unfortunate", phrase: "un-: unfortunate, unsafe, unfair, uncertain", ru: "не-: неудачный, небезопасный, несправедливый…" },
  { id: "unlock", phrase: "un- + verb: unlock, undress, unpack", ru: "обратное действие: открыть, раздеться, распаковать" },
  { id: "in", phrase: "in-: incorrect, inefficient, incomplete", ru: "не-: неправильный, неэффективный…" },
  { id: "il", phrase: "il- before l: illegal, illegible, illogical", ru: "il- перед l" },
  { id: "im", phrase: "im- before m and p: immature, impatient, impossible", ru: "im- перед m и p" },
  { id: "ir", phrase: "ir- before r: irresponsible, irregular, irrational", ru: "ir- перед r" },
  { id: "dis", phrase: "dis-: disagree, dishonest, disobedient, disapprove", ru: "dis-: не соглашаться, нечестный…" },
  { id: "mis", phrase: "mis- (= wrongly): misunderstand, mistreat, misjudge", ru: "mis- = неправильно" },
  { id: "twoprefix", phrase: "unable / disabled; uninformed / misinformed", ru: "разные префиксы – разный смысл" },
  { id: "nounadj", phrase: "discomfort / uncomfortable; inequality / unequal", ru: "у слов одного корня разные префиксы" },
  { id: "uninteresting", phrase: "words with in-: uninteresting, misinterpret", ru: "перед in- не ставят in-" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right word", short: "Choose", instr: "Tap the word with the correct prefix.",
    items: [
      { id: "unfortunate", t: "{{*Unfortunately|Infortunately|Disfortunately}}, it rained all day." },
      { id: "unfortunate", t: "I'm {{*uncertain|incertain|discertain}} about the date." },
      { id: "unlock", t: "Can you {{*unlock|dislock|inlock}} the door?" },
      { id: "unlock", t: "The children {{*undressed|disdressed|misdressed}} and went to bed." },
      { id: "in", t: "Your answer is {{*incorrect|uncorrect|discorrect}}." },
      { id: "in", t: "The old machines were slow and {{*inefficient|unefficient|disefficient}}." },
      { id: "il", t: "Driving without a licence is {{*illegal|inlegal|unlegal}}." },
      { id: "il", t: "I can't read this – your writing is {{*illegible|unlegible|inlegible}}." },
      { id: "im", t: "He's 20, but he's very {{*immature|inmature|unmature}}." },
      { id: "im", t: "Don't be so {{*impatient|inpatient|unpatient}} – the bus will come soon." },
      { id: "im", t: "It's {{*impossible|unpossible|inpossible}} to finish this in an hour." },
      { id: "ir", t: "Leaving a baby alone is {{*irresponsible|unresponsible|inresponsible}}." },
      { id: "ir", t: "Some English verbs are {{*irregular|unregular|inregular}}." },
      { id: "dis", t: "Why do you always {{*disagree|unagree|misagree}} with me?" },
      { id: "dis", t: "He made his money in a {{*dishonest|unhonest|inhonest}} way." },
      { id: "dis", t: "The teacher said Tom was {{*disobedient|unobedient|inobedient}} in class." },
      { id: "mis", t: "I think you {{*misunderstood|disunderstood|ununderstood}} me." },
      { id: "mis", t: "It's wrong to {{*mistreat|distreat|untreat}} animals." },
      { id: "twoprefix", t: "He is {{*unable|disable|inable}} to come because he's ill." },
      { id: "twoprefix", t: "These parking spaces are for {{*disabled|unable|misabled}} drivers." },
      { id: "twoprefix", t: "I was {{*misinformed|uninformed|disinformed}} – they told me the wrong time." },
      { id: "nounadj", t: "This chair is very {{*uncomfortable|discomfortable|incomfortable}}." },
      { id: "nounadj", t: "The patient felt some {{*discomfort|uncomfort|incomfort}} after the operation." },
      { id: "nounadj", t: "There is a lot of {{*inequality|unequality|disequality}} between rich and poor." },
      { id: "uninteresting", t: "The lecture was really {{*uninteresting|ininteresting|disinteresting}}." }
    ],
    note: "il- before l (illegal), im- before m and p (immature, impatient), ir- before r (irregular). in- is never used with verbs. mis- = wrongly: misunderstand." },
  { type: "mcq", title: "Odd one out", short: "Odd one out", instr: "One word in each group does not exist. Tap it.",
    items: [
      { id: "unfortunate", q: "unfortunate · uncomfortable · ?", o: ["unhonest", "unattractive", "uncertain"] },
      { id: "in", q: "incorrect · inefficient · ?", o: ["inpossible", "inadequate", "incomplete"] },
      { id: "il", q: "illegal · illegible · ?", o: ["illucky", "illogical", "illiterate"] },
      { id: "im", q: "immature · impatient · ?", o: ["imhappy", "impossible", "impolite"] },
      { id: "ir", q: "irresponsible · irregular · ?", o: ["irhonest", "irrational", "irrelevant"] },
      { id: "dis", q: "disagree · dishonest · ?", o: ["dispossible", "disobey", "disapprove"] },
      { id: "mis", q: "misunderstand · mistreat · ?", o: ["mishappy", "misjudge", "misbehave"] },
      { id: "unlock", q: "unlock · undress · ?", o: ["unsleep", "unpack", "untie"] },
      { id: "uninteresting", q: "uninteresting · misinterpret · ?", o: ["ininteresting", "disintegrate", "uninformed"] },
      { id: "nounadj", q: "discomfort · uncomfortable · ?", o: ["discomfortable", "comfortably", "uncomfortably"] },
      { id: "twoprefix", q: "unable · disabled · ?", o: ["inable", "disability", "inability"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals.",
    items: [
      { id: "im", t: "Even though he's twenty, he is rather [[immature]] ^MATURE^." },
      { id: "twoprefix", t: "Thomas said he was [[unable]] ^ABLE^ to come to the meeting." },
      { id: "in", t: "The student answered the question [[incorrectly]] ^CORRECT^." },
      { id: "dis", t: "He became rich in a [[dishonest]] ^HONEST^ way." },
      { id: "il", t: "I couldn't mark your essay because your writing was [[illegible]] ^LEGIBLE^." },
      { id: "dis", t: "The teacher expressed her [[dissatisfaction]] ^SATISFACTION^ with the class." },
      { id: "ir", t: "It was [[irresponsible]] ^RESPONSIBLE^ of you to leave the door open." },
      { id: "unfortunate", t: "Many climbers have been [[unsuccessful]] ^SUCCESS^ in their attempts." },
      { id: "mis", t: "I hate people who [[mistreat]] ^TREAT^ animals." },
      { id: "il", t: "Driving at 150 km/h is [[illegal]] ^LEGAL^." },
      { id: "unfortunate", t: "It's also very [[unsafe]] ^SAFE^." },
      { id: "dis", t: "Why do you always [[disagree]] ^AGREE^ with me?" },
      { id: "im", t: "She's very [[impatient]] ^PATIENT^ – she wants everything now." },
      { id: "nounadj", t: "Don't sit in that [[uncomfortable]] ^COMFORTABLE^ armchair." },
      { id: "mis", t: "Are you sure you didn't [[misunderstand]] ^UNDERSTAND^ him?" },
      { id: "uninteresting", t: "The book was long and [[uninteresting]] ^INTERESTING^." },
      { id: "in", t: "Your homework is [[incomplete]] ^COMPLETE^ – you forgot exercise 3." },
      { id: "ir", t: "I know it's an [[irrational]] ^RATIONAL^ fear, but I hate spiders." },
      { id: "nounadj", t: "There is still [[inequality]] ^EQUAL^ between men and women in some jobs." },
      { id: "twoprefix", t: "The lift is for [[disabled]] ^ABLE^ people only." },
      { id: "unlock", t: "Let's [[unpack]] ^PACK^ our suitcases." },
      { id: "dis", t: "My parents [[disapprove]] ^APPROVE^ of my friends." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the word correct?",
    items: [
      { id: "il", t: "It's unlegal to park here.", ok: false, fix: "It's illegal to park here." },
      { id: "im", t: "He's very impatient.", ok: true },
      { id: "in", t: "Your answer is uncorrect.", ok: false, fix: "Your answer is incorrect." },
      { id: "dis", t: "I disagree with you.", ok: true },
      { id: "mis", t: "Sorry, I misunderstood the question.", ok: true },
      { id: "ir", t: "Some verbs are inregular.", ok: false, fix: "Some verbs are irregular." },
      { id: "uninteresting", t: "The film was ininteresting.", ok: false, fix: "The film was uninteresting." },
      { id: "unlock", t: "Please unlock the door.", ok: true },
      { id: "twoprefix", t: "He is disable to come today.", ok: false, fix: "He is unable to come today." },
      { id: "nounadj", t: "I felt some discomfort in my back.", ok: true },
      { id: "nounadj", t: "This chair is discomfortable.", ok: false, fix: "This chair is uncomfortable." },
      { id: "unfortunate", t: "Unfortunately, we lost the match.", ok: true }
    ] },
  { type: "gaps", title: "Exam text: School rules", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "Our school has some strange rules. [[Unfortunately#unfortunate]] ^FORTUNATE^, many students [[disapprove#dis]] ^APPROVE^ of them. For example, it is [[illegal#il]] ^LEGAL^ – or at least against the rules – to use your phone in the corridor. Teachers say that students who use phones all day are [[immature#im]] ^MATURE^ and [[irresponsible#ir]] ^RESPONSIBLE^. Some students think the rules are [[unfair#unfortunate]] ^FAIR^ and [[illogical#il]] ^LOGICAL^. They say the teachers [[misunderstand#mis]] ^UNDERSTAND^ how young people use technology. Of course, students who are [[disobedient#dis]] ^OBEDIENT^ get extra homework. Last year, a group of students tried to change the rules, but they were [[unsuccessful#unfortunate]] ^SUCCESS^. It seems [[impossible#im]] ^POSSIBLE^ to make everyone happy!" }
    ] }
];
