const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Where in Scotland did it happen?',
    required: ['q-applicant-scottish-town-or-city', 'q-applicant-scottish-location'],
    additionalProperties: false,
    properties: {
        'q-applicant-scottish-town-or-city': {
            type: 'string',
            title: 'Town or city',
            maxLength: 60,
            errorMessage: {
                maxLength: 'Town or city must be 60 characters or less'
            }
        },
        'q-applicant-scottish-location': {
            type: 'string',
            title: 'Location',
            description:
                'For example, the name of a street, business, building or nearby local landmark. You can enter more than one.',
            maxLength: 60,
            errorMessage: {
                maxLength: 'Location must be 60 characters or less'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-scottish-location':
                'Enter the name of a street, business, building or nearby local landmark',
            'q-applicant-scottish-town-or-city': 'Enter the town or city where the crime happened'
        }
    }
};

module.exports = output;
