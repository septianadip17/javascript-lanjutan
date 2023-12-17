const n = 5;
let str = '';

for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= n; j++) {
        if (j <= i - 1) {
            str += '  ';
        } else {
            str += '* ';
        }
    }
    str += '\n';
}    

console.log(str);