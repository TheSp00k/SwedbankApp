var quizForm = new AutoForm(quizSchema);
Template.newQuestion.helpers({
    questionForm: function() {
        return quizForm;
    }
});