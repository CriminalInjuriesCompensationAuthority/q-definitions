const output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "title": "You are being redirected to our other application site",
  "additionalProperties": false,
  "properties": {
    "you-need-a-different-service": {
      "type": "string",
      "classification": "markup",
      "const": `<p><strong>You can continue your application using our existing service.</strong></p>`
    }
  }
};

module.exports = output;