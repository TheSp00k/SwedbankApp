Schema = {};
Schema.baseQuestion = new SimpleSchema({
    answers: {
        type: String,
        label: "Ar esate e-taškų kaupimo dalyvis?",
        autoform: {
            label: false,
            type: "select-radio",
            options: function () {
                return [
                    {
                        label: "Taip",
                        value: 1
                    },
                    {
                        label: "Ne",
                        value: 0
                    }
                ];
            }
        }
    },

    questionNr: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "0"
            }
        }
    },
    question: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "Ar esate e-taškų kaupimo dalyvis?"
            }
        }
    }
});

Schema.pointsUser = {
    question1: new SimpleSchema({
        answers: {
            type: [String],
            autoform: {
                type: "select-checkbox",
                label: false,
                options: function () {
                    return [
                        {
                            label: "Periodiniai mokėjimai su nuolaida",
                            value: 1
                        },
                        {
                            label: "SMS Mobiliajame banke",
                            value: 2
                        },
                        {
                            label: "Mokėjimai į kitus bankus su nuolaida",
                            value: 3
                        },
                        {
                            label: "Mokėjimai banko viduje su nuolaida",
                            value: 4
                        },
                        {
                            label: "Debeto kortelės aptarnavimas",
                            value: 5
                        },
                        {
                            label: "Nuolaida 'Senjorų pramogoms' mokesčiui",
                            value: 6
                        },
                        {
                            label: "Klasikinės kredito kortelės aptarnavimas",
                            value: 7
                        },
                        {
                            label: "Kita",
                            value: 8
                        }
                    ];
                }
            }
        }
    }),
    question2: new SimpleSchema({
        answers: {
            type: String,
            autoform: {
                type: "select-radio",
                label: false,
                options: function () {
                    return [
                        {
                            label: "Iki 1 mėnesio",
                            value: 1
                        },
                        {
                            label: "1-3 mėnesius",
                            value: 2
                        },
                        {
                            label: "3-6 mėnesius",
                            value: 3
                        },
                        {
                            label: "6-12 mėnesių",
                            value: 4
                        },
                        {
                            label: "Metus ir daugiau",
                            value: 5
                        }
                    ];
                }
            }
        }
    }),
    question3: new SimpleSchema({
        answers: {
            type: String,
            autoform: {
                type: "select-radio",
                label: false,
                options: function () {
                    return [
                        {
                            label: "Radau socialiniame tinkle",
                            value: 1
                        },
                        {
                            label: "Parodė draugas",
                            value: 2
                        },
                        {
                            label: "Parodė šeimos narys",
                            value: 3
                        },
                        {
                            label: "Radau swedbank svetainėje",
                            value: 4
                        },
                        {
                            label: "Kita",
                            value: 5
                        }
                    ];
                }
            }
        }
    }),
    question4: new SimpleSchema({
        answers: {
            type: String,
            autoform: {
                label: false
            }

        }
    }),
    question5: new SimpleSchema({
        answers: {
            type: String,
            autoform: {
                label: false
            }
        }
    })
};

Schema.noPointsUser = {
    question1: new SimpleSchema({
        answers: {
            type: String,
            label: "Dėl kokių priežasčių nesinaudojate e-taškų kaupimo programa?",
            autoform: {
                type: "select-radio",
                options: function () {
                    return [
                        {
                            label: "Nežinau kas tai yra",
                            value: 1
                        },
                        {
                            label: "Nežinau kaip užsiregistruoti",
                            value: 2
                        },
                        {
                            label: "Neturiu el. bankininkystės",
                            value: 3
                        },
                        {
                            label: "Netenkina prizai",
                            value: 4
                        },
                        {
                            label: "Kita",
                            value: 5
                        }
                    ];
                }
            }
        }

    }),
    question2: new SimpleSchema({
        answers: {
            type: String,
            label: "Kokie yra e-taškų programos trūkumai?"
        }
    }),
    question3: new SimpleSchema({
        answers: {
            type: String,
            label: "Ar galėtumėte parekomenduoti e-taškų kaupimo programą savo pažįstamiems?",
            autoform: {
                type: "select-radio",
                options: function () {
                    return [
                        {
                            label: "Taip",
                            value: 1
                        },
                        {
                            label: "Ne",
                            value: 0
                        }
                    ];
                }
            }
        }
    })
};

//https://github.com/forwarder/meteor-wizard