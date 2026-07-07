import { calculate } from "../modules/utils";

class calculatorTest {
    constructor(firstNum, operator, secondNum, expected) {
        this.firstNum = firstNum;
        this.operator = operator;
        this.secondNum = secondNum;
        this.expected = expected;
        this.desc = `Calculate ${firstNum} ${operator} ${secondNum} to equals ${expected}.`;
    }
}

const calculatorTests = [
    new calculatorTest(1, "+", 2, 3),
    new calculatorTest(6, "-", 2, 4),
    new calculatorTest(3, "*", 4, 12),
    new calculatorTest(4, "/", 2, 2),
    new calculatorTest(5, "/", 2, 2.5),
    new calculatorTest(4,'/',0, Infinity)
];


calculatorTests.forEach((unit) => {
    test(unit.desc, () => {
        expect(calculate(unit.firstNum, unit.operator, unit.secondNum)).toEqual(
            unit.expected,
        );
    });
});