// 2. REVEALING MODULE PATTERN - instead of returning our own public functions we map an object literal to private functions that we want to reveal
const RevealingModule = (() => {
  const _appState = [];

  const add = (item) => {
    _appState.push(item);
    console.log(_appState);
  };

  const get = (itemId) => {
    return _appState.find((item) => {
      return item.id === itemId;
    });
  };

  return {
    // Everything that we don't return here is private
    add: add,
    get: get,
  };
})();

RevealingModule.add({ id: 1, name: 'First item' });
console.log(RevealingModule.get(1));
