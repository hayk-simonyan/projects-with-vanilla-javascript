(function () {
  // Declare private variables and functions here

  return {
    // Declare public variables and functions here
  };
})();

// 1. MODULE PATERN
const Module = (() => {
  // Private
  const _privateVar = 'Private variable';

  const privateFunc = () => {
    console.log('Private function was called');
  };

  return {
    // Public
    publicFunc: () => {
      privateFunc();
    },
  };
})();

Module.publicFunc();
// Module.privateFunc();
