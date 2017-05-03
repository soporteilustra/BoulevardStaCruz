$('.item-menu').click(function () {
  var data = $(this).data('target');
  filter(data);
})

$('.item-all').click(function () {
  displayAll();
})

function filter(data) {
  $('.item-content').fadeOut("slow");
  $('*[data-kind="'+data+'"]').fadeIn(500);
}

function displayAll() {
  $('.item-content').fadeOut("slow");
  $('.item-content').fadeIn(1400);
}
