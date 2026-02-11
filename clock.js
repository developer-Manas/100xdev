setInterval(()=>{
    let now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`)
}, 1000);

// !Using SetTimeOut()

function updateClock() {
    let now = new Date();

    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    console.log(`${hours}:${minutes}:${seconds}`)
    setTimeout(updateClock, 1000)
};

updateClock();