function displayTreeTraversalCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`

    A Tree Data Structure can be traversed in following ways:

        Depth First Search or DFS

         1]   Inorder Traversal
         2]   Preorder Traversal
         3]   Postorder Traversal


        Level Order Traversal or Breadth First Search or BFS

      1]  Boundary Traversal
      2]  Diagonal Traversal

`;
codeContainer.textContent = code;
}