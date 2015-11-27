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

    questionAnswered: function (doc) {
        //check(doc, Schema.echoSchema);

        questions[doc.questionNr] = {
            question: doc.question,
            answer: doc.answer
        };
        //Session.set('quiz',questions);
        //
        //console.log(Session.get('quiz'));
        return questions;
    }
});