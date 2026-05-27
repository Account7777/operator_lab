// Fill in the blanks
const file = [
    { id: 1, name: "Alice", role: "Admin" },
    { id: 2, name: "Bob", role: "User" },
    { id: 3, name: "Charlie", role: "Guest" }
];

const headers = Object.keys(file[0]);
console.log(headers);
const js_result = [
    headers.join(","), //Joins the string with a comma
    ...file.map(row => headers.map(h => row[h]).join(",") //maps/loops into each item and then it identified the value of that column and joins it. 
    )
].join("\n");

console.log(js_result);
// Save manually into:
// javascript_output.csv
