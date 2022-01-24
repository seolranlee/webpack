import _ from 'lodash';
// import Print from './print';

function component() {
  const element = document.createElement('div');

  // 이제 Lodash를 스크립트로 가져온다.
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

document.body.appendChild(component());