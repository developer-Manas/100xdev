let counter = 0;

const updateCounter = ()=>{
    counter ++;
    console.log(counter);

    setTimeout(updateCounter, 1000);   //So the function setTimeount is like a alarm clock which rings just once. Hence, in order to make it rings another day we have to schedule it for another day ! That the things we are doing here...
}



setTimeout(updateCounter, 1000);
