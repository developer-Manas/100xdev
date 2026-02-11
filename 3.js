const fs = require("fs");

const contents = fs.readFileSync("a.txt", "utf-8");

fs.writeFileSync("a.txt", "Hello-world-new", (err) =>{
    if (err) throw err;
    console.log("File return successfully!");
}) 
console.log(contents);