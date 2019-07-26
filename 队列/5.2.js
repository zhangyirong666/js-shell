//双向队列
function Deque(){
	this.dataStore = []; 
	this.unshift = unshift;//头部添加unshift
	this.push = push;//末尾添加
	this.pop = pop;//末尾删除
	this.shift = shift;//头部删除shift
}

function unshift(element){
	this.dataStore.unshift(element);
}

function push(element){
	this.dataStore.push(element);
}

function pop(){
	return this.dataStore.pop();
}

function shift(){
	return this.dataStore.shift();
}

function toString(){
	var restr = '';
	for(var i=0; i<this.dataStore.length; ++i){
		restr += this.dataStore[i];
	}
	return restr;
}

//双向队列测试代码
// var deque = new Deque();
// deque.push('a');
// deque.push('b');
// deque.push('d');
// deque.push('e');
// deque.push('f');
// print(JSON.stringify(deque.dataStore));
// deque.unshift('o');
// print(JSON.stringify(deque.dataStore));
// print(deque.shift());
// print(JSON.stringify(deque.dataStore));
// print(deque.pop());
// print(JSON.stringify(deque.dataStore));

// 使用前面完成的 Deque 类来判断一个给定单词是否为回文
function isPalindrome(word){
	var before = new Deque();
	var after = new Deque();
	var listSize = 0;
	for(var i=0; i<word.length; i++){
		before.push(word[i]);
		after.unshift(word[i]);
		listSize = i;
	}
	if(JSON.stringify(before.dataStore) === JSON.stringify(after.dataStore)){
		return true;
	}
	return false;
}

print(isPalindrome('1214'));