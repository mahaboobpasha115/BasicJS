//functions//
function add(a,b){
    var c=a+b;
    return c;
}
console.log(add(5,8));


function divide(c,d){
    var m=c/d;
    return m;
}
console.log(divide(6,2));


//if-else statement//
function compare(a,b){
    if(a<b){
        console.log("a is lesser than b");
    }
    else if(a>b){
        console.log("a is greater than b");
    }
    else{
        console.log("a is equal to b");
    }
}
console.log(compare(8,6));

// switch statement//

var a="woman"
switch (a){
    case "man":
        console.log("a is man");
        break;
    case "woman":
        console.log("a is woman");
        break;
        default:
        console.log("a is others");  
}

//for loop//

var n=8;
for (i=0;i<=n;i++){
    console.log("hello world",i)
}

//while loop//

var a=0;
while(a<5){
    console.log(a);
    a++;  
}

//do-while loop//

var civil=""
var  i=2;
do{
    i=i+1;
    civil=civil+i;
}
while(i<10);
console.log(civil);



//datatypes//

var a=10;
function tell(){

}console.log(typeof(a));

var a="hahaha"
function tell(){

}console.log(typeof(a));

var a=true
function tell(){

}console.log(typeof(a));


var a=null
function tell(){

}console.log(typeof(a));


var b
function tell(){

}console.log(typeof(b));





