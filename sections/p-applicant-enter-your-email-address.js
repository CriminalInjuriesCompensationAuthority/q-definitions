const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-email-address"],
    "additionalProperties": false,
    "properties": {
        "q-applicant-email-address": {
            "type": "string",
            "title": "Enter your email address",
            "errorMessages": {
                "required": "Enter your email address"
            }
        }
    }
};

module.exports = output;