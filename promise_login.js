function login(username, password) {
    return new Promise((resolve, reject) => {
        if ( username === "Manas" && password === "1234"){
            resolve("User Authoriesed")
        } else {
            reject("User Unauthorise");
        }
    });
};

login("Manas", "1234")
    .then(msg => console.log(msg))
    .catch(err => console.log(err));