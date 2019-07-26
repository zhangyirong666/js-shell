//双向链表
function Node(element){
	this.element = element;
	this.next = null;
	this.previous = null;
}

function LList(){
	this.head = new Node("head");
	this.find = find;
	this.posNode = this.head;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.dispReverse = dispReverse;
	this.findLast = findLast;
}

function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	newNode.previous = current;
	current.next = newNode;
}

function remove(item){
	var currNode = this.find(item);
	if(!(currNode.next == null)){
		currNode.previous.next = currNode.next;
		currNode.next.previous = currNode.previous;
		currNode.previous = null;
		currNode.next = null;
	}else{
		currNode.previous.next = currNode.next;
		currNode.previous = null;
		currNode.next = null;
	}
	
}

function findLast(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		currNode = currNode.next;
	}
	return currNode;
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

function dispReverse(){
	var currNode = this.findLast();
	while(!(currNode.previous == null)){
		print(currNode.element);
		currNode = currNode.previous;
	}
}

var cities = new LList(); 
cities.insert("Conway", "head"); 
cities.insert("Russellville", "Conway"); 
cities.insert("Carlisle", "Russellville"); 
cities.insert("Alma", "Carlisle"); 
cities.display(); 
print(); 
// cities.remove("Alma"); 
// cities.display(); 
// print(); 
// cities.dispReverse();
cities.advance(2);
cities.show();
print();
cities.back(1);
cities.show();