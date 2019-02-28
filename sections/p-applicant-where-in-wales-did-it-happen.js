let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Where in Wales did it happen?",
  "required": ["q-applicant-welsh-town-or-city", "q-applicant-welsh-location"],
  "properties": {
    "q-applicant-welsh-town-or-city": {
      "type": "string",
      "title": "Town or city",
      "errorMessages": {
        "required": "Enter the town or city where the crime happened"
      }
    },
    "q-applicant-welsh-location": {
      "type": "string",
      "title": "Location",
      "errorMessages": {
        "required": "Enter the name of a street, business, building or nearby local landmark"
      }
    }
  }
};

module.exports = output;