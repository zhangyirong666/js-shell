function deposit(amount) {
this.balance += amount;
}
function withdraw(amount) {
if (amount <= this.balance) {
this.balance -= amount;
}
if (amount > this.balance) {
print("Insufficient funds");
}
}
function toString() {
return "Balance: " + this.balance;
}
function Checking(amount) {
this.balance = amount; // 属性
this.deposit = deposit; // 方法
this.withdraw = withdraw; // 方法
this.toString = toString; // 方法
}
var amount=500;
var account = new Checking(amount);
account.deposit(1000);
print(account.toString()); //Balance: 1500
console.log(this.amount);
account.withdraw(750);
print(account.toString()); // 余额：750
console.log(this.amount);
account.withdraw(800); // 显示 " 余额不足 "
console.log(this.amount);
print(account.toString()); // 余额：750