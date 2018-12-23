// Graphs

// A collection of nodes aka vertices
// Nodes may point to other nodes, aka edges
const createQueue = require('./queues')

function createNode(key) {
    const neighbors = [];

    return {
        key,
        neighbors,
        addNeighbor(node) {
            neighbors.push(node);
        }
    }
}

function createGraph(directed = false) {
    const nodes = [];
    const edges = [];
    
    return {
        directed,
        nodes,
        edges,

        addNode(key) {
            nodes.push(createNode(key));
        },

        getNode(key) {
            return nodes.find(node => node.key === key);
        },

        addEdge(node1key, node2key) {
            const node1 = this.getNode(node1key);
            const node2 = this.getNode(node2key);

            node1.addNeighbor(node2);
            edges.push(`${node1key}-${node2key}`);

            if (!directed) {
                node2.addNeighbor(node1);
            }
        },

        print() {
            return nodes.map(({ key, neighbors }) => {
                let result = key; 

                if (neighbors.length) {
                    result +=   ` => ${ neighbors.map(neighbor => neighbor.key).join(' ') }`
                }

                return result;
            })
            .join('\n');
        },

        // Breadth First Search
        //  visit all neighbors before proceeding to the next neighbor and repeating
        breadthFirstSearch(startingNodeKey, visitFn) {
            const startingNode = this.getNode(startingNodeKey)
            
            // keep track of which nodes we've visited by setting all nodes to false
            const visited = nodes.reduce((acc, node) => { 
                acc[node.key] = false 
                return acc
            }, {})

            // keep track in order of which nodes we need to visit
            const queue = createQueue()
            queue.enqueue(startingNode)

            while (!queue.isEmpty()) {
                const currentNode = queue.dequeue()

                // set the current node as visited
                if (!visited[currentNode.key]) {
                    visitFn(currentNode) 
                    visited[currentNode.key] = true
                }

                // add each neighbor to the queue
                currentNode.neighbors.forEach(node => {
                    if(!visited[node.key]) {
                        queue.enqueue(node)
                    }
                });
            }
        },
        // Depth First Search
        depthFirstSearch(startingNodeKey, visitFn) {
            console.log('starting depth')
            const startingNode = this.getNode(startingNodeKey)
            const visited = nodes.reduce((acc, node) => {
                acc[node.key] = false
                return acc
            }, {})

            function explore(node) {
                if (visited[node.key]){
                    return
                }

                visitFn(node)
                visited[node.key] = true

                node.neighbors.forEach(node => explore(node))
                explore(startingNode)
            }
        }
    }
}

const directedGraph = createGraph(true);

directedGraph.addNode('Josh');
directedGraph.addNode('Cali');
directedGraph.addNode('Crypto');
directedGraph.addNode('Mochi');
directedGraph.addNode('Cat treats')

directedGraph.addEdge('Josh', 'Cali');
directedGraph.addEdge('Cali', 'Josh');
directedGraph.addEdge('Josh', 'Crypto');
directedGraph.addEdge('Josh', 'Mochi');
directedGraph.addEdge('Cali', 'Crypto');
directedGraph.addEdge('Cali', 'Mochi');
directedGraph.addEdge('Crypto', 'Josh');
directedGraph.addEdge('Mochi', 'Cali');
directedGraph.addEdge('Crypto', 'Cat treats');
directedGraph.addEdge('Mochi', 'Cat treats');

console.log('***** DIRECTED GRAPH *****')
console.log(directedGraph.print());

console.log('***** GRAPH *****')

const graph = createGraph()
const nodes = ['a', 'b', 'c', 'd', 'e', 'f']
const edges = [
    ['a', 'b'],
    ['a', 'e'],
    ['a', 'f'],
    ['b', 'd'],
    ['b', 'e'],
    ['c', 'b'],
    ['d', 'c'],
    ['d', 'e'],
]

nodes.forEach(node => graph.addNode(node))
edges.forEach(nodes => graph.addEdge(...nodes))

graph.breadthFirstSearch('a', node => console.log(node.key))
graph.depthFirstSearch('a', node => console.log(node.key))