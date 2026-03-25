// Cuddly Kittens 🐈
// shercodes

function cuddlyKittens(kittens, limit) {
  let longestGroup = 0; // Stores the result.

  // Sets the values for min and max with the index of the first kitten.
  for (let i = 0; i < kittens.length; i++) {
    let min = kittens[i];
    let max = kittens[i];

    // Adds kittens to the right.
    for (let j = i; j < kittens.length; j++) {
      min = Math.min(min, kittens[j]);
      max = Math.max(max, kittens[j]);

      // Establishes a calm condition.
      if (max - min <= limit){
        longestGroup = Math.max(longestGroup, j - i + 1);
      } else {
        break;
      }
    }
  }

  return longestGroup;
}