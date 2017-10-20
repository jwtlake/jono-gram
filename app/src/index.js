import './style.css';

function component() {
  const element = document.getElementById('app');

  element.innerHTML = 'Hello World';
  element.classList.add('hello');

  return element;
}

document.body.appendChild(component());
