const questionArea = document.querySelector('.questions');
const answersArea = document.querySelector('.answers');
const checker = document.querySelector('.checker');
const button = document.querySelector('.btn');

const quiz = {
    "Büşra'nın ilk ev arkadaşı kimdir?" : ["Seher", "Meriç", "Sıla", "Çitçit", "Gözde", 2],
    "Daha küçücükken, hangi yiyecekten mahrum bırakıldığı için, annesinin kafasına havuç fırlatmıştır?" : ["Köfte", "Avokado", "Salam", "Sucuk", "Bal", 3],
    "Aşağıdakilerin hangisiyle daha önce ilgilenmemiştir?" : ["Yelken", "Paten", "Bisiklet", "Poll dance", "Çello", 2],
    "İlk dövmesini kime yapmıştır?" : ["Kendisi", "İlayda", "Çitçit", "Kerem abi", "Babası", 0],
    "İlk sevgilisinin adı nedir?" : ["Orkun", "Kaan", "Sarper", "Duncan", "Fuat", 1],
    "Hangi estetik operasyonu geçirmemiştir?" : ["İpek kirpik", "Botoks", "Bişektomi", "Burun dolgusu", "Eksfoliasyon", 2],
    "Bir sabah, elleri ve ağzında çikolata izleriyle uyandığında başucunda hangi marka gofret bulmuştur?" : ["Ülker çiko", "Nestle", "Eti karam", "Çokonat", "Snickers", 0],
    "Sıçma gününde ilk yemek istediği şey nedir?" : ["Lahmaç", "Köfte", "Pizza", "Baklava", "Sufle", 4],
    "İlk kedisinin adı nedir?" : ["Mırnav", "Pamuk", "Samed", "Mahmut", "Maru", 4],
    "Aşağıdakilerden hangisini daha önce söylememiştir?" : ["Bunu emmen lazım", "CV gönder", "Alim mi seni tatlı chocuq", "Çayiiiii", "Biraz da benimkiyle oyna", 2]
}

let currentQ = 0;

function loadQuestion() {
    const question = Object.keys(quiz)[currentQ];
    
    questionArea.innerHTML = "";
    questionArea.innerHTML = question;
}

function loadAnswers () {
    let answers = quiz[Object.keys(quiz)[currentQ]];

    answersArea.innerHTML = "";

    for (let i = 0; i < answers.length - 1; i++) {

        var createDiv = document.createElement("div"),
        text = document.createTextNode(answers[i])
        createDiv.appendChild(text)
        answersArea.appendChild(createDiv)

        createDiv.addEventListener("click", checkAnswer(i, answers))
    }
};

let score = 0;

function checkAnswer(i, arr) {
   
    return function() {
        const userAnswer = i

        userAnswer === arr[arr.length -1] ? addChecker(true) : addChecker(false);

        userAnswer === arr[arr.length -1] ? score += 100 : null ;

        if (currentQ < Object.keys(quiz).length - 1) {
            currentQ++;
            loadQuestion(currentQ)
            loadAnswers(currentQ)
        } else {
            questionArea.innerHTML = getScore(score);
            answersArea.innerHTML = ""
            button.style.display = "block";
        }
    }
}

function getScore() {
        
    if (score >= 700) {
     return `Tebriks ${score} puan aldın! Büş'e tapıyosun! Koş bakalım sonraki bölüme!`;
    } else if (score >= 400) {
        return `Meehh ${score} puan aldın, sonraki bölüm sana iyi gelebilir!`;
    } else {
        return `${score} puan, yazık dedirttin sadece. Bi bak bakalım kimmiş Büş.`;
    }
 }

function addChecker(bool) {
    //add a div element to the page to see if true/false
    const createDiv = document.createElement("div")
        
    if (bool) {
        createDiv.className += "correct"
        tr = document.createTextNode('100')
        createDiv.appendChild(tr)
        checker.appendChild(createDiv)

    } else {
        createDiv.className += "false"
        fal = document.createTextNode('0')
        createDiv.appendChild(fal)
        checker.appendChild(createDiv)
    }
}
//start quiz right away
loadQuestion(currentQ)
loadAnswers(currentQ)
