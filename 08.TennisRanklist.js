function solve(input) {
    let tournaments = Number(input[0]);
    let startPoint = Number(input[1]);

    let currentPoints = 0;
    let tournamentsWon = 0;

    for (let i = 2; i < input.length; i++) {

        switch (input[i]) {
            case "W" : currentPoints = currentPoints + 2000;
                        tournamentsWon++
            break;
            case "F" : currentPoints = currentPoints + 1200;
            break;
            case "SF" : currentPoints = currentPoints + 720;
            break;
        }
    }
    console.log(`Final points: ${currentPoints + startPoint}`);
    console.log(`Average points: ${Math.trunc(currentPoints / tournaments)}`);
    console.log(`${(tournamentsWon / tournaments * 100).toFixed(2)}%`);
}

solve(["4", "750", "SF", "W", "SF", "W"]);