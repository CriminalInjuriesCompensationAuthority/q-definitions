let output = {
    "$schema": "http://json-schema.org/draft-07/schema#",
    "type": "object",
    "required": ["q-applicant-when-did-the-crime-stop"],
    "properties": {
        "q-applicant-when-did-the-crime-stop": {
            "type": "string",
            "format": "date-time",
            "title": "When did it stop?",
            "errorMessages": {
                "required": "Enter the date the crime started and include a month and year",
                "format": "The date the crime stopped must be in the past"
            }
        },
        "i-dont-know-when-the-crime-stopped": {
            "type": "string",
            "classification": "markup",
            "const":
                `{{ govukDetails({
                summaryText: \"I do not know when the crime stopped\",
                text: \"<p>You can contact us for help with your application on 0300 003 3601. Select option 8.</p>
                        <p>Our phone lines are open Monday to Friday 8.30am to 5pm except Wednesday when they open at 10am.</p>
                        <p>To get information about the crime you can <a href=\"https://www.police.uk/contact/101/\" target=\"_blank\">contact the Police</a></p>\"
                }) }}`
        }
    }
};

module.exports = output;