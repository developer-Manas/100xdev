fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(users => {
        users.forEach(users =>{
            console.log(users.name,  ' : ',  users.email);
        });
    });