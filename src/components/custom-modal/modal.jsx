import styles from './styles.module.css'

export const Modal = ({onClose, id, header, body, footer}) => {
  return (
    <div id={id || 'modal'} className={styles.modal} >
      <div className={styles.content} >
        <div className={styles.header}  >
          <span className={styles.closeModalIcon} onClick={onClose} >&times;</span>
          <h2>{header ? header : 'header'}</h2>
        </div>
        <div className={styles.body}  >
          {
            body 
            ? body 
            : (
              <div>
                <p>This our modal body</p>
              </div>
            )
          }
        </div>
        <div className={styles.footer}  >
          {
            footer 
            ? footer 
            : <h2>Footer</h2>
          }
        </div>
      </div>
    </div>
  )
}
