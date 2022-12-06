let btns = document.querySelectorAll('.orb');
let inpstr = "";
let display = document.querySelector('.dis')
let sidedis = document.querySelector('.side')
let brea = document.createElement('br');
for (let btn of btns) {
    btn.addEventListener('click', function () {
        inpstr = inpstr + (`${btn.value}`);
        // console.log(inpstr);
        display.innerHTML = inpstr;
    })
}
let ac = document.querySelector('#AC');
ac.addEventListener('click', function () {
    display.innerHTML = "";
    inpstr = "";

})
function isop(c) {
    if (c === '+' || c === '-' || c === '/' || c === '*' || c === '^' || c === '%' || c === '(' || c === ')') {
        return 1;
    }
    else {
        return 0;
    }
}
let arr = []; let sum = 0;
let eq = document.querySelector('#epualto')
eq.addEventListener('click', function () {
    sidedis.innerHTML += inpstr;
    let s = []; let k = 0; let flag = 0; let mainflag = 0;
    let str = "";
    for (let i of inpstr) {
        if (i === '(')
            mainflag = 1;
    }

    for (let i = 0; i < inpstr.length; i++) {

        if (inpstr[i] === '(') {
            i++;
            while (inpstr[i] !== ')') {
                str = str + inpstr[i];
                i++;
            }
            // let res = parseFloat(findval(str));
            str = findval(str); console.log(str);
            i++;

        }

        if (isop(inpstr[i]) === 1) {
            if (inpstr[i] === '-') {
                if (flag === 1) {
                    str = '-' + str;
                    flag = 0;
                }
                flag = 1;
                s[k] = parseFloat(str); console.log(s[k]);
                k++;
                s[k] = '+'; k++; console.log(s[k]);
                str = "";
            }
            else {
                if (flag === 1) {
                    str = '-' + str;
                    flag = 0;
                }
                s[k] = parseFloat(str); console.log(s[k]);
                k++;

                s[k] = inpstr[i]; k++; console.log(s[k]);
                str = "";
            }

        }
        else {
            str = str + inpstr[i];
        }

    }
    console.log(s);
    if (flag === 1) {
        str = '-' + str;
        s.push(parseFloat(str));
    }
    else {
        s.push(parseFloat(str));
    }
    //console.log(s);
    console.log(s);
    for (let i = s.length - 1; i >= 0; i = i - 1) {

        if (s[i] === '^') {

            s[i - 1] = Math.pow(s[i - 1], s[i + 1]);
            s.splice(i, 2);
            i = i - 1;
        }
    } console.log(s);

    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '*') {

            s[i - 1] = s[i - 1] * s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
        if (s[i] === '/') {

            s[i - 1] = s[i - 1] / s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
    } console.log(s);


    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '%') {

            s[i - 1] = s[i - 1] % s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
    } console.log(s);

    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '+') {

            s[i - 1] = s[i - 1] + s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
        if (s[i] === '-') {

            s[i - 1] = s[i - 1] - s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
    } console.log(s);


    display.innerHTML = `${s[0]}`; console.log(s);
    sidedis.innerHTML += '='; sidedis.innerHTML += `${s[0]}`;

    sidedis.append(brea);
});

function findval(strr) {
    let s = []; let k = 0; let flag = 0;
    let str = "";

    for (let i in strr) {

        if (isop(strr[i]) === 1) {
            if (strr[i] === '-') {
                if (flag === 1) {
                    str = '-' + str;
                    flag = 0;
                }
                flag = 1;
                s[k] = parseFloat(str);
                k++;
                s[k] = '+'; k++;
                str = "";
            }
            else {
                if (flag === 1) {
                    str = '-' + str;
                    flag = 0;
                }
                s[k] = parseFloat(str);
                k++;

                s[k] = strr[i]; k++;
                str = "";
            }

        }
        else {
            str = str + strr[i];
        }

    }
    if (flag === 1) {
        str = '-' + str;
        s.push(parseFloat(str));
    }
    else {
        s.push(parseFloat(str));
    }
    //console.log(s);
    console.log(s);
    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '^') {

            s[i - 1] = Math.pow(s[i - 1], s[i + 1]);
            s.splice(i, 2);
        }
    } console.log(s);

    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '*') {

            s[i - 1] = s[i - 1] * s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
        if (s[i] === '/') {

            s[i - 1] = s[i - 1] / s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
    } console.log(s);


    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '%') {

            s[i - 1] = s[i - 1] % s[i + 1];
            s.splice(i, 2);
        }
    } console.log(s);

    for (let i = 1; i < s.length; i = i + 1) {

        if (s[i] === '+') {

            s[i - 1] = s[i - 1] + s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
        if (s[i] === '-') {

            s[i - 1] = s[i - 1] - s[i + 1];
            s.splice(i, 2);
            i = i - 1;
        }
    } console.log(s);


}