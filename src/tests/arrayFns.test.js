import { analyzeArray } from "../modules/utils";

const arraySample = [1, 8, 3, 4, 2, 6];

test("Analize array to get its properties like avg, minmax values and length", () => {
    expect(analyzeArray(arraySample)).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    });
});
