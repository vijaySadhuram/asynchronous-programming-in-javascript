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
  
setTimeout(function() 
  
  { myFunction("I love You !!!"); },
  
  3000);

function myFunction(value) {
  
 document.getElementById("demo").innerHTML = value;

  }

  </script>

</body>
</html>
