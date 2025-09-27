let price1 = 10.11;
let price2 = price1;

// console.log(price1 === price2);

const book1 = {
  author: "Isabel Allende"
}

const book2 = book1;
book2.author = "Pablo Neruda";
book2.nationality = "Chile";

// console.log(book1);
// console.log(book2);
// console.log(book1 === book2);

const city = {
  name: "Barcelona"
};
const city2 = {
  name: "Barcelona"
}

// console.log(city);
// console.log(city2);
// console.log(city === city2);

const country = {
  name: "Spain",
  capital: "Madrid",
  locatedIn: "Europe",
  timezone: "UTC"
};

const country2 = {...country};
country2.name = "Portugal";
country2.capital = "Lisbon";

// console.log(country);
// console.log(country2);

const languages = ["CSS", "HTML"];
const languages2 = ["Javascript"];
const languages3 = [...languages, "Python", "MongoDB"]; // copy of languages and add more elements;

console.log(languages)
console.log(languages3)









