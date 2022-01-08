module.exports = function toReadable (number) {
  const words  = {
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
    dec: {
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
    unit: {
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

  let unitNum = number % 10;
  let tenthNum = number % 100;
  let decNum = 0;

  if(tenthNum > 10 && tenthNum < 20) {
    decNum = tenthNum;
    unitNum = '';
  } else {
    decNum = (number - unitNum) % 100;
  }

  let hundredNum = number - decNum - unitNum;

  if(number == 0) return "zero";

  return `${words.hundred[hundredNum] || ''}${((decNum > 10 && decNum < 20) ? words.tenths[decNum] : words.dec[decNum]) || ''}${words.unit[unitNum] || ''}`.trim()
}  
