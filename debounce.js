function debounce(callback, delay) {
  let timeout;
  return () => {
    clearTimeout(timeout);
    timeout = setTimeout(function() {
      timeout = null;
      callback();
    }, delay);
  };
};

const input = document.querySelector('input');
input.addEventListener('keydown', debounce(() => {
  alert('Почему вы перестали печатать?');
}, 1000));
