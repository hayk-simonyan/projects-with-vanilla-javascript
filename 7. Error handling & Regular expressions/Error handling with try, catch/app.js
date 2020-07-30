// func();
// console.log('this error was not handled, so the program stops');

try {
  // ReferenceError
  //   func();
  // TypeError
  undefined.name;
  //SyntaxError
  // const variable = [
  // throw error manually
  //   throw new TypeError('set custom message here');
} catch (err) {
  console.log(err);
  console.log(err.name);
  console.log(err.message);
} finally {
  console.log('runs after try and catch finished');
}
console.log('this error was handled, so the program continues');
