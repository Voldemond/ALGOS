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
        // Add more conditions for other data structures and their algorithms
      });
    }
  }
});

document.getElementById('toggleButtonintro').addEventListener('click', function() {
  document.getElementById('in-intro').classList.toggle('hidden');
});
document.getElementById('toggleButtondsa').addEventListener('click', function() {
  document.getElementById('in-dsa').classList.toggle('hidden');
});
document.getElementById('toggleButtonroadmap').addEventListener('click', function() {
  document.getElementById('in-roadmap').classList.toggle('hidden');
});

function updateDateTime() {
  const datetimeElement = document.getElementById('datetime');
  const now = new Date();
  const date = now.toDateString();
  const time = now.toLocaleTimeString();
  datetimeElement.textContent = `${date} ${time} `;
}

setInterval(updateDateTime, 1000);
updateDateTime();

// // Like button
// document.getElementById('likeButton').addEventListener('click', function() {
//   // Check if the user has already liked
//   const hasLiked = localStorage.getItem('hasLiked');

//   if (!hasLiked) {
//     // Increment the like count
//     let likeCount = parseInt(localStorage.getItem('likeCount') || 0);
//     likeCount++;
//     localStorage.setItem('likeCount', likeCount);

//     // Set the flag to indicate that the user has liked
//     localStorage.setItem('hasLiked', true);

//     // Update the like count displayed on the webpage
//     document.getElementById('likeCount').textContent = likeCount;
//   }
// });

// // Display the initial like count on page load
// window.addEventListener('DOMContentLoaded', function() {
//   const likeCount = parseInt(localStorage.getItem('likeCount') || 0);
//   document.getElementById('likeCount').textContent = likeCount;
// });
// // likeCount.js
// const fs = require('fs');

// function getLikeCount() {
//   const data = fs.readFileSync('likeCount.json');
//   return JSON.parse(data).count;
// }

// function updateLikeCount(likeCount) {
//   const data = { count: likeCount };
//   fs.writeFileSync('likeCount.json', JSON.stringify(data));
// }

// module.exports = { getLikeCount, updateLikeCount };
// // client.js
// document.getElementById('likeButton').addEventListener('click', function() {
//   // Send a POST request to the server
//   fetch('/like', {
//     method: 'POST'
//   })
//   .then(response => response.json())
//   .then(data => {
//     // Update the counter on the client-side
//     document.getElementById('likeCount').textContent = data.count;
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });
// });
