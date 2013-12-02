this.options.annotateit.settings = [
    {
        "group": i18n.get("annotateit", "login"),
        "name": "username",
        "type": "text",
        "label": i18n.get("annotateit", "username"),
        "text": i18n.get("annotateit", "x-characters")
    },
    {
        "group": i18n.get("annotateit", "login"),
        "name": "password",
        "type": "text",
        "label": i18n.get("annotateit", "password"),
        "text": i18n.get("annotateit", "x-characters-pw"),
        "masked": true
    },
    {
        "group": i18n.get("annotateit", "login"),
        "name": "myDescription",
        "type": "description",
        "text": i18n.get("annotateit", "description")
    },
    {
        "group": i18n.get("annotateit", "logout"),
        "name": "myCheckbox",
        "type": "checkbox",
        "label": i18n.get("annotateit", "enable")
    },
    {
        "group": i18n.get("annotateit", "logout"),
        "name": "myButton",
        "type": "button",
        "label": i18n.get("annotateit", "disconnect"),
        "text": i18n.get("annotateit", "logout")
    }
];
this.options.annotateit.alignment = [
    [
        "username",
        "password"
    ]
];
this.options.annotateit.callback = function (settings) {
    aaaa = settings;
};