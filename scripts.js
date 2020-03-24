const sayHello = function sayHello() {
  // Let's 'log' if we received any arguments.
  console.log(arguments);
};

/* Example of passing arguments into function. */
sayHello("hello", "by", "hi", "world");

/*Keyword argument is used to show number of arguments within function.
Notice the number of arguments starts with number 0 when logged. */
