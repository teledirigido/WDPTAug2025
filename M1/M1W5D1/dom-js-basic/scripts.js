const heading = document.querySelector('h1'); // query by the tag

/**
 * CSS Properties (element.style)
 * 

heading.style.backgroundColor = 'green';
heading.style.opacity = '0.4';

 */

/**
 * CSS Classes (element.classList)
 * 
 * add()        -> add a css class
 * remove()     -> remove a css class
 * contains()   -> verifies if css class is present
 * toggle()     -> adds/removes the css class
 * 
 */
heading.classList.add('response-not-found')
heading.classList.add('blue');

// ... 
// ...
console.log(heading.classList.contains('response-not-found'));
heading.classList.remove('blue');

/**
 * Select .planets
 * 
 */
const myParagraph = document.querySelectorAll('.planet'); // query by css class
myParagraph.forEach( (item, index) => {
  if (item.textContent === 'mars') {
    item.style.backgroundColor = 'red';
  }
  item.textContent = `${index} - ${item.textContent}`;
});

const theMoon = document.querySelector('#moon'); // query by the id
console.log(theMoon)


