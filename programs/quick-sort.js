function displayQuickSortCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`

public class QSort {
//    QuickSort is a sorting algorithm based on the Divide and Conquer algorithm that picks an 
//    element as a pivot and partitions the given array around the picked pivot by placing the pivot in 
//    its correct position in the sorted array.
	
//	quick sort = moves smaller elements to left of a pivot.
//			recursively divide array in 2 partitions
//			run-time complexity = Best case O(n log(n))
//			space complexity
//			Average case O(n log(n))
//			Worst case O(nA2) if already sorted
//			O(log(n)) due to recursion
	
	public static void main(String args[]) {
		int [] array	= {
				9,3,2,6,4,1,7,8,5
		};
		quickSort(array,0,array.length-1);
		for (int i :array){
			System.out.println(i+" ");
		}
	}

private static void quickSort(int[] array, int start, int end) {
	// TODO Auto-generated method stub
	
	if (end<= start )return;
	int pivot = partition (array,start , end);
	quickSort(array, start,pivot-1	);
	quickSort(array, pivot+1,end	);
}
	private static int partition(int[] array, int start, int end) {
		int pivot = array[end];
		int i = start -1;
		for(int j = start;j<= end -1 ;j++) {
			if(array[j]<pivot) {
				i++;
				int temp = array[i];
				array [i]= array[j];
				array[j]= temp;
			}
			
	}
		i++;
		int temp = array[i];
		array [i]= array[end];
		array[end]= temp;
		return i;

}
}


`;
codeContainer.textContent = code;
}