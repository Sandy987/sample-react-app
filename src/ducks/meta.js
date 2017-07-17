import Immutable from 'immutable';
// Actions
const SET = 'my-app/meta/SET';
const REMOVE = 'my-app/meta/REMOVE';

const initState = new Immutable.Map();

// Reducer
export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    case SET:
      return state.set(action.key, action.value);
    case REMOVE:
      return state.remove(action.key);
    default:
      return state;
  }
}

// Action Creators
export function set(key, value) {
  return { type: SET, key, value };
}

export function remove(key) {
  return { type: REMOVE, key };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
