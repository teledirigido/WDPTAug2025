const express = require('express');
const app = express();

app.use(express.json());
// Our f irst ever route:
// app.<action>(<path>, <callback>);

app.get('/', (request, response) => {


  // Way #1
  // instructions to request data
  // you get the data
  // you pass the data to the response 
  // response.sendFile( ... )

 // Way #2
 // connect to mongoDB, SQL, LowDB, Prisma
 // request data to the collection
 // send the data to response.json
 response.json({ render: true, user: 'root@mail.com' })

});

app.get('/about', (request, response) => {
  response.send('This is my about page');
});

const list = [
  { id: '1', title: 'Amanita Muscaria', toxic: true },
  { id: '2', title: 'Shitake', toxic: false },
  { id: '3', title: 'Oyster', toxic: false },
];

app.get('/mushrooms/:mushroomId', (request, response) => {

  // http://localhost:3000/mushrooms/100
  const { mushroomId } = request.params;
  console.log(typeof mushroomId);
  const result = list.filter( (item) => item.id === mushroomId);
  response.json(result);
});


app.get('/mushrooms', (request, response) => {
  response.json(list);
});

app.post('/mushrooms', (request,response) => {
  const { title, toxic } = request.body;

  list.push({
    id: list.length++,
    title: title,
    toxic: toxic
  });
  response.json({ added: true })
});

/**
 * http://localhost:3000/search?artist=shakira&album=donde%20estan%20los%20ladrones
 */
app.get('/search', (req, res) => {
  console.log(req.query);
  res.json(req.query);
});

app.post('/search-post', (req, res) => {
  console.log(req.body);
});


// create a query to search studentId = 1, orderBy = lastname, order ASC
// http://localhost:3000/search/?studentBased=berlin&orderBy=lastname&order=ASC

// https://www.smashingmagazine.com/search/?q=css&filter=true&google_tag_manager=123123213
// https://www.smashingmagazine.com/search/?q=javascript

// The guardian
// https://jobs.theguardian.com/searchjobs/?Keywords=Web+developer&radialtown=&LocationId=&RadialLocation=30
// https://jobs.theguardian.com/searchjobs/?Keywords=Web+developer&radialtown=London&LocationId=&RadialLocation=30&NearFacetsShown=true&CountryCode=

/**
 * 
 * 
 * // username > display all users
 * // username/:usernameId > display the user by the id
 * const users = [
    { id: '1', username: 'John', email: 'john@mail.com' },
    { id: '2', username: 'Alice', email: 'alice@mail.com' },
    { id: '3', username: 'Tom', email: 'tom@mail.com' },
  ];
 */



// Start the server
app.listen(3000, () => { 
  return console.log('Server is up on http://localhost:3000');
});