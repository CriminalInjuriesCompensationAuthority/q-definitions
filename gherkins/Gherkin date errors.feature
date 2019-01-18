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

Feature: Error message if date of birth conflicts with crime date
    As a system I want to display an error message
    If the user enters a date of birth which falls after the date of crime
    So that it is clear to them that a crime cannot have taken place before they were born

    Scenario: Date of birth conflicts with date of crime
        Given I am on p-applicant-enter-your-date-of-birth
        And I enter my date of birth
        When I click continue
        And it falls after the date for q-applicant-when-did-the-crime-happen
        Then I will see this error message

Feature: Error message if date of birth conflicts with crime start date
    As a system I want to display an error message
    If the user enters a date of birth which falls after the crime start date
    So that it is clear to them that a crime cannot have started before they were born

    Scenario: Date of birth conflicts with crime start date
        Given I am on p-applicant-enter-your-date-of-birth
        And I enter my date of birth
        When I click continue
        And it falls after the date for q-applicant-when-did-the-crime-start
        Then I will see this error message

Feature: Error message if date of birth conflicts with crime stop date
    As a system I want to display an error message
    If the user enters a date of birth which falls after the crime stop date
    So that it is clear to them that a crime cannot have stopped before they were born

    Scenario: Date of birth conflicts with crime stop date
        Given I am on p-applicant-enter-your-date-of-birth
        And I enter my date of birth
        When I click continue
        And it falls after the date for q-applicant-when-did-the-crime-stop
        Then I will see this error message

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

Feature: Error message if date of crime conflicts with date reported to police
    As a system I want to display an error message
    If the user enters a crime date that falls after date reported to police
    So that it is clear to the user a crime cannot happen after it has been reported to police

    Scenario: Date of crime conflicts with date reported to police
        Given I am on p-applicant-when-did-the-crime-happen
        And I enter the date of crime
        When I click continue
        And it falls after the date for q--when-was-the-crime-reported-to-police
        Then I will see this error message

Feature: Error message if start date for crime conflicts with date reported to police
    As a system I want to display an error message
    If the user enters a start date for a crime that falls after date reported to police
    So that is is clear to the user a crime cannot start after it has been reported to police

    Scenario: Start date of crime conflicts with date reported to police
        Given I am on p-applicant-when-did-the-crime-start
        And I enter the start date
        When I click continue
        And it falls after the date for q--when-was-the-crime-reported-to-police
        Then I will see this error message

Feature: Error message if stop date for crime conflicts with date reported to police
    As a system I want to display an error message
    If the user enters a stop date for a crime that falls after date reported to police
    So that is is clear to the user a crime cannot stop after it has been reported to police

    Scenario: Stop date of crime conflicts with date reported to police
        Given I am on p-applicant-when-did-the-crime-stop
        And I enter the stop date
        When I click continue
        And it falls after the date for q--when-was-the-crime-reported-to-police
        Then I will see this error message

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

