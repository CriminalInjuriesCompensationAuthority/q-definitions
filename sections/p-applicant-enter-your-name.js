const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Enter your name',
    type: 'object',
    required: ['q-applicant-title', 'q-applicant-first-name', 'q-applicant-last-name'],
    additionalProperties: false,
    properties: {
        'q-applicant-title': {
            title: 'Title',
            type: 'string',
            maxLength: 6,
            errorMessage: {
                maxLength: 'Title must be 6 characters or less'
            }
        },
        'q-applicant-first-name': {
            title: 'First name',
            type: 'string',
            maxLength: 70,
            errorMessage: {
                maxLength: 'First name must be 70 characters or less'
            }
        },
        'q-applicant-last-name': {
            title: 'Last name',
            type: 'string',
            maxLength: 70,
            errorMessage: {
                maxLength: 'Last name must be 70 characters or less'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-title': 'Enter your title',
            'q-applicant-first-name': 'Enter your first name',
            'q-applicant-last-name': 'Enter your last name'
        }
    }
};

module.exports = output;
