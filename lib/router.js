Router.configure({
    layoutTemplate: 'mainLayout'
});

Router.route('/', {
    name: 'root',
    waitOn: function () {
        Session.set('user_type', 'pointsUser');
    }
});

Router.route('/summary', {
    name: 'summary',
    template: 'mainLayout',
    onBeforeAction: function () {
        if (!Session.get('quiz')) {
            Router.go('/');
        } else {
            this.next();
        }
    },
    data: function () {
        return {
            quiz: Session.get('quiz'),
            summary: true
        };
    }
});