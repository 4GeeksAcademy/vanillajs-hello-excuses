/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ["The dog", "My grandma", "The mailman", "My bird"];
let action = ["ate", "peed", "crushed", "broke"];
let what = ["my homework", "my phone", "the car"];
let when = [
  "before the class",
  "when I was sleeping",
  "while I was exercising",
  "during my lunch",
  "while I was praying"
];

window.onload = function() {
  function randomIndice(arr) {
    return Math.floor(Math.random() * arr.length);
  }
  document.querySelector(".excuses").innerHTML =
    who[randomIndice(who)] +
    " " +
    action[randomIndice(action)] +
    " " +
    what[randomIndice(what)] +
    " " +
    when[randomIndice(when)];
};
