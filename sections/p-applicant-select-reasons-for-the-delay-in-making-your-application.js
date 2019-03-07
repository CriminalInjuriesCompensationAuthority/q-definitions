const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-reason-for-delay-in-application'],
    additionalProperties: false,
    properties: {
        'q-applicant-reason-for-delay-in-application': {
            title: 'Select reasons for the delay in making your application',
            type: 'array',
            maxItems: 4,
            uniqueItems: true,
            items: {
                anyOf: [
                    {
                        title: 'I was under 18',
                        const: 'underage'
                    },
                    {
                        title: 'I was advised to wait',
                        const: 'wait'
                    },
                    {
                        title: 'Medical reasons',
                        const: 'med'
                    },
                    {
                        title: 'Other reasons',
                        const: 'other'
                    }
                ]
            },
            errorMessages: {
                required: 'Select your choice'
            }
        },
        'q-applicant-explain-delay-reasons': {
            title: 'Briefly explain these reasons',
            type: 'string',
            maxLength: 500
        }
    }
};

module.exports = output;
