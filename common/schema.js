quizSchema = new SimpleSchema({
    question: {
        type: String,
        autoform: {
            type: "select-radio",
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
    }
});