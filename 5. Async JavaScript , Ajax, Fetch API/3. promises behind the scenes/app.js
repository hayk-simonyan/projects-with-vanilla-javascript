// without callback
// const categories = [
//   { type: 'expences', total: '100' },
//   { type: 'expences', total: '300' },
//   { type: 'incomes', total: '1100' },
// ];

// function postCategory(category) {
//   setTimeout(function () {
//     categories.push(category);
//   }, 2000);
// }

// function getCategories() {
//   setTimeout(function () {
//     console.log(categories);
//   }, 1060);
// }

// postCategory({ type: 'incomes', total: '29990' });
// getCategories();

// with callback
// const categories = [
//   { type: 'expences', total: '100' },
//   { type: 'expences', total: '300' },
//   { type: 'incomes', total: '1100' },
// ];

// function postCategory(category, cb) {
//   setTimeout(function () {
//     categories.push(category);
//     cb();
//   }, 2000);
// }

// function getCategories() {
//   setTimeout(function () {
//     console.log(categories);
//   }, 1060);
// }

// postCategory({ type: 'incomes', total: '29990' }, getCategories);

// with promise
const categories = [
  { type: 'expences', total: '100' },
  { type: 'expences', total: '300' },
  { type: 'incomes', total: '1100' },
];

function postCategory(category) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      categories.push(category);
      const error = false;

      if (!error) {
        resolve();
      } else {
        reject('Error: catching an error');
      }
    }, 2000);
  });
}

function getCategories() {
  setTimeout(function () {
    console.log(categories);
  }, 1060);
}

postCategory({ type: 'incomes', total: '29990' })
  .then(getCategories)
  .catch(function (error) {
    console.log(error);
  });
