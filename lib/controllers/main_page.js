MainPageController = BaseController.extend({
    template: 'questionList',
    findOptions: function() {
        return { sort: {createdAt: -1}};
    },
    waitOn: function() {
        return Meteor.subscribe('allQuestions', this.findOptions());
    },
    //data: function() {
    //    return { questions: Quiz.find({}, { sort: { createdAt: -1 } }) };
    //}
});