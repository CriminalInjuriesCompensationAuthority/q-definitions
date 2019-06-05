const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Enter your name',
    type: 'object',
    required: ['q-applicant-name-title', 'q-applicant-name-firstname', 'q-applicant-name-lastname'],
    additionalProperties: false,
    properties: {
        'q-applicant-name-title': {
            title: 'Title',
            type: 'string',
            maxLength: 6,
            errorMessage: {
                maxLength: 'Title must be 6 characters or less'
            }
        },
        'q-applicant-name-firstname': {
            title: 'First name',
            type: 'string',
            maxLength: 70,
            errorMessage: {
                maxLength: 'First name must be 70 characters or less'
            }
        },
        'q-applicant-name-lastname': {
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
            'q-applicant-name-title': 'Enter your title',
            'q-applicant-name-firstname': 'Enter your first name',
            'q-applicant-name-lastname': 'Enter your last name'
        }
    }
};

module.exports = output;
