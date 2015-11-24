var quizForms = {
    1: {
        question: "ka tu",
        fields: {
            input: {
                type: "text",
                name: "test",
                label: "Ats"
            }
        }
    },
    2: {
        question: "ka jus",
        fields: {
            input: {
                type: "radio",
                name: "test2",
                id: "testId",
                answers: ['yes', 'no'],
                label: "test test"
            }
        }
    }
};




var quizFields = {
    legend: {
        type: String,
        //label: 'Title',
        autoform: {
            value: 'ka tu'
        }
    },
    title: {
        type: String,
        label: 'Title'
    },
    _id: {
        type: String,
        optional: true,
        autoform: {
            omit: true
        }
    },
    createdAt: {
        type: Date,
        optional: true,
        autoform: {
            omit: true
        }
    }
};

QuizSchema = new SimpleSchema(quizFields);