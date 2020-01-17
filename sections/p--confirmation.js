const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Confirmation',
    additionalProperties: false,
    properties: {
        confirmation: {
            description: `
                    {{ govukPanel({
                        titleText: "Application submitted",
                        html: '<p>Your reference number is <br /><strong>||/answers/system/case-reference||</strong></p><p>We've sent your reference number to <strong>||/answers/p-applicant-confirmation-method/q-applicant-enter-your-email-address||||/answers/p-applicant-confirmation-method/q-applicant-enter-your-telephone-number||</strong></p>'
                    }) }}
                    
                    <p class="govuk-body-l">Thank you for submitting your application.</p>
                    <h2 class="govuk-heading-m">What happens next</h2>
                    <p class="govuk-body">We will:</p>
                    <ul class="govuk-list govuk-list--bullet">
                    <li>ask the police for evidence</li>
                    <li>use the police evidence to make a decision</li>
                    <li>send our decision letter by post</li>
                    </ul>
                    <p class="govuk-body">We will usually make a decision within 4 months.</p>
                    {{ govukWarningText({
                        text: "You must inform us immediately if any of the information you have given us changes, especially your address, telephone number or email address.",
                        iconFallbackText: "Warning"
                    }) }}
                    <p class="govuk-body">You can contact our Customer Service Centre on 0300 003 3601. Select option 8 when the call is answered.</p>
                    <h2 class="govuk-heading-m">Help us improve this service</h2>
                    <p class="govuk-body">You can complete a short survey to help us improve this service.</p>
                    <p class="govuk-body">It does not ask for any details about your case, and has no effect on your application.</p>
                    <p class="govuk-body"><a href="https://www.surveymonkey.com/r/Privatebetafeedback">Tell us what you think of our service</a> (takes 30 seconds)</p>
            `
        }
    }
};

module.exports = output;
