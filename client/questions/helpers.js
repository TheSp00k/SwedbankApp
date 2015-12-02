Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('quiz', []);
        Session.set('questions', []);
        Session.set('user_type', 'pointsUser');
    }
};

Template.quiz_navigation.helpers({
    activeStepClass: function(id) {
        var activeStep = this.wizard.activeStep();
        return (activeStep && activeStep.id == id) && 'answered' || '';
    }
});

Template.questionForm.helpers({
    getFormId: function () {
        return Session.get('formId');
    },
    getAnswer: function () {
        return this.step.schema._schemaKeys[0];
    }
});

Template.question.helpers({
    getFormId: function () {
        return Session.get('formId');
    },

    steps: function () {
        return [
            {
                id: 'baseQuestion',
                formId: 'baseQuestion',
                formField: 'baseAnswer',
                title: function () {
                    return Schema.baseQuestion.schema('baseAnswer').autoform.question
                },
                template: 'questionForm',
                schema: Schema.baseQuestion
            },
            {
                id: 'question1',
                formId: 'question1',
                formField: 'answer1',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question1.schema('answer1').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question1;
                }
            },
            {
                id: 'question2',
                formId: 'question2',
                formField: 'answer2',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question2.schema('answer2').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question2;
                }
            },
            {
                id: 'question3',
                formId: 'question3',
                formField: 'answer3',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question3.schema('answer3').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question3;
                }
            },
            {
                id: 'question4',
                formId: 'question4',
                formField: 'answer4',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question4.schema('answer4').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question4;
                }
            },
            {
                id: 'question5',
                formId: 'question5',
                formField: 'answer5',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question5.schema('answer5').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question5;
                },
                onSubmit: function (data, mergedData) {
                    Router.go('summary');
                }
            }
        ]
    }
});

var hooksObject = {
    beginSubmit: function () {
        this.event.preventDefault();
        var submitButton = this.template.find("button[type=submit]") || this.template.find("input[type=submit]");
        if (submitButton) {
            submitButton.disabled = false;
        }
    },
    endSubmit: function () {
        this.event.preventDefault();
        var submitButton = this.template.find("button[type=submit]") || this.template.find("input[type=submit]");
        if (submitButton) {
            submitButton.disabled = false;
        }
    },
    onSubmit: function (doc) {
        question = this.formAttributes.schema.schema(Object.keys(doc)[0]).autoform.question;
        quiz = Session.get('quiz');
        quiz.push({answer: doc[Object.keys(doc)[0]], question: question});
        Session.set('quiz', quiz);
        if(doc.baseAnswer) {
            Session.set('user_type', doc.baseAnswer);
        }
    }
};

AutoForm.addHooks(null, hooksObject);
