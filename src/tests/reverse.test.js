import { reverseString } from "../modules/utils";

class reverseTest {
    constructor(input, expected) {
        this.input = input;
        this.expected = expected;
        this.desc = `Reverse "${input}" to equals "${expected}".`;
    }
}

const reverseTests = [
    new reverseTest("hello", "olleh"),
    new reverseTest("hello world", "dlrow olleh"),
];

reverseTests.forEach((unit) => {
    test(unit.desc, () => {
        expect(reverseString(unit.input)).toBe(unit.expected);
    });
});
