async function createOption(pollId, optionName) {
  const response = await fetch("/api/options", {
    method: "POST",
    body: JSON.stringify({ poll_id: pollId, name: optionName }),
    headers: { "Content-Type": "application/json" },
  });

  if (!response.ok) {
    alert("Failed to add option");
  }
}

const createPollHandler = async (event) => {
  event.preventDefault();

  const title = document.querySelector("#title").value.trim();
  const description = document.querySelector("#description").value.trim();

  if (title && description) {
    const response = await fetch("/api/polls", {
      method: "POST",
      body: JSON.stringify({ title, description }),
      headers: { "Content-Type": "application/json" },
    });

    const poll = await response.json();

    if (response.ok) {
      const pollId = poll.id;

      // Poll is created so create the options
      const option1 = document.querySelector("#option1").value.trim();
      const option2 = document.querySelector("#option2").value.trim();
      const option3 = document.querySelector("#option3").value.trim();
      const option4 = document.querySelector("#option4").value.trim();
      const option5 = document.querySelector("#option5").value.trim();

      //console.log(poll);
      if (option1) {
        await createOption(pollId, option1);
      }
      if (option2) {
        await createOption(pollId, option2);
      }
      if (option3) {
        await createOption(pollId, option3);
      }
      if (option4) {
        await createOption(pollId, option4);
      }
      if (option5) {
        await createOption(pollId, option5);
      }

      document.location.replace('/poll/' + pollId);
    } else {
      alert("Failed to add poll");
    }
  }
};

document
  .querySelector("#createpoll")
  .addEventListener("click", createPollHandler);
