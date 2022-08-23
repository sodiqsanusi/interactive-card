const inputName = document.getElementById('name');
const cardName = document.getElementById('card--name');
const inputNumber = document.getElementById('number');
const cardNumber = document.getElementById('card--number')
const inputCVV = document.getElementById('cvv');
const cardCVV = document.getElementById('card--cvv');
const inputExpMonth = document.getElementById('expiry--month');
const cardExpMonth = document.getElementById('card--expMonth');
const inputExpYear = document.getElementById('expiry--year')
const cardExpYear = document.getElementById('card--expYear')
const submitButton = document.getElementById('confirm-btn')
const inProgressMain = document.getElementById('in-progress')
const completedMain = document.getElementById('completed')





const formattedNumber = (num, dig) => {
  if(dig == 16){
    num = num.toLocaleString('en-US', {
      minimumIntegerDigits: dig,
      useGrouping: false
    }) + ''
    return `${num.slice(0, 4)} ${num.slice(4, 8)} ${num.slice(8, 12)} ${num.slice(12, 16)}`
  }
  return num.toLocaleString('en-US', {
      minimumIntegerDigits: dig,
      useGrouping: false
  })
}

inputName.addEventListener('keyup', (e) => {
  let final = e.target.value
  if(final == ''){
    final = 'Jane Appleseed'
  }
  cardName.textContent = final.toUpperCase()
})

inputCVV.addEventListener('keyup', (e) => {
  let final = e.target.value
  if(final == ''){
    final = '000'
  }
  final = formattedNumber(parseInt(final), 3)
  cardCVV.textContent = final
})

inputNumber.addEventListener('keyup', (e) => {
  let final = e.target.value
  if(final == ''){
    final = '000'
  }
  final = formattedNumber(parseInt(final), 16)
  cardNumber.textContent = final
})

inputExpMonth.addEventListener('keyup', (e) => {
  let final = e.target.value
  if(final == ''){
    final = '00'
  }
  if(final > 12){
    final = '12'
  }
  final = formattedNumber(parseInt(final), 2)
  cardExpMonth.textContent = final
})

inputExpYear.addEventListener('keyup', (e) => {
  let final = e.target.value
  if(final == ''){
    final = '00'
  }
  final = formattedNumber(parseInt(final), 2)
  cardExpYear.textContent = final
})
let lilac = [0, 0, 0, 0, 0]
submitButton.addEventListener('click', () => {
  if(!inputName.value){
    inputName.classList.add('error')
    lilac[0] = 0
  }else{
    inputName.classList.remove('error')
    lilac[0] = 1
  }
  if(!inputNumber.value){
    inputNumber.classList.add('error')
    lilac[1] = 0
  }else{
    inputNumber.classList.remove('error')
    lilac[1] = 1
  }
  if(!inputExpMonth.value){
    inputExpMonth.classList.add('error')
    lilac[2] = 0
  }else{
    inputExpMonth.classList.remove('error')
    lilac[2] = 1
  }
  if(!inputExpYear.value){
    inputExpYear.classList.add('error')
    lilac[3] = 0
  }else{
    inputExpYear.classList.remove('error')
    lilac[3] = 1
  }
  if(!inputCVV.value){
    inputCVV.classList.add('error')
    lilac[4] = 0
  }else{
    inputCVV.classList.remove('error')
    lilac[4] = 1
  }
  let result = lilac.reduce((a,b) => a + b, 0)
  if(result == 5){
    inProgressMain.style.display = 'none'
    completedMain.style.display = 'flex'
  }
})