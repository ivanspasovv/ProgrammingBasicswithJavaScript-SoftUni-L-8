function solve(input) {
    let n1 = Number(input[0]);
    let n2 = 1;
    for (let i = n2; i <= 10; i++) {
        sum = n1 * i;
        console.log(`${i} * ${n1} = ${sum}`);
    }
}

solve(["5"]);