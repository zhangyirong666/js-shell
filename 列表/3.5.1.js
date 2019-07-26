function List(){
	this.listSize = 0;//长度
	this.pos = 0;//位置
	this.dataStore = [];//存储的数据
	this.clear = clear;
	this.find = find;
	this.toString = toString;
	this.insert = insert;
	this.append = append;
	this.remove = remove;
	this.front = front;
	this.end = end;
	this.prev = prev;
	this.next = next;
	this.length = length;
	this.currPos = currPos;
	this.moveTo = moveTo;
	this.getElement = getElement;
	this.contains = contains;
	this.insertBig = insertBig;
	this.insertSmall= insertSmall;
}
//给列表下一位添加元素
function append(element){ 
	this.dataStore[this.listSize++] = element;
}
//查找元素所在位置的下标，不存在则返回-1
function find(element){
	for(var i=0; i<this.dataStore.length; ++i){
		if(this.dataStore[i] == element){
			return i;
		}
	}
	return -1;
}
//删除元素
function remove(element){
	var foundAt = this.find(element);
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}
//求length
function length(){
	return this.listSize;
}
//显示列表中的元素
function toString(){
	return this.dataStore;
}
//insert 插入元素
function insert(element, after){
	var insertPos = this.find(after);
	if(insertPos > -1){
		this.dataStore.splice(insertPos++, 0, element);
		++this.listSize;
		return true;
	}
	return false;
}
//清空事件
function clear(){
	delete this.dataStore;
	this.dataStore = [];
	this.listSize = this.ps = 0;
}
//判断给定值是否存在
function contains(element){
	for(var i=0; i<this.dataStore.length; ++i){
		if(this.dataStore[i]){
			return true;
		}
	}
	return false;
}
//遍历表单
function front(){//指针到第一位
	this.pos = 0;
}
function end(){//指针到最后一位
	this.pos = this.listSize-1;
}
function prev(){//指针向前移一位
	if(this.pos > 0){
		--this.pos;
	}
}
function next(){//向后移一位
	if(this.pos < this.listSize){
		++this.pos;
	}
}
function currPos(){//当前位置
	return this.pos;
}
function moveTo(position){//移到某个位置
	this.pos = position;
}
function getElement(){//获取元素
	return this.dataStore[this.pos];
}

/*增加一个向列表中插入元素的方法，该方法只在待插元素大于列表中的所有元素时才执
行插入操作。这里的大于有多重含义，对于数字，它是指数值上的大小；对于字母，它
是指在字母表中出现的先后顺序。*/
function insertBig(element){
	if((typeof element) == 'number'){
		for(var i in this.dataStore){
			if(typeof this.dataStore[i]==='number' && element > this.dataStore[i]){
				this.append(element);
				return true;
			}
		}
	}else{
		let temp = this.dataStore.filter(val =>{
			return val !== 'number'
		}).concat(element).sort()
		if(temp.indexOf(element) == (temp.length-1)){
			this.append(element);
			return true;
		}
	}
	return false;
}

// 增加一个向列表中插入元素的方法，该方法只在待插元素小于列表中的所有元素时才执行插入操作
function insertSmall(element){
	if((typeof element) == 'number'){
		for(var i in this.dataStore){
			if(typeof this.dataStore[i]==='number' && element < this.dataStore[i]){
				this.append(element);
				return true;
			}
		}
	}else{
		let temp = this.dataStore.filter(val => {
			return typeof val !=='number';
		}).concat(element).sort()
		print('temp',temp.toString())
		if(temp.indexOf(element) == 0){
			this.append(element);
			return true;
		}
	}
	return false;
}


var names = new List();
names.append('Mazey');
names.append('Cherrie');
names.append('Luna');
names.append('John');
names.append('July');
names.append(23);
names.append(73);
print(names.toString());
names.insertSmall(99);
names.insertSmall(12);
print(names.toString());
names.insertSmall('Jay');
names.insertSmall('Zero');
names.insertSmall('Ada');
print(names.toString());