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

// var testEls = document.getElementById('#input-9')
// document.getElementById('#input-9').innerHTML = localStorage.input
// console.log(testEls)
// console.log(localStorage.input)
// localStorage.setItem('10am', 'Go to Work')
// localStorage.setItem('hour-9', 'textarea')
// localStorage.setItem('11am', 'LEavfework')
// testEl = localStorage.getItem('hour-9')
// console.log(testEl)

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
// document.getElementById("input-9").innerHTML = localStorage.input;
// console.log(localStorage.input)
// document.getElementById("button-9").addEventListener("click", function(){
//     document.getElementById("input-9").textContent = localStorage.input;
//     localStorage.setItem("hour-9", localStorage.input);
// });

var input_textarea = document.querySelector('.description-9');
var output_div = document.querySelector('#input-9');
var save_button = document.querySelector('.btn');

save_button.addEventListener('click', updateOutput);

output_div.textContent = localStorage.getItem('hour-9');
input_textarea.value = localStorage.getItem('hour-9');

function updateOutput() {
	localStorage.setItem('hour-9', input_textarea.value);
	
	output_div.textContent = input_textarea.value;
}

var input_textarea2 = document.querySelector('.description-10');
var output_div2 = document.querySelector('#input-10');
var save_button2 = document.querySelector('.btn');

save_button2.addEventListener('click', updateOutput);

output_div2.textContent = localStorage.getItem('hour-10');
input_textarea2.value = localStorage.getItem('hour-10');

function updateOutput() {
	localStorage.setItem('hour-10', input_textarea2.value);
	
	output_div2.textContent = input_textarea2.value;
}

var input_textarea3 = document.querySelector('.description-11');
var output_div3 = document.querySelector('#input-11');
var save_button3 = document.querySelector('.btn');

save_button3.addEventListener('click', updateOutput);

output_div3.textContent = localStorage.getItem('hour-11');
input_textarea3.value = localStorage.getItem('hour-11');

// function updateOutput() {
// 	localStorage.setItem('hour-11', input_textarea3.value);
	
// 	output_div3.textContent = input_textarea3.value;
// }

// var input_textarea4 = document.querySelector('.description-12');
// var output_div4 = document.querySelector('#input-12');
// var save_button4 = document.querySelector('.btn');

// save_button4.addEventListener('click', updateOutput);

// output_div4.textContent = localStorage.getItem('hour-12');
// input_textarea4.value = localStorage.getItem('hour-12');

// function updateOutput() {
// 	localStorage.setItem('hour-12', input_textarea4.value);
	
// 	output_div4.textContent = input_textarea4.value;
// }

// var input_textarea5 = document.querySelector('.description-13');
// var output_div5 = document.querySelector('#input-13');
// var save_button5 = document.querySelector('.btn');

// save_button5.addEventListener('click', updateOutput);

// output_div5.textContent = localStorage.getItem('hour-13');
// input_textarea5.value = localStorage.getItem('hour-13');

// function updateOutput() {
// 	localStorage.setItem('hour-13', input_textarea5.value);
	
// 	output_div5.textContent = input_textarea5.value;
// }

// var input_textarea6 = document.querySelector('.description-14');
// var output_div6 = document.querySelector('#input-14');
// var save_button6 = document.querySelector('.btn');

// save_button6.addEventListener('click', updateOutput);

// output_div6.textContent = localStorage.getItem('hour-14');
// input_textarea6.value = localStorage.getItem('hour-14');

// function updateOutput() {
// 	localStorage.setItem('hour-14', input_textarea6.value);
	
// 	output_div6.textContent = input_textarea6.value;
// }

// var input_textarea7 = document.querySelector('.description-15');
// var output_div7 = document.querySelector('#input-15');
// var save_button7 = document.querySelector('.btn');

// save_button7.addEventListener('click', updateOutput);

// output_div7.textContent = localStorage.getItem('hour-15');
// input_textarea7.value = localStorage.getItem('hour-15');

// function updateOutput() {
// 	localStorage.setItem('hour-15', input_textarea7.value);
	
// 	output_div7.textContent = input_textarea7.value;
// }

// var input_textarea8 = document.querySelector('.description-16');
// var output_div8 = document.querySelector('#input-16');
// var save_button8 = document.querySelector('.btn');

// save_button8.addEventListener('click', updateOutput);

// output_div8.textContent = localStorage.getItem('hour-16');
// input_textarea8.value = localStorage.getItem('hour-16');

// function updateOutput() {
// 	localStorage.setItem('hour-16', input_textarea8.value);
	
// 	output_div8.textContent = input_textarea8.value;
// }

// var input_textarea9 = document.querySelector('.description-17');
// var output_div9 = document.querySelector('#input-17');
// var save_button9 = document.querySelector('.btn');

// save_button9.addEventListener('click', updateOutput);

// output_div9.textContent = localStorage.getItem('hour-17');
// input_textarea9.value = localStorage.getItem('hour-17');

// function updateOutput() {
// 	localStorage.setItem('hour-17', input_textarea9.value);
	
// 	output_div9.textContent = input_textarea9.value;
// }