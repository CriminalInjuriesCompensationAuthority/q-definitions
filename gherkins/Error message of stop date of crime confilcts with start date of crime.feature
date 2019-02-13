Feature: Error message of stop date of crime confilcts with start date of crime
    As a system I want to display an error message
    If the user enters a stop date that falls before the start date
    So that it is clear to user a crime cannot stop before the crime started

    Scenario: Stop date of crime conflicts with start date of crime
        Given I am on p-applicant-when-did-the-crime-stop
        And I enter the stop date
        When I click continue
        And it falls before the date for q-applicant-when-did-the-crime-start
        Then I will see this error message