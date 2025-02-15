const colors = ["white", "green", "yellow", "blue"];
let index = 0;

// function changeBackground() {
//   index = (index + 1) % colors.length;
//   document.body.style.backgroundColor = colors[index];
// }

document.addEventListener("DOMContentLoaded", () => {
  const button = document.getElementById("btn-change");
  button.addEventListener("click", () => {
    index = (index + 1) % colors.length;
    console.log(index);
    document.body.style.backgroundColor = colors[index];
  });
});
