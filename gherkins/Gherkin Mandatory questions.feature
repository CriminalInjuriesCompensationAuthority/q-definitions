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
            | Page                                                                  | Question                                                              | Error                                                                            |
            | p-applicant-british-citizen-or-eu-national                            | q-applicant-british-citizen-or-eu-national                            | Select yes if you are a British citizen or EU national                           |
            | p-applicant-are-you-18-or-over                                        | q-applicant-are-you-18-or-over                                        | Select yes if you are over 18                                                    |
            | p-applicant-who-are-you-applying-for                                  | q-applicant-who-are-you-applying-for                                  | Select Myself if you are the person applying for compensation                    |
            | p-applicant-were-you-a-victim-of-sexual-assault-or-abuse              | q-applicant-were-you-a-victim-of-sexual-assault-or-abuse              | Select yes if you were a victim of sexual assault or abuse                       |
            | p-applicant-select-the-option-that-applies-to-you                     | q-applicant-option                                                    |                                                                                  |
            | p--was-the-crime-reported-to-police                                   | q--was-crime-reported-to-police                                       | Select yes if the crime was reported to the police                               |
            | p--when-was-the-crime-reported-to-police                              | q--when-was-the-crime-reported-to-police                              | Enter the date the crime was reported to the police                              |
            | p--whats-the-crime-reference-number                                   | q--whats-the-crime-reference-number                                   | Enter the crime reference number                                                 |
            | p-applicant-did-the-crime-happen-once-or-over-time                    | q-applicant-did-the-crime-happen-once-or-over-time                    | Select Once or Over a period of time                                             |
            | p-applicant-when-did-the-crime-happen                                 | q-applicant-when-did-the-crime-happen                                 | Enter the date the crime happened and include a day, month and year              |
            | p-applicant-when-did-the-crime-start                                  | q-applicant-when-did-the-crime-start                                  | Enter the date the crime started and include a month and year                    |
            | p-applicant-when-did-the-crime-stop                                   | q-applicant-when-did-the-crime-stop                                   | Enter the date the crime stopped and include a month and year                    |
            | p-applicant-where-did-the-crime-happen                                | q-applicant-where-did-the-crime-happen                                |                                                                                  |                                                                                
            | p--what-police-force-is-dealing-with-the-crime                        | q--what-police-force-is-dealing-with-the-crime                        |                                                                                  |
            | p-offender-do-you-know-the-name-of-the-offender                       | q-offender-do-you-know-the-name-of-the-offender                       | Select yes if you know the offender's name                                       |
            | p-offender-enter-offenders-name                                       | q-offender-enter-offenders-name                                       | Enter the offender's name                                                        |
            | p-applicant-have-you-applied-to-us-before                             | q-applicant-have-you-applied-to-us-before                             |                                                                                  |                                                                                  
            | p-applicant-have-you-applied-for-or-received-any-other-compensation   | q-applicant-have-you-applied-for-or-received-any-other-compensation   |                                                                                  |                                                                                  
            | p-applicant-have-you-applied-for-or-received-any-other-compensation   | q-who-did-you-apply-to                                                |                                                                                  |
            | p-applicant-have-you-applied-for-or-received-any-other-compensation   | q-how-much-did-you-received                                           |                                                                                  |
            | p-applicant-have-you-applied-for-or-received-any-other-compensation   | q-briefly-explain-why-not                                             |                                                                                  |
            | p-applicant-enter-your-name                                           | q-applicant-enter-your-first-name                                     | Enter your first name                                                            |
            | p-applicant-enter-your-name                                           | q-applicant-enter-your-last-name                                      | Enter your last name                                                             |
            | p-applicant-have-you-been-known-by-any-other-names                    | q-applicant-have-you-been-known-by-any-other-names                    | Select yes if you have been known by any other names                             |
            | p-applicant-what-other-names-have-you-used                            | q-applicant-what-other-names-have-you-used                            | Enter the other names you have used                                              |
            | p-applicant-enter-your-date-of-birth                                  | q-applicant-enter-your-date-of-birth                                  | Enter your date of birth                                                         |
            | p-applicant-enter-your-email-address                                  | q-applicant-enter-your-email-address                                  | Enter your email address                                                         |
            | p-applicant-enter-your-address                                        | q-applicant-building-and-street                                       | Enter the building and street where you live                                     |
            | p-applicant-enter-your-address                                        | q-applicant-town-or-city                                              | Enter the town or city where you live                                            |
            | p-applicant-enter-your-telephone-number                               | p-applicant-enter-your-telephone-number                               | Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192 |

    Scenario: User has not answered a mandatory question
        Given I am on p-offender-describe-contact-with-offender
        When I click continue
        And I have not answered q-offender-describe-contact-with-offender
        Or I have not answered q-offender-i-have-no-contact-with-offender
        Then I will see this error message "Enter details of any contact you have with the offender"
