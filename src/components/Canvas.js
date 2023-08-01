import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../utils/dragAndDrop';
import Element from './Element';
import './Canvas.css';

function Canvas({ elements, onDrop }) {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: (item, monitor) => onDrop(item.id, monitor),
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={`Canvas ${isOver ? 'Canvas--isOver' : ''}`}>
      {elements.map(element => (
        <Element key={element.id} id={element.id} properties={element.properties} />
      ))}
    </div>
  );
}

export default Canvas;