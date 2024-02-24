class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (val < current.val) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        } else {
          current = current.left;
        }
      } else if (val > current.val) {
        if (current.right === null) {
          current.right = newNode;
          return this;
        } else {
          current = current.right;
        }
      } else {
        return this;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, currentNode = this.root) {
    const newNode = new Node(val);

    if (this.root === null) {
      this.root = newNode;
      return this;
    }

    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = newNode;
        return this;
      } else {
        this.insertRecursively(val, currentNode.left);
      }
    } else if (val > currentNode.val) {
      if (currentNode.right === null) {
        currentNode.right = newNode;
        return this;
      } else {
        this.insertRecursively(val, currentNode.right);
      }
    } else {
      return this;
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let currentNode = this.root;

    while (currentNode !== null) {
      if (currentNode.val === val) {
        return currentNode;
      } else if (val < currentNode.val) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, currentNode = this.root) {
    if (currentNode === null) {
      return undefined;
    }
    if (currentNode.val === val) {
      return currentNode;
    }

    if (val < currentNode.val) {
      return this.findRecursively(val, currentNode.left);
    } else {
      return this.findRecursively(val, currentNode.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    const visited = [];
    const traverse = (node) => {
      if (!node) return;
      visited.push(node);
      traverse(node.left);
      traverse(node.right);
    };

    traverse(this.root);
    return visited;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    const visited = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left); // Go left
      visited.push(node.val); // Visit node
      traverse(node.right); // Go right
    };
    traverse(this.root);
    return visited;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    const visited = [];
    const traverse = (node) => {
      if (!node) return;
      traverse(node.left); // Go left
      traverse(node.right); // Go right
      visited.push(node.val); // Visit node
    };
    traverse(this.root);
    return visited;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const queue = [this.root];
    const visited = [];
    while (queue.length) {
      const currentNode = queue.shift();
      if (currentNode) {
        visited.push(currentNode.val);
        if (currentNode.left) queue.push(currentNode.left);
        if (currentNode.right) queue.push(currentNode.right);
      }
    }
    return visited;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
