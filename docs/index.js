const burger = document.querySelector("#burger");
const menu = document.querySelector("#menu");

// burger.addEventListener("click", () => {
//   if (menu.classList.contains("hidden")) {
//     menu.classList.remove("hidden");
//   } else {
//     menu.classList.add("hidden");
//   }
// });

document.querySelector("#burger").addEventListener("click", () => {
  document.querySelector("#menu").classList.toggle("hidden");
});
