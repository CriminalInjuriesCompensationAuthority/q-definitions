const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'What police force is dealing with the crime?',
    type: 'object',
    required: ['q--which-welsh-police-force-is-investigating-the-crime'],
    additionalProperties: false,
    properties: {
        'q--which-welsh-police-force-is-investigating-the-crime': {
            type: 'string',
            oneOf: [
                {
                    title: 'British Transport Police',
                    const: 'transport'
                },
                {
                    title: 'Dyfed-Powys',
                    const: 'dyfed'
                },
                {
                    title: 'Gwent',
                    const: 'gwent'
                },
                {
                    title: 'North Wales',
                    const: 'north-wales'
                },
                {
                    title: 'South Wales',
                    const: 'south-wales'
                }
            ],
            errorMessages: {
                required: 'Select a police force'
            }
        }
    }
};

module.exports = output;
