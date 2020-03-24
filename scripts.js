const sayHello = function() {
  // Let's 'log' if we received any arguments.
  console.log(`${arguments["0"]} ${arguments["4"]}`);
};

/* Example of passing arguments into function. */
sayHello("hello", "by", "hi", "world", "Taylor");

/*Keyword argument is used to show number of arguments within function.
Notice the number of arguments starts with number 0 when logged. */

//You have to use bracket notation with keyword arguments within scope of function.
