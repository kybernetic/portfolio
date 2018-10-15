$('.progressbar').each(function () {
    $(this).find('.progressbar-bar').width(0);
});

$('.progressbar').each(function () {

    $(this).find('.progressbar-bar').animate({
        width: $(this).attr('data-percent')
    }, 2000);
});


// Part of the code responsible for loading percentages:

$('.progress-bar-percent[data-percentage]').each(function () {

    var progress = $(this);
    var percentage = Math.ceil($(this).attr('data-percentage'));

    $({ countNum: 0 }).animate({ countNum: percentage }, {
        duration: 2000,
        easing: 'linear',
        step: function () {
            // What todo on every count
            var pct = '';
            if (percentage == 0) {
                pct = Math.floor(this.countNum) + '%';
            } else {
                pct = Math.floor(this.countNum + 1) + '%';
            }
            progress.text(pct);
        }
    });
});