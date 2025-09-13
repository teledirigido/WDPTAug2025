const books = [
  {
    name: 'The body keeps the score',
    author: 'Bessel van der kolk',
    isbn: 1231231239808,
    isAvailable: true
  },
  {
    name: 'One straw revolution',
    author: 'Masanobu Fukuoka',
    isbn: 93804895903458,
    isAvailable: false,
  },
  {
    name: 'Braiding sweatgrass',
    author: 'Robin Wall Kimmerer',
    isbn: 98832489095553,
    isAvailable: true
  },
];

function bookReservation(code) {
  books.forEach( book => {
    if (book.isbn === code) {
      book.isAvailable = false;
    }
  });
  return books;
}

console.log(bookReservation(98832489095553));
