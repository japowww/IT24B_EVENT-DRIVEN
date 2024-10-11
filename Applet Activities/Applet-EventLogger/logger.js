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
        const logEntry = `${date} at ${time}`;
        
        
        loggedData.push(logEntry);
        
       
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
                    <h5 class="card-title">Logged Data</h5>
                    <p class="card-text">Logged on: ${data}</p>
                    <img src="welcome.gif" 
                         alt="Log in animation" 
                         style="width: 100%; max-width: 150px; margin-top: 10px;">
                </div>
            </div>
        `).join('');
        
    logCountElement.textContent = `Total Logs: ${loggedData.length}`;
}


    function addImage() {
        const image = document.createElement('img');
        image.src = 'welcome.gif';  
        image.alt = 'Logged Image';
        image.style.width = '150px';  
        image.style.marginTop = '10px';  
        image.style.display = 'block';  
        image.style.marginLeft = 'auto';  
        image.style.marginRight = 'auto';
        cardContainer.appendChild(image);
    }

    logButton.addEventListener('click', logData);
    clearButton.addEventListener('click', clearLogs);
});
