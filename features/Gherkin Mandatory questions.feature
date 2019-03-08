Feature: Error messages on mandatory questions
    As a user I will see an error message
    If I attempt to continue without answering the mandatory question on the page
    So that CICA gets the informaton required to casework the application
    

    Scenario Outline: User has not answered a mandatory question
        Given I am on <Page>
        When I click continue
        And I have not answered the <Question>
        Then I will see an <Error>

        Examples:
            | Page                                                                  | Question                                                              | Error                                                                                           |
            | p-applicant-british-citizen-or-eu-national                            | q-applicant-british-citizen-or-eu-national                            | Select yes if you are a British citizen or EU national                                          |
            | p-applicant-are-you-18-or-over                                        | q-applicant-are-you-18-or-over                                        | Select yes if you are over 18                                                                   |
            | p-applicant-who-are-you-applying-for                                  | q-applicant-who-are-you-applying-for                                  | Select Myself if you are the person applying for compensation                                   |
            | p-applicant-were-you-a-victim-of-sexual-assault-or-abuse              | q-applicant-were-you-a-victim-of-sexual-assault-or-abuse              | Select yes if you were a victim of sexual assault or abuse                                      |
            | p-applicant-select-the-option-that-applies-to-you                     | q-applicant-option                                                    | Select either Option 1 or Option 2                                                                                                |
            | p--was-the-crime-reported-to-police                                   | q--was-crime-reported-to-police                                       | Select yes if the crime was reported to the police                                              |
            | p--when-was-the-crime-reported-to-police                              | q--when-was-the-crime-reported-to-police                              | Enter the date the crime was reported to the police                                             |
            | p--whats-the-crime-reference-number                                   | q--whats-the-crime-reference-number                                   | Enter the crime reference number                                                                |
            | p-applicant-did-the-crime-happen-once-or-over-time                    | q-applicant-did-the-crime-happen-once-or-over-time                    | Select Once or Over a period of time                                                            |
            | p-applicant-when-did-the-crime-happen                                 | q-applicant-when-did-the-crime-happen                                 | Enter the date the crime happened and include a day, month and year                             |
            | p-applicant-when-did-the-crime-start                                  | q-applicant-when-did-the-crime-start                                  | Enter the date the crime started and include a month and year                                   |
            | p-applicant-when-did-the-crime-stop                                   | q-applicant-when-did-the-crime-stop                                   | Enter the date the crime stopped and include a month and year                                   |
            | p-applicant-where-did-the-crime-happen                                | q-applicant-where-did-the-crime-happen                                | Select England, Scotland, Wales or Somewhere else                                               |
            | p-applicant-where-in-england-did-it-happen                            | q-applicant-english-town-or-city                                      | Enter the town or city where the crime happened                                                 |
            | p-applicant-where-in-england-did-it-happen                            | q-applicant-english-location                                          | Enter the name of a street, business, building or nearby local landmark                         |
            | p-applicant-where-in-scotland-did-it-happen                           | q-applicant-scottish-town-or-city                                     | Enter the town or city where the crime happened                                                 |
            | p-applicant-where-in-scotland-did-it-happen                           | q-applicant-scottish-location                                         | Enter the name of a street, business, building or nearby local landmark                         |
            | p-applicant-where-in-wales-did-it-happen                              | q-applicant-welsh-town-or-city                                        | Enter the town or city where the crime happened                                                 |
            | p-applicant-where-in-wales-did-it-happen                              | q-applicant-welsh-location                                            | Enter the name of a street, business, building or nearby local landmark                         |
            | p--which-english-police-force-is-investigating-the-crime              | q--which-english-police-force-is-investigating-the-crime              | Select a police force from the list                                                             |
            | p--which-police-scotland-division-is-investigating-the-crime          | q--which-police-scotland-division-is-investigating-the-crime          | Select a Police Scotland division                                                               |
            | p--which-welsh-police-force-is-investigating-the-crime                | q--which-welsh-police-force-is-investigating-the-crime                | Select a police force                                                                           |
            | p-offender-do-you-know-the-name-of-the-offender                       | q-offender-do-you-know-the-name-of-the-offender                       | Select yes if you know the offender's name                                                      |
            | p-offender-enter-offenders-name                                       | q-offender-enter-offenders-name                                       | Enter the offender's name                                                                       |
            | p-applicant-have-you-applied-to-us-before                             | q-applicant-have-you-applied-to-us-before                             | Select yes if you have applied to us before                                                     |                                                                                  
            | p-applicant-have-you-applied-for-or-received-any-other-compensation   | q-applicant-have-you-applied-for-or-received-any-other-compensation   | Select yes if you have applied for or received another form of compensation                     |
            | p-applicant-have-you-applied-for-or-received-any-other-compensation   | q-briefly-explain-why-not                                             | Explain why you did not apply for or receive any other form of compensation                     |
            | p-applicant-other-compensation-details                                | q-applicant-who-did-you-apply-to                                      | Enter the source of the other compensation, for example, the name of a person, company or court |
            | p-applicant-other-compensation-details                                | q-applicant-how-much-did-you-receive                                  | Enter the amount of compensation you got                                                        |
            | p-applicant-enter-your-name                                           | q-applicant-enter-your-first-name                                     | Enter your first name                                                                           |
            | p-applicant-enter-your-name                                           | q-applicant-enter-your-last-name                                      | Enter your last name                                                                            |
            | p-applicant-have-you-been-known-by-any-other-names                    | q-applicant-have-you-been-known-by-any-other-names                    | Select yes if you have been known by any other names                                            |
            | p-applicant-what-other-names-have-you-used                            | q-applicant-what-other-names-have-you-used                            | Enter the other names you have used                                                             |
            | p-applicant-enter-your-date-of-birth                                  | q-applicant-enter-your-date-of-birth                                  | Enter your date of birth                                                                        |
            | p-applicant-enter-your-email-address                                  | q-applicant-enter-your-email-address                                  | Enter your email address                                                                        |
            | p-applicant-enter-your-address                                        | q-applicant-building-and-street                                       | Enter the building and street where you live                                                    |
            | p-applicant-enter-your-address                                        | q-applicant-town-or-city                                              | Enter the town or city where you live                                                           |
            | p-applicant-enter-your-telephone-number                               | q-applicant-enter-your-telephone-number                               | Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192                |

