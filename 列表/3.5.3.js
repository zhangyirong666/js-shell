function List(){
	this.listSize = 0;//长度
	this.pos = 0;//位置
	this.dataStore = [];//存储的数据
	this.rentedList=[];//已租数据
	this.name = null;
	this.movie = null;
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
	this.removePop = removePop;
}
//给列表下一位添加元素
function append(element){ 
	this.dataStore[this.listSize++] = element;
}
//查找元素所在位置的下标，不存在则返回-1
function find(element){
	//print('element',JSON.stringify(element));
	for(var i=0; i<this.dataStore.length; ++i){
		//print(JSON.stringify(this.dataStore[i]));
		if(this.dataStore[i] == element){
			//print('i',i)
			return i;
		}
	}
	return -1;
}
//删除元素
function remove(element){
	var foundAt = this.find(element);
	//print('foundAt',foundAt);
	if(foundAt > -1){
		this.dataStore.splice(foundAt, 1);
		--this.listSize;
		return true;
	}
	return false;
}

//删除对象元素
function removePop(pos){
	if(pos > -1){
		this.dataStore.splice(pos, 1);
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
	this.pos = this.listSize;
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


function createArr(file){
	var arr =read(file).split("\n");
	for(var i=0; i<arr.length; ++i){
		arr[i] = arr[i].trim();
	}
	return arr;
}

function displayList(list){
	for(list.front(); list.currPos()<list.length(); list.next()){
		if (list.getElement() instanceof Customer) {
		    print(list.getElement()["name"] + ", " +
		    list.getElement()["movie"]);
		}
		else {
		    print(list.getElement());
		}
	}
}

function Customer(name,movie){
	this.name=name;
	this.movie=movie;
} 
function checkOut(name, movie, filmList, customerList){
	//print('\ncheck-out');
	if(movieList.contains(movie)){
		var c = new Customer(name,movie);
		customerList.append(c);
		customerList.rentedList.push(c.movie);
		filmList.remove(movie);
		print('\ncheckOut---RentedList: ',customerList.rentedList.toString());
	}
	else{
		print(movie + 'is not available.');
	}
}
function checkIn(name, movie, filmList, customerList){
	//print('\ncheck-in');
	//不是删除一个普通元素，而是删除一个实例化对象元素，就不能直接使用列表类的remove方法了。通过位置删除元素。其中对列表的操作都是通过迭代器，而不应该为列表直接添加或者删除元素。
	var c = new Customer(name, movie);
	//print('c',JSON.stringify(c));
	for(customerList.front();customerList.currPos()<customerList.length();customerList.next()){
		//print('customerList.getElement()',JSON.stringify(customerList.getElement()));
		//print('1',c === customerList.getElement());
		//print('2',JSON.stringify(c)===JSON.stringify(customerList.getElement()))
		if(JSON.stringify(c)===JSON.stringify(customerList.getElement())){
			customerList.removePop(customerList.currPos());
			customerList.rentedList.splice(customerList.rentedList.indexOf(movie),1);
			filmList.append(movie);
			print('\ncheckIn---RentedList: ',customerList.rentedList.toString());
		}
	}
}

/*修改本章的影碟租赁程序，当一部影片检出后，将其加入一个已租影片列表。每当有客 户检出一部影片，都显示该列表中的内容。*/
/*为影碟租赁程序创建一个 check-in() 函数，当客户归还一部影片时，将该影片从已租列 表中删除，同时添加到现有影片列表中。*/


var movies = [
    'The Shawshank Redemption',
    'The Godfather',
    'The Godfather:Part',
    'Pulp Fiction',
    'The Good,the Bad and the Ugly',
    '12 Angry Men',
    "Schindler's List",
    'The Dark Knight',
    'The Lord of Rings:The Return of the King',
    'Fight Club',
    'Star Wars:Episode V- The Empire Strikes Back',
    'One Flew Over the Cuckoo’s Nest',
    'The Lord of the Rings: The Fellowship of the Ring',
    'Inception',
    'Goodfellas',
    'Star Wars',
    'Seven Samurai',
    'The Matrix',
    'Forrest Gump',
    'City of God',
    ];
var movieList =new List();
//print(movies.toString());
for(var i=0; i<movies.length; ++i){
	movieList.append(movies[i]);
}
//print(movieList.toString());
var customers = new List();
//print("Available movies: \n");
//print("before:\n");
//displayList(movieList);
checkOut('Bob', 'City of God', movieList, customers);
checkOut('Aam', 'Star Wars', movieList, customers);
checkIn('Aam', 'Star Wars', movieList, customers);
print("\nmovieList:");
displayList(movieList);
print('\ncustomers:');
displayList(customers);
checkIn('Bob', 'City of God', movieList, customers);
print("\nmovieList:");
displayList(movieList);
print('\ncustomers:');
displayList(customers);