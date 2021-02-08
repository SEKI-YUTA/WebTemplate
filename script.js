const $openButton = document.getElementById('js-open_button');
const $closeButton = document.getElementById('js-close_button');
const $mainMenu = document.getElementById('js-main_menu');

$openButton.addEventListener('click',() => {
  $mainMenu.classList.add('open');
})
$closeButton.addEventListener('click',() => {
  $mainMenu.classList.remove('open');
})