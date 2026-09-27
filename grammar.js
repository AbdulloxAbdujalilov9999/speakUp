// SpeakUp Grammar Book — 38 units across 8 categories, Foundations through Intermediate (B1)
// Unit schema: {id, cat, title, titleUz, ruleUz, explain[], examples[[en,uz]...], mistakeWrong, mistakeRight, mistakeWhy, quiz[[q,[4 choices],correctIdx]...]}

const GRAMMAR = [

{id:"alphabet-sounds", cat:"Foundations",
title:"The English Alphabet & Sounds", titleUz:"Ingliz alifbosi va tovushlar",
ruleUz:"Ingliz tilida 26 ta harf bor, ulardan 5 tasi unli (A,E,I,O,U), qolganlari undoshdir; imlo har doim talaffuzga mos kelavermaydi.",
explain:[
"English has 26 letters, but only 5 of them (A, E, I, O, U) are vowels — the rest are consonants. Unlike Uzbek, English spelling doesn't always match pronunciation: the same letter can sound different in different words (compare the 'a' in 'cat' and 'cake').",
"Learning to say each letter's name correctly (especially tricky ones like 'H', 'J', 'Q', 'W', 'Y') helps you spell words out loud and understand someone spelling a word to you."
],
examples:[
["My name is spelled A-Z-I-Z.","Mening ismim A-Z-I-Z deb yoziladi."],
["The word 'cat' has three letters: C, A, T.","'Cat' so'zida uchta harf bor: C, A, T."],
["A, E, I, O, and U are vowels.","A, E, I, O va U — unli tovushlardir."],
["How do you spell your surname?","Familiyangizni qanday harflaysiz?"],
["The letter 'W' is called 'double-u'.","'W' harfi 'dabl-yu' deb ataladi."]
],
mistakeWrong:"Saying English letters with Uzbek/Russian letter names, e.g. calling 'H' 'ash' or 'W' 've'.",
mistakeRight:"Use the correct English names: H = 'aitch', W = 'double-u', J = 'jay'.",
mistakeWhy:"The Uzbek and Russian alphabets share similar-looking letters with completely different English names — mixing them up confuses English listeners when you spell out loud.",
quiz:[
["How many letters are in the English alphabet?",["24","25","26","27"],2],
["Which of these is a vowel?",["B","C","E","D"],2],
["How do you spell 'cat'?",["K-A-T","C-A-T","C-A-T-E","S-A-T"],1],
["What is the English name for the letter 'W'?",["Double-u","Ve","Vu","Wu"],0],
["Which of these are consonants?",["A, E","I, O","B, C","U, A"],2],
["What do we call saying each letter of a word out loud?",["Reading","Spelling","Writing","Speaking"],1]
]},

{id:"articles", cat:"Foundations",
title:"Nouns, Articles & Plurals — a / an / the", titleUz:"Otlar, artikllar va ko'plik — a / an / the",
ruleUz:"'A/an' notanish yoki birinchi marta tilga olinayotgan birlik otlar bilan, 'the' allaqachon ma'lum bo'lgan narsa bilan ishlatiladi; ko'plik uchun otga -s qo'shiladi.",
explain:[
"Use 'a' before a consonant sound and 'an' before a vowel sound, for a singular, non-specific noun mentioned for the first time: 'a book', 'an apple'. Use 'the' when both speakers know exactly which thing is meant: 'Close the door' (a specific door you both know).",
"Uzbek has no articles at all, so this is one of the hardest habits to build — English nouns almost always need 'a/an', 'the', or a number/plural -s in front of them."
],
examples:[
["I have a dog and a cat.","Mening itim va mushugim bor."],
["She ate an apple for breakfast.","U nonushtaga olma yedi."],
["Please close the window.","Iltimos, derazani yoping."],
["I have two books on the table.","Stolda ikkita kitobim bor."],
["He is a doctor.","U shifokor."]
],
mistakeWrong:"I am student. I like read book.",
mistakeRight:"I am a student. I like reading books.",
mistakeWhy:"Uzbek nouns work fine with no article at all ('talaba' = student, no extra word needed), so Uzbek speakers often drop 'a/an/the' entirely in English, which sounds incomplete to native ears.",
quiz:[
["Choose the correct article: '___ apple a day keeps you healthy.'",["A","An","The","No article"],1],
["Choose the correct sentence.",["I am student.","I am a student.","I am the student.","I student am."],1],
["When do we use 'the'?",["For any noun","When both people know exactly which one","Only for plural nouns","Never in speech"],1],
["Choose the correct article: 'I saw ___ cat in the garden.'",["a","an","the","no article"],0],
["What is the plural of 'book'?",["Book","Books","Bookes","Booken"],1],
["Choose the correct sentence.",["She has a books.","She has books.","She has the books a.","She has an books."],1]
]},

{id:"to-be", cat:"Foundations",
title:"The Verb 'To Be' — am / is / are", titleUz:"'To Be' fe'li — am / is / are",
ruleUz:"'To be' egaga qarab shaklini o'zgartiradi: I am, You/We/They are, He/She/It is; bu fe'l ismni, kasbni yoki holatni bog'lash uchun ishlatiladi.",
explain:[
"'To be' changes form depending on the subject: I am, you are, he/she/it is, we are, they are. It connects a subject to information about it — a name, a job, a feeling: 'I am Aziz.' 'She is a doctor.' 'They are happy.'",
"There is no separate word for 'is/are/am' in Uzbek present tense (it's built into the ending or omitted), so learners often forget it in English — but in English, it is required in every sentence like this."
],
examples:[
["I am a student.","Men o'quvchiman."],
["You are my friend.","Siz mening do'stimsiz."],
["He is a teacher.","U o'qituvchi."],
["We are happy today.","Biz bugun xursandmiz."],
["They are from Uzbekistan.","Ular O'zbekistondan."]
],
mistakeWrong:"He drive fast. She tired.",
mistakeRight:"He is driving fast. She is tired.",
mistakeWhy:"Uzbek doesn't need a separate linking verb for 'she is tired' — the adjective alone can carry the meaning. In English, 'to be' can never be dropped.",
quiz:[
["Choose the correct word: 'She ___ a doctor.'",["am","is","are","be"],1],
["Choose the correct word: 'They ___ students.'",["am","is","are","be"],2],
["Choose the correct word: 'I ___ happy.'",["am","is","are","be"],0],
["Choose the correct sentence.",["He are tired.","He is tired.","He am tired.","He tired."],1],
["Choose the correct word: 'We ___ from Uzbekistan.'",["am","is","are","be"],2],
["What is the negative of 'She is happy'?",["She isn't happy.","She aren't happy.","She amn't happy.","She not happy."],0]
]},

{id:"pronouns-possessives", cat:"Foundations",
title:"Subject Pronouns & Possessives", titleUz:"Ega olmoshlari va egalik olmoshlari",
ruleUz:"Ega olmoshlari (I, you, he...) gapning egasi o'rnida, egalik olmoshlari (my, your, his...) esa otdan oldin kelib, kimga tegishli ekanini bildiradi.",
explain:[
"Subject pronouns (I, you, he, she, it, we, they) replace a noun as the subject of a sentence: 'Aziz is tall.' → 'He is tall.' Possessive adjectives (my, your, his, her, its, our, their) go before a noun to show ownership: 'my book', 'her phone'.",
"A key difference from Uzbek: English uses 'his' for something belonging to a male and 'her' for a female, regardless of the object's own gender — Uzbek uses one word for both."
],
examples:[
["He is my brother. His name is Aziz.","U mening akam. Uning ismi Aziz."],
["She is my sister. Her name is Malika.","U mening opam. Uning ismi Malika."],
["We love our country.","Biz o'z vatanimizni sevamiz."],
["They lost their bags.","Ular sumkalarini yo'qotishdi."],
["It is a cat. Its tail is long.","Bu mushuk. Uning dumi uzun."]
],
mistakeWrong:"This is her brother (talking about a boy's brother).",
mistakeRight:"This is his brother.",
mistakeWhy:"Uzbek doesn't distinguish 'his' and 'her' by the owner's gender, so learners often pick the wrong one — remember: it depends on who OWNS the thing, not the thing itself.",
quiz:[
["Choose the correct possessive: 'This is Aziz. ___ book is red.'",["Her","His","Its","Their"],1],
["Choose the correct subject pronoun for 'Malika and Aziz'.",["He","She","It","They"],3],
["Choose the correct sentence.",["Me is tired.","I am tired.","I is tired.","Mine is tired."],1],
["'Uning dumi' (mushuk haqida) in English is ___.",["His tail","Her tail","Its tail","Their tail"],2],
["Choose the correct possessive: 'We lost ___ keys.'",["my","your","our","its"],2],
["Choose the correct sentence.",["Her is a teacher.","She is a teacher.","Hers is a teacher.","She's teacher."],1]
]},

{id:"word-order", cat:"Foundations",
title:"Basic Word Order — Subject + Verb + Object", titleUz:"Asosiy so'z tartibi — Ega + Kesim + To'ldiruvchi",
ruleUz:"Ingliz tilida gap tartibi qat'iy: Ega (kim/nima) + Kesim (fe'l) + To'ldiruvchi (nima/kimni), o'zbek tilidagi kabi erkin emas.",
explain:[
"English word order is fixed: Subject + Verb + Object (SVO): 'I eat rice.' Unlike Uzbek, where word order can move around because endings show each word's role, English relies on position — moving the words around changes or destroys the meaning.",
"Time and place usually go at the end: 'I study English at school every day' (not at the beginning, as is common in Uzbek)."
],
examples:[
["I eat rice every day.","Men har kuni guruch yeyman."],
["She reads a book in the evening.","U kechqurun kitob o'qiydi."],
["We play football on Sundays.","Biz yakshanba kunlari futbol o'ynaymiz."],
["He drinks tea in the morning.","U ertalab choy ichadi."],
["They study English at school.","Ular maktabda ingliz tilini o'rganishadi."]
],
mistakeWrong:"Rice I eat every day. (word-for-word Uzbek order)",
mistakeRight:"I eat rice every day.",
mistakeWhy:"Uzbek naturally puts the object before the verb (Men guruch yeyman = I rice eat); translating word-for-word into English breaks the fixed Subject-Verb-Object order that English requires.",
quiz:[
["Choose the correct word order.",["Rice I eat.","I eat rice.","Eat I rice.","I rice eat."],1],
["Choose the correct sentence.",["Football we play on Sundays.","We play football on Sundays.","We on Sundays play football.","Play we football on Sundays."],1],
["Where does the time expression usually go in a simple English sentence?",["At the beginning","In the middle","At the end","It doesn't matter"],2],
["Choose the correct sentence.",["Tea he drinks in the morning.","He drinks tea in the morning.","He in the morning drinks tea.","Drinks he tea in the morning."],1],
["What is the basic English word order pattern called?",["OSV","SVO","VSO","OVS"],1],
["Choose the correct sentence.",["English at school they study.","They study English at school.","They English study at school.","At school English they study."],1]
]},

{id:"numbers-cardinal-ordinal", cat:"Foundations",
title:"Numbers — Cardinal & Ordinal", titleUz:"Sonlar — Miqdor va tartib sonlar",
ruleUz:"Miqdor sonlar (one, two, three) sanoq uchun, tartib sonlar (first, second, third) esa tartib yoki o'rinni bildirish uchun ishlatiladi.",
explain:[
"Cardinal numbers (one, two, three...) are used for counting. From thirteen to nineteen, we add '-teen'; note the irregular spellings of 'thirteen' and 'fifteen'. Ordinal numbers (first, second, third, fourth...) show order or position — from 'fourth' onward, just add '-th' to the cardinal number.",
"We use ordinals for dates ('the third of May'), floors, grades, and rankings ('I came second in the race')."
],
examples:[
["I have twenty students in my class.","Mening sinfimda yigirmata o'quvchi bor."],
["Today is the fifth of May.","Bugun mayning beshinchisi."],
["She came first in the competition.","U musobaqada birinchi o'rinni oldi."],
["I am in the seventh grade.","Men yettinchi sinfdaman."],
["He is thirty-two years old.","U o'ttiz ikki yoshda."]
],
mistakeWrong:"I am in seven grade. Today is five of May.",
mistakeRight:"I am in the seventh grade. Today is the fifth of May.",
mistakeWhy:"Uzbek uses plain cardinal numbers for grades and dates (7-sinf, 5-may), so learners often forget to switch to the ordinal form (-th) and the article 'the' that English requires here.",
quiz:[
["What number is 'fifteen'?",["5","50","15","51"],2],
["What is the ordinal form of 'four'?",["Four","Fourth","Fourteen","Forty"],1],
["Choose the correct sentence.",["I am in seven grade.","I am in the seventh grade.","I am in seventh grade the.","I the seventh grade am."],1],
["How do you say '20' in English?",["Twelve","Twenty","Ten","Two"],1],
["Which number comes right after 'ninety-nine'?",["A thousand","Nine hundred","One hundred","Ninety-ten"],2],
["Choose the correct ordinal for '1st'.",["Onest","First","Oneth","Firster"],1]
]},

{id:"there-is-are", cat:"Foundations",
title:"There is / There are", titleUz:"There is / There are",
ruleUz:"Biror narsaning mavjudligini aytish uchun birlik/sanalmaydigan otlar bilan 'There is', ko'plik otlar bilan 'There are' ishlatiladi.",
explain:[
"We use 'There is' with singular or uncountable nouns and 'There are' with plural nouns to say something exists: 'There is a river near my village.' 'There are many trees in the forest.'",
"Negative: 'There isn't a lake here.' 'There aren't any mountains.' Question: 'Is there a map?' 'Are there any lions?' — short answers use 'is/isn't' or 'are/aren't', not 'it' or 'they'."
],
examples:[
["There is a park near my house.","Uyim yaqinida park bor."],
["There are twenty students in my class.","Mening sinfimda yigirmata o'quvchi bor."],
["There isn't any milk in the fridge.","Muzlatgichda sut yo'q."],
["Is there a pharmacy nearby?","Yaqin atrofda dorixona bormi?"],
["Are there any tigers in this zoo?","Bu hayvonot bog'ida yo'lbarslar bormi?"]
],
mistakeWrong:"It has a park near my house. They are twenty students.",
mistakeRight:"There is a park near my house. There are twenty students.",
mistakeWhy:"Uzbek often expresses existence with 'bor' attached to the thing itself, which learners translate as 'it has' or 'they are' — English needs the fixed 'there is/are' opener instead.",
quiz:[
["Choose the correct sentence.",["There is many trees.","There are many trees.","There a tree.","Tree there is."],1],
["Choose the correct question.",["Is there a map?","Is there maps?","Are there a map?","There is a map?"],0],
["Choose the correct short answer for 'Are there any lions?' (yes)",["Yes, there is.","Yes, there are.","Yes, it is.","Yes, they are."],1],
["Choose the correct negative sentence.",["There isn't any milk.","There not any milk.","There doesn't milk.","Milk there isn't."],0],
["Choose the correct sentence.",["There are a river.","There is a river.","There a river is.","Is there a river."],1],
["What form do we use with plural nouns?",["There is","There are","There has","There have"],1]
]}
,

{id:"present-simple", cat:"Tenses",
title:"Present Simple — Routines, Facts & Rules", titleUz:"Hozirgi oddiy zamon — odatlar, faktlar va qoidalar",
ruleUz:"Present Simple odatiy harakatlar, faktlar va qoidalar uchun ishlatiladi; he/she/it bilan fe'lga -s qo'shiladi.",
explain:[
"Use the present simple for routines, facts, and rules that are always true — not just what's happening this second: 'I study every day.' (a routine) 'Water boils at 100 degrees.' (a fact) 'Students wear a uniform.' (a rule)",
"With he/she/it, add -s (or -es) to the verb: I study → she studies, I go → he goes, I watch → she watches. This -s is easy to forget but essential."
],
examples:[
["I study English every day.","Men har kuni ingliz tilini o'rganaman."],
["She works at a hospital.","U kasalxonada ishlaydi."],
["Water boils at 100 degrees.","Suv 100 gradusda qaynaydi."],
["We don't eat meat on Mondays.","Biz dushanba kunlari go'sht yemaymiz."],
["Does he speak English?","U ingliz tilida gapiradimi?"]
],
mistakeWrong:"He drive fast. She like music.",
mistakeRight:"He drives fast. She likes music.",
mistakeWhy:"Uzbek verb endings don't map onto English -s the same way, so it's easy to forget the -s on he/she/it — but native speakers hear a missing -s immediately.",
quiz:[
["'He ___ (drive) a car.'",["drive","drives","driving","drove"],1],
["Choose the correct negative.",["He don't like tea.","He doesn't like tea.","He not like tea.","He isn't like tea."],1],
["Choose the correct question.",["Does she works here?","Does she work here?","Do she work here?","Is she work here?"],1],
["'Study' with 'he' becomes ___.",["Studys","Studies","Studying","Studyes"],1],
["Choose the correct sentence for a fact.",["The sun rise in the east.","The sun rises in the east.","The sun rising in the east.","The sun rised in the east."],1],
["What do we add to verbs with he/she/it?",["-ing","-ed","-s","-er"],2]
]},

{id:"present-continuous", cat:"Tenses",
title:"Present Continuous — Right Now", titleUz:"Present Continuous — hozir",
ruleUz:"Hozir sodir bo'layotgan harakatlar uchun 'am/is/are + fe'l-ing' ishlatiladi, odatlar uchun emas.",
explain:[
"Form: am/is/are + verb-ing. Use it for actions happening right now, not habits: 'I am studying now.' (not 'I study now.')",
"Spelling: most verbs just add -ing (play→playing); verbs ending in silent -e drop it (write→writing); short verbs double the last consonant (run→running)."
],
examples:[
["I am studying English now.","Men hozir ingliz tilini o'qiyapman."],
["She is wearing a red dress today.","U bugun qizil libos kiyib olgan."],
["They are playing football right now.","Ular hozir futbol o'ynashyapti."],
["What are you doing?","Nima qilyapsiz?"],
["He isn't listening to me.","U meni tinglamayapti."]
],
mistakeWrong:"I study English now. (using present simple for a right-now action)",
mistakeRight:"I am studying English now.",
mistakeWhy:"Uzbek present tense often covers both habitual and current actions with one form, so learners use present simple for 'right now' situations where English requires the continuous.",
quiz:[
["Choose the correct sentence about now.",["I study English now.","I am studying English now.","I studying English now.","I studies English now."],1],
["What is the -ing form of 'write'?",["Writeing","Writting","Writing","Wrieing"],2],
["What is the -ing form of 'run'?",["Runing","Running","Runeing","Run-ing"],1],
["Choose the correct question.",["What you are doing?","What are you doing?","What doing you are?","Are you what doing?"],1],
["Choose the correct negative.",["She not is watching TV.","She isn't watching TV.","She doesn't watching TV.","She not watching TV."],1],
["When do we use present continuous?",["Habits","General facts","Actions happening now","Permanent states"],2]
]},

{id:"past-simple", cat:"Tenses",
title:"Past Simple — Reporting What Happened", titleUz:"Past Simple — sodir bo'lgan voqealarni aytish",
ruleUz:"Qoidali fe'llarga -ed qo'shiladi, ko'plab keng tarqalgan fe'llar esa istisno (irregular) bo'lib, butunlay o'zgaradi.",
explain:[
"Regular verbs add -ed for the past: play→played, watch→watched. Many common verbs are irregular and change completely: go→went, eat→ate, buy→bought — there's no shortcut, you memorize these through practice.",
"Negative: 'didn't + base verb' (I didn't go). Question: 'Did + subject + base verb?' (Did you go?) — never add -ed in negatives or questions."
],
examples:[
["I visited my grandmother last week.","O'tgan hafta buvimga tashrif buyurdim."],
["She went to the market yesterday.","U kecha bozorga bordi."],
["We didn't watch TV last night.","Biz kecha kechqurun televizor ko'rmadik."],
["Did you finish your homework?","Uy vazifangizni tugatdingizmi?"],
["He bought a new phone.","U yangi telefon sotib oldi."]
],
mistakeWrong:"Yesterday I go to school. I eated breakfast.",
mistakeRight:"Yesterday I went to school. I ate breakfast.",
mistakeWhy:"Many of the most common English verbs are irregular and don't follow the -ed rule; learners often regularize them ('eated' instead of 'ate') by analogy with regular verbs.",
quiz:[
["What is the past tense of 'play'?",["Played","Player","Playing","Plays"],0],
["What is the past tense of 'go'?",["Goed","Went","Gone","Going"],1],
["Choose the correct negative.",["I not watched TV.","I didn't watch TV.","I don't watched TV.","I wasn't watch TV."],1],
["Choose the correct question.",["Did you went there?","Did you go there?","Do you went there?","Were you go there?"],1],
["What is the past tense of 'buy'?",["Buyed","Bought","Buying","Buys"],1],
["Choose the correct sentence.",["She study yesterday.","She studied yesterday.","She studies yesterday.","She studying yesterday."],1]
]},

{id:"past-continuous", cat:"Tenses",
title:"Past Continuous — What Was Happening", titleUz:"Past Continuous — nima sodir bo'layotgan edi",
ruleUz:"O'tmishda ma'lum bir vaqtda davom etayotgan harakat uchun 'was/were + fe'l-ing' ishlatiladi.",
explain:[
"We use 'was/were + verb-ing' for an action that was in progress at a specific time in the past: 'I was doing my homework at 8 PM.'",
"We often combine it with past simple using 'when' or 'while': 'I was sleeping when the phone rang.' (a long action interrupted by a short one)"
],
examples:[
["I was sleeping when you called.","Siz qo'ng'iroq qilganingizda men uxlayotgan edim."],
["They were playing football at 5 PM.","Ular soat 17:00 da futbol o'ynayotgan edi."],
["What were you doing last night?","Kecha kechqurun nima qilayotgan edingiz?"],
["She wasn't listening to the teacher.","U o'qituvchini tinglamayotgan edi."],
["While I was cooking, the phone rang.","Men ovqat pishirayotganimda telefon jiringladi."]
],
mistakeWrong:"When you called, I slept. (using simple past for an interrupted ongoing action)",
mistakeRight:"When you called, I was sleeping.",
mistakeWhy:"Uzbek doesn't force this same distinction, so learners often use simple past everywhere, missing the 'action in progress' meaning that past continuous carries.",
quiz:[
["Choose the correct sentence.",["I was sleep when you called.","I was sleeping when you called.","I sleeping when you called.","I slept when you calling."],1],
["Choose the correct past continuous form for 'they'.",["was watching","were watching","is watching","are watching"],1],
["What does past continuous show?",["A general fact","A finished single action","An action in progress at a past time","A future plan"],2],
["Choose the correct question.",["What you were doing?","What were you doing?","What was you doing?","Were you what doing?"],1],
["Choose the correct sentence.",["While I cooking, phone rang.","While I was cooking, the phone rang.","While I cook, the phone rang.","While I was cook, the phone rang."],1],
["What is the negative of 'She was working'?",["She wasn't working.","She isn't working.","She didn't working.","She not working."],0]
]},

{id:"present-perfect", cat:"Tenses",
title:"Present Perfect — Experience & Recent Events", titleUz:"Present Perfect — tajriba va yaqinda sodir bo'lgan voqealar",
ruleUz:"Aniq vaqtni aytmasdan hayotiy tajribalar yoki yaqinda sodir bo'lgan voqealar haqida gapirish uchun 'have/has + past participle' ishlatiladi.",
explain:[
"We use 'have/has + past participle' to talk about life experiences without saying exactly when, or recent events with a present result: 'I have visited Turkey.' 'She has just finished her homework.'",
"Use 'for' with a period of time, 'since' with a starting point: 'I have lived here for five years / since 2020.' Never combine present perfect with a specific past time word like 'yesterday' or 'last year' — those need past simple instead."
],
examples:[
["I have visited Turkey twice.","Men Turkiyaga ikki marta borganman."],
["Have you ever eaten sushi?","Hech sushi yeganmisiz?"],
["She has just finished her homework.","U hozirgina uy vazifasini tugatdi."],
["We have lived here for five years.","Biz bu yerda besh yildan beri yashaymiz."],
["He hasn't called me yet.","U menga hali qo'ng'iroq qilmadi."]
],
mistakeWrong:"I have visited Turkey last year. (mixing present perfect with a specific past time)",
mistakeRight:"I visited Turkey last year. / I have visited Turkey before.",
mistakeWhy:"Uzbek doesn't separate 'a finished action at a specific time' from 'an experience at some unspecified time', so learners mix present perfect with words like 'yesterday' or 'last year', which only work with past simple.",
quiz:[
["Choose the correct question about experience.",["Did you ever visit London?","Have you ever visited London?","Do you ever visited London?","Are you ever visiting London?"],1],
["Choose the correct word for a period of time.",["since","for","ever","yet"],1],
["Choose the correct word for a starting point.",["since","for","already","yet"],0],
["Choose the correct sentence.",["I have finished already my homework.","I have already finished my homework.","I already have finished my homework.","I have finished my homework already yet."],1],
["Which time word should NOT be used with present perfect?",["ever","already","yesterday","just"],2],
["Choose the correct sentence.",["She has went there.","She has gone there.","She has go there.","She have gone there."],1]
]},

{id:"future", cat:"Tenses",
title:"Talking About the Future — will / going to", titleUz:"Kelajak haqida gapirish — will / going to",
ruleUz:"'Going to' oldindan qaror qilingan rejalar uchun, 'will' esa spontan qarorlar va bashoratlar uchun ishlatiladi.",
explain:[
"Use 'am/is/are + going to + verb' for plans already decided before speaking: 'I am going to visit my grandmother tomorrow.' Use 'will + verb' for decisions made at the moment of speaking, promises, and predictions/opinions: 'I'll help you.' 'I think it will rain.'",
"Both are common and useful — the key difference is whether the decision was already made (going to) or is happening right now, in the moment (will)."
],
examples:[
["I am going to visit my grandmother tomorrow.","Ertaga buvimga borishni rejalashtiryapman."],
["I think it will rain tomorrow.","Menimcha, ertaga yomg'ir yog'adi."],
["She is going to study medicine.","U tibbiyotni o'rganishni rejalashtiryapti."],
["I'll help you with your homework.","Men uy vazifangizda sizga yordam beraman."],
["What are you going to do this weekend?","Bu dam olish kunlari nima qilmoqchisiz?"]
],
mistakeWrong:"I will visit my grandmother tomorrow. (for a plan already decided days ago)",
mistakeRight:"I am going to visit my grandmother tomorrow.",
mistakeWhy:"Uzbek doesn't clearly separate spontaneous decisions from decided plans, so learners use one future form for everything; English prefers 'going to' for plans already decided before the moment of speaking.",
quiz:[
["Choose the correct sentence about a decided plan.",["I go to visit my aunt.","I am going to visit my aunt.","I going to visit my aunt.","I am go to visit my aunt."],1],
["'The phone is ringing!' — choose the correct spontaneous decision.",["I'm going to answer it.","I'll answer it.","I answer it.","I answered it."],1],
["Choose the correct question.",["What you are going to do?","What are you going to do?","What going you to do?","Are what you going to do?"],1],
["'Look at those clouds! It ___ rain.'",["will","is going to","go to","going"],1],
["Choose the correct sentence.",["She will going to study medicine.","She is going to study medicine.","She go to study medicine.","She will studies medicine."],1],
["Which form is better for a plan decided before now?",["will","going to","can","must"],1]
]},

{id:"used-to", cat:"Tenses",
title:"Used to — Past Habits That Changed", titleUz:"Used to — o'zgargan o'tmish odatlari",
ruleUz:"'Used to + fe'l' endi to'g'ri bo'lmagan o'tmish odati yoki holatini bildiradi.",
explain:[
"'Used to + verb' describes a repeated action or state in the past that is no longer true now: 'I used to want to be a doctor, but now I want to be an engineer.' 'She used to live in Samarkand.'",
"Negative: 'didn't use to' (no 'd' in the negative). Question: 'Did you use to...?' This emphasizes something was a habit or state over time, not a one-time event."
],
examples:[
["I used to play with toy cars when I was young.","Kichikligimda o'yinchoq mashinalar bilan o'ynardim."],
["She used to be shy, but now she is confident.","U avval uyatchan edi, lekin hozir o'ziga ishongan."],
["We didn't use to have a computer at home.","Bizda avval uyda kompyuter yo'q edi."],
["Did you use to live in a village?","Avval qishloqda yashaganmisiz?"],
["He used to smoke, but he quit last year.","U avval chekar edi, lekin o'tgan yili tashladi."]
],
mistakeWrong:"I used to studying English. I use to played football.",
mistakeRight:"I used to study English. I used to play football.",
mistakeWhy:"Learners often add -ing after 'used to' or forget the 'd' — 'used to' is always followed by the base form of the verb.",
quiz:[
["Choose the correct sentence about a changed habit.",["I use to want to be a doctor.","I used to want to be a doctor.","I am used to want to be a doctor.","I was use to want to be a doctor."],1],
["Choose the correct negative.",["I didn't used to like tea.","I didn't use to like tea.","I don't used to like tea.","I not used to like tea."],1],
["Choose the correct question.",["Did you used to play chess?","Did you use to play chess?","Do you use to play chess?","Were you use to play chess?"],1],
["What does 'used to' show?",["A single past action","A repeated past habit that is no longer true","A future plan","A present habit"],1],
["Choose the correct sentence.",["She used to living in Samarkand.","She used to live in Samarkand.","She use to live in Samarkand.","She was used to live in Samarkand."],1],
["What form follows 'used to'?",["-ing form","base verb","past form","to + verb"],1]
]}
,

{id:"yesno-questions", cat:"Questions & Negatives",
title:"Yes/No Questions — Do / Does / Did", titleUz:"Ha/Yo'q savollari — Do / Does / Did",
ruleUz:"Oddiy zamonlarda ha/yo'q savollari yordamchi fe'l (do/does/did) + ega + asosiy fe'l tartibida tuziladi.",
explain:[
"To make a yes/no question with a main verb, use 'Do/Does/Did + subject + base verb?': 'Do you like tea?' 'Does she speak English?' 'Did you finish?'",
"For 'to be' and modal verbs (can, will, must...), just swap the subject and verb: 'Is he a teacher?' 'Can you swim?' — no extra 'do' is needed here."
],
examples:[
["Do you like tea?","Choy yoqtirasizmi?"],
["Does she speak English?","U ingliz tilida gapiradimi?"],
["Did you finish your homework?","Uy vazifangizni tugatdingizmi?"],
["Is he a teacher?","U o'qituvchimi?"],
["Can you swim?","Suza olasizmi?"]
],
mistakeWrong:"You like tea? She speaks English?",
mistakeRight:"Do you like tea? Does she speak English?",
mistakeWhy:"Uzbek forms yes/no questions just by adding a question particle or intonation to the statement, so learners often skip the English auxiliary 'do/does/did' entirely.",
quiz:[
["Choose the correct question.",["You like tea?","Do you like tea?","Does you like tea?","Are you like tea?"],1],
["Choose the correct question.",["Does she speaks English?","Does she speak English?","Do she speak English?","Is she speak English?"],1],
["Choose the correct past question.",["Did you went there?","Did you go there?","Do you went there?","Were you go there?"],1],
["Which auxiliary do we use with he/she/it in the present?",["do","does","did","is"],1],
["Choose the correct short answer for 'Do you like coffee?' (yes)",["Yes, I like.","Yes, I do.","Yes, I am.","Yes, I does."],1],
["Choose the correct question with 'to be'.",["Do you happy?","Are you happy?","Does you happy?","Is happy you?"],1]
]},

{id:"wh-questions", cat:"Questions & Negatives",
title:"Wh- Questions — What / Where / When / Why / How", titleUz:"Wh- savollar — What / Where / When / Why / How",
ruleUz:"Wh-savol tartibi: savol so'zi + yordamchi fe'l + ega + fe'l.",
explain:[
"Wh-question word order: Question word + auxiliary (do/does/is/are) + subject + verb: 'Where do you live?' 'What does she like?' The question word always comes first.",
"Common question words: who (person), what (thing), where (place), when (time), why (reason), how (manner/way), which (choice), whose (owner)."
],
examples:[
["Where do you live?","Qayerda yashaysiz?"],
["What does she like?","U nimani yoqtiradi?"],
["When is your birthday?","Tug'ilgan kuningiz qachon?"],
["Why are you late?","Nega kech qoldingiz?"],
["How long is the journey?","Sayohat qancha davom etadi?"]
],
mistakeWrong:"Where you live? What she like?",
mistakeRight:"Where do you live? What does she like?",
mistakeWhy:"Learners often drop the auxiliary verb after the question word, copying a pattern that works in Uzbek but not English.",
quiz:[
["Choose the correct question word for asking about a person.",["What","Where","Who","When"],2],
["Choose the correct question.",["Where you live?","Where do you live?","Do you where live?","Where live you?"],1],
["Choose the correct question word for asking about a reason.",["How","Why","Which","Whose"],1],
["Choose the correct question.",["What does she like?","What she like?","What she likes?","Does what she like?"],0],
["Choose the correct question word for asking about time.",["Where","When","Why","Who"],1],
["Choose the correct question.",["How long is the journey?","How long the journey is?","Is how long the journey?","The journey how long is?"],0]
]},

{id:"negatives", cat:"Questions & Negatives",
title:"Negatives — don't / doesn't / didn't / isn't", titleUz:"Inkor gaplar — don't / doesn't / didn't / isn't",
ruleUz:"Asosiy fe'llar bilan don't/doesn't/didn't, 'to be' bilan isn't/aren't/wasn't/weren't, modal fe'llar bilan can't/won't kabi shakllar ishlatiladi.",
explain:[
"For main verbs, add 'don't/doesn't' (present) or 'didn't' (past) before the base verb: 'I don't like coffee.' 'She doesn't work on Sundays.' 'We didn't go.'",
"For 'to be', just add 'not' directly: 'He isn't at home.' For modal verbs, add 'not' after the modal: 'I can't swim.'"
],
examples:[
["I don't like coffee.","Men kofeni yoqtirmayman."],
["She doesn't work on Sundays.","U yakshanba kunlari ishlamaydi."],
["We didn't go to the party.","Biz ziyofatga bormadik."],
["He isn't at home.","U uyda emas."],
["I can't swim.","Men suza olmayman."]
],
mistakeWrong:"She not like tea. I no go to school yesterday.",
mistakeRight:"She doesn't like tea. I didn't go to school yesterday.",
mistakeWhy:"Uzbek negation attaches directly to the verb ending, so learners sometimes just add 'not' or 'no' in English without the correct auxiliary verb.",
quiz:[
["Choose the correct negative sentence.",["She not like tea.","She doesn't like tea.","She isn't like tea.","She don't like tea."],1],
["Choose the correct negative past sentence.",["I no went there.","I didn't go there.","I not went there.","I doesn't went there."],1],
["Choose the correct negative with 'to be'.",["He not is happy.","He isn't happy.","He doesn't happy.","He no happy."],1],
["Choose the correct negative with a modal.",["I can not to swim.","I can't swim.","I not can swim.","I don't can swim."],1],
["Which word alone is NOT enough to make an English verb negative?",["not","no","don't","isn't"],1],
["Choose the correct sentence.",["We didn't went to the party.","We didn't go to the party.","We not went to the party.","We didn't goes to the party."],1]
]},

{id:"question-tags", cat:"Questions & Negatives",
title:"Question Tags — aren't they? isn't it?", titleUz:"Qo'shimcha savollar — aren't they? isn't it?",
ruleUz:"Ijobiy gapga salbiy qo'shimcha savol, salbiy gapga esa ijobiy qo'shimcha savol qo'shiladi; ular gapning ega va fe'liga mos kelishi kerak.",
explain:[
"A question tag is a short question added to the end of a statement to check information or invite agreement. Positive statement gets a negative tag: 'They are famous, aren't they?' Negative statement gets a positive tag: 'You don't like it, do you?'",
"The tag must match the main sentence's verb and subject exactly — it's not just one fixed phrase for every sentence."
],
examples:[
["They are famous, aren't they?","Ular mashhur, shunday emasmi?"],
["You don't like it, do you?","Sizga yoqmaydi, shunday emasmi?"],
["She is a teacher, isn't she?","U o'qituvchi, shunday emasmi?"],
["You can swim, can't you?","Siz suza olasiz, shunday emasmi?"],
["He didn't call, did he?","U qo'ng'iroq qilmadi, shunday emasmi?"]
],
mistakeWrong:"You are a student, isn't it? (using one fixed tag for every sentence)",
mistakeRight:"You are a student, aren't you?",
mistakeWhy:"Many learners copy one fixed tag ('isn't it?') for every sentence, but English tags must match the subject and verb of the main sentence exactly.",
quiz:[
["Choose the correct tag: 'They are famous, ___?'",["isn't it?","aren't they?","don't they?","are they?"],1],
["Choose the correct tag: 'You don't like it, ___?'",["don't you?","do you?","don't you not?","are you?"],1],
["Choose the correct tag: 'She is a teacher, ___?'",["isn't it?","isn't she?","doesn't she?","is she?"],1],
["Choose the correct tag: 'You can swim, ___?'",["can't you?","don't you?","aren't you?","didn't you?"],0],
["Choose the correct tag: 'He didn't call, ___?'",["does he?","did he?","didn't he?","is he?"],1],
["What is the general rule for question tags?",["Always use 'isn't it'","A positive statement gets a negative tag and vice versa","Tags never change","Tags only work with 'to be'"],1]
]}
,

{id:"modals-ability", cat:"Modals",
title:"Can / Could — Ability & Permission", titleUz:"Can / Could — qobiliyat va ruxsat",
ruleUz:"'Can' hozirgi qobiliyat/ruxsat, 'could' o'tmish qobiliyati yoki odobli so'rov uchun ishlatiladi; modal fe'llar shaklini o'zgartirmaydi va 'to' talab qilmaydi.",
explain:[
"'Can' expresses present ability or permission: 'I can swim.' 'Can I go out?' 'Could' is the past form of ability: 'She could read when she was five,' and is also used for polite requests: 'Could you help me, please?'",
"Modal verbs like can/could never change form (no -s for he/she/it) and are never followed by 'to' — 'can swim', not 'can to swim' or 'can swims'."
],
examples:[
["I can swim very well.","Men juda yaxshi suza olaman."],
["She could read when she was five.","U besh yoshida o'qiy olar edi."],
["Can I go out, please?","Chiqsam bo'ladimi, iltimos?"],
["Could you help me, please?","Menga yordam bera olasizmi, iltimos?"],
["He can't speak French.","U fransuz tilida gapira olmaydi."]
],
mistakeWrong:"I can to swim. She can sings well.",
mistakeRight:"I can swim. She can sing well.",
mistakeWhy:"Learners often add 'to' after 'can' (copying the infinitive pattern of other verbs) or add -s for he/she/it — modal verbs never change form and are never followed by 'to'.",
quiz:[
["Choose the correct question.",["Can you to swim?","Can you swim?","You can swim?","Do you can swim?"],1],
["Choose the correct sentence for past ability.",["I can swim when I was young.","I could swim when I was young.","I swam can when I was young.","I am can swim when I was young."],1],
["Choose the correct polite request.",["Could you help me?","Could you to help me?","You could help me?","Helping could you me?"],0],
["Choose the correct sentence.",["She can sings well.","She can sing well.","She cans sing well.","She can singing well."],1],
["Which sentence shows permission?",["I can swim.","Can I go out?","She can dance.","Can you cook?"],1],
["Choose the correct contraction of 'can not'.",["Can't","Cann't","Ca'nt","Cant"],0]
]},

{id:"modals-obligation", cat:"Modals",
title:"Must / Have to — Obligation & Rules", titleUz:"Must / Have to — majburiyat va qoidalar",
ruleUz:"'Must' kuchli shaxsiy majburiyat/qoida, 'have to' tashqi majburiyat uchun ishlatiladi; 'mustn't' — taqiqlangan, 'don't have to' — zarur emas.",
explain:[
"'Must' and 'have to' both express obligation: 'Students must wear a uniform.' 'I have to finish my homework tonight.' They're often interchangeable, but 'must' feels more personal/strict and 'have to' more like an outside rule.",
"Their negatives mean very different things: 'mustn't' = forbidden ('You mustn't smoke here'), while 'don't have to' = not necessary ('You don't have to come if you're busy')."
],
examples:[
["Students must wear a uniform.","O'quvchilar forma kiyishlari shart."],
["I have to finish my homework tonight.","Men bugun kechqurun uy vazifamni tugatishim kerak."],
["You mustn't smoke here.","Bu yerda chekish taqiqlangan."],
["You don't have to come if you're busy.","Agar band bo'lsangiz, kelishingiz shart emas."],
["We must respect our teachers.","Biz o'qituvchilarimizni hurmat qilishimiz kerak."]
],
mistakeWrong:"You mustn't come if you're busy. (meant as 'it's not necessary')",
mistakeRight:"You don't have to come if you're busy.",
mistakeWhy:"Learners often confuse 'mustn't' (forbidden) with 'don't have to' (not necessary) — these have very different meanings even though both look like negatives of obligation.",
quiz:[
["Choose the correct sentence for a strong rule.",["We should protect endangered animals.","We must protect endangered animals.","We can protect endangered animals.","We recycle endangered animals."],1],
["What does 'mustn't' mean?",["Not necessary","Forbidden","Optional","Recommended"],1],
["What does 'don't have to' mean?",["Forbidden","Not necessary","Impossible","Required"],1],
["Choose the correct sentence.",["I have finish my homework.","I have to finish my homework.","I must to finish my homework.","I having to finish my homework."],1],
["Choose the correct sentence for a strict school rule.",["Students should wear a uniform.","Students must wear a uniform.","Students can wear a uniform.","Students like wearing a uniform."],1],
["Which phrase means 'forbidden'?",["don't have to","mustn't","don't must","not have to"],1]
]},

{id:"modals-advice", cat:"Modals",
title:"Should — Giving Advice", titleUz:"Should — maslahat berish",
ruleUz:"'Should/shouldn't' maslahat berish uchun ishlatiladi, bu 'must' dan yumshoqroq.",
explain:[
"'Should' and 'shouldn't' give advice or a recommendation, not a strict rule: 'You should study every day.' 'You shouldn't eat too much junk food.' It's much softer than 'must'.",
"Like all modal verbs, 'should' is followed by the base verb with no 'to' and never changes form: 'You should go' (not 'should to go' or 'should goes')."
],
examples:[
["You should study every day.","Siz har kuni o'qishingiz kerak."],
["You shouldn't eat too much junk food.","Siz juda ko'p foydasiz ovqat yemasligingiz kerak."],
["I think you should apologize.","Menimcha, siz kechirim so'rashingiz kerak."],
["Should I call the doctor?","Shifokorga qo'ng'iroq qilishim kerakmi?"],
["We should recycle more.","Biz ko'proq qayta ishlashimiz kerak."]
],
mistakeWrong:"You should to study more. / You must study more. (using 'must' for gentle advice)",
mistakeRight:"You should study more.",
mistakeWhy:"Learners add 'to' after 'should' like a normal verb, or use the much stronger 'must' when they only mean friendly advice — 'should' is softer and more appropriate for suggestions.",
quiz:[
["Choose the correct advice.",["You should to sleep more.","You should sleep more.","You should sleeping more.","You should slept more."],1],
["Choose the correct negative advice.",["You shouldn't eating junk food.","You shouldn't eat junk food.","You don't should eat junk food.","You not should eat junk food."],1],
["Choose the correct question for advice.",["Should I call the doctor?","Do I should call the doctor?","Should call I the doctor?","I should call the doctor?"],0],
["Which modal is softer, for friendly advice?",["must","have to","should","mustn't"],2],
["Choose the correct sentence.",["I think you should apologize.","I think you must apologize.","I think you should to apologize.","I think you should apologizing."],0],
["Choose the correct sentence.",["We should recycle more.","We should recycling more.","We should to recycle more.","We recycle should more."],0]
]},

{id:"modals-possibility", cat:"Modals",
title:"Might / May / Could — Possibility & Deduction", titleUz:"Might / May / Could — imkoniyat va xulosa",
ruleUz:"'Must be' — juda ishonchli ijobiy xulosa, 'might/could be' — mumkin, ishonchsiz, 'can't be' — juda ishonchli salbiy xulosa.",
explain:[
"We use modals to guess how likely something is, based on evidence: 'must be' (very sure, positive): 'He must be tired.' 'might/could be' (possible, not sure): 'She might be at home.' 'can't be' (very sure, negative): 'That can't be true.'",
"These are different from 'can', which is normally for ability or permission — 'can' is not usually used to make a guess about the present."
],
examples:[
["He might be at home now.","U hozir uyda bo'lishi mumkin."],
["She must be tired after the trip.","U sayohatdan keyin charchagan bo'lishi kerak."],
["That can't be true!","Bu to'g'ri bo'lishi mumkin emas!"],
["It could rain later.","Keyinroq yomg'ir yog'ishi mumkin."],
["They may already know the news.","Ular xabarni allaqachon bilishlari mumkin."]
],
mistakeWrong:"He can be tired. (using 'can' instead of 'might/must' for a guess)",
mistakeRight:"He might be tired. / He must be tired.",
mistakeWhy:"'Can' is normally for general ability or permission, not for making a guess about the present — learners sometimes use it where 'might', 'could', or 'must' is needed for deduction.",
quiz:[
["Choose the modal for something you are very sure is true.",["Might be","Must be","Could be","Can't be"],1],
["Choose the modal for something you are very sure is NOT true.",["Might be","Must be","Could be","Can't be"],3],
["Choose the modal for a weaker possibility.",["Must be","Can't be","Might be","Definitely is"],2],
["Choose the correct sentence.",["He can be tired after the trip.","He must be tired after the trip.","He is can tired after the trip.","He musts be tired."],1],
["Choose the correct sentence.",["That can't true be.","That can't be true.","That not can be true.","That isn't can be true."],1],
["What do these modals help us do?",["Give commands","Make guesses about likelihood","Talk about the past","Ask questions"],1]
]}
,

{id:"prepositions-place", cat:"Prepositions & Connectors",
title:"Prepositions of Place — in, on, under, next to, between", titleUz:"O'rin predloglari — in, on, under, next to, between",
ruleUz:"'In' ichida, 'on' ustida, 'under' ostida, 'next to' yonida, 'between' orasida degan ma'noni bildiradi.",
explain:[
"'In' = inside something ('in the box'). 'On' = on top of a surface ('on the table'). 'Under' = below something ('under the bed'). 'Next to' = beside something. 'Between' = in the middle of two things.",
"Uzbek often uses one general locative ending for 'at/in/on', so English's more specific choice of preposition needs extra attention and practice."
],
examples:[
["The book is on the table.","Kitob stol ustida."],
["The cat is under the bed.","Mushuk karavot ostida."],
["The bank is between the shop and the park.","Bank do'kon va park orasida."],
["The pharmacy is next to the bank.","Dorixona bank yonida."],
["She lives near the school.","U maktab yaqinida yashaydi."]
],
mistakeWrong:"The book is in the table. (using 'in' for a surface)",
mistakeRight:"The book is on the table.",
mistakeWhy:"Uzbek uses one general locative form regardless of surface/container/nearby location, so learners often pick the wrong specific English preposition.",
quiz:[
["'The book is ___ the table.'",["in","on","under","next to"],1],
["'The shoes are ___ the bed.'",["on","in","under","next to"],2],
["'The bank is ___ the pharmacy and the shop.'",["next to","between","behind","near"],1],
["Which preposition means 'inside'?",["on","in","under","between"],1],
["'My house is ___ the park.' (close by)",["far","near","between","under"],1],
["'The pharmacy is ___ the bank.' (beside)",["between","next to","under","far"],1]
]},

{id:"prepositions-time", cat:"Prepositions & Connectors",
title:"Prepositions of Time — at, in, on, for, since", titleUz:"Vaqt predloglari — at, in, on, for, since",
ruleUz:"'At' aniq soat, 'on' kun/sana, 'in' oy/yil/fasl, 'for' davomiylik, 'since' boshlanish nuqtasi bilan ishlatiladi.",
explain:[
"'At' is used with clock times ('at seven o'clock'). 'On' is used with days and dates ('on Monday'). 'In' is used with months, years, and seasons ('in May', 'in 2026', 'in winter').",
"'For' is used with a length of time ('for five years'), and 'since' with a starting point ('since 2023')."
],
examples:[
["I wake up at seven o'clock.","Men soat yettida uyg'onaman."],
["My birthday is in May.","Tug'ilgan kunim mayda."],
["I have class on Monday.","Dushanba kuni darsim bor."],
["I have lived here for five years.","Men bu yerda besh yildan beri yashayman."],
["She has studied English since 2023.","U ingliz tilini 2023 yildan beri o'rganadi."]
],
mistakeWrong:"I wake up in seven o'clock. My birthday is on May.",
mistakeRight:"I wake up at seven o'clock. My birthday is in May.",
mistakeWhy:"Uzbek doesn't require different prepositions for clock time vs months vs days, so learners often mix up at/on/in — one of the most common small mistakes in English.",
quiz:[
["'I have class ___ Monday.'",["in","on","at","for"],1],
["'My birthday is ___ May.'",["on","in","at","for"],1],
["'School starts ___ eight o'clock.'",["in","on","at","for"],2],
["'I have lived here ___ five years.'",["since","for","at","on"],1],
["'I have studied English ___ 2023.'",["since","for","at","on"],0],
["Which preposition is used for clock times?",["at","in","on","for"],0]
]},

{id:"connectors", cat:"Prepositions & Connectors",
title:"Joining Ideas — and, but, because, so, however, although", titleUz:"Fikrlarni bog'lash — and, but, because, so, however, although",
ruleUz:"'And' qo'shish, 'but'/'however'/'although' qarama-qarshilik, 'because' sabab, 'so' natija bildiradi.",
explain:[
"'And' adds ideas: 'I like tea and coffee.' 'But' shows contrast: 'I wanted to go, but it was raining.' 'Because' gives a reason: 'I stayed home because I was sick.' 'So' shows a result: 'It was late, so we went home.'",
"'However' and 'although' also show contrast but sound more formal/advanced than 'but': 'It's expensive; however, it's good quality.' 'Although it was raining, we went out.'"
],
examples:[
["I like tea and coffee.","Men choy va kofeni yoqtiraman."],
["I wanted to go, but it was raining.","Men bormoqchi edim, lekin yomg'ir yog'ayotgan edi."],
["I stayed home because I was sick.","Men uyda qoldim, chunki kasal edim."],
["It was late, so we went home.","Kech bo'lgani uchun, biz uyga ketdik."],
["It's expensive; however, it's good quality.","Bu qimmat; ammo, sifati yaxshi."]
],
mistakeWrong:"It was late, so, we went home. (adding an unnecessary comma after 'so')",
mistakeRight:"It was late, so we went home.",
mistakeWhy:"Direct translation from Uzbek sentence rhythm sometimes leads to extra commas around connectors like 'so' and 'because' that don't match natural English punctuation.",
quiz:[
["'I like tea ___ coffee.'",["but","because","and","so"],2],
["'I wanted to go, ___ it was raining.'",["and","but","because","so"],1],
["'I stayed home ___ I was sick.'",["but","because","so","and"],1],
["Choose the correct connector for contrast in more formal writing.",["and","however","so","because"],1],
["'It was late, ___ we went home.'",["because","but","so","although"],2],
["Which connector introduces a reason?",["so","but","because","and"],2]
]},

{id:"phrasal-verbs", cat:"Prepositions & Connectors",
title:"Common Phrasal Verbs", titleUz:"Keng tarqalgan frazal fe'llar",
ruleUz:"Frazal fe'l — fe'l + kichik so'z birikmasi bo'lib, ma'nosi alohida so'zlardan farq qiladi va yodlab olinishi kerak.",
explain:[
"A phrasal verb is a verb + a small word (preposition/particle) that together create a new meaning: 'look' + 'for' = 'look for' (search) — a completely different meaning from 'look' alone!",
"Phrasal verbs are extremely common in everyday spoken English. You can't guess their meaning by translating each word from Uzbek — they must be learned as whole fixed expressions."
],
examples:[
["I am looking for my keys.","Kalitlarimni qidiryapman."],
["Please turn off the light.","Iltimos, chiroqni o'chiring."],
["We ran out of milk.","Sutimiz tugab qoldi."],
["Never give up on your dreams.","Orzularingizdan hech qachon voz kechmang."],
["I look forward to seeing you.","Sizni ko'rishni intiqlik bilan kutaman."]
],
mistakeWrong:"I stopped smoking give up. (trying to translate the phrasal verb word-for-word)",
mistakeRight:"I gave up smoking.",
mistakeWhy:"Phrasal verbs have fixed, often unpredictable meanings — you can't build them by translating each word separately from Uzbek; they must be learned as whole units.",
quiz:[
["'Qidirmoq' in English is ___.",["Look after","Look for","Look forward to","Look on"],1],
["'Please ___ the light.' (yoqmoq)",["turn on","turn off","get on","carry on"],0],
["'Voz kechmoq' in English is ___.",["Give up","Get up","Take up","Put off"],0],
["'Tugab qolmoq' in English is ___.",["Run out of","Get off","Pick up","Drop off"],0],
["'Intiqlik bilan kutmoq' in English is ___.",["Look for","Look forward to","Look after","Look on"],1],
["What makes phrasal verbs tricky for learners?",["They never change","Their meaning is often different from the individual words","They only exist in writing","They are always regular"],1]
]}
,

{id:"comparatives", cat:"Numbers & Comparison",
title:"Comparatives & Superlatives", titleUz:"Comparatives va Superlatives",
ruleUz:"Qisqa sifatlarga -er/-est, uzunroq sifatlarga more/the most qo'shiladi; ba'zi so'zlar (good, bad) butunlay istisno.",
explain:[
"For short adjectives, add -er to compare two things (+than), and -est with 'the' to compare 3+ things: big→bigger→the biggest, fast→faster→the fastest.",
"For longer adjectives, use 'more' and 'the most': more dangerous, the most dangerous. Some common adjectives are irregular: good→better→the best, bad→worse→the worst."
],
examples:[
["An elephant is bigger than a dog.","Fil itdan kattaroq."],
["She is the tallest student in the class.","U sinfdagi eng baland bo'yli o'quvchi."],
["This book is more interesting than that one.","Bu kitob u kitobdan qiziqarliroq."],
["He is the most intelligent student in the school.","U maktabdagi eng aqlli o'quvchi."],
["Today is worse than yesterday.","Bugun kechadan yomonroq."]
],
mistakeWrong:"This book is more good. She is the intelligentest.",
mistakeRight:"This book is better. She is the most intelligent.",
mistakeWhy:"Learners sometimes add 'more' to short adjectives that need -er, or add -est to long adjectives that need 'the most' — and irregular forms like good→better→best follow neither rule.",
quiz:[
["Choose the correct comparative for 'big'.",["More big","Bigger","Biggest","The bigger"],1],
["Choose the correct superlative for 'fast'.",["Faster","Fastest","The fastest","More fast"],2],
["Choose the correct comparative for the long adjective 'dangerous'.",["More dangerous","Dangerouser","The dangerousest","Most dangerous"],0],
["Choose the correct comparative form of 'good'.",["Gooder","Better","More good","Best"],1],
["Choose the correct sentence.",["A cheetah is fast than a lion.","A cheetah is faster than a lion.","A cheetah is more fast than a lion.","A cheetah fastest than a lion."],1],
["Which word do we add before a superlative?",["a","an","the","some"],2]
]},

{id:"quantifiers", cat:"Numbers & Comparison",
title:"Countable & Uncountable Nouns — some/any/much/many", titleUz:"Sanaladigan va sanalmaydigan otlar — some/any/much/many",
ruleUz:"'Many/few' sanaladigan ko'plik otlar bilan, 'much/little' sanalmaydigan otlar bilan ishlatiladi; 'some' tasdiqda, 'any' inkor/so'roqda.",
explain:[
"Countable nouns can be counted (an apple, two apples) and use 'many/few/a few'. Uncountable nouns can't be counted individually (water, money, rice) and use 'much/little/a little'.",
"'Some' is used in positive sentences and offers ('I have some bread'); 'any' is used in negatives and questions ('I don't have any bread. Do you have any?')."
],
examples:[
["I have some apples.","Menda bir nechta olma bor."],
["I don't have any money.","Menda pul yo'q."],
["How much water do you need?","Sizga qancha suv kerak?"],
["How many books do you have?","Sizda nechta kitob bor?"],
["There isn't much time left.","Ko'p vaqt qolmadi."]
],
mistakeWrong:"How much books do you have? I have many water.",
mistakeRight:"How many books do you have? I have a lot of water.",
mistakeWhy:"Uzbek nouns don't grammatically distinguish 'countable' from 'uncountable' the way English does, so learners often mix up much/many between plural countable nouns and uncountable nouns.",
quiz:[
["'I don't have ___ money.'",["some","any","a lot","many"],1],
["'Would you like ___ tea?'",["some","any","much","many"],0],
["Choose the correct question about an uncountable thing (price).",["How many is this bread?","How much is this bread?","How much are this bread?","How many are this bread?"],1],
["Choose the correct question about a countable noun.",["How much apples do you want?","How many apples do you want?","How much apple you want?","How many apple do want?"],1],
["Choose the correct word for a small uncountable amount.",["a few","a little","many","some many"],1],
["Choose the correct word for a small countable amount.",["a few","a little","much","any"],0]
]},

{id:"dates-times", cat:"Numbers & Comparison",
title:"Saying Dates & Times", titleUz:"Sana va vaqtni aytish",
ruleUz:"Sanalar tartib son + 'of' bilan, oylar 'in' bilan, aniq kunlar 'on' bilan, vaqt half past/quarter past/to iboralari bilan aytiladi.",
explain:[
"Dates use ordinal numbers with 'the ___ of': 'Today is the fifth of May.' 'My birthday is on the third of March.' Use 'in' for months/years ('in September', 'in 2026') and 'on' for specific dates/days.",
"Times use 'half past', 'quarter past', and 'quarter to': 3:30 = 'half past three', 3:15 = 'quarter past three', 3:45 = 'quarter to four'."
],
examples:[
["Today is the fifth of May.","Bugun mayning beshinchisi."],
["It is half past six.","Soat olti yarim."],
["My birthday is on the third of March.","Tug'ilgan kunim uch martda."],
["The meeting is at quarter to nine.","Uchrashuv soat to'qqizga choragida."],
["School starts in September.","Maktab sentyabrda boshlanadi."]
],
mistakeWrong:"Today is five May. It is six thirty said as 'six and half'.",
mistakeRight:"Today is the fifth of May. It is half past six.",
mistakeWhy:"Uzbek dates and times use plain cardinal numbers, so learners forget the ordinal 'the ___ of' pattern for dates and the half-past/quarter phrasing for time.",
quiz:[
["Choose the correct date.",["Today is five May.","Today is the fifth of May.","Today is fifth May.","Today the fifth of May is."],1],
["Choose the way this course teaches to say 3:45.",["Quarter past three","Half past three","Quarter to four","Three o'clock"],2],
["Choose the correct preposition for a date.",["I was born in the fifth of May.","I was born on the fifth of May.","I was born at the fifth of May.","I was born the fifth of May."],1],
["Choose the correct preposition for a month.",["School starts on September.","School starts at September.","School starts in September.","School starts the September."],2],
["Choose the correct time question.",["What time it is?","What time is it?","Is what time it?","What is time?"],1],
["Choose the correct ordinal for '3rd'.",["Threeth","Third","Thirdth","Three"],1]
]}
,

{id:"conditionals", cat:"Advanced Grammar",
title:"If-Sentences — Zero & First Conditional", titleUz:"Shart gaplar — Zero va First Conditional",
ruleUz:"Zero conditional umumiy haqiqatlar uchun (if + present, present), First conditional haqiqiy kelajak imkoniyati uchun (if + present, will) ishlatiladi.",
explain:[
"Zero conditional states general truths: 'If + present simple, present simple': 'If you heat ice, it melts.' First conditional talks about real future possibilities: 'If + present simple, will + verb': 'If you study, you will pass.'",
"Both use present tense in the if-clause — 'will' never goes in the if-clause itself, even though the sentence is about the future."
],
examples:[
["If you heat ice, it melts.","Agar muzni isitsangiz, u eriydi."],
["If you study, you will pass the exam.","Agar o'qisangiz, imtihondan o'tasiz."],
["If it rains, we won't go out.","Agar yomg'ir yog'sa, tashqariga chiqmaymiz."],
["Water boils if you heat it to 100 degrees.","Agar suvni 100 gradusgacha isitsangiz, u qaynaydi."],
["If you don't hurry, you will miss the bus.","Agar shoshilmasangiz, avtobusga kechikasiz."]
],
mistakeWrong:"If you will study, you will pass. (using 'will' in the if-clause)",
mistakeRight:"If you study, you will pass.",
mistakeWhy:"Learners often add 'will' to both parts of the sentence because Uzbek future marking can feel needed in both halves — but English if-clauses use present tense, never 'will'.",
quiz:[
["Choose the correct zero conditional.",["If you heat ice, it melted.","If you heat ice, it melts.","If you heat ice, it will melt.","If you heated ice, it melts."],1],
["Choose the correct first conditional.",["If you study, you pass.","If you study, you will pass.","If you will study, you pass.","If you studied, you will pass."],1],
["Zero conditional is used for:",["Imaginary situations","General truths and facts","Past events","Polite requests"],1],
["First conditional is used for:",["Impossible situations","Real future possibilities","Past habits","General facts only"],1],
["Choose the correct sentence.",["If it rain, we stay home.","If it rains, we will stay home.","If it will rain, we stay home.","If it rains, we stayed home."],1],
["Which tense goes in the if-clause of a first conditional?",["will + verb","present simple","past simple","past perfect"],1]
]},

{id:"second-conditional", cat:"Advanced Grammar",
title:"If-Sentences — Second Conditional (Imaginary)", titleUz:"Shart gaplar — Second Conditional (Xayoliy)",
ruleUz:"Xayoliy yoki ehtimoli kam vaziyatlar uchun 'if + past simple, would + fe'l' ishlatiladi; barcha egalar bilan 'were' ishlatiladi.",
explain:[
"We use the second conditional for imaginary or unlikely situations: 'If + past simple, would + verb': 'If I won the lottery, I would travel the world.'",
"Note: we use 'were' for all subjects with 'if I/he/she were' in this structure, even though it looks like a plural form: 'If I were you, I would study more.'"
],
examples:[
["If I won the lottery, I would travel the world.","Agar lotereyada yutsam, dunyo bo'ylab sayohat qilardim."],
["If I were you, I would study more.","Men sizning o'rningizda bo'lsam, ko'proq o'qirdim."],
["If she had more time, she would learn French.","Agar unda ko'proq vaqt bo'lsa, u fransuz tilini o'rgangan bo'lardi."],
["What would you do if you could fly?","Agar uchsangiz, nima qilardingiz?"],
["If I had a superpower, I would help people.","Agar super kuchim bo'lsa, odamlarga yordam berardim."]
],
mistakeWrong:"If I win the lottery, I would travel. (mixing present simple with 'would')",
mistakeRight:"If I won the lottery, I would travel.",
mistakeWhy:"Learners often keep the if-clause in present tense out of habit from the first conditional, forgetting that the second conditional needs past tense in the if-clause even though it's about an imaginary present/future.",
quiz:[
["Choose the correct second conditional.",["If I win the lottery, I will travel.","If I won the lottery, I would travel.","If I would win the lottery, I travel.","If I win the lottery, I would travel."],1],
["Choose the correct sentence with 'if I were you'.",["If I was you, I would study.","If I were you, I would study.","If I am you, I would study.","If I were you, I will study."],1],
["Second conditional is used for:",["Real future plans","Imaginary or unlikely situations","Past facts","General truths"],1],
["Which tense goes in the if-clause?",["will + verb","present simple","past simple","present perfect"],2],
["Choose the correct sentence.",["If she had more time, she will learn French.","If she had more time, she would learn French.","If she has more time, she would learn French.","If she have more time, she would learn French."],1],
["What word do we use for 'if I/he/she ___' regardless of subject?",["was","were","is","be"],1]
]},

{id:"passive-voice", cat:"Advanced Grammar",
title:"Passive Voice — is/was + Past Participle", titleUz:"Majhul nisbat — is/was + past participle",
ruleUz:"Harakatni kim bajarganidan ko'ra harakatning o'zi muhimroq bo'lganda 'ega + be + past participle' qolipi ishlatiladi.",
explain:[
"We use the passive voice when the action itself is more important than who did it: 'English is spoken worldwide.' 'The telephone was invented by Bell.'",
"Form: subject + am/is/are/was/were + past participle (+ by + agent, if needed). It also works with modals: 'The homework must be finished today.'"
],
examples:[
["English is spoken worldwide.","Ingliz tili butun dunyoda gapiriladi."],
["The telephone was invented by Bell.","Telefon Bell tomonidan ixtiro qilingan."],
["This book was written in 1990.","Bu kitob 1990 yilda yozilgan."],
["Rice is grown in many countries.","Guruch ko'p davlatlarda yetishtiriladi."],
["The homework must be finished today.","Uy vazifasi bugun tugatilishi kerak."]
],
mistakeWrong:"English speaks worldwide. (using the active form for a passive meaning)",
mistakeRight:"English is spoken worldwide.",
mistakeWhy:"Uzbek passive constructions work differently, so learners sometimes keep the active verb form even when the subject isn't doing the action — the English passive always needs a form of 'be' + past participle.",
quiz:[
["Choose the correct passive sentence.",["English speaks worldwide.","English is spoken worldwide.","English spoken worldwide.","English is speaking worldwide."],1],
["Choose the correct passive statement.",["America discovered by Columbus.","America was discovered by Columbus.","America discover by Columbus.","America is discover by Columbus."],1],
["When do we use passive voice?",["When the action's doer is more important","When the action itself is more important than who did it","Only in questions","Only in the past"],1],
["Choose the correct passive form.",["This house built in 1990.","This house was built in 1990.","This house is build in 1990.","This house builded in 1990."],1],
["Choose the correct passive form with a modal.",["Homework must finish today.","Homework must be finished today.","Homework must finished today.","Homework must being finished today."],1],
["What is the passive voice formula?",["subject + verb + object","subject + be + past participle","subject + have + past participle","subject + do + verb"],1]
]},

{id:"reported-speech", cat:"Advanced Grammar",
title:"Reported Speech — Relaying What Someone Said", titleUz:"Ko'chirma gap — kimningdir aytganini ko'chirish",
ruleUz:"Ko'chirma gapda zamon odatda bir bosqich orqaga siljiydi: present→past, will→would.",
explain:[
"When we report what someone said, the tense usually moves back one step: present simple → past simple, 'will' → 'would', present perfect → past perfect. Direct: 'I am tired,' she said. Reported: She said (that) she was tired.",
"Use 'say' without an object ('She said...'), and 'tell' with an object ('She told me...')."
],
examples:[
["'I am tired,' she said. → She said she was tired.","'Men charchadim,' dedi u. → U charchaganini aytdi."],
["'I will call you,' he said. → He said he would call me.","'Men sizga qo'ng'iroq qilaman,' dedi u. → U menga qo'ng'iroq qilishini aytdi."],
["'I have finished,' she said. → She said she had finished.","'Men tugatdim,' dedi u. → U tugatganini aytdi."],
["He told me that he was busy.","U menga band ekanini aytdi."],
["She said (that) she liked the movie.","U filmni yoqtirganini aytdi."]
],
mistakeWrong:"She said she is tired. (keeping the original tense in reported speech)",
mistakeRight:"She said she was tired.",
mistakeWhy:"When reporting what someone said, the tense usually moves back one step; learners often keep the original tense from direct speech instead of shifting it back.",
quiz:[
["Choose the correct reported speech for 'I am happy,' she said.",["She said she is happy.","She said she was happy.","She said she happy.","She said I was happy."],1],
["Which verb is used for reporting with an object (tell someone)?",["say","tell","speak","talk"],1],
["What does 'will' become in reported speech?",["will","would","shall","going to"],1],
["Choose the correct sentence.",["He told me that he is busy.","He told me that he was busy.","He told that he was busy.","He told me he is busy."],1],
["What usually happens to the tense in reported speech?",["It stays the same","It moves one step back","It moves to the future","It disappears"],1],
["What does 'have finished' become in reported speech?",["has finished","had finished","have finished","finished"],1]
]},

{id:"relative-clauses", cat:"Advanced Grammar",
title:"Relative Clauses — who, which, that, where", titleUz:"Nisbiy gaplar — who, which, that, where",
ruleUz:"Odamlar uchun 'who', narsalar uchun 'which', ikkalasi uchun 'that', joylar uchun 'where', egalik uchun 'whose' ishlatiladi.",
explain:[
"Relative clauses give more information about a noun without starting a new sentence: 'The girl who sits next to me is my cousin.' Use 'who' for people, 'which' for things, 'that' for people or things (informal), 'where' for places, and 'whose' to show possession.",
"This is a great tool for making longer, more natural-sounding sentences instead of two short choppy ones."
],
examples:[
["The girl who sits next to me is my cousin.","Yonimda o'tirgan qiz mening amakivachcham."],
["This is the book which I read last week.","Bu men o'tgan hafta o'qigan kitob."],
["The park where we play is beautiful.","Biz o'ynaydigan park chiroyli."],
["A teacher is a person who helps students learn.","O'qituvchi — o'quvchilarga o'rganishga yordam beradigan shaxs."],
["That's the boy whose father is a doctor.","Bu — otasi shifokor bo'lgan bola."]
],
mistakeWrong:"The man which lives next door is a doctor. (using 'which' for a person)",
mistakeRight:"The man who lives next door is a doctor.",
mistakeWhy:"Learners sometimes mix up 'who' (for people) and 'which' (for things) since Uzbek connecting words don't make this same person/thing distinction.",
quiz:[
["Choose the correct relative pronoun for a person.",["Which","Where","Who","When"],2],
["Choose the correct relative pronoun for a place.",["Who","Which","Where","Whose"],2],
["Choose the correct sentence.",["A doctor is a person which helps sick people.","A doctor is a person who helps sick people.","A doctor is a person where helps sick people.","A doctor is a person whose helps sick people."],1],
["Choose the correct relative pronoun for showing possession.",["Who","Which","Where","Whose"],3],
["Choose the correct sentence.",["This is the book who I read.","This is the book which I read.","This is the book where I read.","This is the book whose I read."],1],
["What do relative clauses do?",["Start a brand new sentence","Give more information about a noun without a new sentence","Only work in questions","Replace the subject entirely"],1]
]},

{id:"gerunds-infinitives", cat:"Advanced Grammar",
title:"Gerunds vs Infinitives — -ing vs to + verb", titleUz:"Gerund va infinitiv — -ing va to + fe'l",
ruleUz:"Ba'zi fe'llardan keyin -ing (gerund), ba'zilaridan keyin 'to + fe'l' (infinitive) keladi; qaysi fe'l qaysi qolipdan foydalanishini mashq orqali o'rganish kerak.",
explain:[
"Some verbs are followed by -ing (a gerund): enjoy, avoid, finish, practice, consider, mind: 'I enjoy reading.' Other verbs are followed by 'to + verb' (an infinitive): want, decide, plan, hope, promise, refuse, manage: 'I want to learn.'",
"There's no simple rule for which pattern a verb takes — you learn each verb's pattern through exposure and practice."
],
examples:[
["I enjoy reading books.","Men kitob o'qishdan zavqlanaman."],
["I want to learn English.","Men ingliz tilini o'rganishni xohlayman."],
["She avoids eating junk food.","U foydasiz ovqat yeyishdan qochadi."],
["He decided to study medicine.","U tibbiyotni o'rganishga qaror qildi."],
["They finished doing their homework.","Ular uy vazifasini bajarishni tugatishdi."]
],
mistakeWrong:"I enjoy to read books. I want learning English.",
mistakeRight:"I enjoy reading books. I want to learn English.",
mistakeWhy:"There's no simple rule for which pattern a verb takes — some verbs (enjoy, avoid, finish) need -ing, others (want, decide, hope) need 'to + verb' — learners must memorize each verb's pattern.",
quiz:[
["Choose the correct sentence.",["I enjoy to read books.","I enjoy reading books.","I enjoy read books.","I enjoy reads books."],1],
["Choose the correct sentence.",["I want learning English.","I want learn English.","I want to learn English.","I want learned English."],2],
["Which verb is usually followed by -ing?",["want","decide","avoid","hope"],2],
["Which verb is usually followed by to+verb?",["enjoy","avoid","finish","decide"],3],
["Choose the correct sentence.",["She avoids to eat junk food.","She avoids eating junk food.","She avoids eat junk food.","She avoids ate junk food."],1],
["Choose the correct sentence.",["He decided studying medicine.","He decided to study medicine.","He decided study medicine.","He decided studies medicine."],1]
]}
,

{id:"imperatives", cat:"Speech & Style",
title:"Giving Instructions — Imperatives", titleUz:"Ko'rsatma berish — Imperativ",
ruleUz:"Buyruq berish uchun fe'lning asosiy shakli 'I' yoki 'you' so'zisiz ishlatiladi; inkor uchun fe'ldan oldin 'Don't' qo'shiladi.",
explain:[
"To give an instruction in English, use the base form of the verb without a subject — this is called the imperative: 'Open your book.' 'Turn left.' 'Sit down.'",
"To make it negative, add 'Don't' before the verb: 'Don't talk.' 'Don't run in the hallway.' Add 'please' to soften a command and make it more polite."
],
examples:[
["Open your book.","Kitobingizni oching."],
["Turn left at the corner.","Burchakda chapga buriling."],
["Don't talk during the test.","Test paytida gapirmang."],
["Please sit down.","Iltimos, o'tiring."],
["Listen carefully and repeat.","Diqqat bilan tinglang va takrorlang."]
],
mistakeWrong:"You open your book. (adding a subject to a simple instruction)",
mistakeRight:"Open your book.",
mistakeWhy:"Uzbek imperatives are formed by changing the verb ending and can feel like they include the subject, so learners sometimes add 'you' before the English verb, which sounds unnatural for a direct instruction.",
quiz:[
["Choose the correct imperative.",["You open your book.","Open your book.","Opening your book.","You should open your book."],1],
["Choose the correct negative imperative.",["You don't talk.","Don't talk.","No talk.","Not talk."],1],
["What form of the verb is used in imperatives?",["Past tense","Base form","-ing form","to+verb"],1],
["Choose the correct polite imperative.",["Sit down!","Please sit down.","You sit down.","Sitting down please."],1],
["Which sentence is an imperative?",["She opens the door.","Open the door.","She is opening the door.","Did she open the door?"],1],
["Choose the correct instruction.",["Don't to run in the hallway.","Don't run in the hallway.","No running the hallway.","Not run in hallway."],1]
]},

{id:"adverbs-frequency", cat:"Speech & Style",
title:"Adverbs of Frequency — always, usually, sometimes, never", titleUz:"Chastota qo'shimchalari — always, usually, sometimes, never",
ruleUz:"Chastota qo'shimchalari asosiy fe'ldan OLDIN, lekin 'to be' dan KEYIN keladi.",
explain:[
"Frequency adverbs (always, usually, often, sometimes, rarely, never) show how often something happens. They usually go BEFORE the main verb: 'I always do my homework.' But AFTER 'to be': 'She is often late.'",
"To ask about frequency, use 'How often...?': 'How often do you play football?'"
],
examples:[
["I always brush my teeth.","Men doim tishimni yuvaman."],
["She usually wakes up at seven.","U odatda soat yettida uyg'onadi."],
["We sometimes watch movies together.","Biz ba'zan birga kino tomosha qilamiz."],
["He rarely plays video games.","U kamdan-kam video o'yin o'ynaydi."],
["I never miss my English class.","Men hech qachon ingliz tili darsimni qoldirmayman."]
],
mistakeWrong:"I do always my homework. She often is late.",
mistakeRight:"I always do my homework. She is often late.",
mistakeWhy:"Frequency adverbs go BEFORE the main verb but AFTER 'to be' — learners often place them in the wrong spot relative to these two very different verb types.",
quiz:[
["Choose the correct sentence with a main verb.",["I do always my homework.","I always do my homework.","Always I do my homework.","I do my homework always."],1],
["Choose the correct sentence with 'to be'.",["She often is late.","She is often late.","Often she is late.","She is late often always."],1],
["Which word means 'kamdan-kam'?",["Always","Usually","Rarely","Never"],2],
["Choose the correct question about frequency.",["How often you play football?","How often do you play football?","How much often do you play football?","How often play you football?"],1],
["Choose the correct sentence.",["He never late for school.","He is never late for school.","He never is late for school.","He not never late for school."],1],
["Which adverb means 100% of the time?",["Never","Rarely","Sometimes","Always"],3]
]},

{id:"formal-informal", cat:"Speech & Style",
title:"Formal vs Informal English", titleUz:"Rasmiy va norasmiy ingliz tili",
ruleUz:"O'qituvchi, xat va notanish odamlar bilan rasmiy til, do'st va oila bilan norasmiy til ishlatiladi.",
explain:[
"Formal English is used with teachers, in letters, and with strangers: 'Would you mind...?', 'Could you please...?', 'Dear Sir/Madam'. Informal English is used with friends and family: 'Can you...?', 'Hi! What's up?'",
"Choosing the right register (formal or informal) for the situation shows good manners and strong language awareness — just like Uzbek has its own siz/sen distinction."
],
examples:[
["Dear Sir/Madam, I am writing to ask...","Hurmatli janob/xonim, men so'rash uchun yozyapman..."],
["Hi! What's up?","Salom! Ishlar qalay?"],
["Would you mind helping me with this?","Bunda menga yordam berishga qarshimisiz?"],
["Can you help me?","Menga yordam bera olasizmi?"],
["Yours sincerely, Aziz Karimov.","Hurmat bilan, Aziz Karimov."]
],
mistakeWrong:"Hey teacher, gimme the homework. (using very casual language with a teacher or in writing)",
mistakeRight:"Excuse me, could I please have the homework?",
mistakeWhy:"Learners often use the same casual style with teachers, strangers, and in writing as with friends — English speakers expect a more formal register in these situations.",
quiz:[
["Choose the formal way to ask for help.",["Can you help me?","Would you mind helping me?","Help me!","Gimme a hand."],1],
["Choose the correct formal letter opening.",["Hi there,","Hey,","Dear Sir/Madam,","What's up,"],2],
["Choose the correct informal greeting.",["Dear Sir/Madam","Hi!","I would like to","Yours sincerely"],1],
["When should you use formal English?",["Only in exams","With teachers, in letters, and with strangers","Only with family","Never"],1],
["Choose the correct formal request.",["Gimme that book.","Could I have that book, please?","Give me that book.","I want that book."],1],
["Choose the correct informal closing for a message to a friend.",["Yours sincerely","Best regards","See you!","Yours faithfully"],2]
]}

];

if (typeof module !== "undefined") module.exports = GRAMMAR;
