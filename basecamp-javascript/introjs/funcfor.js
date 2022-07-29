function returnEvenValues(array) {
    let evenNums = [];
    for (let i = 0; i < array.length; i++) {
        if(array[i] % 2 === 0) {
            evenNums.push(array[i]);
        } else {
            console.log(`${array[i]} não é par1`);
            console.log(array[i], "não é par2");
            console.log(array[i] + ' não é par3');
        }
    }
    console.log("Os números pares são:", evenNums);
    console.log("Os números pares são: " + evenNums);
    console.log(evenNums);
    console.log(evenNums, "complemento");
    console.log("complemento", evenNums);
}

var array = [1,2,3,4,6,7,9,10,11,12];

returnEvenValues(array);

