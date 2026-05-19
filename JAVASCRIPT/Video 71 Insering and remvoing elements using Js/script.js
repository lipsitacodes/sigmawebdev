let a = document.querySelector(".box");
console.log("This is inner html method with box \n" + a.innerHTML);
console.log("This is inner html method with container \n" + document.querySelector(".container").innerHTML);

console.log(a.innerHTML = "Hey i am updated inner html text i hope you will like it ");

console.log("This is inner Text method with box \n" + a.innerText);
console.log("This is inner Text method with container \n" + document.querySelector(".container").innerText);

console.log("This is outerhtml method with container \n" + document.querySelector(".container").outerHTML);

console.log("Tag Name method : " + a.tagName); //tag name is only apllicable for element node only
console.log("node Name method : " + a.nodeName); //node name is applicable for all the nodes like element node, text node, comment node etc. it will give the name of the node

let b = document.querySelector(".container")
// console.log(b.hidden = true); //it will hide the element

console.log(a.hasAttribute("style"));

console.log(a.getAttribute("style"));

console.log(a.setAttribute("style", "background-color: pink; border: 2px solid black;"));

console.log(a.attributes); //it will give all the attributes of the element in the form of a collection

console.log(a.removeAttribute("style"));

console.log(a.dataset); 
console.log(a.dataset.created); 
console.log(a.dataset.conceptby); 
