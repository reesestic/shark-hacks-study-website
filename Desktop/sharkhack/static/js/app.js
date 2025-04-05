document.getElementById('fetchDataBtn').addEventListener('click', function() {
    fetch('/get-data')
        .then(response => response.json())
        .then(data => {
            document.getElementById('backendData').textContent = 'Data from backend: ' + data.message;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
