// Extended medicine recommendations with common names and popular Indian brands
const medicineRecommendations = {
    headache: [
        { commonName: 'Paracetamol', brandNames: ['Crocin', 'Calpol'] },
        { commonName: 'Ibuprofen', brandNames: ['Brufen', 'Ibugesic'] }
    ],
    fever: [
        { commonName: 'Paracetamol', brandNames: ['Crocin', 'Calpol'] },
        { commonName: 'Ibuprofen', brandNames: ['Brufen', 'Ibugesic'] }
    ],
    cough: [
        { commonName: 'Dextromethorphan', brandNames: ['Benadryl', 'Tixylix'] },
        { commonName: 'Guaifenesin', brandNames: ['Mucinex', 'Tussin'] }
    ],
    cold: [
        { commonName: 'Phenylephrine', brandNames: ['Sudafed', 'D-Cold'] },
        { commonName: 'Chlorpheniramine', brandNames: ['Chlor-Trimeton', 'Cetzine'] }
    ],
    stomachPain: [
        { commonName: 'Antacids', brandNames: ['Digene', 'Eno'] },
        { commonName: 'Anti-Spasmodics', brandNames: ['Spasmo-Proxyvon', 'Meftal-Spas'] }
    ],
    redeyes: [
        { commonName: 'Antihistamine Eye Drops', brandNames: ['Allergan', 'Opcon-A'] },
        { commonName: 'Lubricating Eye Drops', brandNames: ['Refresh Tears', 'Systane'] }
    ],
    nasalCongestion: [
        { commonName: 'Decongestant Drops', brandNames: ['Otrivin', 'Nasivion'] },
        { commonName: 'Nasal Sprays', brandNames: ['Dymista', 'Rhinocort'] }
    ],
    soreThroat: [
        { commonName: 'Throat Lozenges', brandNames: ['Strepsils', 'Vicks Lozenges'] },
        { commonName: 'Gargles', brandNames: ['Betadine Gargle', 'Listerine'] }
    ],
    fatigue: [
        { commonName: 'Vitamin B Complex', brandNames: ['Neurobion', 'Becosule'] },
        { commonName: 'Energy Supplements', brandNames: ['Revital H', 'Fast&Up'] }
    ],
    bodyAche: [
        { commonName: 'Pain Relievers', brandNames: ['Paracetamol', 'Ibuprofen'] },
        { commonName: 'Topical Pain Relief', brandNames: ['Moov', 'Volini'] }
    ],
    acidity: [
        { commonName: 'Antacids', brandNames: ['Rantac', 'Gelusil'] },
        { commonName: 'Proton Pump Inhibitors', brandNames: ['Omez', 'Pantocid'] }
    ],
    diarrhea: [
        { commonName: 'Anti-Diarrheal', brandNames: ['Loperamide', 'Norfloxacin'] },
        { commonName: 'Oral Rehydration Salts (ORS)', brandNames: ['Electral', 'ORS'] }
    ]
};

function getRecommendations() {
    const symptoms = document.getElementById('symptoms').value.toLowerCase();
    const recommendationsSection = document.getElementById('recommendations');

    // Clear previous recommendations
    recommendationsSection.innerHTML = '';

    // Process the input symptoms
    const symptomsList = symptoms.split(',').map(symptom => symptom.trim());

    let recommendations = [];

    symptomsList.forEach(symptom => {
        if (medicineRecommendations[symptom]) {
            recommendations = recommendations.concat(medicineRecommendations[symptom]);
        }
    });

    // Display recommendations
    if (recommendations.length > 0) {
        recommendationsSection.innerHTML = '<h3>Recommended Medicines:</h3><ul>' +
            recommendations.map(medicine => 
                `<li>
                    <strong>${medicine.commonName}</strong>: ${medicine.brandNames.join(', ')}
                </li>`
            ).join('') +
            '</ul>';
    } else {
        recommendationsSection.innerHTML = '<p>No recommendations available for the given symptoms.</p>';
    }
}