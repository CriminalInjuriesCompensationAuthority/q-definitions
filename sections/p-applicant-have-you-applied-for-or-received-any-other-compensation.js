const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "required": ["q-applicant-have-you-applied-for-or-received-any-other-compensation"],
  "properties": {
    "q-applicant-have-you-applied-for-or-received-any-other-compensation": {
      "type": "string",
      "title": "Have you applied for or received any other form of compensation?",
      "errorMessages": {
        "required": "Select yes if you have applied for or received any other form of compensation"
      }
    }
  }
};

module.exports = output;