$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var myTimeBlock = document.getElementsByClassName('time-block')
// var myTimeBlock = document.querySelector(".hour")
// var timeBackground = document.querySelector('time-block')
var currentDay = moment().format("MMM Do YY")
var currentHour = moment().hour()
// var currentHour = moment().format("hh")
console.log(currentHour)
console.log(currentDay)
function checkTime() {
    for (let i = 0; i < myTimeBlock.length; i++) {
        //currentHour is going to equal 11
        if (myTimeBlock[i].textContent < currentHour) {
            myTimeBlock[i].classList.add('past')
        }else if (myTimeBlock[i].textContent === currentHour){
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
localStorage.setItem('10am', 'Go to Work')
localStorage.setItem('11am', 'LEavfework')
// testEl.textContent = localStorage.getItem('10am')
