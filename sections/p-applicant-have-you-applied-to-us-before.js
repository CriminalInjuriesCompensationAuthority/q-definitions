const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["q-applicant-have-you-applied-to-us-before"],
  "properties": {
    "q-applicant-have-you-applied-to-us-before": {
      "title": "Have you applied to us before?",
      "type": "string",
      "oneOf": [
        {
          "title": "Yes",
          "const": "Yes"
        },
        {
          "title": "No",
          "const": "No"
        }
      ]
    }
  }
};

module.exports = output;

