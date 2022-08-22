// Write your code here!
const main = document.querySelector("#main");
// const secondChild = main.querySelector
// main.removeChild(secondChild);
main.remove();

let newHeader = document.createElement("h1");
newHeader.setAttribute("id","victory");

newHeader.innerHTML = "YOUR-NAME is the champion";
document.body.append(newHeader)