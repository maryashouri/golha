import React, { useState } from 'react'
import { Page, List, ListItem } from 'react-onsenui'

const Menu = () => {
  const [setIsOpen] = useState(false)

  const onClose = () => {
    setIsOpen(false)
  }

  return (
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
  )
}
export default Menu
