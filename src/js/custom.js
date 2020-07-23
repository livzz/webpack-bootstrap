import 'foundation-sites'
// const dropdown = new Foundation.Dropdown($('mydropdown'))
$(document).foundation();
$(document).on('open.zf.reveal', '[data-reveal]', function () {
  console.log('asdfasdfsadf')
  var modal = $(this);
  modal.find('input').focus();
});