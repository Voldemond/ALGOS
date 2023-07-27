function displayRecursionCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`

public class Recursion {
	
//	recursion = when a thing is defined in terms of itself . 
//		    Apply the result of procedure , to a procedure. 
//		    A recursive method calls itself. Can be a substitute for iteration. 
//		    Divide a problem into sub-problems of the same type as the original. 
//		    Commonly used with advanced sorting alorithms and navigating trees 
//			
//		    Advantages ; 
//		    easier to read/ write
//	   	    Easier to debug 
//		
//		    Disadvantages 
//	            Sometimes slower 
//		    uses more memory 

	public static void main(String[] args) {
//		System.out.println(factorial(7));
//	}
//
//private static int factorial(int num) {
//	// TODO Auto-generated method stub
//	if (num<1)return 1 ;
//	return num * factorial (num -1);
//}
		System.out.println(power(2,8));


}

private static int power(int base, int exponent) {
	// TODO Auto-generated method stub
	if (exponent <1 )return 1 ;
	return base * power(base,exponent -1);
}
}

`;
codeContainer.textContent = code;
}