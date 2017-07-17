import React from 'react';
import PropTypes from 'prop-types';

import WidgetList from './WidgetList';

function WidgetScene({ widgets, fetchWidgets, makeWidget }) {
  return (
    <div>
      <WidgetList widgets={widgets} />
      <button onClick={() => fetchWidgets()}>Fetch Widgets</button>
      <button
        onClick={() => makeWidget({ id: '5', description: 'Custom Widget' })}
      >
        Make a widget
      </button>
    </div>
  );
}

WidgetScene.propTypes = {
  widgets: PropTypes.array.isRequired,
  fetchWidgets: PropTypes.func.isRequired,
  makeWidget: PropTypes.func.isRequired,
};

export default WidgetScene;
