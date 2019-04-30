const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'What police force is dealing with the crime?',
    type: 'object',
    required: ['q--which-scottish-police-force-is-investigating-the-crime'],
    additionalProperties: false,
    properties: {
        'q--which-scottish-police-force-is-investigating-the-crime': {
            type: 'integer',
            oneOf: [
                {
                    title: 'Argyll and West Dunbartonshire',
                    const: 12607027
                },
                {
                    title: 'Ayrshire',
                    const: 12157147
                },
                {
                    title: 'British Transport Police',
                    const: 10000001
                },
                {
                    title: 'Dumfries and Galloway',
                    const: 10000098
                },
                {
                    title: 'Edinburgh',
                    const: 13400412
                },
                {
                    title: 'Fife',
                    const: 10002424
                },
                {
                    title: 'Forth Valley',
                    const: 10000045
                },
                {
                    title: 'Greater Glasgow',
                    const: 12607023
                },
                {
                    title: 'Highland and Islands',
                    const: 10000193
                },
                {
                    title: 'Lanarkshire',
                    const: 12607028
                },
                {
                    title: 'North East',
                    const: 10000133
                },
                {
                    title: 'Renfrewshire and Inverclyde',
                    const: 12607026
                },
                {
                    title: 'Tayside',
                    const: 10000243
                },
                {
                    title: 'The Lothians and Scottish Borders',
                    const: 13400413
                }
            ],
            errorMessages: {
                required: 'Select a Police Scotland division '
            }
        }
    }
};

module.exports = output;
