/*创建 Person 类，该类用于保存人的姓名和性别信息。创建一个至少包含 10 个 Person 对象的列表。写一个函数显示列表中所有拥有相同性别的人。*/
function Person(){
	this.dataStore = [];
	this.toString = toString;
	this.set = set;
	this.showWoman = showWoman;
	this.showMan = showMan;
}
function toString(){
	return this.dataStore;
}
function set(name,sex){
	this.dataStore.push({name:name,sex:sex});
}
function showWoman(){
	var womans = this.dataStore.filter(woman => {
		return woman.sex === 1;
	})
	var names=[];
	for(var i in womans){
		names.push(womans[i].name)
	}
	print(names.toString())
}
function showMan(){
	var mans = this.dataStore.filter(man => {
		return man.sex === 0;
	})
	var names=[];
	for(var i in mans){
		names.push(mans[i].name)
	}
	print(names.toString())
}

var persons = new Person();
persons.set('a',1);
persons.set('b',0);
persons.set('c',1);
persons.set('d',0);
persons.set('e',0);
persons.set('f',1);
persons.set('i',0);
persons.set('j',1);
persons.set('k',1);
persons.set('l',1);
persons.showMan();
persons.showWoman();