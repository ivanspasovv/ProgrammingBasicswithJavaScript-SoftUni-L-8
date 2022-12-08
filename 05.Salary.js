function solve(input) {
    let salary = Number(input[1]);

    let fine  = 0;

    for (let i = 2; i < input.length ; i++) {
        switch (input[i]) {
            case "Facebook" : fine = fine + 150;
            break;
            case "Instagram" : fine = fine + 100;
            break;
            case "Reddit" : fine = fine + 50;
            break;
        }
        
    }

    if (salary > fine ) {
        let moneyLeft = salary - fine;
        console.log(moneyLeft);
    } else {
        console.log(`You have lost your salary.`);
    }
}

solve(["10", "750", "Facebook", "Dev.bg", "Instagram", "Facebook", "Reddit", "Facebook", "Facebook"]);