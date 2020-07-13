const grid = document.getElementById("grid");
const cardNumbers = [];
for (let i = 1; i <= 9; i++) {
  grid.innerHTML += `<div class="card total${i}"><span class="total${i}"></span> ${i}  </div>`;
  cardNumbers.push(i);
}
document.querySelector(".btn_shuffle").addEventListener("click", () => {
  const theLength = cardNumbers.length - 1;
  let swapIT;
  let temp;
  for (let i = theLength; i > 0; i--) {
    swapIT = Math.floor(Math.random() * (i + 1));
    temp = cardNumbers[i];
    cardNumbers[i] = cardNumbers[swapIT];
    cardNumbers[swapIT] = temp;
  }
  i = 0;
  $(".card").each(function () {
    this.innerHTML = `<span class="total${i + 1}"></span> ${cardNumbers[i]}`;
    i++;
  });
});
document.querySelector(".btn_sort").addEventListener("click", () => {
  let cardNumbers = [];
  for (let i = 1; i <= 9; i++) {
    cardNumbers.push(i);
  }
  cardNumbers.sort();
  i = 0;
  $(".card").each(function () {
    this.innerHTML = `<span class="total${i + 1}"></span> ${cardNumbers[i]}`;
    i++;
  });
});
