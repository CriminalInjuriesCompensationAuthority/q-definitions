@MVP-not-finished
Feature: Error message if date of birth conflicts with crime stop date
    As a system I want to display an error message
    If the user enters a date of birth which falls after the crime stop date
    So that it is clear to them that a crime cannot have stopped before they were born

    Scenario: Date of birth conflicts with crime stop date
        Given I am on p-applicant-enter-your-date-of-birth
        And I enter my date of birth
        When I click continue
        And it falls after the date for q-applicant-when-did-the-crime-stop
        Then I will see this error message "Date of birth must be before the date the crime happened"
