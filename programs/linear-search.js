function displayLinearSearchCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`
public class LSearch {
	public static void main (String args[]) {
		
//          linear search = Iterate through a collection one element at a time
//							runtime complexity: O(n)
		
//							Disadvantages :
//							Slow for large data sets
		
//							Advantages :
//							Fast for searches of small to medium data sets
//							Does not need to sorted
//							Useful for data structures that do not have random access (Linked List)
		int [] array = { 
			1,9,2,6,3,4,7	
		};
		int index = linearSearch(array,5);
		if (index != -1 ) {
			System.out.println("Element found at index :"+index);
		}
		else {
			System.out.println("Element not Found");
		}
	}

	private static int linearSearch(int[] array, int value) {
		for(int i =0;i<array.length;i++) {
			if(array[i]== value) {
				return i;
			}
		}
		return -1;
	}
}
`;
codeContainer.textContent = code;
}
