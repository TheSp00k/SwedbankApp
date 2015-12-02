Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('user_type', 'pointsUser');
    }
};

Template.quiz_navigation.events({
    'click a': function(e, tpl) {
        if (!this.wizard.route) {
            e.preventDefault();
            this.wizard.show(this.id);
        }
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
    }
});