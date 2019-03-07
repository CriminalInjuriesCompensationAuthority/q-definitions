const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-enter-your-date-of-birth"],
    "additionalProperties": false,
    "properties": {
        "q-applicant-enter-your-date-of-birth": {
            "type": "string",
            "format": "date-time",
            "formatMaximum": {'$ref' : "#/answers/p--when-was-the-crime-reported-to-police/q-was-the-crime-reported-to-police/value'"},
            "title": "Enter your date of birth",
            "errorMessages": {
                "required": "Enter your date of birth"
            }
        }
    }
};

module.exports = output;
