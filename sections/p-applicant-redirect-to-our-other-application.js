const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'We are still working on this part of the service',
    additionalProperties: false,
    properties: {
        'you-need-a-different-service': {
            description: `<p class="govuk-body">To complete your application <a href="https://www.cica.gov.uk/OAS/Account/create">use our current online service</a>.</p>
                          {{ govukDetails({
                              summaryText: "If you need help or support",
                              html: '
                                  <p class="govuk-body">You can contact us for help with your application on 0300 003 3601. Select option 8.</p>
                                  <p class="govuk-body">Our phone lines are open Monday to Friday 8.30am to 5pm except Wednesday when they open at 10am.</p>
                                  <p class="govuk-body">For practical or emotional support near you <a href="https://www.victimsinformationservice.org.uk/" target="_blank">visit the Victim and Witness Information</a> website.</p>
                                  <p class="govuk-body">There is a different website if you live in <a href="https://www.mygov.scot/victim-witness-support/">Scotland</a>.</p>
                              '
                          }) }}`
        }
    }
};

module.exports = output;
