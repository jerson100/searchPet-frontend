export default function debounceFunction(prevFn, fn, delay) {
  let timeId;
  return function () {
    const self = this;
    const args = arguments;
    prevFn.apply(self, args);
    if (timeId) clearTimeout(timeId);
    timeId = setTimeout(() => {
      fn.apply(self, args);
    }, delay);
  };
}
