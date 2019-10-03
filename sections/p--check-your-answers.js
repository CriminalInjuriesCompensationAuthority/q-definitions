'use strict';

const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Check your answers',
    additionalProperties: false,
    properties: {
        'p-check-your-answers': {
            summaryInfo: {
                'p-applicant-enter-your-name': {displayName: 'Name'},
                'p-applicant-have-you-been-known-by-any-other-names': {
                    displayName: 'Have you been known by any other names?'
                },
                'p-applicant-what-other-names-have-you-used': {displayName: 'Other names'},
                'p-applicant-enter-your-date-of-birth': {displayName: 'Date of birth'},
                'p-applicant-enter-your-email-address': {displayName: 'Email address'},
                'p-applicant-enter-your-address': {displayName: 'Address'},
                'p-applicant-enter-your-telephone-number': {displayName: 'Telephone number'},
                'p-applicant-british-citizen-or-eu-national': {
                    displayName: 'Are you a British citizen or EU National?'
                },
                'p-applicant-are-you-18-or-over': {displayName: 'Are you 18 or over?'},
                'p-applicant-who-are-you-applying-for': {displayName: 'Who are you applying for?'},
                'p-applicant-were-you-a-victim-of-sexual-assault-or-abuse': {
                    displayName: 'Were you a victim of sexual assault or abuse?'
                },
                'p-applicant-select-the-option-that-applies-to-you': {
                    displayName: "Option you've selected"
                },
                'p-applicant-did-the-crime-happen-once-or-over-time': {
                    displayName: 'Did the crime happen once or over a period of time?'
                },
                'p-applicant-when-did-the-crime-happen': {
                    displayName: 'When did the crime happen?'
                },
                'p-applicant-when-did-the-crime-start': {displayName: 'When did the crime start?'},
                'p-applicant-when-did-the-crime-stop': {displayName: 'When did the crime stop?'},
                'p-applicant-select-reasons-for-the-delay-in-making-your-application': {
                    displayName: 'Reasons for the delay in making your application'
                },
                'p-applicant-where-did-the-crime-happen': {
                    displayName: 'Where did the crime happen?'
                },
                'p-applicant-where-in-england-did-it-happen': {
                    displayName: 'Where in England did it happen?'
                },
                'p-applicant-where-in-scotland-did-it-happen': {
                    displayName: 'Where in Scotland did it happen?'
                },
                'p-applicant-where-in-wales-did-it-happen': {
                    displayName: 'Where in Wales did it happen?'
                },
                'p-offender-do-you-know-the-name-of-the-offender': {
                    displayName: 'Do you know the name of the offender?'
                },
                'p-offender-enter-offenders-name': {displayName: "Offender's name"},
                'p-offender-describe-contact-with-offender': {
                    displayName: 'Contact with offender'
                },
                'p--was-the-crime-reported-to-police': {
                    displayName: 'Was the crime reported to police?'
                },
                'p--which-english-police-force-is-investigating-the-crime': {
                    displayName: 'Which police force is investigating?'
                },
                'p--which-police-scotland-division-is-investigating-the-crime': {
                    displayName: 'Which police force is investigating?'
                },
                'p--which-welsh-police-force-is-investigating-the-crime': {
                    displayName: 'Which police force is investigating?'
                },
                'p--when-was-the-crime-reported-to-police': {
                    displayName: 'When was the crime reported?'
                },
                'p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police': {
                    displayName: 'Reasons for delay in reporting crime'
                },
                'p--whats-the-crime-reference-number': {displayName: 'Crime reference number'},
                'p-applicant-have-you-applied-to-us-before': {
                    displayName: 'Have you applied before?'
                },
                'p-applicant-have-you-applied-for-or-received-any-other-compensation': {
                    displayName: 'Have you received other compensation?'
                },
                'p-applicant-other-compensation-details': {
                    displayName: 'Details of other compensation received'
                }
            }
        }
    }
};

module.exports = output;
