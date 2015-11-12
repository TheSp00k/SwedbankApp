Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'root',
    controller: 'MainPageController'
});

Router.route('/new', {
    name: 'newQuestion',
    controller: 'BaseController'
});

Router.route('/:_id', {
    name: 'singleQuestion',
    controller: 'SingleQuestionController'
});