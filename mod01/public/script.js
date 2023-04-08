var buttonSum = document.querySelector('#button');
function sum2Numbers(numberOne, numberTwo) {
    return numberOne + numberTwo;
}
buttonSum.addEventListener("click", function () {
    var numberOne = document.querySelector('#numberOne');
    var numberTwo = document.querySelector('#numberTwo');
    var result = document.querySelector('#result');
    result.innerHTML = sum2Numbers(+numberOne.value, +numberTwo.value).toString();
});
