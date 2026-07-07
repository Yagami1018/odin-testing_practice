import { caesarCipher } from "../modules/utils";

class cipherTest {
    constructor(input, traslation, expected) {
        this.input = input;
        this.traslation = traslation;
        this.expected = expected;
        this.desc = `Caesar cipher "${input}" with ${traslation} to equals "${expected}".`;
    }
}

const cipherTests = [
    new cipherTest('hello world', 3 , 'khoor zruog'),
    new cipherTest('Z',4,'D'),
    new cipherTest("Hello", 3, "Khoor"),
    new cipherTest("city", 3, "flwb"),
];

cipherTests.forEach((unit) => {
    test(unit.desc, () => {
        expect(caesarCipher(unit.input, unit.traslation)).toBe(unit.expected);
    });
});
