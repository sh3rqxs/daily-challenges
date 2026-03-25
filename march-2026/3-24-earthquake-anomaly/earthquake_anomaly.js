// Earthquake Anomaly 🌏
// shercodes

function earthquakeAnomaly(readings) {
  let sorted = [...readings].sort((a, b) => a - b); // Creates a shallow copy of readings and sorts it in ascending order.
  
  // Calculates the median.
  let median = 0;
  if (sorted.length % 2 === 0) { 
    let mid1 = sorted[sorted.length / 2 - 1];
    let mid2 = sorted[sorted.length / 2];
    median = (mid1 + mid2) / 2; // When array's length is even.
  } else {
    median = sorted[Math.floor(sorted.length / 2)]; // When array's length is odd.
  }

  let suspicious = []; // Result array.
  let threshold = median * 1.5; // Calculates the threshold.

  // Collects suspicious readings by its index.
  for (let i = 0; i < readings.length; i++) {
    if (readings[i] > threshold) {
      suspicious.push(i);
    }
  }
  
  return suspicious;
}