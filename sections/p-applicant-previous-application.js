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
            title: 'Is this the first claim for this incident?',
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
            $ref: '#/definitions/if-false-then-q-enter-your-previous-reference-number-is-required'
        }
    ],
    definitions: {
        'if-false-then-q-enter-your-previous-reference-number-is-required': {
            if: {
                properties: {
                    'q-applicant-have-you-applied-to-us-before': {
                        const: false
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
                'Select no if you have applied to us before'
        }
    }
};

module.exports = output;
