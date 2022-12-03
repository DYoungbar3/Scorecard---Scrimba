let homeScore = document.getElementById('home-score');
let guestScore = document.getElementById('guest-score');

let homeInt = parseInt(homeScore.textContent);
let guestInt = parseInt(guestScore.textContent);

function addOneHome() {
    homeInt += 1;
    homeScore.textContent = homeInt;
}

function addTwoHome() {
    homeInt += 2;
    homeScore.textContent = homeInt;
}

function addThreeHome() {
    homeInt += 3;
    homeScore.textContent = homeInt;
}

function addOneGuest() {
    guestInt += 1;
    guestScore.textContent = guestInt;
}

function addTwoGuest() {
    guestInt += 2;
    guestScore.textContent = guestInt;
}

function addThreeGuest() {
    guestInt += 3;
    guestScore.textContent = guestInt;
}