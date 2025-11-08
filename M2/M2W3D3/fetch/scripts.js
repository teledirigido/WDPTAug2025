// fetch("https://api.spacexdata.com/v4/launches")
//   .then((response) => { 
//     return response.json();
//   })
//   .then((data) => {
//     console.log("Parsed response: ", data);
//   })
//   .catch( (err) => console.log(err));

// fetch("https://meowfacts.herokuapp.com/")
//   .then((response) => response.json() )
//   .then((responseData) => {
//     // console.log(responseData);
//     responseData.data.forEach( item => {
//       console.log(item);
//     });
//   })
//   .catch( (err) => console.log(err));

async function getFactCats() {
  const response = await fetch("https://meowfacts.herokuapp.com/")
  console.log(response.ok)
  const responseData = await response.json()
  console.log(responseData);
}

getFactCats();