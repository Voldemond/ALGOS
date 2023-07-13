function displayStackCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`import java.util.Stack;

public class Lifo {
	public static void main(String []args) {
		Stack<String> stack = new Stack<String>();
		stack.push("Minecraft");
		stack.push("Valorant");
		stack.push("Gta V");
		stack.push("COD");
		stack.push("Clash Of clans"); 
//		System.out.println(stack.empty());
		String myfavgame = stack.pop();
//		stack.pop();
//			System.out.println(stack);
//		System.out.println(myfavgame);
//		System.out.println(stack.peek());
		System.out.println(stack.search("Valorant"));
		
		
//		stack =
//				LIFO data structure. Last-In First-out
//				stores objects into a sort of "vertical tower"
//				push() to add to the top
//				pop() to remove from the top
	}
}`;
codeContainer.textContent = code;
}
