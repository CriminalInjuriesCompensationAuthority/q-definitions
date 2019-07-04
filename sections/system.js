const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['case-reference'],
    additionalProperties: false,
    properties: {
        'case-reference': {
            type: 'string',
            pattern: '^[0-9]{2}\\[0-9]{6}$',
            errorMessage: {
                pattern: 'Invalid case reference'
            }
        }
    },
    errorMessage: {
        required: 'Case reference is required'
    }
};

module.exports = output;
