import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function generateExcuse() {
  const who = ["The dog", "My grandma", "His turtle", "My bird"];
  const action = ["ate", "chewed", "crushed", "broke"];
  const what = ["my homework", "the keys", "the car"];
  const when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  const getRandomIndex = array => Math.floor(Math.random() * array.length);
  const createRandomExcuse = () => {
    const randomWho = who[getRandomIndex(who)];
    const randomAction = action[getRandomIndex(action)];
    const randomWhat = what[getRandomIndex(what)];
    const randomWhen = when[getRandomIndex(when)];
    return `${randomWho} ${randomAction} ${randomWhat} ${randomWhen}`;
  };

  const excuseContainer = document.querySelector("#excuse");
  excuseContainer.innerHTML = createRandomExcuse();
}

window.onload = function() {
  generateExcuse();
};
