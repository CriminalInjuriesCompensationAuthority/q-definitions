module.exports = function() {
    /* GIVEN */

    this.Given(/^I am on (.*)$/, section =>
        // Load the selected page
        helpers.loadPage(shared.cicaHelper.getUrl(section))
    );

    this.Given(/^I answer all the questions on (.*)$/, section =>
        // Load the selected page and answer all the questions
        helpers
            .loadPage(shared.cicaHelper.getUrl(section))
            .then(() => shared.cicaHelper.AnswerAllQuestions(section))
    );

    this.Given(/^(.*) is visible$/, section =>
        // Load the selected page and answer all the questions
        helpers
            .loadPage(shared.cicaHelper.getUrl(section))
            .then(() => shared.cicaHelper.AnswerAllQuestions(section))
    );

    /* WHEN */

    this.When(/^I click continue$/, () => {
        // Click the continue button
        shared.cicaHelper.answerQuestion();
    });

    this.When(/^I have not answered the (.*) and I click continue$/, question => {
        // Click the continue button
        shared.cicaHelper.answerQuestion();
    });

    /* THEN */

    this.Then(/^I will see an (.*)$/, error =>
        // Search for the error
        driver.wait(until.elementsLocated(by.partialLinkText(error)), 10000)
    );
};
