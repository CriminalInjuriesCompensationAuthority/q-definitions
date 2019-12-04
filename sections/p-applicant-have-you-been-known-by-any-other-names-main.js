const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-have-you-been-known-by-any-other-names'],
    additionalProperties: false,
    properties: {
        'q-applicant-have-you-been-known-by-any-other-names': {
            type: 'boolean',
            title: 'Has your child ever been known by any other names?'
        }
    },
    errorMessage: {
        required: {
            'q-applicant-have-you-been-known-by-any-other-names':
                'Select yes if your child has been known by any other names'
        }
    }
};

module.exports = output;
