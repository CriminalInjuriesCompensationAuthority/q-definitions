const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    propertyNames: {
        enum: [
            'q-offender-contact-description',
            'q-offender-no-contact-with-offender'
        ]
    },
    properties: {
        'q-offender-contact-description': {
            type: 'string',
            title: 'If you have contact with the offender, describe it below',
            maxLength: 500,
            errorMessages: {
                required: "Please describe your contact with the offender, or click 'I have no contact with the offender'"
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
            },
            errorMessages: {
                required: "Please describe your contact with the offender, or click 'I have no contact with the offender'"
            }
        }
    },
    allOf: [
        {
            $ref: '#/definitions/if-not-checked-then-q-offender-contact-description-is-required'
        }
    ],
    definitions: {
        'if-not-checked-then-q-offender-contact-description-is-required': {
            if: {
                not: {
                    properties: {
                        'q-offender-no-contact-with-offender': {
                            const: 'none'
                        }
                    }
                }
            },
            then: {
                required: ['q-offender-contact-description'],
                propertyNames: {
                    enum: [
                        'q-offender-no-contact-with-offender',
                        'q-offender-contact-description'
                    ]
                }
            }
        }
    }
};

module.exports = output;
