const modal = () => {
  //console.log('modal');
  const btnBlock = document.querySelector('.btn-block ');
  const btnSm = document.querySelectorAll('.btn-sm');
  const headerModal = document.querySelector('.header-modal'); //btn-sm
  const servicesModal = document.querySelector('.services-modal');

  const overlay = document.querySelector('.overlay'); //.services-modal__close
  const headerModalClose = headerModal.querySelector('.header-modal__close');
  const servicesModalClose = servicesModal.querySelector('.services-modal__close');

  btnBlock.addEventListener('click', () => {
    overlay.style.display = 'flex';
    headerModal.classList.remove('header-modal');
  });

  headerModalClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    headerModal.classList.add('header-modal');
  });

  btnSm.forEach((el) => {
    el.addEventListener('click', () => {
      overlay.style.display = 'flex';
      servicesModal.classList.remove('services-modal');
    });
  });

  servicesModalClose.addEventListener('click', () => {
    overlay.style.display = 'none';
    servicesModal.classList.add('services-modal');
  });
};

export default modal;
