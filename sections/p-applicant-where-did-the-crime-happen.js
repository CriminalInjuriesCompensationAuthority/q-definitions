const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-where-did-the-crime-happen'],
    additionalProperties: false,
    properties: {
        'q-applicant-where-did-the-crime-happen': {
            title: 'Where did the crime happen?',
            type: 'string',
            oneOf: [
                {
                    title: 'England',
                    const: 'england'
                },
                {
                    title: 'Scotland',
                    const: 'scotland'
                },
                {
                    title: 'Wales',
                    const: 'wales'
                },
                {
                    title: 'Somewhere else',
                    const: 'somewhere-else'
                }
            ]
        }
    },
    errorMessage: {
        required: {
            'q-applicant-where-did-the-crime-happen':
                'Select England, Scotland, Wales or Somewhere else'
        }
    }
};

module.exports = output;
