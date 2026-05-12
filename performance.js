const scores = [85, 87, 90, 94, 88];
// Calculate average
// .reduce() adds each number (b) to the total (a)
const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
// Conditional Logic (Ternary Operator)
const result = avg > 95 ? "Meeting expectations" : "Needs improvement"
console.log(`Average: ${avg} - ${result}`);