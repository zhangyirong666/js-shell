// 循环链表
function Node(element){
	this.element = element;
	this.next = null;
}

function LList(){
	this.head = new Node("head");
	this.head.next = this.head;
	this.currNode = null;
	this.posNode = this.head;
	this.find = find;
	this.insert = insert;
	this.display = display;
	this.findPrevious = findPrevious;
	this.remove = remove;
	this.advance = advance;
	this.back = back;
	this.show = show;
	this.lastNode = lastNode;
}

function find(item){
	var currNode = this.head;
	while(!(currNode.element==item)){
		currNode =currNode.next;
	}
	return currNode;
}

function insert(newElement, item){
	var newNode = new Node(newElement);
	var current = this.find(item);
	newNode.next = current.next;
	current.next = newNode;
}

function display(){
	var currNode = this.head;
	while(!(currNode.next == null)&&!(currNode.next.element=="head")){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}
 
function findPrevious(item){
	var currNode =this.head;
	while(!(currNode.next == null)&&currNode.next.element != item){
		if(currNode.next == this.head){
			currNode = currNode.next.next;
		}else{
			currNode = currNode.next;
		}
	}
	return currNode;
}

function remove(item){
	var currNode = this.find(item);
	var prevNode = this.findPrevious(item);
	if(!(currNode.next == null) ){
		prevNode.next = currNode.next;
	}
}

function advance(n){
	while(n >0){
		if(this.posNode.next == this.head){
			this.posNode = this.posNode.next.next;
		}else{
			this.posNode = this.posNode.next;
		}
		n--;
	}
}

function lastNode(){
	var currNode = this.head;
	while(!(currNode.next == this.head)){
		currNode = currNode.next;
	}
	return currNode;
}

function back(n){
	while(n >0){
		//print('123',this.findPrevious(this.posNode.element)==this.head)
		//print("llll",this.lastNode().element)
		if(this.findPrevious(this.posNode.element) == this.head){
			this.posNode = this.lastNode();
		}else{
			this.posNode = this.findPrevious(this.posNode.element);
		}
		//print(this.posNode.element)
		n--;
	}
}

function show(){
	return this.posNode.element;
}

// var cities = new LList();
// cities.insert("Conway", "head"); 
// cities.insert("Russellville", "Conway"); 
// cities.insert("Carlisle", "Russellville"); 
// cities.insert("Alma", "Carlisle"); 
// cities.display(); 
// print(); 
// // cities.remove("Alma"); 
// // cities.display(); 
// cities.advance(6);
// print(cities.show());
// print();
// cities.back(6);
// print(cities.show());

//传说在公元 1 世纪的犹太战争中，犹太历史学家弗拉维奥·约瑟夫斯和他的 40 个同胞 被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏，于是商量出了一个自杀方案。他 们围成一个圈，从一个人开始，数到第三个人时将第三个人杀死，然后再数，直到杀光 所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏，他们快速地计算出了两个位 置，站在那里得以幸存。写一段程序将 n 个人围成一圈，并且第 m 个人会被杀掉，计算 一圈人中哪两个人最后会存活。使用循环链表解决该问题。
function suicide(n,m){
	var suicideList = new LList();
	for(var i=1; i<n+1; i++){
		if(i==1){
			suicideList.insert(i,'head');
		}else{
			suicideList.insert(i,i-1);
		}
	}
	while(n>2){
		suicideList.advance(m);
		suicideList.remove(suicideList.show());
		n--;
	}
	suicideList.display();
}
suicide(11,3);  