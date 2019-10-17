const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q--was-the-crime-reported-to-police'],
    additionalProperties: false,
    properties: {
        'q--was-the-crime-reported-to-police': {
            type: 'boolean',
            title: 'Was the crime reported to the police?'
        },
        'dont-know-if-crime-reported': {
            description: `
                {{ govukDetails({
                summaryText: "I do not know if the crime was reported to the police",
                html: '<p>You can contact us for help with your application on 0300 003 3601. Select option 8.</p>
                        <p>Our phone lines are open Monday to Friday 8:30am to 5pm except Wednesday when they open at 10am.</p>'
                }) }}
            `
        }
    },
    errorMessage: {
        required: {
            'q--was-the-crime-reported-to-police':
                'Select yes if the crime was reported to the police'
        }
    }
};

module.exports = output;
