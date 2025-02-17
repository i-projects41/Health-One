document.getElementById('lookup-btn').addEventListener('click', function() {
    const foodName = document.getElementById('food-input').value.toLowerCase().trim();
    const resultSection = document.getElementById('result');

    // Food database with detailed nutrients
    const foodDatabase = {
        'soy chunks': {
            protein: '52g',
            carbs: '30g',
            fat: '1g',
            vitamins: 'B-complex vitamins (B1, B2, B6)',
            minerals: 'Iron, Calcium'
        },
        'chicken': {
            protein: '31g',
            carbs: '0g',
            fat: '3.6g',
            vitamins: 'B vitamins (B3, B6, B12)',
            minerals: 'Phosphorus, Selenium'
        },
        'mutton': {
            protein: '25-28g',
            carbs: '0g',
            fat: '20g (can vary)',
            vitamins: 'B vitamins (B12, B6), Vitamin D',
            minerals: 'Iron, Zinc'
        },
        'poultry egg': {
            protein: '13g',
            carbs: '1.1g',
            fat: '10g',
            vitamins: 'Vitamin A, B12, D',
            minerals: 'Iron, Selenium, Phosphorus'
        },
        'fish': {
            protein: '20g',
            carbs: '0g',
            fat: '5-12g (depending on the type of fish)',
            vitamins: 'Vitamin D, B2, B12',
            minerals: 'Iodine, Selenium'
        },
        'paneer': {
            protein: '18g',
            carbs: '6g',
            fat: '21g',
            vitamins: 'Vitamin B12, D',
            minerals: 'Calcium, Phosphorus'
        },
        'milk': {
            protein: '3.4g per 100ml',
            carbs: '4.8g',
            fat: '3.25g',
            vitamins: 'Vitamin A, D, B12',
            minerals: 'Calcium, Phosphorus'
        },
        'sattu': {
            protein: '20g',
            carbs: '60g',
            fat: '7g',
            vitamins: 'B-complex vitamins',
            minerals: 'Iron, Magnesium'
        },
        'yogurt': {
            protein: '10g',
            carbs: '4.7g',
            fat: '3.3g',
            vitamins: 'B12, B2',
            minerals: 'Calcium, Phosphorus'
        },
        'soy beans': {
            protein: '36g',
            carbs: '30g',
            fat: '20g',
            vitamins: 'Vitamin B1, B2, K',
            minerals: 'Iron, Calcium, Magnesium'
        },
        'chia seeds': {
            protein: '17g',
            carbs: '42g',
            fat: '30g (rich in Omega-3 fatty acids)',
            vitamins: 'B-vitamins',
            minerals: 'Calcium, Magnesium, Phosphorus'
        },
        'apple': {
            protein: '0.3g',
            carbs: '13.8g',
            fat: '0.2g',
            vitamins: 'Vitamin C, A',
            minerals: 'Potassium'
        },
        'guava': {
            protein: '2.6g',
            carbs: '14g',
            fat: '1g',
            vitamins: 'Vitamin C (very high), A',
            minerals: 'Potassium, Magnesium'
        },
        'mango': {
            protein: '0.8g',
            carbs: '15g',
            fat: '0.6g',
            vitamins: 'Vitamin C, A',
            minerals: 'Potassium'
        },
        'watermelon': {
            protein: '0.6g',
            carbs: '7.6g',
            fat: '0.2g',
            vitamins: 'Vitamin A, C',
            minerals: 'Potassium'
        },
        'grapes': {
            protein: '0.6g',
            carbs: '17g',
            fat: '0.4g',
            vitamins: 'Vitamin C, K',
            minerals: 'Potassium'
        },
        'almonds': {
            protein: '21g',
            carbs: '22g',
            fat: '50g (good source of healthy fats)',
            vitamins: 'Vitamin E, B2',
            minerals: 'Magnesium, Calcium, Phosphorus'
        },
        'cashew nuts': {
            protein: '18g',
            carbs: '30g',
            fat: '43g',
            vitamins: 'Vitamin B6, K',
            minerals: 'Magnesium, Copper'
        },
        // Add the rest of the 100+ food items in a similar structure
    };

    // Display the result if the food is in the database
    if (foodDatabase[foodName]) {
        const foodData = foodDatabase[foodName];
        resultSection.innerHTML = `
            <p><strong>Food:</strong> ${foodName.charAt(0).toUpperCase() + foodName.slice(1)}</p>
            <p><strong>Protein:</strong> ${foodData.protein}</p>
            <p><strong>Carbohydrates:</strong> ${foodData.carbs}</p>
            <p><strong>Fat:</strong> ${foodData.fat}</p>
            <p><strong>Vitamins:</strong> ${foodData.vitamins}</p>
            <p><strong>Minerals:</strong> ${foodData.minerals}</p>
        `;
    } else {
        resultSection.innerHTML = '<p>Food not found in the database. Please try again!</p>';
    }
});
