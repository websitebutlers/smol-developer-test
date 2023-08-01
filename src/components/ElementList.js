import React from 'react';
import Element from './Element';
import { useDrag } from 'react-dnd';
import { elementFactory } from '../utils/elementFactory';

const ElementList = ({ elements }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: 'element' },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div ref={drag} style={{ opacity: isDragging ? 0.5 : 1 }}>
      {elements.map((element, index) => {
        const ElementComponent = elementFactory(element.type);
        return (
          <ElementComponent key={index} {...element.props}>
            {element.children && <ElementList elements={element.children} />}
          </ElementComponent>
        );
      })}
    </div>
  );
};

export default ElementList;