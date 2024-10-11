document.addEventListener('DOMContentLoaded', () => {
    const logButton = document.getElementById('logButton');
    const clearButton = document.getElementById('clearButton');
    const cardContainer = document.getElementById('cardContainer');
    const logCountElement = document.getElementById('logCount');
    let loggedData = [];

    function logData() {
        const timestamp = new Date();
        const date = timestamp.toLocaleDateString();  
        const time = timestamp.toLocaleTimeString(); 
        loggedData.push(`(${date})  at  "${time}"`); 
        updateDisplay();
    }

    function clearLogs() {
        loggedData = [];
        updateDisplay();
    }

    function updateDisplay() {
        cardContainer.innerHTML = loggedData
            .map(data => `
                <div class="card mb-2">
                    <div class="card-body">
                        <h5 class="card-title">Logged on:</h5>
                        <p class="card-text"> ${data}  </p>
                    </div>
                </div>
            `).join('');

        logCountElement.textContent = `Total Logs: ${loggedData.length}`;
    }

    logButton.addEventListener('click', logData);
    clearButton.addEventListener('click', clearLogs);
});
