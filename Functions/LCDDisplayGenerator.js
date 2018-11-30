module.exports = {
    generate(number) {
        if (!Number.isInteger(number)) {
            throw('Invalid input')
        }

        return numbers[number];

    }
};

const numbers_ASCII = `
._.   ...   ._.   ._.   ...   ._.   ._.   ._.   ._.   ._.
|.|   ..|   ._|   ._|   |_|   |_.   |_.   ..|   |_|   |_|
|_|   ..|   |_.   ._|   ..|   ._|   |_|   ..|   |_|   ..|

`;

const numbers = {
    0: `
        ._.
        |.|
        |_|
        `
};

