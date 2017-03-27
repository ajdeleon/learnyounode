const fs = require("fs")
// fs is file system
fs.readFile(process.argv[2], "utf8", (err, data ) => {
  if(err) return console.error(err)

  const result = data.split("\n").length - 1

  console.log(result)
})
