import {useEffect, useState} from "react";
import styles from './styles.module.css'
export default function RandomColor(props) {

  const [typeOfColor, setTypeOfColor] = useState('hex')
  const [color, setColor] = useState('#000000')

  const randomColorUtility = length => Math.floor(Math.random() * length)

  const createHexColor = () => {
    const hex = [1,2,3,4,5,6,7,8,9,'A', 'B', 'C', 'D', 'E', 'F']
    let hexColor = '#'

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)]
    }

    setColor(hexColor)
  }

  function createRgbColor() {
    const r = randomColorUtility(256)
    const g = randomColorUtility(256)
    const b = randomColorUtility(256)

    setColor(`rgb(${r}, ${g}, ${b})`)
  }

  const handleCreateRandomColor = () => {
   if (typeOfColor === 'hex') createHexColor()
    if (typeOfColor === 'rgb') createRgbColor()
 }

  useEffect(() => {
    setColor('')
  }, [typeOfColor]);

  return (
      <div
          style={{
            backgroundColor: color
          }}
          className={styles.container}
      >
        <button onClick={() => setTypeOfColor('hex')} >Create HEX Color</button >
        <button onClick={() => setTypeOfColor('rgb')} >Create RGB Color</button >
        <button
            onClick={handleCreateRandomColor}
        >Generate Random Color</button >
        <div className={styles.resultContainer}>
          <h3>
            {typeOfColor === 'rgb' ? 'RGB' : 'HEX'} Color
          </h3>
          <h2>{color}</h2>
        </div>
      </div >
  );
}

