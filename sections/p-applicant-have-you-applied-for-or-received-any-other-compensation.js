const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    propertyNames: {
        enum: ['q-applicant-have-you-applied-for-or-received-any-other-compensation']
    },
    properties: {
        'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
            title: 'Have you applied for or received any other form of compensation?',
            description:
                'For example, if you claimed insurance, sought civil damages, or a court decided you should get compensation.',
            type: 'boolean'
        },
        'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
            type: 'string',
            title: 'Briefly explain why not.',
            maxLength: 499
        }
    },
    required: ['q-applicant-have-you-applied-for-or-received-any-other-compensation'],
    allOf: [
        {
            $ref:
                '#/definitions/if-false-then-q-applicant-applied-for-other-compensation-briefly-explain-why-not-is-required'
        }
    ],
    definitions: {
        'if-false-then-q-applicant-applied-for-other-compensation-briefly-explain-why-not-is-required': {
            if: {
                properties: {
                    'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
                        const: false
                    }
                }
            },
            then: {
                required: ['q-applicant-applied-for-other-compensation-briefly-explain-why-not'],
                propertyNames: {
                    enum: [
                        'q-applicant-have-you-applied-for-or-received-any-other-compensation',
                        'q-applicant-applied-for-other-compensation-briefly-explain-why-not'
                    ]
                },
                properties: {
                    'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
                        errorMessage: {
                            maxLength: 'Explanation must be 500 characters or less'
                        }
                    }
                },
                errorMessage: {
                    required: {
                        'q-applicant-applied-for-other-compensation-briefly-explain-why-not':
                            'Explain why you did not apply for or receive any other form of compensation'
                    }
                }
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-have-you-applied-for-or-received-any-other-compensation':
                'Select yes if you have applied for or received another form of compensation'
        }
    }
};

module.exports = output;
