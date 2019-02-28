let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "properties": {
        "your-details": {
            "title": "Your details",
            "classes": "govuk-!-margin-bottom-9",
            "type": "string",
            "classification": "summary",
            "rows": [
                {
                    "key": "Name"
                },
                {
                    "key": "Date Of Birth"
                },
                {
                    "key": "Email address"
                },
                {
                    "key": "Address"
                },
                {
                    "key": "Telephone Number"
                }
            ]
        },
        "your-eligibility": {
            "title": "Your eligibility",
            "classes": "govuk-!-margin-bottom-9",
            "type": "string",
            "classification": "summary",
            "rows":[
                {
                    "key": "Are you a British citizen or EU national?"
                },
                {
                    "key": "Are you 18 or over?"
                },
                {
                    "key": "Who are you applying for?"
                },
                {
                    "key": "Were you a victim of sexual assault or abuse?"
                },
                {
                    "key": "Select the option that applies to you"
                }
            ]
        },
        "about-the-crime": {
            "title": "About the crime",
            "classes": "govuk-!-margin-bottom-9",
            "type": "string",
            "classification": "summary",
            "rows":[
                {
                    "key": "Did the crime happen once or over a period of time?"
                },
                {
                    "key": "When did the crime happen?"
                },
                {
                    "key": "Do you know the name of the offender?"
                },
                {
                    "key": "If you have contact with the offender, describe it below"
                }
            ]
        },
        "police-report": {
            "title": "Police report",
            "classes": "govuk-!-margin-bottom-9",
            "type": "string",
            "classification": "summary",
            "rows": [
                {
                    "key": "Was the crime reported to the police?"
                },
                {
                    "key": "When was the crime reported to police?"
                },
                {
                    "key": "What police force is dealing with the crime?"
                },
                {
                    "key": "Crime reference number?"
                }
            ]
        },
        "other-compensation": {
            "title": "Other compensation",
            "classes": "govuk-!-margin-bottom-9",
            "type": "string",
            "classification": "summary",
            "rows":[
                {
                    "key": "Have you applied to us before?"
                },
                {
                    "key": "Have you applied for or received any other form of compensation?"
                },
                {
                    "key": "Briefly explain why not"
                }
            ]
        }
    },
    "context": "summary"
};

module.exports = output;