const LCDGenerator = require('../Functions/LCDDisplayGenerator');


describe("LCDDisplayGenerator", () => {
    test("should throw invalid input error for string arg", () => {
        expect(() => {
            LCDGenerator.generate('SadString')
                .toThrow("Invalid input");
        })
    });

    test("0 should return proper string", () => {
            expect(LCDGenerator.generate(0))
                .toBe(` 
                ._.
                |.|
                |_|
       `)
        }
    );

    test("12 should return proper string", () => {
        expect(LCDGenerator.generate(12))
            .toBe(`
                ... ._.
                ..| ._|
                ..| |_.
                `)

    });

});
