Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('user_type', 'pointsUser');
        Session.set('quiz', []);
        Session.set('questions', []);
    }
};

Template.quiz_navigation.events({
    'click a': function(e, tpl) {
        if (!this.wizard.route) {
            e.preventDefault();
            var stepsByIndex = this.wizard._stepsByIndex;
            var currentStepIndex = stepsByIndex.indexOf(this.id);
            var totalSteps = stepsByIndex.length;
            this.wizard.show(this.id);
            quiz = Session.get('quiz');
            quiz.splice(currentStepIndex, totalSteps);
            Session.set('quiz', quiz);
        }
    }
});

Template.wizardButtons.events({
    'mousedown .wizard-back-button': function(event) {
        event.preventDefault();
        quiz = Session.get('quiz');
        quiz.pop();
        Session.set('quiz', quiz);
    }
});

Template.question.events({
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

Template.summary.events({
    'click #repeat-quiz': function() {
        Router.go('/');
    }
});