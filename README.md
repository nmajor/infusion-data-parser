How to use the templates:

1. Select one of the templates at https://github.com/nmajor/infusion-data-parser/tree/master/templates

Right now there are 4 templates:

```
isform-2-step-shipping.html - Form split into 2 steps with shipping
isform-2-step.html          - Form split into 2 steps
isform-shipping.html        - Basic one page form with shipping
isform.html                 - Basic one page form
```

2. Copy all the template code into wordpress. All the css is included in the template.

3. Create a new legacy form and preview it.

4. View the full html of the preview page (right click->view page source)

5. Copy the all the html for the page into the input box at: https://nmajor.github.io/infusion-data-parser/

6. Copy the generated html input tags and replace the input tags in the template code in WordPress. You can find the ones you need to replace by searching the text for an HTML comment that says "CHANGE THESE FIELDS BELOW"

7. Replace the Form id. You can find the place where the form id needs to change by searching for the text "CHANGE FORM ID"

IMPORTANT: Right now the designs and html don't anticipate having any more than 1 shipping option. For example if you have like a rush shipping and a standard shipping we will need to add a selector for the user to select which shipping they want and we will need to change the javascript a bit as well.
