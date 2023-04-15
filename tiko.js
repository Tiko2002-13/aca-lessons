//1
let admin;
let name = "John";
admin = name;
console.log(admin);

//2
let i = 10;
let n = i++ % 5;
console.log(i);
console.log(n);

//3
let a = 5;
let b = 4;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);

//4
let myname = 'Tiko'
let myage = 20
console.log("My name is " + myname + "," + "I am " + myage + ".")

//5
let x = 6
let y = 7
x = x + y;
y = x - y;
x = x - y;
console.log(y)
console.log(x)

//6
let number = -343
console.log(number % 10)


//7
let num = 5;
let c = num < 0;
console.log(c)

//8
let celsius = 20;
console.log(celsius * 1.8 + 32)

//Homework
//1
let degr1 = 45;
let degr2 = 90;
console.log(180 - (degr1 + degr2));
//2
let money = 1200;
let money1 = 1500;
let money2 = 700;
console.log(3 * money - (money1 + money2));

//3
let numb = 124
if (numb % 2 == 0) {
    console.log(true);
}
else {
    console.log(false)
}
//4
let digit = 912;
let summ = 0
summ += digit % 10;
digit = digit - (digit % 10);
summ += digit % 10;
digit = digit - (digit % 10);
digit = digit / 10;
summ += digit % 10;
digit = digit - (digit % 10);
digit = digit / 10;
summ += digit % 10;
console.log(summ)

//5
let d = 7;
let e = 21;
if (d % e == 0 || e % d == 0) {
    console.log(0);
}
else {
    console.log(1);    
}

//6
let ab = 2;
let bc = 3;
let ac = 5;
if (ab + bc > ac && ab + ac > bc && ac + bc > ab) {
    console.log(true)
}
else {
    console.log(false)
}

//7
let posn = 17;
let pos2n = posn*2
let pos3n = posn*3
console.log(posn + "" + pos2n + "" + pos3n)
//8
let nu = 50;
let z = nu % 50;
let k = (nu - nu % 50) / 50;
let p = 50 + (k * 50);
console.log(p)
