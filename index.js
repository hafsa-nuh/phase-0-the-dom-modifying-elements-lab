// Write your code here!
const main = document.querySelector("main");
// const secondChild = main.querySelector("li:nth-child(2)");
// main.removeChild(secondChild);
main.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "YOUR-NAME is the champion";