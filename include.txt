function loadContent(file) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('content-area').innerHTML = data;
        })
        .catch(error => {
            document.getElementById('content-area').innerHTML = `<p>Error loading content: ${error.message}</p>`;
        });
}
