const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-what-other-names-have-you-used'],
    additionalProperties: false,
    properties: {
        'q-applicant-what-other-names-have-you-used': {
            type: 'string',
            title: 'What other names have you used?',
            maxLength: 50,
            errorMessages: {
                required: 'Enter the other names you have used',
                maxLength: 'Other names you have used must be 50 characters or less'
            }
        }
    }
};

module.exports = output;
