const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Enter your address',
    required: ['q-applicant-building-and-street', 'q-applicant-town-or-city'],
    additionalProperties: false,
    properties: {
        'q-applicant-building-and-street': {
            type: 'string',
            title: 'Building and street',
            maxLength: 60,
            errorMessages: {
                maxLength: 'First line of address must be less than 60 characters'
            }
        },
        'q-applicant-building-and-street2': {
            type: 'string',
            maxLength: 60,
            errorMessages: {
                maxLength: 'Second line of address must be less than 60 characters'
            }
        },
        'q-applicant-town-or-city': {
            type: 'string',
            title: 'Town or city',
            maxLength: 60,
            errorMessages: {
                required: 'Enter the town or city where you live',
                maxLength: 'Town or city must be 60 characters or less'
            }
        },
        'q-applicant-county': {
            type: 'string',
            title: 'County',
            maxLength: 60,
            errorMessages: {
                maxLength: 'County must be 60 characters or less'
            }
        },
        'q-applicant-postcode': {
            type: 'string',
            title: 'Postcode',
            maxLength: 10,
            errorMessages: {
                maxLength: 'Postcode must be 10 characters or less'
            }
        }
    }
};

module.exports = output;
