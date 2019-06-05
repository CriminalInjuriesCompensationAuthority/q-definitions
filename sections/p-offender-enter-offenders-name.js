const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Enter their name',
    required: ['q-offenders-name'],
    additionalProperties: false,
    properties: {
        'q-offenders-name': {
            type: 'string',
            title: 'Offenders name',
            description: 'We will not contact the offender.',
            maxLength: 120,
            errorMessage: {
                maxLength: "Offender's name must be 120 characters or less"
            }
        }
    },
    errorMessage: {
        required: {
            'q-offenders-name': "Enter the offender's name"
        }
    }
};

module.exports = output;
