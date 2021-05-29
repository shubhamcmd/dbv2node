var socketio = require("socket.io");
var { allUsers } = require("./users-service");

exports.socketServer = (server) => {
  // Create the Socket IO server on
  // the top of http server
  const io = socketio(server);

  let interval;
  io.on("connection", (socket) => {
    console.log("New client connected");
    if (interval) {
      clearInterval(interval);
    }
    getApiAndEmit(socket);
    interval = setInterval(() => getApiAndEmit(socket), 80000);
    socket.on("disconnect", () => {
      console.log("Client disconnected");
      clearInterval(interval);
    });
  });
  const getApiAndEmit = async (socket) => {
    const response = new Date();
    const userData = await allUsers();
    socket.emit("FromAPI", response);
    socket.emit("FromUsers", userData);
  };
};
