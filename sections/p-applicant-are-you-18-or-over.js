let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-are-you-18-or-over"],
    "properties": {
        "q-applicant-are-you-18-or-over": {
            "type": "boolean",
            "title": "Are you 18 or over?",
            "errorMessages": {
                "required": "Select yes if you are over 18"
            }
        }
    }
};

module.exports = output;