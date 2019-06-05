const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-did-the-crime-happen-once-or-over-time'],
    additionalProperties: false,
    properties: {
        'q-applicant-did-the-crime-happen-once-or-over-time': {
            title: 'Did the crime happen once or over a period of time?',
            type: 'string',
            oneOf: [
                {
                    title: 'Once',
                    const: 'once'
                },
                {
                    title: 'Over a period of time',
                    const: 'over-a-period-of-time'
                }
            ]
        }
    },
    errorMessage: {
        required: {
            'q-applicant-did-the-crime-happen-once-or-over-time':
                'Select Once or Over a period of time'
        }
    }
};

module.exports = output;
