/*创建这样一个对象，它将字母存储在一个数组中，并且用一个方法可以将字母连在一起，显示成一个单词*/
function words() {
	this.dataWords=[];
	this.Join=Join;
}
function Join(num){
	print(num.join(''));
}
var newWords=new words();
newWords.Join(['h','a','p','p','y']);