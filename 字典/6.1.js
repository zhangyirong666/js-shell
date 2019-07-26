function Dictionary(){
	this.dataStore = new Array();
	this.add = add;
	this.find = find;
	this.remove = remove;
	this.showAll = showAll;
	this.count = count;
	this.clear = clear;
}

function add(key, value){
	this.dataStore[key] = value;
}

function find(key){
	return this.dataStore[key];
}

function remove(key){
	delete this.dataStore[key];
}

function showAll(){
	//key 排序
	var keys = Object.keys(this.dataStore).sort()
	for(var key in keys){
		print(keys[key] + " -> " + this.dataStore[keys[key]]);
	}
}

function clear() {
	for(var key in this.dataStore) { 
		delete this.dataStore[key]; 
	}
}

function count(){
	var n = 0;
	for(var key in Object.keys(this.dataStore)){
		++n;
	}
	return n;
}

// var pbook = new Dictionary();  
// pbook.add("Mike","123"); 
// pbook.add("David", "345");
// pbook.add("Cynthia", "456"); 
// print("David's extension: " + pbook.find("David")); 
// pbook.remove("David"); 
// pbook.showAll();
// print(pbook.count());
// print();
// pbook.clear();
// print(pbook.count());

//写一个程序，该程序从一个文本文件中读入名字和电话号码，然后将其存入一个字典。 该程序需包含如下功能：显示单个电话号码、显示所有电话号码、增加新电话号码、删 除电话号码、清空所有电话号码
var telNotes = [{name:'a',tel:'1211'},
{name:'b',tel:'1212'},{name:'c',tel:'1213'},
{name:'d',tel:'1214'},{name:'e',tel:'1215'},
{name:'f',tel:'1216'},{name:'g',tel:'1217'}];

var tels = new Dictionary();
for(var i=0; i<telNotes.length; i++){
	tels.add(telNotes[i].name,telNotes[i].tel);
}
// tels.find('b');
// print();
// tels.showAll();
// print();
// tels.add('h','1218');
// tels.showAll();
// print();
// tels.remove('c');
// tels.showAll();
// print();
// tels.clear();
// tels.showAll();

//使用 Dictionary 类写一个程序，该程序用来存储一段文本中各个单词出现的次数。该程 序显示每个单词出现的次数，但每个单词只显示一次。比如下面一段话“the brown fox jumped over the blue fox”，程序的输出应为： the: 2 brown: 1 fox: 2 jumped: 1 over: 1 blue: 1
function countWord(sentence){
	var wordList = new Dictionary();
	var words = sentence.split(' ').sort();
	//print(words);
	var n = 0;
	var temp = null;
	for(var i=0; i<words.length; i++){
		if(i==0){
			temp = words[0];
		}
		
		if(temp === words[i]){
		    n++;
		}else{
			//print(n);
			//print();
			wordList.add(temp,n);
			temp = words[i];
			n = 1;
		}
		//print(i+'->'+temp);
		
	}
	//print();
	wordList.add(temp,n);
	wordList.showAll();
}

countWord("the brown fox jumped over the blue fox");