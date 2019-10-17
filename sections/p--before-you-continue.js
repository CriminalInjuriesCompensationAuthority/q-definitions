const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    title: 'Before you continue',
    type: 'object',
    additionalProperties: false,
    properties: {
        'applicant-impact-on-you': {
            description: `
                <p class="govuk-body">On the next page we will ask you to select an option based on how the crime affected you.</p>
                <p class="govuk-body">We appreciate that this may be difficult for you.</p>
                <h2 class="govuk-heading-m">If you need help or support</h2>
                <p class="govuk-body">You can contact us for help with your application on 0300 003 3601. Select option 8.</p>
                <p class="govuk-body">Our phone lines are open Monday to Friday 8:30am to 5pm except Wednesday when they open at 10am.</p>
                <p class="govuk-body">You can get practical or emotional support depending on where you live:</p>
                <ul class="govuk-list govuk-list--bullet">
                   <li>in England and Wales <a href="https://www.victimandwitnessinformation.org.uk/">visit the Victim and Witness Information website</a></li>
                   <li>in Scotland <a href="https://www.mygov.scot/victim-witness-support/">visit the mygov.scot website</a></li>
                </ul>
            `
        }
    }
};

module.exports = output;
