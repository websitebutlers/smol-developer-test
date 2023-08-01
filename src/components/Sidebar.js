import React from 'react';
import ElementList from './ElementList';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar">
            <h2>Elements</h2>
            <ElementList />
        </div>
    );
};

export default Sidebar;