const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    let row = '';
    for (let j = 1; j < i; j++) {
        row += ' ';
    }
    for (let j = 1; j <= n; j++) {
        if (j === 1 || j === n || i === 1 || i === n) {
            row += '*';
        } else {
            row += ' ';
        }
    }
    str += row + '\n';
}

console.log(str);