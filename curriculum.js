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
,

{d:6,w:2,wt:"Me & My Friends",wtUz:"Men va do'stlarim",
t:"Pronouns & The Verb 'To Be'",tu:"Olmoshlar va 'To Be' fe'li",
v:[
["I","men","I am a student."],
["you","siz","You are my friend."],
["he","u (erkak)","He is a boy."],
["she","u (ayol)","She is a girl."],
["it","u (narsa)","It is a book."],
["we","biz","We are students."],
["they","ular","They are teachers."],
["am","(bo'lmoq)","I am happy."],
["is","(bo'lmoq)","She is kind."],
["are","(bo'lmoq)","You are smart."],
["boy","o'g'il bola","He is a boy."],
["girl","qiz bola","She is a girl."],
["teacher","o'qituvchi","She is a teacher."],
["student","o'quvchi","I am a student."],
["friend","do'st","You are my friend."]
],
dl:[
["Teacher","Who is this?","Bu kim?"],
["Student","This is my friend. He is a student.","Bu mening do'stim. U o'quvchi."],
["Teacher","Are you a teacher?","Siz o'qituvchimisiz?"],
["Student","No, I am a student.","Yo'q, men o'quvchiman."]
],
g:["The Verb 'To Be' — am / is / are",
"Now let's learn the real grammar behind sentences like 'This is a cat': the verb 'to be'. Use 'am' with I, 'is' with he/she/it, 'are' with you/we/they: I am a student. He is a boy. They are teachers.",
"'To Be' fe'li — am / is / are",
"Endi 'This is a cat' kabi gaplar ortidagi haqiqiy grammatikani o'rganamiz: 'to be' fe'li. I bilan 'am', he/she/it bilan 'is', you/we/they bilan 'are' ishlatiladi: I am a student. He is a boy. They are teachers."],
qz:[
["Choose the correct word: 'She ___ a teacher.'",["am","is","are","be"],1],
["Choose the correct word: 'They ___ students.'",["am","is","are","be"],2],
["Choose the correct word: 'I ___ a student.'",["am","is","are","be"],0],
["'U (erkak) o'quvchi' in English is ___.",["She is a student.","He is a student.","They are a student.","I am a student."],1]
],
sp:["Introduce yourself and 2 friends using I am / He is / She is.","O'zingiz va 2 ta do'stingizni 'I am / He is / She is' bilan tanishtiring."],
ls:["Point at classmates and say 'He is...' or 'She is...' with their name.","Sinfdoshlaringizga ishora qilib, ismini aytib 'He is...' yoki 'She is...' deng.",
"In pairs, describe 3 people in the room using am/is/are.","Juftlikda xonadagi 3 kishini am/is/are yordamida tasvirlang."]
},

{d:7,w:2,wt:"Me & My Friends",wtUz:"Men va do'stlarim",
t:"This / That / These / Those",tu:"This / That / These / Those",
v:[
["this","bu (yaqin)","This is a table."],
["that","ana u (uzoq)","That is a chair."],
["these","bular (yaqin)","These are windows."],
["those","analar (uzoq)","Those are doors."],
["table","stol","This is a table."],
["chair","stul","That is a chair."],
["window","deraza","These are windows."],
["door","eshik","Those are doors."],
["shoe","poyabzal","This is my shoe."],
["shoes","poyabzallar","These are my shoes."]
],
dl:[
["Teacher","Is this a table?","Bu stolmi?"],
["Student","Yes, this is a table.","Ha, bu stol."],
["Teacher","Are those chairs?","Analar stullarmi?"],
["Student","Yes, those are chairs.","Ha, analar stullar."]
],
g:["This / That / These / Those",
"Use 'this' (near, one) and 'these' (near, many): This is a table. These are windows. Use 'that' (far, one) and 'those' (far, many): That is a chair. Those are doors.",
"This / That / These / Those",
"Yaqindagi bitta narsa uchun 'this', yaqindagi bir nechta narsa uchun 'these' ishlatiladi: This is a table. These are windows. Uzoqdagi bitta narsa uchun 'that', uzoqdagi bir nechta narsa uchun 'those' ishlatiladi: That is a chair. Those are doors."],
qz:[
["Choose the word for one thing near you.",["That","This","These","Those"],1],
["Choose the word for many things far away.",["This","That","These","Those"],3],
["Choose the correct sentence.",["This are my shoes.","These are my shoes.","This is my shoes.","These is my shoes."],1],
["'Ana u stul' in English is ___.",["This is a chair.","That is a chair.","These are chairs.","Those are chairs."],1]
],
sp:["Point to 3 things near you and 3 things far away, using this/that/these/those.","Yaqiningizdagi 3 ta va uzoqdagi 3 ta narsaga ishora qiling, this/that/these/those yordamida ayting."],
ls:["Classroom scavenger hunt: point and say 'This is a...' or 'That is a...' for objects.","Sinfda buyum qidirish: buyumlarga ishora qilib 'This is a...' yoki 'That is a...' deng.",
"In pairs, ask 'Is this a...?' and 'Are those...?' about classroom objects.","Juftlikda sinf buyumlari haqida 'Is this a...?' va 'Are those...?' deb so'rang."]
},

{d:8,w:2,wt:"Me & My Friends",wtUz:"Men va do'stlarim",
t:"There is / There are",tu:"There is / There are",
v:[
["there is","bor (birlik)","There is a lamp on the table."],
["there are","bor (ko'plik)","There are two windows."],
["room","xona","There is a nice room."],
["wall","devor","There is a picture on the wall."],
["picture","surat","There is a picture on the wall."],
["lamp","chiroq","There is a lamp on the desk."],
["shelf","tokcha","There is a shelf in my room."],
["two","ikki","There are two windows."],
["three","uch","There are three chairs."],
["four","to'rt","There are four books."]
],
dl:[
["Teacher","Is there a lamp in your room?","Xonangizda chiroq bormi?"],
["Student","Yes, there is a lamp.","Ha, chiroq bor."],
["Teacher","Are there any pictures?","Suratlar bormi?"],
["Student","Yes, there are two pictures.","Ha, ikkita surat bor."]
],
g:["There is / There are",
"Use 'There is' with one thing and 'There are' with more than one thing, to say something exists: There is a lamp on the table. There are two windows.",
"There is / There are",
"Bitta narsa bilan 'There is', bir nechta narsa bilan 'There are' ishlatiladi va biror narsaning mavjudligini bildiradi: There is a lamp on the table. There are two windows."],
qz:[
["Choose the correct sentence.",["There is two windows.","There are two windows.","There a window.","Windows there are."],1],
["Choose the correct question.",["Is there a lamp?","Is there lamps?","Are there a lamp?","There is a lamp?"],0],
["'Devorda surat bor' in English is ___.",["There is a picture on the wall.","There are a picture on the wall.","There a picture is on the wall.","Picture there is on the wall."],0],
["Which form goes with plural nouns?",["There is","There are","There has","There have"],1]
],
sp:["Describe your room: say what there is and how many things there are.","Xonangizni tasvirlab bering: nima borligi va nechtasi borligini ayting."],
ls:["Nature/room picture description: show a picture, students say what there is/are.","Rasm tasviri: rasm ko'rsating, o'quvchilar there is/are bilan gapirsin.",
"In pairs, describe your bedroom using 'There is/are'.","Juftlikda yotoqxonangizni 'There is/are' bilan tasvirlang."]
},

{d:9,w:2,wt:"Me & My Friends",wtUz:"Men va do'stlarim",
t:"Possessives — my, your, his, her",tu:"Egalik olmoshlari — my, your, his, her",
v:[
["my","mening","This is my mother."],
["your","sizning","This is your book."],
["his","uning (erkak)","This is his sister."],
["her","uning (ayol)","This is her brother."],
["our","bizning","This is our house."],
["their","ularning","This is their car."],
["mother","ona","This is my mother."],
["father","ota","This is my father."],
["sister","opa-singil","This is his sister."],
["brother","aka-uka","This is her brother."]
],
dl:[
["Malika","Is this your mother?","Bu sizning onangizmi?"],
["Aziz","Yes, this is my mother. And this is my father.","Ha, bu mening onam. Bu esa mening otam."],
["Malika","Who is this boy?","Bu bola kim?"],
["Aziz","This is his son.","Bu uning o'g'li."]
],
g:["Possessive Adjectives: my, your, his, her",
"Possessive adjectives go before a noun to show who owns it: my mother, your book, his sister, her brother. 'His' is for a male owner, 'her' is for a female owner.",
"Egalik olmoshlari: my, your, his, her",
"Egalik olmoshlari otdan oldin kelib, kimga tegishli ekanini bildiradi: my mother, your book, his sister, her brother. 'His' — erkak egasi uchun, 'her' — ayol egasi uchun."],
qz:[
["'Mening onam' in English is ___.",["Your mother","My mother","His mother","Her mother"],1],
["Choose the correct possessive for a boy's sister.",["Her sister","His sister","Their sister","Our sister"],1],
["Choose the correct possessive for a girl's brother.",["His brother","Her brother","Its brother","Your brother"],1],
["'Bizning uyimiz' in English is ___.",["Their house","Your house","Our house","Its house"],2]
],
sp:["Introduce your family using my/his/her: This is my mother, this is his/her...","Oilangizni my/his/her yordamida tanishtiring."],
ls:["Show a family photo (or draw one) and name 3 family members using 'my'.","Oila suratini ko'rsating va 'my' yordamida 3 ta oila a'zosini nomlang.",
"In pairs, point at each other's things and practice 'Is this your...?'","Juftlikda bir-biringizning narsalaringizga ishora qilib 'Is this your...?' deb mashq qiling."]
},

{d:10,w:2,wt:"Me & My Friends",wtUz:"Men va do'stlarim",rev:true,
t:"Week 2 Review",tu:"2-hafta Takrorlash",
qz:[
["Choose the correct word: 'She ___ a teacher.'",["am","is","are","be"],1],
["Choose the correct sentence.",["This are my shoes.","These are my shoes.","This is my shoes.","These is my shoes."],1],
["Choose the correct sentence.",["There is two windows.","There are two windows.","There a window.","Windows there are."],1],
["'Mening onam' in English is ___.",["Your mother","My mother","His mother","Her mother"],1],
["Choose the correct word: 'They ___ students.'",["am","is","are","be"],2],
["'Ana u stul' in English is ___.",["This is a chair.","That is a chair.","These are chairs.","Those are chairs."],1],
["Choose the correct question.",["Is there a lamp?","Is there lamps?","Are there a lamp?","There is a lamp?"],0],
["Choose the correct possessive for a boy's sister.",["Her sister","His sister","Their sister","Our sister"],1]
],
sp:["Describe yourself, your room, and your family using this week's grammar.","O'zingizni, xonangizni va oilangizni shu haftaning grammatikasi bilan tasvirlang."],
ls:["Class review game: teacher points at people/objects, students respond with the right pattern.","Sinf takrorlash o'yini: o'qituvchi odam/buyumlarga ishora qiladi, o'quvchilar to'g'ri qolip bilan javob beradi.",
"In pairs, review the week: describe people, objects, and your room.","Juftlikda haftani takrorlang: odamlar, buyumlar va xonangizni tasvirlang."]
}
,

{d:11,w:3,wt:"What I Can Do",wtUz:"Men nima qila olaman",
t:"Can — Ability",tu:"Can — qobiliyat",
v:[
["can","qila oladi","I can swim."],
["can't","qila olmaydi","I can't sing."],
["swim","suzmoq","I can swim."],
["sing","qo'shiq aytmoq","I can sing."],
["dance","raqsga tushmoq","I can dance."],
["draw","rasm chizmoq","I can draw."],
["jump","sakramoq","I can jump."],
["run","yugurmoq","I can run fast."],
["cook","ovqat pishirmoq","My mother can cook."],
["ride a bike","velosiped haydamoq","I can ride a bike."]
],
dl:[
["Malika","Can you swim?","Suza olasizmi?"],
["Aziz","Yes, I can swim. Can you sing?","Ha, men suza olaman. Siz qo'shiq ayta olasizmi?"],
["Malika","No, I can't sing, but I can dance.","Yo'q, men qo'shiq ayta olmayman, lekin raqsga tusha olaman."]
],
g:["Can — Ability",
"'Can' shows something you know how to do: I can swim. She can sing. The negative is 'can't': He can't fly. 'Can' never changes form, no matter who the subject is.",
"Can — qobiliyat",
"'Can' nimani qila olishingizni bildiradi: I can swim. She can sing. Inkor shakli 'can't': He can't fly. 'Can' ega kim bo'lishidan qat'i nazar hech qachon shaklini o'zgartirmaydi."],
qz:[
["Choose the correct sentence.",["She can sings.","She can sing.","She cans sing.","She can singing."],1],
["'Suza olaman' in English is ___.",["I can swims.","I can swim.","I cans swim.","I am can swim."],1],
["Choose the correct negative.",["He not can fly.","He can't fly.","He don't can fly.","He cann't fly."],1],
["What can your mother do? Choose the correct word for cooking.",["She can cook.","She can cooks.","She cans cook.","She can cooking."],0]
],
sp:["Say 3 things you can do and 1 thing you can't do yet.","Qila oladigan 3 ta ishingizni va hali qila olmaydigan 1 ta ishingizni ayting."],
ls:["'Can you...?' mingle: ask classmates what they can do.","'Can you...?' aralashuvi: sinfdoshlaringizdan nima qila olishlarini so'rang.",
"In pairs, find 2 things you can both do.","Juftlikda ikkalangiz ham qila oladigan 2 ta ishni toping."]
},

{d:12,w:3,wt:"What I Can Do",wtUz:"Men nima qila olaman",
t:"Have / Has — Pets",tu:"Have / Has — uy hayvonlari",
v:[
["have","bor (I/you/we/they)","I have a dog."],
["has","bor (he/she/it)","She has a cat."],
["don't have","yo'q (I/you/we/they)","I don't have a pet."],
["doesn't have","yo'q (he/she/it)","He doesn't have a bike."],
["pet","uy hayvoni","This is my pet."],
["dog","it","I have a dog."],
["cat","mushuk","She has a cat."],
["fish","baliq","He has a fish."],
["bird","qush","They have a bird."],
["rabbit","quyon","We have a rabbit."]
],
dl:[
["Teacher","Do you have a pet?","Uy hayvoningiz bormi?"],
["Student","Yes, I have a dog. Does she have a pet?","Ha, mening itim bor. Uning uy hayvoni bormi?"],
["Teacher","Yes, she has a cat.","Ha, uning mushugi bor."]
],
g:["Have / Has",
"Use 'have' with I/you/we/they and 'has' with he/she/it: I have a dog. She has a cat. Negative: don't have / doesn't have.",
"Have / Has",
"I/you/we/they bilan 'have', he/she/it bilan 'has' ishlatiladi: I have a dog. She has a cat. Inkor: don't have / doesn't have."],
qz:[
["Choose the correct word: 'She ___ a cat.'",["have","has","having","haves"],1],
["Choose the correct word: 'I ___ a dog.'",["has","have","having","haves"],1],
["Choose the correct negative: 'He ___ a pen.'",["don't have","doesn't have","not have","haven't has"],1],
["Choose the correct question.",["Does you have a sister?","Do you have a sister?","Have you a sister do?","You have a sister?"],1]
],
sp:["Say if you have a pet, and describe your friend's pet using 'has'.","Uy hayvoningiz bor-yo'qligini ayting va do'stingizning uy hayvonini 'has' bilan tasvirlang."],
ls:["Class survey: ask 'Do you have a pet?' and count the answers.","Sinf so'rovi: 'Uy hayvoningiz bormi?' deb so'rang va javoblarni sanang.",
"In pairs, ask about each other's pets.","Juftlikda bir-biringizning uy hayvonlaringiz haqida so'rang."]
},

{d:13,w:3,wt:"What I Can Do",wtUz:"Men nima qila olaman",
t:"The Imperative — Commands",tu:"Buyruq gap",
v:[
["open","ochmoq","Open the door."],
["close","yopmoq","Close the window."],
["come here","bu yerga kel","Come here, please."],
["stand up","o'rningdan tur","Stand up, please."],
["sit down","o'tir","Sit down, everyone."],
["take","olmoq","Take your book."],
["give","bermoq","Give me the pen."],
["put","qo'ymoq","Put the book on the desk."],
["write","yozmoq","Write your name here."],
["don't run","yugurma","Don't run in the classroom."]
],
dl:[
["Teacher","Open your books, please.","Kitoblaringizni oching, iltimos."],
["Student","OK. What page?","Xo'p. Qaysi bet?"],
["Teacher","Page ten. Don't talk, please. Listen.","O'ninchi bet. Gaplashmang, iltimos. Tinglang."]
],
g:["The Imperative",
"To give an instruction, use the plain verb with no subject: Open the door. Sit down. For a negative instruction, add 'Don't': Don't run. Don't talk.",
"Buyruq gap",
"Ko'rsatma berish uchun fe'lning oddiy shakli, egasiz ishlatiladi: Open the door. Sit down. Salbiy ko'rsatma uchun 'Don't' qo'shiladi: Don't run. Don't talk."],
qz:[
["Choose the correct imperative.",["You open the door.","Open the door.","You opening the door.","Opens the door."],1],
["Choose the correct negative imperative.",["You don't run.","Don't run.","No run.","Not run."],1],
["'O'tir' in English is ___.",["Stand up","Sit down","Come here","Open"],1],
["Which sentence is an imperative?",["She opens the door.","Open the door.","She is opening the door.","Did she open the door?"],1]
],
sp:["Give your partner 3 commands (e.g. 'Stand up', 'Open your book').","Sherigingizga 3 ta buyruq bering."],
ls:["Play 'Simon Says' using commands from this unit.","Bu bo'limdagi buyruqlar bilan 'Simon Says' o'yinini o'ynang.",
"In pairs, one gives 5 commands, the other performs them.","Juftlikda bir kishi 5 ta buyruq beradi, ikkinchisi bajaradi."]
},

{d:14,w:3,wt:"What I Can Do",wtUz:"Men nima qila olaman",
t:"Plural Nouns",tu:"Ko'plik otlar",
v:[
["box","quti","This is a box."],
["boxes","qutilar","These are boxes."],
["baby","chaqaloq","This is a baby."],
["babies","chaqaloqlar","These are babies."],
["child","bola","This is a child."],
["children","bolalar","These are children."],
["man","erkak","This is a man."],
["men","erkaklar","These are men."],
["woman","ayol","This is a woman."],
["women","ayollar","These are women."]
],
dl:[
["Teacher","How many children are there?","Nechta bola bor?"],
["Student","There are three children.","Uchta bola bor."],
["Teacher","Good! And how many boxes?","Yaxshi! Va nechta quti?"],
["Student","There are two boxes.","Ikkita quti bor."]
],
g:["Plural Nouns",
"Most nouns just add -s: box → boxes. Some words are irregular and change completely: child → children, man → men, woman → women. There is no shortcut — you memorize these through practice.",
"Ko'plik otlar",
"Ko'pchilik otlarga shunchaki -s qo'shiladi: box → boxes. Ba'zi so'zlar butunlay istisno: child → children, man → men, woman → women. Bu yerda yo'l yo'q — bularni mashq orqali yodlash kerak."],
qz:[
["What is the plural of 'box'?",["Boxs","Boxes","Box's","Boxies"],1],
["What is the plural of 'child'?",["Childs","Childes","Children","Childies"],2],
["What is the plural of 'man'?",["Mans","Men","Manes","Mens"],1],
["What is the plural of 'woman'?",["Womans","Women","Woman's","Womenes"],1]
],
sp:["Count children, men, and women in a picture (or around you) using the correct plural.","Rasmda (yoki atrofingizda) bola, erkak va ayollarni to'g'ri ko'plik bilan sanang."],
ls:["Plural bingo: teacher says a singular word, students shout the plural.","Ko'plik bingo: o'qituvchi birlik so'zni aytadi, o'quvchilar ko'plikni qichqiradi.",
"In pairs, quiz each other on singular/plural pairs from this unit.","Juftlikda bu bo'limdagi birlik/ko'plik juftliklarini bir-biringizga so'rang."]
},

{d:15,w:3,wt:"What I Can Do",wtUz:"Men nima qila olaman",rev:true,
t:"Week 3 Review",tu:"3-hafta Takrorlash",
qz:[
["Choose the correct sentence.",["She can sings.","She can sing.","She cans sing.","She can singing."],1],
["Choose the correct word: 'She ___ a cat.'",["have","has","having","haves"],1],
["Choose the correct imperative.",["You open the door.","Open the door.","You opening the door.","Opens the door."],1],
["What is the plural of 'child'?",["Childs","Childes","Children","Childies"],2],
["Choose the correct negative.",["He not can fly.","He can't fly.","He don't can fly.","He cann't fly."],1],
["Choose the correct question.",["Does you have a sister?","Do you have a sister?","Have you a sister do?","You have a sister?"],1],
["Choose the correct negative imperative.",["You don't run.","Don't run.","No run.","Not run."],1],
["What is the plural of 'man'?",["Mans","Men","Manes","Mens"],1]
],
sp:["Talk about what you can do, your pet, and give 2 classroom commands.","Nima qila olishingiz, uy hayvoningiz haqida gapiring va 2 ta sinf buyrug'ini bering."],
ls:["Class review relay: can, have, imperatives, plurals mixed quiz.","Sinf takrorlash estafetasi: can, have, buyruq va ko'plik aralash so'rovi.",
"In pairs, review the week using can/have/imperatives/plurals.","Juftlikda haftani can/have/buyruq/ko'plik bilan takrorlang."]
}
,

{d:16,w:4,wt:"My Daily Routine",wtUz:"Mening kundalik hayotim",
t:"Present Simple — Everyday Actions",tu:"Present Simple — kundalik harakatlar",
v:[
["go","bormoq","I go to school every day."],
["eat","yemoq","I eat breakfast every morning."],
["drink","ichmoq","I drink milk every day."],
["play","o'ynamoq","I play football every day."],
["study","o'qimoq","I study English every day."],
["work","ishlamoq","My father works every day."],
["live","yashamoq","I live in Tashkent."],
["like","yoqtirmoq","I like English."],
["every day","har kuni","I study every day."],
["always","doim","I always brush my teeth."]
],
dl:[
["Teacher","What do you do every day?","Har kuni nima qilasiz?"],
["Student","I go to school and I study English.","Men maktabga boraman va ingliz tilini o'qiyman."],
["Teacher","Do you like English?","Ingliz tilini yoqtirasizmi?"],
["Student","Yes, I always like my English class.","Ha, men doim ingliz tili darsimni yoqtiraman."]
],
g:["Present Simple — I / you / we / they",
"Use the present simple with I/you/we/they for routines and things you do regularly: I go to school every day. I study English. Add 'always', 'usually', 'sometimes' to say how often.",
"Present Simple — I / you / we / they",
"I/you/we/they bilan muntazam qiladigan ishlar haqida gapirish uchun present simple ishlatiladi: I go to school every day. I study English. Qanchalik tez-tez ekanini bildirish uchun 'always', 'usually', 'sometimes' qo'shiladi."],
qz:[
["Choose the correct sentence.",["I goes to school.","I go to school.","I going to school.","I am go to school."],1],
["'Har kuni' in English is ___.",["Sometimes","Always","Every day","Never"],2],
["Choose the correct sentence.",["I studies English.","I study English.","I am study English.","I studying English."],1],
["'Yoqtirmoq' in English is ___.",["Live","Work","Like","Play"],2]
],
sp:["Talk about 3 things you do every day.","Har kuni qiladigan 3 ta ishingiz haqida gapiring."],
ls:["Class chain: each student says one thing they do every day.","Sinf zanjiri: har bir o'quvchi har kuni qiladigan bitta ishini aytadi.",
"In pairs, ask 'What do you do every day?' and compare answers.","Juftlikda 'Har kuni nima qilasiz?' deb so'rang va javoblarni solishtiring."]
},

{d:17,w:4,wt:"My Daily Routine",wtUz:"Mening kundalik hayotim",
t:"Present Simple — He / She (-s)",tu:"Present Simple — He / She (-s)",
v:[
["goes","boradi","She goes to school."],
["eats","yeydi","He eats breakfast."],
["drinks","ichadi","She drinks tea."],
["plays","o'ynaydi","He plays football."],
["studies","o'qiydi","She studies English."],
["works","ishlaydi","My father works every day."],
["lives","yashaydi","She lives in Samarkand."],
["likes","yoqtiradi","He likes music."],
["watches","tomosha qiladi","She watches TV."],
["reads","o'qiydi (kitob)","He reads books."]
],
dl:[
["Malika","What does your brother do every day?","Akangiz har kuni nima qiladi?"],
["Aziz","He goes to school and he plays football.","U maktabga boradi va futbol o'ynaydi."],
["Malika","Does he like football?","U futbolni yoqtiradimi?"],
["Aziz","Yes, he likes football very much.","Ha, u futbolni juda yoqtiradi."]
],
g:["Present Simple: Adding -s with He / She / It",
"With he/she/it, add -s to the verb: go → goes, like → likes. Words ending in -y after a consonant change to -ies: study → studies. This -s is easy to forget, but it's essential.",
"Present Simple: He / She / It bilan -s qo'shish",
"He/she/it bilan fe'lga -s qo'shiladi: go → goes, like → likes. Undosh + y bilan tugagan so'zlarda -ies bo'ladi: study → studies. Bu -s ni unutish oson, lekin u juda muhim."],
qz:[
["Choose the correct sentence.",["He go to school.","He goes to school.","He going to school.","He gos to school."],1],
["'Study' with 'she' becomes ___.",["Studys","Studies","Studying","Studyes"],1],
["Choose the correct sentence.",["She like music.","She likes music.","She liking music.","She is like music."],1],
["Choose the correct sentence.",["He read books.","He reads books.","He reading books.","He is reads books."],1]
],
sp:["Talk about what your mother or father does every day.","Onangiz yoki otangiz har kuni nima qilishi haqida gapiring."],
ls:["Class chain: each student says what a family member does, using he/she + -s.","Sinf zanjiri: har bir o'quvchi oila a'zosi nima qilishi haqida he/she + -s bilan aytadi.",
"In pairs, ask about each other's best friend's daily routine.","Juftlikda bir-biringizning eng yaqin do'stingizning kundalik hayoti haqida so'rang."]
},

{d:18,w:4,wt:"My Daily Routine",wtUz:"Mening kundalik hayotim",
t:"Present Continuous — Right Now",tu:"Present Continuous — hozir",
v:[
["reading","o'qiyapti","She is reading a book."],
["writing","yozyapti","He is writing a letter."],
["playing","o'ynayapti","They are playing football."],
["eating","yeyapti","I am eating lunch."],
["drinking","ichyapti","She is drinking tea."],
["sleeping","uxlayapti","The baby is sleeping."],
["running","yugurayapti","He is running fast."],
["watching","tomosha qilyapti","We are watching TV."],
["now","hozir","What are you doing now?"],
["right now","aynan hozir","I am studying right now."]
],
dl:[
["Malika","What are you doing right now?","Hozir nima qilyapsiz?"],
["Aziz","I am reading a book. What about you?","Men kitob o'qiyapman. Sizchi?"],
["Malika","I am watching TV with my sister.","Men opam bilan televizor tomosha qilyapman."]
],
g:["Present Continuous: Actions Happening Now",
"Use 'am/is/are + verb-ing' for something happening right now: I am reading. She is playing. Most verbs just add -ing (play → playing); verbs ending in -e drop it (write → writing).",
"Present Continuous: hozir sodir bo'layotgan harakatlar",
"Hozir sodir bo'layotgan narsa uchun 'am/is/are + fe'l-ing' ishlatiladi: I am reading. She is playing. Ko'pchilik fe'llarga -ing qo'shiladi (play → playing); -e bilan tugaganlarda -e tushadi (write → writing)."],
qz:[
["Choose the correct sentence about now.",["I read a book now.","I am reading a book now.","I reading a book now.","I reads a book now."],1],
["What is the -ing form of 'write'?",["Writeing","Writting","Writing","Wrieing"],2],
["Choose the correct question.",["What you are doing?","What are you doing?","What doing you are?","Are you what doing?"],1],
["Choose the correct sentence.",["They play football now.","They are playing football now.","They playing football now.","They is playing football now."],1]
],
sp:["Look around and describe 3 things happening right now.","Atrofingizga qarang va hozir sodir bo'layotgan 3 ta ishni tasvirlang."],
ls:["Freeze game: act, teacher says 'Freeze!' and asks 'What are you doing?'","Muzlash o'yini: harakat qiling, o'qituvchi 'Freeze!' deydi va 'Nima qilyapsiz?' deb so'raydi.",
"In pairs, mime an action, partner guesses using 'Are you...ing?'","Juftlikda harakatni ijro eting, sherigingiz 'Are you...ing?' deb topsin."]
},

{d:19,w:4,wt:"My Daily Routine",wtUz:"Mening kundalik hayotim",
t:"Present Simple vs Present Continuous",tu:"Present Simple va Present Continuous farqi",
v:[
["usually","odatda","I usually walk to school."],
["sometimes","ba'zan","I sometimes watch TV."],
["never","hech qachon","I never eat late at night."],
["at the moment","hozirgi paytda","I am busy at the moment."],
["today","bugun","Today I am wearing a red shirt."],
["every week","har hafta","We play football every week."],
["this week","shu hafta","This week I am studying hard."],
["usually...but now","odatda...lekin hozir","I usually walk, but now I am running."]
],
dl:[
["Teacher","Do you usually walk to school?","Odatda maktabga piyoda borasizmi?"],
["Student","Yes, but today I am going by bus.","Ha, lekin bugun avtobusda boryapman."],
["Teacher","Why?","Nega?"],
["Student","Because it's raining now.","Chunki hozir yomg'ir yog'yapti."]
],
g:["Present Simple vs Present Continuous",
"Present simple is for routines and general facts: I usually walk to school. Present continuous is for right now: But today, I am going by bus. Don't mix them up — 'usually/always' go with present simple, 'now/at the moment' go with present continuous.",
"Present Simple va Present Continuous farqi",
"Present simple odat va umumiy faktlar uchun: I usually walk to school. Present continuous hozirgi payt uchun: But today, I am going by bus. Ularni aralashtirmang — 'usually/always' present simple bilan, 'now/at the moment' present continuous bilan keladi."],
qz:[
["Choose the correct sentence for a routine.",["I am usually walking to school.","I usually walk to school.","I usually walking to school.","I usually walks to school."],1],
["Choose the correct sentence for right now.",["I go by bus today.","I am going by bus today.","I am go by bus today.","I going by bus today."],1],
["Which word goes with present continuous?",["Usually","Always","Now","Every day"],2],
["Which word goes with present simple?",["Now","At the moment","Right now","Usually"],3]
],
sp:["Say something you usually do, and something different you are doing today.","Odatda qiladigan ishingizni va bugun qilayotgan boshqacha ishingizni ayting."],
ls:["Class contrast game: teacher says 'usually' or 'now', students say a matching sentence.","Sinf farq o'yini: o'qituvchi 'usually' yoki 'now' deydi, o'quvchilar mos gap aytadi.",
"In pairs, compare your usual routine with what's different today.","Juftlikda odatiy tartibingizni bugungi farqi bilan solishtiring."]
},

{d:20,w:4,wt:"My Daily Routine",wtUz:"Mening kundalik hayotim",rev:true,
t:"Week 4 Review",tu:"4-hafta Takrorlash",
qz:[
["Choose the correct sentence.",["I goes to school.","I go to school.","I going to school.","I am go to school."],1],
["'Study' with 'she' becomes ___.",["Studys","Studies","Studying","Studyes"],1],
["Choose the correct sentence about now.",["I read a book now.","I am reading a book now.","I reading a book now.","I reads a book now."],1],
["Choose the correct sentence for a routine.",["I am usually walking to school.","I usually walk to school.","I usually walking to school.","I usually walks to school."],1],
["What is the -ing form of 'write'?",["Writeing","Writting","Writing","Wrieing"],2],
["Choose the correct sentence.",["He read books.","He reads books.","He reading books.","He is reads books."],1],
["Which word goes with present continuous?",["Usually","Always","Now","Every day"],2],
["'Har kuni' in English is ___.",["Sometimes","Always","Every day","Never"],2]
],
sp:["Describe your daily routine, then say what you are doing right now.","Kundalik tartibingizni tasvirlang, so'ng hozir nima qilayotganingizni ayting."],
ls:["Class review relay: present simple vs continuous mixed quiz.","Sinf takrorlash estafetasi: present simple va continuous aralash so'rovi.",
"In pairs, review the week using routines and right-now actions.","Juftlikda haftani odatlar va hozirgi harakatlar bilan takrorlang."]
}
,

{d:21,w:5,wt:"Where Is It?",wtUz:"U qayerda?",
t:"Prepositions of Place",tu:"O'rin predloglari",
v:[
["in","ichida","The cat is in the box."],
["on","ustida","The book is on the table."],
["under","ostida","The shoes are under the bed."],
["behind","orqasida","The bag is behind the door."],
["between","orasida","The pen is between the books."],
["next to","yonida","The lamp is next to the bed."],
["box","quti","The cat is in the box."],
["table","stol","The book is on the table."],
["bed","karavot","The shoes are under the bed."],
["door","eshik","The bag is behind the door."]
],
dl:[
["Teacher","Where is the cat?","Mushuk qayerda?"],
["Student","The cat is under the table.","Mushuk stol ostida."],
["Teacher","Is the book on the table?","Kitob stol ustidami?"],
["Student","Yes, it's on the table.","Ha, u stol ustida."]
],
g:["Prepositions of Place: in, on, under, next to",
"'In' = inside ('in the box'). 'On' = on a surface ('on the table'). 'Under' = below ('under the bed'). 'Behind' = at the back. 'Between' = in the middle of two things. 'Next to' = beside.",
"O'rin predloglari: in, on, under, next to",
"'In' — ichida ('in the box'). 'On' — ustida ('on the table'). 'Under' — ostida ('under the bed'). 'Behind' — orqasida. 'Between' — ikkitasining orasida. 'Next to' — yonida."],
qz:[
["Choose the correct preposition: 'The book is ___ the table.'",["in","on","under","next to"],1],
["Choose the correct preposition: 'The cat is ___ the box.'",["on","in","under","between"],1],
["Choose the correct preposition: 'The shoes are ___ the bed.'",["on","in","under","next to"],2],
["Which preposition means 'yonida'?",["In","On","Under","Next to"],3]
],
sp:["Describe where 5 things are in your room using in/on/under/next to.","Xonangizdagi 5 ta narsaning qayerda ekanini in/on/under/next to yordamida tasvirlang."],
ls:["Classroom scavenger hunt: find objects and describe their location.","Sinfda buyum qidirish: buyumlarni topib joylashuvini tasvirlang.",
"In pairs, hide an object and give clues using prepositions.","Juftlikda buyumni yashiring va predloglar yordamida maslahat bering."]
},

{d:22,w:5,wt:"Where Is It?",wtUz:"U qayerda?",
t:"Prepositions of Time",tu:"Vaqt predloglari",
v:[
["at","-da (aniq vaqt)","I wake up at seven o'clock."],
["on","-da (kun)","I have class on Monday."],
["in","-da (oy/yil)","My birthday is in May."],
["seven o'clock","soat yetti","I wake up at seven o'clock."],
["Monday","dushanba","I have class on Monday."],
["May","may","My birthday is in May."],
["morning","ertalab","I study in the morning."],
["night","tun","I sleep at night."],
["today","bugun","I have a test today."],
["tomorrow","ertaga","I will see you tomorrow."]
],
dl:[
["Malika","What time do you wake up?","Soat nechada uyg'onasiz?"],
["Aziz","I wake up at seven o'clock. When is your birthday?","Men soat yettida uyg'onaman. Tug'ilgan kuningiz qachon?"],
["Malika","My birthday is in May.","Tug'ilgan kunim mayda."]
],
g:["Prepositions of Time: at, on, in",
"Use 'at' with clock times: at seven o'clock. Use 'on' with days: on Monday. Use 'in' with months and years: in May, in 2026.",
"Vaqt predloglari: at, on, in",
"'At' aniq soat bilan ishlatiladi: at seven o'clock. 'On' kunlar bilan ishlatiladi: on Monday. 'In' oy va yillar bilan ishlatiladi: in May, in 2026."],
qz:[
["Choose the correct word: 'I wake up ___ seven o'clock.'",["on","in","at","for"],2],
["Choose the correct word: 'I have class ___ Monday.'",["in","on","at","for"],1],
["Choose the correct word: 'My birthday is ___ May.'",["on","in","at","for"],1],
["Which preposition goes with a clock time?",["at","on","in","for"],0]
],
sp:["Say what time you wake up, and what day you have your favorite class.","Soat nechada uyg'onishingizni va sevimli faningiz qaysi kun ekanini ayting."],
ls:["Class calendar check: ask 'What day is it?' and 'What time is it?'","Sinf kalendar tekshiruvi: 'Bugun qaysi kun?' va 'Soat necha?' deb so'rang.",
"In pairs, ask each other's birthday month and favorite class day.","Juftlikda bir-biringizning tug'ilgan oyingiz va sevimli dars kuningizni so'rang."]
},

{d:23,w:5,wt:"Where Is It?",wtUz:"U qayerda?",
t:"Question Words",tu:"Savol so'zlari",
v:[
["who","kim","Who is your teacher?"],
["what","nima","What is your name?"],
["where","qayerda","Where do you live?"],
["when","qachon","When is your birthday?"],
["why","nega","Why are you late?"],
["how","qanday","How are you?"],
["whose","kimning","Whose book is this?"],
["question","savol","I have a question."]
],
dl:[
["Teacher","Who is your best friend?","Eng yaqin do'stingiz kim?"],
["Student","My best friend is Malika.","Eng yaqin do'stim Malika."],
["Teacher","Where does she live?","U qayerda yashaydi?"],
["Student","She lives near my house.","U mening uyim yaqinida yashaydi."]
],
g:["Question Words",
"Question words start the question: Who (person), What (thing), Where (place), When (time), Why (reason), How (manner). They always come first: Where do you live?",
"Savol so'zlari",
"Savol so'zlari savolni boshlaydi: Who (kim), What (nima), Where (qayerda), When (qachon), Why (nega), How (qanday). Ular doim birinchi o'rinda keladi: Where do you live?"],
qz:[
["Choose the correct question word for a person.",["What","Where","Who","When"],2],
["Choose the correct question word for a place.",["Who","What","Where","When"],2],
["Choose the correct question word for a reason.",["How","Why","Which","Whose"],1],
["'Bu kimning kitobi?' in English is ___.",["Who book is this?","Whose book is this?","What book is this?","Where book is this?"],1]
],
sp:["Ask your partner 4 different questions using who/what/where/when.","Sherigingizga who/what/where/when yordamida 4 xil savol bering."],
ls:["Question chain: each student asks a question to the next student.","Savol zanjiri: har bir o'quvchi keyingisiga savol beradi.",
"In pairs, interview each other with at least 4 different question words.","Juftlikda kamida 4 xil savol so'zi bilan bir-biringizni intervyu qiling."]
},

{d:24,w:5,wt:"Where Is It?",wtUz:"U qayerda?",
t:"How Much / How Many",tu:"How Much / How Many",
v:[
["how much","qancha (sanalmaydigan)","How much water do you drink?"],
["how many","nechta (sanaladigan)","How many books do you have?"],
["money","pul","How much money do you have?"],
["water","suv","How much water do you drink?"],
["books","kitoblar","How many books do you have?"],
["apples","olmalar","How many apples do you want?"],
["a lot of","ko'p","I have a lot of books."],
["not much","ko'p emas","I don't have much money."]
],
dl:[
["Malika","How many books do you have?","Sizda nechta kitob bor?"],
["Aziz","I have a lot of books. How much money do you have?","Menda ko'p kitob bor. Sizda qancha pul bor?"],
["Malika","I don't have much money today.","Bugun menda ko'p pul yo'q."]
],
g:["How Much / How Many",
"Use 'How much' with things we can't count (money, water): How much money do you have? Use 'How many' with things we can count: How many books do you have?",
"How Much / How Many",
"Sanalmaydigan narsalar (pul, suv) bilan 'How much' ishlatiladi: How much money do you have? Sanaladigan narsalar bilan 'How many' ishlatiladi: How many books do you have?"],
qz:[
["Choose the correct word: '___ money do you have?'",["How much","How many","How","What"],0],
["Choose the correct word: '___ books do you have?'",["How much","How many","How","What"],1],
["'Ko'p kitobim bor' in English is ___.",["I have a lot of books.","I have much books.","I have many of books.","I have a lot books."],0],
["Which word goes with uncountable things like water?",["Many","Much","Few","A"],1]
],
sp:["Ask your partner how much money and how many books they have.","Sherigingizdan qancha puli va nechta kitobi borligini so'rang."],
ls:["Class survey: ask 'How many pens do you have?' and total the class results.","Sinf so'rovi: 'Nechta ruchkangiz bor?' deb so'rang va sinf natijasini yig'ing.",
"In pairs, practice how much/how many with school supplies.","Juftlikda maktab buyumlari bilan how much/how many mashq qiling."]
},

{d:25,w:5,wt:"Where Is It?",wtUz:"U qayerda?",rev:true,
t:"Week 5 Review",tu:"5-hafta Takrorlash",
qz:[
["Choose the correct preposition: 'The book is ___ the table.'",["in","on","under","next to"],1],
["Choose the correct word: 'I wake up ___ seven o'clock.'",["on","in","at","for"],2],
["Choose the correct question word for a person.",["What","Where","Who","When"],2],
["Choose the correct word: '___ books do you have?'",["How much","How many","How","What"],1],
["Choose the correct word: 'I have class ___ Monday.'",["in","on","at","for"],1],
["'Bu kimning kitobi?' in English is ___.",["Who book is this?","Whose book is this?","What book is this?","Where book is this?"],1],
["Which preposition means 'yonida'?",["In","On","Under","Next to"],3],
["'Ko'p kitobim bor' in English is ___.",["I have a lot of books.","I have much books.","I have many of books.","I have a lot books."],0]
],
sp:["Describe your room, your daily schedule, and answer 3 questions from a friend.","Xonangizni, kundalik jadvalingizni tasvirlang va do'stingizning 3 ta savoliga javob bering."],
ls:["Class review relay: prepositions, time, and question words mixed quiz.","Sinf takrorlash estafetasi: predloglar, vaqt va savol so'zlari aralash so'rovi.",
"In pairs, review the week with a mini interview.","Juftlikda haftani kichik intervyu bilan takrorlang."]
}
,

{d:26,w:6,wt:"Food & Things",wtUz:"Ovqat va narsalar",
t:"Some / Any",tu:"Some / Any",
v:[
["some","biroz","I have some bread."],
["any","hech qanday","I don't have any milk."],
["bread","non","I have some bread."],
["milk","sut","I don't have any milk."],
["apples","olmalar","I have some apples."],
["pens","ruchkalar","Do you have any pens?"],
["water","suv","I want some water."],
["tea","choy","Would you like some tea?"]
],
dl:[
["Teacher","Do you have any pens?","Ruchkangiz bormi?"],
["Student","Yes, I have some pens. Would you like some tea?","Ha, menda bir nechta ruchka bor. Choy ichasizmi?"],
["Teacher","Yes, please. Thank you.","Ha, iltimos. Rahmat."]
],
g:["Some and Any",
"Use 'some' in positive sentences and offers: I have some bread. Would you like some tea? Use 'any' in negatives and questions: I don't have any milk. Do you have any pens?",
"Some va Any",
"'Some' tasdiq gaplar va takliflarda ishlatiladi: I have some bread. Would you like some tea? 'Any' inkor va so'roq gaplarda ishlatiladi: I don't have any milk. Do you have any pens?"],
qz:[
["Choose the correct word: 'I don't have ___ milk.'",["some","any","a","the"],1],
["Choose the correct word: 'Would you like ___ tea?'",["some","any","much","many"],0],
["Choose the correct sentence.",["I have any apples.","I have some apples.","I have a apples.","I have the any apples."],1],
["When do we usually use 'any'?",["Positive sentences","Negatives and questions","Only with people","Never"],1]
],
sp:["Say what food you have some of, and ask a friend if they have any.","Qanday ovqatingiz borligini ayting va do'stingizdan uning bor-yo'qligini so'rang."],
ls:["Class 'offer' game: offer classmates 'Would you like some...?' with different foods.","Sinf 'taklif' o'yini: sinfdoshlaringizga turli ovqatlar bilan 'Would you like some...?' deb taklif qiling.",
"In pairs, ask 'Do you have any...?' about school supplies.","Juftlikda maktab buyumlari haqida 'Do you have any...?' deb so'rang."]
},

{d:27,w:6,wt:"Food & Things",wtUz:"Ovqat va narsalar",
t:"Like / Want + -ing / to",tu:"Like / Want + -ing / to",
v:[
["like","yoqtirmoq","I like swimming."],
["love","juda yoqtirmoq","She loves dancing."],
["hate","yomon ko'rmoq","He hates cleaning."],
["want","xohlamoq","I want to play."],
["swimming","suzish","I like swimming."],
["dancing","raqsga tushish","She loves dancing."],
["cleaning","tozalash","He hates cleaning."],
["to play","o'ynashni","I want to play football."]
],
dl:[
["Malika","Do you like swimming?","Suzishni yoqtirasizmi?"],
["Aziz","Yes, I love swimming. I want to swim today.","Ha, men suzishni juda yoqtiraman. Bugun suzgim keladi."],
["Malika","I hate cleaning, but I want to help my mother.","Men tozalashni yomon ko'raman, lekin onamga yordam bergim keladi."]
],
g:["Like/Love/Hate + -ing, Want + to",
"After 'like', 'love', 'hate', use a verb + -ing: I like swimming. After 'want', use 'to' + the plain verb: I want to play.",
"Like/Love/Hate + -ing, Want + to",
"'Like', 'love', 'hate' dan keyin fe'l + ing ishlatiladi: I like swimming. 'Want' dan keyin 'to' + fe'lning oddiy shakli ishlatiladi: I want to play."],
qz:[
["Choose the correct sentence.",["I like to swim always.","I like swimming.","I like swims.","I liking swim."],1],
["Choose the correct sentence.",["I want playing football.","I want to play football.","I want play football.","I wants to play football."],1],
["'Raqsga tushishni yaxshi ko'radi' in English is ___.",["She loves dance.","She loves dancing.","She love dancing.","She loving dance."],1],
["What follows 'want'?",["to + verb","verb + ing","plain verb","verb + s"],0]
],
sp:["Say 2 things you like doing and 1 thing you want to do this weekend.","Yoqtiradigan 2 ta ishingizni va bu dam olish kunlari qilishni xohlagan 1 ta ishingizni ayting."],
ls:["Class survey: ask 'Do you like...?' about hobbies.","Sinf so'rovi: hobbilar haqida 'Do you like...?' deb so'rang.",
"In pairs, share things you like, love, and hate.","Juftlikda yoqtiradigan, juda yoqtiradigan va yomon ko'radigan narsalaringizni ayting."]
},

{d:28,w:6,wt:"Food & Things",wtUz:"Ovqat va narsalar",
t:"Articles — a/an, the, or nothing",tu:"Artikllar — a/an, the yoki hech narsa",
v:[
["the","(ma'lum narsa)","I have a book. The book is red."],
["Uzbekistan","O'zbekiston","I live in Uzbekistan."],
["music","musiqa","I like music."],
["name","ism","My name is Aziz."],
["close the door","eshikni yop","Close the door, please."],
["open the window","derazani och","Open the window, please."]
],
dl:[
["Teacher","Close the door, please.","Eshikni yoping, iltimos."],
["Student","OK. I live in Uzbekistan. Do you like music?","Xo'p. Men O'zbekistonda yashayman. Musiqani yoqtirasizmi?"],
["Teacher","Yes, I love music.","Ha, men musiqani juda yoqtiraman."]
],
g:["Articles: a/an, the, or nothing",
"Use 'a/an' for something new. Use 'the' when both people know exactly which one: I have a book. The book is red. Use no article with names, most countries, and general ideas: I live in Uzbekistan. I like music.",
"Artikllar: a/an, the yoki hech narsa",
"Yangi narsa uchun 'a/an' ishlatiladi. Ikkala tomon ham aynan qaysi narsani bilganda 'the' ishlatiladi: I have a book. The book is red. Ism, ko'pchilik davlat va umumiy tushunchalar bilan artikl ishlatilmaydi: I live in Uzbekistan. I like music."],
qz:[
["Choose the correct article: 'I have a book. ___ book is red.'",["A","An","The","No article"],2],
["Choose the correct article: 'I live in ___ Uzbekistan.'",["a","an","the","no article"],3],
["Choose the correct article: 'I like ___ music.'",["a","an","the","no article"],3],
["Choose the correct sentence.",["My name is the Aziz.","My name is Aziz.","My name is a Aziz.","My name is an Aziz."],1]
],
sp:["Talk about your country, your name, and something you like, using articles correctly.","Mamlakatingiz, ismingiz va yoqtirgan narsangiz haqida artikllardan to'g'ri foydalanib gapiring."],
ls:["Class 'a/the' sorting: teacher says a sentence, students say if it needs a/an/the/nothing.","Sinf 'a/the' saralash: o'qituvchi gap aytadi, o'quvchilar a/an/the/hech narsa kerakligini aytadi.",
"In pairs, talk about your countries and favorite music.","Juftlikda mamlakatlaringiz va sevimli musiqangiz haqida gapiring."]
},

{d:29,w:6,wt:"Food & Things",wtUz:"Ovqat va narsalar",
t:"Someone, Anyone, Nothing...",tu:"Someone, anyone, nothing...",
v:[
["someone","kimdir","I can see someone."],
["anyone","hech kim (savol/inkor)","Is there anyone here?"],
["something","nimadir","There is something in the box."],
["anything","hech narsa (savol/inkor)","I can't see anything."],
["nothing","hech narsa","There is nothing in the box."],
["nowhere","hech qayerga","I have nowhere to go."]
],
dl:[
["Malika","Is there anyone in the room?","Xonada kimdir bormi?"],
["Aziz","No, there is no one. There is nothing here.","Yo'q, hech kim yo'q. Bu yerda hech narsa yo'q."],
["Malika","I can see something over there!","Men u yerda nimadir ko'ryapman!"]
],
g:["Someone, Anyone, Nothing, Nowhere",
"'Someone/something' are for positive sentences: I can see someone. 'Anyone/anything' are for questions and negatives: Is there anyone here? 'Nothing/nowhere' already mean negative — don't add 'not'.",
"Someone, anyone, nothing, nowhere",
"'Someone/something' tasdiq gaplarda ishlatiladi: I can see someone. 'Anyone/anything' so'roq va inkor gaplarda ishlatiladi: Is there anyone here? 'Nothing/nowhere' allaqachon inkor ma'nosini bildiradi — 'not' qo'shilmaydi."],
qz:[
["Choose the correct word: 'I can see ___.' (positive)",["anyone","someone","no one","nothing"],1],
["Choose the correct word: 'Is there ___ here?'",["someone","anyone","no one","something"],1],
["Choose the correct sentence.",["There isn't nothing.","There is nothing.","There isn't anything not.","Nothing isn't there."],1],
["'Hech qayerga' in English is ___.",["Somewhere","Anywhere","Nowhere","Everywhere"],2]
],
sp:["Describe your bag: say something that is in it and something that is not.","Sumkangizni tasvirlang: unda nima borligini va nima yo'qligini ayting."],
ls:["Mystery bag game: guess what's inside using 'something/nothing'.","Sirli sumka o'yini: ichida nima borligini 'something/nothing' bilan taxmin qiling.",
"In pairs, ask 'Is there anyone/anything...?' about the classroom.","Juftlikda sinf haqida 'Is there anyone/anything...?' deb so'rang."]
},

{d:30,w:6,wt:"Food & Things",wtUz:"Ovqat va narsalar",rev:true,
t:"Week 6 Review — Term 1 Final Check",tu:"6-hafta Takrorlash — 1-chorak Yakuniy Tekshiruvi",
qz:[
["Choose the correct word: 'I don't have ___ milk.'",["some","any","a","the"],1],
["Choose the correct sentence.",["I want playing football.","I want to play football.","I want play football.","I wants to play football."],1],
["Choose the correct article: 'I live in ___ Uzbekistan.'",["a","an","the","no article"],3],
["Choose the correct word: 'Is there ___ here?'",["someone","anyone","no one","something"],1],
["Choose the correct word: 'Would you like ___ tea?'",["some","any","much","many"],0],
["What follows 'want'?",["to + verb","verb + ing","plain verb","verb + s"],0],
["Choose the correct sentence.",["My name is the Aziz.","My name is Aziz.","My name is a Aziz.","My name is an Aziz."],1],
["'Hech qayerga' in English is ___.",["Somewhere","Anywhere","Nowhere","Everywhere"],2]
],
sp:["Give a 1-minute talk about yourself: your name, country, family, daily routine, and things you like.","O'zingiz haqida 1 daqiqalik nutq so'zlang: ismingiz, mamlakatingiz, oilangiz, kundalik hayotingiz va yoqtirgan narsalaringiz haqida."],
ls:["Term 1 celebration: each student shares one English sentence they're proud of.","1-chorak nishonlash: har bir o'quvchi faxrlanadigan bitta ingliz gapini aytadi.",
"In pairs, review the whole term by describing yourselves fully.","Juftlikda butun chorakni o'zingizni to'liq tasvirlash orqali takrorlang."]
}

];

if (typeof module !== "undefined") module.exports = CURRICULUM;
