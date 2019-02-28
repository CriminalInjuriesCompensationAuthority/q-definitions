let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "type": "object",
  "properties": {
    "confirmation": {
      "type": "string",
      "classification": "markup",
      "const":
        `<div class=\"govuk-grid-column-two-thirds\">
        {{ govukPanel({ 
          titleText: \"Application submitted\",
          html: \"**Reference Number here**\"
        }) }}
        <p></p>
        <p class=\"govuk-body-l\">Thank you for submitting your application.</p>
        <p class=\"govuk-body-l\">We have sent a confirmation email to <strong>**Email here**</strong></p>
        <h2 class=\"govuk-heading-m\">What happens next</h2>
        <p>We will:</p>
        <ul class=\"govuk-list govuk-list--bullet\">
        <li>ask the police for evidence</li>
        <li>use the police evidence to make a decision</li>
        <li>send our decision to **Email here**</li>
        </ul>
        <p class=\"govuk-body\">We will usually make a decision within 4 months.</p>
        {{ govukWarningText({ 
          text: \"You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.\",
          iconFallbackText: \"Warning\"
        }) }}
        <p class=\"govuk-body\">You can contact our Customer Service Centre on 0300 003 3601. Select option 8 when the call is answered.</p>
        <p><a href=\"/application/confirmation-page-if-automatic-nil\">What did you think of this service?</a> (takes 30 seconds)</p>
        <p><a href=\"/application/application-submitted-email\">Check your inbox</a></p>
        </div>`
    }
  }
};

module.exports = output;

