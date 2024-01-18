function reverseSeq (n)  {
    let newArray = [];
    for (let count = n; n !== 0; n--) {
        newArray.push(n);
    }
    return (newArray);
}
reverseSeq(6);