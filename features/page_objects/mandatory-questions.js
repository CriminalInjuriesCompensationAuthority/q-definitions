module.exports = {
    urlPrefix: 'http://localhost:3000/apply/',

    elements: {
        submitButton: by.css('button.govuk-button')
    },

    getUrl(question) {
        const page = question.replace(/p-{1,2}/, '');
        return this.urlPrefix + page;
    },

    answerQuestion() {
        const selector = this.elements.submitButton;
        // return a promise so the calling function knows the task has completed
        return driver.findElement(selector).sendKeys(selenium.Key.ENTER);
    }
};
