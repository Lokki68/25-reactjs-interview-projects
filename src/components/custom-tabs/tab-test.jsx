
import React from 'react'
import { Tabs } from './tabs'

const RandomComponent = () => {
  return <div>Random Component </div>
}

export const TabTest = () => {

  const tabs = [
    {
      id: 1,
      label: 'Tab 1',
      content: <div>This is content Tab 1</div>
    },
    {
      id: 2,
      label: 'Tab 2',
      content: <div>This is content Tab 2</div>
    },
    {
      id: 3,
      label: 'Tab 3',
      content: <RandomComponent/>
    },
  ]

  const handleChange = (currentTabIndex) => {
    console.log(currentTabIndex)
  }

  return (
    <Tabs tabsContent={tabs} onChange={handleChange} />
  )
}

