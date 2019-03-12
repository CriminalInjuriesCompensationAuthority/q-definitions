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
            title: 'Enter your previous reference number if you know it (optional)'
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
                required: ['q-enter-your-previous-reference-number'],
                propertyNames: {
                    enum: [
                        'q-applicant-have-you-applied-to-us-before',
                        'q-enter-your-previous-reference-number'
                    ]
                }
            }
        }
    }
};

module.exports = output;
