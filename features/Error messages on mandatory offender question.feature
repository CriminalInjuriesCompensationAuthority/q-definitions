@MVP
Feature: Error messages on mandatory offender question
    As a user I will see an error message
    If I attempt to continue without answering the mandatory question on the page
    So that CICA gets the informaton required to casework the application

Scenario: User has not answered a mandatory question
        Given I am on p-offender-describe-contact-with-offender
        When I have not answered the q-offender-describe-contact-with-offender Or I have not answered the q-offender-i-have-no-contact-with-offender and I click continue
        Then I will see an Enter details of any contact you have with the offender
