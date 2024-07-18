// Add your code here
function submitData(name, email) {
    const url = 'http://localhost:3004/'; 

    const formData = {
      name: name,
      email: email
    };

    const config = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(formData)
    };

    return fetch(url, config)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        appendIdToDOM(data.id);
      })
      .catch(error => {
        appendErrorToDOM(error.message);
      });
  }

  function appendIdToDOM(id) {
    const p = document.createElement('p');
    p.textContent = `New ID: ${id}`;
    document.body.appendChild(p);
  }

  function appendErrorToDOM(errorMessage) {
    const p = document.createElement('p');
    p.textContent = `Error: ${errorMessage}`;
    document.body.appendChild(p);
  }

  module.exports = submitData; 