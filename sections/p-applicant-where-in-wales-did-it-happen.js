const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Where in Wales did it happen?',
    required: ['q-applicant-welsh-town-or-city', 'q-applicant-welsh-location'],
    additionalProperties: false,
    properties: {
        'q-applicant-welsh-town-or-city': {
            type: 'string',
            title: 'Town or city',
            maxLength: 60,
            errorMessage: {
                maxLength: 'Town or city must be 60 characters or less'
            }
        },
        'q-applicant-welsh-location': {
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
            'q-applicant-welsh-location':
                'Enter the name of a street, business, building or nearby local landmark',
            'q-applicant-welsh-town-or-city': 'Enter the town or city where the crime happened'
        }
    }
};

module.exports = output;
