const scores = [85, 87, 90, 94, 88];
// Calculate average
// .reduce() adds each number (b) to the total (a)
const avg = scores.reduce((a, b) => a + b, 0) / scores.length;
// Conditional Logic (Ternary Operator)
scores.forEach((score) => {
    const result = score > avg ? "Meeting Expectations" : "Needs Improvement";
    console.log(`Average: ${avg}, Score: ${score} - ${result}`);
});

