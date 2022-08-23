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