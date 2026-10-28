// TITLE: Auxiliary Verbs in Tenses
// EYEBROW: Use of English B2 · Unit 1 · Grammar Revision: Tenses A
// SUB: Is, was, have, has, had, do, does, did, will, been – the small words that build every tense. Five drills, from choosing the right auxiliary to writing whole sentences.
// BOARD: Your tense patterns
const META = { ls: "uoe-b2-u1-tensesA" };
const P = [
  { id: "prescont", phrase: "am / is / are + -ing", ru: "Present Continuous" },
  { id: "pastcont", phrase: "was / were + -ing", ru: "Past Continuous" },
  { id: "presperf", phrase: "have / has + V3", ru: "Present Perfect" },
  { id: "ppc", phrase: "have / has been + -ing", ru: "Present Perfect Continuous" },
  { id: "pastperf", phrase: "had + V3", ru: "Past Perfect" },
  { id: "pastperfcont", phrase: "had been + -ing", ru: "Past Perfect Continuous" },
  { id: "futcont", phrase: "will be + -ing", ru: "Future Continuous" },
  { id: "futperfcont", phrase: "will have been + -ing", ru: "Future Perfect Continuous" },
  { id: "do", phrase: "do / does + verb", ru: "Present Simple: questions, negatives" },
  { id: "did", phrase: "did + verb", ru: "Past Simple: questions, negatives" },
  { id: "goingto", phrase: "was / were going to", ru: "Future in the Past" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the auxiliary", short: "Auxiliary", instr: "Tap the auxiliary verb that completes each sentence.",
    items: [
      { id: "prescont", t: "Look! It {{*is|does|has}} snowing." },
      { id: "prescont", t: "We {{*are|do|have}} meeting Sam at the station at six." },
      { id: "pastcont", t: "I {{*was|did|had}} having a shower when the phone rang." },
      { id: "pastcont", t: "What {{*were|did|have}} you doing at 8 o'clock last night?" },
      { id: "presperf", t: "She {{*has|is|had}} lived in Moscow since 2019." },
      { id: "presperf", t: "{{*Have|Do|Are}} you ever eaten sushi?" },
      { id: "ppc", t: "I have {{*been|being|be}} waiting for you for an hour!" },
      { id: "ppc", t: "How long {{*has|is|does}} he been learning Spanish?" },
      { id: "pastperf", t: "When we got to the cinema, the film {{*had|has|was}} already started." },
      { id: "pastperf", t: "She told me she {{*had|has|did}} never been to London." },
      { id: "pastperfcont", t: "They had {{*been|being|be}} driving for six hours before they stopped." },
      { id: "pastperfcont", t: "I was tired because I {{*had|have|was}} been working all day." },
      { id: "futcont", t: "This time tomorrow I will {{*be|been|being}} lying on the beach." },
      { id: "futcont", t: "Don't call at nine – we {{*will|are|have}} be having dinner." },
      { id: "futperfcont", t: "By June, I will have {{*been|be|being}} studying English for ten years." },
      { id: "futperfcont", t: "Next month they {{*will|are|have}} have been living here for a year." },
      { id: "do", t: "{{*Does|Is|Has}} your brother play the guitar?" },
      { id: "do", t: "I {{*don't|haven't|am not}} like horror films." },
      { id: "did", t: "Where {{*did|were|have}} you go on holiday last summer?" },
      { id: "did", t: "He {{*didn't|wasn't|hasn't}} call me yesterday." },
      { id: "goingto", t: "I {{*was|did|had}} going to phone you, but I forgot." },
      { id: "goingto", t: "They told us they {{*were|did|had}} going to move to Spain." }
    ] },
  { type: "mcq", title: "Name the tense", short: "Name the tense", instr: "Which tense is used in each sentence? Tap its name.",
    items: [
      { id: "ppc", q: "She has been working here since May.", o: ["Present Perfect Continuous", "Present Perfect", "Past Perfect Continuous", "Present Continuous"] },
      { id: "pastperf", q: "When I arrived, everyone had left.", o: ["Past Perfect", "Present Perfect", "Past Simple", "Past Perfect Continuous"] },
      { id: "futcont", q: "At 10 am tomorrow I will be sitting an exam.", o: ["Future Continuous", "Future Perfect Continuous", "Present Continuous", "Future Simple"] },
      { id: "pastcont", q: "We were watching TV when the lights went out.", o: ["Past Continuous", "Past Simple", "Past Perfect Continuous", "Present Continuous"] },
      { id: "futperfcont", q: "By 2030 he will have been teaching for 20 years.", o: ["Future Perfect Continuous", "Future Continuous", "Present Perfect Continuous", "Past Perfect Continuous"] },
      { id: "presperf", q: "I have just finished my homework.", o: ["Present Perfect", "Past Simple", "Past Perfect", "Present Perfect Continuous"] },
      { id: "pastperfcont", q: "Her eyes were red because she had been crying.", o: ["Past Perfect Continuous", "Past Continuous", "Past Perfect", "Present Perfect Continuous"] },
      { id: "prescont", q: "Why are you laughing?", o: ["Present Continuous", "Present Simple", "Past Continuous", "Present Perfect Continuous"] },
      { id: "goingto", q: "I was going to call you, but my phone died.", o: ["Future in the Past", "Past Continuous", "Future Continuous", "Past Simple"] },
      { id: "did", q: "Did you see the match last night?", o: ["Past Simple", "Present Perfect", "Past Continuous", "Present Simple"] }
    ] },
  { type: "gaps", title: "One word in each gap", short: "Open cloze", layout: "text", keepOrder: true,
    instr: "Read the whole text first. Then write ONE auxiliary verb in each gap (is, was, has, had, do, did, will, been…).",
    items: [
      { t: "My grandfather [[has#presperf]] always loved the sea. Before he retired, he [[had#pastperfcont]] been working as a ship's captain for thirty years. One day, while he [[was#pastcont]] sailing near Norway, a terrible storm started. “What [[are#prescont]] we going to do?” the young sailors asked. “We [[are#prescont]] not going to panic,” he answered calmly. Later he told me he [[had#pastperf]] never seen such big waves before. Now he [[is#prescont]] writing a book about his adventures. “[[Do#do]] you think people will read it?” he asks me. Of course I [[do#do]]! He [[did#did]] not want to stop working, but his doctor insisted. By next summer he will [[have#futperfcont]] been writing the book for two years, and this time next year we will [[be#futcont]] celebrating its publication." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the auxiliary verb correct? Wrong ones show the correct version.",
    items: [
      { id: "presperf", t: "I have lived here since I was a child.", ok: true },
      { id: "ppc", t: "She is been learning French for two years.", ok: false, fix: "She has been learning French for two years." },
      { id: "did", t: "Did you went to the party?", ok: false, fix: "Did you go to the party?" },
      { id: "do", t: "Does she like coffee?", ok: true },
      { id: "pastperf", t: "By the time we arrived, the train has left.", ok: false, fix: "By the time we arrived, the train had left." },
      { id: "pastcont", t: "They was playing football when it started to rain.", ok: false, fix: "They were playing football when it started to rain." },
      { id: "futcont", t: "This time next week I'll be flying to Rome.", ok: true },
      { id: "do", t: "He don't eat meat.", ok: false, fix: "He doesn't eat meat." },
      { id: "pastperfcont", t: "We had been walking for hours, so we were exhausted.", ok: true },
      { id: "prescont", t: "Listen! Somebody does knocking at the door.", ok: false, fix: "Somebody is knocking at the door." },
      { id: "futperfcont", t: "In May, I will have been working here for five years.", ok: true },
      { id: "goingto", t: "I did going to tell you, but I forgot.", ok: false, fix: "I was going to tell you, but I forgot." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the right tense.",
    items: [
      { id: "ppc", ru: "Я жду тебя уже полчаса.", en: "I have been waiting for you for half an hour.", key: "(have|'ve) been waiting", hint: "have been waiting (Present Perfect Continuous)" },
      { id: "presperf", ru: "Ты когда-нибудь был в Париже?", en: "Have you ever been to Paris?", key: "have you ever been", hint: "Have you ever been…? (Present Perfect)" },
      { id: "pastcont", ru: "Когда ты позвонил, я готовила ужин.", en: "When you called, I was cooking dinner.", key: "was (cooking|making|preparing)", hint: "was cooking (Past Continuous)" },
      { id: "pastperf", ru: "Когда мы пришли, концерт уже начался.", en: "When we arrived, the concert had already started.", key: "had (already )?(started|begun)", hint: "had already started (Past Perfect)" },
      { id: "futcont", ru: "Завтра в это время я буду лететь в Лондон.", en: "This time tomorrow I will be flying to London.", key: "(will|'ll) be flying", hint: "will be flying (Future Continuous)" },
      { id: "did", ru: "Ты вчера сделал домашку?", en: "Did you do your homework yesterday?", key: "did you do", hint: "Did you do…? (Past Simple)" },
      { id: "do", ru: "Он не любит рано вставать.", en: "He doesn't like getting up early.", key: "(doesn't|does not) like", hint: "doesn't like (Present Simple)" },
      { id: "pastperfcont", ru: "Она устала, потому что весь день работала.", en: "She was tired because she had been working all day.", key: "had been working", hint: "had been working (Past Perfect Continuous)" },
      { id: "goingto", ru: "Я собиралась тебе написать, но забыла.", en: "I was going to write to you, but I forgot.", key: "was going to", hint: "was going to" },
      { id: "futperfcont", ru: "К лету я буду учить английский уже пять лет.", en: "By the summer I will have been learning English for five years.", key: "will have been (learning|studying)", hint: "will have been learning (Future Perfect Continuous)" }
    ] }
];
