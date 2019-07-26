/*将一组单词存储在一个数组中，并按正序和倒序分别显示这些单词。*/
function words(){
	this.dataWords=[];
	this.dataList=dataList;
	this.reverse=reverse;
}
function dataList(num){
	this.dataWords=num.sort()
	print(this.dataWords);
}
function reverse(num){
	print(num.sort().reverse());
}
var newWords=new words();
newWords.dataList(['a','c','d','i','s','e']);
newWords.reverse(['a','c','d','i','s','e']);