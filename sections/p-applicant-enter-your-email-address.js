const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    properties: {
        'q-applicant-enter-your-email-address': {
            type: 'string',
            title: 'Enter your email address',
            description:
                'We may use this to contact you if we need to clarify something on your application form (optional).',
            maxLength: 50,
            format: 'email',
            errorMessage: {
                maxLength: 'Email address must be 50 characters or less',
                format: 'Enter an email address in the correct format, like name@example.com'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-enter-your-email-address': 'Enter an email address'
        }
    }
};

module.exports = output;
