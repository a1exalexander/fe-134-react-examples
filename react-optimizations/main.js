console.log("log 1"); // 1 - 1

setTimeout(() => {
  console.log("setTimeout 1"); // 6 - 5
}, 0);

setTimeout(() => {
  console.log("setTimeout 2"); // 7 - 6
  setTimeout(() => {
    console.log("setTimeout 3"); // 8 - 9
  }, 0);
}, 0);

function promise() {
  console.log("log 2"); // 2 - 2
  return new Promise((resolve) => {
    console.log("log 3"); // 3 - 3

    setTimeout(() => {
      console.log("setTimeout 4"); // 9 - 7
      resolve();
    }, 0);
  });
}

promise().then(() => {
    console.log('log 5'); // 5 - 8
})

console.log("log 6"); // 4 - 4
