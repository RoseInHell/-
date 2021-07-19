
// 1. 给定一个二叉树，找出其最大深度。
// 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
// 说明: 叶子节点是指没有子节点的节点。
// 示例：
  //   3

  //  / \

  // 9  20

  //   /  \

  //  15   7

// 返回它的最大深度 3 。
// ```javascript

//  function TreeNode(val) {

//      this.val = val;

//      this.left = this.right = null;

//  }

// const n1 = new TreeNode(7)

// const n2 = new TreeNode(15)

// const n3 = new TreeNode(20)

// n3.left = n2

// n3.right = n1

// const n4 = new TreeNode(9)

// const n5 = new TreeNode(3)

// n5.left = n4

// n5.right = n3

// const tree = n5

// const maxDepth = function(root) {

// }

// ```
// const maxDepth = function(root) {
// 	if (!root) return 0;
// 	let deep = Math.max(maxDepth(root.left),maxDepth(root.right))
// 	return deep+1
// }
//  function TreeNode(val) {

//      this.val = val;

//      this.left = this.right = null;

//  }
// const n1 = new TreeNode(7)

// const n2 = new TreeNode(15)

// const n3 = new TreeNode(20)

// n3.left = n2

// n3.right = n1

// const n4 = new TreeNode(9)

// const n5 = new TreeNode(3)

// n5.left = n4

// n5.right = n3

// const tree = n5
// console.log(maxDepth(tree))
