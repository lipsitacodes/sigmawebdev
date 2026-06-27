let firstItem = document.querySelector(".nav ul li");
firstItem.style.color = "red";

let p = document.querySelector(".parent");
p.firstElementChild.style.color = "green";
p.lastElementChild.style.color = "green";
let li = document.querySelectorAll(".nav ul li");

li.forEach((item) => {
  item.style.backgroundColor = "cyan";
});
