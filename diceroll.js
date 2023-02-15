function diceRoll(sides) {
    min = Math.ceil(1);
    max = Math.floor(sides);
    return Math.floor(Math.random() * (sides) + 1);
}

var results = []

for (let i = 0; i < 200; i++) {
    results.push(diceRoll(20))
}

console.log(results)