const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Enter their name",
    "required": ["q-offenders-name"],
    "additionalProperties": false,
    "properties": {
        "q-offenders-name": {
            "title": "Offender's name",
            "type": "string",
            "description": "We will not contact the offender.",
            "errorMessages": {
                "required": "Enter the offender's name"
            }
        }
    }
};

module.exports = output;
