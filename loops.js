function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    array.push(`"I am ${i} strange loop${i === 0 ? '' : 's'}."`)
  }
}

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function whileLoop(array) {
  while (maybeTrue() && array.length > 0) {
    
  }
}