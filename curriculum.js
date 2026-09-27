// SpeakUp curriculum — 90 days, 18 weeks, 3 terms (Beginner -> Elementary -> Intermediate)
// Day schema (normal day): {d,w,wt,wtUz,t,tu,v,dl,g,qz,sp,ls}
//   d: day number 1-90 | w: week number 1-18 | wt/wtUz: week title en/uz
//   t/tu: day title en/uz
//   v: vocabulary, 20x [en, uz, exampleSentenceContainingWord]
//   dl: dialogue, lines of [speaker, en, uz]
//   g: grammar tip, [titleEn, bodyEn, titleUz, bodyUz]
//   qz: quiz, [question, [4 choices], correctIndex] x4 (x8 review days, x20 final day)
//   sp: speaking prompt, [en, uz]
//   ls: live-session extras for teacher-led class, [warmupEn, warmupUz, pairworkEn, pairworkUz]
// Review day (every 5th day): {d,w,wt,wtUz,rev:true,t,tu,qz,sp,ls} (no v/dl/g)
// Day 90: rev:true, final:true, qz has 20 questions

const CURRICULUM = [

{d:1,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"Greetings & Introducing Yourself",tu:"Salomlashish va o'zingizni tanishtirish",
v:[
["Hello / Hi","Salom","Hello! My name is Aziz."],
["Good morning","Xayrli tong","Good morning, teacher!"],
["Good afternoon","Xayrli kun","Good afternoon, everyone."],
["Good evening","Xayrli kech","Good evening, Mrs. Alice."],
["Good night","Xayrli tun","Good night, see you tomorrow."],
["Goodbye","Xayr","Goodbye! See you soon."],
["See you later","Ko'rishguncha","See you later, my friend."],
["Please","Iltimos","Open the door, please."],
["Thank you","Rahmat","Thank you very much!"],
["You're welcome","Marhamat","You're welcome, my friend."],
["Sorry","Kechirasiz","Sorry, I am late."],
["Excuse me","Kechirasiz","Excuse me, where is the library?"],
["Yes","Ha","Yes, I am a student."],
["No","Yo'q","No, thank you."],
["My name is...","Mening ismim...","My name is Dilnoza."],
["What's your name?","Ismingiz nima?","What's your name, my friend?"],
["Nice to meet you","Tanishganimdan xursandman","Nice to meet you, Sardor!"],
["How are you?","Qalaysiz?","How are you today?"],
["I'm fine","Yaxshiman","I'm fine, thank you."],
["Welcome","Xush kelibsiz","Welcome to our class!"]
],
dl:[
["Aziz","Hello! My name is Aziz.","Salom! Mening ismim Aziz."],
["Malika","Hi, Aziz! I'm Malika. Nice to meet you.","Salom, Aziz! Men Malikaman. Tanishganimdan xursandman."],
["Aziz","Nice to meet you too. How are you?","Men ham xursandman. Qalaysiz?"],
["Malika","I'm fine, thank you. And you?","Yaxshiman, rahmat. Sizchi?"],
["Aziz","I'm fine too. See you later!","Men ham yaxshiman. Ko'rishguncha!"],
["Malika","Goodbye, Aziz!","Xayr, Aziz!"]
],
g:["Greetings for Different Times of Day",
"In English, we use different greetings depending on the time of day: 'Good morning' (before 12:00), 'Good afternoon' (12:00-18:00), and 'Good evening' (after 18:00). Remember: 'Good night' is NOT a greeting — we only say it when saying goodbye at night, right before someone goes to sleep.",
"Kun vaqtiga qarab salomlashish",
"Ingliz tilida kunning turli vaqtlarida turli salomlashish iboralari ishlatiladi: 'Good morning' (soat 12:00 gacha), 'Good afternoon' (12:00-18:00 oralig'ida) va 'Good evening' (18:00 dan keyin). Esda tuting: 'Good night' salomlashish uchun EMAS — bu ibora faqat kimdir uxlashga ketayotganda xayrlashish uchun ishlatiladi."],
qz:[
["How do you say 'Salom' in English?",["Goodbye","Hello","Sorry","Please"],1],
["What do you say when someone helps you?",["Sorry","Goodbye","Thank you","No"],2],
["Which greeting do you use at 20:00 (8 PM)?",["Good morning","Good afternoon","Good evening","Good night"],2],
["What is the opposite of 'Yes'?",["No","Please","Sorry","Hello"],0]
],
sp:["Introduce yourself to a partner: say hello, your name, and ask how they are.","Sherigingizga o'zingizni tanishtiring: salomlashing, ismingizni ayting va ahvolini so'rang."],
ls:["Stand up and greet 3 classmates using different greetings (morning/afternoon/evening).","O'rningizdan turing va 3 nafar sinfdoshingizni turli salomlashish iboralari bilan salomlang.",
"In pairs, act out meeting for the first time: greet, introduce your name, ask 'How are you?', and say goodbye.","Juftlikda birinchi marta uchrashuvni ijro eting: salomlashing, ismingizni ayting, 'Qalaysiz?' deb so'rang va xayrlashing."]
},

{d:2,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"The Alphabet & First Words",tu:"Alifbo va birinchi so'zlar",
v:[
["cat","mushuk","I have a cat."],
["dog","it","The dog is big."],
["sun","quyosh","The sun is hot."],
["pen","ruchka","This is my pen."],
["map","xarita","Look at the map."],
["bag","sumka","My bag is red."],
["red","qizil","I like the color red."],
["big","katta","The elephant is big."],
["run","yugurmoq","I run every morning."],
["sit","o'tirmoq","Please sit down."],
["cup","piyola","This is a cup of tea."],
["box","quti","Open the box."],
["six","olti","I have six books."],
["ten","o'n","Count to ten."],
["yes","ha","Yes, I can."],
["bed","karavot","The cat is on the bed."],
["hat","shlyapa","She has a red hat."],
["fun","qiziqarli","English class is fun."],
["hot","issiq","Tea is hot."],
["wet","ho'l","My shoes are wet."]
],
dl:[
["Teacher","What's your name?","Ismingiz nima?"],
["Student","My name is Javlon.","Mening ismim Javlon."],
["Teacher","How do you spell it?","Uni qanday harflaysiz?"],
["Student","J-A-V-L-O-N.","J-A-V-L-O-N."],
["Teacher","Thank you, Javlon.","Rahmat, Javlon."]
],
g:["The English Alphabet — 26 Letters",
"English has 26 letters: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. Five of them — A, E, I, O, U — are vowels; the rest are consonants. Practice saying each letter's name out loud — this helps you spell your name and read new words.",
"Ingliz alifbosi — 26 ta harf",
"Ingliz tilida 26 ta harf bor: A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z. Ulardan 5 tasi — A, E, I, O, U — unli tovushlar, qolganlari undosh tovushlardir. Har bir harfning nomini ovoz chiqarib aytishni mashq qiling — bu ismingizni harflab aytishga va yangi so'zlarni o'qishga yordam beradi."],
qz:[
["How many letters are in the English alphabet?",["24","25","26","27"],2],
["Which of these is a vowel?",["B","C","E","D"],2],
["What does 'cat' mean in Uzbek?",["It","Mushuk","Quyosh","Sumka"],1],
["Choose the correct spelling word for 'ruchka'.",["pen","cup","box","hat"],0]
],
sp:["Spell your first name out loud, letter by letter.","Ismingizni ovoz chiqarib, harflab ayting."],
ls:["Sing the ABC song together as a class.","Sinf bilan birga ABC qo'shig'ini kuylang.",
"In pairs, take turns spelling your names to each other.","Juftlikda navbatma-navbat ismlaringizni harflab ayting."]
},

{d:3,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"Numbers 1-20",tu:"1 dan 20 gacha sonlar",
v:[
["one","bir","I have one book."],
["two","ikki","I have two pens."],
["three","uch","Three students are here."],
["four","to'rt","Four plus four is eight."],
["five","besh","Give me five minutes."],
["six","olti","Six is my favorite number."],
["seven","yetti","There are seven days in a week."],
["eight","sakkiz","Eight birds are in the tree."],
["nine","to'qqiz","Nine plus one is ten."],
["ten","o'n","Count to ten."],
["eleven","o'n bir","Eleven students passed."],
["twelve","o'n ikki","Twelve months are in a year."],
["thirteen","o'n uch","She is thirteen years old."],
["fourteen","o'n to'rt","He is fourteen years old."],
["fifteen","o'n besh","Fifteen minutes left."],
["sixteen","o'n olti","Sixteen students are in class."],
["seventeen","o'n yetti","Seventeen books are on the shelf."],
["eighteen","o'n sakkiz","Eighteen chairs are in the room."],
["nineteen","o'n to'qqiz","Nineteen apples are in the basket."],
["twenty","yigirma","Twenty students are in my class."]
],
dl:[
["Teacher","How old are you?","Necha yoshdasiz?"],
["Student","I am thirteen years old.","Men o'n uch yoshdaman."],
["Teacher","How many students are in your class?","Sizning sinfingizda nechta o'quvchi bor?"],
["Student","Twenty students are in my class.","Bizning sinfimizda yigirmata o'quvchi bor."],
["Teacher","Great! Let's count together.","Ajoyib! Keling, birga sanaymiz."]
],
g:["Counting from One to Twenty",
"Numbers 1-12 have unique names (one, two, three... twelve). From 13 to 19, we add '-teen' to the base number (thir-teen, four-teen, fif-teen...). Twenty is a new word. Notice: 13 = thirteen (not 'three-teen'), 15 = fifteen (not 'five-teen') — these two are irregular, so memorize them separately.",
"Birdan yigirmagacha sanash",
"1 dan 12 gacha bo'lgan sonlarning har biri o'ziga xos nomga ega (one, two, three... twelve). 13 dan 19 gacha bo'lgan sonlarga asosiy songa '-teen' qo'shiladi (thir-teen, four-teen, fif-teen...). Twenty (yigirma) esa yangi so'z. Diqqat: 13 — thirteen (three-teen emas), 15 — fifteen (five-teen emas) — bu ikkitasi istisno, alohida yodlab oling."],
qz:[
["What number is 'fifteen'?",["5","50","15","51"],2],
["How do you say '20' in English?",["Twelve","Twenty","Ten","Two"],1],
["Which number comes after 'nine'?",["Eight","Eleven","Ten","Twelve"],2],
["'O'n uch' in English is ___.",["Thirty","Thirteen","Three","Third"],1]
],
sp:["Count from 1 to 20 out loud, then say your age and your best friend's age.","1 dan 20 gacha ovoz chiqarib sanang, so'ng o'z yoshingiz va eng yaqin do'stingizning yoshini ayting."],
ls:["Count around the room — each student says the next number from 1 to 20.","Xona bo'ylab sanang — har bir o'quvchi navbatma-navbat 1 dan 20 gacha keyingi sonni aytadi.",
"In pairs, ask and answer: 'How old are you?' and 'How many brothers/sisters do you have?'","Juftlikda so'rang va javob bering: 'Necha yoshdasiz?' va 'Nechta aka-uka/opa-singilingiz bor?'"]
},

{d:4,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",
t:"Classroom Objects & Instructions",tu:"Sinf buyumlari va topshiriqlar",
v:[
["book","kitob","Open your book."],
["pencil","qalam","I need a pencil."],
["notebook","daftar","Write in your notebook."],
["backpack","ryukzak","My backpack is heavy."],
["desk","parta","Sit at your desk."],
["chair","stul","The chair is broken."],
["board","doska","Look at the board."],
["ruler","chizg'ich","Use a ruler to draw a line."],
["eraser","o'chirg'ich","May I borrow your eraser?"],
["scissors","qaychi","Be careful with scissors."],
["window","deraza","Close the window, please."],
["door","eshik","Open the door."],
["wall","devor","The map is on the wall."],
["floor","pol","Don't sit on the floor."],
["stand up","o'rningdan tur","Stand up, please."],
["sit down","o'tir","Sit down, everyone."],
["listen","tinglamoq","Listen to the teacher."],
["repeat","takrorlamoq","Repeat after me."],
["write","yozmoq","Write your name here."],
["raise your hand","qo'lingizni ko'taring","Raise your hand if you know the answer."]
],
dl:[
["Teacher","Good morning, class! Open your books, please.","Xayrli tong, sinf! Kitoblaringizni oching, iltimos."],
["Student","I don't have a pencil.","Mening qalamim yo'q."],
["Teacher","Here you are. Now, listen and repeat.","Mana. Endi tinglang va takrorlang."],
["Student","Can I sit down?","O'tirsam bo'ladimi?"],
["Teacher","Yes, sit down, please.","Ha, o'tiring, iltimos."]
],
g:["Giving Simple Instructions (Imperatives)",
"To give an instruction in English, we use the base form of the verb without 'I' or 'you' — this is called the imperative. Examples: 'Open your book.' 'Sit down.' 'Listen carefully.' To make it negative, add 'Don't' before the verb: 'Don't talk.' 'Don't run in class.'",
"Oddiy buyruqlar berish (Imperativ)",
"Ingliz tilida buyruq berish uchun fe'lning asosiy shakli 'I' yoki 'you' so'zisiz ishlatiladi — bu imperativ deb ataladi. Misollar: 'Open your book.' (Kitobingizni oching.) 'Sit down.' (O'tiring.) Inkor shaklini yasash uchun fe'ldan oldin 'Don't' qo'shiladi: 'Don't talk.' (Gapirmang.)"],
qz:[
["What do you say to ask someone to be quiet and listen?",["Stand up","Listen","Write","Repeat"],1],
["'Daftar' in English is ___.",["Book","Notebook","Pencil","Bag"],1],
["Choose the correct imperative: '___ your book.'",["You open","Opening","Open","Opens"],2],
["What do you use to erase pencil marks?",["Ruler","Scissors","Eraser","Board"],2]
],
sp:["Give your partner 3 classroom commands in English (e.g. 'Stand up', 'Open your book').","Sherigingizga ingliz tilida 3 ta sinf buyrug'ini bering (masalan, 'Stand up', 'Open your book')."],
ls:["Play 'Simon Says' using classroom commands (stand up, sit down, listen, write).","Sinf buyruqlari bilan 'Simon Says' o'yinini o'ynang (stand up, sit down, listen, write).",
"In pairs, one student gives 5 commands, the other performs them, then switch roles.","Juftlikda bir o'quvchi 5 ta buyruq beradi, ikkinchisi bajaradi, so'ngra rollarni almashtiring."]
},

{d:5,w:1,wt:"First Steps in English",wtUz:"Ingliz tiliga birinchi qadam",rev:true,
t:"Week 1 Review — First Steps Check",tu:"1-hafta Takrorlash — Birinchi Qadamlar Tekshiruvi",
qz:[
["How do you say 'Salom' in English?",["Goodbye","Hello","Sorry","No"],1],
["What do you say when someone thanks you?",["Sorry","You're welcome","Goodbye","Please"],1],
["How many letters are in the English alphabet?",["24","25","26","27"],2],
["Which one is a vowel?",["B","O","T","S"],1],
["'O'n besh' in English is ___.",["Fifteen","Fifty","Five","Fourteen"],0],
["What do you say to ask someone to sit?",["Stand up","Sit down","Listen","Write"],1],
["'Daftar' means ___.",["Pencil","Notebook","Ruler","Chair"],1],
["Choose the correct greeting for the evening.",["Good morning","Good afternoon","Good evening","Good night"],2]
],
sp:["Introduce yourself fully: say hello, your name, your age, and count from 1 to 10.","O'zingizni to'liq tanishtiring: salomlashing, ismingiz, yoshingizni ayting va 1 dan 10 gacha sanang."],
ls:["Quick class quiz: call out a number, students write the English word on paper.","Tezkor sinf so'rovi: sonni ayting, o'quvchilar ingliz tilidagi so'zni qog'ozga yozadi.",
"In pairs, review the week: greet each other, ask age, name 5 classroom objects.","Juftlikda haftani takrorlang: bir-biringizni salomlang, yoshini so'rang, 5 ta sinf buyumini ayting."]
}
,

{d:6,w:2,wt:"Me & My Family",wtUz:"Men va mening oilam",
t:"Family Members",tu:"Oila a'zolari",
v:[
["mother","ona","My mother is a teacher."],
["father","ota","My father works every day."],
["parents","ota-ona","My parents love me."],
["sister","opa-singil","My sister is ten years old."],
["brother","aka-uka","My brother plays football."],
["grandmother","buvi","My grandmother cooks delicious food."],
["grandfather","bobo","My grandfather tells great stories."],
["son","o'g'il","He has one son."],
["daughter","qiz","She has two daughters."],
["aunt","xola","My aunt lives in Tashkent."],
["uncle","amaki","My uncle is a doctor."],
["cousin","amakivachcha","My cousin studies with me."],
["wife","xotin","His wife is a nurse."],
["husband","er","Her husband is a driver."],
["family","oila","I love my family."],
["baby","chaqaloq","The baby is sleeping."],
["children","bolalar","The children are playing outside."],
["friend","do'st","She is my best friend."],
["neighbor","qo'shni","Our neighbor is very kind."],
["twin","egizak","My brother is my twin."]
],
dl:[
["Malika","Is this your family photo?","Bu sizning oilaviy suratingizmi?"],
["Aziz","Yes, this is my mother and this is my father.","Ha, bu — mening onam, bu esa — mening otam."],
["Malika","Who is this boy?","Bu bola kim?"],
["Aziz","This is my brother. He is seven years old.","Bu mening ukam. U yetti yoshda."],
["Malika","Your family is very nice!","Sizning oilangiz juda yaxshi ekan!"]
],
g:["Possessive Adjectives: my, your, his, her",
"We use possessive adjectives before a noun to show who it belongs to: 'my mother' (mine), 'your father' (yours), 'his sister' (a boy's), 'her brother' (a girl's). Notice: 'his' is for males, 'her' is for females — this is different from Uzbek, where the same word is used for both.",
"Egalik olmoshlari: my, your, his, her",
"Egalik olmoshlari otdan oldin kelib, kimga tegishli ekanligini bildiradi: 'my mother' (mening onam), 'your father' (sizning otangiz), 'his sister' (uning opasi — o'g'il bola uchun), 'her brother' (uning akasi — qiz bola uchun). Diqqat: 'his' — erkaklar uchun, 'her' — ayollar uchun ishlatiladi, bu o'zbek tilidan farq qiladi, chunki o'zbek tilida ikkalasi uchun ham bitta so'z ishlatiladi."],
qz:[
["'Ona' in English is ___.",["Father","Mother","Brother","Aunt"],1],
["'Amaki' in English is ___.",["Uncle","Aunt","Cousin","Nephew"],0],
["Choose the word for a male sibling.",["Sister","Brother","Cousin","Uncle"],1],
["'Oila' in English is ___.",["Friend","Neighbor","Family","Children"],2]
],
sp:["Describe your family: how many people, their names, and their relationship to you.","Oilangizni tasvirlab bering: nechta odam, ismlari va sizga qanday qarindosh ekanini ayting."],
ls:["Show a photo (or draw) of your family and name 3 family members in English.","Oilangiz suratini ko'rsating (yoki chizing) va ingliz tilida 3 ta oila a'zosini ayting.",
"In pairs, ask 'Do you have a brother/sister?' and describe each other's families.","Juftlikda 'Sizda aka-uka/opa-singil bormi?' deb so'rang va bir-biringizning oilangizni tasvirlang."]
},

{d:7,w:2,wt:"Me & My Family",wtUz:"Men va mening oilam",
t:"I am, You are, He/She is",tu:"'To be' fe'li: am / is / are",
v:[
["I","men","I am a student."],
["you","siz","You are my friend."],
["he","u (erkak)","He is a teacher."],
["she","u (ayol)","She is a doctor."],
["it","u (narsa)","It is a cat."],
["we","biz","We are students."],
["they","ular","They are teachers."],
["am","(bo'lmoq)","I am happy."],
["is","(bo'lmoq)","She is kind."],
["are","(bo'lmoq)","You are smart."],
["a","bir (nomaʼlum artikl)","I have a book."],
["an","bir (unlidan oldin)","She has an apple."],
["boy","bola (o'g'il)","The boy is tall."],
["girl","qiz bola","The girl is happy."],
["man","erkak","The man is a driver."],
["woman","ayol","The woman is a nurse."],
["teacher","o'qituvchi","My teacher is kind."],
["student","o'quvchi","I am a student."],
["doctor","shifokor","He is a doctor."],
["engineer","muhandis","She wants to be an engineer."]
],
dl:[
["Teacher","Who is he?","U kim?"],
["Student","He is my classmate, Sardor.","U mening sinfdoshim, Sardor."],
["Teacher","Are you students?","Sizlar o'quvchimisizlar?"],
["Student","Yes, we are students.","Ha, biz o'quvchimiz."],
["Teacher","Is she a teacher?","U (ayol) o'qituvchimi?"],
["Student","No, she is a doctor.","Yo'q, u shifokor."]
],
g:["The Verb 'To Be': am / is / are",
"'To be' changes form depending on the subject: I am, You are, He/She/It is, We are, They are. It connects a subject to information about it — a name, a job, a feeling: 'I am Aziz.' 'She is a doctor.' 'They are happy.' There is no separate word for this in Uzbek present tense, so students often forget it — but in English, it is required.",
"'To Be' fe'li: am / is / are",
"'To be' fe'li ega (subject)ga qarab shaklini o'zgartiradi: I am, You are, He/She/It is, We are, They are. U ega bilan uning haqidagi ma'lumotni bog'laydi — ism, kasb, his-tuyg'u: 'I am Aziz.' (Men Azizman.) 'She is a doctor.' (U shifokor.) 'They are happy.' (Ular baxtli.) O'zbek tilida hozirgi zamonda bunday alohida so'z yo'q, shuning uchun o'quvchilar buni ko'pincha unutishadi — lekin ingliz tilida bu fe'l majburiy."],
qz:[
["Choose the correct word: 'She ___ a doctor.'",["am","is","are","be"],1],
["Choose the correct word: 'They ___ students.'",["am","is","are","be"],2],
["Choose the correct word: 'I ___ happy.'",["am","is","are","be"],0],
["'U (ayol) shifokor.' in English is ___.",["He is a doctor.","She is a doctor.","They are a doctor.","I am a doctor."],1]
],
sp:["Say 3 sentences about yourself and your friend using 'I am' and 'He/She is'.","O'zingiz va do'stingiz haqida 'I am' va 'He/She is' yordamida 3 ta gap tuzing."],
ls:["Point at different classmates and say 'He is...' or 'She is...' with their name.","Turli sinfdoshlaringizga ishora qilib, ismini aytib 'He is...' yoki 'She is...' deb ayting.",
"In pairs, take turns describing 3 people in the room using am/is/are.","Juftlikda navbatma-navbat xonadagi 3 kishini am/is/are yordamida tasvirlang."]
},

{d:8,w:2,wt:"Me & My Family",wtUz:"Men va mening oilam",
t:"Describing People",tu:"Odamlarni tasvirlash",
v:[
["tall","baland bo'yli","My brother is tall."],
["short","past bo'yli","She is short."],
["young","yosh","The teacher is young."],
["old","keksa","My grandfather is old."],
["nice","yoqimli","You are very nice."],
["kind","mehribon","She is kind to everyone."],
["funny","kulgili","He is a funny boy."],
["smart","aqlli","My friend is very smart."],
["strong","kuchli","He is strong."],
["beautiful","chiroyli","She is beautiful."],
["handsome","kelishgan","He is handsome."],
["happy","baxtli","I am happy today."],
["sad","xafa","Why are you sad?"],
["tired","charchagan","I am tired after school."],
["hungry","och","I am hungry now."],
["thirsty","chanqagan","He is thirsty."],
["friendly","do'stona","Our neighbor is friendly."],
["shy","uyatchan","The new student is shy."],
["brave","jasur","The firefighter is brave."],
["quiet","jim","The library is quiet."]
],
dl:[
["Malika","What is your brother like?","Akangiz qanaqa odam?"],
["Aziz","He is tall and very funny.","U baland bo'yli va juda kulgili."],
["Malika","Is he kind?","U mehribonmi?"],
["Aziz","Yes, he is very kind and smart.","Ha, u juda mehribon va aqlli."],
["Malika","He sounds great!","Ajoyib odamga o'xshaydi!"]
],
g:["Adjectives Come Before the Noun",
"In English, an adjective (a describing word) goes BEFORE the noun it describes: 'a tall boy', 'a kind teacher', 'a beautiful flower'. Also, adjectives never change form for plural: 'tall boys' (not 'talls boys').",
"Sifatlar otdan oldin keladi",
"Ingliz tilida sifat (tasvirlovchi so'z) tasvirlayotgan otidan OLDIN keladi: 'a tall boy' (baland bo'yli bola), 'a kind teacher' (mehribon o'qituvchi), 'a beautiful flower' (chiroyli gul). Bundan tashqari, sifatlar ko'plikda hech qachon o'zgarmaydi: 'tall boys' ('talls boys' emas)."],
qz:[
["'Mehribon' in English is ___.",["Funny","Kind","Strong","Shy"],1],
["Choose the correct word order.",["boy tall a","a tall boy","tall a boy","boy a tall"],1],
["'Charchagan' in English is ___.",["Hungry","Thirsty","Tired","Sad"],2],
["What is the opposite of 'happy'?",["Sad","Kind","Tall","Brave"],0]
],
sp:["Describe 2 people you know (a family member and a friend) using at least 4 adjectives.","Tanigan 2 kishini (oila a'zosi va do'stingizni) kamida 4 ta sifat yordamida tasvirlang."],
ls:["Describe a famous person or cartoon character using 3 adjectives without saying their name — class guesses who it is.","Ismini aytmasdan mashhur odam yoki multfilm qahramonini 3 ta sifat bilan tasvirlang — sinf kim ekanini topsin.",
"In pairs, describe each other using 3 positive adjectives.","Juftlikda bir-biringizni 3 ta ijobiy sifat bilan tasvirlang."]
},

{d:9,w:2,wt:"Me & My Family",wtUz:"Men va mening oilam",
t:"Countries & Nationalities",tu:"Davlatlar va millatlar",
v:[
["Uzbekistan","O'zbekiston","I am from Uzbekistan."],
["Uzbek","o'zbek","I am Uzbek."],
["England","Angliya","She is from England."],
["English","ingliz","He speaks English."],
["America","Amerika","They live in America."],
["American","amerikalik","She is American."],
["Russia","Rossiya","He is from Russia."],
["Russian","rus","My neighbor is Russian."],
["China","Xitoy","This tea is from China."],
["Chinese","xitoylik","My friend is Chinese."],
["Japan","Yaponiya","He wants to visit Japan."],
["Japanese","yapon","She speaks Japanese."],
["Turkey","Turkiya","We traveled to Turkey."],
["Turkish","turk","He is Turkish."],
["France","Fransiya","Paris is in France."],
["French","fransuz","She is learning French."],
["Germany","Germaniya","My uncle lives in Germany."],
["German","nemis","He is German."],
["Korea","Koreya","I like music from Korea."],
["Korean","koreys","My sister likes Korean dramas."]
],
dl:[
["Malika","Where are you from?","Qayerliksiz?"],
["Aziz","I am from Uzbekistan. I am Uzbek.","Men O'zbekistondanman. Men o'zbekman."],
["Malika","Where is your pen pal from?","Sizning maktubdosh do'stingiz qayerlik?"],
["Aziz","She is from Japan. She is Japanese.","U Yaponiyadan. U yapon."],
["Malika","What language does she speak?","U qaysi tilda gaplashadi?"],
["Aziz","She speaks Japanese and English.","U yapon va ingliz tillarida gaplashadi."]
],
g:["Country vs. Nationality",
"The country name and the nationality/adjective are often different words: 'Uzbekistan' (country) → 'Uzbek' (nationality), 'England' → 'English', 'France' → 'French'. Use 'I am from + country' or 'I am + nationality': 'I am from Uzbekistan.' = 'I am Uzbek.' Both are correct!",
"Davlat nomi va millat",
"Davlat nomi va millat/sifatdosh ko'pincha turli so'zlar bo'ladi: 'Uzbekistan' (davlat) → 'Uzbek' (millat), 'England' → 'English', 'France' → 'French'. 'I am from + davlat' yoki 'I am + millat' qolipidan foydalaning: 'I am from Uzbekistan.' = 'I am Uzbek.' Ikkalasi ham to'g'ri!"],
qz:[
["What is the nationality word for 'England'?",["Englishman","English","England","Englisher"],1],
["'Men o'zbekman' in English is ___.",["I am from Uzbek.","I am Uzbekistan.","I am Uzbek.","I Uzbek am."],2],
["What language do people speak in France?",["German","French","Turkish","Korean"],1],
["Choose the correct country for 'Chinese' people.",["Japan","Korea","China","Turkey"],2]
],
sp:["Say where you are from, your nationality, and name 2 other countries and their nationalities.","Qayerlik ekaningizni, millatingizni va yana 2 ta davlat hamda ularning millatini ayting."],
ls:["Class map activity: point to a country on the map and say its nationality.","Sinf xarita mashqi: xaritadan davlatni ko'rsating va uning millatini ayting.",
"In pairs, pretend to be from different countries and introduce yourselves.","Juftlikda turli davlatlardan bo'lganingizni tasavvur qilib, o'zingizni tanishtiring."]
},

{d:10,w:2,wt:"Me & My Family",wtUz:"Men va mening oilam",rev:true,
t:"Week 2 Review — Family & People Check",tu:"2-hafta Takrorlash — Oila va Odamlar Tekshiruvi",
qz:[
["'Ona' in English is ___.",["Father","Mother","Sister","Aunt"],1],
["Choose the correct word: 'They ___ students.'",["am","is","are","be"],2],
["'Mehribon' in English is ___.",["Funny","Kind","Strong","Shy"],1],
["'Men o'zbekman' in English is ___.",["I am Uzbekistan.","I am Uzbek.","I Uzbek am.","I am from Uzbek."],1],
["Choose the word for a male sibling.",["Sister","Brother","Cousin","Uncle"],1],
["Choose the correct order for adjectives.",["boy tall a","a tall boy","tall a boy","boy a tall"],1],
["Choose the correct word: 'She ___ a doctor.'",["am","is","are","be"],1],
["What language do people speak in France?",["German","French","Turkish","Korean"],1]
],
sp:["Introduce a family member: their name, relationship to you, 2 adjectives about them, and their nationality.","Oila a'zosini tanishtiring: ismi, sizga qarindoshligi, u haqida 2 ta sifat va uning millatini ayting."],
ls:["Class game: teacher names a family word or nationality, students say it in English fast.","Sinf o'yini: o'qituvchi oila so'zi yoki millatni aytadi, o'quvchilar tezda ingliz tilida aytadi.",
"In pairs, review: describe your family and where you are from.","Juftlikda takrorlang: oilangizni va qayerlik ekaningizni tasvirlang."]
}
,

{d:11,w:3,wt:"Daily Life",wtUz:"Kundalik hayot",
t:"Days & Months",tu:"Hafta kunlari va oylar",
v:[
["Monday","dushanba","I have English class on Monday."],
["Tuesday","seshanba","We have math on Tuesday."],
["Wednesday","chorshanba","Wednesday is in the middle of the week."],
["Thursday","payshanba","I visit my grandmother on Thursday."],
["Friday","juma","Friday is my favorite day."],
["Saturday","shanba","We don't have school on Saturday."],
["Sunday","yakshanba","I rest on Sunday."],
["week","hafta","There are seven days in a week."],
["today","bugun","Today is Monday."],
["tomorrow","ertaga","I have a test tomorrow."],
["yesterday","kecha","Yesterday was Sunday."],
["January","yanvar","My birthday is in January."],
["February","fevral","School starts again in February."],
["March","mart","Spring begins in March."],
["April","aprel","It often rains in April."],
["May","may","May is a warm month."],
["June","iyun","Summer holidays start in June."],
["month","oy","There are twelve months in a year."],
["year","yil","I am in the 7th grade this year."],
["weekend","dam olish kuni","I play football on the weekend."]
],
dl:[
["Malika","What day is it today?","Bugun qaysi kun?"],
["Aziz","Today is Wednesday.","Bugun chorshanba."],
["Malika","Do you have English class tomorrow?","Ertaga ingliz tili darsingiz bormi?"],
["Aziz","Yes, on Thursday. What about the weekend?","Ha, payshanba kuni. Dam olish kunichi?"],
["Malika","I rest on Saturday and Sunday.","Men shanba va yakshanba kunlari dam olaman."]
],
g:["Prepositions with Time: on & in",
"We use 'on' with days of the week: 'on Monday', 'on Friday'. We use 'in' with months and years: 'in January', 'in 2026'. Don't mix them up — this is one of the most common mistakes for Uzbek speakers, because Uzbek doesn't need a different word here.",
"Vaqt bilan predloglar: on va in",
"Hafta kunlari bilan 'on' ishlatiladi: 'on Monday', 'on Friday'. Oy va yil bilan 'in' ishlatiladi: 'in January', 'in 2026'. Bularni aralashtirib yubormang — bu o'zbek tilida so'zlashuvchilar uchun eng ko'p uchraydigan xatolardan biri, chunki o'zbek tilida bunday farqli so'z kerak emas."],
qz:[
["Which day comes after Tuesday?",["Monday","Wednesday","Thursday","Sunday"],1],
["Choose the correct preposition: 'I have class ___ Monday.'",["in","on","at","for"],1],
["Choose the correct preposition: 'My birthday is ___ May.'",["on","in","at","for"],1],
["'Kecha' in English is ___.",["Today","Tomorrow","Yesterday","Week"],2]
],
sp:["Say what day it is today, what you did yesterday, and what you will do tomorrow.","Bugun qaysi kun ekanini, kecha nima qilganingizni va ertaga nima qilishingizni ayting."],
ls:["Class calendar check: teacher asks 'What day is it? What month is it?' around the room.","Sinf kalendar tekshiruvi: o'qituvchi xona bo'ylab 'Bugun qaysi kun? Qaysi oy?' deb so'raydi.",
"In pairs, ask each other what day your favorite class is and when your birthday month is.","Juftlikda bir-biringizdan sevimli faningiz qaysi kunligini va tug'ilgan oyingiz qachonligini so'rang."]
},

{d:12,w:3,wt:"Daily Life",wtUz:"Kundalik hayot",
t:"Telling the Time",tu:"Vaqtni aytish",
v:[
["o'clock","soat (aniq)","It is three o'clock."],
["half past","yarim","It is half past six."],
["quarter past","choragi o'tdi","It is quarter past nine."],
["quarter to","choragiga","It is quarter to five."],
["morning","ertalab","I wake up in the morning."],
["afternoon","tushdan keyin","We have lunch in the afternoon."],
["evening","kechqurun","I do homework in the evening."],
["night","tun","I sleep at night."],
["clock","devor soati","Look at the clock."],
["watch","qo'l soati","He has a new watch."],
["minute","daqiqa","Wait one minute, please."],
["hour","soat (vaqt birligi)","The lesson is one hour."],
["early","erta","I wake up early."],
["late","kech","Don't be late for school."],
["now","hozir","What time is it now?"],
["What time is it?","Soat necha?","What time is it? It's 8 o'clock."],
["breakfast","nonushta","I eat breakfast at seven."],
["lunch","tushlik","We have lunch at school."],
["dinner","kechki ovqat","My family has dinner together."],
["noon","peshin","We finish school at noon."]
],
dl:[
["Aziz","What time is it now?","Hozir soat necha?"],
["Malika","It's half past eight.","Soat sakkiz yarim."],
["Aziz","What time do you have breakfast?","Nonushtani soat nechada qilasiz?"],
["Malika","I have breakfast at seven o'clock.","Men nonushtani soat yettida qilaman."],
["Aziz","And dinner?","Kechki ovqatchi?"],
["Malika","We have dinner at half past seven in the evening.","Biz kechqurun soat yetti yarimda kechki ovqat qilamiz."]
],
g:["Asking and Telling the Time",
"To ask the time: 'What time is it?' To answer, say the hour + minutes: 3:00 = 'three o'clock', 3:15 = 'quarter past three', 3:30 = 'half past three', 3:45 = 'quarter to four' (we look ahead to the NEXT hour after the half). Use 'at' for a specific time: 'School starts at eight o'clock.'",
"Vaqtni so'rash va aytish",
"Vaqtni so'rash uchun: 'What time is it?' (Soat necha?) Javob berish uchun soat + daqiqani ayting: 3:00 = 'three o'clock', 3:15 = 'quarter past three', 3:30 = 'half past three', 3:45 = 'quarter to four' (diqqat: yarimdan keyin KEYINGI soatga qarab aytiladi). Aniq vaqt uchun 'at' predlogi ishlatiladi: 'School starts at eight o'clock.'"],
qz:[
["How do you say 3:30 in English?",["Half past three","Quarter past three","Three o'clock","Quarter to three"],0],
["Choose the correct question for time.",["What time it is?","What time is it?","Is what time it?","What is time?"],1],
["'Nonushta' in English is ___.",["Lunch","Dinner","Breakfast","Noon"],2],
["Choose the correct preposition: 'School starts ___ eight o'clock.'",["in","on","at","for"],2]
],
sp:["Tell your daily schedule: what time you wake up, have breakfast, go to school, and go to bed.","Kundalik jadvalingizni ayting: soat nechada uyg'onasiz, nonushta qilasiz, maktabga borasiz va uxlaysiz."],
ls:["Draw a clock face and ask a partner 'What time is it?' — take turns setting different times.","Soat siferblatini chizing va sherigingizdan 'Soat necha?' deb so'rang — navbatma-navbat turli vaqtlarni belgilang.",
"In pairs, compare your daily schedules: breakfast time, school time, dinner time.","Juftlikda kundalik jadvalingizni solishtiring: nonushta, maktab va kechki ovqat vaqtlari."]
},

{d:13,w:3,wt:"Daily Life",wtUz:"Kundalik hayot",
t:"My Daily Routine",tu:"Mening kundalik odatlarim",
v:[
["wake up","uyg'onmoq","I wake up at seven."],
["get up","turmoq","I get up early."],
["wash","yuvmoq","I wash my face."],
["brush teeth","tish yuvmoq","I brush my teeth every morning."],
["have breakfast","nonushta qilmoq","I have breakfast at home."],
["get dressed","kiyinmoq","I get dressed quickly."],
["go to school","maktabga bormoq","I go to school at eight."],
["study","o'qimoq","I study English every day."],
["have lunch","tushlik qilmoq","We have lunch at school."],
["come home","uyga qaytmoq","I come home at three."],
["do homework","uy vazifasini bajarmoq","I do homework in the evening."],
["play","o'ynamoq","I play with my friends."],
["watch TV","televizor ko'rmoq","I watch TV after dinner."],
["have dinner","kechki ovqat qilmoq","We have dinner at eight."],
["go to bed","yotmoq","I go to bed at ten."],
["sleep","uxlamoq","I sleep for eight hours."],
["every day","har kuni","I study every day."],
["always","doim","I always brush my teeth."],
["usually","odatda","I usually wake up at seven."],
["sometimes","ba'zan","I sometimes watch TV."]
],
dl:[
["Teacher","What time do you wake up?","Soat nechada uyg'onasiz?"],
["Student","I wake up at seven every day.","Men har kuni soat yettida uyg'onaman."],
["Teacher","What do you do after school?","Maktabdan keyin nima qilasiz?"],
["Student","I usually do my homework, then I play with my friends.","Men odatda uy vazifamni bajaraman, keyin do'stlarim bilan o'ynayman."],
["Teacher","What time do you go to bed?","Soat nechada yotasiz?"],
["Student","I go to bed at ten o'clock.","Men soat o'nda yotaman."]
],
g:["Present Simple for Daily Routines",
"We use the present simple with I/you/we/they to talk about things we do regularly or every day — no extra ending needed on the verb: 'I wake up at seven.' 'We study English.' 'They play football.' Add words like 'always', 'usually', 'sometimes' before the verb to say how often: 'I always brush my teeth.'",
"Kundalik odatlar uchun Present Simple",
"I/you/we/they bilan muntazam yoki har kuni qiladigan ishlar haqida gapirish uchun present simple ishlatiladi — fe'lga qo'shimcha kerak emas: 'I wake up at seven.' 'We study English.' Qanchalik tez-tez ekanini bildirish uchun fe'ldan oldin 'always', 'usually', 'sometimes' kabi so'zlar qo'shiladi: 'I always brush my teeth.'"],
qz:[
["Choose the correct sentence.",["I wakes up at seven.","I wake up at seven.","I waking up at seven.","I to wake up at seven."],1],
["'Har kuni' in English is ___.",["Sometimes","Always","Every day","Usually"],2],
["'Uy vazifasini bajarmoq' in English is ___.",["Do homework","Go to school","Have dinner","Watch TV"],0],
["Choose the word that means 'ba'zan'.",["Always","Usually","Sometimes","Every day"],2]
],
sp:["Describe your daily routine from waking up to going to bed, using at least 6 routine verbs.","Uyg'onishdan tortib yotguncha bo'lgan kundalik odatingizni kamida 6 ta fe'l yordamida tasvirlang."],
ls:["Mime a daily routine action (brushing teeth, eating) — classmates guess the verb in English.","Kundalik harakatni imo-ishora bilan ko'rsating — sinfdoshlaringiz ingliz tilida fe'lni topsin.",
"In pairs, interview each other about your daily routine and note the differences.","Juftlikda bir-biringizni kundalik hayotingiz haqida intervyu qiling va farqlarni belgilang."]
},

{d:14,w:3,wt:"Daily Life",wtUz:"Kundalik hayot",
t:"He/She Routines — Present Simple -s",tu:"He/She odatlari — Present Simple -s",
v:[
["eat","yemoq","She eats breakfast at seven."],
["drink","ichmoq","He drinks tea every morning."],
["work","ishlamoq","My father works in a hospital."],
["teach","o'qitmoq","My teacher teaches English."],
["cook","pishirmoq","My mother cooks dinner."],
["clean","tozalamoq","She cleans her room on Saturday."],
["read","o'qimoq","He reads books every evening."],
["write","yozmoq","She writes in her notebook."],
["drive","haydamoq","My uncle drives a bus."],
["like","yoqtirmoq","He likes football."],
["want","xohlamoq","She wants to be a doctor."],
["need","kerak bo'lmoq","He needs a new pen."],
["help","yordam bermoq","She helps her mother."],
["live","yashamoq","He lives in Samarkand."],
["finish","tugatmoq","School finishes at noon."],
["start","boshlamoq","Class starts at eight."],
["open","ochmoq","The shop opens at nine."],
["close","yopmoq","The library closes at six."],
["arrive","yetib kelmoq","The bus arrives at seven."],
["leave","jo'namoq","She leaves home at eight."]
],
dl:[
["Malika","What does your father do?","Otangiz nima ish qiladi?"],
["Aziz","He works in a hospital. He helps sick people.","U kasalxonada ishlaydi. U kasal odamlarga yordam beradi."],
["Malika","Does your mother work too?","Onangiz ham ishlaydimi?"],
["Aziz","Yes, she teaches at a school. She likes her job.","Ha, u maktabda dars beradi. U o'z ishini yoqtiradi."],
["Malika","What time does school start?","Maktab soat nechada boshlanadi?"],
["Aziz","It starts at eight o'clock.","U soat sakkizda boshlanadi."]
],
g:["Present Simple: Adding -s with he/she/it",
"With he/she/it, we add -s (or -es) to the verb: work → works, teach → teaches, study → studies (y changes to i before -es after a consonant). Example: 'I work' but 'He works.' 'I study' but 'She studies.' This -s is easy to forget, but it's essential — native speakers notice immediately if it's missing.",
"Present Simple: he/she/it bilan -s qo'shish",
"He/she/it bilan fe'lga -s (yoki -es) qo'shiladi: work → works, teach → teaches, study → studies (undosh + y bilan tugagan so'zlarda -es dan oldin y harfi i ga o'zgaradi). Misol: 'I work' lekin 'He works.' Bu -s ni unutish oson, lekin u juda muhim — ingliz tilida so'zlashuvchilar uni yo'qligini darrov sezishadi."],
qz:[
["Choose the correct sentence.",["He work in a hospital.","He works in a hospital.","He working in a hospital.","He to work in a hospital."],1],
["'Study' with 'she' becomes ___.",["Studys","Studies","Studying","Studyes"],1],
["'Yordam bermoq' in English is ___.",["Need","Want","Help","Like"],2],
["Choose the correct sentence about a school.",["School start at eight.","School starts at eight.","School starting at eight.","School to start at eight."],1]
],
sp:["Talk about a family member's job: what they do, where they work, and one thing they like about it.","Oila a'zosining kasbi haqida gapiring: nima ish qilishi, qayerda ishlashi va u nimani yoqtirishi haqida ayting."],
ls:["Class chain: each student says one sentence about what their family member does, using he/she + -s.","Sinf zanjiri: har bir o'quvchi oila a'zosi nima qilishi haqida he/she + -s bilan bitta gap aytadi.",
"In pairs, ask about each other's parents' jobs using 'What does your mother/father do?'","Juftlikda bir-biringizning ota-onangizning kasbi haqida 'What does your mother/father do?' deb so'rang."]
},

{d:15,w:3,wt:"Daily Life",wtUz:"Kundalik hayot",rev:true,
t:"Week 3 Review — Daily Life Check",tu:"3-hafta Takrorlash — Kundalik Hayot Tekshiruvi",
qz:[
["Which day comes after Tuesday?",["Monday","Wednesday","Thursday","Sunday"],1],
["Choose the correct preposition: 'My birthday is ___ May.'",["on","in","at","for"],1],
["How do you say 3:30 in English?",["Half past three","Quarter past three","Three o'clock","Quarter to three"],0],
["'Nonushta' in English is ___.",["Lunch","Dinner","Breakfast","Noon"],2],
["Choose the correct sentence.",["I wakes up at seven.","I wake up at seven.","I waking up at seven.","I to wake up at seven."],1],
["'Har kuni' in English is ___.",["Sometimes","Always","Every day","Usually"],2],
["'Study' with 'she' becomes ___.",["Studys","Studies","Studying","Studyes"],1],
["Choose the correct sentence about a school.",["School start at eight.","School starts at eight.","School starting at eight.","School to start at eight."],1]
],
sp:["Describe your typical school day from morning to night, including at least 2 things a family member does.","Odatiy maktab kuningizni ertalabdan kechgacha, shu jumladan oila a'zosi qiladigan kamida 2 ta ishni tasvirlang."],
ls:["Class quiz: teacher gives a time or day, students respond fast in English.","Sinf so'rovi: o'qituvchi vaqt yoki kunni aytadi, o'quvchilar tezda ingliz tilida javob beradi.",
"In pairs, review the week: talk about your schedule and your parents' jobs.","Juftlikda haftani takrorlang: jadvalingiz va ota-onangizning kasbi haqida gapiring."]
}
,

{d:16,w:4,wt:"Home & School",wtUz:"Uy va maktab",
t:"My House & Rooms",tu:"Mening uyim va xonalar",
v:[
["house","uy","I live in a big house."],
["apartment","kvartira","My cousin lives in an apartment."],
["room","xona","My room is small."],
["bedroom","yotoqxona","My bedroom has a bed and a desk."],
["bathroom","hammom","The bathroom is upstairs."],
["kitchen","oshxona","My mother cooks in the kitchen."],
["living room","mehmonxona","We watch TV in the living room."],
["garden","bog'","We grow flowers in the garden."],
["yard","hovli","Children play in the yard."],
["roof","tom","The roof is red."],
["wall","devor","There is a picture on the wall."],
["floor","qavat","My room is on the second floor."],
["stairs","zinapoya","Be careful on the stairs."],
["key","kalit","I need my house key."],
["address","manzil","What is your address?"],
["big","katta","Our house is big."],
["small","kichik","My room is small."],
["new","yangi","We have a new house."],
["old","eski","The old house is beautiful."],
["live in","yashamoq","I live in Tashkent."]
],
dl:[
["Malika","Do you live in a house or an apartment?","Siz uyda yashaysizmi yoki kvartirada?"],
["Aziz","I live in a house. It has a garden.","Men uyda yashayman. Unda bog' bor."],
["Malika","How many rooms does it have?","Unda nechta xona bor?"],
["Aziz","It has four rooms: two bedrooms, a kitchen, and a living room.","Unda to'rtta xona bor: ikkita yotoqxona, oshxona va mehmonxona."],
["Malika","That sounds nice!","Juda yaxshi ekan!"]
],
g:["Talking About What a Place Has (has/have)",
"To describe what a place contains, we use 'has' (with it/singular) or 'have' (with I/you/we/they): 'My house has a garden.' 'We have two bedrooms.' To ask, use 'How many...does it have?': 'How many rooms does it have?'",
"Joy nimaga ega ekanini aytish (has/have)",
"Biror joyda nima borligini tasvirlash uchun 'has' (it/birlik bilan) yoki 'have' (I/you/we/they bilan) ishlatiladi: 'My house has a garden.' 'We have two bedrooms.' So'rash uchun 'How many...does it have?' qolipidan foydalaning."],
qz:[
["'Oshxona' in English is ___.",["Bedroom","Bathroom","Kitchen","Living room"],2],
["Choose the correct sentence.",["My house have a garden.","My house has a garden.","My house having a garden.","My house is have a garden."],1],
["'Zinapoya' in English is ___.",["Roof","Stairs","Wall","Floor"],1],
["What is the opposite of 'new'?",["Big","Small","Old","Young"],2]
],
sp:["Describe your house or apartment: how many rooms it has and what your favorite room is.","Uyingiz yoki kvartirangizni tasvirlab bering: nechta xonasi bor va sevimli xonangiz qaysi."],
ls:["Draw your dream house and label 5 rooms in English.","Orzuingizdagi uyni chizing va 5 ta xonani ingliz tilida nomlang.",
"In pairs, describe your real house to each other and compare.","Juftlikda haqiqiy uyingizni bir-biringizga tasvirlang va solishtiring."]
},

{d:17,w:4,wt:"Home & School",wtUz:"Uy va maktab",
t:"Furniture & Where Things Are",tu:"Mebel va narsalarning joyi",
v:[
["bed","karavot","The bed is in my bedroom."],
["table","stol","The book is on the table."],
["chair","stul","Sit on the chair."],
["sofa","divan","We sit on the sofa."],
["wardrobe","shkaf","My clothes are in the wardrobe."],
["shelf","tokcha","Books are on the shelf."],
["lamp","chiroq","Turn on the lamp."],
["mirror","oyna","Look in the mirror."],
["carpet","gilam","The carpet is red."],
["curtain","parda","Close the curtain, please."],
["fridge","muzlatgich","Milk is in the fridge."],
["cooker","plita","My mother cooks on the cooker."],
["sink","rakovina","Wash your hands in the sink."],
["TV","televizor","The TV is in the living room."],
["computer","kompyuter","I do homework on the computer."],
["phone","telefon","My phone is on the table."],
["in","ichida","The cat is in the box."],
["on","ustida","The book is on the table."],
["under","ostida","The shoes are under the bed."],
["next to","yonida","The lamp is next to the bed."]
],
dl:[
["Teacher","Where is your bed?","Karavotingiz qayerda?"],
["Student","My bed is next to the window.","Mening karavotim deraza yonida."],
["Teacher","Where is your computer?","Kompyuteringiz qayerda?"],
["Student","It's on the table, under the lamp.","U stol ustida, chiroq ostida."],
["Teacher","Is your room tidy?","Xonangiz tartiblimi?"],
["Student","Yes, everything is in its place.","Ha, hamma narsa o'z joyida."]
],
g:["Prepositions of Place: in, on, under, next to",
"'In' = inside something ('in the box'). 'On' = on top of a surface ('on the table'). 'Under' = below something ('under the bed'). 'Next to' = beside something ('next to the window'). These small words are essential for describing where things are.",
"O'rin predloglari: in, on, under, next to",
"'In' — biror narsaning ichida ('in the box'). 'On' — biror sirtning ustida ('on the table'). 'Under' — biror narsaning ostida ('under the bed'). 'Next to' — biror narsaning yonida ('next to the window'). Bu kichik so'zlar narsalarning qayerda ekanini tasvirlash uchun juda muhim."],
qz:[
["Choose the correct preposition: 'The book is ___ the table.'",["in","on","under","next to"],1],
["'Shkaf' in English is ___.",["Sofa","Wardrobe","Shelf","Fridge"],1],
["Choose the correct preposition: 'The shoes are ___ the bed.'",["on","in","under","next to"],2],
["'Sut muzlatgichda' in English is ___.",["Milk is on the fridge.","Milk is in the fridge.","Milk is under the fridge.","Milk is next to the fridge."],1]
],
sp:["Describe where 5 things are in your bedroom using in/on/under/next to.","Yotoqxonangizdagi 5 ta narsaning qayerda ekanini in/on/under/next to yordamida tasvirlang."],
ls:["Classroom scavenger hunt: find and name objects using prepositions (e.g. 'The bag is under the desk').","Sinfda buyum qidirish o'yini: predloglar yordamida buyumlarni toping va nomlang.",
"In pairs, describe your bedroom furniture layout to your partner.","Juftlikda yotoqxonangizdagi mebel joylashuvini sherigingizga tasvirlang."]
},

{d:18,w:4,wt:"Home & School",wtUz:"Uy va maktab",
t:"School Subjects & Timetable",tu:"Maktab fanlari va dars jadvali",
v:[
["Math","matematika","I like Math."],
["English","ingliz tili","English is fun."],
["Uzbek language","o'zbek tili","We study Uzbek language every day."],
["Literature","adabiyot","Literature is interesting."],
["History","tarix","I learn about history."],
["Geography","geografiya","Geography teaches about countries."],
["Biology","biologiya","Biology is about plants and animals."],
["Chemistry","kimyo","Chemistry has interesting experiments."],
["Physics","fizika","Physics explains how things work."],
["Physical Education","jismoniy tarbiya","I like Physical Education."],
["Art","tasviriy san'at","We draw pictures in Art."],
["Music","musiqa","We sing songs in Music."],
["Technology","texnologiya","We make things in Technology class."],
["Computer Science","informatika","I learn to code in Computer Science."],
["subject","fan","Math is my favorite subject."],
["timetable","dars jadvali","Check the timetable for today's classes."],
["lesson","dars","The lesson starts at nine."],
["break","tanaffus","We have a break after two lessons."],
["favorite","sevimli","English is my favorite subject."],
["difficult","qiyin","Chemistry is a bit difficult."]
],
dl:[
["Malika","What's your favorite subject?","Sevimli faningiz nima?"],
["Aziz","My favorite subject is English. What about you?","Mening sevimli fanim — ingliz tili. Sizchi?"],
["Malika","I like Biology. It's very interesting.","Men biologiyani yoqtiraman. U juda qiziq."],
["Aziz","Is Chemistry difficult for you?","Kimyo siz uchun qiyinmi?"],
["Malika","Yes, a little. But Math is easy for me.","Ha, biroz. Lekin matematika men uchun oson."]
],
g:["Asking About Preferences",
"To ask what someone likes best, use 'What's your favorite + noun?': 'What's your favorite subject?' To ask about liking something, use 'Do you like + noun?': 'Do you like Math?' Answer with 'Yes, I do.' or 'No, I don't.'",
"Sevimli narsa haqida so'rash",
"Kimningdir eng yoqtirgan narsasini so'rash uchun 'What's your favorite + ot?' qolipidan foydalaning: 'What's your favorite subject?' Biror narsani yoqtirish-yoqtirmasligini so'rash uchun 'Do you like + ot?': 'Do you like Math?' Javob: 'Yes, I do.' yoki 'No, I don't.'"],
qz:[
["'Sevimli' in English is ___.",["Difficult","Favorite","Easy","Subject"],1],
["Choose the correct question.",["What's your favorite subject?","What's you favorite subject?","What your favorite subject?","What's favorite your subject?"],0],
["'Tanaffus' in English is ___.",["Lesson","Timetable","Break","Subject"],2],
["Which subject teaches about plants and animals?",["Chemistry","Physics","Biology","Geography"],2]
],
sp:["Talk about your school timetable: name 4 subjects, your favorite one, and why.","Maktab jadvalingiz haqida gapiring: 4 ta fanni ayting, sevimli faningizni va nima uchun sevishingizni tushuntiring."],
ls:["Class survey: ask 5 classmates 'What's your favorite subject?' and report the results.","Sinf so'rovi: 5 nafar sinfdoshingizdan 'Sevimli faningiz nima?' deb so'rang va natijalarni ayting.",
"In pairs, compare your timetables and favorite/least favorite subjects.","Juftlikda dars jadvalingizni va sevimli/sevimli bo'lmagan fanlaringizni solishtiring."]
},

{d:19,w:4,wt:"Home & School",wtUz:"Uy va maktab",
t:"School Life",tu:"Maktab hayoti",
v:[
["principal","maktab direktori","The principal is very strict."],
["classmate","sinfdosh","My classmate helps me with homework."],
["uniform","forma","We wear a school uniform."],
["exam","imtihon","The exam is next week."],
["test","test","We have an English test today."],
["homework","uy vazifasi","I always do my homework."],
["grade","baho","She got a good grade."],
["pass","o'tmoq","I hope to pass the exam."],
["fail","yiqilmoq","He didn't study, so he failed the test."],
["absent","kelmagan","Three students are absent today."],
["present","hozir","Everyone is present today."],
["late","kech qolgan","Don't be late for school."],
["break time","tanaffus vaqti","We play outside at break time."],
["cafeteria","oshxona","We eat lunch in the cafeteria."],
["library","kutubxona","I borrow books from the library."],
["playground","maydoncha","Children play in the playground."],
["gym","sport zali","We have Physical Education in the gym."],
["schoolbag","maktab sumkasi","My schoolbag is heavy."],
["textbook","darslik","Open your textbook to page ten."],
["project","loyiha","We are doing a science project."]
],
dl:[
["Teacher","Why were you absent yesterday?","Kecha nega kelmagansiz?"],
["Student","I was sick. Sorry, I'm late today too.","Men kasal edim. Kechirasiz, bugun ham kech qoldim."],
["Teacher","That's okay. Do you have your homework?","Hechqisi yo'q. Uy vazifangiz bormi?"],
["Student","Yes, here it is.","Ha, mana."],
["Teacher","Good. Don't forget the test tomorrow.","Yaxshi. Ertagi testni unutmang."]
],
g:["Past of 'To Be': was / were",
"The past form of 'am/is' is 'was'; the past form of 'are' is 'were': 'I was sick.' 'They were absent.' 'She was late.' This is your first step into the past tense — you'll learn more past tense verbs soon.",
"'To Be' fe'lining o'tgan zamoni: was / were",
"'Am/is' ning o'tgan zamon shakli — 'was'; 'are' ning o'tgan zamon shakli — 'were': 'I was sick.' (Men kasal edim.) 'They were absent.' (Ular kelmagan edi.) 'She was late.' (U kech qolgan edi.) Bu o'tgan zamonga birinchi qadamingiz."],
qz:[
["Choose the correct sentence.",["I were sick yesterday.","I was sick yesterday.","I am sick yesterday.","I is sick yesterday."],1],
["'Uy vazifasi' in English is ___.",["Textbook","Homework","Project","Exam"],1],
["Choose the correct sentence.",["They was absent.","They were absent.","They is absent.","They are absent yesterday."],1],
["'Kutubxona' in English is ___.",["Cafeteria","Playground","Library","Gym"],2]
],
sp:["Tell a short story: were you ever absent or late for school? What happened?","Qisqa hikoya ayting: hech maktabga kelmagan yoki kech qolganmisiz? Nima bo'lgan edi?"],
ls:["Role-play: one student is the teacher taking attendance, others answer 'present' or explain being absent.","Rolli o'yin: bir o'quvchi davomatni tekshiruvchi o'qituvchi, boshqalari 'hozirman' deydi yoki kelmaganini tushuntiradi.",
"In pairs, talk about a time you were late or absent from school.","Juftlikda maktabga kech qolgan yoki kelmagan vaqtingiz haqida gapiring."]
},

{d:20,w:4,wt:"Home & School",wtUz:"Uy va maktab",rev:true,
t:"Week 4 Review — Home & School Check",tu:"4-hafta Takrorlash — Uy va Maktab Tekshiruvi",
qz:[
["'Oshxona' in English is ___.",["Bedroom","Bathroom","Kitchen","Living room"],2],
["Choose the correct preposition: 'The book is ___ the table.'",["in","on","under","next to"],1],
["'Shkaf' in English is ___.",["Sofa","Wardrobe","Shelf","Fridge"],1],
["'Sevimli' in English is ___.",["Difficult","Favorite","Easy","Subject"],1],
["Which subject teaches about plants and animals?",["Chemistry","Physics","Biology","Geography"],2],
["Choose the correct sentence.",["I were sick yesterday.","I was sick yesterday.","I am sick yesterday.","I is sick yesterday."],1],
["'Kutubxona' in English is ___.",["Cafeteria","Playground","Library","Gym"],2],
["Choose the correct sentence.",["My house have a garden.","My house has a garden.","My house having a garden.","My house is have a garden."],1]
],
sp:["Describe your house, your favorite school subject, and one memory from school.","Uyingizni, sevimli maktab faningizni va maktabdan bitta xotirangizni tasvirlab bering."],
ls:["Class review game: teacher shows pictures (house, subject icons), students name them fast.","Sinf takrorlash o'yini: o'qituvchi rasm ko'rsatadi, o'quvchilar tezda nomlaydi.",
"In pairs, review: describe your house and favorite subjects to each other.","Juftlikda takrorlang: uyingiz va sevimli fanlaringizni bir-biringizga tasvirlang."]
}

];

if (typeof module !== "undefined") module.exports = CURRICULUM;
