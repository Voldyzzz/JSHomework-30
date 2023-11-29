const blockRef = document.querySelector('.block'),
  body = document.querySelector('body');

setInterval(changeColor, 500);
setInterval(changePosition, 1000);

function changeColor() {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  blockRef.style.background = '#' + randomColor;
}

function changePosition() {
  const maxWidth = window.innerWidth - 100,
    maxHeight = window.innerHeight - 100,
    randomX = Math.floor(Math.random() * maxWidth),
    randomY = Math.floor(Math.random() * maxHeight);

  console.log(maxHeight);
  blockRef.style.left = `${randomX}px`;
  blockRef.style.top = `${randomY}px`;
}
