function sayHello(firstName, color) {
  try {
    if (firstName && color) {
      console.log(`Hello ${firstName}. your color is: ${color}`);
    } else if (!color) {
      console.log(`Hello ${firstNe}`);
    }

  } catch (error) {
    console.error(error)
  } finally {
    console.log('This will run always');
  }
}

sayHello('Miguel', 'red');
sayHello('Bob');