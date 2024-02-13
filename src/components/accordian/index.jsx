import React, {useState} from 'react'
import styles from './styles.module.css'
import data from "./data";

export const Accordian = () => {
  const [selected, setSelected] = useState(null)
  const [enableMultiSelection, setEnableMultiSelection] = useState(false)
  const [multiple, setMultiple] = useState([])

  const handleSingleSelection = getCurrentId => {
    setSelected(getCurrentId === selected ? null : getCurrentId)
  };

  const handleMultiSelection = (currentId) => {
    let copyMultiple = [...multiple]

    const findIndexCurrentId = copyMultiple.indexOf(currentId)

    if(findIndexCurrentId === -1) {
      copyMultiple.push(currentId)
    } else {
      copyMultiple.splice(findIndexCurrentId, 1)
    }

    setMultiple(copyMultiple)
  }

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setEnableMultiSelection(!enableMultiSelection)} >{enableMultiSelection ? 'Disable' : 'Enable'} Multi Selection</button>
      <div className={styles.accordian}>
        {
          data && data.length > 0
              ? data.map((dataItem) => (
                  <div className={styles.item}>
                    <div
                        onClick={enableMultiSelection
                        ? () => handleMultiSelection(dataItem.id)
                        : () => handleSingleSelection(dataItem.id)}
                        className={styles.title}
                    >
                      <h3>{dataItem.question}</h3>
                      <span>+</span>
                    </div>
                    {
                      selected === dataItem.id ||
                      multiple.indexOf(dataItem.id) !== -1
                        ? <div className={styles.content} >{dataItem.answer}</div>
                        : null}
                  </div>
              ))
              : <div>No data found !</div>
        }
      </div>
    </div>
  )
}
