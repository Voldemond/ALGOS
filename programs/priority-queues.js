function displayPriorityQueueCode() {
    const codeContainer = document.getElementById('code-container');
    const code = `import java.util.*;

public class PQueue {
	public static void main (String []args) {
		// Priority
//		Queue = A FIFO data structure that serves elements
//		with the highest priorities first
//		before elements with lower priority
		
//		 Queue<Double> queue = new LinkedList<>();
//		 Queue<Double> queue = new PriorityQueue<>();
//		 Queue<Double> queue = new PriorityQueue(Collections.reverseOrder());
		 Queue<String> queue = new PriorityQueue();
//		 queue.offer(3.0); ṇ
//		 queue.offer(4.0);
//		 queue.offer(1.0);
//		 queue.offer(2.5);
//		 queue.offer(1.5);

		 queue.offer("B");
		 queue.offer("C");
		 queue.offer("A");
		 queue.offer("F");
		 queue.offer("D");
		 queue.offer("E");

		 while(!queue.isEmpty()) {
			 System.out.println(queue.poll());
		 }
//		 System.out.println(queue);
	}
}`;
  
// Set the code to the code container
codeContainer.textContent = code;
}

