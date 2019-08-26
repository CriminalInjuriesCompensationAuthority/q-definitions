const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: [
        'q-applicant-explain-reason-for-delay-reporting',
        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
    ],
    additionalProperties: false,
    properties: {
        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
            title: 'Select reasons for the delay in reporting the crime to the police',
            type: 'array',
            maxItems: 3,
            uniqueItems: true,
            description: 'Select all options that apply to you.',
            items: {
                anyOf: [
                    {
                        title: 'I was under 18',
                        const: 'i-was-under-18'
                    },
                    {
                        title: 'Unable to report the crime',
                        const: 'unable-to-report-crime'
                    },
                    {
                        title: 'Other reasons',
                        const: 'other'
                    }
                ]
            }
        },
        'q-applicant-explain-reason-for-delay-reporting': {
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
            'q-applicant-explain-reason-for-delay-reporting':
                'Select if you were under 18, unable to report the crime or other reasons',
            'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police':
                'Explain the reasons for the delay in reporting the crime to the police'
        }
    }
};

module.exports = output;
