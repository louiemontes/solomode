let typeIndex = 0;
function createRandomType() {
  typeIndex++;
  return `RAND_${typeIndex}_${Math.random()}`;
}

export function makeActionCreator(type = createRandomType()) {
  const actionCreator = (payload) => ({type, payload});
  actionCreator.type = type;
  return actionCreator;
}

export function wrapDispatch(func, dispatch) {
  return function(...args) {
    dispatch(func(...args));
  }
}