// TITLE: Homework
// EYEBROW: Use of English B2 · Unit 6 · Examination Practice B (Section 2) · Word formation
// SUB: Ten word families from the word formation text “Homework”: unfortunately, disapprove, unfair, anxious, impossible, disobedience, beneficial, disorganised, incomplete, inadequate. Five drills, ending with a new exam-style text.
// BOARD: Your word families
const META = { ls: "uoe-b2-u6-homeworkwf" };
const P = [
  { id: "fortunate", phrase: "FORTUNATE → unfortunately", ru: "к сожалению (misfortune – несчастье)" },
  { id: "approve", phrase: "APPROVE → disapprove (of)", ru: "не одобрять (disapproval)" },
  { id: "fair", phrase: "FAIR → unfair", ru: "несправедливый (fairly)" },
  { id: "anxiety", phrase: "ANXIETY → anxious", ru: "тревожный, беспокойный" },
  { id: "possible", phrase: "POSSIBLE → impossible", ru: "невозможный (possibility)" },
  { id: "obedience", phrase: "OBEDIENCE → disobedience", ru: "непослушание (obedient, obey)" },
  { id: "benefit", phrase: "BENEFIT → beneficial", ru: "полезный" },
  { id: "organised", phrase: "ORGANISED → disorganised", ru: "неорганизованный" },
  { id: "complete", phrase: "COMPLETE → incomplete", ru: "незаконченный (completely)" },
  { id: "adequate", phrase: "ADEQUATE → inadequate", ru: "недостаточный" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "fortunate", t: "{{*Unfortunately|Unfortunate|Fortunately}}, I missed the bus and was late." },
      { id: "fortunate", t: "She was {{*unfortunate|unfortunately|misfortune}} to lose her bag on holiday." },
      { id: "approve", t: "My parents {{*disapprove|unapprove|misapprove}} of my piercing." },
      { id: "fair", t: "It's {{*unfair|disfair|infair}} that I always have to wash the dishes!" },
      { id: "anxiety", t: "She felt {{*anxious|anxiety|anxiously}} before the exam." },
      { id: "possible", t: "It's {{*impossible|unpossible|inpossible}} to learn a language in a week." },
      { id: "obedience", t: "The dog was punished for its {{*disobedience|unobedience|disobedient}}." },
      { id: "benefit", t: "Fresh air is {{*beneficial|benefit|beneficially}} to your health." },
      { id: "benefit", t: "Everyone will {{*benefit|beneficial|beneficially}} from the new park." },
      { id: "organised", t: "My desk is so {{*disorganised|misorganised|inorganised}} – I can't find anything." },
      { id: "complete", t: "Your answer is {{*incomplete|uncomplete|discomplete}}." },
      { id: "adequate", t: "The food was {{*inadequate|unadequate|disadequate}} for twenty people." }
    ] },
  { type: "mcq", title: "Which form?", short: "Which form", instr: "Tap the word that matches the description.",
    items: [
      { id: "fortunate", q: "Which word is an ADVERB?", o: ["unfortunately", "unfortunate", "misfortune", "fortune"] },
      { id: "approve", q: "Which word is a VERB?", o: ["disapprove", "disapproval", "disapproving", "approval"] },
      { id: "anxiety", q: "Which word is an ADJECTIVE?", o: ["anxious", "anxiety", "anxiously", "anxieties"] },
      { id: "obedience", q: "Which word is a NOUN?", o: ["disobedience", "disobedient", "disobey", "disobediently"] },
      { id: "benefit", q: "Which word is an ADJECTIVE meaning “good for you”?", o: ["beneficial", "benefit", "benefits", "beneficially"] },
      { id: "organised", q: "Which is the correct NEGATIVE?", o: ["disorganised", "inorganised", "misorganised", "imorganised"] },
      { id: "complete", q: "Which is the correct NEGATIVE?", o: ["incomplete", "uncomplete", "discomplete", "miscomplete"] },
      { id: "adequate", q: "Which is the correct NEGATIVE?", o: ["inadequate", "unadequate", "disadequate", "imadequate"] },
      { id: "possible", q: "Which is the correct NEGATIVE?", o: ["impossible", "inpossible", "unpossible", "dispossible"] },
      { id: "fair", q: "Which is the correct NEGATIVE?", o: ["unfair", "infair", "disfair", "misfair"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Each family appears twice.",
    items: [
      { id: "fortunate", t: "[[Unfortunately]] ^FORTUNATE^, the concert was cancelled." },
      { id: "fortunate", t: "We were [[fortunate]] ^FORTUNE^ to get the last tickets." },
      { id: "approve", t: "Teachers [[disapprove]] ^APPROVE^ of cheating." },
      { id: "approve", t: "She looked at me with [[disapproval]] ^APPROVE^." },
      { id: "fair", t: "The referee's decision was [[unfair]] ^FAIR^." },
      { id: "fair", t: "The money was shared [[fairly]] ^FAIR^." },
      { id: "anxiety", t: "I always feel [[anxious]] ^ANXIETY^ before a test." },
      { id: "anxiety", t: "Exams cause a lot of [[anxiety]] ^ANXIOUS^." },
      { id: "possible", t: "It's [[impossible]] ^POSSIBLE^ to sleep with this noise." },
      { id: "possible", t: "There is a [[possibility]] ^POSSIBLE^ of rain later." },
      { id: "obedience", t: "The child was punished for [[disobedience]] ^OBEDIENCE^." },
      { id: "obedience", t: "Our dog is very [[obedient]] ^OBEY^." },
      { id: "benefit", t: "Swimming is very [[beneficial]] ^BENEFIT^ for your back." },
      { id: "benefit", t: "What are the [[benefits]] ^BENEFICIAL^ of learning languages?" },
      { id: "organised", t: "He's so [[disorganised/disorganized]] ^ORGANISED^ – he always forgets his books." },
      { id: "organised", t: "Who is the [[organiser/organizer]] ^ORGANISE^ of this event?" },
      { id: "complete", t: "The report is still [[incomplete]] ^COMPLETE^." },
      { id: "complete", t: "I [[completely]] ^COMPLETE^ forgot about the meeting." },
      { id: "adequate", t: "The heating in our school is [[inadequate]] ^ADEQUATE^." },
      { id: "adequate", t: "The room was cleaned [[inadequately]] ^ADEQUATE^." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "fortunate", t: "Unfortunate, it started to rain.", ok: false, fix: "Unfortunately, it started to rain." },
      { id: "approve", t: "My parents disapprove of my friends.", ok: true },
      { id: "fair", t: "That's infair!", ok: false, fix: "That's unfair!" },
      { id: "anxiety", t: "She looked anxiety.", ok: false, fix: "She looked anxious." },
      { id: "possible", t: "It's impossible to finish today.", ok: true },
      { id: "obedience", t: "Disobedience is not allowed.", ok: true },
      { id: "benefit", t: "Exercise is benefit for health.", ok: false, fix: "Exercise is beneficial for health." },
      { id: "organised", t: "He is very disorganised.", ok: true },
      { id: "complete", t: "The homework was uncomplete.", ok: false, fix: "The homework was incomplete." },
      { id: "adequate", t: "The salary is unadequate.", ok: false, fix: "The salary is inadequate." }
    ] },
  { type: "gaps", title: "Exam text: Phones at school", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "Most students have a phone at school. [[Unfortunately#fortunate]] ^FORTUNATE^, many teachers [[disapprove#approve]] ^APPROVE^ of phones in the classroom. Students think it is [[unfair#fair]] ^FAIR^ when their phones are taken away, and some even feel [[anxious#anxiety]] ^ANXIETY^ without them. They say it is [[impossible#possible]] ^POSSIBLE^ to stay in touch with their parents. Teachers, however, see using phones in lessons as an act of [[disobedience#obedience]] ^OBEDIENCE^. On the other hand, phones can be [[beneficial#benefit]] ^BENEFIT^ for learning – for example, students can use a dictionary app. Without a calendar app, many teenagers would be completely [[disorganised/disorganized#organised]] ^ORGANISED^. Some teachers say that [[incomplete#complete]] ^COMPLETE^ homework is often the result of too much time online, and that an [[inadequate#adequate]] ^ADEQUATE^ amount of sleep is another problem." }
    ] }
];
