import React, { useState } from 'react'
import { SplitterSide, Page, List, ListItem } from 'react-onsenui'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false)

  const onOpen = () => {
    setIsOpen(true)
  }

  const onClose = () => {
    setIsOpen(false)
  }

  return (
    <SplitterSide
      style={{
        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)'
      }}
      side="right"
      width={200}
      collapse={true}
      swipeable={true}
      isOpen={isOpen}
      onClose={onClose}
      onOpen={onOpen}
    >
      <Page>
        <List
          dataSource={['پروفایل', 'افراد', 'تنظیمات']}
          renderRow={title => (
            <ListItem key={title} onClick={onClose} tappable>
              {title}
            </ListItem>
          )}
        />
      </Page>
    </SplitterSide>
  )
}
export default Menu
