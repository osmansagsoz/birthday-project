function loadAnswers () {
    const answers = quiz[Object.keys(quiz)[currentQ]];

    answersArea.innerHTML = "";

    for (let i = 0; i < answers.length - 1; i++) {

    //     var createDiv = document.createElement("div"),
    //         text = document.createTextNode(answers[i])
    //     createDiv.appendChild(text)

    //     createDiv.addEventListener("click", checkAnswer(i, answers))
    //     answersArea.appendChild(createDiv)
    // }

    answersArea.innerHTML = `<p>${answers[i]}</p>`; !!!!!!!!!!
    }
};

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
}  burdaki correct sor