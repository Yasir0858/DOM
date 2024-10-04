// console.log(document.title);
// document.title = "i am changed";

// const heading = document.getElementById("heading");
// heading.innerText = "i am changed";
// heading.style.color = "red";
// heading.style.backgroundColor = "blue";
// console.log(heading);


// let headings = document.getElementsByClassName("heading");
// for(let i = 0; i < headings.length; i++){
//     headings[i].style.color = "red";
//     headings[i].style.backgroundColor = "yellow";
// }

// console.log(headings);

// let headings = document.getElementsByTagName("h1");
// for(let i = 0; i < headings.length; i++){
//     headings[i].style.color = "red";
//     headings[i].style.backgroundColor = "yellow";
// }

// console.log(headings);

// let heading = document.querySelector("")
// heading.style.color = "yellow";

// console.log(heading);

// let headings = document.querySelectorAll("h1:nth-child(odd)");

// headings.forEach(heading => heading.style.color = "yellow")

// console.log(headings);



let ul = document.querySelector("ul");

// console.log(ul);
// console.log(ul.children);
// console.log(ul.parentElement);
// console.log(ul.previousElementSibling);
// console.log(ul.nextElementSibling);


//element creation

let li = document.createElement("li");

li.innerText = "4";
li.class = 'new class';
li.id ="newId";
li.style.color = "red";
li.setAttribute("href", "#");

ul.appendChild(li);
console.log(li);



