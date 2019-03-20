const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'You can not get compensation',
    type: 'object',
    additionalProperties: false,
    properties: {
        'you-cannot-get-compensation': {
            description: `
                <p class="govuk-body-l">If the crime has not been reported to the police we can not pay compensation.</p>
                <p class="govuk-body">You may continue your application, but any future application for the same injuries will be refused.</p>
            `
        }
    }
};

module.exports = output;
