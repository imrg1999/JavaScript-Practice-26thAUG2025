/*function print1to10() {
    
    for(let i =1; i<=10; i++) {
        console.log(i);
    }
}

print1to10();*/


/*function print10to1() {
    let i=10;
    while(i!=0) {
        console.log(i);
        i--
    }
}

print10to1();*/

/*function print10to1() {
    for(let i = 10; i>=1; i--) {
        console.log(i);
        
    }
}
print10to1();*/

/*function printEvenNum() {
    for(let i = 1; i<=20; i++) {
        if(i%2 === 0) {
            console.log(i);
        }
        
    }
    
}

printEvenNum();*/

/*function printOddNum() {
    for(let i=1; i<=15; i++) {
        if(i%2 === 1) {
            console.log(i);
            
        }
    }
}
printOddNum();*/

/*function tableOf5(num) {
    for(let i = 1; i<=10; i++) {
        console.log(`${num} * ${i} = ${num*i}`);
        
    }
}
tableOf5(5);*/

/*function sumOfNum(){
    let sum = 0;
    for(let i= 1; i<=100; i++) {
        sum += i;
        
    }
   
   console.log(sum); 
    
}
sumOfNum(); */

/*function divisibleBY5() {
    for (let i=1; i<=50; i++) {
        if(i%3 === 0) {
            console.log(i);
            
        }
    }
}
divisibleBY5();*/

/*let num = Number(prompt("Enter A Number"));

for(let i =1; i<=num; i++) {
    if(i%2 === 0) {
        console.log(`${i} is even no.`);
        
    } else {
        console.log(`${i} is odd no.`);
    }
}*/

/*function countDivisibility() {
    let count = 0;
    for(let i=1; i<=50; i++) {
        if(i% 3=== 0 || i%5 === 0) {
            count ++;
        }
        
        
    }
    console.log(count);
}

countDivisibility();*/

/*function checkBreak() {
    for(let i=1; i<=100; i++) {
        if(i%7 === 0) {
            continue;
        }
        console.log(i);
        
    }
}
checkBreak();*/

/*function checkBreak() {
    for(let i=1; i<=100; i++) {
        if(i%7 === 0) {
            break;
        }
        console.log(i);
        
    }
}
checkBreak();*/

//loop of 1-100, loop breaks after first 5 odd numbers
/*function loopBreak() {
    let count = 0;
    for(let i =1; i<=100; i++) {
        if(i%2 === 1) {
            count++;
            console.log(i);
            
        }
        if(count >=5 ) {
        break;
    }

    }
    
} 
loopBreak();*/

/*let addNum = (a,b) => {
    return a+b;
}
console.log(addNum(9,6));*/


/*let fun = function(hey) {
    hey();
}
fun(function(){
    console.log("hello");
    
})*/

/*let bmiCalc = (weight, height) => {
    return weight/ height*height;
}
console.log(bmiCalc(75,1.81));*/

/*let sumOfEven = () => {
    let sum = 0;
    for(let i=0; i<=50; i++) {
        if(i%2 === 0) {
            sum+= i;
        }
    }
    console.log(sum);
    
}
sumOfEven();*/
