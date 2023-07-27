function displaySelectionSortCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`

public class SSort {
	public static void main(String []args) {
		int array [] = { 5,6,2,1,7,8,3,4 
		};
		
		selectionSort(array);
		for(int i : array ) {
			System.out.print(i);
		}
	}

	private static void selectionSort(int[] array) {
		// TODO Auto-generated method stub
		for (int i = 0 ;i< array.length - 1;i++) {
			int min= i;
			for (int j = i+ 1;j<array.length; j++) {
				if(array[min]>array[j]) {
					min = j;
				}
			}
			int temp = array [i];
			array [i]= array[min];
			array[min]= temp;
		}
	}
}

`;
codeContainer.textContent = code;
}