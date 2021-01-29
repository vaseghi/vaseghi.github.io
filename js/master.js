document.writeln('<meta charset="UTF-8" />');
document.writeln('<meta name="viewport" content="width=device-width, initial-scale=1.0" />');
document.writeln('<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet" />');
document.writeln('<link rel="stylesheet" href="/css/reset.css" />');
document.writeln('<link rel="stylesheet" href="/css/styles.css" />');
document.writeln('<link rel="stylesheet" href="/css/theme.css" />');

$.get('/shared/header.html', header => {
  $('body').prepend(header);
})