let ratePerNight = 25;
let nightsSelected = 0;

const nightList = document.querySelectorAll(".day-selector li");
const generalButton = document.getElementById("general");
const vipButton = document.getElementById("vip");
const clearButton = document.getElementById("clear-button");
const totalCost = document.getElementById("total-cost");

function calculateTotal() {
    totalCost.innerHTML = nightsSelected * ratePerNight;
}

nightList.forEach(function (night) {
    night.addEventListener("click", function () {
        if (night.classList.contains("clicked")) {
            night.classList.remove("clicked");
            nightsSelected = nightsSelected - 1;
        } else {
            night.classList.add("clicked");
            nightsSelected = nightsSelected + 1;
        }

        calculateTotal();
    });
});

clearButton.addEventListener("click", function () {
    nightList.forEach(function (night) {
        night.classList.remove("clicked");
    });

    nightsSelected = 0;
    calculateTotal();
});

generalButton.addEventListener("click", function () {
    ratePerNight = 25;
    generalButton.classList.add("clicked");
    vipButton.classList.remove("clicked");
    calculateTotal();
});

vipButton.addEventListener("click", function () {
    ratePerNight = 50;
    vipButton.classList.add("clicked");
    generalButton.classList.remove("clicked");
    calculateTotal();
});
