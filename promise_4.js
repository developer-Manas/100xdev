const num = 12;
const checkNum = new Promise((resolve, reject) =>{
//   let sucess = true;
setTimeout(() =>{
    
    if(num === 10){
      resolve("Number Matched");
    } else {
      reject("Number Not matched");
    }
}, 2000);
});

checkNum
    .then((msg) => console.log(msg))
    .catch((err) => console.log(err));
