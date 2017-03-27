const http = require("http")
const moment = require("moment")
const url = require("url")

const port = process.argv[2]

const server = http.createServer((request, response) => {
  const { pathname, query } = url.parse(request.url, true) // ES6 to pull off pathname and query
  response.writeHead(200, { "content-type": "application/json" })
  if (pathname === "/api/parsetime") {
    return response.end(JSON.stringify({
      hour: moment(query.iso).hour(),
      minute: moment(query.iso).minute(),
      second: moment(query.iso).second()
    }))
  }

  if (pathname === "/api/unixtime") {
    return response.end(JSON.stringify({
      unixtime: +moment(query.iso).format("x")
    }))
  }

  response.writeHead(404, { "content-type": "application/json"})
  response.end(JSON.stringify({
    sucess: false,
    message: `${pathname} is not valid`
  }))
})

server.listen(port)

// Suggested solution
// var http = require('http')
// var url = require('url')
//
// function parsetime (time) {
//   return {
//     hour: time.getHours(),
//     minute: time.getMinutes(),
//     second: time.getSeconds()
//   }
// }
//
// function unixtime (time) {
//   return { unixtime: time.getTime() }
// }
//
// var server = http.createServer(function (req, res) {
//   var parsedUrl = url.parse(req.url, true)
//   var time = new Date(parsedUrl.query.iso)
//   var result
//
//   if (/^\/api\/parsetime/.test(req.url)) {
//     result = parsetime(time)
//   } else if (/^\/api\/unixtime/.test(req.url)) {
//     result = unixtime(time)
//   }
//
//   if (result) {
//     res.writeHead(200, { 'Content-Type': 'application/json' })
//     res.end(JSON.stringify(result))
//   } else {
//     res.writeHead(404)
//     res.end()
//   }
// })
// server.listen(Number(process.argv[2]))
