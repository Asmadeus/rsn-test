const path = require('path');
const express = require("express");

const app = express();

const devMode = process.env.NODE_ENV === 'development';

if (devMode) {
  const webpack = require("webpack");
  const config = require("../webpack.config.dev");
  const webpackDevMiddleware = require("webpack-dev-middleware");
  const webpackHotMiddleware = require("webpack-hot-middleware");
  const compiler = webpack(config);
  app.use(webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  }))
  app.use(webpackHotMiddleware(compiler));
}

app.use(express.static(path.resolve(__dirname, '../static')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../dist/index.html'))
});

const server = require('http').createServer(app);
const io = require('socket.io')(server);

let connectedUsers = {

}

io.on('connection', (socket) => {

  const updateUsers = () => {
    io.sockets.emit('users', connectedUsers);
  }

  socket.on('new user', (username) => {
    connectedUsers[socket.id] = {
      username
    }
    socket.join(username);
    updateUsers();
  })

  socket.on('message', (data) => {
    io.in(data.receiver).in(data.sender).emit('message', data)
  })

  socket.on('disconnect', function () {
    delete connectedUsers[socket.id];
    updateUsers();
  });

});


server.listen(8080, () => console.log("Listening on port 8080!"));

export default server;