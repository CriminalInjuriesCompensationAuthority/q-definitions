let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Select the option that applies to you",
  "required": ["q-applicant-reason-for-delay-in-reporting-crime"],
  "properties": {
    "q-applicant-reason-for-delay-in-reporting-crime": {
      "title": "Select reasons for the delay in reporting the crime to the police",
      "type": "string",
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
      "maxLength": 500
    }
  }
};

module.exports = output;
