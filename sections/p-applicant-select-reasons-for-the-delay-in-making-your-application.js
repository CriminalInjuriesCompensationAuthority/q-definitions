const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: [
        'q-applicant-reason-for-delay-in-application',
        'q-applicant-select-reasons-for-the-delay-in-making-your-application'
    ],
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
                        const: 'i-was-underage'
                    },
                    {
                        title: 'I was advised to wait',
                        const: 'i-was-advised-to-wait'
                    },
                    {
                        title: 'Medical reasons',
                        const: 'medical-reasons'
                    },
                    {
                        title: 'Other reasons',
                        const: 'other-reasons'
                    }
                ]
            },
            errorMessages: {
                required:
                    'Select if you were under 18, advised to wait, medical reasons or other reasons'
            }
        },
        'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
            title: 'Briefly explain these reasons',
            type: 'string',
            maxLength: 500,
            errorMessages: {
                required: 'Explain the reasons for the delay in making your application',
                maxLength: 'Explanation must be 500 characters or less'
            }
        }
    }
};

module.exports = output;
