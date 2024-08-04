const backbtn = document.getElementById('backbtn');
backbtn.addEventListener('click',()=>{
    // alert("clickedme")
    window.history.back();
});
// Select the div element by its id
// const backbtn = document.getElementById('backbtn');

// Function to add text on hover
function addTextOnHover() {
    backbtn.textContent = '<';
    backbtn.style.width="50px";
}

// Function to remove text when not hovered
function removeTextOnHover() {
    backbtn.textContent = '';
}

// Function to add text on click
function addTextOnClick() {
    backbtn.textContent = backbtn.textContent === '<' ? '' : '<';
}

// Add event listeners for hover and click events
backbtn.addEventListener('mouseover', addTextOnHover);
backbtn.addEventListener('mouseout', removeTextOnHover);
backbtn.addEventListener('click', addTextOnClick);

document.addEventListener("DOMContentLoaded", function() {
    const backBtn = document.getElementById("backbtn");

    // Function to expand the button
    function expandButton() {
        backBtn.style.width = "50px";
    }

    // Function to shrink the button
    function shrinkButton() {
        backBtn.style.width = "10px";
    }

    // Initially expand the button when the page loads
    expandButton();

    // After a short delay, shrink the button
    setTimeout(shrinkButton, 3000); // Adjust the delay as needed

    // Add event listeners for hover and click to expand the button
    // backBtn.addEventListener("mouseover", expandButton);
    // backBtn.addEventListener("click", expandButton);

    // // Add event listener to shrink the button when mouse leaves
    // backBtn.addEventListener("mouseout", shrinkButton);
    
    // // Ensure button stays expanded when clicked
    // backBtn.addEventListener("mousedown", expandButton);
});

// Function to go back in history
function goBack() {
    window.history.back();
}

// // Existing JavaScript code for mute button
// const video = document.getElementById('trailer');
// const muteButton = document.getElementById('mutebtn');

// // Function to toggle mute/unmute
// function toggleMute() {
//     if (video.muted) {
//         video.muted = false; // Unmute the video
//         muteButton.textContent = 'MUTE'; // Update button text
//     } else {
//         video.muted = true; // Mute the video
//         muteButton.textContent = 'UNMUTE'; // Update button text
//     }
// }

// muteButton.addEventListener('click', toggleMute);

document.addEventListener("DOMContentLoaded", function() {
    const typewriter = document.querySelector(".typed");

    const observerOptions = {
        root: null, // Use the viewport as the root
        rootMargin: "0px",
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typewriter.classList.add("typing");
                observer.unobserve(entry.target); // Stop observing after the animation is triggered
            }
        });
    }, observerOptions);

    observer.observe(typewriter);
});
