function displayInsertionSortCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`


public class ISort {
	public static void main(String []args) {
		int array []= {
				7,3,2,8,4,1,5,6
		};
		insertionSort(array);
		for(int i :array) {
			System.out.println(i);
		}
	}

	private static void insertionSort(int[] array) {
		// TODO Auto-generated method stub
		for(int i=1;i<array.length;i++) {
			int temp = array[i];
			int j = i-1;
			
			while (j>=0 && array[j]>temp) {
				array[j+1]=array[j];
				j--;
				
			}
			array[j+1]= temp;
		}
	}
}

`;
codeContainer.textContent = code;
}