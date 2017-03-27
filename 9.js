const http = require("http")
const bl = require("bl")
const async = require("async")

const urls = process.argv.slice(2)

async.eachSeries(urls, (url, next) => {
  http.get(url, response => {
    response.pipe(bl((err, data) => {
      if (err) return next(err)
      data = data.toString()
      console.log(data)
      next()
    }))
  })
})

// Solution with no extra libraries
// http.get(urls[0], response => {
//   response.pipe(bl((err, data) => {
//     if (err) return console.error(err)
//     data = data.toString()
//     console.log(data)
//
//     http.get(urls[1], response => {
//       response.pipe(bl((err, data) => {
//         if (err) return console.error(err)
//         data = data.toString()
//         console.log(data)
//
//         http.get(urls[2], response => {
//           response.pipe(bl((err, data) => {
//             if (err) return console.error(err)
//             data = data.toString()
//             console.log(data)
//           }))
//         })
//       }))
//     })
//   }))
// })

// Suggested solution
// var http = require('http')
//     var bl = require('bl')
//     var results = []
//     var count = 0
//
//     function printResults () {
//       for (var i = 0; i < 3; i++) {
//         console.log(results[i])
//       }
//     }
//
//     function httpGet (index) {
//       http.get(process.argv[2 + index], function (response) {
//         response.pipe(bl(function (err, data) {
//           if (err) {
//             return console.error(err)
//           }
//
//           results[index] = data.toString()
//           count++
//
//           if (count === 3) {
//             printResults()
//           }
//         }))
//       })
//     }
//
//     for (var i = 0; i < 3; i++) {
//       httpGet(i)
//     }
