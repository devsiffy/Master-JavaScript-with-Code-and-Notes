const allBoxes = document.querySelectorAll(".boxes");

allBoxes.forEach((box) => {
  box.addEventListener("click", () => {
    const style = getComputedStyle(box);
    const bgColor = style.backgroundColor;
    document.body.style.backgroundColor = `${bgColor}`;
  });
});
