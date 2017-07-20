import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function Widget({ widget }) {
  return (
    <div className="Widget">
      <span className="Widget-id">
        {widget.id}
      </span>
      {widget.description}
    </div>
  );
}

Widget.propTypes = {
  widget: PropTypes.object.isRequired,
};

export default Widget;
