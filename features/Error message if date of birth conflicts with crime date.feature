Feature: Error message if date of birth conflicts with crime date
    As; a system I want to display an error message
    If the user enters a date of birth which falls after the date of crime
    So that it is clear to them that a crime cannot have taken place before they were born

    Scenario: Date of birth conflicts with date of crime
        Given I am on p-applicant-enter-your-date-of-birth
        And I enter my date of birth
        When I click continue
        And it falls after the date for q-applicant-when-did-the-crime-happen
        Then I will see this error message "Date of birth must be before the date the crime happened"