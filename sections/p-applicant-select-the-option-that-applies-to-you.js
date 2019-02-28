const output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "title": "Select the option that applies to you",
    "required": ["q-applicant-option"],
    "properties": {
        "applicant-your-choices": {
            "type": "string",
            "classification": "markup",
            "const":
                `<p class="govuk-body-l">We decide what enquiries to make depending on how the crime affected you.</p>
                <h2 class="govuk-heading-m">Option 1: Sexual assault or abuse</h2>
                <p class="govuk-body">Any compensation we pay acknowledges the emotional distress the crime caused you.</p>
                <p class="govuk-body">We normally make a decision based on your application and the information we get from the police.</p>
                <p class="govuk-body">We will usually make a decision within 4 months. This is because we do not normally need to see your medical records.</p>
                <h2 class="govuk-heading-m">Option 2: Sexual assault or abuse and other injuries or losses</h2>
                <p class="govuk-body">We can also pay compensation for:
                <ul class="govuk-list govuk-list--bullet">
                <li>lost earnings because you were unable to work</li>
                <li>physical injuries</li>
                <li>pregnancy, sexually transmitted disease or loss of foetus</li>
                <li>disabling mental injuries that are additional to the emotional distress you already suffered</li>
                </ul>
                </p>
                {{ govukDetails({
                    summaryText: "What is a disabling mental injury?",
                    text: "A disabling mental injury has a substantial adverse effect on your ability to carry out normal day-to-day activities. For example, reduced performance at school or work, or effects on your social or sexual relationships."
                }) }}
                <p class="govuk-body">We may ask a psychiatrist or clinical psychologist to confirm that you have a disabling mental injury if you do not already have a diagnosis.</p>
                <p class="govuk-body">We will usually make a decision within 12 months. This is because we may need to examine your medical records, get medical reports and assess any losses.</p>
                {{ govukDetails({
                summaryText: "If you need help or support",
                text: "
                    <p class="govuk-body">You can contact us for help with your application on 0300 003 3601. Select option 8.</p>
                    <p class="govuk-body">Our phone lines are open Monday to Friday 8.30am to 5pm except Wednesday when they open at 10am.</p>
                    <p class="govuk-body">For practical or emotional support near you <a href="https://www.victimsinformationservice.org.uk/" target="_blank">visit the Victim and Witness Information</a> website.</p>
                "
                }) }}`
        },
        "q-applicant-option": {
            "title": "Select the option that applies to you",
            "type": "string",
            "oneOf": [
                {
                    "title": "Option 1: Sexual assault or abuse",
                    "const": "opt1"
                },
                {
                    "title": "Option 2: Sexual assault or abuse and other injuries or losses",
                    "const": "opt2"
                }
            ],
            "errorMessages": {
                "required": "Select your choice"
            }
        }
    }
};

module.exports = output;