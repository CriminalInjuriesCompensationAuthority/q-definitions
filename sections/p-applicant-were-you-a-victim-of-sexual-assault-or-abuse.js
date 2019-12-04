const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-were-you-a-victim-of-sexual-assault-or-abuse'],
    additionalProperties: false,
    properties: {
        'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse': {
            type: 'boolean',
            title: 'Is your claim about sexual assault or abuse?'
        }
    },
    errorMessage: {
        required: {
            'q-applicant-were-you-a-victim-of-sexual-assault-or-abuse':
                'Select yes if you were a victim of sexual assault or abuse'
        }
    }
};

module.exports = output;
