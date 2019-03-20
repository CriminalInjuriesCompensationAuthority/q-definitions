const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Where in Scotland did it happen?",
  "required": ["q-applicant-scottish-town-or-city", "q-applicant-scottish-location"],
  "additionalProperties": false,
  "properties": {
    "q-applicant-scottish-town-or-city": {
      "type": "string",
      "title": "Town or city",
        "classes": "govuk-input--width-30",
      "errorMessages": {
        "required": "Enter the town or city where the crime happened"
      }
    },
    "q-applicant-scottish-location": {
      "type": "string",
      "title": "Location",
        "description": "For example, the name of a street, business, building or nearby local landmark. You can enter more than one.",
        "classes": "govuk-input--width-30",
      "errorMessages": {
        "required": "Enter the name of a street, business, building or nearby local landmark"
      }
    }
  }
};

module.exports = output;
