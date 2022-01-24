import _ from 'lodash';
import './style.css';
import Icon from './icon.svg';

function component() {
  const element = document.createElement('div');

  // 이제 Lodash를 스크립트로 가져온다.
  element.innerHTML = _.join(['Hello', 'webpack', '()=>{}'], ' ');
  element.classList.add('hello');

  // 원래 있던 div에 이미지를 추가한다.
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon)

  return element;
}

document.body.appendChild(component());