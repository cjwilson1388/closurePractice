//Once you complete a problem, open up Chrome and check the answer in the console.

var outer = function(){
  var name = 'Tyler';
  return function(){
    return 'The original name was ' + name;
  }
}
//Above you're given a function that returns another function which has a closure over the name variable.
//Invoke outer saving the return value into another variable called 'inner'.

  //Code Here

var innerFn = outer();
var inner = innerFn(outer());


//Once you do that, invoke inner.

  //Code Here

alert(inner);


//Next problem



var callFriend = function(){
  var friend = 'Jake';
  function callF(number){
    return 'Calling ' + friend + ' at ' + number;
  }
  return callF;
};

//Above you're given a callFriend function that returns another function.
//Do what you need to do in order to call your function and get 'Calling Jake at 435-215-9248' in your console.

  //Code Here

var calling = callFriend();
calling("435-215-9248");

// REMEMBER YOU HAD A HARD TIME FIGURING THIS SUPER SIMPLE ONE OUT


//Next Problem



/*
  Write a function called makeCounter that makes the following code work properly.
*/

  //Code Here
 var  makeCounter = function(){
    var count = 1;
    function counter(){
        return count++;
    } 
        
    return counter;
  };


 var countFn = makeCounter();
  countFn() // 1
  countFn() // 2
  countFn() // 3
  countFn() // 4
  countFn() // 5


//Next Problem



/*
  Write a function that accepts another function as it's first argument and returns a new function
  (which invokes the original function that was passed in) that can only ever be executed once.
  Once completed, add a second argument that allows the function to be invoked N number of times.
  After the function has been called N number of times, console.log('STAHHP');
*/

//        ****************** Counting Function ********************* //
var counter = 0;
var countingFn = function(){
  if (counter < 5) {
    var message = "cool";
    console.log(message);
  }
  else {
    var message2 = "STAHHP";
    console.log(message2);
  }
  counter++;
  return counter;
};
countingFn();
countingFn();
countingFn();
countingFn();
countingFn();
countingFn();
countingFn();
countingFn();

//******* END OF COUNTING FUNCTION ************************** //


//****** FUnction to a function calll a function only once part 1 has the structure of function within a function part 2 has a function that allows me to call once to let a function know it can only be used once. ******** //

// Part 1

function threeFunc(passedIn) {
  return passedIn;
}

function oneFunc(twoFunc) {
  twoFunc();
}

oneFunc(function(){ threeFunc(oneFunc)})

oneFunc(function(){ threeFunc("called second function with annon function calling on firstFunc"); 
});

oneFunc(function(){ threeFunc(alert("called second function with annon function calling on firstFunc")); 
});

// Part 2
function once(fn, action) {
  var result;

  return function() {
    if(fn) {
      result = fn.apply(action || this, arguments);
      fn = null;
    }
    return result;
  };
}

// End of Part 2






/* Possible Use **********

funct(a, function(){foo(x)});

var myFunc = function(){
     myFunc = function(){}; // kill it as soon as it was called
     console.log('call once and never again!'); // your stuff here

};







var firstFn = (function(secondFn(){
  return firstFn;
}) {
  firstFn = function(){};
  console.log("called once");
})();

function firstFn(secondFn(){
  return firstFn;
}) {
  firstFn = function(){};
  console.log('Called Once');
}

var someFunction = function(){ console.log('wagwan!'); };

var FirstFn = function(){secondFn(){
  return firstFn;
}}

function foo(x) {
   alert(x);
}
function bar(func) {
   func();
}



//alerts "Hello World!" (from within bar AFTER being passed)
bar(function(){ foo("Hello World!") });


*/

