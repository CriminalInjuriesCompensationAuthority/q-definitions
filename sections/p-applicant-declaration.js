const output = {
    $schema: 'http://json-schema.org/draft-07/schema#',
    type: 'object',
    title: 'Declaration',
    additionalProperties: false,
    properties: {
        'applicant-declaration': {
            description: `
                <p class="govuk-body">By continuing you confirm that the information you will give is true as far as you know.</p>
                {{ govukWarningText({
                    text: "If you deliberately give false or misleading information, you may get less compensation or be prosecuted.",
                    iconFallbackText: "Warning"
                }) }}
            `
        }
    }
};

module.exports = output;
