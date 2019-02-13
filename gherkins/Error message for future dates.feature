Feature: Error message for future dates
    As a system I will display an error message
    If the user enters a future date
    So that CICA will have the most accurate dates upon submission

    Scenario Outline: User has entered a future date
        Given I am on <Page>
        When I click continue
        And I have entered a future date for the <Question>
        Then I will see an <Error>

        Example:
            | Page                                       | Question                                   | Error                                                               |
            | p--when-was-the-crime-reported-to-police   | q--when-was-the-crime-reported-to-police   | The date the crime was reported to the police must be in the past   |
            | p-applicant-when-did-the-crime-happen      | q-applicant-when-did-the-crime-happen      | The date the crime happened must be in the past                     |
            | p-applicant-when-did-the-crime-start       | q-applicant-when-did-the-crime-start       | The date the crime started must be in the past                      |
            | p-applicant-when-did-the-crime-stop        | q-applicant-when-did-the-crime-stop        | The date the crime stopped must be in the past                      |  

