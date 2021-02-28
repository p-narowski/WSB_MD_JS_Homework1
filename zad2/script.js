const box1 = document.getElementById("first");
const box2 = document.getElementById("second");
const desc = document.getElementById("description");
const text1="Tabl.1 Lorem ipsum";
const text2="Tabl.2 Dolor amet";

box1.addEventListener("mouseover", function () {
  this.style.fontWeight = "bold";
  desc.innerHTML=text1;
});
box1.addEventListener("mouseout", function () {
  this.style.fontWeight = "normal";
});
box2.addEventListener("mouseover", function () {
  this.style.fontWeight = "bold";
  desc.innerHTML=text2;
});
box2.addEventListener("mouseout", function () {
  this.style.fontWeight = "normal";
});
