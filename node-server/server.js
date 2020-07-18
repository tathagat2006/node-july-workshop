const http = require('http')

// function add(x,y) {
//   return x + y
// }

const obj = {
  a: 10,
  b: true,
  c: 3
}

// const http = {
//   createServer: function() {

//   }
// }

obj.a //10
obj.b //true

const server = http.createServer(function(req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.write('<h1>Our first NodeJS Server</h1>')
  res.end()
})

server.listen(3000) //localhost:3000