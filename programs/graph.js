function displayGraphsCode() {
    const codeContainer = document.getElementById('code-container');
    const code = 

`
Graph is a data structure that consists of the following two components: 

    A finite set of vertices also called nodes.
    A finite set of ordered pair of the form (u, v) called edge. The pair is ordered because (u, v) is not the same as (v, u) in the case of a directed graph(di-graph). The pair of the form (u, v) indicates that there is an edge from vertex u to vertex v. The edges may contain weight/value/cost.

`;
codeContainer.textContent = code;
}