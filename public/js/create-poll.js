const createPollHandler = async (event) =>
    {
        event.preventDefault();

        const title = document.querySelector('#title').value.trim();
        const description = document.querySelector('#description').value.trim();

        if (title && description) {
            const response = await fetch('/api/polls', {
                method: 'POST',
                body: JSON.stringify({ title, description }),
                headers: { 'Content-Type': 'application/json'},
            });

            if (response.ok) {
                document.location.replace('/');
            } else {
                alert('Failed to add poll');
            }
        }
    };

document
    .querySelector('#createpoll')
    .addEventListener('click', createPollHandler);