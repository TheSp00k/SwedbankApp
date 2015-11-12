Template.points_explain.events({
    'click #slide-trigger': function(event) {

        if ($(event.currentTarget.parentNode).hasClass('expanded')) {
            $(event.currentTarget.parentNode).animate({top: '175px'}, 'slow');
            $('#points-explain-container').hide('slow');
            $(event.currentTarget.parentNode).removeClass('expanded');
        } else {
            $(event.currentTarget.parentNode).animate({top: '90px'}, 'slow');
            $('#points-explain-container').show('slow');
            $(event.currentTarget.parentNode).addClass('expanded');
        }
    }
});