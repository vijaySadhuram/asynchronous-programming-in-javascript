//call back function example
function display(value){
  console.log(value);
  document.getElementById("demo").innerText=value;


}
function sum(callback,a,b){
    sum=a+b;
    callback(sum);

}
sum(display,5,5);

