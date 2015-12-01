Template.question.rendered = function() {
    if(!this._rendered) {
        this._rendered = true;
        Session.set('formId', 'baseQuestion');
        Session.set('baseQuestion', Schema.baseQuestion.schema('answers').label);

    }
};
Template.question.events({
    'submit #baseQuestion': function(event) {
        if (event.target.answers.value == 1) {
            user_type = "pointsUser";
        } else if(event.target.answers.value == 0) {
            user_type = "noPointsUser";
        }
        Session.set('user_type', user_type);
    },
    'submit': function(event) {
        Session.set('formId', event.target.id);
    }
});