function sumMix(x){
    let newArray =[];
    for (let i = 0; i < x.length; i++) {
        if (x[i] !== isNaN) {
            newArray.push(parseInt(x[i]));
        } else {
            newArray.push(x[i]);
        }
    }
    return newArray.reduce((a, b) => a + b, 0);
}
sumMix([9, 3, '7', '3'])