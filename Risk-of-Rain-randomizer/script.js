//Start
//run random number generator between 0 and white list.length
//add value to 3-2-1 object 
//loop 3x each time if value is equal to value present in 3-2-1 object repeate
//Repeate these steps for green (loop 2x), 
//  red (1x), (equipment including lunar 1x), 
//  (lunar 1x), (void 1x), boss (1x)
// 
let whiteItems = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];
const choices = [];



//rng
function random(max) {
    return Math.floor(Math.random() * max);
}


//Chooses a random element from the chosen list. puts it in the choices list
//iterates numberOfIterations times
function choose(numberOfIterations, itemTypeArray) {
    let counter = 0
    let pushValue;
    const returnItems = []
    while (counter < numberOfIterations) {
        pushValue = itemTypeArray[(random(itemTypeArray.length))];
        if (returnItems.some((element) => element === pushValue)) {
            continue
        } else {
        returnItems.push(pushValue);
    }
        counter++;
    }
    return returnItems;
}
