let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-have-you-been-known-by-any-other-names"],
    "properties": {
        "q-applicant-have-you-been-known-by-any-other-names": {
            "type": "boolean",
            "title": "Have you ever been known by any other names?",
            "errorMessages": {
                "required": "Select yes if you have been known by any other names"
            }
        }
    }
};

module.exports = output;