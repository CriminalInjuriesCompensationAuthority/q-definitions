const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Other compensation",
    "type": "object",
    "required": ["q-who-did-you-apply-to", "q-have-the-made-a-decision"],
    "additionalProperties": false,
    "properties": {
        "q-who-did-you-apply-to": {
            "type": "string",
            "title": "Who have you applied to or received compensation from?",
            "errorMessages": {
                "required": "Tell us who you applied to"
            }
        },
        "q-have-the-made-a-decision": {
            "type": "boolean",
            "title": "Have they made a decision?",
            "errorMessages": {
                "required": "Tell us if a decision has been made"
            }
        }
    }
};

module.exports = output;