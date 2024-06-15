// Function to hide the sidebar
function mainbar() {
    document.querySelector('.nav2').style.display = 'none'; 
}

// Function to show the sidebar
function showsidebar() {
    document.querySelector('.nav2').style.display = 'flex';
}

// Function to toggle the heart icon between two images
function toggleHeart(element) {
    const img = element.querySelector('img');
    if (img.src.includes('heart.png')) {
        img.src = 'shad_images/heart (1).png'; // Change to filled heart icon
    } else {
        img.src = 'shad_images/heart.png'; // Change to empty heart icon
    }
}

// Function to handle redirection based on dropdown selection and search input
function redirectOnChange() {
    const cloths = document.getElementById('clothes').value; // Get selected category
    const searchInput = document.getElementById('searchInput').value.trim(); // Get trimmed search input

    let redirectUrl;

    // Determine the redirection URL based on the selected category
    switch (cloths) {
        case "1":
            // Redirect to search page with all categories and search query
            redirectUrl = `unisex.html?q=${encodeURIComponent(searchInput)}`;
            break;
        case "2":
            // Redirect to men category page with search query
            redirectUrl = `men.html?q=${encodeURIComponent(searchInput)}`;
            break;
        case "3":
            // Redirect to women category page with search query
            redirectUrl = `women.html?q=${encodeURIComponent(searchInput)}`;
            break;
        case "4":
            // Redirect to unisex category page with search query
            redirectUrl = `unisex.html?q=${encodeURIComponent(searchInput)}`;
            break;
        default:
            // Handle unexpected case (should not normally occur with valid dropdown values)
            console.error("Invalid selection");
            return;
    }

    // Perform the redirect to the constructed URL
    window.location.href = redirectUrl;
}
