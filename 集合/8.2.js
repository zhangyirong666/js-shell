function Node(element){
	this.element = element;
	this.next = null;
}
function Set(){
	this.head = new Node('head');
	this.find = find;
	this.findPrev = findPrev;
	this.add = add;
	this.remove = remove;
	this.union = union;//并集
	this.intersect = intersect;//交集
	this.subset = subset;//判断是否是子集
	this.difference = difference;//补集
	this.show = show;
	this.contains = contains;//是否包含
	this.size = size;
	this.isExist = isExist;
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
	print(currNode.element)
	while(currNode.next.element != item){
		currNode = currNode.next;
	}
	return currNode;
}
function isExist(item){
	var current = this.head;
	while(current.element != item && current.next != null){
		current = current.next;
	}
	if(current.element != item){
		return false
	}
	return true;
}
function add(newElement, item){
	if(!this.isExist(newElement)){
		var newNode = new Node(newElement);
		var currNode = this.find(item);
		newNode.next = currNode.next;
		currNode.next = newNode;
	}
}
function remove(data){
	var prevNode = this.findPrev(element);
	if(!(prevNode.next == null)){
		prevNode.next = prevNode.next.next;
	}
}
function contains(data){
	// if(this.dataStore.indexOf(data)>-1){
	// 	return true;
	// }else{
	// 	return false;
	// }
}
//并集
function union(set){
	// var setTemp = new Set();
	// for(var i in this.dataStore){
	// 	setTemp.add(this.dataStore[i]);
	// }
	// for(var i in set.dataStore){
	// 	if(!this.contains(set.dataStore[i])){
	// 		setTemp.add(set.dataStore[i]);
	// 	}
	// }
	// return setTemp;
}
//交集
function intersect(set){
	// var setTemp = new Set() ;
	// for(var i in set.dataStore){
	// 	if(this.contains(set.dataStore[i])){
	// 		setTemp.add(set.dataStore[i])
	// 	}
	// }
	// return setTemp;
}
//是否是子集
function subset(set){
	// if(this.size() > set.size()){
	// 	return false;
	// }else{
	// 	for(var number in this.dataStore){
	// 		if(!set.contains(this.dataStore[number])){
	// 			return false
	// 		}
	// 	}
	// 	return true;
	// }
}
function size(){
	// return this.dataStore.length;
}
//补集
function difference(set){
	// var setTemp = new Set();
	// for(var i in this.dataStore){
	// 	if(set.dataStore.indexOf(this.dataStore[i]) < 0){
	// 		setTemp.add(this.dataStore[i]);
	// 	}
	// }
	// return setTemp;
}
function show(){
	var currNode = this.head;
	while(currNode.next != null){
		print(currNode.next.element);
		currNode = currNode.next;
	}
}

var cis = new Set();
var it = new Set();
cis.add("Clayton",'head'); 
cis.add("Jennifer",'Clayton'); 
cis.add("Danny",'Jennifer'); 
it.add("Bryan",'head'); 
it.add("Clayton",'Bryan'); 
it.add("Jennifer",'Clayton');

print('cis');
cis.show();

print();
print('it');
it.show();