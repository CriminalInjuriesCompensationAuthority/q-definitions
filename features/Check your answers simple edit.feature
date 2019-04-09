@MVP-not-finished
Feature: The check your answers page must allow the user to make a simple edit and return to this page, without having to click through the entire application
    As a user I want to be able to change an answer before submitting my application
    so that I am providing accurate information to CICA

    Scenario Outline: User wants to make a simple edit from p--check-your-answers
        Given I am on p--check-your-answers
        When I click change for an <Answer>
        Then I will return to <Page>
        And I change my <Question> to <Example>
        And click continue
        Then I will return to p--check-your-answers
        And the answer will be updated to reflect <Example>

        Examples:
            | Answer                                                    | Page                                                      | Question                                  | Example       |
            | Name                                                      | p-applicant-enter-your-name                               | q-applicant-title                         | Mrs           |
            | Email address                                             | p-applicant-enter-your-email-address                      | q-applicant-enter-your-email-address      | CICA@gov.uk   |
            | Address                                                   | p-applicant-enter-your-address                            | q-applicant-building-and-street           | Tay House     |
            | Telephone number                                          | p-applicant-enter-your-telephone-number                   | q-applicant-enter-your-telephone-number   | 0141 228 1623 |


