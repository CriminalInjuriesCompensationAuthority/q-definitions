let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "title": "Other compensation",
    "type": "object",
    "required": ["q-who-did-you-apply-for-compensation-to", "q-how-much-compensation-did-you-get"],
    "properties": {
        "q-who-did-you-apply-for-compensation-to": {
            "type": "string",
            "title": "Who did you apply to?",
            "errorMessages": {
                "required": "Tell us who you applied to"
            }
        },
        "q-how-much-compensation-did-you-get": {
            "type": "string",
            "title": "How much compensation did you get, or expect to get?",
            "errorMessages": {
                "required": "Tell us how much compensation you got, or are expecting to get"
            }
        }
    }
};

module.exports = output;