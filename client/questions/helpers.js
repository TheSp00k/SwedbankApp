
Template.questionForm.helpers({
    getFormId: function () {
        return Session.get('formId');
    }
});

Template.question.helpers({
    getFormId: function () {
        return Session.get('formId');
    },
    getBaseFormHeader: function () {
        return Session.get('baseQuestion');
    },
    getFormHeader: function () {
        var formId = Session.get('formId');
        var user_type = Session.get('user_type');
        console.log(Schema[user_type]);
        console.log(Schema[user_type][formId].schema('answers').label);
        return Schema[user_type][formId].schema('answers').label;
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
                formId: 'question1',
                title: 'Kokiems prizams išleidžiate e-taškus?',
                template: 'questionForm',
                schema: Schema.pointsUser.question1
            },
            {
                id: 'question2',
                formId: 'question2',
                template: 'questionForm',
                title: 'Kiek laiko naudojatės e-taškų programa?',
                schema: Schema.pointsUser.question2
            },
            {
                id: 'question3',
                formId: 'question3',
                template: 'questionForm',
                title: 'Kaip sužinojote apie e-taškus?',
                schema: Schema.pointsUser.question3
            },
            {
                id: 'question4',
                formId: 'question4',
                template: 'questionForm',
                title: 'Kokios priežastys įtakojo pradėti prisijungti prie e-taškų kaupimo programos?',
                schema: Schema.pointsUser.question4
            },
            {
                id: 'question5',
                formId: 'question5',
                template: 'questionForm',
                title: 'Kokių prizų norėtumėte už e-taškus?',
                schema: Schema.pointsUser.question5,
                onSubmit: function(data, mergedData) {
                    console.log(mergedData.store.keys);
                }
            }
        ]
    },
    noPointsSteps: function () {
        return [
            {
                id: 'question1',
                formId: 'question1',
                schema: Schema.noPointsUser.question1
            },
            {
                id: 'question2',
                formId: 'question2',
                schema: Schema.noPointsUser.question2
            },
            {
                id: 'question3',
                formId: 'question3',
                schema: Schema.noPointsUser.question3,
                onSubmit: function(data, mergedData) {
                    console.log(mergedData.store.keys);
                }
            }
        ]
    }
});

var hooksObject = {
    beginSubmit: function() {
        this.event.preventDefault();
        var submitButton = this.template.find("button[type=submit]") || this.template.find("input[type=submit]");
        if (submitButton) {
            submitButton.disabled = false;
        }
    },
    endSubmit: function() {
        this.event.preventDefault();
        var submitButton = this.template.find("button[type=submit]") || this.template.find("input[type=submit]");
        if (submitButton) {
            submitButton.disabled = false;
        }
    }
};
AutoForm.addHooks(['question1', 'question2', 'question3', 'question4', 'question5'], hooksObject);

//AutoForm.hooks({
//    'question1': {
//        after: {
//            method: function (error, answer) {
//                console.log('asdasdadad');
//                if (answer) {
//                    Session.set('answer', answer);
//                }
//            }
//        },
//        endSubmit: function() {
//            console.log('qweqwe');
//            var submitButton = template.find("button[type=submit]") || template.find("input[type=submit]");
//            if (submitButton) {
//                submitButton.disabled = false;
//            }
//        }
//    }
//});

//var quizForm = new AutoForm(Schema.echoSchema);
//Template.newQuestion.helpers({
//    questionForm: function() {
//        return quizForm;
//    }
//});