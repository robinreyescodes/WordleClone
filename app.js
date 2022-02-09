"use strict";

const keys = document.querySelectorAll(".kb-tiles");
const tiles = document.querySelectorAll(".tile1");

let string = "";
let i = 0;

document.addEventListener("keypress", (e) => {
  if (i !== 0 && (i + 1) % 5 === 0) {
    if (e.key === "Enter") {
      string += tiles[i].textContent.toLowerCase();
      console.log(string);
      i++;
      string = "";
    }
    if (e.key !== "Enter") {
      tiles[i].textContent = e.key.toUpperCase();
    }
  } else if (i < tiles.length && e.key !== "Enter") {
    string += e.key;
    tiles[i].textContent = e.key.toUpperCase();
    i++;
  }
});
