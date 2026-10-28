// TITLE: Who, Whose, Where
// EYEBROW: Use of English B2 · Unit 2 · Grammar Revision: Relative Clauses A
// SUB: Relative pronouns and adverbs: who, whom, whose, which, that, where, when, why. Five drills, plus the traps from “Points to remember”.
// BOARD: Your relative words
const META = { ls: "uoe-b2-u2-relative" };
const P = [
  { id: "who", phrase: "who", ru: "для людей (подлежащее или дополнение)" },
  { id: "whom", phrase: "whom", ru: "для людей после предлога: with whom" },
  { id: "whose", phrase: "whose", ru: "чей (принадлежность)" },
  { id: "which", phrase: "which", ru: "для предметов и животных" },
  { id: "that", phrase: "that", ru: "вместо who / which, но только в defining clauses" },
  { id: "where", phrase: "where = in which", ru: "где (место)" },
  { id: "when", phrase: "when", ru: "когда (время)" },
  { id: "why", phrase: "why", ru: "почему (the reason why)" },
  { id: "someof", phrase: "some / most of which / whom", ru: "некоторые из которых" },
  { id: "nothat", phrase: "no that after a comma", ru: "в non-defining (с запятыми) нельзя that" },
  { id: "oneword", phrase: "only one subject / object", ru: "My brother, who is… (не who he is)" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the relative word", short: "Choose", instr: "Tap the word that fits.",
    items: [
      { id: "who", t: "The woman {{*who|which|whose}} lives next door is a doctor." },
      { id: "who", t: "Gagarin was the man {{*who|which|where}} first flew into space." },
      { id: "whom", t: "The man with {{*whom|who|that}} she is talking is her uncle." },
      { id: "whom", t: "The friends to {{*whom|who|which}} I sent invitations all came." },
      { id: "whose", t: "That's the boy {{*whose|who|who's}} dog bit me." },
      { id: "whose", t: "Tchaikovsky, {{*whose|who|which}} music is famous all over the world, was born in 1840." },
      { id: "which", t: "I've lost the book {{*which|who|where}} you gave me." },
      { id: "which", t: "We visited the Hermitage, {{*which|that|where}} is one of the largest museums in the world." },
      { id: "that", t: "This is the best film {{*that|what|where}} I have ever seen." },
      { id: "where", t: "This is the café {{*where|which|when}} we first met." },
      { id: "where", t: "The town {{*where|which|when}} I grew up is very small." },
      { id: "when", t: "I'll never forget the day {{*when|where|which}} I passed my driving test." },
      { id: "when", t: "Summer is the time {{*when|where|which}} most people go on holiday." },
      { id: "why", t: "That's the reason {{*why|which|where}} she left her job." },
      { id: "someof", t: "I have many friends, some of {{*whom|who|them}} live abroad." },
      { id: "someof", t: "She wrote ten books, most of {{*which|that|them}} became bestsellers." },
      { id: "nothat", t: "My father, {{*who|that|whom}} is fifty, still plays football." },
      { id: "where", t: "The room in {{*which|where|that}} he works is very small." }
    ],
    note: "where = in which: the room where he works = the room in which he works (NOT in where). After a comma (non-defining clause), never use that." },
  { type: "gaps", title: "One word in each gap", short: "Open cloze", layout: "text", keepOrder: true,
    instr: "Read the text about Yuri Gagarin. Write ONE relative pronoun or adverb in each gap.",
    items: [
      { t: "Yuri Gagarin, [[who#who]] was the first person to travel into space, was born in 1934 in a small village [[where#where]] his parents worked on a farm. Gagarin, [[whose#whose]] father was a carpenter, grew up during the war, [[which#which]] was a very difficult time for his family. That is [[why#why]] he started working at an early age. Later he joined a flying club, [[where#where]] he learned to fly planes. In 1961, the year [[when#when]] he made his famous flight, he was only 27. The spaceship [[which/that#that]] took him into space was called Vostok 1. He was a hero to millions of people, many of [[whom#someof]] wrote letters to him. The town of Gzhatsk, near [[which#which]] he was born, is now called Gagarin." }
    ] },
  { type: "mcq", title: "Join the sentences", short: "Join them", instr: "Tap the sentence that correctly joins the two sentences.",
    items: [
      { id: "who", q: "I have a friend. She speaks five languages.", o: ["I have a friend who speaks five languages.", "I have a friend who she speaks five languages.", "I have a friend which speaks five languages.", "I have a friend whose speaks five languages."] },
      { id: "whose", q: "This is Tom. His sister is in my class.", o: ["This is Tom, whose sister is in my class.", "This is Tom, who sister is in my class.", "This is Tom, that his sister is in my class.", "This is Tom, which sister is in my class."] },
      { id: "where", q: "That's the hotel. We stayed there last summer.", o: ["That's the hotel where we stayed last summer.", "That's the hotel in where we stayed last summer.", "That's the hotel where we stayed there last summer.", "That's the hotel when we stayed last summer."] },
      { id: "nothat", q: "Moscow is a huge city. It has twelve million people.", o: ["Moscow, which has twelve million people, is a huge city.", "Moscow, that has twelve million people, is a huge city.", "Moscow, who has twelve million people, is a huge city.", "Moscow, which it has twelve million people, is a huge city."] },
      { id: "whom", q: "The man is her husband. She is dancing with him.", o: ["The man with whom she is dancing is her husband.", "The man with who she is dancing is her husband.", "The man with that she is dancing is her husband.", "The man with whom she is dancing with is her husband."] },
      { id: "someof", q: "I have 3,000 stamps. Some of them are valuable.", o: ["I have 3,000 stamps, some of which are valuable.", "I have 3,000 stamps, some of that are valuable.", "I have 3,000 stamps, some of them which are valuable.", "I have 3,000 stamps, which some are valuable."] },
      { id: "when", q: "I remember the day. We moved to Moscow then.", o: ["I remember the day when we moved to Moscow.", "I remember the day where we moved to Moscow.", "I remember the day which we moved to Moscow.", "I remember the day when we moved to Moscow then."] },
      { id: "oneword", q: "My brother is an engineer. You met him at the party.", o: ["My brother, who you met at the party, is an engineer.", "My brother, who you met him at the party, is an engineer.", "My brother, that you met at the party, is an engineer.", "My brother, which you met at the party, is an engineer."] },
      { id: "why", q: "I don't know the reason. She quit her job for this reason.", o: ["I don't know the reason why she quit her job.", "I don't know the reason where she quit her job.", "I don't know the reason which she quit her job.", "I don't know why the reason she quit her job."] }
    ] },
  { type: "tf", title: "Points to remember", short: "Traps", instr: "Classic mistakes with relative clauses. Is each sentence right or wrong?",
    items: [
      { id: "oneword", t: "My sister, who she is a nurse, works at night.", ok: false, fix: "My sister, who is a nurse, works at night." },
      { id: "nothat", t: "Ann's father, that we met last week, is ill.", ok: false, fix: "Ann's father, who / whom we met last week, is ill." },
      { id: "whom", t: "The man with whom she is talking is her husband.", ok: true },
      { id: "whom", t: "The man with who she is talking is her husband.", ok: false, fix: "The man with whom she is talking is her husband." },
      { id: "where", t: "The room in where he works is small.", ok: false, fix: "The room where he works / in which he works is small." },
      { id: "where", t: "The room he works in is small.", ok: true },
      { id: "someof", t: "I have many books, some of that are very old.", ok: false, fix: "I have many books, some of which are very old." },
      { id: "that", t: "The phone that I bought yesterday doesn't work.", ok: true },
      { id: "which", t: "The cat which lives next door is very friendly.", ok: true },
      { id: "whose", t: "The girl who's bag was stolen called the police.", ok: false, fix: "The girl whose bag was stolen called the police." },
      { id: "where", t: "The room where he works in is small.", ok: false, fix: "The room where he works is small." },
      { id: "who", t: "The teacher who taught me French has retired.", ok: true }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the relative word.",
    items: [
      { id: "who", ru: "Девушка, которая поёт, – моя сестра.", en: "The girl who is singing is my sister.", key: "girl who" },
      { id: "whose", ru: "Это мальчик, чья мама – врач.", en: "This is the boy whose mother is a doctor.", key: "whose (mother|mum)" },
      { id: "which", ru: "Мне нравится книга, которую ты мне дал.", en: "I like the book which you gave me.", key: "book (which|that) you gave|book you gave" , hint: "the book (which/that) you gave me" },
      { id: "where", ru: "Это дом, где я родилась.", en: "This is the house where I was born.", key: "where i was born|in which i was born" },
      { id: "when", ru: "Помнишь день, когда мы познакомились?", en: "Do you remember the day when we met?", key: "day (when |that )?we met" , hint: "the day when we met" },
      { id: "why", ru: "Вот почему я опоздала.", en: "That's the reason why I was late.", key: "(reason )?why i was late" },
      { id: "someof", ru: "У меня много друзей, некоторые из которых живут в Москве.", en: "I have many friends, some of whom live in Moscow.", key: "some of whom" },
      { id: "someof", ru: "Он написал пять романов, большинство из которых стали известными.", en: "He wrote five novels, most of which became famous.", key: "most of which" },
      { id: "whom", ru: "Человек, с которым ты говорил, – мой учитель.", en: "The man with whom you were talking is my teacher.", key: "with whom|who you were talking (to|with)|you were talking (to|with)", hint: "the man with whom you were talking" },
      { id: "nothat", ru: "Мой отец, которому 50 лет, бегает марафоны.", en: "My father, who is 50, runs marathons.", key: "father,? who" }
    ] }
];
