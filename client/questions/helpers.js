Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('user_type', 'pointsUser');
        console.log(Session.get('user_type'));
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
    steps: function () {
        return [
            {
                id: 'baseQuestion',
                formId: 'baseQuestion',
                title: function () {
                    return Schema.baseQuestion.schema('answers').autoform.question
                },
                template: 'questionForm',
                schema: Schema.baseQuestion
            },
            {
                id: 'question1',
                formId: 'question1',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question1.schema('answers').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    console.log(user_type);
                    return Schema[user_type].question1;
                }
            },
            {
                id: 'question2',
                formId: 'question2',
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question2.schema('answers').autoform.question
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
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question3.schema('answers').autoform.question
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
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question4.schema('answers').autoform.question
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
                title: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question5.schema('answers').autoform.question
                },
                template: 'questionForm',
                schema: function () {
                    user_type = Session.get('user_type');
                    return Schema[user_type].question5;
                },
                onSubmit: function (data, mergedData) {
                    console.log(mergedData.store.keys, data);
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
        if (doc.answers == "pointsUser" || doc.answers == "noPointsUser") {
            Session.set('user_type', doc.answers);
        }
    }
};

AutoForm.addHooks(null, hooksObject);
