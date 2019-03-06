Feature: Error message if date of birth conflicts with date reported to police
    As a system I want to display an error message
    If the user enters a date of birth that falls after the date they reported it to the police
    So that it is clear to them that an incident cannot have been reported before they were born

    Scenario: Date of birth conflicts with date reported to police
        Given I am on p-applicant-enter-your-date-of-birth
        And I enter my date of birth
        When I click continue
        And it falls after the date for q--when-was-crime-reported
        Then I will see this error message