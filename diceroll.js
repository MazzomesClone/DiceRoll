function diceRoll(sides) {
    min = Math.ceil(1);
    max = Math.floor(sides);
    return Math.floor(Math.random() * (sides) + 1);
}