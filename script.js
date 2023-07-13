// JavaScript code for dropdown functionality
document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.getElementsByClassName('dropdown');
  
    // Attach event listeners to each dropdown
    for (let i = 0; i < dropdowns.length; i++) {
      const dropdown = dropdowns[i];
      const dropdownContent = dropdown.getElementsByClassName('dropdown-content')[0];
  
      // Toggle visibility of dropdown content on click
      dropdown.addEventListener('click', function() {
        dropdownContent.classList.toggle('show');
      });
  
      // Hide dropdown content when user clicks outside the dropdown
      window.addEventListener('click', function(event) {
        if (!event.target.matches('.dropbtn')) {
          dropdownContent.classList.remove('show');
        }
      });
  
      // Handle click events on dropdown items
      const dropdownItems = dropdownContent.getElementsByClassName('dropdown-item');
      for (let j = 0; j < dropdownItems.length; j++) {
        const dropdownItem = dropdownItems[j];
        const itemName = dropdownItem.textContent.trim();
        dropdownItem.addEventListener('click', function() {
          if (itemName === 'Searching') {
            displaySearchingCode();
          } else if (itemName === 'Traversing') {
            displayTraversingCode();
          } else if (itemName === 'Sorting') {
            displaySortingCode();
          } else if (itemName === 'Singly Linked List') {
            displaySinglyLinkedListCode();
          } else if (itemName === 'Doubly Linked List') {
            displayDoublyLinkedListCode();
          } else if (itemName === 'Circular Linked List') {
            displayCircularLinkedListCode();
          } else if (itemName === 'Reversal') {
            displayReversalCode();
          }
          // Close Button Functionality
            const closeBtn = document.getElementById('close-btn');
            const codeContainer = document.getElementById('code-container');

            closeBtn.addEventListener('click', function() {
            codeContainer.textContent = '';
            });
            // dark mode
            // Function to update the date and time
            
          // Add more conditions for other data structures and their algorithms
        });
      }
    }
  });
  

  // Get the like button and total likes element
const likeButton = document.getElementById("like-btn");
const totalLikesElement = document.getElementById("total-likes");

// Check if the user has already liked
let userHasLiked = localStorage.getItem("liked");

// Initialize the total likes counter
let totalLikes = parseInt(localStorage.getItem("totalLikes")) || 0;
totalLikesElement.textContent = totalLikes;

// Check if the user has already liked and disable the button
if (userHasLiked) {
  likeButton.disabled = true;
}

// Event listener for the like button
likeButton.addEventListener("click", function () {
  // Check if the user has already liked
  if (!userHasLiked) {
    // Increment the total likes
    totalLikes++;
    totalLikesElement.textContent = totalLikes;

    // Disable the like button
    likeButton.disabled = true;

    // Set the user's liked status in localStorage
    localStorage.setItem("liked", "true");

    // Update the total likes in localStorage
    localStorage.setItem("totalLikes", totalLikes.toString());
  }
});


