const startBtn = document.querySelector("#start-btn");
const stopBtn = document.querySelector("#stop-btn");
let refId;

function randomColorGenerator() {
  const hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

startBtn.addEventListener("click", function () {
  refId = setInterval(() => {
    document.body.style.backgroundColor = randomColorGenerator();
  }, 1000);
});

stopBtn.addEventListener("click", function () {
  clearInterval(refId);
});
