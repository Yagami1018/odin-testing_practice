export function capitalize(input) {
    input = input.toLowerCase();
    if (input.includes(" ")) {
        let words = input.trim().split(" ");
        for (let i = 0; i < words.length; i++) {
            words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1);
        }
        return words.join(" ");
    }
    return input.charAt(0).toUpperCase() + input.slice(1);
}

export function reverseString(input) {
    input = input.trim();
    let reversed = "";
    for (let i = input.length - 1; i >= 0; i--) {
        reversed = reversed.concat(input[i]);
    }
    return reversed;
}

export function calculate(a, operator, b) {
    switch (operator) {
        case "+":
            return a + b;
            break;
        case "-":
            return a - b;
            break;
        case "*":
            return a * b;
            break;
        case "/":
            return a / b;
            break;
        default:
            throw new Error(
                `Error: Invalid Operator "${operator}", it must be (+,-,*,/)`,
            );
    }
}

export function caesarCipher(input, traslation) {
    let ciphered = "";
    for (let char of input) {
        if (!char.toLowerCase().match(/\w/)) {
            ciphered += char;
            continue;
        }
        let code = char.charCodeAt(0);
        let base = char === char.toUpperCase() ? 65 : 97;
        ciphered += String.fromCharCode(
            ((code - base + traslation) % 26) + base,
        );
    }
    return ciphered;
}
