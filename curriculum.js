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

];

if (typeof module !== "undefined") module.exports = CURRICULUM;
