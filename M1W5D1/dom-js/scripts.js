console.log('JS Loaded!')

/**
 * 
 * Displays an alert with instructions
 * 
 */
// <a href="#" id="instructions">Click here for instructions</a>
const instructions = document.querySelector('#instructions');

instructions.addEventListener('click', (event) => {
  alert('Please fill up your name and click on submit');
});

/**
 * 
 * Highlight the title by changing the CSS class
 * 
*/

// <a href="#" id="highlight-title">Highlight</a>
const highlight = document.querySelector('#highlight-title');

const handleHighlightClick = (event) => {
  const headingTitle = document.querySelector('h1');
  headingTitle.classList.toggle('highlight');
}

highlight.addEventListener('click', handleHighlightClick);


// <form id="my-form">
const myForm = document.querySelector('#my-form');
// myForm.onclick = function(event) {
//   event.preventDefault();
//   console.log('clicked!');
// };
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevents default behaviour of the event
  const firstName = myForm.querySelector('.your-name'); // same as document.querySelector('#your-name');
  const h1Title = document.querySelector('h1');
  const colorListItems = document.querySelectorAll('.color-list li');

  h1Title.textContent = `Hello ${firstName.value}`;
  h1Title.setAttribute('id', firstName.value);

  // console.log(colorListItems.length);
  if (colorListItems.length > 6) {
    alert('Maximum reached!');
    return;
  }

  const newItem = document.createElement('li'); // Create an html tag (virtually)
  const colorList = document.querySelector('.color-list');
  
  /**
   * 
   * this is the same:
   * document.getElementById('my-id')
   * document.querySelector('#my-id')
   */
  
  newItem.textContent = firstName.value; // add text inside your tag
  newItem.classList.add('new-item');
  colorList.appendChild(newItem);
  newItem.parentNode.classList.add('updated');

})

/**
 * Select multiple elements
 * 
 */
const colors = document.querySelectorAll('li');
console.log(colors);

