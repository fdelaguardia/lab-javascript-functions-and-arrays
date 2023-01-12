//Iteration #1: Find the maximum
const number1 = 4;//parseInt(prompt('First number: '));
const number2 = 8;//parseInt(prompt('Second number:'));

function maxOfTwoNumbers(firstNumber, secondNumber) {
  if (firstNumber > secondNumber) {
    return "The first number is greater\n"
  } else if (firstNumber === secondNumber) {
    return "The numbers have the same value\n"
  } else {
    return "The Second number is greater\n"
  }
}

console.log(maxOfTwoNumbers(number1, number2))





//Iteration #2: Find the longest word
function findLonguestWord(arrayOfWords) {
  let longuestWord = "";
  for (let a = 0; a < arrayOfWords.length; a++) {
    if (arrayOfWords[a].length > longuestWord.length) {
      longuestWord = arrayOfWords[a];
    } else if (arrayOfWords[a].length === longuestWord.length) {
      continue;
    }
  }
  return longuestWord;
}

console.log("The longuest word is:", findLonguestWord(['mystery', 'brother', 'aviator', 'crocodile', 'pearl', 'orchard', 'crackpot']))





//Iteration #3 & Bonus Iteration #3.1 Calculate the sum
function sumNumbers(arrayOfNumbers) {
  let sum = 0;
  for (let b = 0; b < arrayOfNumbers.length; b++) {
    sum += arrayOfNumbers[b];
  }
  return sum;
}

console.log(`\nThe sum of the numbers is: ${sumNumbers([6, 12, 1, 18, 13, 16, 2, 1, 8, 10])}\n`)





//Bonus Iteration #3.2: A generic `sum()` function
function sumOfMixedArray(mixedArray) {
  let addition = 0;
  for (let c = 0; c < mixedArray.length; c++) {

    if (typeof mixedArray[c] === "number") {
      addition += mixedArray[c];
    } else if (typeof mixedArray[c] === "string") {
      addition += mixedArray[c].length;
    } else if (typeof mixedArray[c] === "boolean") {
      if (mixedArray[c] === true) {
        addition++;
      } else {
        continue;
      }
    }

  }
  return addition;
}
const polymorphismSum = sumOfMixedArray([6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10]);

console.log(`The polymorphism sum is equal to: ${polymorphismSum}\n`)





//Iteration #4 & #4.1: Array of numbers
const numbersAvg = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers) {
  return sumNumbers(numbers) / numbers.length;
}
console.log(averageNumbers(numbersAvg));





//Iteration #4.2: Array of strings
function averageWordLength(arrayWords) {
  let wordCount = 0;
  for (let k = 0; k < arrayWords.length; k++) {
    wordCount += arrayWords[k].length;
  }
  return wordCount / arrayWords.length;
}
console.log(averageWordLength(['seat', 'correspond', 'linen', 'motif', 'hole', 'smell', 'smart', 'chaos', 'fuel', 'palace']));





//Bonus - Iteration #4.3: A generic `avg()` function
function genericAvg(mixedArr) {
  let sum = sumOfMixedArray(mixedArr);
  return sum / mixedArr.length;
}
console.log(`The average of the mixed arrange is: ${genericAvg([6, 12, 'miami', 1, true, 'barca', '200', 'lisboa', 8, 10])}`)





//Iteration #5: Unique arrays
function uniquifyArray(words) {
  for (let d = 0; d < words.length; d++) {

    for (let e = d + 1; e < words.length; e++) {
      if (words[d] === words[e]) {
        words.splice(e, 1);
      }
    }

  }
  return words;
}


console.log(uniquifyArray([
  'crab',
  'poison',
  'contagious',
  'simple',
  'bring',
  'sharp',
  'playground',
  'poison',
  'communion',
  'simple',
  'bring'
]));





//Iteration #6: Find elements
function doesWordExist(words, origin) {
  let check;

  for (let h = 0; h < words.length; h++) {
    if (origin === words[h]) {
      check = true;
      return check;
    } else {
      check = false;
    }
  }

  return check;
}
const checkWords = ['machine', 'subset', 'trouble', 'starting', 'matter', 'eating', 'truth', 'disobedience'];

const ori = "disobedience";

console.log(doesWordExist(checkWords, ori))





//Iteration #7: Count repetition
function howManyTimes(array, word) {
  let count = 0;

  for (let i = 0; i < array.length; i++) {
    if (word === array[i]) {
      count++;
    }
  }
  return count;
}

const wordsRepeated = [
  'machine',
  'matter',
  'subset',
  'trouble',
  'starting',
  'matter',
  'eating',
  'matter',
  'truth',
  'disobedience',
  'matter'
];
const wordToCheck = "matter";

console.log(howManyTimes(wordsRepeated, wordToCheck))