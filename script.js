let bill = document.querySelector("#bill-amount");
let cash = document.querySelector("#cash-amount");
const cheakButton = document.querySelector("#button");
let print = document.querySelectorAll(".notes-number");
const notes = [2000, 500, 200, 100, 50, 20, 10, 5, 1];
cheakButton.addEventListener("click", function countNotes() {
  if (bill.value > 0 && cash.value >= bill.value) {
    let amountToBeReturn = cash.value - bill.value;
    countNumberOfNotes(amountToBeReturn);
  } else {
    alert("please enter a valid details");
    bill.value = "";
  }
});
function countNumberOfNotes(amountToBeReturn) {
  for (let i = 0; i < notes.length; i++) {
    let noOfNotes = Math.trunc(amountToBeReturn / notes[i]);
    amountToBeReturn %= notes[i];
    print[i].innerText = noOfNotes;
    bill.value = "";
    cash.value = "";
  }
}
