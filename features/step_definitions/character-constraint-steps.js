module.exports = function() {
    this.When(/^I exceed (.*) characters when answering (.*)$/, function(max, question) {
        page.characterConstraint.enterTooManyCharacters(question, max);
    });
};
