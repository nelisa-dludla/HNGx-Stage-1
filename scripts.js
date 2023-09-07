function updateDayOfTheWeek() {
        const date = new Date();
        const weekday = date.getDay();
        const daysOfTheWeek = [
                "Sunday",
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
        ];

        const currentWeekDay = daysOfTheWeek[weekday];

        const weekdayElement = document.querySelector(
                "[data-testid='currentDayOfTheWeek']"
        );

        weekdayElement.textContent = currentWeekDay;
}

function updateUTCTime() {
        const date = new Date();
        const time = date.getTime();

        const timeElement = document.querySelector(
                "[data-testid='currentUTCTime']"
        );

        timeElement.textContent = time;
}

const slackUserName = "Nelisa Dludla";
const myTrack = "Frontend";

const nameElement = document.querySelector("[data-testid='slackUserName']");
const trackElement = document.querySelector("[data-testid='myTrack']");

nameElement.textContent = slackUserName;
trackElement.textContent = myTrack;

window.addEventListener("load", updateDayOfTheWeek);
setInterval(updateUTCTime, 1000);
