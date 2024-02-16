const io = require('socket.io')(8000, {cors: {origin: "*"}});

let totalVotes = 0;
let votingPolls = {
  'TapHouse': 0,
  'BuffaloWildWings': 0,
  'FogodeChao': 0,
  'TinnersPublicHouse': 0,
}

io.on('connection',socket =>{

  // Send Current Data of votes to user when visited the site
  socket.emit('update', {votingPolls,totalVotes})
  
  socket.on('send-vote', voteTo =>{
    totalVotes += 1;
    console.log(voteTo)
    votingPolls[voteTo] += 1;
    socket.broadcast.emit('receive-vote', {votingPolls, totalVotes});
    socket.emit('update', {votingPolls,totalVotes})
  })
})