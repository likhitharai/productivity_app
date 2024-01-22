// Javascript code for calender

const date = document.getElementById("date");
const day = document.getElementById("day");
const month = document.getElementById("month");
const year = document.getElementById("year");

var today = new Date();

const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
const allMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


// The below if else statement is to check if the date is in single digit or double digit
date.innerHTML= today.getDate()<10?"0":"" + today.getDate();
day.innerHTML=weekDays[today.getDay()];
month.innerHTML=allMonths[today.getMonth()];
year.innerHTML=today.getFullYear();


// ------------------------------------------------------------------------------------------------------------------------------------------------------------


let hours = document.getElementById("hh");
let mins = document.getElementById("mm");
let secs = document.getElementById("ss");

setInterval(()=> {
    let currentTime = new Date();

    hours.innerHTML = (currentTime.getHours()<10?"0":"") + currentTime.getHours();
    mins.innerHTML = (currentTime.getMinutes()<10?"0":"") + currentTime.getMinutes();
    secs.innerHTML = (currentTime.getSeconds()<10?"0":"") + currentTime.getSeconds();
}, 1000);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------




// Take the ID of the input box 
const inputBox=document.getElementById("input-box");
const listContainer=document.getElementById("list-container");

function addTask(){
    if(inputBox.value === ''){
        alert("You must write something");
    }
    else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }

    inputBox.value = "";
    saveData();
}

// To check and uncheck on click - To mark it as complete or to remove the element rom the listed item

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);




// The code or elemenets must remain in place even if we try to reload the page
// We can store all the data in the browser's local storage
function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

// Display the data whenever we open the website again
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();


