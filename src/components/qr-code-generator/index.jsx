import QRCode from "react-qr-code";
import {useState} from "react";
import styles from './styles.module.css'

export default function QrCodeGenerator(props) {
  const [qrCode, setQrCode] = useState('')
  const [input, setInput] = useState('')

  const handleGenerateQrCode = () => {
    setQrCode(input)
    setInput('')
  }

  return (
      <div className={styles.container} >
        <h1>QR Code generator</h1>
        <div className={styles.inputContainer} >
          <input
            onChange={e => setInput(e.target.value)}
            type='text'
            name='qr-code'
            value={input}
            placeholder='Enter your value here'
          />
          <button disabled={input && input.trim() !== '' ? false : true} onClick={handleGenerateQrCode} >Generate</button >
        </div >
        <div className={styles.qrContainer}>
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

