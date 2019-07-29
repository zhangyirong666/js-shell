function Set(){
	this.dataStore = [];
	this.add = add;
	this.remove = remove;
	this.union = union;//并集
	this.intersect = intersect;//交集
	this.subset = subset;//判断是否是子集
	this.difference = difference;//补集
	this.show = show;
	this.contains = contains;//是否包含
	this.size = size;
}
function add(data){
	if(this.dataStore.indexOf(data)<0){
		this.dataStore.push(data);
	    this.dataStore = this.dataStore.sort();
		return true;
	}else{
		return false;
	}
}
function remove(data){
	var pos = this.dataStore.indexOf(data);
	if(pos > -1){
		this.dataStore.splice(pos, 1);
		return true;
	}else{
		return false;
	}
}
function contains(data){
	if(this.dataStore.indexOf(data)>-1){
		return true;
	}else{
		return false;
	}
}
//并集
function union(set){
	var setTemp = new Set();
	for(var i in this.dataStore){
		setTemp.add(this.dataStore[i]);
	}
	for(var i in set.dataStore){
		if(!this.contains(set.dataStore[i])){
			setTemp.add(set.dataStore[i]);
		}
	}
	setTemp.dataStore = setTemp.dataStore.sort();
	return setTemp;
}
//交集
function intersect(set){
	var setTemp = new Set() ;
	for(var i in set.dataStore){
		if(this.contains(set.dataStore[i])){
			setTemp.add(set.dataStore[i])
		}
	}
	setTemp.dataStore = setTemp.dataStore.sort();
	return setTemp;
}
//是否是子集
function subset(set){
	print(this.size(),set.size());
	if(this.size() > set.size()){
		return false;
	}else{
		for(var number in this.dataStore){
			if(!set.contains(this.dataStore[number])){
				return false
			}
		}
		return true;
	}
}
function size(){
	return this.dataStore.length;
}
//补集
function difference(set){
	var setTemp = new Set();
	for(var i in this.dataStore){
		if(set.dataStore.indexOf(this.dataStore[i]) < 0){
			setTemp.add(this.dataStore[i]);
		}
	}
	setTemp.dataStore = setTemp.dataStore.sort();
	return setTemp;
}
function show(){
	return this.dataStore;
}

// var names = new Set(); 
// names.add("David"); 
// names.add("Jennifer"); 
// names.add("Cynthia"); 
// names.add("Mike"); 
// names.add("Raymond"); 
// if (names.add("Mike")) { 
// 	print("Mike added") 
// }else { 
// 	print("Can't add Mike, must already be in set"); 
// }
// print(names.show()); 
// var removed = "Mike"; 
// if (names.remove(removed)) { 
// 	print(removed + " removed."); 
// }else { 
// 	print(removed + " not removed."); 
// }
// names.add("Clayton"); 
// print(names.show()); 
// removed = "Alisa"; 
// if (names.remove("Mike")) { 
// 	print(removed + " removed."); 
// }else { 
// 	print(removed + " not removed."); 
// }

// var cis = new Set(); 
// cis.add("Mike"); 
// cis.add("Clayton");
// cis.add("Jennifer"); 
// cis.add("Raymond"); 
// var dmp = new Set(); 
// dmp.add("Raymond"); 
// dmp.add("Cynthia"); 
// dmp.add("Jonathan"); 
// var it = new Set(); 
// it = cis.union(dmp); 
// print(it.show());

// var cis = new Set(); 
// cis.add("Mike"); 
// cis.add("Clayton"); 
// cis.add("Jennifer"); 
// cis.add("Raymond"); 
// var dmp = new Set(); 
// dmp.add("Raymond"); 
// dmp.add("Cynthia"); 
// dmp.add("Bryan"); 
// var inter = cis.intersect(dmp); 
// print(inter.show());

// var it = new Set();
// it.add("Cynthia"); 
// it.add("Clayton"); 
// it.add("Jennifer"); 
// it.add("Danny"); 
// it.add("Jonathan"); 
// it.add("Terrill"); 
// it.add("Raymond"); 
// it.add("Mike"); 
// var dmp = new Set(); 
// dmp.add("Cynthia"); 
// dmp.add("Raymond"); 
// dmp.add("Jonathan"); 
// if (dmp.subset(it)) { 
// 	print("DMP is a subset of IT."); 
// }else { 
// 	print("DMP is not a subset of IT."); 
// }

var cis = new Set();
var it = new Set(); 
cis.add("Clayton"); 
cis.add("Jennifer"); 
cis.add("Danny"); 
it.add("Bryan"); 
it.add("Clayton"); 
it.add("Jennifer"); 
var diff = new Set(); 
diff = cis.difference(it); 
print("[" + cis.show() + "] difference [" + it.show() + "] -> [" + diff.show() + "]");