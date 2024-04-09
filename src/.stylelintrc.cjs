

module.exports = {
    extends: [
        "stylelint-config-standard",
        "stylelint-config-tailwindcss"
    ],
    "fix": true,
    "cache": true,
    plugins: [
        "stylelint-scss",
        "stylelint-selector-bem-pattern"
    ], 
    rules: {
        "at-rule-no-unknown": null,
        "scss/at-rule-no-unknown": [
            true,
            {
                'ignoreAtRules': ['tailwind']
            }
        ],
        "plugin/selector-bem-pattern": {
            "componentName": "[A-Z]+",
            "componentSelectors": {
              "initial": "^\\.{componentName}(?:-[a-z]+)?$",
              "combined": "^\\.combined-{componentName}-[a-z]+$"
            },
            "utilitySelectors": "^\\.util-[a-z]+$"
        },
    }
  };