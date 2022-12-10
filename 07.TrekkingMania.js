function solve(input) {

    let totalPeople = 0;
    let musala = 0;
    let monblan = 0;
    let kilimandzharo = 0;
    let k2 = 0;
    let everest = 0;

    for (let i = 1; i < input.length; i++) {
        totalPeople += Number(input[i]);

        if (input[i] <= 5) {
            musala += Number(input[i]);
        } else if (input[i] <= 12) {
            monblan += Number(input[i]);
        } else if (input[i] <= 25) {
            kilimandzharo += Number(input[i]);
        } else if (input[i] <= 40) {
            k2 += Number(input[i]);
        } else {
            everest += Number(input[i]);
        }
    }
    console.log(`${(musala / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(monblan / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(kilimandzharo / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(k2 / totalPeople * 100).toFixed(2)}%`);
    console.log(`${(everest / totalPeople * 100).toFixed(2)}%`);
}

solve([
"10",
"10",
"5",
"1",
"100",
"12",
"26",
"17",
"37",
"40",
"78"]);