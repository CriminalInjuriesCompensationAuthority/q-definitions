const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-email-address'],
    additionalProperties: false,
    properties: {
        'q-applicant-email-address': {
            type: 'string',
            title: 'Enter your email address',
            description:
                "We'll use this to contact you about your application for example, to request more information.",
            maxLength: 50,
            errorMessages: {
                required: 'Enter your email address',
                maxLength: 'Email address must be 50 characters or less'
            }
        }
    }
};

module.exports = output;
