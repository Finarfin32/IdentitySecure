import React from "react";
import QrReader from "react-web-qr-reader";

const QRReader = ({ setQR }) => {
  const delay = 500;

  const previewStyle = {
    width: 320,
  };

  const handleScan = (result) => {
    if (result.data) {
      setQR(result.data);
    }
  };

  const handleError = (error) => {
    console.log(error);
  };

  return (
    <>
      <QrReader
        delay={delay}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
    </>
  );
};

export default QRReader;
