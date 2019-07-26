/*修改本章前面出现过的 weeklyTemps 对象，使它可以使用一个二维数组来存储每月的有
用数据。增加一些方法用以显示月平均数、具体某一周平均数和所有周的平均数*/
//第一周第一天
function weekTemps() {
	//存储周温度
	this.weekData = [];
	//存储月温度
	this.monthStore = [];
	this.sum=0;
	this.add = add;
	this.average = average;
}
function add(temp) {
	var len = this.dataStore.length
	if(this.dataStore[len]==undefined){
		this.dataStore[0][0]=temp;
	}else if(this.dataStore[len].length<7){
		this.dataStore[len].push(temp);
		this.sum++;
	}else{
		len++;
		this.dataStore[len].push(temp);
		this.sum++;
	}
}
//所有周的平均数
function average() {
	var total = 0;
	for (var i = 0; i < this.dataStore.length; ++i) {
		for(var j = 0;j < this.dataStore[i].length; j++){
			total += this.dataStore[i][j];
		}
	}
	return total / this.dataStore.length;
}
//某一周的平均数
function averageWeek(x){
	var total = 0; 
	for(var i = 0; i < this.dataStore[x].length; i++){
		total += this.dataStore[x][i];
	}
	return total / this.dataStore[x].length;
}
//月平均数
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
print(thisWeek.average()); // 显示 54.875
print(thisWeek.averageWeek(0));