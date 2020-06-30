//Objective is to see whether a binary tree is balanced or not.

class Node {
    constructor(left, right, val) {
      this.left = left
      this.right = right
      this.val = val
    }
}
  
class Tree {
    constructor(root) {
      this.root = null
    }
  
    createRoot(val) {
      this.root = new Node(null, null, val)
    }
  
    addLeftNode(node, val) {
      node.left = new Node(null, null, val)
    }
  
    addRightNode(node, val) {
      node.right = new Node(null, null, val)
    }
}

let tree = new Tree()
tree.createRoot(200)
tree.addLeftNode(tree.root, 500)
tree.addRightNode(tree.root, 700)
tree.addLeftNode(tree.root.left, 600)
tree.addRightNode(tree.root.right, 800)
tree.addLeftNode(tree.root.left.left, 1000)
tree.addRightNode(tree.root.left, 950)
tree.addLeftNode(tree.root.right, 720)
tree.addRightNode(tree.root.right.right, 440)
tree.addLeftNode(tree.root.left.left.left, 560)
tree.addRightNode(tree.root.right.right.right, 810)


//O(n) solution that uses DFS to see whether two depths is greater than one.

function dfs(node) {
    if (!node) {
        return true
    }

    let left = dfs(node.left)
    let right = dfs(node.right)

    //If there is no left/right subtree OR if the depth
    //between any two levels are greater than 1
    if (!left || !right || Math.abs(left - right) > 1) {
        return false
    }

    //Recursive call to get to the maximum depth
    return Math.max(left, right) + 1
}
return dfs(tree.root)

