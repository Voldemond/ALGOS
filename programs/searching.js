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
        // Search implementation...
      }
    }`;
  
    // Set the code to the code container
    codeContainer.textContent = code;
  }
  