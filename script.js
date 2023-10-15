const signsWith = document.querySelector(".signsWith");
const signsWithout = document.querySelector(".signsWithout");
const words = document.querySelector(".words");
const couter__input = document.querySelector("#couter__input");

let contentOfTextArea = "";

function writeHowManySignsWidth() {
  signsWith.textContent = contentOfTextArea.length;
}

function writeHowManySignsWidthout() {
  let a = contentOfTextArea.split("");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != " ") b.push(a[i]);
  }
  signsWithout.textContent = b.length;
}

function writeHowManyWords() {
  let a = contentOfTextArea.split(" ");
  let b = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] != "") b.push(a[i]);
  }
  words.textContent = b.length;
}

couter__input.addEventListener("keyup", () => {
  contentOfTextArea = couter__input.value;
  writeHowManySignsWidth();
  writeHowManySignsWidthout();
  writeHowManyWords();
});
