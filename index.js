let secretNum = Math.ceil(Math.random() * 20)

// Background color change function( On win or lose)
function changeColor(color1){
    document.querySelector(".container").style.backgroundColor = color1;
    document.querySelector(".inputNum").style.backgroundColor = color1;
}

// Function to update score and result
function resultScore (changeResult, changeScore){
    document.querySelector(".score").textContent = changeScore;
    document.querySelector(".result").textContent = changeResult;
}

// Function to remove hidden class and show overly with message
function showOverly (message){
    document.querySelector(".gameInfo").textContent = message;
    document.querySelector(".overlay").classList.remove('hidden')
    document.querySelector(".overlay_mid").classList.remove('hidden')
}

function closeOverly(){
    document.querySelector(".overlay").classList.add('hidden')
    document.querySelector(".overlay_mid").classList.add('hidden')
}


//********************************************************************** */


// Click on check button
document.querySelector(".btn_check").addEventListener("click", function () {
    const guessNum = document.querySelector(".inputNum").value;
    const currentScore = Number(document.querySelector(".score").textContent)
    const highScore = document.querySelector(".highScore").textContent;

    // Score greater than one
    if (currentScore > 1) {

        // Get right number
        if (guessNum == secretNum) {
            if (currentScore > highScore)
                document.querySelector(".highScore").textContent = currentScore;
            document.querySelector(".result").textContent = "🔥  Correct!";
            document.querySelector(".number").textContent = secretNum;
            changeColor("#52DD39")
            showOverly("🏆You win")
        }
        // Enter wrong number
        else {
            let nowResult = guessNum > secretNum ? "💹  Too high!" : "💹  Too low!"
            resultScore(nowResult, currentScore - 1)
            document.querySelector(".numberDiv").classList.add("shakeDiv");
            setTimeout( () => {document.querySelector(".numberDiv").classList.remove("shakeDiv")}, 200);
        }
    }

    // Score equal to zero
    else {
        resultScore("🐸 You lost the game.", 0)
        changeColor("#F5190F");
        showOverly("Game Over")
    }
});


// Event click on Again button
document.querySelector(".rest").addEventListener("click", function () {
    secretNum = Math.ceil(Math.random() * 20);
    document.querySelector(".number").textContent = "?";
    document.querySelector(".inputNum").value = 1;
    resultScore("Start guessing....", 20)
    changeColor("black");
})



// Closing overly
document.querySelector(".overlay").addEventListener("click", function(){
    closeOverly()
})

document.querySelector(".closeTab").addEventListener("click", function(){
    closeOverly()
});

document.addEventListener("keydown", function(e){
    if(e.key == "Escape")
    closeOverly()
});



