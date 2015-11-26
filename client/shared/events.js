Template.points_explain.events({
    'click #slide-trigger': function(event) {
        if ($(event.currentTarget.parentNode).hasClass('expanded')) {
            $(event.currentTarget.parentNode).animate({top: '175px'}, 'slow');
            $('#points-explain-container').hide('slow');
            $(event.currentTarget.parentNode).removeClass('expanded');
        } else {
            $(event.currentTarget.parentNode).animate({top: '90px'}, 'slow');
            $('#points-explain-container').show('slow');
            $(event.currentTarget.parentNode).addClass('expanded');
        }
    }
});

Template.newQuestion.events({
    'click #formSubmit': function(event) {

        //http://hackersome.com/p/medihack/meteor-autoform
        //https://www.google.lt/search?q=meteor+non-collection+forms&oq=meteor+non-collection+forms&aqs=chrome..69i57.10290j0j7&sourceid=chrome&es_sm=93&ie=UTF-8
        //http://stackoverflow.com/questions/29890608/get-autoform-non-collection-forms-method-return-value
        //https://github.com/aldeed/meteor-autoform#callbackshooks

        console.log(event.target);
        //var text = event.target.text.value;
        //
        //// Insert a task into the collection
        //Tasks.insert({
        //    text: text,
        //    createdAt: new Date() // current time
        //});
        //
        //// Clear form
        //event.target.text.value = "";

        var quizFields = {
            legend: {
                type: String,
                //label: 'Title',
                autoform: {
                    value: 'ka tu'
                }
            },
            title: {
                type: String,
                label: 'Titleee'
            },
            _id: {
                type: String,
                optional: true,
                autoform: {
                    omit: true
                }
            },
            createdAt: {
                type: Date,
                optional: true,
                autoform: {
                    omit: true
                }
            }
        };



        QuizSchema = new SimpleSchema(quizFields);
        Quiz.attachSchema(QuizSchema);
    }
});