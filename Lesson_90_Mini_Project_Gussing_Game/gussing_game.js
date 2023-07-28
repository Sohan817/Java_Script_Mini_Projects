//initialization 
let totalAttempt = 5;
let attempts= 0;
let totalWon = 0;
let totalLost = 0;
//Findings elements
const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const gussingNumber = form.querySelector("#gussingNumber");
const checkButton = form.querySelector("#check");
const resultText = cardBody.querySelector(".resultText");
const remainingAttempts = cardBody.querySelector(".remainingAttempts");
const totalWonLostMessage = document.createElement("p");

form.addEventListener("submit",function(event){
    event.preventDefault();
    attempts++;
    if(attempts == 5){
        gussingNumber.disabled = true;
        checkButton.disabled = true;
    }
    if(attempts<6){
        checkResult(gussingNumber.value);
        remainingAttempts.innerHTML = `You have remaining attempts:${totalAttempt - attempts}`;
    }
    gussingNumber.value = "";
})
function checkResult(gussingNumber){
    const randomNumber = getRandomNumber(5);
    if(gussingNumber == randomNumber){
        resultText.innerHTML = `You Have Won`;
        totalWon++;
    }else{
        resultText.innerHTML = `You have lost!Random number was: ${randomNumber}`;
        totalLost++;
    }
    totalWonLostMessage.innerHTML = `Won:${totalWon} , Lost :${totalLost}`
    totalWonLostMessage.classList.add("large-text");
    cardBody.appendChild(totalWonLostMessage);
}
function getRandomNumber(limit){
    return Math.floor(Math.random()*limit)+1;
}