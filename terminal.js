import inquirer from "inquirer";

inquirer
    .prompt([
        {
            type: "checkbox",
            name: "loomad",
            message: "Vali enda lemmik loomad",
            choices: ["koerad", "kassid", "dinosaurused"]
        },
        {
            type: "confirm",
            name: "robot",
            message: "Kas sa oled robot?"
        },
        {
            type: "editor",
            name: "fail",
            message: "Kirjutada siia"
        },
        {
            type: "expand",
            name: "tegemine",
            message: 'Mida sa soovid peale tunde teha?',
            default: 'e',
            choices: [
                {
                    key: 'j',
                    name: 'Koju?',
                    value: 'minna koju',
                },
                {
                    key: 's',
                    name: 'sõbra juurde?',
                    value: 'minna sõbra juurde',
                },
                {
                    key: 'e',
                    name: 'suitsu?',
                    value: 'teha suitsu',
                },
                {
                    key: 'v',
                    name: 'Mängima?',
                    value: 'minna mängima',
                },
            ],
        },
        {
            type: "input",
            name: "nimi",
            message: "Sisesta enda nimi"
        },
        {
            type: "number",
            name: "vanus",
            message: "Sisesta enda vanus"
        },
        {
            type: "password",
            name: "parool",
            message: "Sisesta parool!",

        },
        {
            type: "rawlist",
            name: "kumb",
            message: "Vali!",
            choices: ["punane", "sinine"]
        },
    ])
    .then((answers) => {
    console.log(answers)
})
.catch((error) => {
    if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
    } else {
        // somethind else went wrong
    }
});