const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");
const SequelizeStore = require("connect-session-sequelize")(session.Store);

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helper");

const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: "Super secret secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Socket logic
const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");
  console.log("SERVER SOCKET CONNECTED " + socket.id);

  // Send Current Data of votes to user when visited the site
  // Send "update" event to the client
  socket.emit("update");
  // Receive the "send-vote" event from the client
  socket.on("send-vote", async (voteTo) => {
    console.log("on send-vote");
    // console.log(voteTo);
    console.log(socket.id);
    // Send "receive-vote" event to the client
    io.emit("receive-vote", { voteTo });
    // totalVotes += 1;
    console.log(voteTo);
    // votingPolls[voteTo] += 1;
    //socket.broadcast.emit("receive-vote", { votingPolls, totalVotes });
    //io.emit("update", { votingPolls, totalVotes });
  });
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Now listening on PORT http://localhost:${PORT}`);
  });
});
