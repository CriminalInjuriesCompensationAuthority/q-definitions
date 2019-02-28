let output = {
  "$schema": "http://json-schema.org/draft-07/schema#",
  "title": "What police force is dealing with the crime?",
  "type": "object",
  "required": ["q--which-scottish-police-force-is-investigating-the-crime"],
  "properties": {
    "q--which-scottish-police-force-is-investigating-the-crime": {
      "type": "string",
      "oneOf": [
        {
          "title": "Argyll and West Dunbartonshire",
          "const": "argyll"
        },
        {
          "title": "Ayrshire",
          "const": "ayrshire"
        },
        {
          "title": "British Transport Police",
          "const": "transport"
        },
        {
          "title": "Dumfries and Galloway",
          "const": "dumfries"
        },
        {
          "title": "Edinburgh",
          "const": "edinburgh"
        },
        {
          "title": "Fife",
          "const": "fife"
        },
        {
          "title": "Forth Valley",
          "const": "forthValley"
        },
        {
          "title": "Greater Glasgow",
          "const": "glasgow"
        },
        {
          "title": "Highland and Islands",
          "const": "highlands"
        },
        {
          "title": "Lanarkshire",
          "const": "lanarkshire"
        },
        {
          "title": "North East",
          "const": "northEast"
        },
        {
          "title": "Renfrewshire and Inverclyde",
          "const": "renfrewshire"
        },
        {
          "title": "Tayside",
          "const": "tayside"
        },
        {
          "title": "The Lothians and Scottish Borders",
          "const": "lothians"
        }
      ],
      "errorMessages": {
        "required": "Select a Police Scotland division "
      }
    }
  }
};

module.exports = output;