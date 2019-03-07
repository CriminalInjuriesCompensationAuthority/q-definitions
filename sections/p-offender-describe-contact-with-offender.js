const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "additionalProperties": false,
  "required": ["q-offender-contact-description"],
  "properties": {
    "q-offender-contact-description": {
      "type": "string",
      "title": "If you have contact with the offender, describe it below",
      "errorMessages": {
          "required": "Please describe your contact with the offender, or select 'I have no contact with the offender'"
      }
    },
    "q-offender-no-contact-with-offender": {
      "type": "string",
      "anyOf": [
        {
          "title": "I have no contact with the offender",
          "const": "i-have-no-contact-with-the-offender"
        }
      ]
    }
  },
  "allOf": [
    {
      "if": {
        "properties": {
          "q-offender-no-contact-with-offender": {"const": "i-have-no-contact-with-the-offender"}
        }
      },
      "then": {
        "required": ["q-offender-no-contact-with-offender"]
      },
      "else": {
        "required": ["q-offender-contact-description"]
      }
    }
  ]
};

module.exports = output;