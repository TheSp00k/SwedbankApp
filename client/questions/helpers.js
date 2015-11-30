Template.question.helpers({
    getFormHeader: function () {
        return Schema.baseQuestion.schema('answers').label;
    },
    getVarFromSession: function () {
        return Session.get('answer');
    },
    getFormId: function () {
        return Session.get('formId');
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
                formId: 'pointsForm1',
                template: 'question1',
                schema: Schema.points.question1
            },
            {
                id: 'question2',
                formId: 'pointsForm2',
                template: 'question2',
                schema: Schema.points.question2
            },
            {
                id: 'question3',
                formId: 'pointsForm3',
                template: 'question3',
                schema: Schema.points.question3
            },
            {
                id: 'question4',
                formId: 'pointsForm4',
                template: 'question4',
                schema: Schema.points.question4
            },
            {
                id: 'question5',
                formId: 'pointsForm5',
                template: 'question5',
                schema: Schema.points.question5,
                onSubmit: function(data, mergedData) {
                    console.log(data, mergedData);
                }
            }
        ]
    },
    noPointsSteps: function () {
        return [
            {
                id: 'question1',
                formId: 'noPointsForm1',
                schema: Schema.noPoints.question1
            },
            {
                id: 'question2',
                formId: 'noPointsForm2',
                schema: Schema.noPoints.question2
            },
            {
                id: 'question3',
                formId: 'noPointsForm3',
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