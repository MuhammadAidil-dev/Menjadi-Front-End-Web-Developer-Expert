import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import render from './view/render';

document.addEventListener('DOMContentLoaded', () => {
  render();
});
