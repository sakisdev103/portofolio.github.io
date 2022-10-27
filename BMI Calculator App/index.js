function changeColorDark() {
    document.body.style.backgroundColor = "black"
    document.getElementById("theme-light").style.display = "grid"
    document.getElementById("theme-dark").style.display = "none"
}

function changeColorLight() {
    document.body.style.backgroundColor = "#fff"
    document.getElementById("theme-dark").style.display = "grid"
    document.getElementById("theme-light").style.display = "none"
}

message = ""


function submitForm(){
    let height = parseInt(document.getElementById("height").value)
    let weight = parseInt(document.getElementById("weight").value)
    let formResultEl = document.getElementById("formResult")
    let formMessageEl = document.getElementById("formMessage")
    let bmi = 0

    countBmi =  (weight / Math.pow( (height/100), 2 )).toFixed(1)
    if(countBmi < 18.5){
        message = "Underweight"
    } else if(countBmi > 18.5 && countBmi <= 24.9){
        message = "Normal Weight"
    } else if(countBmi >= 25 && countBmi < 29.9){
        message = "Overweight"
    } else {
        message = "Obese"
    }

    formResultEl.textContent = "Your Bmi is: " + countBmi 
    formMessageEl.textContent = "You are: " + message
}