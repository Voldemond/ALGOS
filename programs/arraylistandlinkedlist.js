function displayArrayListCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`//import java.util.ArrayList;
//import java.util.LinkedList;
//
//public class ArrayListAndLinkedList {
//	public static void main(String []args) {
//		 LinkedList<Integer> linkedList = new LinkedList<Integer>();
//		 ArrayList<Integer> arrrayList = new ArrayList<Integer>();
//		 
//		 long startTime;
//		 long endTime ;
//		 long elapsedTime;
//		 
//		 for(int i = 0;i<1000000;i++) {
//			 linkedList.add(i);
//			 arrayList.add(i);
//		 }
//		 startTime =System.nanoTime();
//		 endTime = System.nanoTime();
//		 elapsedTime = endTime -startTime;
//		 System.out.println("LinkedList:\t"+elapsedTime+"ns ");
//	}
//
//}
import java.util.ArrayList;
import java.util.LinkedList;

public class ArrayListAndLinkedList {
    public static void main(String[] args) {
        LinkedList<Integer> linkedList = new LinkedList<>();
        ArrayList<Integer> arrayList = new ArrayList<>();

        long startTime;
        long endTime;
        long elapsedTime;

        for (int i = 0; i < 1000000; i++) {
            linkedList.add(i);
            arrayList.add(i);
        }

        startTime = System.nanoTime();
        // Perform some operations on the lists here
//        linkedList.get(0);
        linkedList.get(500000);
        endTime = System.nanoTime();

        elapsedTime = endTime - startTime;
        System.out.println("LinkedList:\t" + elapsedTime + "ns ");
        
        startTime = System.nanoTime();
        // Perform some operations on the lists here
//        arrayList.get(0);
        arrayList.get(500000);
        endTime = System.nanoTime();

        elapsedTime = endTime - startTime;
        System.out.println("ArrayList:\t" + elapsedTime + "ns ");
    }
}
`;
codeContainer.textContent = code;
}
