const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["q-applicant-reason-for-delay-in-reporting-crime"],
  "additionalProperties": false,
  "properties": {
    "q-applicant-reason-for-delay-in-reporting-crime": {
      "title": "Select reasons for the delay in reporting the crime to the police",
      "type": "array",
      "anyOf": [
        {
          "title": "I was under 18",
          "const": "underage"
        },
        {
          "title": "Unable to report the crime",
          "const": "unable"
        },
        {
          "title": "Other reasons",
          "const": "other"
        }
      ],
      "errorMessages": {
        "required": "Select your choice"
      }
    },
    "q-applicant-explain-delay-reasons": {
      "title": "Briefly explain these reasons",
        "type": "string",
        "classification": "textarea",
        "rows": "5"
    }
  }
};

module.exports = output;
