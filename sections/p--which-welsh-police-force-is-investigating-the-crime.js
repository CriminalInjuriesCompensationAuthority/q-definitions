const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Which Welsh police force is investigating the crime?',
    type: 'object',
    required: ['q--which-welsh-police-force-is-investigating-the-crime'],
    additionalProperties: false,
    properties: {
        'q--which-welsh-police-force-is-investigating-the-crime': {
            type: 'integer',
            oneOf: [
                {
                    title: 'British Transport Police',
                    const: 10000001
                },
                {
                    title: 'Dyfed-Powys',
                    const: 10000109
                },
                {
                    title: 'Gwent',
                    const: 10000147
                },
                {
                    title: 'North Wales',
                    const: 10000187
                },
                {
                    title: 'South Wales',
                    const: 10000215
                }
            ]
        }
    },
    errorMessage: {
        required: {
            'q--which-welsh-police-force-is-investigating-the-crime': 'Select a police force'
        }
    }
};

module.exports = output;
