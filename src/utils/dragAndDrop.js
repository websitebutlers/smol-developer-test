import { useDrag, useDrop } from 'react-dnd';

export const ItemTypes = {
  ELEMENT: 'element',
};

export const useDraggableElement = (id) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: ItemTypes.ELEMENT, id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });
  return { isDragging, drag };
};

export const useDroppableElement = (id, onDrop) => {
  const [{ isOver }, drop] = useDrop({
    accept: ItemTypes.ELEMENT,
    drop: (item, monitor) => onDrop(item, monitor, id),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });
  return { isOver, drop };
};