function displayQueueCode() {
    const codeContainer = document.getElementById('code-container');
    const code = `import java.util.Queue;
import java.util.LinkedList;

public class Fifo {
	public static void main(String []args) {
		
		
//		Queue
//		= FIFO data structure. First-In First-Out
//		A collection designed for holding elements prior to processing
//		Linear data structure
//		add= enqueue, offer()
//		remove =dequeue, poll()
		
		Queue<String> queue = new LinkedList<String>();
		
		queue.offer("Kunal");
		queue.offer("Mohit");
		queue.offer("Hitesh");
		queue.offer("Aditya");
		// System.out.println(queue.isEmpty());
		// System.out.println(queue.size());
		// System.out.println(queue.peek());
		System.out.println(queue.contains("kapure"));
		queue.poll();
		System.out.println(queue);
	}
}`;
  
// Set the code to the code container
codeContainer.textContent = code;
}

