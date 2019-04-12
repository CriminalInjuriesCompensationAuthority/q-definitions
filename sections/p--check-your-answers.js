const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Check your answers',
    type: 'object',
    additionalProperties: false,
    properties: {
        'check-your-answers': {
            description: `
              <h2 class="govuk-heading-l">Your details</h2>
                {{ govukSummaryList({
                  classes: 'govuk-!-margin-bottom-9',
                  rows: [
                    {
                      key: {
                        text: "Name"
                      },
                      value: {
                        text: answers.p_applicant_enter_your_name.value 
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_enter_your_name.href,
                            text: "Change",
                            visuallyHiddenText: "name"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Have you ever been known by any other names?"
                      },
                      value: {
                        text: answers.p_applicant_have_you_been_known_by_any_other_names.value 
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_have_you_been_known_by_any_other_names.href,
                            text: "Change",
                            visuallyHiddenText: "other names"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Date of birth"
                      },
                      value: {
                        text: answers.p_applicant_enter_your_date_of_birth.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_enter_your_date_of_birth.href,
                            text: "Change",
                            visuallyHiddenText: "date of birth"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Email address"
                      },
                      value: {
                        text: answers.p_applicant_enter_your_email_address.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_enter_your_email_address.href,
                            text: "Change",
                            visuallyHiddenText: "email address"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Address"
                      },
                      value: {
                        html: answers.p_applicant_enter_your_address.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_enter_your_address.href,
                            text: "Change",
                            visuallyHiddenText: "address"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Telephone Number"
                      },
                      value: {
                        text: answers.p_applicant_enter_your_telephone_number.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_enter_your_telephone_number.href,
                            text: "Change",
                            visuallyHiddenText: "telephone number"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Are you a British citizen or EU national?"
                      },
                      value: {
                        text: answers.p_applicant_british_citizen_or_eu_national.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_british_citizen_or_eu_national.href,
                            text: "Change",
                            visuallyHiddenText: "are you a British citizen or EU national"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Are you 18 or over?"
                      },
                      value: {
                        text: answers.p_applicant_are_you_18_or_over.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_are_you_18_or_over.href,
                            text: "Change",
                            visuallyHiddenText: "are you 18 or over"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Who are you applying for?"
                      },
                      value: {
                        text: answers.p_applicant_who_are_you_applying_for.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_who_are_you_applying_for.href,
                            text: "Change",
                            visuallyHiddenText: "who are you applying for"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Were you a victim of sexual assault or abuse?"
                      },
                      value: {
                        text: answers.p_applicant_were_you_a_victim_of_sexual_assault_or_abuse.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_were_you_a_victim_of_sexual_assault_or_abuse.href,
                            text: "Change",
                            visuallyHiddenText: "were you a victim of sexual assault or abuse"
                          }
                        ]
                      }
                    },
                    {
                      key: {
                        text: "Option you've selected"
                      },
                      value: {
                        text: answers.p_applicant_select_the_option_that_applies_to_you.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_select_the_option_that_applies_to_you.href,
                            text: "Change",
                            visuallyHiddenText: "select the option that applies to you"
                          }
                        ]
                      }
                    }
                  ]
                }) }}
              <h2 class="govuk-heading-l">About the crime</h2>
              {{ govukSummaryList({
                classes: 'govuk-!-margin-bottom-9',
                rows: [
                  {
                    key: {
                      text: "Did the crime happen once or over a period of time?"
                    },
                    value: {
                        text: answers.p_applicant_did_the_crime_happen_once_or_over_time.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_did_the_crime_happen_once_or_over_time.href,
                          text: "Change",
                          visuallyHiddenText: "did the crime happen once or over a period of time"
                        }
                      ]
                    }
                  },
                  {
                    key: {
                      text: "Where did the crime happen?"
                    },
                    value: {
                        text: answers.p_applicant_where_did_the_crime_happen.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_where_did_the_crime_happen.href,
                          text: "Change",
                          visuallyHiddenText: "where did the crime happen"
                        }
                      ]
                    }
                  },
                  {
                    key: {
                      text: "Do you know the name of the offender?"
                    },
                    value: {
                        text: answers.p_offender_do_you_know_the_name_of_the_offender.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_offender_do_you_know_the_name_of_the_offender.href,
                          text: "Change",
                          visuallyHiddenText: "do you know the name of the offender"
                        }
                      ]
                    }
                  },
                  {
                    key: {
                      text: "Contact with the offender"
                    },
                    value: {
                        text: answers.p_offender_describe_contact_with_offender.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_offender_describe_contact_with_offender.href,
                          text: "Change",
                          visuallyHiddenText: "Contact with the offender"
                        }
                      ]
                    }
                  }
                ]
              }) }}
        
              <h2 class="govuk-heading-l">Police report</h2>
        
              {{ govukSummaryList({
                classes: 'govuk-!-margin-bottom-9',
                rows: [
                  {
                    key: {
                      text: "Was the crime reported to the police?"
                    },
                    value: {
                        text: answers.p__was_the_crime_reported_to_police.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p__was_the_crime_reported_to_police.href,
                          text: "Change",
                          visuallyHiddenText: "was the crime reported to the police"
                        }
                      ]
                    }
                  },
                  {
                    key: {
                      text: "When was the crime reported to police?"
                    },
                    value: {
                        text: answers.p__when_was_the_crime_reported_to_police.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p__when_was_the_crime_reported_to_police.href,
                          text: "Change",
                          visuallyHiddenText: "when was the crime reported to police"
                        }
                      ]
                    }
                  },
                  {
                    key: {
                      text: "Crime reference number?"
                    },
                    value: {
                        text: answers.p__whats_the_crime_reference_number.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p__whats_the_crime_reference_number.href,
                          text: "Change",
                          visuallyHiddenText: "crime reference number"
                        }
                      ]
                    }
                  }
                ]
              }) }}
        
              <h2 class="govuk-heading-l">Other compensation</h2>
        
              {{ govukSummaryList({
                classes: 'govuk-!-margin-bottom-9',
                rows: [
                  {
                    key: {
                      text: "Have you applied to us before?"
                    },
                    value: {
                        text: answers.p_applicant_have_you_applied_to_us_before.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_have_you_applied_to_us_before.href,
                          text: "Change",
                          visuallyHiddenText: "have you applied to us before"
                        }
                      ]
                    }
                  },
                  {
                    key: {
                      text: "Have you applied for or received any other form of compensation?"
                    },
                    value: {
                        text: answers.p_applicant_have_you_applied_for_or_received_any_other_compensation.value
                      },
                      actions: {
                        items: [
                          {
                            href: answers.p_applicant_have_you_applied_for_or_received_any_other_compensation.href,
                          text: "Change",
                          visuallyHiddenText: "have you applied for or received any other form of compensation"
                        }
                      ]
                    }
                  }
                ]
              }) }}
        
              <h2 class="govuk-heading-l">Agree and submit your application</h2>
              <p class="govuk-body">By submitting this application you agree that we can share the details in it with the police. This helps us get the police information that we need to make a decision.</p>
              <p class="govuk-body">To find out more about how we handle your data <a class="govuk-body" href="https://www.gov.uk/guidance/cica-privacy-notice" target="">read our privacy notice</a>.</p>
                    `
        }
    },
    context: 'summary'
};

module.exports = output;
