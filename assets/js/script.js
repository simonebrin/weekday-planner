//Show current date
$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

var currentDay = moment().format("MMM Do YY")
var currentHour = moment().hour()

// Determine time and add/remove css class accordinly
var myTimeBlock = document.getElementsByClassName('time-block')
console.log(currentHour)
console.log(currentDay)
function checkTime() {
    for (let i = 0; i < myTimeBlock.length; i++) {
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

// Save button functionality and local storage save
$('.saveBtn').on('click', function() {
    var value = $(this).siblings('.description').val()
    var time = $(this).siblings('.description').attr('id')
    console.log(time ,value)
    localStorage.setItem(time, value)

})
for (let i = 9; i < 18; i++) {
    $(`#input-${i}`).val(localStorage.getItem(`input-${i}`))
}