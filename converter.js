const fs = require('fs');

let mydataset = [
    {
        "id": 101,
        "name": "Alice Johnson",
        "role": "Lead Engineer",
        "skills": ["Python", "AWS", "Docker"],
        "is_active": true
    },
    {
        "id": 102,
        "name": "Marcus Chen",
        "role": "UX Designer",
        "skills": ["Figma", "CSS", "React"],
        "is_active": true
    },
    {
        "id": 103,
        "name": "Sarah Smith",
        "role": "Data Analyst",
        "skills": ["SQL", "Tableau", "R"],
        "is_active": false
    }
];

// 1. Extract headers from the keys of the first object
const headers = Object.keys(mydataset[0]).join(',');

// 2. Map the dataset into CSV rows
const rows = mydataset.map(item => {
    return Object.values(item).map(value => {
        // Format arrays (skills) as quoted strings
        if (Array.isArray(value)) return `"${value.join(', ')}"`;
        return value;
    }).join(',');
}).join('\n');

const js_result = headers + '\n' + rows;

// 3. Write the content to the file
fs.writeFileSync('js_result.csv', js_result);

console.log('Successfully saved to js_result.csv');

