const allDigits = document.querySelectorAll(".digits");
const indicator = document.querySelector("#time-indicator");

setInterval(() => {
  let date = new Date();
  let [hours, minutes, seconds] = date.toLocaleTimeString().split(":");
  indicator.innerText = "AM";

  if (hours > 12) {
    hours -= 12;
    indicator.innerText = "PM";

    if (hours >= 1 && hours <= 9) {
      hours = "0" + hours;
    }
  }

  allDigits[0].innerText = hours;
  allDigits[1].innerText = minutes;
  allDigits[2].innerText = seconds;
}, 1000);
