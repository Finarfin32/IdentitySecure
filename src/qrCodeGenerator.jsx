import { useState, useRef } from "react";
import { QRCodeCanvas } from "qrcode.react";

const QrCodeGenerator = ({ token }) => {
  const qrRef = useRef();
  const downloadQRCode = (e) => {
    e.preventDefault();
    let canvas = qrRef.current.querySelector("canvas");
    let image = canvas.toDataURL("image/png");
    let anchor = document.createElement("a");
    anchor.href = image;
    anchor.download = `qr-code.png`;
    document.body.appendChild(anchor);
    anchor.click();
    document.body.removeChild(anchor);
  };

  const qrcode = (
    <QRCodeCanvas
      id="qrCode"
      value={token}
      size={300}
      bgColor={"#FFFFFF"}
      level={"H"}
    />
  );

  return (
    <div className="qrcode__container">
      <div ref={qrRef}>{qrcode}</div>
      <div className="input__group">
        <button onClick={downloadQRCode}>Pobierz QR code</button>
      </div>
    </div>
  );
};

export default QrCodeGenerator;
