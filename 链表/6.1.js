//单向链表
function Node(element){
	this.element = element;
	this.next = null;
}

function LList(){
	this.head = new Node("head");
	this.find = find;
	this.insert = insert;
	this.remove = remove;
	this.display = display;
	this.findPrev = findPrev;
}

function find(item){
	var currNode = this.head;
	while(currNode.element != item){
		currNode = currNode.next;
	}
	return currNode;
}

function findPrev(item){
	var currNode = this.head;
	while(!(currNode.next == null) && (currNode.next.element!=item)){
		currNode = currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function remove(element){
	var prevNode = this.findPrev(element);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

// var cities = new LList();
// cities.insert("Conway","head");
// cities.insert("Russellville","Conway");
// cities.insert("Alma","Russellville");
// cities.display();
// print();
// cities.remove("Alma");
// cities.display();

var achievements=[90,12,21,70,57,94,82];
function achievement(){
	var achievementList = new LList();
	for(var i=0; i<achievements.length; i++){
		if(i==0){
			achievementList.insert(achievements[i],'head');
		}else{
			achievementList.insert(achievements[i],achievements[i-1]);
		}
	}
	achievementList.display();
}

achievement();