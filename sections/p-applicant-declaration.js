const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Declaration",
    "properties": {
      "applicant-declaration": {
      "type": "string",
      "classification": "markup",
      "const":`<p><strong>By continuing you confirm that the information you will give is true as far as you know.</strong></p>
        {{ govukWarningText({
            text: "You could be prosecuted or get less compensation if you give false or misleading information.",
            iconFallbackText: "Warning"
        }) }}`
    }
  }
};

module.exports = output;
