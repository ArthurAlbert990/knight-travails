// tutorial:
//https://www.youtube.com/watch?v=yj5YnqH5fKc
// 6:20, implementando queue.


class Node{
    constructor(x,y,distanceFromStartPos){
        this.row=x;
        this.col=y;
        this.distanceFromStart = distanceFromStartPos;
    }
}

function knightMoves(x,y){
    const queue = [];
    const startNode = new Node(0,0,0);
    queue.push(startNode);

    const visited = new Set();
    while (queue.length>0) {
        //remove node, first on queue
        const node = queue.shift();
        //process node
        //add neighbors
        
    }
}