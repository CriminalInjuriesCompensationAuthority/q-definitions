const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-enter-your-telephone-number'],
    additionalProperties: false,
    properties: {
        'q-applicant-enter-your-telephone-number': {
            type: 'string',
            title: 'Enter your telephone number',
            description:
                'We may use this to contact you if we need to clarify something on your application form.',
            maxLength: 20,
            pattern: '^(\\+|\\d)([\\d\\s\\(\\)\\+\\-\\#]){1,19}$',
            errorMessage: {
                maxLength: 'Telephone number must be 20 characters or less',
                pattern:
                    'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-enter-your-telephone-number':
                'Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192'
        }
    }
};

module.exports = output;
