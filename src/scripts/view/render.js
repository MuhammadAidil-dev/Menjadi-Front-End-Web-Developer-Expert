import { getData } from '../services/utils';

const render = () => {
  const navList = document.querySelector('.nav-list');
  const hamburgerButton = document.querySelector('.hamburger-menu');
  // handle hamburger button click
  hamburgerButton.addEventListener('click', (event) => {
    event.stopPropagation();
    navList.classList.toggle('open');
  });
  // handle close sidebar
  document.addEventListener('click', (event) => {
    if (
      !hamburgerButton.contains(event.target) &&
      !navList.contains(event.target)
    ) {
      navList.classList.remove('open');
    }
  });

  // get data
  getData();
};

export default render;
