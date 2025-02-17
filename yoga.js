const poses = [
    {
        name: "Mountain Pose",
        image: "images/mountain_pose.jpg",
        description: "Stand tall with feet together, shoulders relaxed.",
        category: "beginner",
        link: "poses/mountain_pose.html"
    },
    {
        name: "Downward Facing Dog",
        image: "images/downward_dog.jpg",
        description: "Start on all fours with hands directly under shoulders.",
        category: "beginner",
        link: "poses/downward_dog.html"
    },
    {
        name: "Warrior I",
        image: "images/warrior_1.jpeg",
        description: "Stand with legs 3 to 4 feet apart, turning your right foot out.",
        category: "intermediate",
        link: "poses/warrior_1.html"
    },
    {
        name: "Tree Pose",
        image: "images/tree_pose.jpeg",
        description: "Stand on one leg with the other foot placed on your inner thigh.",
        category: "intermediate",
        link: "poses/tree_pose.html"
    },
    {
        name: "Child Pose",
        image: "images/child_pose.jpeg",
        description: "Kneel on the floor with your big toes touching and knees apart.",
        category: "beginner",
        link: "poses/child_pose.html"
    },
    {
        name: "Bridge Pose",
        image: "images/bridge_pose.jpeg",
        description: "Lie on your back with knees bent and feet flat on the floor.",
        category: "advanced",
        link: "poses/bridge_pose.html"
    },
    {
        name: "Triangle Pose",
        image: "images/triangle_pose.jpg",
        description: "Stand with feet wide, turn one foot out, and extend arms.",
        category: "intermediate",
        link: "poses/triangle_pose.html"
    },
    {
        name: "Seated Forward Bend",
        image: "images/seated_forward_bend.jpeg",
        description: "Sit with legs extended, bend forward from hips.",
        category: "intermediate",
        link: "poses/seated_forward_bend.html"
    },
    {
        name: "Crow Pose",
        image: "images/crow_pose.jpg",
        description: "Balance on hands with knees on triceps.",
        category: "advanced",
        link: "poses/crow_pose.html"
    },
    {
        name: "Headstand",
        image: "images/headstand.jpeg",
        description: "Balance on head and forearms with legs extended upwards.",
        category: "advanced",
        link: "poses/headstand.html"
    }
];

function displayPoses(posesToDisplay) {
    const poseContainer = document.getElementById('pose-container');
    poseContainer.innerHTML = "";

    posesToDisplay.forEach((pose, index) => {
        const poseElement = document.createElement('div');
        poseElement.classList.add('pose');
        poseElement.style.animationDelay = `${index * 0.1}s`; // Staggered animation

        poseElement.innerHTML = `
            <img src="${pose.image}" alt="${pose.name}">
            <h3>${pose.name}</h3>
            <p>${pose.description}</p>
            <a href="${pose.link}">Learn more</a>
        `;

        poseContainer.appendChild(poseElement);
    });
}

document.getElementById('search-bar').addEventListener('input', (event) => {
    const searchTerm = event.target.value.toLowerCase();
    const filteredPoses = poses.filter(pose => pose.name.toLowerCase().includes(searchTerm));
    displayPoses(filteredPoses);
});

function filterByCategory(category) {
    if (category === 'all') {
        displayPoses(poses);
    } else {
        const filteredPoses = poses.filter(pose => pose.category === category);
        displayPoses(filteredPoses);
    }
}

window.onload = () => {
    displayPoses(poses);
};
