module.exports = {
    generateStringWithTooManyCharacters(max) {
        let input = 'a';
        while (input.length <= max) {
            input += 'a';
        }
        return input;
    },

    enterTooManyCharacters(question, maxLength) {
        const input = this.generateStringWithTooManyCharacters(maxLength);
        return shared.cicaHelper.enterCharacters(question, input);
    }
};
