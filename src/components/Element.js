import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';
import '../styles/Element.css';

const Element = ({ id, name, type }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { id, name, type },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{ opacity: isDragging ? 0.5 : 1 }}
      className="element"
    >
      {name}
    </div>
  );
};

Element.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Element;