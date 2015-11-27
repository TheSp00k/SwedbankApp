
Template.question.helpers({
    getQuizFormSchema: function() {
        return Schema.quizSchema;
    },
    getVarFromSession: function() {
        return Session.get('result');
    }
});


AutoForm.hooks({
    'quizForm': {
        after: {
            method: function(error, result) {
                console.log(result);
                if (result) {
                    return Session.set('result', result);
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