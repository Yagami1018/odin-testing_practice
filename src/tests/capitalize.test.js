import { capitalize } from "../modules/utils";

class capitalizeTest {
    constructor(input, expected) {
        this.input = input;
        this.expected = expected;
        this.desc = `Capitalizing "${input}" to equals "${expected}".`;
    }
}

const capitalizeTests = [
    new capitalizeTest("city", "City"),
    new capitalizeTest("new york", "New York"),
    new capitalizeTest(" lA haVana ", "La Havana"),
];

capitalizeTests.forEach((unit) => {
    test(unit.desc, () => {
        expect(capitalize(unit.input)).toBe(unit.expected);
    });
});
