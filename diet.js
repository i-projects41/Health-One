let totalCalories = 0;
let currentWaterIntake = 0;
let waterRecommendation = 0;

// Function to calculate BMI and calorie recommendation
function calculateBMI() {
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100;
    const age = parseInt(document.getElementById('age').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid inputs.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);
    document.getElementById('bmi-value').textContent = bmi;

    // Simple calorie recommendation (based on average adult needs)
    const calorieGoal = (weight * 24 * 1.2).toFixed(0); // Maintenance calorie estimate
    document.getElementById('calorie-goal').textContent = calorieGoal;

    waterRecommendation = (weight * 35).toFixed(0); // Basic water intake rule
    document.getElementById('water-recommendation').textContent = waterRecommendation;

    // Show meal plan and water tracker
    document.querySelector('.meal-plan').classList.add('visible');
    document.querySelector('.water-tracker').classList.add('visible');
}

// Function to update meal calories
function updateMealCalories(mealType) {
    const selectedValue = parseInt(document.getElementById(mealType).value);
    document.getElementById(`${mealType}-calories`).textContent = selectedValue;

    // Calculate total calories
    totalCalories = [...document.querySelectorAll('.meal-section select')]
        .reduce((acc, el) => acc + parseInt(el.value), 0);

    document.getElementById('total-calories').textContent = totalCalories;
}

// Function to add water
function addWater() {
    currentWaterIntake += 250;
    document.getElementById('water-intake').textContent = currentWaterIntake;
}
