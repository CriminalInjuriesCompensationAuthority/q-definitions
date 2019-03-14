Feature: Error message if date of crime conflicts with date reported to police
    As a system I want to display an error message
    If the user enters a crime date that falls after date reported to police
    So that it is clear to the user a crime cannot happen after it has been reported to police

    Scenario: Date of crime conflicts with date reported to police
        Given I am on p-applicant-when-did-the-crime-happen
        And I enter the date of crime
        When I click continue
        And it falls after the date for q--when-was-the-crime-reported-to-police
        Then I will see this error message "The date the crime happened must be the same as or before the date it was reported to the police"