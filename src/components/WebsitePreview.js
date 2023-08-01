import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { message } from 'antd';

import 'src/styles/WebsitePreview.css';

class WebsitePreview extends React.Component {
  static propTypes = {
    elements: PropTypes.array.isRequired,
  };

  componentDidUpdate(prevProps) {
    if (prevProps.elements !== this.props.elements) {
      this.previewWebsite();
    }
  }

  previewWebsite = () => {
    const { elements } = this.props;
    const previewFrame = document.getElementById('website-preview-frame');
    const previewDocument = previewFrame.contentDocument;

    previewDocument.open();
    previewDocument.write('<html><body></body></html>');
    previewDocument.close();

    elements.forEach(element => {
      const newElement = previewDocument.createElement(element.tag);
      Object.keys(element.attributes).forEach(key => {
        newElement.setAttribute(key, element.attributes[key]);
      });
      previewDocument.body.appendChild(newElement);
    });

    message.success('Website preview updated');
  };

  render() {
    return (
      <div className="website-preview">
        <h2>Website Preview</h2>
        <iframe id="website-preview-frame" title="Website Preview"></iframe>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  elements: state.elements,
});

export default connect(mapStateToProps)(WebsitePreview);