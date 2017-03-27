const http = require("http")
const fs = require("fs")

const port = process.argv[2]
const file = process.argv[3]

const server = http.createServer((request, response) => {
  const stream = fs.createReadStream(file, {encoding: "utf8"})
  stream.pipe(response)
})

server.listen(port)

// Suggested solution
// var http = require('http')
//     var fs = require('fs')
//
//     var server = http.createServer(function (req, res) {
//       res.writeHead(200, { 'content-type': 'text/plain' })
//
//       fs.createReadStream(process.argv[3]).pipe(res)
//     })
//
//     server.listen(Number(process.argv[2]))
