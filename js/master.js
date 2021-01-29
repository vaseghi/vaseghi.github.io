$.get('/shared/head.html', head => {
  $('head').append(head);
})

$.get('/shared/header.html', header => {
  $('body').prepend(header);
})