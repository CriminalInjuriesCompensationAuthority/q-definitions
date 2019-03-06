Feature: Error messages on mandatory offender question
    As a user I will see an error message
    If I attempt to continue without answering the mandatory question on the page
    So that CICA gets the informaton required to casework the application

Scenario: User has not answered a mandatory question
        Given I am on p-offender-describe-contact-with-offender
        When I click continue
        And I have not answered q-offender-describe-contact-with-offender
        Or I have not answered q-offender-i-have-no-contact-with-offender
        Then I will see this error message "Enter details of any contact you have with the offender"