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
        quiz = Session.get('quiz');
        questions = Session.get('questions');
        console.log(quiz.concat(questions));
        return {
            quiz: Session.get('quiz'),
            questions: Session.get('questions'),
            summary: true
        };
    }
});

Router.route('/:_id', {
    name: 'singleQuestion',
    controller: 'SingleQuestionController'
});