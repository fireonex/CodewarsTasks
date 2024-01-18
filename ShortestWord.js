function findShort(s){
    let newArray = s.split(' ');
    newArray = newArray.sort((a, b)=> a.length-b.length);
    return newArray[0].length
}
findShort("bitcoin take over the world maybe who knows perhaps")











