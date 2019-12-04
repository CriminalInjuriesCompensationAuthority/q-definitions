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
            title: 'Who has your child applied to or received compensation from?',
            maxLength: 50,
            errorMessage: {
                maxLength:
                    'Who your child applied to or received compensation from must be 50 characters or less'
            }
        },
        'q-applicant-has-a-decision-been-made': {
            title: 'Have they made a decision?',
            type: 'boolean'
        },
        'q-how-much-was-award': {
            type: 'string',
            title: 'How much was the award?',
            maxLength: 50,
            errorMessage: {
                maxLength: 'Award amount must be 50 characters or less'
            }
        },
        'q-when-will-you-find-out': {
            type: 'string',
            title: 'When will you find out?',
            description:
                'Enter an approximate date, for example, December 2019. If you do not know you can say so.',
            maxLength: 50,
            errorMessage: {
                maxLength: 'When will you find out must be 50 characters or less'
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
                },
                required: ['q-applicant-has-a-decision-been-made']
            },
            then: {
                required: ['q-when-will-you-find-out'],
                propertyNames: {
                    enum: [
                        'q-applicant-who-did-you-apply-to',
                        'q-applicant-has-a-decision-been-made',
                        'q-when-will-you-find-out'
                    ]
                },
                errorMessage: {
                    required: {
                        'q-when-will-you-find-out': 'Enter an approximate date'
                    }
                }
            }
        },
        'if-true-then-q-how-much-was-award-is-required': {
            if: {
                properties: {
                    'q-applicant-has-a-decision-been-made': {
                        const: true
                    }
                },
                required: ['q-applicant-has-a-decision-been-made']
            },
            then: {
                required: ['q-how-much-was-award'],
                propertyNames: {
                    enum: [
                        'q-applicant-who-did-you-apply-to',
                        'q-applicant-has-a-decision-been-made',
                        'q-how-much-was-award'
                    ]
                },
                errorMessage: {
                    required: {
                        'q-how-much-was-award': 'Enter an amount'
                    }
                }
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-who-did-you-apply-to':
                'Enter who you applied to or received compensation from',
            'q-applicant-has-a-decision-been-made':
                'Select yes if you have received a decision about the other compensation claim'
        }
    }
};

module.exports = output;
