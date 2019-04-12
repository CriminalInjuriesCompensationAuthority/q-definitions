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
            errorMessages: {
                required: 'Enter the building and street where you live'
            }
        },
        'q-applicant-building-and-street2': {
            type: 'string'
        },
        'q-applicant-town-or-city': {
            type: 'string',
            title: 'Town or city',
            maxLength: 60,
            errorMessages: {
                required: 'Enter the town or city where you live'
            }
        },
        'q-applicant-county': {
            type: 'string',
            title: 'County',
            maxLength: 60
        },
        'q-applicant-postcode': {
            type: 'string',
            title: 'Postcode',
            maxLength: 10
        }
    }
};

module.exports = output;
