$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var myTimeBlock = document.getElementsByClassName('time-block')
// var myTimeBlock = document.getElementsById()
// var myTimeBlock = document.getElementsById(parseInt(myTimeBlock[i].id.substring))
// var myTimeBlock = document.getElementsByClassName('hour')
// var myTimeBlock = document.getElementsByClassName('datetime')
// var myTimeBlock = document.querySelector(".hour")
// var myTimeBlock = document.querySelector(".hour")
// var timeBackground = document.querySelector('time-block')
var currentDay = moment().format("MMM Do YY")
var currentHour = moment().hour()
// var currentHour = moment().format("HH mm")
console.log(currentHour)
console.log(currentDay)
function checkTime() {
    for (let i = 0; i < myTimeBlock.length; i++) {
        //currentHour is going to equal 11
        console.log(myTimeBlock[i].textContent, currentHour)
        console.log(parseInt(myTimeBlock[i].id.substring(5)))
        if ((parseInt(myTimeBlock[i].id.substring(5))) < currentHour) {
            myTimeBlock[i].classList.add('past')
        }else if ((parseInt(myTimeBlock[i].id.substring(5))) === currentHour){
            myTimeBlock[i].classList.remove('future')
            myTimeBlock[i].classList.add('present')
            myTimeBlock[i].classList.remove('past')
        }else {
            myTimeBlock[i].classList.add('future')
            myTimeBlock[i].classList.remove('present')
            myTimeBlock[i].classList.remove('past')
        }
       

    }
}
checkTime();
// console.log(localStorage.getItem('10am'))

// On save, it will take the input the user put in, and save it into localstorage in respect of that timeblock
// var testEl = document.querySelector('#test')
// var testEl = document.getElementsByClassName('col-sm-10 description')

var testEl = document.getElementById('#input')
console.log(testEl)
localStorage.setItem('10am', 'Go to Work')
localStorage.setItem('hour-9', 'textarea')
localStorage.setItem('11am', 'LEavfework')
testEl = localStorage.getItem('hour-9')
console.log(testEl)

// function addTextEntry(key, text, isNewEntry) {

//     // Create a textarea element to edit the entry
//     var textEntry = document.getElementById('input').innerText;
//     textEntry.placeholder = "(new entry)";

//     // Set the text within the textarea
//     textEntry.innerText = text;

//     // Add a section to the diary containing the textarea
//     addSection(key, textEntry);

//     // If this is a new entry (added by the user clicking a button)
//     // move the focus to the text area to encourage typing
//     if (isNewEntry) {
//       textEntry.focus();
//     }

// document.getElementById("button-9").addEventListener("click", function() {
//     // TODO: Within the listener function...
//     // TODO: ...make an item using the text area value
//     item = makeItem(
//     "text",
//     textEntry.value
//   );
//     // TODO: ...store the item in local storage using the given key
//      localStorage.setItem(hour-9, item);
//      });

//     }
//     addTextEntry(key, text, isNewEntry)

// localStorage.input = "";
document.getElementById("input").innerText = localStorage.input;
console.log(localStorage.input)
document.getElementById("button-9").addEventListener("click", function(){
    localStorage.setItem("hour-9", localStorage.input);
});