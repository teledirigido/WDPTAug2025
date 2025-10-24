// src/cents-to-decimals.js
function centsToDecimals(amount) {
  if ( typeof amount !== 'number' ) {
    return false;
  }
  return amount / 100;
}

function calculateTip(amount) {
  return amount / 10;
}