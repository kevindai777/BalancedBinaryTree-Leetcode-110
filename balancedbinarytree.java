//Java Solution

class Solution {
    public boolean isBalanced(TreeNode root) {
        return dfs(root) == 0 ? false : true;
    }
    
    public int dfs(TreeNode node) {
        if (node == null) {
            return 1;
        }
        
        int left = dfs(node.left);
        int right = dfs(node.right);
        
        if (left == 0 || right == 0 || Math.abs(left - right) > 1) {
            return 0;
        }
        
        return Math.max(left, right) + 1;
    }
}