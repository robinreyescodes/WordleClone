"use strict";

const keys = document.querySelectorAll(".kb-tiles");

document.addEventListener("keydown", (e) => {
  const hi = e.key.toUpperCase();
  keys.forEach((key) => {
    if (key.textContent === hi) console.log(key.textContent);
  });
});
