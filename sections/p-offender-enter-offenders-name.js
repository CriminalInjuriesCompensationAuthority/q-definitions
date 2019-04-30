const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: "Enter the offender's name",
    required: ['q-offenders-name'],
    additionalProperties: false,
    properties: {
        'q-offenders-name': {
            type: 'string',
            description: 'We will not contact the offender.',
            maxLength: 120,
            errorMessages: {
                required: "Enter the offender's name",
                maxLength: "Offender's name must be 120 characters or less"
            }
        }
    }
};

module.exports = output;
