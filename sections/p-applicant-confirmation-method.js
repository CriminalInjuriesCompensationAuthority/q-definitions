const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    propertyNames: {
        enum: [
            'q-applicant-confirmation-method',
            'q-applicant-enter-your-email-address',
            'q-applicant-enter-your-telephone-number'
        ]
    },
    properties: {
        'q-applicant-confirmation-method': {
            title: 'How do you want to get your confirmation message?',
            type: 'string',
            oneOf: [
                {
                    title: 'Email',
                    const: 'email'
                },
                {
                    title: 'Text message',
                    const: 'sms'
                },
                {
                    title: "I don't have an email address or a mobile number",
                    const: 'none'
                }
            ]
        },
        'q-applicant-enter-your-email-address': {
            type: 'string',
            title: 'Email address',
            maxLength: 50,
            format: 'email',
            errorMessage: {
                maxLength: 'Email address must be 50 characters or less',
                format: 'Enter your email address, for example john.smith@email.com'
            }
        },
        'q-applicant-enter-your-telephone-number': {
            type: 'string',
            title: 'Mobile phone number',
            maxLength: 20,
            pattern: '^[\\+\\d][\\d \\(\\)\\+\\-\\#]{7,19}$',
            format: 'x-mobilePhoneNumber',
            errorMessage: {
                format: 'Enter a mobile phone number, 07700 900 982 or +447700 900 982',
                maxLength: 'Telephone number must be 20 characters or less',
                pattern: 'Enter a mobile phone number, 07700 900 982 or +447700 900 982'
            }
        }
    },
    required: ['q-applicant-confirmation-method'],
    allOf: [
        {
            $ref: '#/definitions/if-email-then-q-applicant-enter-your-email-address-is-required'
        },
        {
            $ref: '#/definitions/if-sms-then-q-applicant-enter-your-telephone-number-is-required'
        }
    ],
    definitions: {
        'if-email-then-q-applicant-enter-your-email-address-is-required': {
            if: {
                properties: {
                    'q-applicant-confirmation-method': {
                        const: 'email'
                    }
                },
                required: ['q-applicant-confirmation-method']
            },
            then: {
                required: ['q-applicant-enter-your-email-address'],
                propertyNames: {
                    enum: [
                        'q-applicant-confirmation-method',
                        'q-applicant-enter-your-email-address'
                    ]
                },
                errorMessage: {
                    required: {
                        'q-applicant-enter-your-email-address':
                            'Enter your email address, for example john.smith@email.com'
                    }
                }
            }
        },
        'if-sms-then-q-applicant-enter-your-telephone-number-is-required': {
            if: {
                properties: {
                    'q-applicant-confirmation-method': {
                        const: 'sms'
                    }
                },
                required: ['q-applicant-confirmation-method']
            },
            then: {
                required: ['q-applicant-enter-your-telephone-number'],
                propertyNames: {
                    enum: [
                        'q-applicant-confirmation-method',
                        'q-applicant-enter-your-telephone-number'
                    ]
                },
                errorMessage: {
                    required: {
                        'q-applicant-enter-your-telephone-number':
                            'Enter your mobile phone number, for example 07700 900 982'
                    }
                }
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-confirmation-method':
                'Select how you want to receive your confirmation message'
        }
    },
    meta: {
        validData: [
            {
                'q-applicant-confirmation-method': 'none'
            },
            {
                'q-applicant-confirmation-method': 'email',
                'q-applicant-enter-your-email-address': 'foo@bar.com'
            },
            {
                'q-applicant-confirmation-method': 'sms',
                'q-applicant-enter-your-telephone-number': '07700900982'
            }
        ],
        invalidData: [
            {
                'q-applicant-confirmation-method': 'none',
                'q-applicant-enter-your-email-address': 'foo@bar.com'
            },
            {
                'q-applicant-confirmation-method': 'none',
                'q-applicant-enter-your-telephone-number': '07700900982'
            },
            {
                'q-applicant-confirmation-method': 'email'
            },
            {
                'q-applicant-confirmation-method': 'sms'
            },
            {
                'q-applicant-confirmation-method': 'email',
                'q-applicant-enter-your-telephone-number': '07700900982'
            },
            {
                'q-applicant-confirmation-method': 'sms',
                'q-applicant-enter-your-email-address': 'foo@bar.com'
            },
            {
                'q-applicant-confirmation-method': 'email',
                'q-applicant-enter-your-email-address': 'not an email address'
            },
            {
                'q-applicant-confirmation-method': 'sms',
                'q-applicant-enter-your-telephone-number': 'not a mobile phone number'
            },
            {
                'q-applicant-confirmation-method': 'sms',
                'q-applicant-enter-your-telephone-number': '0141 420 5000'
            }
        ]
    }
};

module.exports = output;
