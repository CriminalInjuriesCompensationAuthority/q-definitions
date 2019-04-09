const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Enter the offender's name",
    "required": ["q-offenders-name"],
    "additionalProperties": false,
    "properties": {
        "q-offenders-name": {
            "type": "string",
            "description": "We will not contact the offender.",
            "errorMessages": {
                "required": "Enter the offender's name"
            }
        }
    }
};

module.exports = output;
