Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('user_type', 'pointsUser');
console.log(Session.get('user_type'));
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
        Session.set('formId', event.target.id);
    }
});