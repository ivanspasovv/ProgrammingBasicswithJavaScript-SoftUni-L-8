function solve(input) {
    let age = Number(input[0]);
    let washerPrice = Number(input[1]);
    let toyPrice = Number(input[2]);

    let money = 0;
    let birthdayMoney = 10;

    for (let i = 1; i <= age; i++) {

        if (i % 2 === 0) {
            money = money + birthdayMoney - 1;
            birthdayMoney = birthdayMoney + 10
        } else {
            money = money + toyPrice
        }
    }

    if (money >= washerPrice) {
        let moneyLeft = money- washerPrice;
        console.log(`Yes! ${moneyLeft.toFixed(2)}`);
    } else {
        let moneyNeeded = washerPrice - money;
        console.log(`No! ${moneyNeeded.toFixed(2)}`);
    }
}

solve(["21", "1570.98", "3"]);