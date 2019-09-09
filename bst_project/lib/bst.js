class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}


class BST {
    constructor(root = null) {
        this.root = root;
        this.left = null;
        this.right = null;
    }
    insert(val, node = this.root) {
        if (!this.root) {
            this.root = new TreeNode(val);
        } else if(val < node.val) {
            if (!node.left) {
                node.left = new TreeNode(val);
            } else {
                this.insert(val, node.left);
            }
        } else {
            if (!node.right) {
                node.right = new TreeNode(val);
            } else {
                this.insert(val, node.right);
            }
        }
    }
    searchRecur(val, root = this.root) {
        if (!root) return false;
        if (val < root.val) {
            return this.searchRecur(val, root.left);
        } else if (val > root.val) {
            return this.searchRecur(val, root.right);
        } else {
            return true;
        }
    }

    searchIter(val) {
        if (!this.root) return false;
        if (this.root.val === val) return true;

        let node = this.root;
        while (node) {
            if (val < node.val) {
                // if(node.left) {
                //     node = node.left;
                // } else {
                //     return false;
                // }
                node = node.left;
            } else if (val > node.val) {
                // if (node.right) {
                //     node = node.right;
                // } else {
                //     return false;
                // }
                node = node.right;
            } else {
                return true;
            }
        }
        return false;
    }
}

module.exports = {
    TreeNode,
    BST
};