import Immutable from 'immutable';
import { allWidgets, faultyWidgets, regularWidgets } from './widgets';

describe('allWidgets', () => {
  it('returns no widgets when none exist', () => {
    const state = Immutable.fromJS({
      widgets: {},
    });
    const result = allWidgets(state);
    expect(result.length).toEqual(0);
  });
  it('returns all widgets when some exist', () => {
    const state = Immutable.fromJS({
      widgets: {
        '1': { id: '1', description: 'some widget' },
      },
    });
    const result = allWidgets(state);
    expect(result.length).toEqual(1);
  });
});
