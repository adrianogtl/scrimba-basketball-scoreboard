const homeScoreEl = document.querySelector("#home-score");
const guestScoreEl = document.querySelector("#guest-score");
let homeScore = 0;
let guestScore = 0;

const buttons = document.getElementsByClassName("point");
const clearBtn = document.querySelector("#clear-btn");


function checkInput(team, point) {
    const points = ["1", "2", "3"];
    const teams = ["home", "guest"];
    if (teams.includes(team) && points.includes(point)) {
        return addPoint(team, point);
    } else {
        return window.alert("An error ocurred!");
    }
}

function addPoint(team, point) {
    if (team === "home") {
        homeScore += parseInt(point);
        homeScoreEl.textContent = homeScore;
        return;
    } else {
        guestScore += parseInt(point);
        guestScoreEl.textContent = guestScore;
        return;
    }
}

function clearScoreboard() {
    homeScore = 0;
    guestScore = 0;
    homeScoreEl.textContent = homeScore;
    guestScoreEl.textContent = guestScore;
    return;
}

for (const button of buttons) {
    button.addEventListener("click", () => checkInput(button.classList[2], button.value))
}

clearBtn.addEventListener("click", () => clearScoreboard());

