import React, { useContext } from 'react';
import { ElementContext } from '../utils/elementFactory';

const ElementProperties = () => {
  const { selectedElement, updateElement } = useContext(ElementContext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    updateElement({ ...selectedElement, [name]: value });
  };

  return (
    <div className="element-properties">
      {selectedElement && (
        <form>
          <h2>Element Properties</h2>
          <label>
            ID
            <input
              type="text"
              name="id"
              value={selectedElement.id}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Class
            <input
              type="text"
              name="class"
              value={selectedElement.class}
              onChange={handleInputChange}
            />
          </label>
          <label>
            Content
            <input
              type="text"
              name="content"
              value={selectedElement.content}
              onChange={handleInputChange}
            />
          </label>
        </form>
      )}
    </div>
  );
};

export default ElementProperties;