import { createSelector } from 'reselect';

const widgetSelector = state => {
  return state.get('widgets');
};

export const allWidgets = createSelector(widgetSelector, widgets =>
  widgets.toList().toJS()
);

export const regularWidgets = createSelector(allWidgets, widgets =>
  widgets.filter(w => w.get('status') === 'regular')
);

export const faultyWidgets = createSelector(allWidgets, widgets =>
  widgets.filter(w => w.get('status') === 'faulty')
);
