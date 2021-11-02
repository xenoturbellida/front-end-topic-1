function task3 (numbers) {
    let new_numbers = [];
    let zeros = 0;
    for (let n of numbers)
    {
        if (n === 0) {
            zeros ++;
        }
        else {
            new_numbers.unshift(n);
        }
    }

    for (let k = 0; k < zeros; k++) {
        new_numbers.push(0);
    }
    return new_numbers;
}

let init_ar = [1,2,0,3,0,5]

let ans = task3(init_ar)
console.log(ans)