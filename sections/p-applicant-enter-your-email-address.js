const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    additionalProperties: false,
    properties: {
        'q-applicant-enter-your-email-address': {
            type: 'string',
            title: 'Enter your email address',
            description:
                'We may use this to contact you about your application, for example, to request more information.',
            maxLength: 50,
            format: 'email',
            errorMessage: {
                maxLength: 'Email address must be 50 characters or less',
                format: 'Enter your email address, for example john.smith@email.com'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-enter-your-email-address':
                'Enter an email address in the correct format, like name@example.com'
        }
    }
};

module.exports = output;
