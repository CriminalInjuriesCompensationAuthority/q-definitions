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
            errorMessage: {
                maxLength: 'First line of address must be less than 60 characters'
            }
        },
        'q-applicant-building-and-street-2': {
            type: 'string',
            title: `<span class='govuk-visually-hidden'>Building and street line 2`,
            maxLength: 60,
            errorMessage: {
                maxLength: 'Second line of address must be less than 60 characters'
            }
        },
        'q-applicant-town-or-city': {
            type: 'string',
            title: 'Town or city',
            maxLength: 32,
            errorMessage: {
                maxLength: 'Town or city must be 60 characters or less'
            }
        },
        'q-applicant-county': {
            type: 'string',
            title: 'County (optional)',
            maxLength: 32,
            errorMessage: {
                maxLength: 'County must be 60 characters or less'
            }
        },
        'q-applicant-postcode': {
            type: 'string',
            title: 'Postcode (optional)',
            maxLength: 10,
            errorMessage: {
                maxLength: 'Postcode must be 10 characters or less'
            }
        }
    },
    errorMessage: {
        required: {
            'q-applicant-building-and-street': 'Enter the building and street where you live',
            'q-applicant-town-or-city': 'Enter the town or city where you live'
        }
    }
};

module.exports = output;
