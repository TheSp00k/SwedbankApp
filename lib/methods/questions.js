//Meteor.methods({
//    submitQuestion: function(question) {
//
//        var additionalParams = {
//            author: 'Author'
//        };
//        _.extend(question, additionalParams);
//        if(question._id) {
//            var id = question._id;
//            delete question._id;
//            question._id = Quiz.update(id, {$set: question});
//        } else {
//            question._id = Quiz.insert(question);
//        }
//        return question;
//    }
//});
questions = {};
Meteor.methods({
    firstQuestionAnswered: function (doc) {
        questions[doc.questionNr] = {
            question: doc.question,
            answer: doc.answer
        };
        var nextSchema;
        if (doc.answer == 1) {
            nextSchema = "pointsUser";
        } else {
            nextSchema = "nonPointsUser";
        }

        return questions;
        //Session.set('questions', questions);
    }
});