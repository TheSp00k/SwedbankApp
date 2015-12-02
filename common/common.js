Schema = {};
Schema.baseQuestion = new SimpleSchema({
    baseAnswer: {
        type: String,
        autoform: {
            type: "select-radio",
            label: false,
            question: 'Ar esate e-taškų kaupimo dalyvis?',
            options: function () {
                return [
                    {
                        label: "Taip",
                        value: "pointsUser"
                    },
                    {
                        label: "Ne",
                        value: "noPointsUser"
                    }
                ];
            }
        }
    }
});

Schema.pointsUser = {
    question1: new SimpleSchema({
        answer1: {
            type: [String],
            autoform: {
                type: "select-checkbox",
                label: false,
                question: 'Kokiems prizams išleidžiate e-taškus?',
                options: function () {
                    return [
                        {
                            label: "Periodiniai mokėjimai su nuolaida",
                            value: "Periodiniai mokėjimai su nuolaida"
                        },
                        {
                            label: "SMS Mobiliajame banke",
                            value: "SMS Mobiliajame banke"
                        },
                        {
                            label: "Mokėjimai į kitus bankus su nuolaida",
                            value: "Mokėjimai į kitus bankus su nuolaida"
                        },
                        {
                            label: "Mokėjimai banko viduje su nuolaida",
                            value: "Mokėjimai banko viduje su nuolaida"
                        },
                        {
                            label: "Debeto kortelės aptarnavimas",
                            value: "Debeto kortelės aptarnavimas"
                        },
                        {
                            label: "Nuolaida 'Senjorų pramogoms' mokesčiui",
                            value: "Nuolaida 'Senjorų pramogoms' mokesčiui"
                        },
                        {
                            label: "Klasikinės kredito kortelės aptarnavimas",
                            value: "Klasikinės kredito kortelės aptarnavimas"
                        },
                        {
                            label: "Kita",
                            value: "Kita"
                        }
                    ];
                }
            }
        }
    }),
    question2: new SimpleSchema({
        answer2: {
            type: String,
            autoform: {
                type: "select-radio",
                label: false,
                question: 'Kiek laiko naudojatės e-taškų programa?',
                options: function () {
                    return [
                        {
                            label: "Iki 1 mėnesio",
                            value: "Iki 1 mėnesio"
                        },
                        {
                            label: "1-3 mėnesius",
                            value: "1-3 mėnesius"
                        },
                        {
                            label: "3-6 mėnesius",
                            value: "3-6 mėnesius"
                        },
                        {
                            label: "6-12 mėnesių",
                            value: "6-12 mėnesių"
                        },
                        {
                            label: "Metus ir daugiau",
                            value: "Metus ir daugiau"
                        }
                    ];
                }
            }
        }
    }),
    question3: new SimpleSchema({
        answer3: {
            type: String,
            autoform: {
                type: "select-radio",
                question: "Kaip sužinojote apie e-taškus?",
                label: false,
                options: function () {
                    return [
                        {
                            label: "Radau socialiniame tinkle",
                            value: "Radau socialiniame tinkle"
                        },
                        {
                            label: "Parodė draugas",
                            value: "Parodė draugas"
                        },
                        {
                            label: "Parodė šeimos narys",
                            value: "Parodė šeimos narys"
                        },
                        {
                            label: "Radau swedbank svetainėje",
                            value: "Radau swedbank svetainėje"
                        },
                        {
                            label: "Kita",
                            value: "Kita"
                        }
                    ];
                }
            }
        }
    }),
    question4: new SimpleSchema({
        answer4: {
            type: String,
            autoform: {
                question: "Kokios priežastys įtakojo prisijungti prie e-taškų kaupimo programos?",
                label: false
            }
        }
    }),
    question5: new SimpleSchema({
        answer5: {
            type: String,
            autoform: {
                question: "Kokių prizų norėtumėte už e-taškus?",
                label: false
            }
        }
    })
};

Schema.noPointsUser = {
    question1: new SimpleSchema({
        answer1: {
            type: String,
            autoform: {
                label: false,
                question: "Dėl kokių priežasčių nesinaudojate e-taškų kaupimo programa?",
                type: "select-radio",
                options: function () {
                    return [
                        {
                            label: "Nežinau kas tai yra",
                            value: "Nežinau kas tai yra"
                        },
                        {
                            label: "Nežinau kaip užsiregistruoti",
                            value: "Nežinau kaip užsiregistruoti"
                        },
                        {
                            label: "Neturiu el. bankininkystės",
                            value: "Neturiu el. bankininkystės"
                        },
                        {
                            label: "Netenkina prizai",
                            value: "Netenkina prizai"
                        },
                        {
                            label: "Kita",
                            value: "Kita"
                        }
                    ];
                }
            }
        }

    }),
    question2: new SimpleSchema({
        answer2: {
            type: String,
            autoform: {
                label: false,
                question: "Kokie yra e-taškų programos trūkumai?"
            }
        }
    }),
    question3: new SimpleSchema({
        answer3: {
            type: String,
            autoform: {
                label: false,
                question: "Ar galėtumėte parekomenduoti e-taškų kaupimo programą savo pažįstamiems?",
                type: "select-radio",
                options: function () {
                    return [
                        {
                            label: "Taip",
                            value: "Taip"
                        },
                        {
                            label: "Ne",
                            value: "Ne"
                        }
                    ];
                }
            }
        }
    }),
    question4: new SimpleSchema({
        answer4: {
            type: String,
            autoform: {
                label: false,
                question: "Ar esate dalyvavę kitose e-taškų kaupimo programose?",
                type: "select-radio",
                options: function () {
                    return [
                        {
                            label: "Taip",
                            value: "Taip"
                        },
                        {
                            label: "Ne",
                            value: "Ne"
                        }
                    ];
                }
            }
        }
    }),
    question5: new SimpleSchema({
        answer5: {
            type: String,
            autoform: {
                label: false,
                question: "Ar naudojatės kitomis swedbank paslaugomis?",
                type: "select-radio",
                options: function () {
                    return [
                        {
                            label: "Taip",
                            value: "Taip"
                        },
                        {
                            label: "Ne",
                            value: "Ne"
                        }
                    ];
                }
            }
        }
    })
};

SimpleSchema.messages({
    required: "Jūs neatsakėte į klausimą"
});

//https://github.com/forwarder/meteor-wizard