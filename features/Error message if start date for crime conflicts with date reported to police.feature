@MVP-not-finished
Feature: Error message if start date for crime conflicts with date reported to police
    As a system I want to display an error message
    If the user enters a start date for a crime that falls after date reported to police
    So that is is clear to the user a crime cannot start after it has been reported to police

    Scenario: Start date of crime conflicts with date reported to police
        Given I am on p-applicant-when-did-the-crime-start
        And I enter the start date
        When I click continue
        And it falls after the date for q--when-was-the-crime-reported-to-police
        Then I will see this error message "The date the crime started must be before the date the crime was reported to the police"
