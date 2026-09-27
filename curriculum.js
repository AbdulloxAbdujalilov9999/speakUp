// SpeakUp curriculum — REBUILD in progress (started fresh on the deduplicated
// Round-Up 1/2/3 grammar sequence in grammar.js; see that file's header).
// Only Week 1 is built so far — more weeks are added incrementally.
//
// Pedagogy note (fixes the "how does a zero-starter know 'I have' means
// anything?" problem from the previous version): a day's vocabulary examples
// either (a) use ONLY formulaic chunks explicitly taught as memorized
// patterns (never silently assumed), or (b) use grammar already formally
// taught in an earlier day's grammar tip. Every grammar tip that introduces
// a chunk says so explicitly in Uzbek — "bu qolipni yodlab oling, to'liq
// qoidasini keyinroq o'rganamiz" (memorize this pattern, we'll learn the
// full rule later) — so nothing is assumed silently.
//
// Day schema (normal day): {d,w,wt,wtUz,t,tu,v,dl,g,qz,sp,ls}
//   v: vocabulary, [en, uz, exampleSentenceContainingWord]
//   g: grammar/pattern tip, [titleEn, bodyEn, titleUz, bodyUz]
//   qz: quiz, [question, [4 choices], correctIndex]
//   sp: speaking prompt, [en, uz]
//   ls: live-session extras, [warmupEn, warmupUz, pairworkEn, pairworkUz]
// Review day (every 5th day): {d,w,wt,wtUz,rev:true,t,tu,qz,sp,ls} (no v/dl/g)

const CURRICULUM = [

{d:1,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"Greetings & Introducing Yourself",tu:"Salomlashish va o'zingizni tanishtirish",
v:[
["Hello / Hi","Salom","Hello! My name is Aziz."],
["Good morning","Xayrli tong","Good morning, teacher!"],
["Good afternoon","Xayrli kun","Good afternoon, everyone."],
["Good evening","Xayrli kech","Good evening, Mrs. Alice."],
["Goodbye","Xayr","Goodbye! See you soon."],
["Please","Iltimos","Open the door, please."],
["Thank you","Rahmat","Thank you very much!"],
["Sorry","Kechirasiz","Sorry, I am late."],
["Yes","Ha","Yes, thank you."],
["No","Yo'q","No, thank you."],
["My name is...","Mening ismim...","My name is Dilnoza."],
["What's your name?","Ismingiz nima?","What's your name, my friend?"],
["Nice to meet you","Tanishganimdan xursandman","Nice to meet you, Sardor!"],
["How are you?","Qalaysiz?","How are you today?"],
["I'm fine","Yaxshiman","I'm fine, thank you."]
],
dl:[
["Aziz","Hello! My name is Aziz.","Salom! Mening ismim Aziz."],
["Malika","Hi, Aziz! I'm Malika. Nice to meet you.","Salom, Aziz! Men Malikaman. Tanishganimdan xursandman."],
["Aziz","Nice to meet you too. How are you?","Men ham xursandman. Qalaysiz?"],
["Malika","I'm fine, thank you. And you?","Yaxshiman, rahmat. Sizchi?"],
["Aziz","I'm fine too. Goodbye!","Men ham yaxshiman. Xayr!"],
["Malika","Goodbye, Aziz!","Xayr, Aziz!"]
],
g:["Greetings Are Fixed Phrases",
"'Hello', 'Good morning', 'Nice to meet you' and 'How are you?' are whole phrases people say without thinking about grammar — just memorize each one as one chunk, the same way you already know Uzbek greetings. We'll start looking at how English sentences are actually built (grammar) starting tomorrow.",
"Salomlashish — tayyor iboralar",
"'Hello', 'Good morning', 'Nice to meet you' va 'How are you?' — bularning barchasi grammatikani o'ylamasdan aytiladigan tayyor iboralar; ularni xuddi o'zbekcha salomlashuv so'zlarini bilganingizdek, bitta butun bo'lak sifatida yodlab oling. Ingliz gaplari qanday tuzilishini (grammatikani) ertagadan boshlab o'rganamiz."],
qz:[
["How do you say 'Salom' in English?",["Goodbye","Hello","Sorry","No"],1],
["What do you say when someone helps you?",["Sorry","Goodbye","Thank you","No"],2],
["What is the opposite of 'Yes'?",["No","Please","Sorry","Hello"],0],
["Choose the correct reply to 'How are you?'",["My name is Aziz.","I'm fine, thank you.","Nice to meet you.","Goodbye."],1]
],
sp:["Introduce yourself to a partner: say hello, your name, and ask how they are.","Sherigingizga o'zingizni tanishtiring: salomlashing, ismingizni ayting va ahvolini so'rang."],
ls:["Stand up and greet 3 classmates using different greetings.","O'rningizdan turing va 3 nafar sinfdoshingizni turli salomlashish iboralari bilan salomlang.",
"In pairs, act out meeting for the first time: greet, introduce your name, ask 'How are you?', and say goodbye.","Juftlikda birinchi marta uchrashuvni ijro eting: salomlashing, ismingizni ayting, 'Qalaysiz?' deb so'rang va xayrlashing."]
},

{d:2,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"The Alphabet & \"This is a...\"",tu:"Alifbo va \"This is a...\" iborasi",
v:[
["cat","mushuk","This is a cat."],
["dog","it","This is a dog."],
["book","kitob","This is a book."],
["pen","ruchka","This is a pen."],
["bag","sumka","This is a bag."],
["sun","quyosh","This is the sun."],
["apple","olma","This is an apple."],
["egg","tuxum","This is an egg."],
["ball","to'p","This is a ball."],
["hat","shlyapa","This is a hat."]
],
dl:[
["Teacher","What's this?","Bu nima?"],
["Student","It's a book.","Bu kitob."],
["Teacher","Is this a pen?","Bu ruchkami?"],
["Student","No, it's a bag.","Yo'q, bu sumka."],
["Teacher","Good! What's this?","Yaxshi! Bu nima?"],
["Student","It's an apple.","Bu olma."]
],
g:["A Useful Pattern: \"This is a/an...\" / \"It's a/an...\"",
"For now, just memorize this pattern for naming objects: 'This is a ___' or 'It's a ___'. Use 'an' instead of 'a' before words that start with a vowel sound: an apple, an egg. We'll learn the real grammar rule for 'a/an' and 'to be' soon — for now, just use the whole pattern to name things around you.",
"Foydali qolip: \"This is a/an...\" / \"It's a/an...\"",
"Hozircha narsalarni nomlash uchun shu qolipni yodlab oling: 'This is a ___' yoki 'It's a ___'. Unli tovush bilan boshlanuvchi so'zlardan oldin 'a' o'rniga 'an' ishlatiladi: an apple, an egg. 'A/an' va 'to be' ning haqiqiy grammatik qoidasini tez orada o'rganamiz — hozircha butun qolipni narsalarni nomlash uchun ishlating."],
qz:[
["How many letters are in the English alphabet?",["24","25","26","27"],2],
["'Mushuk' in English is ___.",["Dog","Cat","Book","Bag"],1],
["Choose the correct pattern to name an object.",["This a book.","This is a book.","This book is.","Is this book."],1],
["Choose 'a' or 'an': '___ apple'",["a","an","the","some"],1]
],
sp:["Point to 5 objects near you and say 'This is a ___' for each one.","Atrofingizdagi 5 ta buyumga ishora qilib, har biri uchun 'This is a ___' deng."],
ls:["Sing the ABC song together as a class.","Sinf bilan birga ABC qo'shig'ini kuylang.",
"In pairs, take turns pointing at objects and asking 'What's this?'","Juftlikda navbatma-navbat buyumlarga ishora qilib 'Bu nima?' deb so'rang."]
},

{d:3,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"Numbers 1-10 & \"I have...\"",tu:"1 dan 10 gacha sonlar va \"I have...\" iborasi",
v:[
["one","bir","I have one book."],
["two","ikki","I have two pens."],
["three","uch","I have three apples."],
["four","to'rt","I have four balls."],
["five","besh","I have five hats."],
["six","olti","I have six books."],
["seven","yetti","I have seven pens."],
["eight","sakkiz","I have eight apples."],
["nine","to'qqiz","I have nine balls."],
["ten","o'n","I have ten books."]
],
dl:[
["Teacher","How many pens do you have?","Nechta ruchkangiz bor?"],
["Student","I have three pens.","Mening uchta ruchkam bor."],
["Teacher","How many books do you have?","Nechta kitobingiz bor?"],
["Student","I have five books.","Mening beshta kitobim bor."]
],
g:["A Useful Pattern: \"I have...\"",
"Memorize this pattern to talk about what you have: 'I have ___'. Add a number before the thing to say how many: I have two pens. We'll learn the full grammar rule for 'have/has' (and how it changes for he/she) in a later lesson — for now, just use 'I have' to count and describe your things.",
"Foydali qolip: \"I have...\"",
"Nimangiz borligini aytish uchun shu qolipni yodlab oling: 'I have ___'. Nechta ekanini aytish uchun narsadan oldin son qo'shiladi: I have two pens. 'Have/has' ning to'liq qoidasini (va u he/she bilan qanday o'zgarishini) keyingi darslarda o'rganamiz — hozircha 'I have' dan narsalaringizni sanash va tasvirlash uchun foydalaning."],
qz:[
["What number is 'five'?",["3","4","5","6"],2],
["'O'n' in English is ___.",["Nine","Ten","Eight","Seven"],1],
["Choose the correct pattern: '___ two pens.'",["I has","I have","I am","I is"],1],
["What comes after 'seven'?",["Six","Eight","Nine","Ten"],1]
],
sp:["Count 5 things you have with you and say 'I have ___' for each.","Yoningizdagi 5 ta narsani sanang va har biri uchun 'I have ___' deng."],
ls:["Count around the room — each student says the next number from 1 to 10.","Xona bo'ylab sanang — har bir o'quvchi navbatma-navbat 1 dan 10 gacha keyingi sonni aytadi.",
"In pairs, ask 'How many ___ do you have?' about pens, books, and bags.","Juftlikda ruchka, kitob va sumkalar haqida 'Nechtasi bor?' deb so'rang."]
},

{d:4,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"Classroom Words & Instructions",tu:"Sinf so'zlari va topshiriqlar",
v:[
["notebook","daftar","Open your notebook."],
["desk","parta","Sit at your desk."],
["chair","stul","Sit on the chair."],
["board","doska","Look at the board."],
["stand up","o'rningdan tur","Stand up, please."],
["sit down","o'tir","Sit down, everyone."],
["listen","tinglamoq","Listen to the teacher."],
["look","qaramoq","Look at the board."],
["be quiet","jim bo'l","Be quiet, please."],
["raise your hand","qo'lingizni ko'taring","Raise your hand if you know the answer."]
],
dl:[
["Teacher","Good morning, class! Stand up, please.","Xayrli tong, sinf! O'rningizdan turing, iltimos."],
["Students","Good morning, teacher!","Xayrli tong, o'qituvchi!"],
["Teacher","Sit down. Open your notebook.","O'tiring. Daftaringizni oching."],
["Student","I don't have a pen.","Mening ruchkam yo'q."],
["Teacher","Here you are. Now listen, please.","Mana. Endi tinglang, iltimos."]
],
g:["A Useful Pattern: Classroom Commands",
"These short commands are fixed phrases teachers use in every lesson — memorize them as whole chunks: Stand up. Sit down. Listen. Look. Be quiet. Raise your hand. We'll learn the grammar behind commands (the imperative) properly in a later lesson.",
"Foydali qolip: sinf buyruqlari",
"Bu qisqa buyruqlar o'qituvchilar har bir darsda ishlatadigan tayyor iboralar — ularni butun bo'lak sifatida yodlab oling: Stand up. Sit down. Listen. Look. Be quiet. Raise your hand. Buyruqlar ortidagi grammatikani (imperativni) keyingi darsda to'liq o'rganamiz."],
qz:[
["What do you say to ask someone to be quiet and listen?",["Stand up","Listen","Sit down","Raise your hand"],1],
["'Daftar' in English is ___.",["Book","Notebook","Pen","Bag"],1],
["What do you do when you know the answer?",["Sit down","Be quiet","Raise your hand","Stand up"],2],
["Choose the command for standing up.",["Sit down","Stand up","Listen","Look"],1]
],
sp:["Give your partner 3 classroom commands (e.g. 'Stand up', 'Open your notebook').","Sherigingizga 3 ta sinf buyrug'ini bering (masalan, 'Stand up', 'Open your notebook')."],
ls:["Play 'Simon Says' using classroom commands (stand up, sit down, listen, look).","Sinf buyruqlari bilan 'Simon Says' o'yinini o'ynang.",
"In pairs, one student gives 5 commands, the other performs them, then switch.","Juftlikda bir o'quvchi 5 ta buyruq beradi, ikkinchisi bajaradi, so'ngra almashing."]
},

{d:5,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",rev:true,
t:"Week 1 Review",tu:"1-hafta Takrorlash",
qz:[
["How do you say 'Salom' in English?",["Goodbye","Hello","Sorry","No"],1],
["Choose the correct pattern to name an object.",["This a book.","This is a book.","This book is.","Is this book."],1],
["'O'n' in English is ___.",["Nine","Ten","Eight","Seven"],1],
["What do you say to ask someone to be quiet and listen?",["Stand up","Listen","Sit down","Raise your hand"],1],
["Choose 'a' or 'an': '___ apple'",["a","an","the","some"],1],
["Choose the correct pattern: '___ two pens.'",["I has","I have","I am","I is"],1],
["What is the opposite of 'Yes'?",["No","Please","Sorry","Hello"],0],
["'Daftar' in English is ___.",["Book","Notebook","Pen","Bag"],1]
],
sp:["Introduce yourself fully: say hello, your name, count from 1 to 10, and name 3 things in your bag using 'I have'.","O'zingizni to'liq tanishtiring: salomlashing, ismingizni ayting, 1 dan 10 gacha sanang va sumkangizdagi 3 ta narsani 'I have' bilan ayting."],
ls:["Quick class quiz: call out a number or object, students respond fast in English.","Tezkor sinf so'rovi: son yoki buyumni ayting, o'quvchilar tezda ingliz tilida javob beradi.",
"In pairs, review the week: greet each other, name objects, count, and give commands.","Juftlikda haftani takrorlang: bir-biringizni salomlang, buyumlarni nomlang, sanang va buyruq bering."]
}

];

if (typeof module !== "undefined") module.exports = CURRICULUM;
