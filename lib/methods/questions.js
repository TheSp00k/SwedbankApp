Meteor.methods({
    submitQuestion: function(question) {

        var additionalParams = {
            author: 'Author'
        };
        console.log(question);
        _.extend(question, additionalParams);
        if(question._id) {
            var id = question._id;
            delete question._id;
            question._id = Quiz.update(id, {$set: question});
        } else {
            question._id = Quiz.insert(question);
        }
        return question;
    }
});