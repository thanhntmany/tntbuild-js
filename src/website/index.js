import express from 'express'


var port = 3000
const args = process.argv.slice(2);
if (args[0] == "-p") port = parseInt(args[1]);

const app = express()
app.get('/', (req, res) => {
  res.send('Hello World!')
})


const server = app.listen(3000, '0.0.0.0', function () {
  const { address: host, port } = server.address()
  console.log("\nApp listening at http://%s:%s", host, port)
});

export default server