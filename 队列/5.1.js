function Queue(){
	this.dataStore = [];
	this.enqueue = enqueue;
	this.dequeue = dequeue;
	this.front = front;
	this.back = back;
	this.toString = toString;
	this.isEmpty = isEmpty;
	this.count = count;
	this.enter = enter;
	this.visit = visit;
	this.show = show;
}

function enqueue(element){//队尾插入
	this.dataStore.push(element);
}

function dequeue(element){//队首删除
	var priority = this.dataStore[0].code;
	for(var i =1; i<this.dataStore.length; ++i){
		if(this.dataStore[i].code > priority){
			priority = i;
			return this.dataStore.splice(priority,1)
		}
	}
	return this.dataStore.splice(0,1)
}

// function dequeue(element){//队首删除
// 	var priority = this.dataStore[0].code;
// 	for(var i =1; i<this.dataStore.length; ++i){
// 		if(this.dataStore[i].code < priority){
// 			priority = i;
// 		}
// 	}
// 	return this.dataStore.splice(priority,1)
// }

function front(){//查询队首
	return this.dataStore[0];
}

function back(){//查询队尾
	return this.dataStore[this.dataStore.length-1];
}

function toString(){
	var reStr = '';
	for(var i=0; i<this.dataStore.length; ++i){
		reStr += this.dataStore[i].name + " code: " + this.dataStore[i].code + ' \n ';
	}
	return reStr;
}

function isEmpty(){
	if(this.dataStore.length === 0){
		return true;
	}else{
		return false;
	}
}

function count(){
	return this.dataStore.length;
}

//测试程序
// var q = new Queue();
// q.enqueue("Meredith");
// q.enqueue("Cynthia");
// q.enqueue("Jennifer"); 
// print(q.toString()); 
// print("Front of queue: " + q.front()); 
// print("Back of queue: " + q.back());
// q.dequeue(); 
// print(q.toString()); 
// print("Front of queue: " + q.front()); 
// print("Back of queue: " + q.back());

var dancers = ['F Allison McMillan',
'M Frank Opitz', 
'M Mason McMillan', 
'M Clayton Ruff', 
'F Cheryl Ferenback', 
'M Raymond Williams', 
'F Jennifer Ingram', 
'M Bryan Frazer', 
'M David Durr',
'M Danny Martin', 
'F Aurora Adney'];

function Dancer(name, sex){
	this.name = name;
	this.sex = sex;
}

function getDancers(males, females){
	for(var i=0; i<dancers.length; ++i){
		var dancer = dancers[i].split(" ");
		var sex = dancer[0];
		var name = dancer[1];
		if(sex == "F"){
			females.enqueue(new Dancer(name, sex));
		}
		else{
			males.enqueue(new Dancer(name, sex));
		}
	}
}

function dance(males, females){
	print('The dance pertners are:\n');
	while(!males.isEmpty() && !females.isEmpty()){
		var person = females.dequeue();
		putstr("Female dancer is: " + person.name);
		person = males.dequeue();
		print("and the male dancer is: " + person.name);
	}
	print();
}

// 舞池测试程序
// var maleDancers = new Queue();
// var femaleDancers = new Queue();
// getDancers(maleDancers, femaleDancers);
// print(JSON.stringify(maleDancers.dataStore));
// print(JSON.stringify(femaleDancers.dataStore));
// dance(maleDancers, femaleDancers);
// if(!femaleDancers.isEmpty()){
// 	print(femaleDancers.front().name + "is waiting to dance.");
// 	print("There are " + femaleDancers.count() + " female dancers waiting to dance.")
// }
// if(!maleDancers.isEmpty()){
// 	print(maleDancers.front().name + "is waiting to dance.");
// 	print("There are " + maleDancers.count() + " male dancers waiting to dance.")
// } 


// 基数排序
function distribute(nums, queues, n, digit){
	for(var i=0; i<n; ++i){
		if(digit === 1){                  
			queues[nums[i]%10].enqueue(nums[i]);
		}
		else{
			queues[Math.floor(nums[i]/10)].enqueue(nums[i]);
		}      
	}
}

function collect(queues, nums){
	var i=0;
	for(var digit=0; digit<10; ++digit){
		while(!queues[digit].isEmpty()){
			nums[i++]=queues[digit].dequeue();
		}
	}
}

function dispArray(arr){
	for(var i=0; i<arr.length; ++i){
		print(arr[i] + "");
	}
}

// var queues = [];
// for(var i=0; i<10; ++i){
// 	queues[i]=new Queue();
// }
// var nums=[];
// for(var i=0; i<10; ++i){
// 	nums[i]=Math.floor(Math.floor(Math.random()*101));
// }
// print("Before radix sort:");
// dispArray(nums);
// distribute(nums,queues,10,1);
// collect(queues,nums);
// distribute(nums,queues,10,10);
// collect(queues,nums);
// print("\n\nAfter radix sort:");
// dispArray(nums);

// 优先队列
function Patient(name, code){
	this.name = name;
	this.code = code;
}
// 优先队列测试代码
// var ed = new Queue();
// var p = new Patient("Smith", 5);
// ed.enqueue(p);
// p = new Patient("Jones", 4);
// ed.enqueue(p);
// p = new Patient("Brown", 1); 
// ed.enqueue(p); 
// p = new Patient("Ingram", 1); 
// ed.enqueue(p); 
// print(ed.toString()); 
// var seen = ed.dequeue(); 
// print("Patient being treated: " + seen[0].name); 
// print("Patients waiting to be seen: "); 
// print(ed.toString());
// // 下一轮 
// var seen = ed.dequeue(); 
// print("Patient being treated: " + seen[0].name); 
// print("Patients waiting to be seen: "); 
// print(ed.toString()); 
// var seen = ed.dequeue(); 
// print("Patient being treated: " + seen[0].name); 
// print("Patients waiting to be seen: "); 
// print(ed.toString());

// 修改例 5-5 中的优先队列，使得优先级高的元素优先码也大。写一段程序测试你的改动。

//修改例 5-5 中的候诊室程序，使得候诊室内的活动可以被控制。写一个类似菜单系统， 让用户可以进行如下选择： a. 患者进入候诊室； b. 患者就诊； c. 显示等待就诊患者名单。
// 进入候诊室
function enter(name,code){
	this.enqueue(new Patient(name, code));
}
// 患者就诊
function visit(name, code){
	this.dequeue(new Patient(name, code));
}
// 显示患者名单
function show(name, code){
	print(this.toString());
}

var visit = new Queue();
visit.enter('a',30);
visit.enter('b',40);
visit.enter('c',20);
visit.enter('e',10);
visit.visit('a',30);
visit.show();