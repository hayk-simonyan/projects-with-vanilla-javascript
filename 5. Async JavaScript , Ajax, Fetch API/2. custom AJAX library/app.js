const http = new customAJAXLibrary();

// GET all tasks
http.get('https://jsonplaceholder.typicode.com/todos', function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

// GET one task
http.get('https://jsonplaceholder.typicode.com/todos/3', function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

// POST
const body = {
  userId: 101,
  title: 'complete ajax library',
  completed: false,
};

http.post('https://jsonplaceholder.typicode.com/todos', body, function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

// PUT
const updateBody = {
  userId: 101,
  title: 'complete ajax library',
  completed: true,
};

http.put('https://jsonplaceholder.typicode.com/todos/1', updateBody, function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});

// DELETE
http.delete('https://jsonplaceholder.typicode.com/todos/6', function (
  error,
  response
) {
  if (error) {
    console.log(error);
  } else {
    console.log(response);
  }
});
