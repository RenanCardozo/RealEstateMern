const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const cookieParser = require("cookie-parser");
// const http = require('http')
// const {Server} = require("socket.io");
// const server = http.createServer(app);
// const io = new Server(server)

require("./server/configs/mongooseConfigs");

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    methods: "GET,POST,PUT,DELETE,OPTIONS",
  }),
  express.json(),
  cookieParser(),
  express.urlencoded({ extended: true })
);
require("./server/routes/users.routes")(app);
require("./server/routes/property.routes")(app);
const server = app.listen(8000, () =>
  console.log("Server is running on port 8000")
);
const io = require("socket.io")(server, {
  cors: true,
});
io.on("connection", (socket) => {
  socket.on("send_message", (data) => {
    socket.broadcast.emit("receive_message", data);
  });
  console.log("a user connected", socket.id);

  // socket.on("disconnect", () => {
  //   console.log("user disconnected");
});
