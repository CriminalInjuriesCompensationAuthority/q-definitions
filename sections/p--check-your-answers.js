const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Check your answers before sending your application',
    type: 'object',
    additionalProperties: false,
    properties: {
        'applicant-impact-on-you': {
            description: `
      <h2 class="govuk-heading-m">Your details</h2>
        {{ govukSummaryList({
          classes: 'govuk-!-margin-bottom-9',
          rows: [
            {
              key: {
                text: "Name"
              },
              value: {
                text: "{{ answers.name.value }}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.name.href}}",
                    text: "Change",
                    visuallyHiddenText: "name"
                  }
                ]
              }
            },
            {
              key: {
                text: "Date of birth"
              },
              value: {
                text: "{{answers.dob.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.dob.href}}",
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
                text: "{{answers.email.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.email.href}}",
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
                text: "{{answers.address.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.address.href}}",
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
                text: "{{answers.phone.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.phone.href}}",
                    text: "Change",
                    visuallyHiddenText: "telephone number"
                  }
                ]
              }
            }
          ]
        })}}
      <h2 class="govuk-heading-m">Your eligibility</h2>
        {{ govukSummaryList({
          classes: 'govuk-!-margin-bottom-9',
          rows: [
            {
              key: {
                text: "Are you a British citizen or EU national?"
              },
              value: {
                text: "{{answers.britOrEuNat.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.britOrEuNat.href}}",
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
                text: "{{answers.eighteenOrOver.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.eighteenOrOver.href}}",
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
                text: "{{answers.whoFor.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.whoFor.href}}",
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
                text: "{{answers.wereYouVictim.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.wereYouVictim.href}}",
                    text: "Change",
                    visuallyHiddenText: "were you a victim of sexual assault or abuse"
                  }
                ]
              }
            },
            {
              key: {
                text: "Select the option that applies to you"
              },
              value: {
                text: "{{answers.selectOption.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.selectOption.href}}",
                    text: "Change",
                    visuallyHiddenText: "select the option that applies to you"
                  }
                ]
              }
            }
          ]
        }) }}
      <h2 class="govuk-heading-m">About the crime</h2>
      {{ govukSummaryList({
        classes: 'govuk-!-margin-bottom-9',
        rows: [
          {
            key: {
              text: "Did the crime happen once or over a period of time?"
            },
            value: {
                text: "{{answers.crimeHappenOnce.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.crimeHappenOnce.href}}",
                  text: "Change",
                  visuallyHiddenText: "did the crime happen once or over a period of time"
                }
              ]
            }
          },
          {% if (answers.whenCrimeHappen) %}
          {
            key: {
              text: "When did the crime happen?"
            },
            value: {
                text: "{{answers.whenCrimeHappen.value}}"
              },
              actions: {
                items: [
                  {
                  href: "#{{answers.whenCrimeHappen.href}}",
                  text: "Change",
                  visuallyHiddenText: "when did the crime happen"
                }
              ]
            }
          },
          {% else %}
          {
            key: {
              text: "When did the crime start?"
            },
            value: {
                text: "{{answers.whenCrimeStart.value}}"
              },
              actions: {
                items: [
                  {
                  href: "#{{answers.whenCrimeStart.href}}",
                  text: "Change",
                  visuallyHiddenText: "when did the crime start"
                }
              ]
            }
          },
          {
            key: {
              text: "When did the crime stop?"
            },
            value: {
                text: "{{answers.whenCrimeStop.value}}"
              },
              actions: {
                items: [
                  {
                  href: "#{{answers.whenCrimeStop.href}}",
                  text: "Change",
                  visuallyHiddenText: "when did the crime Stop"
                }
              ]
            }
          },
          {% endif %}
          {
            key: {
              text: "Do you know the name of the offender?"
            },
            value: {
                text: "{{answers.knowOffender.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.knowOffender.href}}",
                  text: "Change",
                  visuallyHiddenText: "do you know the name of the offender"
                }
              ]
            }
          },
          {% if (answers.offenderName) %}
          {
            key: {
              text: "Name of the offender"
            },
            value: {
                text: "{{answers.offenderName.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.offenderName.href}}",
                  text: "Change",
                  visuallyHiddenText: "Name of the offender"
                }
              ]
            }
          },
          {% endif %}
          {
            key: {
              text: "If you have contact with the offender, describe it below"
            },
            value: {
                text: "{{answers.offenderContact.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.knowOffender.href}}",
                  text: "Change",
                  visuallyHiddenText: "if you have contact with the offender, describe it below"
                }
              ]
            }
          }
        ]
      }) }}

      <h2 class="govuk-heading-m">Police report</h2>

      {{ govukSummaryList({
        classes: 'govuk-!-margin-bottom-9',
        rows: [
          {
            key: {
              text: "Was the crime reported to the police?"
            },
            value: {
                text: "{{answers.wasCrimeReported.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.wasCrimeReported.href}}",
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
                text: "{{answers.whenCrimeReported.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.whenCrimeReported.href}}",
                  text: "Change",
                  visuallyHiddenText: "when was the crime reported to police"
                }
              ]
            }
          },
          {
            key: {
              text: "What police force is dealing with the crime?"
            },
            value: {
                text: "{{answers.whatForce.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.whatForce.href}}",
                  text: "Change",
                  visuallyHiddenText: "what police force is dealing with the crime"
                }
              ]
            }
          },
          {
            key: {
              text: "Crime reference number?"
            },
            value: {
                text: "{{answers.crimeReference.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.crimeReference.href}}",
                  text: "Change",
                  visuallyHiddenText: "crime reference number"
                }
              ]
            }
          }
        ]
      }) }}

      <h2 class="govuk-heading-m">Other compensation</h2>

      {{ govukSummaryList({
        classes: 'govuk-!-margin-bottom-9',
        rows: [
          {
            key: {
              text: "Have you applied to us before?"
            },
            value: {
                text: "{{answers.appliedBefore.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.appliedBefore.href}}",
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
                text: "{{answers.otherCompensation.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.otherCompensation.href}}",
                  text: "Change",
                  visuallyHiddenText: "have you applied for or received any other form of compensation"
                }
              ]
            }
          },
          {% if (answers.whyNotApplied) %}
          {
            key: {
              text: "Briefly explain why not"
            },
            value: {
                text: "{{answers.whyNotApplied.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.whyNotApplied.href}}",
                  text: "Change",
                  visuallyHiddenText: "briefly explain why not"
                }
              ]
            }
          }
          {% endif %}
          {% if (answers.whoAppliedTo) %}
          {
            key: {
              text: "Who did you apply to?"
            },
            value: {
                text: "{{answers.whoAppliedTo.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.whoAppliedTo.href}}",
                  text: "Change",
                  visuallyHiddenText: "Who did you apply to?"
                }
              ]
            }
          },
          {% endif %}
          {% if (answers.otherCompDecisionMade) %}
          {
            key: {
              text: "Have they made a decision?"
            },
            value: {
                text: "{{answers.otherCompDecisionMade.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.otherCompDecisionMade.href}}",
                  text: "Change",
                  visuallyHiddenText: "Have they made a decision?"
                }
              ]
            }
          },
          {% endif %}
          {% if (answers.howMuch) %}
          {
            key: {
              text: "How much was the award?"
            },
            value: {
                text: "{{answers.howMuch.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.howMuch.href}}",
                  text: "Change",
                  visuallyHiddenText: "How much was the award?"
                }
              ]
            }
          }
          {% endif %}
          {% if (answers.whenFindOut) %}
          {
            key: {
              text: "When will you find out?"
            },
            value: {
                text: "{{answers.whenFindOut.value}}"
              },
              actions: {
                items: [
                  {
                    href: "#{{answers.whenFindOut.href}}",
                  text: "Change",
                  visuallyHiddenText: "When will you find out?"
                }
              ]
            }
          }
          {% endif %}
        ]
      }) }}

      <h2 class="govuk-heading-l">Agree and submit your application</h2>
      <p class="govuk-body">By submitting this application you agree that we can share the details in it with the police. This helps us get the police information that we need to make a decision.</p>
      <p class="govuk-body">To find out more about how we handle your data <a class="govuk-body" href="https://www.gov.uk/guidance/cica-privacy-notice" target="">read our privacy notice</a>.</p>
            `
        }
    },
    context: "summary"
};

module.exports = output;
