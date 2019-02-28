let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-when-did-the-crime-start"],
    "properties": {
        "q-applicant-when-did-the-crime-start": {
            "type": "string",
            "format": "date-time",
            "title": "When did it start?",
            "errorMessages": {
                "required": "Enter the date the crime started and include a month and year",
                "format": "The date the crime started must be in the past"
            }
        },
        "i-dont-know-when-the-crime-started": {
            "type": "string",
            "classification": "markup",
            "enum": "{{ govukDetails({" +
            "summaryText: \"I do not know when the crime started\"," +
            "text: \"<p>You can contact us for help with your application on 0300 003 3601. Select option 8.</p>" +
            "<p>Our phone lines are open Monday to Friday 8.30am to 5pm except Wednesday when they open at 10am.</p>" +
            "<p>To get information about the crime you can <a href=\"https://www.police.uk/contact/101/\" target=\"_blank\">contact the Police</a></p>" +
            "\"" +
            "}) }}"
        }
    }
};

module.exports = output;