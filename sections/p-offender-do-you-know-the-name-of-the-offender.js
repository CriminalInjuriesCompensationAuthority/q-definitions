const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-offender-do-you-know-the-name-of-the-offender'],
    additionalProperties: false,
    properties: {
        'q-offender-do-you-know-the-name-of-the-offender': {
            type: 'boolean',
            title: 'Do you know the name of the offender?'
        }
    },
    errorMessage: {
        required: {
            'q-offender-do-you-know-the-name-of-the-offender':
                "Select yes if you know the offender's name"
        }
    }
};

module.exports = output;
