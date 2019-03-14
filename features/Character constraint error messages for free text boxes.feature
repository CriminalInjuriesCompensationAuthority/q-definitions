Feature: Character constraint error message for free text boxes
    As a user I will see an error message
    If I enter more than the maximum character count on a free text box
    So that I know I need to shorten my answer

    Scenario Outline: Error message for free text boxes
        Given I am answering <question>
        When I exceed the <maximum> character count
        Then I will see an <error> message

        Examples:
        | question                                                                  | maximum | error                                                                               |
        | q-applicant-english-town-or-city                                          | 60      | Town or city must be 60 characters or less                                          |
        | q-applicant-english-location                                              | 60      | Location must be 60 characters or less                                              |
        | q-applicant-scottish-town-or-city                                         | 60      | Town or city must be 60 characters or less                                          |
        | q-applicant-scottish-location                                             | 60      | Location must be 60 characters or less                                              |
        | q-applicant-welsh-town-or-city                                            | 60      | Town or city must be 60 characters or less                                          |
        | q-applicant-welsh-location                                                | 60      | Location must be 60 characters or less                                              |
        | q-offender-enter-offenders-name                                           | 120     | Offender's name must be 120 characters or less                                      |
        | q-offender-describe-contact-with-offender                                 | 500     | Description must be 500 characters or less                                          |
        | q-enter-your-previous-reference-number                                    | 50      | Previous reference number must be 50 characters or less                             |
        | q-applicant-who-did-you-apply-to                                          | 50      | Who you applied to or received compensation from must be 50 characters or less      |      
        | q-applicant-applied-for-other-compensation-briefly-explain-why-not        | 500     | Explanation must be 500 characters or less                                          |
        | q-applicant-title                                                         | 6       | Title must be 6 characters or less                                                  |
        | q-applicant-first-name                                                    | 70      | First name must be 70 characters or less                                            |
        | q-applicant-last-name                                                     | 70      | Last name must be 70 characters or less                                             |
        | q-applicant-what-other-names-have-you-used                                | 50      | Other names you have used must be 50 characters or less                             |
        | q-applicant-enter-your-email-address                                      | 50      | Email address must be 50 characters or less                                         |
        | q-applicant-building-and-street                                           | 60      | First line of address must be less than 60 characters                               |
        | q-applicant-building-and-street-2                                         | 60      | Second line of address must be less than 60 characters                              |
        | q-applicant-town-or-city                                                  | 60      | Town or city must be 60 characters or less                                          |
        | q-applicant-county                                                        | 60      | County must be 60 characters or less                                                |
        | q-applicant-postcode                                                      | 10      | Postcode must be 10 characters or less                                              |
        | q-applicant-enter-your-telephone-number                                   | 20      | Telephone number must be 20 characters or less                                      |
        | q-applicant-select-reasons-for-the-delay-in-making-your-application       | 500     | Explanation must be 500 characters or less                                          |
        | q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police | 500     | Explanation must be 500 characters or less                                          |
        | q--whats-the-crime-reference-number                                       | 30      | Crime reference number must be 30 characters or less                                |
        | q-how-much-was-award                                                      | 50      | Award amount must be 50 characters or less                                          |
        | q-when-will-you-find-out                                                  | 50      | When will you find out? must be 50 characters or less                               |
        
        
        
        
        
        
        
        
         
        
        
        
        
        
        
        
        

