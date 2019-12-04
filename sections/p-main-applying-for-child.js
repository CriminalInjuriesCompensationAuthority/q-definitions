const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-main-applying-for-child'],
    additionalProperties: false,
    properties: {
        'q-main-applying-for-child': {
            type: 'boolean',
            title: 'Are you a parent applying for your child?',
            description: 'They must be under 18.'
        }
    },
    errorMessage: {
        required: {
            'q-main-applying-for-child': 'Select Yes if you are a parent applying for a child'
        }
    }
};

module.exports = output;
