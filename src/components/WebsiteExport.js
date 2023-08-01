import React from 'react';
import { websiteGenerator } from '../utils/websiteGenerator';

class WebsiteExport extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exportStatus: '',
    };
  }

  handleExport = () => {
    try {
      const exportedWebsite = websiteGenerator(this.props.elements);
      this.setState({ exportStatus: 'Website exported successfully!' });
      // Here you can handle the exported website, like saving it to a file
    } catch (error) {
      this.setState({ exportStatus: 'Error exporting website: ' + error.message });
    }
  }

  render() {
    return (
      <div>
        <button onClick={this.handleExport}>Export Website</button>
        <p>{this.state.exportStatus}</p>
      </div>
    );
  }
}

export default WebsiteExport;