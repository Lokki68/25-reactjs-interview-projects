import { useState } from 'react'
import styles from './styles.module.css'

export const Tabs = ({tabsContent, onChange}) => {

  const [currentTabIndex, setCurrentTabIndex] = useState(0)

  const handleOnClick = (getCurrentIndex) => {
    setCurrentTabIndex(getCurrentIndex)
    onChange(getCurrentIndex)
  }

  return (
    <div className={styles.wrapper} >
      <div className={styles.heading}>
        {tabsContent.map((tabItem, index) => (
          <div 
            className={
              `
              ${styles.tabItem}
              ${currentTabIndex === index && styles.active}
              `
            }
            key={tabItem.id} 
            onClick={() => handleOnClick(index)}  
            >
            <span >{tabItem.label}</span>
          </div>
        ))}
      </div>
      <div className={styles.content} >
        {
          tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content
        }
      </div>
    </div>
  )
}