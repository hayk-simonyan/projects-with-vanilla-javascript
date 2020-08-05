// 3. SINGLETON PATTERN
const Singleton = (() => {
  let _instance;

  const createInstance = () => {
    const object = new Object({ name: 'Object instance' });
    return object;
  };

  return {
    getInstance: () => {
      if (!_instance) {
        _instance = createInstance();
      }
      return _instance;
    },
  };
})();

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
console.log(instance1 === instance2); // true - we can never have more than one instance
