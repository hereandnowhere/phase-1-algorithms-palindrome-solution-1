function reverseString(word) {
  const wordArray = word.split("");
  const reversedArray = wordArray.reverse();
  const wordReversed = reversedArray.join("");
  return wordReversed;
}

function isPalindrome(word) {
  const reversedWord = reverseString(word);
  if (word === reversedWord){
    return true;
  } else {
    return false;
  }
}


  /* 
  reverse word and save in variable
  compare reversed word with word
  return boolean value
*/

/*
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

console.log("Expecting: ih");
console.log("=>", reverseString("hi"));

console.log("");

console.log("Expecting: tobor");
console.log("=>", reverseString("robot"));

console.log("");

console.log("Expecting: mom");
console.log("=>", reverseString("mom"));

module.exports = isPalindrome;
