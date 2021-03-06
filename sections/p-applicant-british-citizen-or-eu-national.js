const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-british-citizen-or-eu-national'],
    additionalProperties: false,
    properties: {
        'q-applicant-british-citizen-or-eu-national': {
            type: 'boolean',
            title: 'Are you a British citizen or EU national?'
        }
    },
    errorMessage: {
        required: {
            'q-applicant-british-citizen-or-eu-national':
                'Select yes if you are a British citizen or EU national'
        }
    }
};

module.exports = output;
