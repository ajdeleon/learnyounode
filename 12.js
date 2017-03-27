const http = require("http")
const map = require("through2-map")

const port = process.argv[2]

const server = http.createServer((request, response) => {
  console.log(request)
  if (request.method !== "POST") return response.end("Server only requests post")

  request.pipe(map(data => {
    return data.toString().toUpperCase()
  })).pipe(response)
}) //server callback

server.listen(port) // make server listen on provided port

// Suggested solution
// var http = require('http')
//    var map = require('through2-map')
//
//    var server = http.createServer(function (req, res) {
//      if (req.method !== 'POST') {
//        return res.end('send me a POST\n')
//      }
//
//      req.pipe(map(function (chunk) {
//        return chunk.toString().toUpperCase()
//      })).pipe(res)
//    })
//
//    server.listen(Number(process.argv[2]))
