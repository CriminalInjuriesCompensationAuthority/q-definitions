const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Check your answers',
    additionalProperties: false,
    properties: {
        'p-check-your-answers': {
            summaryInfo: {
                footerText: `<h2 class="govuk-heading-l">Agree and submit your application</h2>
                    <p class="govuk-body">By submitting this application you agree that we can share the details in it with the police. This helps us get the police information that we need to make a decision.</p>
                <p class="govuk-body">To find out more about how we handle your data <a href="https://www.gov.uk/guidance/cica-privacy-notice" target="">read our privacy notice</a>.</p>`,
                urlPath: 'apply',
                editAnswerText: 'Change'
            }
        }
    }
};

module.exports = output;
