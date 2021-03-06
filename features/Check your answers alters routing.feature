@MVP-not-finished
Feature: The check your answers page must allow the user to make an edit and if this opens a new question, follow the new routing until the application is ready to be submitted
    As a user I want to be able to change an answer before submitting my application
    so that I am providing accurate information to CICA

    Scenario Outline: User wants to make a change on p--check-your-answers that opens new questions
        Given I am on p--check-your-answers
        When I click change for an <Answer>
        Then I will return to <Page>
        And I change my <Question> to <Example>
        Then I should see <Next Page>
        And continue through the application following the regular routing

        Examples:
            | Answer                                                    | Page                                                      | Question                                                  | Example                                              | Next Page                                                                 |
            | Are you a British citizen or EU national?                 | p-applicant-british-citizen-or-eu-national                | q-applicant-british-citizen-or-eu-national                | No                                                   | p-applicant-redirect-to-our-other-application                             |
            | Are you 18 or over?                                       | p-applicant-are-you-18-or-over                            | q-applicant-are-you-18-or-over                            | No                                                   | p-applicant-redirect-to-our-other-application                             |
            | Who are you applying for?                                 | p-applicant-who-are-you-applying-for                      | q-applicant-who-are-you-applying-for                      | Someone else                                         | p-applicant-redirect-to-our-other-application                             |
            | Were you a victim of sexual assault or abuse?             | p-applicant-were-you-a-victim-of-sexual-assault-or-abuse  | q-applicant-were-you-a-victim-of-sexual-assault-or-abuse  | No                                                   | p-applicant-redirect-to-our-other-application                             |
            | Select the option that applies to you                     | p-applicant-select-the-option-that-applies-to-you         | q-applicant-option                                        | Sexual assault or abuse and other injuries or losses | p-applicant-redirect-to-our-other-application                             |
            | Did the crime happen once or over a period of time?       | p-applicant-did-the-crime-happen-once-or-over-time        | q-applicant-did-the-crime-happen-once-or-over-time        | Over a period of time                                | p-applicant-when-did-the-crime-start                                      |
            | Was the crime reported to the police?                     | p--was-the-crime-reported-to-police                       | q--was-the-crime-reported-to-police                       | No                                                   | p-applicant-you-cannot-get-compensation                                   |
            | When was the crime reported to police?                    | p--when-was-the-crime-reported-to-police                  | q--when-was-the-crime-reported-to-police                  | 01/12/2018                                           | p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police |
            | When did it stop?                                         | p-applicant-when-did-the-crime-stop                       | q-applicant-when-did-the-crime-stop                       | 01/01/2015                                           | p-applicant-select-reasons-for-the-delay-in-reporting-the-crime-to-police |
            | When did the crime happen?                                | p-applicant-when-did-the-crime-happen                     | q-applicant-when-did-the-crime-happen                     | 01/01/2015                                           | p-applicant-select-reasons-for-the-delay-in-making-your-application       |
            | Do you know the name of the offender?                     | p-offender-do-you-know-the-name-of-the-offender           | q-offender-do-you-know-the-name-of-the-offender           | Yes                                                  | p-offender-enter-offenders-name                                           |
            | Other names                                               | p-applicant-have-you-been-known-by-any-other-names        | q-applicant-have-you-been-known-by-any-other-names        | Yes                                                  | p-applicant-what-other-names-have-you-used                                |
            | Date of birth                                             | p-applicant-enter-your-date-of-birth                      | q-applicant-enter-your-date-of-birth                      | 22/01/2019                                           | p-applicant-redirect-to-our-other-application                             |
