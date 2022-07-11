
var myTimeBlock = document.querySelector('.timeblock')
var currentDay = moment().format("MMM Do YY")
var currentHour = moment().format("HH")
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

console.log(localStorage.getItem('10am'))

// On save, it will take the input the user put in, and save it into localstorage in respect of that timeblock
var testEl = document.querySelector('#test')
testEl.textContent = localStorage.getItem('10am')
localStorage.setItem('10am', 'Go to Work')
localStorage.setItem('11am', 'LEavfework')