const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-telephone-number"],
    "additionalProperties": false,
    "properties": {
        "q-applicant-telephone-number": {
          "type": "string",
          "title": "Enter your telephone number",
            "description": "We may use this to contact you if we need to clarify something on your application form.",
            "classes": "govuk-input--width-20",
            "errorMessages": {
               "required": "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192"
            }
        }
    }
};

module.exports = output;
