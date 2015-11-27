Schema = {};
Schema.quizSchema = new SimpleSchema({
    answer: {
        type: String,
        label: "qqqq",
        autoform: {
            type: "select-radio",
            group: "qqqq",
            options: function() {
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