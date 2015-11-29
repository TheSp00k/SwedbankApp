Template.question.events({
    'submit': function(event) {
        event.preventDefault();
        console.log(event.target);
        //Session.set('nextSchema', nextSchema);
        //Session.set('quiz', questions);

    }
});