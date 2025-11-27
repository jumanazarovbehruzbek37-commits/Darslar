// function addNumber(a, b, c) {
//     return a * a + b * b + c * c;
// }

// function calculate(a, b, c, d) {
//     let result = addNumber(a, b, c);
//     console.log(result * d);
// }

// calculate(2, 3, 4, 5,);

let password = prompt("Parolni kiriting: ");

function checkPasswordStrength(password) {
    let passwordLength = password.length;



if (password.length < 8) {
    return "weak";
} else if (password.length >= 8 && passwordLength <= 12) {
    return "medium";
} else if (passwordLength > 12) {
    return "strong";
}
}

let result = checkPasswordStrength(password);
console.log(result);