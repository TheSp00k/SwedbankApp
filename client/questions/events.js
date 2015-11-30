Template.question.events({
    //'submit': function(event) {
    //    event.preventDefault();
    //    console.log(event.target);
    //    //Session.set('nextSchema', nextSchema);
    //    //Session.set('quiz', questions);
    //
    //},
    'submit #insertPostForm': function(event) {
        console.log(event.target.answers.value);
        if (event.target.answers.value == 1) {
            user_type = "pointsUser";
        } else if(event.target.answers.value == 0) {
            user_type = "noPointsUser";
        }
        Session.set('user_type', user_type);
    }
});