// Function to set custom cursor for all links
function setCustomCursorForLinks() {
    // Get all the link elements on the page
    var links = document.getElementsByTagName('a');
    // Loop through each link and set the cursor
    for (var i = 0; i < links.length; i++) {
        links[i].style.cursor = "url(./images/mickey_hand-2.png), auto";
    }
}

// Call the function when the page loads
window.onload = setCustomCursorForLinks;

// Function to scroll back to the top
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Add click event listener to the home icon
document.getElementById('homeIcon').addEventListener('click', function () {
    scrollToTop();
});

// Function to call the slideshow for the "About Me" section.
let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function changeSlide() {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide or loop back to the first
        slides[currentSlide].classList.add('active');
    }

    // Change slide every 5 seconds
    setInterval(changeSlide, 5000);