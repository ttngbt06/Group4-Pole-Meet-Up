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

const http = require("http");
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on("connection", (socket) => {
  console.log("a user connected");

let totalVotes = 0;
  let votingPolls = {
    TapHouse: 0,
    BuffaloWildWings: 0,
    FogodeChao: 0,
    TinnersPublicHouse: 0,
  };

  // const io = require('socket.io')(8000, {cors: {origin: "*"}});
  socket.on("send-vote", (voteTo) => {
    // console.log("TEST 1");
    // console.log(voteTo);
    // TODO Save the vote?
    //socket.broadcast.emit("receive-vote", { voteTo });
    totalVotes += 1;
    console.log(voteTo);
    votingPolls[voteTo] += 1;
    socket.broadcast.emit("receive-vote", { votingPolls, totalVotes });
    socket.emit("update", { votingPolls, totalVotes });
  });

  // Send Current Data of votes to user when visited the site
  socket.emit("update", { votingPolls, totalVotes });
});

sequelize.sync({ force: false }).then(() => {
  server.listen(PORT, () => {
    console.log(`Now listening on PORT http://localhost:${PORT}`);
  });
});
