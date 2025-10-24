const words = ['This', 'is', 'one', 'big', 'string'];

const result = words.reduce( (acc, item) => {
  return acc + " " + item;
});
console.log(result);