/*创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩的方法。*/
var dataGrades;
var add;
var average;
function Grades(){
	this.dataGrades=[];
	this.add=add;
	this.average=average;
}
function add(name,grade){
	this.dataGrades.push({
		'name':name,
		'grade':grade
	});
	print("add name: "+name+', '+"grade: "+grade);
}
function average(){
	var len=this.dataGrades.length;
	var sum=0;
	for(var i=0;i<len;i++){
		sum+=this.dataGrades[i].grade;
	}
	print("sum: "+sum);
	print("len: "+len);
	print("average: "+sum/len);
}
var newGrades=new Grades();
newGrades.add('a',15);
newGrades.average();
newGrades.add('b',91);
newGrades.average();