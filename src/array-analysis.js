function calculateAverage(arr) {
  if (arr.length === 0) return;
  let sum = arr.reduce((accumulator, value) => accumulator + value);

  return sum / arr.length;
}

function analyzeArray(arr) {
  return {
    length: arr.length,
    max: Math.max(...arr),
    min: Math.min(...arr),
    average: calculateAverage(arr),
  };
}

export default analyzeArray;
