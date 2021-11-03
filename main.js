let randomNumber1 = Math.floor(Math.random() * 6) + 1
let imagePath = "images/" + "dice" + randomNumber1 + ".png"
let randomNumber2 = Math.floor(Math.random() * 6) + 1
let imagePath1 = "images/" + "dice" + randomNumber2 + ".png"

let image1 = document.querySelectorAll("img")[0]
image1.setAttribute("src", imagePath)
let image2 = document.querySelectorAll("img")[1]
image2.setAttribute("src", imagePath1)
if (randomNumber1 > randomNumber2) {
    let heading = document.querySelector("h1")
    heading.innerHTML = "Player 1 wins 😄"
} else if (randomNumber1 == randomNumber2) {
    let heading = document.querySelector("h1")
    heading.innerHTML = "Draw"
} else {
    let heading = document.querySelector("h1")
    heading.innerHTML = "Player 2  wins😎"
}