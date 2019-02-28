const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-offenders-name"],
    "additionalProperties": false,
    "properties": {
        "q-offenders-name": {
            "title": "Enter their name",
            "type": "string",
            "errorMessages": {
                "required": "Enter the offender's name"
            }
        }
    }
};

module.exports = output;