let today = new Date().toISOString();

const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q--when-was-the-crime-reported-to-police"],
    "additionalProperties": false,
    "properties": {
        "q--when-was-the-crime-reported-to-police": {
            "type": "string",
            "format": "date-time",
            "formatMaximum": today,
            "title": "When was the crime reported to the police?",
            "errorMessages": {
                "required": "Enter the date the crime was reported to the police",
                "format": "The date the crime was reported to the police must be in the past"
            }
        }
    }
};

module.exports = output;
