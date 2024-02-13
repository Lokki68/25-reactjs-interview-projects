import QRCode from "react-qr-code";
import {useState} from "react";

export default function QrCodeGenerator(props) {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  const handleGenerateQrCode = () => {
    setQrCode(input)
    setInput('')
  }

  return (
      <div >
        <h1>QR Code generator</h1>
        <div >
          <input
            onChange={e => setInput(e.target.value)}
            type='text'
            name='qr-code'
            value={input}
            placeholder='Enter your value here'
          />
          <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode} >Generate</button >
        </div >
        <div>
          <QRCode
              id='qr-code-value'
              value={qrCode}
              size={200}
              bgColor='#fff'
          />
        </div>
      </div >
  );
}

