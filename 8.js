const http = require("http")
const bl = require("bl")

const url = process.argv[2]

http.get(url, response => {
  response.pipe(bl((err,data) => {
    if (err) return console.error(err)
    data = data.toString()
    console.log(data.length)
    console.log(data)
  }))
})




// http.get(url, response => {
//   let appended = ""
//   response.setEncoding("utf8")
//
//   response.on("error", (err) => console.log(err))
//   response.on("data", (data) => {
//     appended += data
//   })
//   response.on("end", () => {
//     console.log(appended.length)
//     console.log(appended)
//   })
// })
