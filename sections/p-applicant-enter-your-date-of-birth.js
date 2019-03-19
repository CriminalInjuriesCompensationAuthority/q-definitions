const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-enter-your-date-of-birth"],
    "additionalProperties": false,
    "properties": {
        "q-applicant-enter-your-date-of-birth": {
            "type": "string",
            "format": "date-time",
            "title": "Enter your date of birth",
            "description": "For example, 31 3 2018.",
            "errorMessages": {
                "required": "Enter your date of birth"
            }
        }
    }
};

module.exports = output;
