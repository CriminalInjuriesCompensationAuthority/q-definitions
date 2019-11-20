const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Enter their name',
    required: ['q-offender-enter-offenders-name'],
    additionalProperties: false,
    properties: {
        'q-offender-enter-offenders-name': {
            type: 'string',
            title: "Offender's name",
            description: 'We will never contact the offender.',
            maxLength: 120,
            errorMessage: {
                maxLength: "Offender's name must be 120 characters or less"
            }
        }
    },
    errorMessage: {
        required: {
            'q-offender-enter-offenders-name': "Enter the offender's name"
        }
    }
};

module.exports = output;
