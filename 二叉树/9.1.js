function Node(data, left, right){
	this.data = data;
	this.left = left;
	this.right = right;
	this.show = show;
}
function show(){
	return this.data;
}
function BST(){
	this.root = null;
	this.insert = insert;
	this.inOrder = inOrder;
}
function insert(data){
	var n = new Node(data, null, null);
}