const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-british-citizen-or-eu-national'],
    additionalProperties: false,
    properties: {
        'q-applicant-british-citizen-or-eu-national': {
            type: 'boolean',
            title: 'Is your child a British or EU National?'
        }
    },
    errorMessage: {
        required: {
            'q-applicant-british-citizen-or-eu-national':
                'Select Yes if your child is a British or EU national'
        }
    }
};

module.exports = output;
