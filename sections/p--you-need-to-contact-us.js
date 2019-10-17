const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'You need to contact us',
    type: 'object',
    additionalProperties: false,
    properties: {
        'you-need-to-ccontact-us': {
            description: `
                <p class="govuk-body">We need to check if you are eligible for compensation.</p>
                <p class="govuk-body">Call us on 0300 003 3601. Select option 8.</p>
                <p class="govuk-body">Our phone lines are open Monday to Friday 8:30am to 5pm except Wednesday when they open at 10am.</p>
            `
        }
    }
};

module.exports = output;
