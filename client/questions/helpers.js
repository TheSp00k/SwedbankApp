Template.question.helpers({
    getQuizFormSchema: function () {
        return Schema.baseQuestion;
    },
    getVarFromSession: function () {
        return Session.get('answer');
    },
    getQuestionsCount: function () {
        //return Session.get('questions');
    },
    nextButton: "Toliau",
    steps: function () {
        return [
            {
                id: 'base',
                //title: 'Information',
                schema: Schema.baseQuestion,
                data: function(data) {
                    console.log('qqqq');
                }
                //onSubmit: function (data) {
                //    if (data.answer == 1) {
                //        user_type = 'points_user';
                //    } else {
                //        user_type = 'non-points_user';
                //    }
                //    Session.set('user_type', user_type);
                //}
                //onSubmit: function(data, wizard) {
                //    console.log(wizard);
                //    if (data.answer == 1) {
                //        user_type = 'points_user';
                //    } else {
                //        user_type = 'non-points_user';
                //    }
                //    Session.set('user_type', user_type);
                //}
            },
            {
                id: 'question1',
                //title: 'Confirm',
                //schema: Schema.question1,
                schema: function() {
                    console.log('asdsadas');
                    console.log(Session.get('user_type'));
                    if (Session.get('user_type') == 'points_user') {
                        return Schema.question1;
                    } else {
                        return Schema.question2;
                    }
                },
                onSubmit: function (data, wizard) {
                    if (data.answer == 1) {
                        user_type = 'points_user';
                    } else {
                        user_type = 'non-points_user';
                    }
                    Session.set('user_type', user_type);
                }
            }
        ]
    },
    nextButton: {
        label: 'qweqwe',
        id: 'qqq'
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