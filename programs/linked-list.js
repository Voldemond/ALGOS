function displayLinkedListCode() {
    const codeContainer = document.getElementById('code-container');
    const code = `import java.util.*;

public class LLNode {
	public static void main (String args[]) {
		
		/*
		 * LinkedList = stores nodes in 2 parts (data + address)
		 * 				Nodes are in non - consecutive memory locations 
		 * 				Elements are linked using pointers
		 * 
		 * 								Singly Linked List
		 * 			Node 						Node 					Node
		 * 		[data | address ] -> [data | address ]     ->      [data | address ]
		 * 
		 * 								Doubly Linked List
		 * 			Node 						Node 					Node
		 * [address | data | address ] ->[address | data | address ]    ->   [address | data | address ]
		 * 
		 * 	 Advantages 
		 * 1. Dynamic Data Structure ( allocates needed memory while running )
		 * 2. Insertion and Deletion of nodes is easy . O(1)
		 * 3. No/Low Memory Waste
		 * 	
		 * 	Disadvantages 
		 * 1. Greater memory Usage (additional Pointer)
		 * 2. No random access of element (no index(i))
		 * 3. Accessing / Searching element is more time consuming . O(n) 
		 * 
		 * 	Uses 
		 * 1. implement stack/queue
		 * 2. GPS navigation 
		 * 3. music playlist 
		 */
		LinkedList<String> linkedList = new LinkedList<String>();
		
		//LinkedList As Stack
//		linkedList.push("A");
//		linkedList.push("B");
//		linkedList.push("C");
//		linkedList.push("F");
//		linkedList.pop();
		
		//LinkedList As Queue 
		linkedList.offer("A");
		linkedList.offer("B");
		linkedList.offer("C");
		linkedList.offer("E");
//		linkedList.pop();
		
		linkedList.add(3,"D");
		linkedList.remove("E ");
		System.out.println(linkedList);
		
		
	}

}`;
  
// Set the code to the code container
codeContainer.textContent = code;
}
