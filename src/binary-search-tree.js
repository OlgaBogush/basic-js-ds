const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.r = null
  }

  root() {
    return this.r
  }

  add(data) {
    const node = new Node(data)
    let currentNode = this.r
    if (!currentNode) {
      this.r = node
      return
    }
    while (currentNode) {
      if (node.data < currentNode.data) {
        if (!currentNode.left) {
          currentNode.left = node
          return
        }
        currentNode = currentNode.left
      }
      if (node.data > currentNode.data) {
        if (!currentNode.right) {
          currentNode.right = node
          return
        }
        currentNode = currentNode.right
      }
    }
  }

  has(data) {
    let currentNode = this.r
    if (!currentNode) {
      return false
    }
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        currentNode = currentNode.right
      } else if (data === currentNode.data) {
        return true
      }
    }
    return false
  }

  find(data) {
    let currentNode = this.r
    if (!currentNode) {
      return null
    }
    while (currentNode) {
      if (data < currentNode.data) {
        currentNode = currentNode.left
      } else if (data > currentNode.data) {
        currentNode = currentNode.right
      } else if (data === currentNode.data) {
        return currentNode
      }
    }
    return null
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return null
      }
      if (data < node.data) {
        node.left = removeNode(node.left, data)
        return node
      } else if (data > node.data) {
        node.right = removeNode(node.right, data)
        return node
      } else {
        if (!node.left && !node.right) {
          return null
        }
        if (!node.left) {
          node = node.right
          return node
        }
        if (!node.right) {
          node = node.left
          return node
        }
        let a = node.right
        while (a.left) {
          a = a.left
        }
        node.data = a.data
        node.right = removeNode(node.right, a.data)
        return node
      }
    }

    this.r = removeNode(this.r, data)
  }

  min() {
    let currentNode = this.r
    if (!currentNode) {
      return
    }
    while (currentNode.left) {
      currentNode = currentNode.left
    }
    return currentNode.data
  }

  max() {
    let currentNode = this.r
    if (!currentNode) {
      return
    }
    while (currentNode.right) {
      currentNode = currentNode.right
    }
    return currentNode.data
  }
}
module.exports = {
  BinarySearchTree
};