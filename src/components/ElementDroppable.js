import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/dragAndDrop';
import PropTypes from 'prop-types';

const ElementDroppable = ({ onDrop, children }) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: (item, monitor) => onDrop(item, monitor),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} style={{ height: '100%', width: '100%' }}>
      {React.cloneElement(children, { isOver })}
    </div>
  );
};

ElementDroppable.propTypes = {
  onDrop: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
};

export default ElementDroppable;