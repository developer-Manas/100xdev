function checkEven(num) {
    return new Promise((resolve, reject) =>{
        if(num % 2 === 0) {
            resolve("Number is Even");
        } else {
            reject("Number is odd");
        }
    });
}

checkEven(4)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))

checkEven(10)
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err))