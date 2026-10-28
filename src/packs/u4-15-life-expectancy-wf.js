// TITLE: Life Expectancy
// EYEBROW: Use of English B2 · Unit 4 · Examination Practice B (Section 2)
// SUB: Ten word families from the word formation text “Life Expectancy”. Five drills, ending with a new exam-style text.
// BOARD: Your word families
const META = { ls: "uoe-b2-u4-lifewf" };
const P = [
  { id: "official", phrase: "OFFICIAL → officially", ru: "официально" },
  { id: "scientist", phrase: "SCIENCE → scientist", ru: "учёный" },
  { id: "biology", phrase: "BIOLOGY → biological", ru: "биологический (biologist – биолог)" },
  { id: "scientific", phrase: "SCIENCE → scientific", ru: "научный (scientifically)" },
  { id: "medicine", phrase: "MEDICINE → medical", ru: "медицинский (medically)" },
  { id: "economics", phrase: "ECONOMICS → economic", ru: "экономический (economical – экономный)" },
  { id: "emphasis", phrase: "EMPHASIS → emphasise", ru: "подчёркивать" },
  { id: "hygiene", phrase: "HYGIENE → unhygienic", ru: "негигиеничный (hygienic)" },
  { id: "summary", phrase: "SUMMARY → summarise", ru: "подводить итог, кратко излагать" },
  { id: "nutrition", phrase: "NUTRITION → nutritious", ru: "питательный" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the right form", short: "Right form", instr: "Tap the correct form of the word.",
    items: [
      { id: "official", t: "The new bridge was {{*officially|official|officer}} opened yesterday." },
      { id: "scientist", t: "My cousin is a {{*scientist|science|scientific}} who studies the ocean." },
      { id: "biology", t: "Some say it's purely a {{*biological|biology|biologist}} fact." },
      { id: "scientific", t: "There is no {{*scientific|scientist|science}} proof for this idea." },
      { id: "medicine", t: "You need a {{*medical|medicine|medically}} certificate to join the team." },
      { id: "economics", t: "The country has serious {{*economic|economical|economics}} problems." },
      { id: "emphasis", t: "I want to {{*emphasise|emphasis|emphatic}} how important this is." },
      { id: "hygiene", t: "Sharing towels is {{*unhygienic|hygiene|unhygiene}}." },
      { id: "summary", t: "Can you {{*summarise|summary|summarily}} the article in two sentences?" },
      { id: "nutrition", t: "Lentils are cheap and very {{*nutritious|nutrition|nutritional}}." },
      { id: "scientific", t: "The results were tested {{*scientifically|scientific|scientist}}." },
      { id: "medicine", t: "Children should be {{*medically|medical|medicine}} examined twice a year." }
    ] },
  { type: "mcq", title: "Which part of speech?", short: "Part of speech", instr: "Tap the word that is the part of speech in capitals.",
    items: [
      { id: "official", q: "Which word is an ADVERB?", o: ["officially", "official", "office", "officer"] },
      { id: "scientist", q: "Which word is a PERSON?", o: ["scientist", "science", "scientific", "scientifically"] },
      { id: "biology", q: "Which word is an ADJECTIVE?", o: ["biological", "biology", "biologist", "biologically"] },
      { id: "emphasis", q: "Which word is a VERB?", o: ["emphasise", "emphasis", "emphatic", "emphatically"] },
      { id: "summary", q: "Which word is a VERB?", o: ["summarise", "summary", "summarily", "summation"] },
      { id: "nutrition", q: "Which word is an ADJECTIVE meaning “full of what your body needs”?", o: ["nutritious", "nutrition", "nutrient", "nutritionist"] },
      { id: "hygiene", q: "Which word is a NEGATIVE ADJECTIVE?", o: ["unhygienic", "hygienic", "hygiene", "hygienically"] },
      { id: "economics", q: "Which word means “about the economy”?", o: ["economic", "economical", "economist", "economise"] }
    ] },
  { type: "gaps", title: "Word formation sentences", short: "Sentences", instr: "Write the correct form of the word in capitals. Each family appears twice.",
    items: [
      { id: "official", t: "The oldest person ever [[officially]] ^OFFICIAL^ recorded lived to 122." },
      { id: "official", t: "Government [[officials]] ^OFFICIAL^ refused to comment on the report." },
      { id: "scientist", t: "There isn't a single [[scientist]] ^SCIENCE^ who can explain it." },
      { id: "scientific", t: "In poor countries, [[scientific]] ^SCIENCE^ progress is slower." },
      { id: "biology", t: "Some people say it's purely a [[biological]] ^BIOLOGY^ fact." },
      { id: "biology", t: "My sister wants to become a marine [[biologist]] ^BIOLOGY^." },
      { id: "medicine", t: "According to [[medical]] ^MEDICINE^ records, she was born in 1903." },
      { id: "medicine", t: "This plant has [[medicinal]] ^MEDICINE^ properties." },
      { id: "economics", t: "[[Economic]] ^ECONOMICS^ reasons are mainly responsible for this." },
      { id: "economics", t: "My small car is very [[economical]] ^ECONOMY^ – it uses little petrol." },
      { id: "emphasis", t: "One must also [[emphasise/emphasize]] ^EMPHASIS^ the fact that conditions are poor." },
      { id: "emphasis", t: "Our school puts great [[emphasis]] ^EMPHASISE^ on sport." },
      { id: "hygiene", t: "Sanitary conditions there are rather [[unhygienic]] ^HYGIENE^." },
      { id: "hygiene", t: "Always keep the kitchen clean and [[hygienic]] ^HYGIENE^." },
      { id: "summary", t: "To [[summarise/summarize]] ^SUMMARY^, good food and healthcare are very important." },
      { id: "summary", t: "Write a short [[summary]] ^SUMMARISE^ of the text." },
      { id: "nutrition", t: "A [[nutritious]] ^NUTRITION^ diet plays an important part in a long life." },
      { id: "nutrition", t: "Good [[nutrition]] ^NUTRITIOUS^ is important for growing children." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is the form of the word correct?",
    items: [
      { id: "official", t: "The results were announced official.", ok: false, fix: "The results were announced officially." },
      { id: "scientist", t: "Scientists have found a new planet.", ok: true },
      { id: "biology", t: "My uncle is a biological at the university.", ok: false, fix: "My uncle is a biologist at the university." },
      { id: "medicine", t: "He needs medical help.", ok: true },
      { id: "economics", t: "Turning off lights is an economic way to save money.", ok: false, fix: "…an economical way to save money." },
      { id: "emphasis", t: "The teacher emphasised the main points.", ok: true },
      { id: "hygiene", t: "It's unhygiene to eat with dirty hands.", ok: false, fix: "It's unhygienic to eat with dirty hands." },
      { id: "summary", t: "Can you summary the story?", ok: false, fix: "Can you summarise the story?" },
      { id: "nutrition", t: "Fish is a nutritious food.", ok: true },
      { id: "scientific", t: "There is scientific evidence for this.", ok: true }
    ] },
  { type: "gaps", title: "Exam text: Why do some people live longer?", short: "Exam text", layout: "text", keepOrder: true,
    instr: "Read the text and write the correct form of the word in capitals.",
    items: [
      { t: "Japan has [[officially#official]] ^OFFICIAL^ the highest number of people over one hundred. Many [[scientists#scientist]] ^SCIENCE^ have tried to explain why. Some believe the reason is [[biological#biology]] ^BIOLOGY^, while others point to lifestyle. According to [[scientific#scientific]] ^SCIENCE^ studies, the traditional Japanese diet is very [[nutritious#nutrition]] ^NUTRITION^: lots of fish, rice and vegetables. Doctors also [[emphasise/emphasize#emphasis]] ^EMPHASIS^ the importance of regular [[medical#medicine]] ^MEDICINE^ check-ups. In contrast, in countries with serious [[economic#economics]] ^ECONOMICS^ problems, people often live in [[unhygienic#hygiene]] ^HYGIENE^ conditions. To [[summarise/summarize#summary]] ^SUMMARY^, food, healthcare and money all play a part." }
    ] }
];
