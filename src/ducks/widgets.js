import Immutable from 'immutable';
// Actions
const LOAD = 'my-app/widgets/LOAD';
const CREATE = 'my-app/widgets/CREATE';
const UPDATE = 'my-app/widgets/UPDATE';
const REMOVE = 'my-app/widgets/REMOVE';

const initState = new Immutable.Map();

// Reducer
export default function reducer(state = initState, action = {}) {
  const widget = action.widget;
  switch (action.type) {
    case UPDATE:
    case CREATE:
      return state.set(widget.id, widget);
    case REMOVE:
      return state.delete(widget.id);
    default:
      return state;
  }
}

// Action Creators
export function loadWidgets() {
  return { type: LOAD };
}

export function createWidget(widget) {
  return { type: CREATE, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}

// side effects, only as applicable
// e.g. thunks, epics, etc
export const fetchWidgets = () => dispatch => {
  // Simulate network call
  setTimeout(() => {
    dispatch(updateWidget({ id: '1', description: 'Widget One' }));
    dispatch(updateWidget({ id: '2', description: 'Widget Two' }));
  }, 2000);
};

export const makeWidget = widget => dispatch => {
  // Simulate network call
  setTimeout(() => {
    dispatch(createWidget(widget));
  }, 2000);
};
