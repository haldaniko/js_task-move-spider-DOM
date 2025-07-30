'use strict';

document.addEventListener('click', (e) => {
  const wall = document.querySelector('.wall');
  const spider = document.querySelector('.spider');

  const wallRect = wall.getBoundingClientRect();
  const spiderRect = spider.getBoundingClientRect();

  const spiderHalfWidth = spider.offsetWidth / 2;
  const spiderHalfHeight = spider.offsetHeight / 2;

  let left = e.clientX - wallRect.left - spiderHalfWidth;
  let top = e.clientY - wallRect.top - spiderHalfHeight;

  left = Math.max(0, Math.min(left, wall.clientWidth - spider.offsetWidth));
  top = Math.max(0, Math.min(top, wall.clientHeight - spider.offsetHeight));

  spider.style.position = 'absolute';
  spider.style.left = `${left}px`;
  spider.style.top = `${top}px`;
});
