'use strict';

const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    required: ['q-applicant-are-you-18-or-over'],
    additionalProperties: false,
    properties: {
        'q-applicant-are-you-18-or-over': {
            type: 'boolean',
            title: 'Are you 18 or over?'
        }
    },
    errorMessage: {
        required: {
            'q-applicant-are-you-18-or-over': 'Select yes if you are 18 or over'
        }
    }
};

module.exports = output;
