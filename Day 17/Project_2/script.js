const tableBody = document.querySelector("#table tbody");

window.addEventListener("keydown", function (event) {
  console.log(event);
  const tr = this.document.createElement("tr");
  const td_1 = this.document.createElement("td");
  const td_2 = this.document.createElement("td");
  const td_3 = this.document.createElement("td");

  if (event.key === " ") {
    td_1.innerText = "Space";
  } else {
    td_1.innerText = event.key;
  }
  td_2.innerText = event.keyCode;
  td_3.innerText = event.timeStamp.toFixed(2);

  tr.append(td_1);
  tr.append(td_2);
  tr.append(td_3);
  tableBody.append(tr);
});
