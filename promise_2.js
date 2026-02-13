//* Create a promise that resolves after 1 second and prints:  
//* Hello after 1 second

const promise = new Promise(() =>{
    setTimeout(() =>{
        console.log("Hello World");
        // resolve();
    },1000);
});

// promise.then(()=>{

// });