const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: [
        'q-applicant-explain-reason-for-delay-application',
        'q-applicant-select-reasons-for-the-delay-in-making-your-application'
    ],
    additionalProperties: false,
    properties: {
        'q-applicant-select-reasons-for-the-delay-in-making-your-application': {
            title: 'Select reasons for the delay in making your application',
            type: 'array',
            maxItems: 4,
            uniqueItems: true,
            description: 'Select all options that apply to you.',
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
            }
        },
        'q-applicant-explain-reason-for-delay-application': {
            title: 'Briefly explain these reasons',
            type: 'string',
            maxLength: 500,
            errorMessage: {
                maxLength: 'Explanation must be 500 characters or less'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-select-reasons-for-the-delay-in-making-your-application':
                'Select if you were under 18, advised to wait, medical reasons or other reasons',
            'q-applicant-explain-reason-for-delay-application':
                'Explain the reasons for the delay in making your application'
        }
    }
};

module.exports = output;
