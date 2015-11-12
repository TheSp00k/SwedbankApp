Meteor.methods({
    submitQuestion: function(question) {

        var additionalParams = {
            author: 'Author'
        };

        _.extend(question, additionalParams);
        question._id = Quiz.insert(question);

        return question;
    }
});