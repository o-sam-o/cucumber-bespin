"define metadata";
({
    "description": "Gherkin syntax highlighter",
    "depends": [ "SyntaxManager" ],
    "provides": [
        {
            "ep": "syntax",
            "name": "gh",
            "pointer": "#GherkinSyntax"
        }
    ]
});
"end";

var SC = require('sproutcore/runtime').SC;
var Promise = require('bespin:promise').Promise;
var StandardSyntax = require('SyntaxManager:controllers/standardsyntax').
    StandardSyntax;

exports.GherkinSyntax = StandardSyntax.create({
    states: {
        start: [
            {
                regex:  /^Feature:/,
                tag:    'keyword'
            },        
            {
                regex:  /^(?:(\s{2}|\t))(Given|When|Then|And|Background|Scenario|Examples|But):?/,
                tag:    'keyword'
            },
            {
                regex:  /^\d(st|nd|rd|th)?/,
                tag:    'string'
            },            
            {
                regex:  /^[^'"\|@# \t]+/,
                tag:    'plain'
            },
            {
                regex:  /^'(?:[^'\n]*')/,
                tag:    'string'
            },
            {
                regex:  /^"/,
                tag:    'string',
                then:   'qqstring'
            },
            {
                regex:  /^\|(?!$)/,
                tag:    'plain',
                then:   'tablestring'
            },            
            {
                regex:  /^#.*/,
                tag:    'comment'
            },
            {
                regex:  /^ @.*/,
                tag:    'comment'
            },            
            {
                regex:  /^./,
                tag:    'plain'
            }
        ],

        qqstring: [
            {
                regex:  /^"/,
                tag:    'string',
                then:   'start'
            },
            {
                regex:  /^(?:\\.|[^"\\])+/,
                tag:    'string'
            }
        ],
        
        tablestring: [          
            {
                regex:  /^.(?=\|)/,
                tag:    'string',
                then:   'start'
            },               
            {
                regex:  /^[^\|]+(?!\|)/,
                tag:    'string'
            }
        ]
    }
});
