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
    },

    enterCharacters(question, input) {
        return driver
            .wait(until.elementsLocated(by.name(question)), 10000)
            .then(() => driver.findElement(by.name(question)))
            .then(element => {
                element.sendKeys(input);
            });
    },

    AnswerAllQuestions() {
        return driver.findElements(by.css('input')).then(elements => {
            elements.forEach(element =>
                element.getAttribute('type').then(type => {
                    if (type === 'text') {
                        element.sendKeys('test');
                    } else {
                        element.click();
                    }
                })
            );
        });
    }
};
