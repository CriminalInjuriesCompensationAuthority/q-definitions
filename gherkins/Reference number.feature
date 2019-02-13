Feature: User submits their application and a reference number is generated
    As a system I want to generate a CICA reference
    When a user submits their application
    So that both CICA and the user can identify the claim

    Scenario: User submits their application and is advised of reference number
        Given the user is on p--check-your-answers
        When they click agree and submit
        And they have answered all manadatory questions
        Then CICA will create a CICA reference
        And display it on p--confirmation
        And issue an email to the applicant

