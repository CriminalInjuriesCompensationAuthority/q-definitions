const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Enter your name",
    "type": "object",
    "required": ["q-applicant-name-title", "q-applicant-name-firstname", "q-applicant-name-lastname"],
    "additionalProperties": false,
    "properties": {
        "q-applicant-name-title": {
            "title": "Title",
            "type": "string",
            "errorMessages": {
                "required": "Enter your title"
            }
        },
        "q-applicant-name-firstname": {
            "title": "First name",
            "type": "string",
            "errorMessages": {
                "required": "Enter your first name"
            }
        },
        "q-applicant-name-lastname": {
            "title": "Last name",
            "type": "string",
            "errorMessages": {
                "required": "Enter your last name"
            }
        }
    }
};

module.exports = output;