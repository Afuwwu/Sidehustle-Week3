// const countBtn = document.querySelector('countBtn button');
// const lowBtn = document.querySelector('lowBtn button');
// let countNum = document.querySelector('.countNum h1');

// countBtn.addEventListener('load', countUp);
// lowBtn.addEventListener('click', countDown);

// function countUp() {
//     countNum.innerHTML++;
// }

// function countDown() {
//     countNum.innerHTML--;
// }
var clicks = 0;

function countup() {
    if (clicks < 50) {
        clicks++;
        document.getElementById("clicks").innerHTML = clicks;

    }

};

function countdown() {
    if (clicks >= 1) {
        clicks--;
        document.getElementById("clicks").innerHTML = clicks;

    }

};
// var clicks = 0

// function onClick() {

//     clicks++;
//     document.getElementById("clicks").innerHTML = clicks;