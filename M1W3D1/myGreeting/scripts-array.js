// Write a function that takes 3 arguments and return an array with them
function languages(lang1, lang2, lang3) {
  // scope of lang1, lang2, lang3
  return [lang1,lang2, lang3];
}

const myFavLanguages = languages('Italian', 'Spanish', 'French');

// Outputs: Array(3) [ "Italian", "Spanish", "French" ]
console.log(myFavLanguages);

// Only output Spanish
console.log(myFavLanguages[1])

const myCodeLanguages = languages('HTML', 'CSS', 'Javascript');
console.log(myCodeLanguages);
console.log(myCodeLanguages[0])