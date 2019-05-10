module.exports = function() {
    this.Given(/^I enter a future date for (.*)$/, question => {
        page.dates.enterfutureDate(question);
    });

    this.When(
        /^The date entered for (.*) falls after the date entered for (.*)$/,
        (question1, question2) => {
            page.dates.enterToday(question1);
            page.dates.setDate(question2);
        }
    );
};
