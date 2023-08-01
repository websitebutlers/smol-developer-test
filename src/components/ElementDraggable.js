import React from 'react';
import { useDrag } from 'react-dnd';
import PropTypes from 'prop-types';

import { ItemTypes } from '../utils/dragAndDrop';

const ElementDraggable = ({ id, children }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ELEMENT, id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {children}
    </div>
  );
};

ElementDraggable.propTypes = {
  id: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ElementDraggable;