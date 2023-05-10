# asynchronous-programming-in-javascript
Callback function,promises, Async await and TryCatch in JS

Example:
<!DOCTYPE html>
<html>
<body>

<h1>JavaScript Functions</h1>
<h2>setInterval() with a Callback</h2>

<p>Wait 3 seconds (3000 milliseconds) for this page to change.</p>

<h1 id="demo"></h1>

<script>
  
setTimeout(function() <br>
  
  { myFunction("I love You !!!"); },
  
  3000);

function myFunction(value) {
  
 document.getElementById("demo").innerHTML = value;

  }

  </script>

</body>
</html>

JavaScript Async
--------------------------------

"async and await make promises easier to write"

async makes a function return a Promise

await makes a function wait for a Promise

Async Syntax
The keyword async before a function makes the function return a promise:

Example:
------------------
                                              async function myFunction() {
                                                  return "Hello";
                                                         }

Is the same as:

                                                function myFunction() {

                                                 return Promise.resolve("Hello");

                                                         }

Here is how to use the Promise:

                                                myFunction().then(

                                                function(value) { /* code if successful */ },

                                                 function(error) { /* code if some error */ }

);

Example

                                                   async function myFunction() {

                                                          return "Hello";

                                                      }

                                                  myFunction().then(

                                                  function(value) {myDisplayer(value);},

                                                   function(error) {myDisplayer(error);}

                                                     );


Await Syntax
------------

The await keyword can only be used inside an async function.

The await keyword makes the function pause the execution and wait for a resolved promise before it continues:


let value = await promise;
