const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Which English police force is investigating the crime?',
    type: 'object',
    required: ['q--which-english-police-force-is-investigating-the-crime'],
    additionalProperties: false,
    properties: {
        'q--which-english-police-force-is-investigating-the-crime': {
            type: 'integer',
            oneOf: [
                {
                    title: 'Avon And Somerset Constabulary',
                    const: 10000033
                },
                {
                    title: 'Bedfordshire Police',
                    const: 10000035
                },
                {
                    title: 'British Transport Police',
                    const: 10000001
                },
                {
                    title: 'Cambridgeshire Constabulary',
                    const: 10000039
                },
                {
                    title: 'Cheshire Constabulary',
                    const: 10000049
                },
                {
                    title: 'City Of London Police',
                    const: 10000059
                },
                {
                    title: 'Cleveland Police',
                    const: 10000066
                },
                {
                    title: 'Cumbria Constabulary',
                    const: 10000082
                },
                {
                    title: 'Derbyshire Constabulary',
                    const: 10000084
                },
                {
                    title: 'Devon and Cornwall Police',
                    const: 10000090
                },
                {
                    title: 'Dorset Police',
                    const: 10000093
                },
                {
                    title: 'Durham Constabulary',
                    const: 10000102
                },
                {
                    title: 'Essex Police',
                    const: 10000114
                },
                {
                    title: 'Gloucestershire Constabulary',
                    const: 10000128
                },
                {
                    title: 'Greater Manchester Police',
                    const: 10000140
                },
                {
                    title: 'Hampshire Constabulary',
                    const: 10000150
                },
                {
                    title: 'Hertfordshire Constabulary',
                    const: 10000153
                },
                {
                    title: 'Humberside Police',
                    const: 10000169
                },
                {
                    title: 'Kent Police',
                    const: 10000172
                },
                {
                    title: 'Lancashire Constabulary',
                    const: 10000175
                },
                {
                    title: 'Leicestershire Police',
                    const: 10000176
                },
                {
                    title: 'Lincolnshire Police',
                    const: 10000179
                },
                {
                    title: 'Merseyside Police',
                    const: 10000181
                },
                {
                    title: 'Metropolitan Barking',
                    const: 11809785
                },
                {
                    title: 'Metropolitan Barnet',
                    const: 11809719
                },
                {
                    title: 'Metropolitan Bexley',
                    const: 11809788
                },
                {
                    title: 'Metropolitan Brent',
                    const: 11809722
                },
                {
                    title: 'Metropolitan Bromley',
                    const: 11809760
                },
                {
                    title: 'Metropolitan Camden',
                    const: 11809694
                },
                {
                    title: 'Metropolitan Croydon',
                    const: 11809713
                },
                {
                    title: 'Metropolitan Ealing',
                    const: 11809743
                },
                {
                    title: 'Metropolitan Enfield',
                    const: 11809783
                },
                {
                    title: 'Metropolitan Greenwich',
                    const: 11809709
                },
                {
                    title: 'Metropolitan Hackney',
                    const: 11809763
                },
                {
                    title: 'Metropolitan Hammersmith',
                    const: 11809795
                },
                {
                    title: 'Metropolitan Haringey',
                    const: 11809738
                },
                {
                    title: 'Metropolitan Harrow',
                    const: 11809803
                },
                {
                    title: 'Metropolitan Havering',
                    const: 11809800
                },
                {
                    title: 'Metropolitan Hillingdon',
                    const: 11809775
                },
                {
                    title: 'Metropolitan Hounslow',
                    const: 11809780
                },
                {
                    title: 'Metropolitan Islington',
                    const: 11809765
                },
                {
                    title: 'Metropolitan Kensington',
                    const: 11809801
                },
                {
                    title: 'Metropolitan Kingston',
                    const: 11809865
                },
                {
                    title: 'Metropolitan Lambeth',
                    const: 11809693
                },
                {
                    title: 'Metropolitan Lewisham',
                    const: 11809698
                },
                {
                    title: 'Metropolitan Merton',
                    const: 11809861
                },
                {
                    title: 'Metropolitan Newham',
                    const: 11809701
                },
                {
                    title: 'Metropolitan Redbridge',
                    const: 11809782
                },
                {
                    title: 'Metropolitan Richmond',
                    const: 11809862
                },
                {
                    title: 'Metropolitan Southwark',
                    const: 11809691
                },
                {
                    title: 'Metropolitan Sutton',
                    const: 11809805
                },
                {
                    title: 'Metropolitan Tower Hamlets',
                    const: 11809767
                },
                {
                    title: 'Metropolitan Waltham Forest',
                    const: 11809726
                },
                {
                    title: 'Metropolitan Wandsworth',
                    const: 11809771
                },
                {
                    title: 'Metropolitan Westminster',
                    const: 11809683
                },
                {
                    title: 'Norfolk Constabulary',
                    const: 10000185
                },
                {
                    title: 'North Yorkshire Police',
                    const: 10000189
                },
                {
                    title: 'Northamptonshire Police',
                    const: 10000191
                },
                {
                    title: 'Northumbria Police',
                    const: 10000195
                },
                {
                    title: 'Nottinghamshire Police',
                    const: 10000199
                },
                {
                    title: 'South Yorkshire Police',
                    const: 10000218
                },
                {
                    title: 'Staffordshire Police',
                    const: 10000223
                },
                {
                    title: 'Suffolk Constabulary',
                    const: 10000233
                },
                {
                    title: 'Surrey Police',
                    const: 10000237
                },
                {
                    title: 'Sussex Police',
                    const: 10000240
                },
                {
                    title: 'Thames Valley Police',
                    const: 10000247
                },
                {
                    title: 'Warwickshire Police',
                    const: 10000274
                },
                {
                    title: 'West Mercia Police',
                    const: 10000279
                },
                {
                    title: 'West Midlands Police',
                    const: 10000285
                },
                {
                    title: 'West Yorkshire Police',
                    const: 10000291
                },
                {
                    title: 'Wiltshire Police',
                    const: 10000295
                }
            ]
        }
    },
    errorMessage: {
        required: {
            'q--which-english-police-force-is-investigating-the-crime':
                'Select a police force from the list'
        }
    }
};

module.exports = output;
