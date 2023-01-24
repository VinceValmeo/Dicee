var random_1 = Math.random();
var standard_1 = Math.floor(random_1 * 6) + 1;
console.log(standard_1);


document.querySelector(".img1").setAttribute("src", "./images/dice" + standard_1 + ".png");


var random_2 = Math.random();
var standard_2 = Math.floor(random_2 * 6) + 1;
console.log(standard_2);


document.querySelector(".img2").setAttribute("src", "./images/dice" + standard_2 + ".png");

if (standard_1 > standard_2) {
    document.querySelector("h1").textContent = "🚩 Player 1 Wins!";
} else if (standard_1 === standard_2) {
    document.querySelector("h1").textContent = "🚩 DRAW 🚩 ";
}
else {
    document.querySelector("h1").textContent = "Player 2 Wins! 🚩";
}