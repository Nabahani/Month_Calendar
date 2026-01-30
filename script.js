// Variables for elements
const monthEl = document.querySelector("h1");
const dateEl = document.querySelector("p");
const daysEl = document.querySelector(".days");

//for month
const monthIdx = new Date().getMonth();
const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "Nuvember",
    "December",
]
monthEl.innerHTML = months[monthIdx];


//for date
dateEl.innerText = new Date().toDateString();


//for days
const firstDay = new Date(new Date().getFullYear(), monthIdx, 1).getDay() - 1;

for (let i = firstDay; i > 0; i--) {
    daysEl.innerHTML += `<div class="empty"></div>`
}


const daysInMonth = new Date(new Date().getFullYear(), monthIdx + 1, 0).getDate();


for (let i = 1; i <= daysInMonth; i++) {
    if (i === new Date().getDate()) {
        daysEl.innerHTML += `<div class="today">${i}</div>`
    } else {
        daysEl.innerHTML += `<div>${i}</div>`
    }
}