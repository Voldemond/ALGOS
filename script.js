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

          // Add more conditions for other data structures and their algorithms
        });
      }
    }
  });
    
  
  function displaySearchingCode() {
    const codeContainer = document.getElementById('code-container');
    const code = `public class ISearch {
      public static void main(String[] args) {
        // Interpolation search algorithm
        int[] array = {1, 2, 3, 4, 5, 6, 7, 8, 9};
        int value = 8;
        int index = interpolationSearch(array, value);
        if (index != -1) {
          System.out.println("Element found at index: " + index);
        } else {
          System.out.println("Element not found");
        }
      }
  
      private static int interpolationSearch(int[] array, int value) {
        int low = 0;
        int high = array.length - 1;
  
        while (low <= high && value >= array[low] && value <= array[high]) {
          int pos = low + ((value - array[low]) * (high - low)) / (array[high] - array[low]);
  
          if (array[pos] == value) {
            return pos;
          } else if (array[pos] < value) {
            low = pos + 1;
          } else {
            high = pos - 1;
          }
        }
  
        return -1;
      }
    }`;
  
    // Set the code to the code container
    codeContainer.textContent = code;
  }
  





