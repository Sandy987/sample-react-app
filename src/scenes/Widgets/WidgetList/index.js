import React from 'react';
import PropTypes from 'prop-types';

import Widget from '../Widget';

function WidgetList({ widgets }) {
  return (
    <div>
      {widgets.map(widget => <Widget key={widget.id} widget={widget} />)}
    </div>
  );
}

WidgetList.propTypes = {
  widgets: PropTypes.array.isRequired,
};

export default WidgetList;
