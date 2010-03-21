# Cucumber / Gherkin Syntax Highlighter for Bespin #

## Overview ##
[Bespin](https://bespin.mozillalabs.com/) is an 'cloud' based IDE developed by Mozilla.  A less buzzword definition is a code editor in your web browser.  The Gherkin.js adds syntax highlighting for the Gherkin language which is a "Business Readable, Domain Specific Language that lets you describe software’s behaviour without detailing how that behaviour is implemented" used by Cucumber.  Please visit the [Cucumber home page](http://cukes.info/) for more information.

## How To Use ##
1. Download the latest Customizable version of Bespin editor (note: this plugin was developed against 0.6.2). 
2. Place the Gherkin.js file into the plugins/labs directory.  
3. In the Bespin root directory create a gherkin.json file which contains the following text:

	{
	    "output_dir": "tmp",
	    "plugins": ["Embedded", "Gherkin"],
	    "include_sample": true
	}

4. Run 'python dryice.py gherkin.json' in the Bespin root dir
5. Edit the tmp/sample/sample.html and change the following html:

	<div id="editor" class="bespin" data-bespinoptions='{ "settings": { "tabstop": 4 }, "syntax": "js", "stealFocus": true }'>

to

	<div id="editor" class="bespin" data-bespinoptions='{ "settings": { "tabstop": 4 }, "syntax": "gh", "stealFocus": true }'>

6. Open the sample.html file in Firefox and you should see syntax highlighting for Gherkin formatted text