const user = {
  firstName: "Max",
  lastName: "Doe"
}

const reptiles = ['snake', 'cobra'];

function printName({ firstName, lastName }) {
  console.log(firstName, lastName)
}

printName(user);