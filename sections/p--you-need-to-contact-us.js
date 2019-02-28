let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "You need to contact us",
  "type": "object",
  "properties": {
    "applicant-declaration": {
      "type": "string",
      "classification": "markup",
      "const":
        `<p class=\"govuk-body-l\">You need to contact us to proceed with your application</p>
        <p class=\"govuk-body\">You may continue your application, but any future application for the same injuries will be refused.</p>`
    }
  }
};

module.exports = output;
