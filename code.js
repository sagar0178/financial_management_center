

$(function () {
  $('.list-group-flush >.list-group-item').click(function () {

    $('.list-group-flush >.list-group-item').each(function () {
      $(this).removeClass('active-btn');
    });

    $(this).addClass('active-btn');

  })
});