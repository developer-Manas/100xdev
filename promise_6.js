const p1 = new Promise(res => setTimeout(() => res("First"), 1000));
const p2 = new Promise(res => setTimeout(() => res("Second"), 2000));
const p3 = new Promise(res => setTimeout(() => res("Third"), 3000));

Promise.all([p1,p2,p3])
    .then(result => console.log(result));