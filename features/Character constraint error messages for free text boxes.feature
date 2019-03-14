Feature: Character constraint error message for free text boxes
    As a user I will see an error message
    If I enter more than the maximum character count on a free text box
    So that I know I need to shorten my answer

    Scenario Outline: Error message for free text boxes
        Given I am answering <question>
        When I exceed the <maximum> character count
        Then I will see an <error> message

        Examples:
        | question                                                                  | maximum | error |
        | q-applicant-english-town-or-city                                          | 60      |
        | q-applicant-english-location                                              | 60      |
        | q-applicant-scottish-town-or-city                                         | 60      |
        | q-applicant-scottish-location                                             | 60      |
        | q-applicant-welsh-town-or-city                                            | 60      |
        | q-applicant-welsh-location                                                | 60      |
        | q-offender-enter-offenders-name                                           | 120     |
        | q-offender-describe-contact-with-offender                                 | 500     |
        | q-enter-your-previous-reference-number                                    | 15      | 
        | q-applicant-who-did-you-apply-to                                          | 50      |          
        | q-applicant-applied-for-other-compensation-briefly-explain-why-not        | 500     |
        | q-applicant-title                                                         | 6       |
        | q-applicant-first-name                                                    | 70      |
        | q-applicant-last-name                                                     | 70      |
        | q-applicant-what-other-names-have-you-used                                | 50      |
        | q-applicant-enter-your-email-address                                      | 50      |
        | q-applicant-building-and-street                                           | 60      |
        | q-applicant-building-and-street-2                                         | 60      |
        | q-applicant-town-or-city                                                  | 60      |
        | q-applicant-county                                                        | 60      |
        | q-applicant-postcode                                                      | 10      |
        | q-applicant-enter-your-telephone-number                                   | 20      |
        | q-applicant-select-reasons-for-the-delay-in-making-your-application       | 500     |
        | q-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police | 500     | 
        
        
        
        
        
        
        
        
         
        
        
        
        
        
        
        
        

