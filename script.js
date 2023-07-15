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
    const datetimeElement = document.getElementById("datetime");
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    // const seconds = now.getSeconds();
    datetimeElement.textContent = `${date} ${time} `;
  }

  setInterval(updateDateTime, 1000);
  updateDateTime();