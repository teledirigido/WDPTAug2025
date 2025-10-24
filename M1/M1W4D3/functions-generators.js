// Generator version
function* generateUsers(count) {
  for (let i = 1; i <= count; i++) {
    yield {
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`,
      profile: {
        bio: `This is a long bio for user ${i}`.repeat(100),
        preferences: new Array(100).fill(i),
        metadata: { created: new Date(), lastLogin: new Date() }
      }
    };
  }
}

// Array version  
function generateUsersArray(count) {
  const users = [];
  for (let i = 1; i <= count; i++) {
    users.push({
      id: i,
      name: `User ${i}`,
      email: `user${i}@example.com`, 
      profile: {
        bio: `This is a long bio for user ${i}`.repeat(100),
        preferences: new Array(100).fill(i),
        metadata: { created: new Date(), lastLogin: new Date() }
      }
    });
  }
  return users;
}

// Add this to actually see memory usage
function getMemoryUsage() {
  if (typeof process !== 'undefined' && process.memoryUsage) {
    return Math.round(process.memoryUsage().heapUsed / 1024 / 1024);
  }
  return 0;
}

console.log('Initial memory:', getMemoryUsage(), 'MB');

// Array approach
const limit = 10000;

const before = getMemoryUsage();
const bigArray = generateUsersArray(limit);
const after = getMemoryUsage();
console.log('Array memory usage:', after - before, 'MB');

// Generator approach  
const beforeGen = getMemoryUsage();
const generator = generateUsers(limit);
let count = 0;
for(user of generator) {
  if (count > 2) break;
  console.log(user.email);
  count++;
}
const afterGen = getMemoryUsage();
console.log('Generator memory usage:', afterGen - beforeGen, 'MB');