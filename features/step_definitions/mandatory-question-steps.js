module.exports = function() {
    /* GIVEN */

    this.Given(/^I am on (.*)$/, section =>
        // Load the selected page
        helpers.loadPage(page.mandatoryQuestions.getUrl(section))
    );

    /* WHEN */

    this.When(/^I have not answered the (.*) and I click continue$/, question =>
        // Click the continue button
        page.mandatoryQuestions.answerQuestion()
    );

    /* THEN */

    this.Then(/^I will see an (.*)$/, error =>
        // Search for the error
        driver.wait(until.elementsLocated(by.partialLinkText(error)), 10000)
    );
};
