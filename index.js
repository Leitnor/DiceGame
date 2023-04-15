var randomNumber1 = Math.random();
randomNumber1 = Math.floor((randomNumber1 * 6) + 1);
document.querySelector("img.item-3").setAttribute("src", "images/diceFace" + randomNumber1 + ".png")

var randomNumber2 = Math.random();
randomNumber2 = Math.floor((randomNumber2 * 6) + 1);
document.querySelector("img.item-4").setAttribute("src", "images/diceFace" + randomNumber2 + ".png")

if (randomNumber1 === randomNumber2){
    document.querySelector("h2").innerHTML="Draw!";
}

else if (randomNumber1 > randomNumber2){
    document.querySelector("h2").innerHTML = "Player One Wins!";
}

else if (randomNumber1 < randomNumber2){
    document.querySelector("h2").innerHTML = "Player Two Wins!"
}