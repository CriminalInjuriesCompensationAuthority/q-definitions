const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Other compensation',
    propertyNames: {
        enum: [
            'q-applicant-who-did-you-apply-to',
            'q-applicant-has-a-decision-been-made',
            'q-how-much-was-award',
            'q-when-will-you-find-out'
        ]
    },
    properties: {
        'q-applicant-who-did-you-apply-to': {
            type: 'string',
            title: 'Who have you applied to or received compensation from?',
            errorMessages: {
                required: 'Enter who you applied to or received compensation from'
            }
        },
        'q-applicant-has-a-decision-been-made': {
            title: 'Have they made a decision?',
            type: 'boolean',
            errorMessages: {
                required:
                    'Select yes if you have received a decision about the other compensation claim'
            }
        },
        'q-how-much-was-award': {
            type: 'string',
            title: 'How much was the award?',
            errorMessages: {
                required: 'Enter an amount'
            }
        },
        'q-when-will-you-find-out': {
            type: 'string',
            title: 'When will you find out?',
            description:
                'Enter an approximate date, for example, December 2019. If you do not know you can say so.',
            errorMessages: {
                required: 'Enter an approximate date'
            }
        }
    },
    required: ['q-applicant-who-did-you-apply-to', 'q-applicant-has-a-decision-been-made'],
    allOf: [
        {
            $ref: '#/definitions/if-false-then-q-when-will-you-find-out-is-required'
        },
        {
            $ref: '#/definitions/if-true-then-q-how-much-was-award-is-required'
        }
    ],
    definitions: {
        'if-false-then-q-when-will-you-find-out-is-required': {
            if: {
                properties: {
                    'q-applicant-has-a-decision-been-made': {
                        const: false
                    }
                }
            },
            then: {
                required: ['q-when-will-you-find-out'],
                propertyNames: {
                    enum: [
                        'q-applicant-who-did-you-apply-to',
                        'q-applicant-has-a-decision-been-made',
                        'q-when-will-you-find-out'
                    ]
                }
            }
        },
        'if-true-then-q-how-much-was-award-is-required': {
            if: {
                properties: {
                    'q-applicant-has-a-decision-been-made': {
                        const: true
                    }
                }
            },
            then: {
                required: ['q-how-much-was-award'],
                propertyNames: {
                    enum: [
                        'q-applicant-who-did-you-apply-to',
                        'q-applicant-has-a-decision-been-made',
                        'q-how-much-was-award'
                    ]
                }
            }
        }
    }
};

module.exports = output;
