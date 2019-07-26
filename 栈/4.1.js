function Stack(){
	this.dataStore = [];
	this.top = 0;//栈顶位置
	this.push = push;
	this.pop = pop;//删除栈顶元素
	this.peek = peek;//查找栈顶
	this.clear = clear;//清空
	this.length=length;
}

function push(element){
	this.dataStore[this.top++] = element;
}

function pop(){
	//this.dataStore.splice(this.top--, 1);
	return this.dataStore[--this.top];
}

function peek(element){
	return this.dataStore[this.top-1];
}

function clear(){
	this.top = 0; 
}

function length(){
	return this.top;
}

function mulBase(num, base){//进制转换
	var s = new Stack();
	while(num > 0){
		s.push(num%base);
		num = Math.floor(num /= base);
	}
	var converted = '';
	while(s.length() > 0){
		converted += s.pop();
	}
	return converted;
}
// print(mulBase(10, 2));

function isPalindrome(word){//判断是否是回文
	var s = new Stack();
	for(var i=0; i<word.length; ++i){
		s.push(word[i]);
	}
	var rword = "";
	while(s.length() > 0){
		rword += s.pop();
	}
	if(word === rword){
		return true;
	}
	else{
		return false;
	}
}
// print(isPalindrome('123321'));

function fact(n){//阶乘
	var s = new Stack();
	while(n>1){
		s.push(n--)
	}
	var product =1;
	while(s.length()>0){
		product *= s.pop();
	}
	return product;
}
//print(fact(3));

/*栈可以用来判断一个算术表达式中的括号是否匹配。编写一个函数，该函数接受一个算 术表达式作为参数，返回括号缺失的位置。下面是一个括号不匹配的算术表达式的例 子：2.3 + 23 / 12 + (3.14159×0.24*/
function matchBracket(bracket){
	if(bracket === ')')return '(';
	else if(bracket === '}') return '{';
	return '[';
}

function isBracketMatch(expression){
	var s = new Stack();
	var expressionArray = expression.split("");
	var posArray = [];
	for(var i=0; i<expressionArray.length; i++){
		if(['(','{','['].indexOf(expressionArray[i])===-1){
			var peek = s.peek();
			if([')','}',']'].indexOf( expressionArray[i])> -1){
				if(peek === matchBracket(expressionArray[i])){
					s.pop();
				}else{
					posArray.push(i+1);
				}
			}else if(s.top>0 && i===expressionArray.length-1){
				while(s.top > 0){
					posArray.push(i+1)
					s.pop();
				}
			}
		}else{
			s.push(expressionArray[i]);
		}
	}
	return posArray||-1;
}
//print(isBracketMatch('2.3+23/12+(3.14159×0.24'));

/*一个算术表达式的后缀表达式形式如下： op1 op2 operator 使用两个栈，一个用来存储操作数，另外一个用来存储操作符，设计并实现一个 JavaScript 函 数，该函数可以将中缀表达式转换为后缀表达式，然后利用栈对该表达式求值*/
function getStr(arr,stack){
	var str = '';
	while(arr.indexOf(stack.peek()) === -1 && stack.top>0){
		str += stack.pop();
	}
	return str;
}
function infixToSuffix(expression){
	var operand = new Stack();
	var operator = new Stack();
	var str = '';
	var expressionArray=expression.split("");
	for(var i=0; i<expressionArray.length; i++){
		if([')'].indexOf(expressionArray[i]) > -1){
			str += getStr(['('], operator);
			operator.pop();
		}else if(['+','-'].indexOf(expressionArray[i]) > -1){
			str += getStr(['('], operator);
			operator.push(expressionArray[i]);
		}else if(['*','/'].indexOf(expressionArray[i]) > -1){
			str += getStr(['(','+','-'], operator);
			operator.push(expressionArray[i]);
		}else if(['('].indexOf(expressionArray[i]) > -1){
			operator.push(expressionArray[i]);
		}else if(expressionArray[i] != ' '){
			str += expressionArray[i];
			operand.push(expressionArray[i]);
		}
	}
	while(operator.top>0){
		str += operator.pop();
	}
	return str;
}
//print(infixToSuffix('a + b*c + (d*e + f) * g'));

/*现实生活中栈的一个例子是佩兹糖果盒。想象一下你有一盒佩兹糖果，里面塞满了红 色、黄色和白色的糖果，但是你不喜欢黄色的糖果。使用栈（有可能用到多个栈）写一 段程序，在不改变盒内其他糖果叠放顺序的基础上，将黄色糖果移出*/
function candy(candy){
	var arr = [];
	var before = new Stack();
	var after = new Stack();
	for(var i=0; i<candy.length; i++){
		before.push(candy[i]);
	}
	while(before.top>0){
		var peek = before.peek();
		if(before.pop() != 'yellow'){
			after.push(peek);
		}
	}
	while(after.top > 0){
		arr.push(after.pop());
	}
	return arr;
}
print(candy(['red','yellow','white','red','yellow','white','red','yellow','white','red']));