const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: [
        'q-applicant-reason-for-delay-in-reporting-crime',
        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police'
    ],
    additionalProperties: false,
    properties: {
        'q-applicant-reason-for-delay-in-reporting-crime': {
            title: 'Select reasons for the delay in reporting the crime to the police',
            type: 'array',
            maxItems: 3,
            uniqueItems: true,
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
            },
            errorMessages: {
                required: 'Select if you were under 18, unable to report the crime or other reasons'
            }
        },
        'q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
            title: 'Briefly explain these reasons',
            type: 'string',
            maxLength: 500,
            errorMessages: {
                required: 'Explain the reasons for the delay in reporting the crime to the police',
                maxLength: 'Explanation must be 500 characters or less'
            }
        }
    }
};

module.exports = output;
