const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-when-did-the-crime-happen'],
    additionalProperties: false,
    properties: {
        'q-applicant-when-did-the-crime-happen': {
            type: 'string',
            format: 'date-time',
            title: 'When did the crime happen?',
            description: 'For example, 31 3 2018. You can enter an approximate date.',
            errorMessage: {
                format: 'The date the crime happened must be in the past'
            }
        },
        'when-did-the-crime-happen': {
            description: `
                {{ govukDetails({
                    summaryText: "I do not know when the crime happened",
                    html: '<p>You can contact us for help with your application on 0300 003 3601. Select option 8.</p>
                            <p>Our phone lines are open Monday to Friday 8.30am to 5pm except Wednesday when they open at 10am.</p>'
                }) }}
            `
        }
    },
    errorMessage: {
        required: {
            'q-applicant-when-did-the-crime-happen':
                'Enter the date the crime happened and include a day, month and year'
        }
    }
};

module.exports = output;
