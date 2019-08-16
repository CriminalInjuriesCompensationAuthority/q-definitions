const output = {
    type: 'object',
    properties: {
        'q-offender-describe-contact-with-offender': {
            type: 'string',
            title: 'If you have contact with the offender, describe it below',
            description: 'We will not pay compensation if the offender may benefit from it.',
            maxLength: 500,
            errorMessage: {
                maxLength: 'Description must be 500 characters or less'
            }
        },
        'q-offender-i-have-no-contact-with-offender': {
            type: 'array',
            maxItems: 1,
            uniqueItems: true,
            items: {
                anyOf: [
                    {
                        title: 'I have no contact with the offender',
                        const: 'i-have-no-contact-with-the-offender'
                    }
                ]
            }
        }
    },
    allOf: [{$ref: '#/definitions/if-not-checked-then-q-offender-contact-description-is-required'}],
    definitions: {
        'if-not-checked-then-q-offender-contact-description-is-required': {
            if: {
                not: {
                    required: ['q-offender-i-have-no-contact-with-offender']
                }
            },
            then: {
                required: ['q-offender-describe-contact-with-offender'],
                errorMessage: {
                    required: {
                        'q-offender-describe-contact-with-offender':
                            'Enter details of any contact you have with the offender'
                    }
                }
            }
        }
    }
};

module.exports = output;
