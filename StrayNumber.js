function stray(numbers) {
    let randomIndex = Math.floor(Math.random() * numbers.length);
    let newArray = numbers.filter((number) => number !== numbers[randomIndex]);
    return (parseFloat(newArray.join('')));
}
stray([17, 17, 3, 17, 17, 17, 17]);