var quizFields = {
    title: {
        type: String,
        label: 'Title'
    },
    body: {
        type: String,
        label: 'Body',
        autoform: {
            type: 'textarea',
            rows: 5
        }
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