module.exports = function() {
    this.When(/^I exceed (.*) characters when answering (.*)$/, (max, question) => {
        page.characterConstraint.enterTooManyCharacters(question, max);
    });
};
