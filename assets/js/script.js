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


$('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val()
    var time = $(this).siblings('.description').attr('id')
    console.log(time ,value)
    localStorage.setItem(time, value)

})
for (let i = 9; i < 18; i++) {
    $(`#input-${i}`).val(localStorage.getItem(`input-${i}`))
}