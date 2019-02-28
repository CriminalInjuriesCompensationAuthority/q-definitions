let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "Where in England did it happen?",
  "required": ["q-applicant-english-town-or-city", "q-applicant-english-location"],
  "properties": {
    "q-applicant-english-town-or-city": {
      "type": "string",
      "title": "Town or city",
      "errorMessages": {
        "required": "Enter the town or city where the crime happened"
      }
    },
    "q-applicant-english-location": {
      "type": "string",
      "title": "Location",
      "errorMessages": {
        "required": "Enter the name of a street, business, building or nearby local landmark"
      }
    }
  }
};

module.exports = output;