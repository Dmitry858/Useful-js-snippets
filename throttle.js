function throttle(callback, delay) {
  let isWaiting = false;
  return function () {
    if (!isWaiting) {
      callback.apply(this, arguments);
      isWaiting = true;
      setTimeout(() => {
        isWaiting = false;
      }, delay);
    }
  }
}

const onScroll = throttle(() => {
  console.log('anything');
}, 16);

document.addEventListener('scroll', onScroll);
