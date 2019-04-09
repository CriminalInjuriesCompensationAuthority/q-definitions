const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    propertyNames: {
        enum: [
            'q-applicant-have-you-applied-for-or-received-any-other-compensation',
            'q-applicant-applied-for-other-compensation-briefly-explain-why-not'
        ]
    },
    properties: {
        'q-applicant-have-you-applied-for-or-received-any-other-compensation': {
            title: 'Have you applied for or received any other form of compensation?',
            description:
                'For example, if you claimed insurance, sought civil damages, or a court decided you should get compensation.',
            type: 'boolean',
            errorMessages: {
                required: "Select yes if you have applied for or received another form of compensation"
            }
        },
        'q-applicant-applied-for-other-compensation-briefly-explain-why-not': {
            type: 'string',
            title: 'Briefly explain why not.',
            maxLength : 500,
            errorMessages: {
                required: "Explain why you did not apply for or receive any other form of compensation"
            }
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
                }
            }
        }
    }
};

module.exports = output;
