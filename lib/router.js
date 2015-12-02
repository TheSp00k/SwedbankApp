Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'root',
    controller: 'MainPageController',
    waitOn: function () {
        Session.set('user_type', 'pointsUser');
    }
});

Router.route('/new', {
    name: 'newQuestion',
    controller: 'BaseController'
});

Router.route('/summary', {
    name: 'summary',
    template: 'mainLayout',
    data: function() {
        return {
            quiz: Session.get('quiz'),
            summary: true
        };
    }
});

Router.route('/:_id', {
    name: 'singleQuestion',
    controller: 'SingleQuestionController'
});