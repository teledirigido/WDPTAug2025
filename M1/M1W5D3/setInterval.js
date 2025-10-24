let i = 60;

const myInterval = setInterval( () => {
  if (i !== 0) {
    console.log(`Time to answer ${i}!`);
    i--;
  } else {
    console.log('🚨 Game Over! 🚨');
    clearInterval(myInterval);
  }
}, 50); 