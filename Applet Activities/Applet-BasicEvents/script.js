document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();
    

    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('heightCm').value);
    
    
    if (weight > 0 && heightCm > 0) {
        const heightMeters = heightCm / 100;
        const bmi = (weight / (heightMeters * heightMeters)).toFixed(2); 
        displayBMIResult(bmi);
    } else {
        alert('Please enter valid values for both weight and height.');
    }
});

function displayBMIResult(bmi) {
    const bmiResult = document.getElementById('bmiResult');
    let resultMessage = `Your BMI is ${bmi} - `;


    if (bmi < 18.5) {
        resultMessage += "Underweight";
        bmiResult.style.color = "orange";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultMessage += "Normal weight";
        bmiResult.style.color = "green";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultMessage += "Overweight";
        bmiResult.style.color = "orange";
    } else {
        resultMessage += "Obesity";
        bmiResult.style.color = "red";
    }


    bmiResult.textContent = resultMessage;
}
