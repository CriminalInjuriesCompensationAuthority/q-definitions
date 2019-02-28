let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "You can not get compensation",
  "type": "object",
  "properties": {
    "applicant-declaration": {
      "type": "string",
      "classification": "markup",
      "enum": "<p class=\"govuk-body-l\">If the crime has not been reported to the police we can not pay compensation.</p>" +
      "<p class=\"govuk-body\">You may continue your application, but any future application for the same injuries will be refused.</p>"
    }
  }
};

module.exports = output;
