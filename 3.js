const fs = require("fs")
// fs is file system
const buffer = fs.readFileSync(process.argv[2])

const bufArray = buffer.toString().split("\n").length -1
// +1 for the last line

console.log(bufArray)
