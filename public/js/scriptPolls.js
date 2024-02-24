// Verify same server as indexPolls.html
const socket = io();
// client-side
socket.on("connect", () => {
  // Log the socket connection and socket ID in the console
  console.log("CLIENT SOCKET CONNECTED " + socket.id);
});

// Receive "receive-vote" event from server
socket.on("receive-vote", (data) => {
  console.log("on receive-vote");
  console.log(data);
  updatePolls(data);
});

// Receive "update" event from server
socket.on("update", () => {
  updatePolls();
  // console.log(data);
});

const progressBoxes = document.querySelectorAll(".progress-box");
const percentTags = document.querySelectorAll(".percent-tag");
const totalVotesElem = document.getElementById("totalVotes");

let vote = false;
// Executes on DOMContentLoaded (page is ready)
// https://developer.mozilla.org/en-US/docs/Web/API/Document/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", async () => {
  // On load, determine if poll is expired
  const expiration = document.getElementById("expiration").getAttribute("data");
  const expiration_date = Date.parse(expiration);
  const now_date = Date.now();
  console.log(expiration_date);
  console.log(now_date);
  // Only allow the click event for voting if the poll is not expired
  if (expiration_date > now_date) {
    for (let i = 0; i < progressBoxes.length; i++) {
      const elem = progressBoxes[i];
      elem.addEventListener("click", () => {
        console.log("add vote");
        addVote(elem, elem.id);
      });
    }  
  }
  // On load, get the votes to see if this user has already voted
  const pollId = document.getElementById("poll").getAttribute("data");
  // console.log(pollId);
  const response = await fetch("/api/votes/byuser/" + pollId, {
    method: "GET",
  });
  const votes = await response.json();
  // console.log(votes);
  if (votes.length > 0) {
    vote = true;
  }
});

const addVote = async (elem, id) => {
  if (vote) {
    return;
  }
  let voteTo = id;
  // Save the vote
  const response = await fetch("/api/votes", {
    method: "POST",
    body: JSON.stringify({
      option_id: voteTo,
    }),
    headers: {
      "Content-Type": "application/json",
    },
  });
  // const result = await response.json();
  // console.log(result);
  // Send the "send-vote" event to the server
  socket.emit("send-vote", voteTo);
  // console.log(socket);
  vote = true;
  elem.classList?.add("active");
};

// Update the page data
const updatePolls = async () => {
  // Go get the current vote count
  const pollId = document.getElementById("poll").getAttribute("data");
  const response = await fetch("/api/votes/" + pollId, {
    method: "GET",
  });
  const votes = await response.json();
  // console.log(votes);
  let totalVotes = votes.length;
  document.getElementById("totalVotes").innerText = totalVotes;

  // Update the UI
  for (let i = 0; i < progressBoxes.length; i++) {
    // Get the ID
    const vote = progressBoxes[i];
    // console.log(vote);
    // console.log(vote.id);
    // Count the votes for that ID
    // https://stackoverflow.com/questions/45547504/counting-occurrences-of-particular-property-value-in-array-of-objects
    const count = votes.filter((obj) => obj.option_id == vote.id).length;
    // console.log(count);
    let setWidth = Math.round((count / totalVotes) * 100);
    let widthString = (!setWidth ? 0 : setWidth) + "%";
    let currentId = progressBoxes[i].id;
    const elem = document
      .getElementById(currentId)
      .querySelector(".percent-tag");
    // console.log(elem);
    // console.log(setWidth);
    // console.log(widthString);
    elem.setAttribute("data", widthString);
    elem.style.width = widthString;
  }
};
