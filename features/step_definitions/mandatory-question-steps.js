module.exports = function() {
    /* GIVEN */

    this.Given(/^I am on (.*)$/, function(section) {
        // Load the selected page
        return helpers.loadPage(page.mandatoryQuestions.getUrl(section));
    });

    /* WHEN */

    this.When(/^I have not answered the (.*) and I click continue$/, function(question) {
        // Click the continue button
        return page.mandatoryQuestions.answerQuestion();
    });

    /* THEN */

    this.Then(/^I will see an (.*)$/, function(error) {
        // Search for the error
        return driver.wait(until.elementsLocated(by.partialLinkText(error)), 10000);
    });
};
