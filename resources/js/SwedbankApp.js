if (Meteor.isClient) {
    // counter starts at 0
    Session.setDefault('counter', 0);

    Template.hello.helpers({
        counter: function () {
            return Session.get('counter');
        }
    });

    Template.hello.events({
        'click #button': function () {
            $('#zzz').addClass("animated bounceInLeft");
            // increment the counter when button is clicked
            Session.set('counter', Session.get('counter') + 1);
        }
    });
    Template.points_wrapper.events({
        'click #slide-trigger': function(event) {
            console.log(event);
            if ($(event.currentTarget.parentNode).hasClass('expanded')) {
                $(event.currentTarget.parentNode).animate({height: "182px"}, 500);
                $(event.currentTarget.parentNode).removeClass('expanded');
            } else {
                $(event.currentTarget.parentNode).animate({height: "422px"}, 500);
                $(event.currentTarget.parentNode).addClass('expanded');
            }
        }
    });
}

if (Meteor.isServer) {
    Meteor.startup(function () {
        // code to run on server at startup
    });
}
