const fs = require("fs")
const path = require("path")
//path.extname("index.html")
  //return: ".html"

const directory = process.argv[2]
const extension = `.${process.argv[3]}`

fs.readdir(directory, (err, data) => {
  if (err) return console.error(err)
  data.forEach((file) => {
    if (path.extname(file) === extension) {
      console.log(file)
    } //if
  })// forEach
}) //fs.readdir
