module.exports = {
    enterfutureDate(question) {
        const futureDate = '2100-01-01T00:00:00.000Z';
        return this.enterDate(question, futureDate);
    },

    splitDate(date) {
        return date.split('T')[0].split('-');
    },

    enterDate(question, date) {
        const data = this.splitDate(date);
        return this.enterDatePart(question, 'day', data[2])
            .then(this.enterDatePart(question, 'month', data[1]))
            .then(this.enterDatePart(question, 'year', data[0]));
    },

    enterDatePart(question, part, data) {
        const questionName = `${question}[${part}]`;
        return shared.cicaHelper.enterCharacters(questionName, data);
    },

    enterToday(question) {
        const today = new Date().toISOString();
        return this.enterDate(question, today);
    },

    setDate(question) {
        // ToDo: Use API to set a date for another question
        return question;
    }
};
