// timeblocks 
//current time
//ability to enter and save events

//0a. load local storage
//0b. get time/display day
//0c. color timeblocks (past/future)

// 1.user clicks timeblock
// 1a.field to type in (forms)

//2.saves when save button clicked
//2a.onclick save-button
//2b.saves in object property
//2c.save the object in local storage

//localstorage.setItem("location. JSON.stringify(planer"));
//JSON.parse(localStorage)
// //var planner = {
//     nineToTen = "",
//     tenToEleven = "",
//     elevenToTwelve = "",
// }
//var nineToTen = <html>
//planner.nineToTen = htmlelement.textcontent();
//

// variables 
var DateTime = luxon.DateTime;
var now = DateTime.now();
// quarySelector finds the element that has the class input

//now.hour gives you the hour
// object for time slots
var timeSlot = {
    nine: "",
    ten: "",
    eleven: "",
    twelve: "",
    one: "",
    two: "",
    three: "",
    four: ""

};
let memo = $(".input");

var keyList = ["nine", "ten", "eleven", "twelve", "one", "two", "three", "four"]




function save(){
    let i = parseInt(this.value);
    let key = keyList[i];
    timeSlot[key] = memo[i].textContent;
    console.log(timeSlot)
    // set timeSlot object into local storage
    localStorage.setItem("location", JSON.stringify(timeSlot));
}


//runtime
$("#currentDay").text(now.toLocaleString(DateTime.DATE_HUGE));
$(".saveBtn").on("click", save);



for ( let i = 0; i < 8; i++) {
    var time = i + 9;
    if (time < now.hour){
        memo[i].classList.add("past");
    }
    else if (time === now.hour){
        memo[i].classList.add("present");
    }
    else {
        memo[i].classList.add("future");
    }
}

    if (localStorage.getItem("location")){
    var savedData = JSON.parse(localStorage.getItem("location"));
    console.log(savedData);
    for ( let i = 0; i < keyList.length; i++) {
        let key = keyList[i];
        memo[i].textContent = savedData[key]; 
        timeSlot[key] = savedData[key];
    }
}

// localStorage.removeItem("location");