const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    propertyNames: {
        enum: [
            'q-applicant-have-you-applied-to-us-before',
            'q-enter-your-previous-reference-number'
        ]
    },
    properties: {
        'q-applicant-have-you-applied-to-us-before': {
            title: 'Have you applied to us before?',
            type: 'boolean'
        },
        'q-enter-your-previous-reference-number': {
            type: 'string',
            title: 'Enter your previous reference number if you know it (optional)',
            maxLength: 50,
            errorMessage: {
                maxLength: 'Previous reference number must be 50 characters or less'
            }
        }
    },
    required: ['q-applicant-have-you-applied-to-us-before'],
    allOf: [
        {
            $ref: '#/definitions/if-true-then-q-enter-your-previous-reference-number-is-required'
        }
    ],
    definitions: {
        'if-true-then-q-enter-your-previous-reference-number-is-required': {
            if: {
                properties: {
                    'q-applicant-have-you-applied-to-us-before': {
                        const: true
                    }
                }
            },
            then: {
                propertyNames: {
                    enum: [
                        'q-applicant-have-you-applied-to-us-before',
                        'q-enter-your-previous-reference-number'
                    ]
                }
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-have-you-applied-to-us-before':
                'Select yes if you have applied to us before'
        }
    }
};

module.exports = output;
