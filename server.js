//import dependencies
const express = require("express");
// to identify the person who left the vote
const useragent = require("useragent");
const app = express();

// If port is changed remember to change client side too
const port = 3301;

// Hosting front end
app.use(express.static("client"));

// Start the server and init socket.io
const server = app.listen(port, () =>
  console.log(`Listening at http://localhost:${port}`)
);
const io = require("socket.io")(server);

// Initialize candidates
const candidates = {
  0: { votes: 0, label: "Tap House", color: randomRBG() },
  1: { votes: 0, label: "Barrel lHouse", color: randomRBG() },
  2: { votes: 0, label: "Red Cow", color: randomRBG() },
  3: { votes: 0, label: "Tavern On France", color: randomRBG() },
};

// All of the users
const users = {};

// Cool down in milliseconds - leave a vote every 6 seconds
const coolDown = 6000;

// The magic number (it can be anything, just not the same as someone elses
// it is injected into hashing algorithm)
const magicNumber = 12345238823998823427345;

// On new Client connection
io.on("connection", (socket) => {
  // Update= tag, candidates= value of socket.io
  // If you send out a tag for update then everyone who is listening for a tag update will receive the data through candidates
  // Basically sending an update to the clients
  io.emit("update", candidates);
  // Increase the vote at Index - check to see if it exists then increase it
  // if it is increased and didn't exists then you would get an error

  // Parse the user agent string (extract all info about xxx user)
  const userAgent = useragent.parse(socket.handshake.headers["user-agent"]);

  // The users IP address
  const address = socket.handshake.address;

  // Make the handle
  // id = useragent string + operating system + device + magic number
  const id = hash(
    userAgent.os.toString() + userAgent.device.toString() + magicNumber
  );
  // combine id + address + magicNumber = handle
  const handled = hash(id + address + magicNumber);

  // On new vote
  socket.on("vote", (index) => {
    // Check if the user is allowed to vote,
    // if user undefined = user has never left a vote before
    // if user has made a vote before, === undefined(checking that it is not undefined) & check handle + coolDown time
    // is smaller than the current time
    //|| typeof users[handled] !=== "undefined" && users[handled] + coolDown <= Date.now()) {
    if (typeof users[handled] === "undefined") {
      // Increase the vote at index
      if (candidates[index]) {
        candidates[index].votes += 1;
      }

      // Show the candidate in the console for testing
      console.log(candidates);

      // Tell everyone else about the new vote - will run every time we get a new vote
      io.emit("update", candidates);

      // Set handle = to the current time/timestamp 
      users[handled] = Date.now();
    }
  });
});

// Generate a random RGB color
function randomRBG() {
  const r = () => (Math.random() * 256) >> 0;
  return `rbg(${r()}, ${r}, ${r()})`;
}

// https://stackoverflow.com/question/7616461/generate-a-hash-form-string-in-javascript
function hash(s) {
  return s.split("").reduce(function (a, b) {
    a = (a << 5) - a + b.charCodeAt(0);
    return a & a;
  }, 0);
}
