/*
Keep walking the nodes until you find the last one. If the node has a node.next, then walk that node:
Once you've found the last node (like 4 in this example), return it all the way up the call stack!
*/
function walk(node) {
    if(node.next === undefined){
        return node
    }
    return walk(node.next)
}

module.exports = walk;