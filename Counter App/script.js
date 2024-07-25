// getting the html elements
const decrementBtn = document.getElementById("decrementBtn");
const incrementBtn = document.getElementById("incrementBtn");
const resetBtn = document.getElementById("resetBtn");
const displayValue = document.getElementById("displayValue");

// for decrement button click
decrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  displayValue.innerText = value - 1;

});

// for increment button click
incrementBtn.addEventListener("click", () => {
  const value = Number(displayValue.innerText);
  displayValue.innerText = value + 1;
});

// for reset button click
resetBtn.addEventListener("click", () => {
  displayValue.innerText = 0;
});
