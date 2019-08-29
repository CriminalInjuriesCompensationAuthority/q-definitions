const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'You cannot get compensation',
    type: 'object',
    additionalProperties: false,
    properties: {
        'you-cannot-get-compensation': {
            description: `
                <p class="govuk-body">If the crime has not been reported to the police we cannot pay compensation.</p>
                <p class="govuk-body">You may continue your application, but any future application for the same injuries will be refused.</p>
            `
        }
    }
};

module.exports = output;
