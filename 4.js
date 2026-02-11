const fs = require("fs");

let text = fs.readFileSync("b.txt", "utf-8");

text = text.replace(/\s+/g, " ").trim();

fs.writeFile("b.txt", text, (err) =>{
    if (err) throw err;
    console.log("File written successfully!");
})