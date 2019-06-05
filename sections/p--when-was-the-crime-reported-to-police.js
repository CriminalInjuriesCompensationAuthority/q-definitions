const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q--when-was-the-crime-reported-to-police'],
    additionalProperties: false,
    properties: {
        'q--when-was-the-crime-reported-to-police': {
            type: 'string',
            format: 'date-time',
            title: 'When was the crime reported to the police?',
            description: 'For example, 31 3 2018. You can enter an approximate date.',
            errorMessage: {
                format: 'The date the crime was reported to the police must be in the past'
            }
        }
    },
    errorMessage: {
        required: {
            'q--when-was-the-crime-reported-to-police':
                'Enter the date the crime was reported to the police'
        }
    }
};

module.exports = output;
