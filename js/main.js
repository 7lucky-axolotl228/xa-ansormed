const elSiteHader = document.querySelector('.site-header');
const elSiteHeaderToggleBtn = elSiteHader.querySelector('.site-header-toggle-btn');

if (elSiteHeaderToggleBtn) {
  elSiteHeaderToggleBtn.addEventListener('click', function() {
    elSiteHader.classList.toggle('site-header--open')
  });
}