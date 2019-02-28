let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-telephone-number"],
    "properties": {
        "q-applicant-telephone-number": {
          "type": "string",
          "title": "Enter your telephone number",
            "errorMessages": {
               "required": "Enter a telephone number, like 01632 960 001, 07700 900 982 or +44 0808 157 0192"
            }
        }
    }
};

module.exports = output;