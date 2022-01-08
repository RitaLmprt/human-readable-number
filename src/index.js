module.exports = function toReadable (number) {
  const numbers  = {
    hundred: {
        100: "one hundred ",
        200: "two hundred ",
        300: "three hundred ",
        400: "four hundred ",
        500: "five hundred ",
        600: "six hundred ",
        700: "seven hundred ",
        800: "eight hundred ",
        900: "nine hundred "
    },
    decimal: {
        10: "ten ",
        20: "twenty ",
        30: "thirty ",
        40: "forty ",
        50: "fifty ",
        60: "sixty ",
        70: "seventy ",
        80: "eighty ",
        90: "ninety "
    },
    ones: {
        1: "one",
        2: "two",
        3: "three",
        4: "four",
        5: "five",
        6: "six",
        7: "seven",
        8: "eight",
        9: "nine"
    },
    tenths: {
        11: "eleven",
        12: "twelve",
        13: "thirteen",
        14: "fourteen",
        15: "fifteen",
        16: "sixteen",
        17: "seventeen",
        18: "eighteen",
        19: "nineteen"
    }
  }

  let onesNum = number % 10;
  let tenthNum = number % 100;
  let decimalNum = 0;

  if(tenthNum > 10 && tenthNum < 20) {
    decimalNum = tenthNum;
    onesNum = '';
  } else {
    decimalNum = (number - onesNum) % 100;
  }

  let hundredNum = number - decimalNum - onesNum;

  if(number == 0) return "zero";

  return `${numbers.hundred[hundredNum] || ''}${((decimalNum > 10 && decimalNum < 20) ? numbers.tenths[decimalNum] : numbers.dec[decimalNum]) || ''}${numbers.ones[onesNum] || ''}`.trim()
}   

