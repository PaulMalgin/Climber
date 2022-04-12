/* eslint-disable no-restricted-globals */
/* eslint-disable no-use-before-define */
/* eslint-disable no-plusplus */
/* eslint-disable no-bitwise */
window.alert('Управление клавишами "Z","X"');
const step = document.querySelectorAll('.step');
let count = 0;
const finish = document.querySelector('.finish');
const solnce = document.querySelector('.soln_1');
const solnce2 = document.querySelector('.soln_2');
let count2 = 0;

document.addEventListener('keydown', (event) => {
  if (event.code === 'KeyZ' & count <= 8 & count > 0) {
    event.preventDefault();
    count--;
    solnce.style.left = `${10 + (count2 * 5)}%`;
    solnce2.style.left = `${10 + (count2 * 5)}%`;
    count2++;
    higth();
    const clipmer = document.querySelector('.climper');
    step[count].appendChild(clipmer);
    if (count < 8) {
      finish.style.display = finish.style.display === 'block' ? 'none' : 'none';
      solnce.style.display = finish.style.display === 'block' ? 'none' : 'none';
      solnce2.style.display = finish.style.display === 'none' ? 'block' : 'block';
    }
  }
  if (event.code === 'KeyX' & count >= 0 & count < 8) {
    count++;
    solnce.style.left = `${10 + (count2 * 5)}%`;
    solnce2.style.left = `${10 + (count2 * 5)}%`;
    const clipmer = document.querySelector('.climper');
    step[count].appendChild(clipmer);
    count2++;
    higth();

    if (count === 8) {
      finish.style.display = finish.style.display === 'none' ? 'block' : 'block';
      solnce.style.display = finish.style.display === 'none' ? 'block' : 'block';
      solnce2.style.display = finish.style.display === 'block' ? 'none' : 'none';
    }
  }
  console.log(count2);
});
function higth() {
  const moon = document.querySelector('.moon');

  if (count2 === 15) {
    const body = document.querySelector('body');
    body.style.backgroundColor = 'grey';
    solnce.style.display = 'none';
    solnce2.style.display = 'none';
    moon.style.display = 'block';
  } else if (count2 === 16) {
    window.alert('Альпинисты ночами не ползают по горам =) Нажми ОК перезагрузи день!!');
    count2 = 0;
    location.reload();
  }
}
