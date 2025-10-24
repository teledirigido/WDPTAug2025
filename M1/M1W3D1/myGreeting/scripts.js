function greeting(firstName, LastName) {

  if (firstName && LastName) {
    return `Your first name if ${firstName} and your last name ${LastName}`;
  }
  
  return 'Who are you?';

}

const myGreeting = greeting('Bob', 'Marley')

console.log(myGreeting)