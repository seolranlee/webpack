import _ from 'lodash';
import printMe from './print';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  // 이제 Lodash를 스크립트로 가져온다.
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

  btn.innerHTML = 'Click me and check the console!';
  btn.onclick = printMe;

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());