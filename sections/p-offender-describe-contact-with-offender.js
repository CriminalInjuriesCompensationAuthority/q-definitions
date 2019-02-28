const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "q-offender-contact-description": {
      "type": "string",
      "title": "If you have contact with the offender, describe it below",
      "classification": "textarea",
      "rows": "5"
    },
    "q-offender-no-contact-with-offender": {
      "type": "array",
      "oneOf": [
        {
          "title": "I have no contact with the offender",
          "const": "none"
        }
      ]
    }
  }
};

module.exports = output;