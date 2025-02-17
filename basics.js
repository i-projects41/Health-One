function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert("Please enter valid inputs!");
        return;
    }

    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    
    let stepCount;
    let exercisePlan;
    let images = [];

    // Determine step count and exercise plan based on BMI
    if (bmi < 18.5) {
        stepCount = "8000 steps/day";
        exercisePlan = "Strength training, Yoga, Resistance exercises (Beginner)";
        images = ["yoga2.jpg", "strength_training.jpg", "resistance.jpg"];
    } else if (bmi >= 18.5 && bmi < 24.9) {
        stepCount = "10000 steps/day";
        exercisePlan = "Cardio, Strength training, Pilates (Intermediate)";
        images = ["cardio.jpg", "strength_training.jpg", "pilates.jpg"];
    } else if (bmi >= 25 && bmi < 29.9) {
        stepCount = "12000 steps/day";
        exercisePlan = "High-intensity cardio, Bodyweight exercises (Advanced)";
        images = ["hiit.jpg", "bodyweight.jpg", "aerobics.jpeg"];
    } else {
        stepCount = "15000 steps/day";
        exercisePlan = "Low-impact cardio, Swimming, Light resistance training (Expert)";
        images = ["low_impact.webp", "swimming.jpg", "resistance.jpg"];
    }

    // Display results
    document.getElementById("bmi-result").innerText = `Your BMI is: ${bmi}`;
    document.getElementById("step-result").innerText = `Recommended step count: ${stepCount}`;
    document.getElementById("exercise-result").innerText = `Suggested exercises: ${exercisePlan}`;
    
    const exerciseImagesContainer = document.getElementById("exercise-images");
    exerciseImagesContainer.innerHTML = ""; // Clear previous images

    // Add exercise images
    images.forEach(image => {
        const imgElement = document.createElement("img");
        imgElement.src = image;
        imgElement.alt = exercisePlan;
        exerciseImagesContainer.appendChild(imgElement);
    });

    document.getElementById("result").style.display = "block";
}
