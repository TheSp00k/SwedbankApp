Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('user_type', 'pointsUser');
        $('input[type=radio]:checked, input[type=checkbox]:checked').parentNode.addClass('checked');
    }
};

Template.quiz_navigation.events({
    'click a': function(e, tpl) {
        console.log(this.wizard);
        if (!this.wizard.route) {
            e.preventDefault();
            this.wizard.show(this.id);
            quiz = Session.get('quiz');
            console.log(quiz);
        }
    }
});

Template.wizardButtons.events({
    'mousedown .wizard-back-button': function(event) {
        event.preventDefault();
        quiz = Session.get('quiz');
        quiz.pop();
        Session.set('quiz', quiz);
        console.log(Session.get('quiz'));
        console.log(this.activeStep(false).formField);

    }
});

Template.question.events({
    //'submit #baseQuestion': function(event) {
    //    if (event.target.answers.value == 1) {
    //        user_type = "pointsUser";
    //    } else if(event.target.answers.value == 0) {
    //        user_type = "noPointsUser";
    //    }
    //    Session.set('user_type', user_type);
    //},
    'submit': function(event) {
        formId = event.target.id;
        Session.set('formId', event.target.id);
        question = $('form .headline h2').text();
        questions = Session.get('questions');
        questions.push({question: question});
        Session.set('questions', questions);
    },
    'change input[type=checkbox], change input[type=radio]': function(event) {
        if (event.currentTarget.type == 'radio') {
            $("label").removeClass('checked');
        }
        if(!$(event.target.parentNode).hasClass('checked')){
            $(event.target.parentNode).addClass('checked');
        } else {
            $(event.target.parentNode).removeClass('checked');
        }
    }
});