const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j <= n; j++) {
        if (i === Math.ceil(n / 2) || j === Math.ceil(n / 2)) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}

console.log(str);