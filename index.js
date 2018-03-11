const fs = require("fs");

const file = process.argv[2];

fs.readFile(file, (err, data) => {
  if (err) console.log(err);
  const lines = data.toString().split("\n");
  const newLines = [];

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    const trimedLine = line.trim();

    if (trimedLine.charAt(0) === "+") {
      const plusIndex = line.indexOf("+");
      const newLine = line.slice(plusIndex + 1);
      newLines.push(newLine);
    } else if (trimedLine.charAt(0) !== "-") {
      newLines.push(line);
    }
    // and if charAt(0) === "-", don't add the line in new document;
  }

  const fileToWrite = newLines.join("\n");
  fs.writeFile(file, fileToWrite, err => {
    if (err) console.log(err);
  });
});
