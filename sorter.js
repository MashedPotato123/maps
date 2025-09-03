const fs = require('fs');

// Read file
const rawData = fs.readFileSync('data.json', 'utf8');
const data = JSON.parse(rawData);

// Sort entries by "na"
const sortedEntries = Object.entries(data).sort((a, b) => {
  const nameA = (a[1].na || "").toUpperCase();
  const nameB = (b[1].na || "").toUpperCase();
  return nameA.localeCompare(nameB);
});

// Create new object with reset IDs
const newData = {};
sortedEntries.forEach(([_, value], index) => {
  newData[(index + 1).toString()] = value;
});

// Write to file
fs.writeFileSync('sorted_data.json', JSON.stringify(newData, null, 2));

console.log("✅ Data sorted by 'na' and keys reset. Output saved to sorted_data.json");
