Template.question.helpers({
    getFormHeader: function () {
        return Schema.baseQuestion.schema('answers').label;
    },
    getVarFromSession: function () {
        return Session.get('answer');
    },

    pointsUser: function () {
        return Session.get('user_type') === 'pointsUser';
    },
    noPointsUser: function () {
        return Session.get('user_type') === 'noPointsUser';
    },
    getQuestionsCount: function () {
        //return Session.get('questions');
    },
    pointsSteps: function() {
        return [
            {
                id: 'question1',
                schema: Schema.points.question1
            },
            {
                id: 'question2',
                schema: Schema.points.question2
            },
            {
                id: 'question3',
                schema: Schema.points.question3
            },
            {
                id: 'question4',
                schema: Schema.points.question4
            },
            {
                id: 'question5',
                schema: Schema.points.question5,
                onSubmit: function(data) {
                    console.log(data);
                }
            }
        ]
    },
    noPointsSteps: function () {
        return [
            {
                id: 'question1',
                schema: Schema.noPoints.question1
            },
            {
                id: 'question2',
                schema: Schema.noPoints.question2
            },
            {
                id: 'question3',
                schema: Schema.noPoints.question3,
                onSubmit: function(data) {
                    console.log(data);
                }
            }
        ]
    }
});

AutoForm.hooks({
    'quizForm': {
        after: {
            method: function (error, answer) {
                console.log('asdasdadad');
                if (answer) {
                    Session.set('answer', answer);
                }
            }
        }
    }
});

//var quizForm = new AutoForm(Schema.echoSchema);
//Template.newQuestion.helpers({
//    questionForm: function() {
//        return quizForm;
//    }
//});