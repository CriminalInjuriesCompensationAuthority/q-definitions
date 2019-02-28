let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-what-other-names-have-you-used"],
    "properties": {
        "q-applicant-what-other-names-have-you-used": {
            "type": "string",
            "title": "What other names have you used?",
            "errorMessages": {
                "required": "Enter the other names you have used"
            }
        }
    }
};

module.exports = output;