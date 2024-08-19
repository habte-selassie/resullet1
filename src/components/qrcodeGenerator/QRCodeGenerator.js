import React from 'react';
import QRCode from 'qrcode.react';
import PropTypes from 'prop-types';
import './QRCodeGenerator.css';

const QRCodeGenerator = ({ value }) => {
  return (
    <div className="qr-code-container">
      <QRCode value={value} size={256} />
    </div>
  );
};

QRCodeGenerator.propTypes = {
  value: PropTypes.string.isRequired
};

export default QRCodeGenerator;
