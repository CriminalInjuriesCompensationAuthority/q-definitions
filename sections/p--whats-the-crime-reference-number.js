const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q--whats-the-crime-reference-number'],
    additionalProperties: false,
    properties: {
        'q--whats-the-crime-reference-number': {
            title: 'What is the crime reference number?',
            type: 'string',
            description:
                'This is the reference number the police gave the crime when it was reported.',
            maxLength: 30,
            errorMessage: {
                maxLength: 'Crime reference number must be 30 characters or less'
            }
        }
    },
    errorMessage: {
        required: {
            'q--whats-the-crime-reference-number': 'Enter the crime reference number'
        }
    }
};

module.exports = output;
