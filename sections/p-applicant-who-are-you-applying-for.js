const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-who-are-you-applying-for'],
    additionalProperties: false,
    properties: {
        'q-applicant-who-are-you-applying-for': {
            title: 'Who are you applying for?',
            type: 'string',
            oneOf: [
                {
                    title: 'Myself',
                    const: 'myself'
                },
                {
                    title: 'Someone else',
                    const: 'someone-else'
                }
            ]
        }
    },
    errorMessage: {
        required: {
            'q-applicant-who-are-you-applying-for':
                'Select Myself if you are the person applying for compensation'
        }
    }
};

module.exports = output;
