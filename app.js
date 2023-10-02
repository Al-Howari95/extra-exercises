//Q1

1.   //27-
2.   //value is50
3.   // 2
4.   //5
5.   //0.5
6.   //true
7.   //true
8.   //true


// Q2
let number = window.prompt("enter a number (2)", "");
window.alert(number);


// Q3
let num = [window.prompt("first number (q3)", ""), window.prompt("second number (q3)", "")];
num[0] > num[1] ? window.alert(`${num[1]} --> ${num[0]}`) : window.alert(`${num[0]} --> ${num[1]}`);


// //Q4
let larger = [window.prompt("first number (q3)", ""), window.prompt("second number (q3)", "")];
larger[0] > larger[1] ? window.alert(`${larger[0]}`) : window.alert(`${larger[1]}`);


// //Q5
let sum = [twindow.prompt("first number (q4)", "") * 1, window.prompt("second number (q4)", "") * 1];
window.alert(`sum[0] + sum[1]`);


//Q6
let numN = window.prompt("the value", "") * 1;
switch (numN)
{
   case 1:
       window.alert("ONE");
       break;
   case 2:
       window.alert("TWO");
       break;
   case 3:
       window.alert("THREE");
       break;
   case 4:
       window.alert("FOUR");
       break;
   case 5:
       window.alert("FIVE");
       break;
   case 6:
       window.alert("SIX");
       break;
   case 7:
       window.alert("SEVEN");
       break;
   case 8:
       window.alert("EIGHT");
       break;
   case 9:
       window.alert("NINE");
       break;
   default:
       window.alert("PLEASE TRY AGAIN");
}


//7
for(i = 0; i <=5 ; i++ )
{
alert(`${i}`);

}



//8
let numbar8 ;
for (let i = 0; i <= 5; i++) {
    numbar8 += i; 
}
alert(numbar8);

//9
let n ;
for(i = 0;i <= 20; i++)
{
n = i + 3;
}
alert(n);

//10
let numbar = prompt("Please enter between 0 and 100");
while(numbar>100 || numbar<0)
{
   numbar=prompt("Plase again input")
}
window.alert(numbar); 

//11
let x = prompt("enter something");
let y ;
    if(isNaN(x)){
    for (let i = x.length-1; i>=0; i--) {
        y = y + x.charAt(i);
    }
    }
    alert(y); 

    //12
sum = 0;
let yo = prompt("entar nambar :");
for(i = 0; i<= yo ; i++)
{
   sum = sum + i;
}
window.alert(yo); 

//13
sum = 0;
let avg;
let numb = prompt("entar nambar :");
for(i =0; i<= numb; i++)
{
   sum = sum + i;

}
avg = sum / i;

window.alert(avg);