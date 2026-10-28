// TITLE: Choose the Correct Answer
// EYEBROW: Use of English B2 · Unit 2 · Examination Practice A (Section 1)
// SUB: The ten grammar and vocabulary points tested in this multiple-choice exercise: relative clauses, time clauses and prepositions. Five drills with new sentences.
// BOARD: Your grammar points
const META = { ls: "uoe-b2-u2-exammixed" };
const P = [
  { id: "outskirts", phrase: "on the outskirts", ru: "на окраине" },
  { id: "once", phrase: "Once they come, … (Present)", ru: "как только (без will)" },
  { id: "whois", phrase: "the man who is sitting", ru: "человек, который сидит" },
  { id: "fromnow", phrase: "from now on", ru: "отныне" },
  { id: "sleeves", phrase: "the sleeves of which", ru: "рукава которого" },
  { id: "whenpay", phrase: "when you pay (not will pay)", ru: "когда заплатите" },
  { id: "getby", phrase: "get by on", ru: "обходиться (малыми деньгами)" },
  { id: "inwhich", phrase: "in which (not in where)", ru: "в котором" },
  { id: "assoonas", phrase: "as soon as", ru: "как только" },
  { id: "where", phrase: "the town where", ru: "город, где" }
];
const DRILLS = [
  { type: "gaps", title: "Choose the correct answer", short: "A B C D", instr: "Tap the option that completes each sentence correctly.",
    items: [
      { id: "outskirts", t: "Our school is {{*on|in|at|to}} the outskirts of Novgorod." },
      { id: "outskirts", t: "They bought a flat {{*on the outskirts|in the outskirts|at outskirts|on outskirts}} of the city." },
      { id: "once", t: "Once the guests {{*arrive|will arrive|arrived|are arriving}}, we'll serve dinner." },
      { id: "once", t: "{{*Once|While|During|Until}} you've read the letter, burn it!" },
      { id: "whois", t: "The girl {{*who is standing|where is standing|who standing|that standing}} by the window is my cousin." },
      { id: "whois", t: "The boy {{*who won|which won|who he won|whose won}} the race is only twelve." },
      { id: "fromnow", t: "{{*From|By|For|At}} now on, you must hand in your homework on time." },
      { id: "sleeves", t: "She bought a coat, {{*the pockets of which|which the pockets|that the pockets|the pockets of that}} are very deep." },
      { id: "sleeves", t: "I live in a house, {{*the windows of which|which windows|that windows of|the windows of that}} face the sea." },
      { id: "whenpay", t: "You'll get the tickets {{*when you pay|when you will pay|when you are paying|during you pay}}." },
      { id: "whenpay", t: "I'll lend you the book when I {{*finish|will finish|am finishing|finished}} it." },
      { id: "getby", t: "Many students get {{*by|over|round|with}} on very little money." },
      { id: "inwhich", t: "The flat {{*in which|in where|which|that}} we live is on the fifth floor." },
      { id: "inwhich", t: "The company {{*for which|for where|for that|where for}} she works is in London." },
      { id: "assoonas", t: "The students left {{*as soon as|as|while|until}} they finished the test." },
      { id: "where", t: "We visited the village {{*where|which|that|when}} my grandmother was born." }
    ] },
  { type: "gaps", title: "One word only", short: "One word", instr: "No options now. Write ONE word in each gap.",
    items: [
      { id: "outskirts", t: "The airport is [[on]] the outskirts of the city." },
      { id: "once", t: "[[Once]] you finish, you can go home." },
      { id: "whois", t: "The man [[who]] is talking to my dad is our new neighbour." },
      { id: "fromnow", t: "From now [[on]], we'll speak only English in class." },
      { id: "sleeves", t: "He wore a jacket, the sleeves [[of]] which were too short." },
      { id: "whenpay", t: "The parcel will arrive when you [[pay]] for it." },
      { id: "getby", t: "Can you get [[by]] on 500 roubles a day?" },
      { id: "inwhich", t: "This is the room in [[which]] the famous writer worked." },
      { id: "assoonas", t: "I'll text you as soon [[as]] the plane lands." },
      { id: "where", t: "This is the park [[where]] we used to play." },
      { id: "inwhich", t: "The house [[in]] which I grew up has been pulled down." },
      { id: "sleeves", t: "I've read twenty of her books, most [[of]] which I enjoyed." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Is each sentence correct?",
    items: [
      { id: "outskirts", t: "They live in the outskirts of Kazan.", ok: false, fix: "They live on the outskirts of Kazan." },
      { id: "once", t: "Once they will come, we'll talk to them.", ok: false, fix: "Once they come, we'll talk to them." },
      { id: "whois", t: "The man who is sitting in the front row is my uncle.", ok: true },
      { id: "whois", t: "The man where is sitting in the front row is my uncle.", ok: false, fix: "The man who is sitting in the front row is my uncle." },
      { id: "fromnow", t: "By now on, phones are not allowed.", ok: false, fix: "From now on, phones are not allowed." },
      { id: "sleeves", t: "My grandma knitted me a jumper, the sleeves of which are too long.", ok: true },
      { id: "whenpay", t: "The electricity will be reconnected when you will pay the bill.", ok: false, fix: "…when you pay the bill." },
      { id: "getby", t: "Some families get by on very little money.", ok: true },
      { id: "inwhich", t: "The hotel in where we stayed was perfect.", ok: false, fix: "The hotel in which / where we stayed was perfect." },
      { id: "assoonas", t: "Call me as soon as you get there.", ok: true },
      { id: "where", t: "We visited the town which our grandfather grew up.", ok: false, fix: "We visited the town where our grandfather grew up." },
      { id: "where", t: "This is the school where my mum teaches.", ok: true }
    ] },
  { type: "order", title: "Word order", short: "Word order", instr: "Tap the words in the right order. Tap a word in your answer to send it back.",
    items: [
      { id: "inwhich", s: "The hotel in which we stayed was perfect." },
      { id: "whois", s: "The boy who is sitting there is my brother." },
      { id: "once", s: "Once they come, we'll talk to them." },
      { id: "sleeves", s: "She has a dress, the sleeves of which are too long." },
      { id: "getby", s: "We can get by on very little money." },
      { id: "fromnow", s: "From now on, you must be on time." },
      { id: "where", s: "This is the town where I grew up." },
      { id: "assoonas", s: "We left as soon as it stopped raining." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Say it aloud, then type it. The check looks for the key structure.",
    items: [
      { id: "outskirts", ru: "Мы живём на окраине города.", en: "We live on the outskirts of the city.", key: "on the outskirts" },
      { id: "once", ru: "Как только они придут, мы начнём.", en: "Once they come, we'll start.", key: "once they (come|arrive)" },
      { id: "whois", ru: "Женщина, которая сидит у окна, – моя учительница.", en: "The woman who is sitting by the window is my teacher.", key: "woman (who|that) is sitting|woman sitting" , hint: "the woman who is sitting" },
      { id: "fromnow", ru: "С этого момента я не опаздываю.", en: "From now on, I won't be late.", key: "from now on" },
      { id: "whenpay", ru: "Вы получите книгу, когда заплатите.", en: "You will get the book when you pay.", key: "when you pay" },
      { id: "getby", ru: "Как вы обходитесь без машины?", en: "How do you get by without a car?", key: "get by" },
      { id: "inwhich", ru: "Квартира, в которой мы живём, очень маленькая.", en: "The flat in which we live is very small.", key: "in which we live|where we live|we live in" , hint: "the flat in which / where we live" },
      { id: "assoonas", ru: "Я позвоню, как только узнаю.", en: "I'll call as soon as I know.", key: "as soon as i (know|find out)" },
      { id: "where", ru: "Это город, где родился мой папа.", en: "This is the town where my dad was born.", key: "where my (dad|father) was born" },
      { id: "sleeves", ru: "У меня есть свитер, рукава которого слишком длинные.", en: "I have a jumper, the sleeves of which are too long.", key: "the sleeves of which|whose sleeves" }
    ] }
];
