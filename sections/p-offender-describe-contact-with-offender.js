const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    properties: {
        'q-offender-contact-description': {
            type: 'string',
            title: 'If you have contact with the offender, describe it below',
            maxLength: 500
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
    }
};

module.exports = output;
