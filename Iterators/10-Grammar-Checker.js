
let storyWords = story.split(' ');
let unnecessaryWord = 'literally';
let misspelledWord = 'beautifull';
let badWord = 'freaking';

console.log(storyWords.join(' '));

let count = 0;

storyWords.forEach(function(word) {
  count++;
});

console.log(count);

storyWords = storyWords.filter(function(word) {
  return word !== unnecessaryWord;
});

storyWords = storyWords.map(function(word) {
  if (word === misspelledWord) {
    return 'beautiful';
  } else {
    return word;
  }
});

let badWordIndex = storyWords.findIndex(function(word) {
  return word === badWord;
});

if (badWordIndex !== -1) {
  storyWords[badWordIndex] = 'really';
}

let lengthCheck = storyWords.every(function(word) {
  return word.length <= 10;
});

console.log(lengthCheck);

// Replace the word longer than 10 characters with a shorter word
if (!lengthCheck) {
  let longWord = storyWords.find(function(word) {
    return word.length > 10;
  });
  let replacementWord = 'stunning';
  let index = storyWords.indexOf(longWord);
  storyWords[index] = replacementWord;
}

console.log(storyWords.join(' '));