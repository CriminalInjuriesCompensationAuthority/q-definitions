let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": [
        "q-whats-the-crime-reference-number"
    ],
    "properties": {
        "q-whats-the-crime-reference-number": {
            "title": "What's the crime reference number?",
            "type": "string",
            "errorMessages": {
                "required": "Enter the crime reference number"
            }
        }
    }
};

module.exports = output;