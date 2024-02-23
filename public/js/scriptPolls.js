// Verify same server as indexPolls.html
const socket = io();
// client-side
socket.on("connect", () => {
  console.log(socket.id); // x8WIv7-mJelg7on_ALbx
});

const progressBoxes = document.querySelectorAll(".progress-box");
const percentTags = document.querySelectorAll(".percent-tag");
const totalVotesElem = document.getElementById("totalVotes");

for (let i = 0; i < progressBoxes.length; i++) {
  const elem = progressBoxes[i];
  elem.addEventListener("click", () => {
    console.log('add vote');
    addVote(elem, elem.id);
  });
}

let vote = false;
  
const addVote = (elem, id) => {
  if (vote) {
    return;
  }
  let voteTo = id;
  socket.emit("send-vote", voteTo);
  // console.log(socket);
  vote = true;
  elem.classList?.add("active");
};

const updatePolls = (data) => {
let votingObject = data.votingPolls;
  let totalVotes = data.totalVotes;
  totalVotesElem.innerHTML = totalVotes;
  for (let i = 0; i < percentTags.length; i++) {
    let vote = votingObject[progressBoxes[i].id];
    let setWidth = Math.round((vote / totalVotes) * 100);
    let widthString = (!setWidth ? 0 : setWidth) + "%";
    let currentId = progressBoxes[i].id;
    const elem = document.getElementById(currentId).querySelector(".percent-tag");
    // console.log(elem);
    elem.setAttribute("data", widthString);
    elem.style.width = widthString;
    // console.log(elem);
  }
};

socket.on("receive-vote", (data) => {
  // console.log(data);
  updatePolls(data);
});

socket.on("update", (data) => {
  updatePolls(data);
  // console.log(data);
});

