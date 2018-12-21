# `q-definitions` Overview
Store for all the `JSON`, and `YAML` files that are used to define all the data needed for an questionnaire `JSON` definition.

## Questionnaires
`YAML` files that define the sections that are in a questionnaire.
```yaml
---
 # human-readable, URL-friendly questionnaire name.
template-name: apply-for-compensation
 # the entry point of the questionnaire. The first page.
 # maps directly to the name of a JSON file. This file
 # contains the JSON Schema for that given section.  
start-page: p-applicant-declaration
# list of all the pages in the questionnaire. Contains
# every possible page for every possible route through
# the questionnaire.
pages: 
- p-applicant-declaration # maps directly to the name of a JSON file
- p-applicant-are-you-a-british-citizen
- p-applicant-are-you-over-18
- # ...
```

## Routes
`YAML` files that define the routing for that particular section.
```yaml
# section name.
# the section name is identical to:
#     - the name of the file it is in.
#     - the reference within the questionnaire definition
#       file (demonstrated above).
p-applicant-are-you-over-18:
  # where you will be routed to if the condition is met.
- goto: p--who-is-applying
  # condition.
  if: [==, q-are-you-18-or-over, yes]
  # another route with a condition.
- goto: p--you-need-a-different-service
  if: [==, q-are-you-18-or-over, no]
```

### Routing conditions
```yaml
if: [==, q-are-you-18-or-over, yes]
```
Breaking it down we have:
```yaml
== # the operator.
```
```YAML
q-are-you-18-or-over # question we are testing the response of.
```
```yaml
yes # the response needed to satisfy this condition.
```

If this condition is satisfied then:
```yaml
goto: p--who-is-applying # route to the 'p--who-is-applying' section/page.
```

## Sections
```json
{
    "$schema": "http://json-schema.org/draft-04/schema#",
    "id": "/schema/definitions/p-applicant-over-18",
    "type": "object",
    "required": ["q-are-you-18-or-over"],
    "additionalProperties": false,
    "properties": {
        "q-are-you-18-or-over": {
            "type": "boolean",
            "title": "Are you 18 or over?",
            "errorMessages": {
                "required": "Select Yes if you are 18 or over"
            }
        }
    }
}
```

Breaking it down we have:

```js
{
    "q-are-you-18-or-over": { // question definition.
        "type": "boolean", // yes/no question.
        "title": "Are you 18 or over?",
        "errorMessages": { // error messages that will be displayed if needed.
            "required": "Select Yes if you are 18 or over" // this error message will be displayed if the "required-ness" is invalidated. i.e. this field is required, the user didn't answer it, therefore it is an invalid response, so display this error.
        }
    }
}
```