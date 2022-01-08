module.exports = function toReadable (number) {
  let arr = number.toString()

  let human_readable_number = []

  for (let i = arr.length - 1; i >= 0; i--) {


    let curr = Number(arr[i])

    let value = ''

    if (curr === 0) { value = 'zero' }
    if (curr === 1) { value = 'one' }
    if (curr === 2) { value = 'two' }
    if (curr === 3) { value = 'three' }
    if (curr === 4) { value = 'four' }
    if (curr === 5) { value = 'five' }
    if (curr === 6) { value = 'six' }
    if (curr === 7) { value = 'seven' }
    if (curr === 8) { value = 'eight' }
    if (curr === 9) { value = 'nine' }

    if (i === arr.length - 1) {
      if (curr !== 0) {
        human_readable_number.unshift(value)
      } 
      else {
        arr.length === 1 && human_readable_number.unshift(value)
      }
    } 
    else if (i === arr.length - 2) {
    if (curr === 1) {
        human_readable_number.pop()
        if (Number(arr[arr.length - 1]) === 0) { human_readable_number.unshift('ten')}
        if (Number(arr[arr.length - 1]) === 1) { human_readable_number.unshift('eleven') }
        if (Number(arr[arr.length - 1]) === 2) { human_readable_number.unshift('twelve') }
        if (Number(arr[arr.length - 1]) === 3) { human_readable_number.unshift('thirteen') }
        if (Number(arr[arr.length - 1]) === 4) { human_readable_number.unshift('fourteen') }
        if (Number(arr[arr.length - 1]) === 5) { human_readable_number.unshift('fifteen') }
        if (Number(arr[arr.length - 1]) === 6) { human_readable_number.unshift('sixteen') }
        if (Number(arr[arr.length - 1]) === 7) { human_readable_number.unshift('seventeen') }
        if (Number(arr[arr.length - 1]) === 8) { human_readable_number.unshift('eighteen') }
        if (Number(arr[arr.length - 1]) === 9) { human_readable_number.unshift('nineteen') }
      }

      if (curr >= 2 && curr <= 9) {
        if (curr === 2) { human_readable_number.unshift('twenty') }
        if (curr === 3) { human_readable_number.unshift('thirty') }
        if (curr === 4) { human_readable_number.unshift('forty') }
        if (curr === 5) { human_readable_number.unshift('fifty') }
        if (curr === 6) { human_readable_number.unshift('sixty') }
        if (curr === 7) { human_readable_number.unshift('seventy') }
        if (curr === 8) { human_readable_number.unshift('eighty') }
        if (curr === 9) { human_readable_number.unshift('ninety') }
      }
    } 
    else if (i === arr.length - 3) {
      human_readable_numberhuman_readable_number.unshift(`${value} hundred`)
    }
  }

  return human_readable_number.join(' ')
}
