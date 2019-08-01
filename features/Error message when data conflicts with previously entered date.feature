@MVP
Feature: Error message if entered date conflicts with crime data
    As a system I want to display an error message
    If the user enters a date which conflicts with crime data
    So that it is clear to them that a crime cannot violate the following constraints

    Scenario Outline: Date conflicts with crime data
        Given I am on <page>
        When The date entered for <date1> falls after the date entered for <date2>
        And I click continue
        Then I will see an <error>
        Examples:
            | page                                 | date1                                | date2                                    | error                                                                                            |
            | p-applicant-enter-your-date-of-birth | q-applicant-enter-your-date-of-birth | q-applicant-when-did-crime-happen        | Date of birth must be before the date the crime happened                                         |
            | p-applicant-enter-your-date-of-birth | q-applicant-enter-your-date-of-birth | q-applicant-when-did-the-crime-start     | Date of birth must be before the date the crime started                                          |
            | p-applicant-enter-your-date-of-birth | q-applicant-enter-your-date-of-birth | q-applicant-when-did-the-crime-stop      | Date of birth must be before the date the crime stopped                                          |
            | p-applicant-enter-your-date-of-birth | q-applicant-enter-your-date-of-birth | q--when-was-crime-reported               | Date of birth must be before the date the crime was reported                                     |
            | p-applicant-enter-your-date-of-birth | q-applicant-enter-your-date-of-birth | q--when-was-the-crime-reported-to-police | The date the crime happened must be the same as or before the date it was reported to the police |
            | p-applicant-when-did-the-crime-start | q-applicant-when-did-the-crime-start | q--when-was-the-crime-reported-to-police | The date the crime started must be before the date the crime was reported to the police          |
            | p-applicant-when-did-the-crime-stop  | q-applicant-when-did-the-crime-stop  | q--when-was-the-crime-reported-to-police | The date the crime stopped must be on or before the date the crime was reported to the police    |
            | p-applicant-when-did-the-crime-stop  | q-applicant-when-did-the-crime-stop  | q-applicant-when-did-the-crime-start     | The date the crime stopped must be on or before the date the crime was reported to the police    |

