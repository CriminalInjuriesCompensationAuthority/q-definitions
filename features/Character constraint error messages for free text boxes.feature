@MVP
Feature: Character constraint error message for free text boxes
    As a user I will see an error message
    If I enter more than the maximum character count on a free text box
    So that I know I need to shorten my answer

    Scenario Outline: Error message for free text boxes
        Given I answer all the questions on <page>
        When I exceed <maximum> characters when answering <question>
        And I click continue
        Then I will see an <error>

        Examples:
        | page                                                                      | question                                                                  | maximum | error                                                                               |
        | p-applicant-where-in-england-did-it-happen                                | q-applicant-english-town-or-city                                          | 60      | Town or city must be 60 characters or less                                          |
        | p-applicant-where-in-england-did-it-happen                                | q-applicant-english-location                                              | 60      | Location must be 60 characters or less                                              |
        | p-applicant-where-in-scotland-did-it-happen                               | q-applicant-scottish-town-or-city                                         | 60      | Town or city must be 60 characters or less                                          |
        | p-applicant-where-in-scotland-did-it-happen                               | q-applicant-scottish-location                                             | 60      | Location must be 60 characters or less                                              |
        | p-applicant-where-in-wales-did-it-happen                                  | q-applicant-welsh-town-or-city                                            | 60      | Town or city must be 60 characters or less                                          |
        | p-applicant-where-in-wales-did-it-happen                                  | q-applicant-welsh-location                                                | 60      | Location must be 60 characters or less                                              |
        | p-offender-enter-offenders-name                                           | q-offenders-name                                                          | 120     | Offender's name must be 120 characters or less                                      |
        | p-offender-describe-contact-with-offender                                 | q-offender-contact-description                                            | 500     | Description must be 500 characters or less                                          |
        | p-applicant-have-you-applied-to-us-before                                 | q-enter-your-previous-reference-number                                    | 50      | Previous reference number must be 50 characters or less                             |
        | p-applicant-other-compensation-details                                    | q-applicant-who-did-you-apply-to                                          | 50      | Who you applied to or received compensation from must be 50 characters or less      |
        | p-applicant-have-you-applied-for-or-received-any-other-compensation       | q-applicant-applied-for-other-compensation-briefly-explain-why-not        | 499     | Explanation must be 500 characters or less                                          |
        | p-applicant-enter-your-name                                               | q-applicant-name-title                                                    | 6       | Title must be 6 characters or less                                                  |
        | p-applicant-enter-your-name                                               | q-applicant-name-firstname                                                | 70      | First name must be 70 characters or less                                            |
        | p-applicant-enter-your-name                                               | q-applicant-name-lastname                                                 | 70      | Last name must be 70 characters or less                                             |
        | p-applicant-what-other-names-have-you-used                                | q-applicant-what-other-names-have-you-used                                | 50      | Other names you have used must be 50 characters or less                             |
        | p-applicant-enter-your-email-address                                      | q-applicant-email-address                                                 | 50      | Email address must be 50 characters or less                                         |
        | p-applicant-enter-your-address                                            | q-applicant-building-and-street                                           | 60      | First line of address must be less than 60 characters                               |
        | p-applicant-enter-your-address                                            | q-applicant-building-and-street2                                          | 60      | Second line of address must be less than 60 characters                              |
        | p-applicant-enter-your-address                                            | q-applicant-town-or-city                                                  | 60      | Town or city must be 60 characters or less                                          |
        | p-applicant-enter-your-address                                            | q-applicant-county                                                        | 60      | County must be 60 characters or less                                                |
        | p-applicant-enter-your-address                                            | q-applicant-postcode                                                      | 10      | Postcode must be 10 characters or less                                              |
        | p-applicant-enter-your-telephone-number                                   | q-applicant-telephone-number                                              | 20      | Telephone number must be 20 characters or less                                      |
        | p-applicant-select-reasons-for-the-delay-in-making-your-application       | q-applicant-select-reasons-for-the-delay-in-making-your-application       | 500     | Explanation must be 500 characters or less                                          |
        | p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police | q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police | 500     | Explanation must be 500 characters or less                                          |
        | p--whats-the-crime-reference-number                                       | q-whats-the-crime-reference-number                                        | 30      | Crime reference number must be 30 characters or less                                |
        | p-applicant-other-compensation-details                                    | q-how-much-was-award                                                      | 50      | Award amount must be 50 characters or less                                          |
        | p-applicant-other-compensation-details                                    | q-when-will-you-find-out                                                  | 50      | When will you find out must be 50 characters or less                                |

















