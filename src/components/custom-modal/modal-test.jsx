import { useState } from 'react'
import { Modal } from './modal'

export const ModalTest = () => {

  const [showModalPopup, setShowModalPopup] = useState(false)

  const toggleModalPopup = () => {
    setShowModalPopup(!showModalPopup)
  }
  return (
    <div >
      <button onClick={toggleModalPopup} >Open modal popup</button>

      {
        showModalPopup
          ? <Modal
              onClose={toggleModalPopup}
              body={<div>Customize body</div>}
            />
          : null
      }
    </div>
  )
}
