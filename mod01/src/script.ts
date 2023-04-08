const buttonSum = document.querySelector('#button') as HTMLElement

function sum2Numbers(numberOne:number, numberTwo:number){
  return numberOne + numberTwo
}

buttonSum.addEventListener("click", () =>{
  const numberOne = document.querySelector('#numberOne') as HTMLInputElement
  const numberTwo = document.querySelector('#numberTwo') as HTMLInputElement
  const result = document.querySelector('#result') as HTMLOutputElement 

   result.innerHTML = sum2Numbers(+numberOne.value, +numberTwo.value).toString()
})


