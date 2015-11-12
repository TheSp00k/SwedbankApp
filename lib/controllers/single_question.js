SingleQuestionController = BaseController.extend({
    template: 'questionPage',

    waitOn: function(){
        return Meteor.subscribe('singleQuestion', this.params._id);
    },

    data: function() {
        return Quiz.findOne(this.params._id);
    }
});