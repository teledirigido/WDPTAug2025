function centsToDecimals(cents) {

  if ( typeof cents !== 'number') {
    return false;
  }

  return cents / 100;
}

// Unit tests
console.log(centsToDecimals(105) === 1.05);
console.log(centsToDecimals('104') === false);
console.log(centsToDecimals([]) === false);