Promise.resolve(22)
    .then(num => num*2)
    .then(num => num + 10)
    .then(num => num -3)
    .then(result => console.log(result));