function getValue(){
    let startValue = document.getElementById("startValue").value;
    let endValue = document.getElementById("endValue").value;
    let numbers = [];

    startValue = parseInt(startValue);
    endValue = parseInt(endValue);

    if (Number.isInteger(startValue) && Number.isInteger(endValue)){
        numbers = generateNumbers(startValue, endValue);
        displayNumbers(numbers);

    } else {
        alert("You must enter an integer");
    }

}

function generateNumbers(startValue, endValue){

    let numbers = [];

    for (let index = startValue; index <= endValue; index++) {

        numbers.push(index);
    }

    return numbers
}


function displayNumbers(numbers) {
    let templateRow = "";
    for (let index = 0; index < numbers.length; index++) {
      let number = numbers[index]; 

        if (number % 2 === 0) {
            templateRow += `<tr><td><strong>${number}</strong></td></tr>`;
        } else {
            templateRow += `<tr><td>${number}</td></tr>`;
        }

    }
    document.getElementById("results").innerHTML = templateRow;
  }