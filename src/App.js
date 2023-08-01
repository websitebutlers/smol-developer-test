import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Canvas from './components/Canvas';
import './styles/App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      elements: [],
      selectedElement: null,
    };
  }

  handleElementSelect = (element) => {
    this.setState({ selectedElement: element });
  }

  handleElementAdd = (element) => {
    this.setState(prevState => ({
      elements: [...prevState.elements, element],
    }));
  }

  handleElementDelete = (elementId) => {
    this.setState(prevState => ({
      elements: prevState.elements.filter(element => element.id !== elementId),
    }));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Sidebar 
          onElementSelect={this.handleElementSelect}
          onElementAdd={this.handleElementAdd}
          onElementDelete={this.handleElementDelete}
        />
        <Canvas 
          elements={this.state.elements}
          selectedElement={this.state.selectedElement}
        />
      </div>
    );
  }
}

export default App;