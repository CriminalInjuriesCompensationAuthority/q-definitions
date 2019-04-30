const output = {
    type: 'object',
    properties: {
        'q-offender-contact-description': {
            type: 'string',
            title: 'If you have contact with the offender, describe it below',
            description: 'We will not pay compensation if the offender may benefit from it.',
            maxLength: 500,
            errorMessages: {
                required: 'Enter details of any contact you have with the offender',
                maxLength: 'Description must be 500 characters or less'
            }
        },
        'q-offender-no-contact-with-offender': {
            type: 'array',
            maxItems: 1,
            uniqueItems: true,
            items: {
                anyOf: [
                    {
                        title: 'I have no contact with the offender',
                        const: 'none'
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
                    required: ['q-offender-no-contact-with-offender']
                }
            },
            then: {
                required: ['q-offender-contact-description']
            }
        }
    }
};

module.exports = output;
