Schema = {};
Schema.baseQuestion = new SimpleSchema({
    answer: {
        type: String,
        label: "Ar esate e-taškų kaupimo dalyvis?",
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

Schema.question1 = new SimpleSchema({
    answer: {
        type: String,
        label: "qqqq",
        autoform: {
            type: "select-radio",
            group: "qqqq",
            options: function () {
                return [{
                    label: "Yews",
                    value: 1
                }, {
                    label: "Noa",
                    value: 0
                }];
            }
        }
    },

    questionNr: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "1"
            }
        }
    },
    question: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "wwww"
            }
        }
    }
});
Schema.question2 = new SimpleSchema({
    answer: {
        type: String,
        label: "wwww",
        autoform: {
            type: "select-radio",
            group: "wwww",
            options: function () {
                return [{
                    label: "Yezs",
                    value: 1
                }, {
                    label: "Noaa",
                    value: 0
                }];
            }
        }
    },

    questionNr: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "1"
            }
        }
    },
    question: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "qqqq"
            }
        }
    }
});
Schema.question3 = new SimpleSchema({
    answer: {
        type: String,
        label: "asasas",
        autoform: {
            type: "select-radio",
            group: "asasas",
            options: function () {
                return [{
                    label: "Yesqq",
                    value: 1
                }, {
                    label: "Noz",
                    value: 0
                }];
            }
        }
    },

    questionNr: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "1"
            }
        }
    },
    question: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "qqqq"
            }
        }
    }
});
Schema.question4 = new SimpleSchema({
    answer: {
        type: String,
        label: "qqqq",
        autoform: {
            type: "select-radio",
            group: "qqqq",
            options: function () {
                return [{
                    label: "Yes",
                    value: 1
                }, {
                    label: "No",
                    value: 0
                }];
            }
        }
    },

    questionNr: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "1"
            }
        }
    },
    question: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "qqqq"
            }
        }
    }
});
Schema.question5 = new SimpleSchema({
    answer: {
        type: String,
        label: "qqqq",
        autoform: {
            type: "select-radio",
            group: "qqqq",
            options: function () {
                return [{
                    label: "Yes",
                    value: 1
                }, {
                    label: "No",
                    value: 0
                }];
            }
        }
    },

    questionNr: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "1"
            }
        }
    },
    question: {
        type: String,
        optional: true,
        autoform: {
            afFieldInput: {
                type: "hidden",
                value: "qqqq"
            }
        }
    }
});


//https://github.com/forwarder/meteor-wizard