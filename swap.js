var a=new Number(prompt("enter First Number"));
var b=new Number(prompt("enter Second Number"));
document.getElementById('a').innerHTML=`a:${a}`;
document.getElementById('b').innerHTML=`b:${b}`;


function swapByVal(){
  swapByValue(a, b) ;
}
function swapByValue(varOne, varTwo) { 
    console.log("Before Swapping by Value Method"); 
    console.log("varOne =" + varOne +" varTwo =" +varTwo); 
    varOne=varOne-varTwo;
    varTwo=varOne+varTwo;
    varOne=varTwo-varOne;
    console.log("After Swapping by Value Method"); 
    console.log("varOne =" + varOne +" varTwo =" +varTwo); 
    document.getElementById('fun').innerHTML=`a = ${varOne} <br> b = ${varTwo}`;
    out();
  } 
 function out(){
  document.getElementById('out').innerHTML=`Values outside Pass By Value Function<br> a = ${a} <br> b = ${b}`;
 }



function swapByReference(varObj) { 
    console.log("Before Call by Reference Method"); 
    console.log(varObj);
    var t=varObj.a ; 
    varObj.a=varObj.b;
    varObj.b=t;
    console.log("After Call by Reference Method");
    console.log(varObj);
    document.getElementById('funr').innerHTML=`a = ${varObj.a} <br> b = ${varObj.b}`;
    outr();
  } 
  let varObj;
function swapByRef(){
  varObj = {a:"",b:""};
  varObj.a=parseInt(a);
  varObj.b=parseInt(b);
  swapByReference(varObj) ;
}



function outr(){
document.getElementById('outr').innerHTML=`Values outside Pass By ReferenceFunction<br> a = ${varObj.a} <br> b = ${varObj.b}`;

}
  
  
  